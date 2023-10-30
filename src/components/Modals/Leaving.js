import React, { useRef, useState } from "react";
import ModalContainer from "../Modal";
import Modals from "../Modals";
import { Button } from "../Button";
// import Underline from "../Underline";
import { ModalContentContainerDiv } from "./styles";

export const Leaving = ({ children, callBack }) => {
  const [open, setOpen] = useState(false);
  const ModalContainerRef = useRef(null);
  let href = "";

  const openLeavingModal = () => {
    setOpen(!open);
    try {
      callBack(!open);
    } catch (error) {
      console.log(`Modals Leaving, callBack error: ${error}`);
    }
    ModalContainerRef.current.classList.add("open");
  };

  const cloneChildren = (children) => {
    return React.Children.map(children, (child) => {
      let newChild = child;
      if (React.isValidElement(child) && child.props.href) {
        let componentProps = { ...child.props };
        componentProps.onClick = (e) => {
          e.preventDefault();
          openLeavingModal();
        };
        href = child.props.href;
        newChild = React.cloneElement(child, componentProps);
      }
      return newChild;
    });
  };

  return (
    <>
      {cloneChildren(children)}
      <ModalContainer ref={ModalContainerRef} open={open} setOpen={setOpen} ariaLabel="This dialog pop-up confirms whether you want to follow an offsite link not sponsored by Insmed">
        <LeavingSiteModalContent href={href} click={openLeavingModal} />
      </ModalContainer>
    </>
  );
};

const LeavingSiteModalContent = ({ href, click }) => {
  return (
    <ModalContentContainerDiv tabIndex='-1'>
      <Modals.ModalCloseButton onClick={click} />
      <h2 className="md:!px-[70px]">You are about to leave Speak Up In BE</h2>
      <div className="modal-padding">
        <p>
          The site you are linking to is not controlled or endorsed by Insmed, and we are not responsible for the content. In some cases, Insmed has provided
          funding to support the creation of content on these websites.
        </p>
        <p>Thank you for visiting Speak Up In BE!</p>
      </div>
      <span className="buttons">
        <Button
          href="cancel"
          onClick={(e) => {
            e.preventDefault();
            click();
          }}
          className="cancel"
        >
          Cancel
        </Button>
        <Button href={href} onClick={click}>
          OK
        </Button>
      </span>
    </ModalContentContainerDiv>
  );
};
