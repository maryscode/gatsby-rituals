import React from "react";

import { Button } from "../components/Button";
import Layout from "../components/Layouts/Layout";
import { HeadApi } from "../components/HeadApi";
import icon from "../images/icon-500-error.svg";
import styled from "styled-components";


export const Head = () => <HeadApi page="internalServerError" />;

const InternalError = () => {
  return (
    <>
      <Layout theme={`single`} bg={false}>
        <ContainerStyles className="container flex justify-center items-center text-center ">
          <div><h1 className="!mb-[20px]">This can’t BE right</h1></div>
          <div className="flex justify-center items-center">
            <img src={icon} className="w-[72px] h-[72px]" alt="500 Error icon" />
            <p className="!my-0">Sorry we aren’t responding. Let’s get you back where you started.</p>
          </div>
          
          <div className="button-row-center">
            <Button to="/" className="button">
              Home
            </Button>
          </div>
        </ContainerStyles>
      </Layout>
    </>
  );
};

export default InternalError;

const ContainerStyles = styled.div`
  background: #f0f0f0;
  max-width: 510px !important;
  padding: 30px 0;
  margin-top: 40px;
  margin-bottom: 80px;
  @media (min-width: 768px) {
    /* margin-top: 66px; */
    margin-bottom: 120px;
  }
  p {
    max-width: 258px;
    text-align: left;
    margin-left: 12px;
   }
`;