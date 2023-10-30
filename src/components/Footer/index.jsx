import React from "react";
import { Link } from "gatsby";
import { ExternalLink } from "../ExternalLink";
import styled from "styled-components";

/**
 * Component definition
 */
export const Footer = ({isHome, bgColor, className, isMural}) => {
  const customStyle = {
    backgroundColor: bgColor,
  }
  return (
    <>
      <DefaultStyle className={`${className}`} style={customStyle}>
        <div className={`footer-wrapper`}>
          <ExternalLink className="footer-link md:mr-[53px] footer-logo" href={`https://insmed.com/`} isTrusted={true}>
            <img src='/images/logo-insmed-incorporated.svg' alt="Insmed Incorporated logo" />
          </ExternalLink>
          <div className="footer-content-container">
            <div className="footer-links">
              <ExternalLink className="footer-link" href={`https://insmed.com/terms-of-use/`} isTrusted={true}>
                Terms of use
              </ExternalLink>
              <ExternalLink className="footer-link" href={`https://insmed.com/privacy-policy/`} isTrusted={true}>
                Privacy policy
              </ExternalLink>
              <Link className="footer-link" to="/site-map">
                Site map
              </Link>
              <Link className="footer-link" to="/accessibility-statement">
                Accessibility statement
              </Link>
            </div>
            <div className="footer-socials">
              <ExternalLink className="footer-link" href={`https://www.facebook.com/speakupinbe`}>
                <img src="/images/footer/facebook-logo@2x.png" alt="Facebook icon" />
              </ExternalLink>
              <ExternalLink className="footer-link" href={`https://www.instagram.com/speakupinbe`}>
                <img src="/images/footer/instagram-logo@2x.png" alt="Instagram icon" />
              </ExternalLink>
              <a className="footer-link" target="_blank" rel="noreferrer" href={`mailto:?subject=It's time to see BE differently!&body=Visit SpeakUpInBronchiectasis.com for updates and educational information about bronchiectasis (BE) for people living with this disease.`}>
                <img src="/images/footer/small-email@2x.png" alt="Email icon" />
              </a>
            </div>
            <div className="footer-copyright">
              <p>
                This site is for US audiences only. &copy; {new Date().getFullYear()} Insmed Incorporated. All Rights Reserved. Insmed is a trademark of Insmed Incorporated. All other trademarks are property of their respective owner. NP-BE-US-{isMural ? "00277" : "00084"}
              </p>
            </div>
          </div>
        </div>
      </DefaultStyle>
    </>
  );
};

/**
 * Component styles
 */
const DefaultStyle = styled.footer`
  padding: 80px 33px;
  @media (min-width: 768px) {
    padding: 100px 0 98px;
  }
  * {
    font-size: 14px;
    line-height: 18px;
  }    

  .footer-wrapper {
    display: flex;
    position: relative;
    max-width: 688px;
    margin-right: auto;
    margin-left: auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;  
  }
  .footer-content-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;  
    @media (min-width: 768px) {
      width: 100%;
      text-align: left;
      align-items: flex-start;
      justify-content: flex-start;
    }
  }
  .footer-wrapper {
    position: relative;
    max-width: 688px;
    margin-right: auto;
    margin-left: auto;
  }
  .footer-wrapper > div {
    @media (min-width: 768px) {
      flex-direction: column
    }
  }

  .footer-logo.footer-link {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    margin: 0;
    @media (min-width: 1000px) {
      position: absolute;
      top: 48px;
      left: -150px;
    }
    img {
      width: 121px;
      height: 40px;
    }
  }
  
  .footer-content-container {
    @media (min-width: 768px) {
      /* width: 688px;
      padding-right: 173px;
      box-sizing: content-box; */
    }
  }

  .footer-links {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    @media (min-width: 768px) {
      flex-direction: row;
    }

    a {
      text-decoration: underline;
    }
  }


  .footer-link {
      color: #000;
      margin-bottom: 20px;
      text-decoration: none;
      @media (min-width: 768px) {
        margin-right: 33px;
        margin-bottom: 25px;
      }
      &:hover {
        color: rgb(117, 0, 16);
      }
    }   


  .footer-socials {
    display: flex;
    a {
      margin-right: 40px;
    }
    a:last-child {
      margin-right: 0;
    }
    img {
      width: auto;
      height: 25px;
      max-width: none;
    }    
  }
  .footer-copyright p {
    max-width: 616px;
  }
`;
