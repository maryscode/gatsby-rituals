import React, {useState, useEffect} from "react";
import styled from "styled-components";

export const SlideLocation = ({enableNextBtn, updateFormData, handleError, isReset}) => {
  const pills = document.querySelectorAll(".pill");
  const [inputText, setInputText] = useState("");
  const locationData = ["Kitchen", "Bathroom", "Garage", "Bedroom", "Living room", "Gym", "Restaurant", "Office", "Outside", "Stairs", "Yard", "Store", "Car"];

  useEffect(() => {
    if (isReset) {
      pills.forEach((element) => {
        element.classList.remove('selected');
      });
      setInputText('');
    }
  }, [pills, isReset]);

  const handleClick = (e) => {
    setInputText("");
    pills.forEach((element) => {
      element.classList.remove('selected');
    });
    e.target.classList.toggle("selected");
    updateFormData('location', e.target.value);
    enableNextBtn();
  }

  const handleChange = event => {
    let newValue = event.target.value;
    setInputText(newValue);
    pills.forEach((element) => {
      element.classList.remove('selected');
    });

    if (newValue.length > 1) { // Set min length
      updateFormData('location', newValue); 
      enableNextBtn();
    } else {
      handleError();
      updateFormData('location', '');
    }
  }; 

  return (
    <StyledSlide>
      <h2 className="!mx-0">Where does your ritual take place?</h2>
      <p className="!px-0 !text-[18px]">Select a location or write your own</p>
      <div className="flex flex-wrap justify-stretch justify-items-stretch mx-[-5px] mt-5">
        {locationData.map((pill, index) => {
          return (
            <button
              className="pill"
              key={`pill-${index}`}
              onClick={(e) => { handleClick(e) }}
              value={pill}
            >{pill}</button>
          )
        })}
      </div>
      <textarea
          className="mt-5 mb-[0]"
          maxLength="50"
          placeholder="Write your location"
          value={inputText}
          onChange={handleChange}
        />
    </StyledSlide>
  );
}

/* STYLES */
const StyledSlide = styled.div` 
  .pill {
    cursor: pointer;
    flex-grow: 1; 
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Nunito Sans';
    font-size: 16px;
    line-height: 1.5;
    text-align: center;
    color: #b83b4d;
    height: 38px;
    padding: 8px;
    border-radius: 19px;
    border: solid 2px #b83b4d;
    background-color: #fff;  
    margin: 0 5px 9px;
    transition: all .2s;
    font-weight: 700;
    @media (min-width: 768px){
    }
    &.selected {
      background: #b83b4d;
      color: #fff;
    }
    &:focus-visible {
      outline: solid 2px #b83b4d;
      outline-offset: 1px;
    }
  }
  textarea, 
  input[type="text"] {
    width: 100%;
    border-radius: 8px;
    border: 1px solid #707070;
    color: #707070;
    font-family: Nunito;
    font-size: 15px;
    font-weight: normal;
    line-height: 1.6;
    &::placeholder {
      color: #707070;
      font-family: Nunito;
      font-size: 15px;
      font-weight: normal;
      line-height: 1.6;
      text-transform: uppercase;
    }
    &:focus,
    &:active {
      border: 2px solid #000;
      outline: none;
    }

  }
  textarea {
    resize: none;
    height: 86px;
    padding: 15px 13px 9px 12px;
  }

`;
