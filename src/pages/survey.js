import React, { useState, useRef, useEffect } from "react";

import { Form } from "../components/Form";
import Layout from "../components/Layouts/Layout";
import { Survey } from "../components/Survey";
import { TextInput } from "../components/TextInput";
import Modals from "../components/Modals";
import {GATSBY_API_ENDPOINT} from "../constants";
import { HeadApi } from "../components/HeadApi";
export const Head = () => <HeadApi page="survey" />;

const SurveyPage = () => {
  const [successModalOpen, setSuccessModalOpen] = useState(false);

  const formRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
        const url = new URL(window.location.href);
    
        const userId = url.searchParams.get('patient_id');
        if (formRef.current && userId) {
          formRef.current.setValue("email", userId);
        }
    }
  }, [formRef]);

  const onSubmit = (formData) => {

    const data = {
      "PATIENT_ID": formData.email,
      "SURVEY_FEEDBACK": formData.topics ? formData.topics.join('~') : ""
    };
    
    const serviceName = "PatientSurvey";

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
          <Form ref={formRef} resetOnSubmit={true} onSubmit={onSubmit} submit="Submit">
            <h1 className="small">We want to hear from you</h1>
            <p className="!mb-[36px]">
              Let us know what you’d like to hear more about so that we can
              tailor future communications to topics you are most interested in.
            </p>
            <TextInput
              name="email"
              hidden={true}
              useForm={true}
            />
            <Survey useForm={true} required={"noerrors"} />
          </Form>

          <Modals.SurveyConfirmation
            isOpen={successModalOpen}
            setOpen={setSuccessModalOpen}
          />
        </div>
      </Layout>
    </>
  );
};

export default SurveyPage;
