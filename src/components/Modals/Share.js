import React, { useRef, useEffect } from "react";
import ModalContainer from "../Modal";
import Modals from "../Modals";
import { ModalContentContainerDiv } from "./styles";
import styled from 'styled-components';

// TO DO: this is the same across many Modals, it should be a component or parent shared by all ModalContents
export const Share = ({ isOpen, setOpen }) => {
  const ModalContainerRef = useRef(null);
  const openCloseModal = () => {
    setOpen(!isOpen);
  };
  return (
    <ModalContainer ref={ModalContainerRef} open={isOpen} setOpen={setOpen}>
      <ShareContent closeCallback={openCloseModal} />
    </ModalContainer>
  );
};




const ShareContent = ({ closeCallback }) => {
//   const [clearData, setClearData] = useState(false);  
  const handleCloseModal = () => {
    closeCallback();
  }

  useEffect(() => {
  }, []);  


  const handleCopyShareText = (e) => {
    const copyText = "Explore what real people are doing to live with and handle their bronchiectasis (BE) and add your unique habits to our community mural today. https://www.speakupinbronchiectasis.com/unseen-rituals";
    navigator?.clipboard && navigator.clipboard.writeText(copyText);
    const igButton = e.target.parentNode;
    const toggleTooltip = () => {
      igButton.classList.toggle('show');    
    }  
    const openIG = () => {
      toggleTooltip();
      window.location.replace("instagram://app");
    }  

    toggleTooltip();
    setTimeout(openIG, 1000);

    return;
  }  

  return (
    <ModalContentContainerDiv tabIndex={-1}>
      <Modals.ModalCloseButton onClick={handleCloseModal} />
      <StyledSection>
        <h2>Want to share this page?</h2>
        <p className="!text-[18px]">Select a platform:</p>
        <div className="share-socials flex justify-center mt-[21px] mb-0">
          <a className="mr-[25px]" target="_blank" rel="noreferrer" href={`https://www.facebook.com/sharer/sharer.php?u=https%3A//www.speakupinbronchiectasis.com/unseen-rituals`} >
            <img src="/images/footer/facebook-logo@2x.png" alt="Facebook icon" />
          </a>
          <button className="mr-[25px] tooltip-copy" onClick={(e) => handleCopyShareText(e)}>
            <img src="/images/footer/instagram-logo@2x.png" alt="Instagram icon"/>
          </button>
          <a target="_blank" rel="noreferrer" href={`https://twitter.com/intent/tweet?text=Explore%20what%20real%20people%20are%20doing%20to%20live%20with%20and%20handle%20their%20bronchiectasis%20(BE)%20and%20add%20your%20unique%20habits%20to%20our%20community%20mural%20today.%20https%3A//www.speakupinbronchiectasis.com/unseen-rituals%20`}
            data-size="large" className="mr-[25px]">
            <img src="/images/footer/x-logo@2x.png" alt="X icon" />
          </a>        
          <a className="" target='_blank' rel="noreferrer" href={`mailto:?subject=See the unseen rituals of BE&body=Explore what real people are doing to live with and handle their bronchiectasis (BE) and add your unique habits to our community mural today. https://www.speakupinbronchiectasis.com/unseen-rituals`}>
            <img src="/images/footer/small-email@2x.png" alt="Email icon" />
          </a>

        </div>
      </StyledSection>
    </ModalContentContainerDiv>
  );
};


/* STYLES */
const StyledSection = styled.div` 
    overflow: hidden;
    width: 100%;
  .share-socials img {
    max-width: none;
    height: 26px; 
    width: auto;
  }
  .tooltip-copy {
    position: relative;
    &:before {
      opacity: 0;
      position: absolute;
      bottom: 28px;
      left: 10px;
      content: 'Copied to clipboard!';
      display: block;
      width: 120px;
      height: auto;
      background: rgba(0,0,0,.9);
      color: #fff;
      text-align: center;
      border-radius: 6px;
      padding: 5px;
      font-size: 12px;
      transition: opacity .3s;
    }
  }
  .tooltip-copy.show:before {
    opacity: 1;
  }
`;