import styled from "styled-components";
import { GlobalVars } from "../Layouts/GlobalVars";

export const ModalContentContainerDiv = styled.div`
  position: relative;
  background-color: rgb(255, 255, 255);
  text-align: center;
  border-radius: 8px;
  max-width: 89.333333%;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
  width: 512px;
  padding: 30px 0;
  @media (min-width: 768px) {
    padding: 36px 0;
  } 

  h2 {
    font-size: 26px;
    line-height: 34px;
    font-weight: 700;
    color: #000000;
    margin: 0 auto 20px;
    padding: 0 20px;   
    span {
      font-size: 26px;
    }
  }
  span {
    font-size: 18px;
    line-height: 24px;
    color: #000000;
    text-align: center;
  }
  .modal-padding {
    margin: 0 auto;
    padding: 0 20px;
    @media (min-width: 768px) {
      margin: 0;
      padding: 0 36px;
    }
  }
  p {
    font-size: 18px;
    line-height: 24px;
    color: #000000;
    margin: 0 auto 16px;
    /* padding: 0 20px; */
    text-align: center;
    &:nth-last-of-type(1) {
      margin-bottom: 0;
    }

  }
  .buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    margin: 0;
    padding: 0;
    padding-top: 36px;
    .button {
      width: 136px;
      margin: 0;
      @media (min-width: 768px) {
        width: 160px;
      }
    }
    .cancel {
      margin-right: 15px;
      background-color: ${GlobalVars.COLORS.white};
    }
  }
  a.close-btn {
    position: absolute;
    top: 13px;
    right: 13px;
    @media (min-width: 768px) {
      top: 15px;
      right: 15px;
    }

    img {
      width: 13px;
      height: 13px;
      @media (min-width: 768px) {
        width: 16px;
        height: 16px;
      }
    }  
  }
  .addressesPadding {
    margin: 0 20px 10px;
    @media (min-width: 768px) {
      margin: 0 36px 0px;
    }
  }
  .addressErrorPadding {
    margin-bottom: 0;
  }
  .addresses {
    margin-top: 36px;
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
      flex-direction: row;
    }

    justify-content: flex-start;
    align-items: flex-start;
    .address {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;
      width: 100%;
      @media (min-width: 768px) {
        width: 50%;
      }
      .their-address,
      .your-address {
        /* text-transform: uppercase; */
      }
      &.hide {
        display: none;
      }
    }
    
  }
  form {
    width: 100%;
  }

  label.radio {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    line-height: 1.25;
    cursor: pointer;
    & > span:nth-child(1) {
      flex-shrink: 0;
      flex-grow: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: solid 1px #707070;
      background-color: #ffffff;
      margin-right: 10px; 
      input {
        display: none;
      }
      .radio-fill {
        display: block;
        width: 10px;
        height: 10px;
        background-color: transparent;
        border-radius: 50%;
        /* margin: 4px; */
      }
      &[aria-checked="true"] {
        .radio-fill {
          background-color: #b83b4d;
        }
        path {
          /* fill: #fcc454 !important; */
        }
      }
      &:focus-visible {
        border: solid 1px #fcc454;
        outline: solid 1px #fcc454;
      }
    }
    & > span:nth-child(2) {
      flex-basis: calc(100% - 20px);
    }
  }
  .radio-error > span:nth-child(1):not(.alert) {
    border: solid 2px #b83b43 !important;
  }
  .generated-address {
    span {
      display: block;
      margin: 0 0 8px;
      @media (min-width: 768px) {
        margin: 0 0 8px;
      }
      &.their-address,
      &.correct_address {
        margin: 0 0 10px;
      }
    }
  }
  label.address:nth-last-child(1) {
    span:nth-last-child(1) {
      .their-address {
        margin: 0;
      }
    }
  }

  // Post Office Validator Modal Styles
  &.post-office-validator, 
  &.post-office-validator h2, 
  &.post-office-validator p,
  &.post-office-validator span {
    text-align: left;
  } 
  &.post-office-validator h2 {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
    padding: 0 19px;
    box-sizing: border-box;
    @media (min-width: 768px) {
      padding: 0 36px;
    }
  }
`;

export const ModalCloseButtonStyles = styled.a`
  position: absolute;
  top: 9.4px;
  right: 9.4px;
`;
