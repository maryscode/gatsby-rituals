import React, { useRef } from "react";
import { Button } from "../Button";
import ModalContainer from "../Modal";
import Modals from "../Modals";
import { ModalContentContainerDiv } from "./styles";

// this is the same across many Modals, it should be a component or parent shared by all ModalContents
export const SurveyConfirmation = ({ isOpen, setOpen }) => {
  const ModalContainerRef = useRef(null);

  const openCloseModal = () => {
    setOpen(!isOpen);
  };

  return (
    <ModalContainer ref={ModalContainerRef} open={isOpen} ariaLabel="This dialog pop-up confirms the successful submission of the survey">
      <SurveyConfirmationContent closeCallback={openCloseModal} />
    </ModalContainer>
  );
};

const SurveyConfirmationContent = ({ closeCallback }) => {
  return (
    <ModalContentContainerDiv tabIndex='-1'>
      <Modals.ModalCloseButton onClick={closeCallback} />
      <h2 className="small">Thanks for your response</h2>
      <div className="modal-padding">
        Your feedback will help us continue to provide useful information about
        bronchiectasis (BE).
      </div>
      <Button
        // TODO: can we not use a to="/" with Gatsby Link? seems like we'd need to preventDefault on the click event every time with to="" set?
        className="centered w-[160px]"
        to="/"
        onClick={closeCallback}
      >
        Home
      </Button>
    </ModalContentContainerDiv>
  );
};
