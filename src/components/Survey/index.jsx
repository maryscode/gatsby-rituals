import React from "react";
import styled from "styled-components";
import { Checkbox } from "../Checkbox";

/**
 * Component definition
 */
export const Survey = ({ className, useForm, required }) => {
  return (
    <CheckboxStyles
      name="topics"
      value={[
        "Information about bronchiectasis (BE)",
        "Tools or resources to help you talk to your doctor",
        "Exercise and travel tips",
        "Information or resources to help you explain BE to your loved ones",
        "A list of support groups in your area",
      ]}
      className={className}
      useForm={useForm}
      required={required}
    >
      <p className="bold">
        Tell us which topics would be most helpful to you.{" "}
        <span className="regular">(Select all that apply)</span>
      </p>
    </CheckboxStyles>
  );
};

const CheckboxStyles = styled(Checkbox)`
  &.survey-section {
    margin: 0 -19px 36px !important;
    padding: 36px 19px 16px 19px;
    @media (min-width: 768px) {
      margin: 0 -36px 36px !important;
      padding: 36px 36px 16px 36px;
    }
    background: #ebebeb;
  }
  p.bold {
    font-weight: bold;
  }
  span.regular {
    font-weight: normal;
  }
`;
