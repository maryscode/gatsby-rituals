import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import FocusLock from "react-focus-lock";
import styled from "styled-components";

const transitionTime = 175;

const ModalContainerDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 3000;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
  transition: opacity ${transitionTime / 1000}s ease-out;
  display: none;
  /* &:focus, &:active, *:focus, *:active {
    background: grey;
  }   */
  .focus-is-locked {
    margin: 0 !important;
    padding: 0 !important;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;            
  }
`;

const ModalContainer = React.forwardRef(({ open, setOpen, children, className, ariaLabel="Modal window" }, ref) => {
  const [mounted, setMounted] = useState(false);

  // focus lock
  useEffect(() => {
    const gatsbyContainer = document.getElementById("___gatsby");

    if (mounted && open) {
      let currentModal = ref.current;

      try {
        document.addEventListener(
          "focus",
          function (event) {
            if (open && !currentModal.contains(event.target)) {
              // contain tab focus in modal
              event.stopPropagation();
              currentModal.children[0].focus();
            }
          },
          true
        );
        ref.current.style.display = "flex";
        setTimeout(() => {
          ref.current.style.opacity = 1;
          currentModal.children[0].focus();
          gatsbyContainer.setAttribute("aria-hidden", "true");
        }, 50);
      } catch (error) {}
    } else {
      try {
        ref.current.style.opacity = 0;
        setTimeout(() => {
          if (ref.current) {
            ref.current.style.display = "none";
            gatsbyContainer.setAttribute("aria-hidden", "false");
          }
        }, transitionTime);
      } catch (error) {}
    }
  }, [open, mounted, ref]);

  // focus lock
  useEffect(() => {
    setMounted(true);
    return () => {
      setMounted(false);
    };
  }, []);

  return mounted
    ? createPortal(
        <ModalContainerDiv
          aria-label={ariaLabel}
          tabIndex={open ? null : -1}
          role="dialog"
          ref={ref}
          open={open}
          className={className}
          onClick={
            (e) => {
              if (e.target === ref.current) {
                try {
                  setOpen(false);
                } catch (error) {
                  console.log(`Close modal error: ${error}`);
                }
              }
            }
          }
        >
          <FocusLock className="focus-is-locked" disabled={!open}>{children}</FocusLock>
        </ModalContainerDiv>,
        document.querySelector("body")
      )
    : null;
});

export default ModalContainer;
