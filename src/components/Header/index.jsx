import React from "react";
import { Link } from "gatsby";
import { BrandStyles } from "./styles";
import styled from "styled-components";
import Moniker from "../Moniker";


/**
 * Component definition
 */

export const Header = ({ ...props }) => {
  return (
    <>
      <BrandStyles className={`${props.className}`}>
        <DefaultStyles className={`hero`}>
          <div className="hero-container">
            <div className="hero-text">
              <Link tabIndex="0" to="/">
                <Moniker/>
              </Link>
            </div>
          </div>
        </DefaultStyles>
      </BrandStyles>
    </>
  );
};

/**
 * Component default styles
 */

const DefaultStyles = styled.header`
  .hero-container {
    background-color: #1e1e1e;
    padding-top: 10px;
    @media (min-width: 768px) {
      padding-top: 0;
      background-color: transparent;
    }
    .hero-text {
      padding: 0;
      margin: 0;
      text-align: center;
      height: 75px;
      display: flex;
      align-items: center;
      justify-content: center;
      @media (min-width: 768px) {
        height: auto;
        padding: 40px 0 0 0;
        margin: 0px 0px 84px;
      }
      a {
        text-decoration: none;
        display: inline-block;
        border-radius: 8px;
      }
      img.moniker-desktop {
        
        @media (min-width: 768px) {
          
          margin: 0;
          width: 250px;
          height: 134px;
        }
      }
      img.moniker-mobile {
        margin: 0;
        width: 106px;
        height: 56px;
   
      }
    }
  }
`;
