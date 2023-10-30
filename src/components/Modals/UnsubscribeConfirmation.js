import React, { useRef } from "react";
import ModalContainer from "../Modal";
import Modals from "../Modals";
import { Button } from "../Button";
import { ModalContentContainerDiv } from "./styles";

// this is the same across many Modals, it should be a component or parent shared by all ModalContents
export const UnsubscribeConfirmation = ({ isOpen, setOpen }) => {
  const ModalContainerRef = useRef(null);

  const openCloseModal = () => {
    setOpen(!isOpen);
  };

  return (
    <ModalContainer ref={ModalContainerRef} open={isOpen} ariaLabel="This dialog pop-up confirms you have successfully unsubscribed from Speak Up In BE">
      <UnsubscribeConfirmationContent closeCallback={openCloseModal} />
    </ModalContainer>
  );
};

const UnsubscribeConfirmationContent = ({ closeCallback }) => {
  return (
    <ModalContentContainerDiv tabIndex='-1'>
      <Modals.ModalCloseButton onClick={closeCallback} />
      <h2 className="small md:!px-[50px]">You have successfully unsubscribed</h2>
      <div className="modal-padding">
        <p>Sorry to see you go. You will no longer receive communications from SpeakUpInBronchiectasis.com.</p>        
      </div>
      <Button
        // TODO: can we not use a to="/" with Gatsby Link? seems like we'd need to preventDefault on the click event every time with to="" set?
        className="centered !w-[160px]"
        to="/"
        onClick={closeCallback}
      >
        Home
      </Button>
    </ModalContentContainerDiv>
  );
};
