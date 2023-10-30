import React from "react";

import { Button } from "../components/Button";
import Layout from "../components/Layouts/Layout";
import icon from "../images/icon-404-error.svg";
import styled from "styled-components";

import { HeadApi } from "../components/HeadApi";
export const Head = () => <HeadApi page="pageNotFound" />;

const PageNotFound = () => {
  return (
    <>
      <Layout theme={`single`} bg={false}>
        <ContainerStyles className="container flex justify-center items-center text-center ">
          <div><h1 className="!mb-[20px]">You must BE lost</h1></div>
          <div className="flex justify-center items-center">
            <img src={icon} className="w-[72px] h-[72px]" alt="Error icon" />
            <p className="!my-0">Let’s get you back where you belong.</p>
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

export default PageNotFound;

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