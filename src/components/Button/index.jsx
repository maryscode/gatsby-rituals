import React from "react";
import { Link } from "gatsby";
// import { AnchorLink } from "gatsby-plugin-anchor-links";
import styled from "styled-components";
import { GlobalVars } from "../Layouts/GlobalVars";

/**
 * Component definition
 */
export const Button = ({
  label,
  onClick,
  type,
  href,
  to,
  className,
  btnColor,
  children,
  tabIndex = 0,
}) => {
  type = type ? type : "button";
  let aProps = {};
  let as;
  if (href || to) {
    type = null;
    if (href) {
      as = "a";
      aProps = { href, target: "_blank", rel: "noopener noreferrer" };
    }
    if (to) {
      as = Link;
      aProps = { to };
      //   if (to.indexOf("#") > -1) {
      //     as = AnchorLink;
      //     aProps = { to, stripHash: true };
      //   }
    }
  }
  return (
    <ButtonStyle
      as={as}
      type={type}
      onClick={
        className?.indexOf("disabled") > -1
          ? (e) => {
            e.preventDefault();
            e.stopPropagation();
          }
          : onClick
      }
      {...aProps}
      tabIndex={className?.indexOf("disabled") > -1 ? -1 : tabIndex}
      className={`button ${className ? className : ""} ${btnColor ? btnColor : ""}`}
    >
      <span>{children ? children : label}</span>
    </ButtonStyle>
  );
};

/**
 * Component default styles
 */
const ButtonStyle = styled.button`
  &.button {
    margin: 36px auto 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1.3rem;
    border: 2px solid #b83b4d;
    outline-offset: 2px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    padding: 0 24px;
    position: relative;
    z-index: 1;
    background: ${GlobalVars.COLORS.blazingRose};
    font-family: "Nunito Sans";
    font-size: 1rem;
    font-weight: bold;
    line-height: 1.3rem;
    min-width: 136px;
    width: fit-content;
    height: 48px;
    text-decoration: none;
    color: ${GlobalVars.COLORS.white};
    box-sizing: border-box;
    transition: all .2s ease;
    @media (min-width: 768px) {
      margin: 36px 0 0;
      &.centered {
        margin-right: auto;
        margin-left: auto;
      }
    }


    & > span {
      border-radius: 1.3rem;
      color: ${GlobalVars.COLORS.white};
      margin: 0;
      padding: 0;
      display: inline;
      width: auto;
    }
    /* :before {
      background: ${GlobalVars.COLORS.burnBrick};
      border-radius: 1.3rem;
      content: "";
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      transition: transform 0.3s ease-in-out;
      width: 100%;
      z-index: -1;
      transform: translateX(-102%);
    } */

    &:active,
    &:hover {
      span {
        /* color: ${GlobalVars.COLORS.burnBrick}; */
      }
      background: ${GlobalVars.COLORS.burnBrick};
      border-color: ${GlobalVars.COLORS.burnBrick};
      text-decoration: none;
      /* :before {
        transform: translateX(0%);
      } */
    }

    &:active {
      transform: scale(90%);
      border-radius: 1.3rem;
      /* border-color: #000;
      :before {
        background: #000;
      } */
    }

    &:focus {
      border-radius: 1.3rem;
      outline: 0;
    }
    &:focus-visible {
      outline: 2px solid ${GlobalVars.COLORS.blazingRose};
      border-radius: 1.3rem;
    }
    &.cancel {
      margin-right: 15px;
      background-color: ${GlobalVars.COLORS.white};
      span {
        color: ${GlobalVars.COLORS.blazingRose};
      }
      &:hover { 
        background-color: ${GlobalVars.COLORS.burnBrick};
        span { color: #ffffff;}
      }
    }
    &.disabled {
      color: #696969;
      background-color: #ebebeb;
      cursor: not-allowed;
      border: 2px solid #ebebeb;
      span {
        color: #696969;
      }
      &:hover {
        :before {
          transform: translateX(-101%);
        }
      }

      &:active {
        transform: scale(100%);
      }

      &:focus,
      &:focus-visible,
      &:focus-within {
        //outline: 0;
      }
    }

  }
`;
