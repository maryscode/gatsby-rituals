import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { CharacterData }  from "../../data/CharacterData";

export const SlideCharacter = ({ enableNextBtn, updateFormData, handleError, isReset }) => {
  let thumbnails = document.querySelectorAll(".thumbnail img");
  const [gridStart, setGridStart] = useState(0);
//   const linkRef = useRef(null);
  const slideRef = useRef(null);

  useEffect(() => {
    if (isReset) {
      thumbnails.forEach((element) => {
        element.classList.remove('selected');
      });
    }
  }, [thumbnails, isReset]);


  const handleClick = (e) => {    
    const selectedCharacter = e.currentTarget.attributes.formvalue.value,
          clickedImage = e.currentTarget.firstChild;
        
    thumbnails = document.querySelectorAll(".thumbnail img");    
    
    thumbnails.forEach((element) => {
      if (element === clickedImage) {
        clickedImage.classList.toggle("selected");
      } else {
        element.classList.remove('selected');
      }
    });

    updateFormData('character', selectedCharacter);
    enableNextBtn();
  }

  const handleGridNav = (e) => {
    handleError();
    slideRef.current.focus();
    const newStart = gridStart + 9;
    if (newStart < CharacterData.length) {
      setGridStart(newStart);  
    } else {
      setGridStart(0);
    }
  }

  return (
    <StyledSlide ref={slideRef}>
      <h2 className="!mx-0">Choose a character for your ritual</h2>      
      <p className="!mx-0 !text-[18px]">Select one</p>
      <div className="w-[279px] h-[279px] mx-auto my-5 grid grid-cols-3 gap-6">
      
        {CharacterData.map((img, index) => {
          if ((index >= gridStart) && (index < (gridStart + 9))) {
            return (
              <button
                key={`thumbnail-${index}`}
                onClick={(e) => { handleClick(e) }}
                className={`thumbnail font-bold text-[#b83b4d] cursor-pointer w-[77px] h-[77px]`}
                formvalue={`CHARACTER ${index + 1}`}
              >
                <img src={`/images/mural/${img.filename}`} alt={img.alt} className="w-[77px] h-[77px] mx-auto"
                />
            </button>
            )
          } else {
            return false;
          }

        })}
        
      </div>

      {/* <button ref={linkRef} className="btn-more font-bold text-[#b83b4d] cursor-pointer mb-[0] mt-[10px]" onClick={handleGridNav}>Show me more</button> */}

    </StyledSlide>
  );
}

/* STYLES */
const StyledSlide = styled.div` 

  @media (hover: hover) { // hover only on mouse/desktop
    .btn-more:hover {
        color: #750010;
    }
  }
 .selected {
  box-sizing: border-box;
   border: 4px solid #b83b4d;
   transform: scale(1.2);
   transition: all .2s;
  }
  .thumbnail:focus {
    outline: 2px solid #b83b4d;
  }
  button {
    @media (max-width: 767px) {
        &:focus {
            color: #b83b4d;
        }
    }
  }
`;
