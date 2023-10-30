import { createGlobalStyle } from "styled-components";
import { GlobalVars } from "./GlobalVars";

const ThemeGlobal = createGlobalStyle`

  * {
    /* transition: .1s 0s ease-in-out; */
  }

  html,
  body {
    color: ${GlobalVars.COLORS.black};
    font-family: 'Nunito Sans';
    /* font-size: 16px !important; */
    font-size: 18px !important;
    font-weight: normal;
    line-height: 24px;
    position: relative;
    min-height: 100vh;
  }

  #gatsby-focus-wrapper {
    position: absolute;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  
  main {
      margin: 0 auto;
      @media (min-width: 768px) {
        margin: 0 auto;
      }
      max-width: 688px;
      width: 100%;
      &.page-ats2023 {
          max-width: 936px;
      }
      &.page-home {
          max-width: 100%;
      }
      &.page-rituals {
          max-width: 100%;
      }
      &.page-book {
          max-width: 100%;
      }
  }
  footer {
    background-color: #fff;
    &.page-book {
        padding-top: 32px;
    }
  }
  body.modal-open {
    overflow: hidden;
    height: 100vh;
    width: 100vw;
    &.modal-signup {
        #modal-signup {
            display: flex;
        }
    }
    &.modal-response {
        #modal-response {
            display: flex;
        }
    }
    &.modal-unsubscribed {
        #modal-unsubscribed {
            display: flex;
        }
    }
  }

  a {
    color: ${GlobalVars.COLORS.burnBrick};
    font-weight: 800;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
    &:focus-visible {
        outline: 2px solid ${GlobalVars.COLORS.blazingRose};
    }
  }

  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    line-height: 2.75rem;
  }
  .container {
    /* background-color: rgba(255, 255, 255, 0.6); */
    background-color: #fff;
    padding: 36px 19px;
    margin: 0 auto;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: none !important;
    padding: 40px 19px;
    @media (min-width: 768px) {
      padding: 40px 0;
    }

    &.transparent {
      background: transparent;
    }
    h1 {
        font-size: 32px;
        font-weight: bold;
        line-height: 1.1;
        color: #000000;
        width: 100%;
        margin: 0 0 30px;
        text-align: center;
        @media (min-width: 768px) {
            font-size: 40px;
            margin: 0 0 20px;
            text-align: left;
        }
    }
    h2 {
        margin: 0 0 12px;
        width: 100%;
        font-size: 26px;
        font-weight: 800;
        line-height: 1.31;
    }
    p {
        width: 100%;
        margin: 0 0 24px;
    }
    ul {
        list-style: none;
        padding: 0;
        @media (min-width: 768px) {
            padding: 0;
        }
        margin: 0 0 24px;
        li {
            line-height: 1.38;
            margin-bottom: 8px;
            display: flex;
            flex-direction: row;
            &::before {
                content: "\\2022";
                color: #b83b4d;
                font-weight: bold;
                display: inline-block;
                margin-right: 8px;
            }
            &:nth-last-child(1) {
                margin-bottom: 0;
            }
        }
    }
    .register {
        margin: 0 0 36px;
    }
    .required-msg {
        color: #707070;
        font-size: 14px;
        margin: 0 0 20px;
    }
    .button-row {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        @media (min-width: 768px) {
            justify-content: flex-start;
        }
    }
    .button-row-centered {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }    
    .block {
        display: block;
    }
    
    form {
        label {
        align-items: stretch;
        display: inherit;
        flex-direction: inherit;
        }
        input {
          box-shadow: none;
        }
        input:-webkit-autofill,
        input:-webkit-autofill:hover, 
        input:-webkit-autofill:focus,
        textarea:-webkit-autofill,
        textarea:-webkit-autofill:hover,
        textarea:-webkit-autofill:focus,
        select:-webkit-autofill,
        select:-webkit-autofill:hover,
        select:-webkit-autofill:focus {
            background-color: transparent;
            border: 1px solid #ffffff;
            -webkit-text-fill-color: #000000;
            -webkit-box-shadow: 0 0 0px 1000px #fff inset;
            transition: background-color 5000s ease-in-out 0s;
        }
    }
    .ref-block {
        display: none !important;
    }
  }

  h2 {
    font-size: 1.625rem;
    font-weight: 800;
    line-height: 2.125rem;
  }

  .underline {
    display: inline-block;
    /* background-image: url('/images/components/underline@2x.png'); */
    background-image: url('/images/components/underline.svg');
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-position: center 105%;
    padding-bottom: 3% !important;
    &.small {
        background-size: 53% auto;
    }
  }

  p > strong, .bold {
    font-weight: bold;
  }

  .regular {
    font-weight: normal;
  }

  .wrapper {
    margin: auto;
    ${"" /* max-width: 500px; */}
  }

  .hide {
    display: none !important;
  }

  .show {
    display: block;
  }

  .site-title {
    font-size: 3rem;
    color: gray;
    font-weight: 700;
    margin: 3rem 0;
  }

  .text-sm {
    color: ${GlobalVars.COLORS.black};
    font-size: .875rem;
    line-height: 1rem;
  }

  .fpo {
    color: #ff00ff !important;
    padding: 0 !important;
    margin: 0 !important;
  }

  .flex-start {
    display: flex;
    flex-direction: column;
    align-items: flex-start !important;
  }

  .link {
    font-size: 16px;
    line-height: 1.5;
    text-decoration: underline;
    color: #000000;
    font-weight: normal;
    margin-bottom: 16px;
    &:hover {
        color: #750010;
    }
    &.bold {
        font-weight: bold;
    }
    &:nth-last-child(1) {
        margin-bottom: 0;
    }
  }

  input[type="checkbox"] {
    width: 20px;
    height: 20px;
    border-radius: 4px;
    border: solid 1px #707070;
    background-color: #ffffff;
  }
  .form {
    display: flex;
    flex-direction: column;
  }
  .hang-asterisk {
      text-indent: -7px;
      display: block;
  }

  /* a {
    &:active,
    &:focus,
    &:focus-visible,
    &:focus-within {
        outline: 3px solid ${GlobalVars.COLORS.heatedGold};
        outline: 3px solid #000000;
      border-radius: 4px;
      outline-offset: 4px;
    }
  } */

  .alert {
    img {
        margin-right: 8px;
        width: 18px;
        height: 18px;
    }
    font-size: 14px;
    line-height: 20px;
    color: #b83b43;
    font-weight: bold;
    display: flex;
    flex-grow: 0;
    margin-top: 4px;
    width: 100%;
  }

  .has-error {
    color: #b83b43 !important;
  }
`;

export default ThemeGlobal;
