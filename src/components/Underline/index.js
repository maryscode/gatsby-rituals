import React from "react";
import styled from "styled-components";
import underlineBeInTheKnow from "../../images/underlines/be-in-the-know-2.svg";
import underlineUnseenRituals from "../../images/underlines/unseen-ritual.svg";

const Underline = ({ children, className}) => {
  let underlineImg;
  if (className === 'unseen-rituals') {
    underlineImg = underlineUnseenRituals;
  } else {
    underlineImg = underlineBeInTheKnow;
  }
  return <StyledUnderline className={className}>{children}<img src={underlineImg} alt="" /></StyledUnderline>;
};

export default Underline;

const StyledUnderline = styled.span`
  position: relative;
  img {
    position: absolute;
    bottom: -10px;
    left: -3px;
    width: 100%;
    height: auto;
  }
  &.be-in-the-know img {
    transform: scaleX(1.015);
    width: 203px;
    height: 17px;
    left: -2px;
  }  
  &.unseen-rituals img {
    width: 176px;
    height: 12px;
    bottom: -5px;
  }

`;