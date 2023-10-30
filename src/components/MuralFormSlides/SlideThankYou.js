import React from "react";
import styled from "styled-components";


export const SlideThankYou = () => {
  return (
    <StyledSlide>
      <h2>Thank you for submitting!</h2>
      <p><strong>While we’d love to share everything we receive, we’ll be selecting a few each month to add to our mural. Check back to see if we post yours!</strong></p>
      <div className="text-center mb-5">
        <img src="/images/mural/icon-bronchiectasis-mural.svg" alt="Paintbrush icon"  className="w-[55px] h-[59px] mx-auto" />
      </div>
      <p className="!mb-0">Interested in receiving more information and resources about&nbsp;BE?</p>
      {/* <Button
        className="centered !w-[150px] !mt-[30px] md:!mt-[36px]"
        to="/"
      >
        Learn more
      </Button> */}

      
      
    </StyledSlide>
  );
}

/* STYLES */
const StyledSlide = styled.div` 
  p {
    margin: 0 0 20px;
  }
`;
