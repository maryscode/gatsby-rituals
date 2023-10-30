import React, { useState } from "react";

import { Form } from "../components/Form";
import { TextInput } from "../components/TextInput";
import { Checkbox } from "../components/Checkbox";
import Layout from "../components/Layouts/Layout";
import Modals from "../components/Modals";
import {GATSBY_API_ENDPOINT} from "../constants";
import { HeadApi } from "../components/HeadApi";
export const Head = () => <HeadApi page="unsubscribe" />;

const Unsubscribe = () => {
  const [successModalOpen, setSuccessModalOpen] = useState(false);

  const onSubmit = (formData) => {
    
    const data = {
        "PATIENT_EMAIL_ADDRESS": formData.email,
        "UNSUBSCRIBING_REASON": formData.topics ? formData.topics.join('~') : ""
    };
    const serviceName = "PatientUnsubscribe";

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
        }
      })
      .catch(error => console.error(`error returning from /dtc/aws`));

  };

  return (
    <>
      <Layout theme={`single`} bg={false}>
        <div className="container">
          <h1 className="">Unsubscribe</h1>
          <p className="!mb-[36px]">
          I would like to unsubscribe from SpeakUpInBronchiectasis.com.
          </p>
          <Form resetOnSubmit={true} submit="Submit" hasRequired={true} onSubmit={onSubmit}>
            <TextInput
              name="email"
              label="email*"
              required={true}
              pattern="email"
              requiredMessage="The email address field cannot be blank."    
              message="Email address should follow the format user@domain.com."
              useForm={true}
              style={{ marginBottom: "36px" }}
            />
            <Checkbox
              name="topics"
              value={[
                "I received emails too often.",
                "I was not happy with the email content.",
                "I’m no longer interested in receiving this information.",
                "I don’t recall signing up to receive emails.",
              ]}
              useForm={true}
            >
              <p className="bold">What is your reason for unsubscribing?</p>
            </Checkbox>
          </Form>

          <Modals.UnsubscribeConfirmation
            isOpen={successModalOpen}
            setOpen={setSuccessModalOpen}
          />
        </div>
      </Layout>
    </>
  );
};

export default Unsubscribe;
