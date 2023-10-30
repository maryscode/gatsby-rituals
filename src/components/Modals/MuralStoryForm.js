import React, { useRef, useState, useEffect } from "react";
import ModalContainer from "../Modal";
import Modals from "../Modals";
import { ModalContentContainerDiv } from "./styles";
import Slides from "../MuralFormSlides";
import {GATSBY_API_ENDPOINT} from "../../constants";
import styled from 'styled-components';
import { Button } from "../Button";
import { GlobalVars } from "../Layouts/GlobalVars";


// TO DO: this is the same across many Modals, it should be a component or parent shared by all ModalContents
export const MuralStoryForm = ({ isOpen, setOpen }) => {
  
  const ModalContainerRef = useRef(null);

  const openCloseModal = () => {
    setOpen(!isOpen);
  };
  return (
    <ModalContainer ref={ModalContainerRef} open={isOpen} setOpen={setOpen} ariaLabel="These dialog pop-ups confirm the successful submission of an unseen ritual in bronchiectasis (BE)">
      <MuralStoryFormContent closeCallback={openCloseModal} />
    </ModalContainer>
  );
};

const MuralStoryFormContent = ({ closeCallback }) => {
  const [formData, setFormData] = useState({});
  const [clearData, setClearData] = useState(false);
  const carouselRef = useRef(null);
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastSlide, setLastSlide] = useState(false);
  const [submitBtn, setSubmitBtn] = useState(false);
  const [nextBtn, setNextBtn] = useState(false);
  const slideData = ["SlideCharacter", "SlideLocation", "SlideRitual", "SlideThankYou"];

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
      setCurrentIndex(currentIndex);
      containerRef.current.focus();
    }
    //console.log(currentIndex);
  }, [currentIndex]);  

  function updateFormData(prop, val) {
    const name = prop;
    const value = val;
    setFormData(values => ({ ...values, [name]: value }))
  }

  function enableNextBtn() {
    setNextBtn(true);
    setClearData(false);
  }
  function disableNextBtn() {
    setNextBtn(false);
    setSubmitBtn(false);
  }
  function disableSubmitBtn() {
    setSubmitBtn(false);
  }
  function enableSubmitBtn() {
    setSubmitBtn(true);
  }

  const handleNext = (i) => {
    
    if (formData.location) { // TO DO: refactor this so it's based on form data/values 
      setNextBtn(true);
    } else {
      setNextBtn(false);
    }
    if (formData.ritual) { // TO DO: refactor this so it's based on form data/values 
      setSubmitBtn(true);
    } else {
      setSubmitBtn(false);
    }
    setCurrentIndex((currentIndex + 1));
    
  };  
  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1));
    setLastSlide(false);
    setNextBtn(true);
    setSubmitBtn(true);
  };
  const handleNavigation = (index) => {
    setCurrentIndex(index);
    if (index === 3) {
      setLastSlide(true);

    } else {
      setLastSlide(false);
    }
  };  
  const resetForm = () => {
    disableNextBtn(true);
    setClearData(true);
    setCurrentIndex(0);
    setLastSlide(false);
    setFormData({});
  }
  const handleSubmit = () => {
    // console.log(formData);
    
    const data = {
      "Name": formData.name,
      "Picture_Id": formData.character,
      "Location": formData.location,
      "Story": formData.ritual,
    };
    
    const serviceName = "MuralPage";

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
          setCurrentIndex((currentIndex + 1));
          setLastSlide(true);
        }
      })
      .catch(error => console.error(`error returning from /dtc/aws`));

  }

  const handleCloseModal = () => {
    closeCallback();
    setTimeout(resetForm, 500); // Prevent jumping to start while modal closes
  }
  
  return (
    <ModalContentContainerDiv ref={containerRef} tabIndex='-1' className="!pb-[20px] md:!pb-[30px]" >
      <Modals.ModalCloseButton onClick={handleCloseModal} />
      <StyledCarousel>
        <div className="carousel-container">
          <div ref={carouselRef} className={`carousel active-slide-${currentIndex}`}>   
            <div className="carousel-item">
              <Slides.SlideCharacter enableNextBtn={enableNextBtn} updateFormData={updateFormData} handleError={disableNextBtn} isReset={clearData} />
            </div>
            <div className="carousel-item">
              <Slides.SlideLocation enableNextBtn={enableNextBtn} updateFormData={updateFormData} handleError={disableNextBtn} isReset={clearData} />
            </div>
            <div className="carousel-item">
              <Slides.SlideRitual enableSubmitBtn={enableSubmitBtn} updateFormData={updateFormData} handleError={disableSubmitBtn} isReset={clearData}  />
            </div>
            <div className="carousel-item">
              <Slides.SlideThankYou />
            </div>
              
          </div>
        </div>
        <div className="navigation px-[19px]">
          
          {/* NEXT BUTTON */}
          {(currentIndex < (slideData.length - 2)) &&
            <Button
              onClick={handleNext}
              className={`centered next  ${nextBtn ? '' : 'disabled' } !w-[136px]`}
            >
              Next
            </Button>
          }
          
          {/* SUBMIT BUTTON */}
          {currentIndex === (slideData.length - 2) &&
            <Button
              onClick={handleSubmit}
              className={`centered !w-[150px] !mt-[30px] md:!mt-[20px] ${submitBtn ? '' : 'disabled' }`}
            >
              Submit
            </Button>}
          
          {/* LAST BUTTON: added here instead of last slide to prevent ADA outline getting cut off due to oveflow:hidden */}
          {(currentIndex === slideData.length -1) &&
            <Button
              className="centered !w-[150px] !mt-[30px] md:!mt-[36px]"
              to="/"
            >
              Learn more
            </Button>          
          }
          
          {/* Breadcrumbs */}
          <div className="nav-progress mx-auto relative">
            {slideData.map((button, index) => {
              return (
                <button
                  tabIndex={index === currentIndex ? '-1' : null}
                  disabled={currentIndex < index || lastSlide}
                  key={`progress-${index}`}
                  className={`indicator ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => handleNavigation(index)}
                  aria-label="Progress navigation"
                />
              )
            })}
          </div>

          {/* Navigated controls */}
          {currentIndex > 0 &&
            <div className="flex justify-center relative mt-[20px] md:mt-[30px] h-[26px]">
              {!lastSlide &&
                <button className="go-back absolute top-[2px] left-0" onClick={handlePrev}>
                  <img src="/images/mural/back-arrow.svg" className="w-[13px] h-[26px]" alt="Back arrow" />
                </button>
              }
              <button className="start-over font-bold text-[#b83b4d] hover:text-[#750010] cursor-pointer !text-[18px]" onClick={resetForm}>
                {lastSlide ? 'Share another ritual' : 'Start over'}
              </button>
            </div>
          }          
        </div>
      </StyledCarousel>
    </ModalContentContainerDiv>
  );
};









/* STYLES */
const StyledCarousel = styled.div` 
    overflow: visible;
    width: 100%;
  .carousel-container {
    overflow: hidden;
    width: 100%;
  }
  .carousel {
    display: flex;
    transition: opacity 0.5s ease-in-out;
  }
  .carousel-item {
    width: 100%;
    box-sizing: border-box;
    flex-shrink: 0; 
    padding: 0 19px;
    height: 0;
    visibility: hidden;
    @media (min-width: 768px) {
      padding: 0 36px;
    }
  }
  .carousel-item h2 {
    padding: 0;
  }
  .active-slide-0 .carousel-item:nth-of-type(1),
  .active-slide-1 .carousel-item:nth-of-type(2),
  .active-slide-2 .carousel-item:nth-of-type(3),
  .active-slide-3 .carousel-item:nth-of-type(4) {
    visibility: visible;
    height: auto; // hack to adjust heights of modal carousel slides
  }    
  .nav-progress {
    width: 81px;
    height: 9px;
    display: flex; 
    justify-content: space-between;
    margin-top: 20px;
    @media (min-width: 768px) {
      margin-top: 30px;
    }
    &:before{
      content: "";
      display: block;
      position: absolute;
      top: 4px;
      left: 3px;
      width: 76px;
      height: 1px;
      background-color: #676767;
    }
  }
  .indicator {
    position: relative;
    border: 2px solid #676767;
    height: 9px;
    width: 9px;
    border-radius: 5px;
    background: #fff;
    &.active {
      background-color: #676767;
    }
  }
  a.button.black {
      background-color: #000;
      border-color: #000;
  }
  /* button.button,
  a.button.black {
    transition: all .2s ease;
    &:before {
      display: none !important;
    }
    &:hover {
      background: ${GlobalVars.COLORS.burnBrick};
      border-color: ${GlobalVars.COLORS.burnBrick};
    }
    &.disabled {
      background-color: #ebebeb;
      border-color: #ebebeb;
    }
  } */
  button.button {
    margin-top: 30px;
  }
  .start-over, .go-back, .indicator {
    &:focus {
      outline: 0;
    }
    &:focus-visible {
      outline: solid 2px #b83b4d;
      outline-offset: 1px;
    }
  }
`;