import React, { useEffect, useState, useRef } from "react";
// import useKeyboardFocus from "../../hooks/useKeyboardFocus";
import { Form } from "../Form";
import { Checkbox } from "../Checkbox";
import { TextInput } from "../TextInput";
import { PlacesAutocompleteInput } from "../PlacesAutocompleteInput";
import {GATSBY_API_ENDPOINT} from "../../constants";
import { Select } from "../Select";
import Modals from "../Modals";
import { inProduction, poValidationKeys } from "../../constants/";
import { States, HealthcareProfessions } from "../../constants/Forms";
import { xmlToJson } from "../../utils";

export const SignUpForm = () => {
  const [addressUser, setAddressUser] = useState({});
  const [addressPostOffice, setAddressPostOffice] = useState({});
  const [addressError, setAddressError] = useState();
  const [postOfficeAddressData, setPostOfficeAddressData] = useState({});

  const [whichAddress, setWhichAddress] = useState("yours");

  const [poValidationOpen, setPoValidationOpen] = useState(false);
  const [successModalOpen, setSuccessModalOpen] = useState(false);

  const [formData, setFormData] = useState({});

  const formRef = useRef(null);
  const autoCompleteRef = useRef(null);

  const validatePostalAddress = (data) => {
    const fieldCity = `${data.city}`;
    const fieldState = `${data.state}`;

    let fieldZip;
    let fieldZip4 = "";
    if (data.zipcode.indexOf("-") > -1) {
      fieldZip = `${data.zipcode.substring(0, 5)}`;
      fieldZip4 = `${data.zipcode.substring(6, 10)}`;
    } else {
      fieldZip = `${data.zipcode}`;
    }

    const poUserId = inProduction ? poValidationKeys.production.userId : poValidationKeys.development.userId;
    const poProtocol = inProduction ? poValidationKeys.production.protocol : poValidationKeys.development.protocol;

    const addressToValidate = `<AddressValidateRequest USERID="${poUserId}"><Revision>1</Revision><Address ID="0"><Address1>${data.address_2
      }</Address1><Address2>${data.address_1}</Address2><City>${fieldCity}</City><State>${fieldState}</State><Zip5>${fieldZip}</Zip5>${fieldZip4 !== "" ? `<Zip4>${fieldZip4}</Zip4>` : `<Zip4/>`
      }</Address></AddressValidateRequest>`;
    const poRequest = `${poProtocol}://production.shippingapis.com/ShippingAPI.dll?API=Verify&XML=${encodeURIComponent(addressToValidate)}`;

    const xhr = new XMLHttpRequest();
    xhr.onload = function (e) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const xhrXml = xhr.responseXML;
          const jsonData = xmlToJson(xhrXml);
          const jsonString = JSON.stringify(jsonData);

          // check it the address is valid enough to pass through without the validation modal
          if (jsonData.AddressValidateResponse.Address.DPVFootnotes === "AABB" && jsonData.AddressValidateResponse.Address.DPVConfirmation === "Y") {
            // address is valid enough to pass through without the validation modal
            setFormData((formData) => ({ ...data }));
            return;
          }

          // user has to validate their address, something is wrong with it
          setPostOfficeAddressData(data);
          setPoValidationOpen(true);

          // console.log(`jsonData.AddressValidateResponse.Address.Address1 = ${jsonData.AddressValidateResponse.Address.Address1}`);
          if (jsonString.indexOf("Error") === -1) {
            const address = {
              address: `${jsonData.AddressValidateResponse.Address.Address2 !== undefined ? jsonData.AddressValidateResponse.Address.Address2 : ""}${jsonData.AddressValidateResponse.Address.Address1 !== undefined ? `, ${jsonData.AddressValidateResponse.Address.Address1}` : ""
                }`,
              address_1: jsonData.AddressValidateResponse.Address.Address2 !== undefined ? jsonData.AddressValidateResponse.Address.Address2 : "",
              address_2: jsonData.AddressValidateResponse.Address.Address1 !== undefined ? jsonData.AddressValidateResponse.Address.Address1 : "",
              city: jsonData.AddressValidateResponse.Address.City,
              state: jsonData.AddressValidateResponse.Address.State,
              zip: `${jsonData.AddressValidateResponse.Address.Zip5}${jsonData.AddressValidateResponse.Address.Zip4 === undefined || jsonData.AddressValidateResponse.Address.Zip4.toString() === "[object Object]"
                ? ``
                : `-${jsonData.AddressValidateResponse.Address.Zip4}`
                }`,
              criticalError: false,
            };

            try {
              if (
                jsonData.AddressValidateResponse.Address.DPVConfirmation.indexOf("N") > -1 ||
                jsonData.AddressValidateResponse.Address.DPVFootnotes.indexOf("M3") > -1
              )
                address.errorMessage = `Address not found`;
            } catch (e) { }
            try {
              if (
                jsonData.AddressValidateResponse.Address.DPVConfirmation.indexOf("D") > -1 ||
                jsonData.AddressValidateResponse.Address.Footnotes.indexOf("H") > -1
              )
                address.errorMessage = `An apartment or suite # may be required for this building`;
            } catch (e) { }
            try {
              if (
                jsonData.AddressValidateResponse.Address.DPVConfirmation.indexOf("S") > -1 ||
                jsonData.AddressValidateResponse.Address.DPVFootnotes.indexOf("CC") > -1
              )
                address.errorMessage = `Apartment or suite not found for this address`;
            } catch (e) { }
            try {
              if (
                jsonData.AddressValidateResponse.Address.DPVFootnotes.indexOf("CC") > -1 &&
                jsonData.AddressValidateResponse.Address.DPVConfirmation.indexOf("S") > -1
              )
                address.errorMessage = `No apartment or suite found at this address`;
            } catch (e) { }
            try {
              if (
                jsonData.AddressValidateResponse.Address.Footnotes.indexOf("BDN") > -1 &&
                jsonData.AddressValidateResponse.Address.DPVFootnotes.indexOf("AA") > -1
              )
                address.errorMessage = `Unable to verify address`;
            } catch (e) { }

            address.criticalError = false;

            setAddressPostOffice(address);
            setAddressError(address.errorMessage);
          } else {
            const address = {
              address: "",
              city: "",
              state: "",
              zip: "",
              errorMessage: "Post office cannot validate this address",
              criticalError: true,
            };
            setAddressPostOffice(address);
            setAddressError(address.errorMessage);
          }
        }
      }
    };
    xhr.onerror = function (e) {
      // router.push('/internal-server-error/');
    };

    xhr.responseType = "document";
    xhr.open("GET", poRequest);
    xhr.send();
  };

  const onSubmit = (data) => {
    // if the user has filled out address_1, city, and state then we need to validate the address, other wise we call submitFormData
    if (data.address_1 !== "" && data.city !== "" && data.state !== "") {
      setAddressUser({
        address: data.address_2 ? `${data.address_1}, ${data.address_2}` : data.address_1,
        city: data.city,
        state: data.state,
        zip: data.zipcode,
        errorMessage: "",
        userAddress: true,
      });
      validatePostalAddress(data);
    } else {
      setFormData((formData) => ({ ...data }));
    }
  };

  useEffect(() => {
    const submitFormData = (formData) => {
    
    const data = {
      PATIENT_FIRST_NAME: formData.first,
      PATIENT_LAST_NAME: formData.last,
      PATIENT_EMAIL_ADDRESS: formData.email,
      PATIENT_ADDRESS_LINE_1: formData.address_1,
      PATIENT_ADDRESS_LINE_2: formData.address_2,
      PATIENT_CITY: formData.city,
      PATIENT_STATE: formData.state,
      PATIENT_POSTAL_CODE: formData.zipcode,
      PATIENT_COUNTRY: "USA",
      ABOUT_REGISTRANT: formData.specialty,
      PATIENT_CONSENT: "Y",
    };

    const serviceName = "PatientRegistration";

    const payload = {
      "serviceName": serviceName,
      "data": data
    }

    fetch(`${GATSBY_API_ENDPOINT}/dtc/aws`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(payload)
    })
      .then(response => response.json())
      .then(data => {
        if (data.success === true) {
          setSuccessModalOpen(true);          
          formRef.current.resetTheForm();
          autoCompleteRef.current.resetAddress();
          setFormData({});
        }
      })
      .catch(error => console.error(`error returning from /dtc/aws`));
      
    };
    // check if the object formData is empty and has no keys
    if (Object.keys(formData).length === 0 && formData.constructor === Object) {
      // data is empty, likely this is the first time the component is rendered
    } else {
      submitFormData(formData);
    }
  }, [formData]);

  return (
    <>
      <Form
        submit="Sign up"
        hasRequired={true}
        isHome={true}
        onSubmit={onSubmit}
        // autoComplete="off"
        ref={formRef}
      >
        <TextInput name="first" label="first name*" required={true} requiredMessage="The first name field cannot be blank." useForm={true} autoComplete="given-name" />
        <TextInput name="last" label="last name*" required={true} requiredMessage="The last name field cannot be blank." useForm={true} autoComplete="family-name" />
        <TextInput
          name="email"
          label="email*"
          required={true}
          pattern="email"
          requiredMessage="The email address field cannot be blank."
          message="Email address should follow the format user@domain.com."
          useForm={true}
          autoComplete="email"
        />
        {/* <TextInput name="specify_specialty" label="specify specialty*" required={true} useForm={true} showOn={{ specialty: "Other" }} /> */}
        <PlacesAutocompleteInput name="address_1" label="address 1*" required={true} requiredMessage="The address field cannot be blank." useForm={true} ref={autoCompleteRef} autoComplete="address-line1" />
        <TextInput name="address_2" label="address 2" required={false} useForm={true} autoComplete="address-line2" />
        <TextInput name="city" label="city*" required={true} requiredMessage="The city field cannot be blank." useForm={true} autoComplete="address-level2" />
        <div className="row">
          <Select name="state" label="state*" required={true} message="Please select a state." none="Select State" options={States} useForm={true} autoComplete="address-level1" />
          <TextInput
            name="zipcode"
            label="zip code*"
            required={true}
            pattern="zipcode"
            requiredMessage="The ZIP Code field cannot be blank."
            message="Please enter a valid ZIP Code."
            useForm={true}
            autoComplete="postal-code"
          />
        </div>
        <div className="form-last">
          <Select
            name="specialty"
            label="I am a*"
            required={true}
            none="Select One"
            options={HealthcareProfessions}
            message="Please select an option."
            useForm={true}
            autoComplete="off"
          />     
        </div>
        {/* <Survey useForm={true} className="survey-section" /> */}
        <Checkbox name="agree" className="confirm" value={["yes"]} required={true} message="Please provide confirmation." useForm={true}>
          <span className="block">I confirm and agree to the following*:</span>
          <span className="block">
            Checking this box constitutes my signature and confirmation that I am over 18 years of age and that I am authorizing Insmed Incorporated, and
            persons and entities acting on Insmed’s behalf, to use the information I provide about myself (my “personal information”) to contact me via mail,
            email, or otherwise provide me with information about educational materials, market research, existing and future products, and services. I
            understand that I may opt out of my Speak Up In BE subscription at any time by clicking on the unsubscribe button in any communication I receive.
          </span>
        </Checkbox>
      </Form>

      <Modals.SignupConfirmation isOpen={successModalOpen} setOpen={setSuccessModalOpen} />
      <Modals.PostOfficeValidation
        isOpen={poValidationOpen}
        setPoValidationOpen={setPoValidationOpen}
        whichAddress={whichAddress}
        setWhichAddress={setWhichAddress}
        addressUser={addressUser}
        addressPostOffice={addressPostOffice}
        setAddressPostOffice={setAddressPostOffice}
        addressError={addressError}
        setFormData={setFormData}
        formData={postOfficeAddressData}
      />
    </>
  );
};
