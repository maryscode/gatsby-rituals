import React from "react";
import styled from "styled-components";
import Modals from "../Modals";
import { GlobalVars } from "../Layouts/GlobalVars";
import chevronRightHover from "../../images/chevron-down-arrow-burnt-brick.svg";
import chevronRight from "../../images/chevron-down-arrow-blazing-rose.svg";

/**
 * Component definition
 */
export const ExternalLink = ({ children, href, className, isTrusted, tabIndex }) => {
  let Leaving = isTrusted ? Modals.LeavingTrusted : Modals.Leaving;
  return (
    <Leaving>
      <ExternalLinkStyles target="_blank" rel="noreferrer" tabIndex={tabIndex} href={href} className={className} onClick={(e) => e.preventDefault()}>
        {children}
      </ExternalLinkStyles>
    </Leaving>
  );
};

const ExternalLinkStyles = styled.a`
  display: inline;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: fit-content;
  text-decoration: underline;
  color: ${GlobalVars.COLORS.blazingRose};
  &.arrow {
    margin-bottom: 20px;
    margin: 0 25px 20px;
    transition: all 0.3s ease-in-out;
    @media (min-width: 768px) {
      margin: 0 0 20px;
    }
    &:nth-last-of-type(1) {
      margin-bottom: 36px;
    }
    &:after {
      content: "";
      display: inline-block;
      width: 16px;
      height: 10px;
      background: url(${chevronRight}) no-repeat;
      margin-left: 12px;
      transition: all 0.3s ease-in-out;
      transform: rotate(-90deg);
    }
  }
  &:hover {
    color: ${GlobalVars.COLORS.burnBrick};
    &:after {
      margin-left: 20px;
      background: url(${chevronRightHover}) no-repeat;
    }
  }
  @media (min-width: 768px) {
    margin-left: 0;
    &.arrow {
      &:nth-last-of-type(1) {
        margin-bottom: 36px;
      }
    }
  }
`;
