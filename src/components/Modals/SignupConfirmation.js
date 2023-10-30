import React, { useRef } from "react";
import ModalContainer from "../Modal";
import Modals from "../Modals";
import { Button } from "../Button";
import { ModalContentContainerDiv } from "./styles";

// this is the same across many Modals, it should be a component or parent shared by all ModalContents
export const SignupConfirmation = ({ isOpen, setOpen }) => {
  const ModalContainerRef = useRef(null);

  const openCloseModal = () => {
    setOpen(!isOpen);
  };

  return (
    <ModalContainer ref={ModalContainerRef} open={isOpen} ariaLabel="This dialog pop-up confirms successful sign-up">
      <SignupConfirmationContent closeCallback={openCloseModal} />
    </ModalContainer>
  );
};

const SignupConfirmationContent = ({ closeCallback }) => {
  return (
    <ModalContentContainerDiv tabIndex='-1'>
      <Modals.ModalCloseButton onClick={closeCallback} />
      <h2>Thanks for signing up</h2>
      <div className="modal-padding">
        <p className="!mb-[40px] md:!mb-[30px]">You’re on the list to receive information and updates about bronchiectasis (BE). Look out for emails from Speak Up In BE Support.</p>
        <p><strong>Want more while you wait?</strong></p>
        <p>Explore Unseen Rituals in BE and share your own unique experience.</p>
      </div>
      <Button
        // TODO: can we not use a to="/" with Gatsby Link? seems like we'd need to preventDefault on the click event every time with to="" set?
        className="centered"
        to="/unseen-rituals"
        onClick={closeCallback}
      >
        View mural
      </Button>
    </ModalContentContainerDiv>
  );
};
