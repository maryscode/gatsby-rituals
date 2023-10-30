import React, {useState, useEffect} from "react";
import styled from "styled-components";

export const SlideRitual = ({ enableSubmitBtn, updateFormData, isReset, handleError }) => {
  const [inputText, setInputText] = useState("");
  const [inputTextarea, setInputTextarea] = useState("");
  const [characterLimit] = useState(150);

  useEffect(() => {
    if (isReset) {
      setInputTextarea('');
      setInputText('');
    }
  }, [isReset]);
  

  const handleChange = (e) => {
    let newValue = e.target.value;
    setInputTextarea(newValue);
    if (newValue.length > 5) {
      enableSubmitBtn();
      
      updateFormData('ritual', newValue);
    } else {
      handleError();
      updateFormData('ritual', '');
    }
  };

  const handleInputChange = (e) => {
    let name = e.target.value;
    setInputText(name);
    updateFormData('name', name);
  }

  return (
    <StyledSlide>
      <h2>Finally, <span className="whitespace-nowrap">explain your ritual</span></h2>
      <p className="!mb-5 !px-0 !text-[18px]">Share your brief story below. Be sure to exclude specific names and keep your language polite.</p>
      <div className="textarea-container">
        <textarea
          maxLength={characterLimit}
          placeholder="I have a separate set of pots and pans to sanitize all of my medical equipment."
          onChange={(e) => { handleChange(e) }}
          value={inputTextarea}
        />
        <div className="char-count">{inputTextarea.length}/{characterLimit}</div>
      </div>
      <input
        className="mt-[24px]"
        type="text"
        placeholder="First name or initials (optional)"
        onChange={(e) => { handleInputChange(e) }}
        value={inputText}
      />
    </StyledSlide>
  );
}

/* STYLES */
const StyledSlide = styled.div` 
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
    height: 172px;
    padding: 15px 13px 9px 12px;
  }
  input[type="text"] {
    padding: 15px 12px;
  }
  .char-count {
    position: absolute;
    bottom: 9px;
    right: 13px;
    font-family: 'Nunito';
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.71; 
    color: #707070;  
  }
  .textarea-container {
    position: relative;
    line-height: 0;
  }
`;
