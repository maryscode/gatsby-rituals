import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ExternalLink } from "../ExternalLink";
import closeButton from "../../images/close-btn.svg";

// import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Button } from "../Button";
// import { useHasScrollbar } from "../../hooks/useHasScrollBar";

/**
 * Component definition
 */
export const CookieBanner = () => {
  const [isHidden, setIsHidden] = useState(true);
  // TODO: useLocalStorage hook is not working as expected due to styled-components className caveat
  // Use this reference to make useLocalStorage work with styled-components:
  // const [isHidden, setIsHidden] = useLocalStorage("ins_cookie", false);
  let cookieSet = typeof localStorage !== "undefined" && localStorage.getItem("ins_cookie") === "true";
  useEffect(() => {
    setIsHidden(cookieSet);
  }, [cookieSet, setIsHidden]);
  //   let scrollbar = useHasScrollbar();
  //   console.log("scrollbar", scrollbar);
  return (
    <CookieBannerStyles className={`cookie-banner ${isHidden ? "hidden" : ""}`}>

      <div /*style={{ marginRight: scrollbar ? scrollbar : 0 + "px" }}*/>
        <CookieCloseButtonStyles
        tabIndex={isHidden ? -1 : 3}
        label="X"
        primary
        onClick={() => {
          cookieSet = true;
          setIsHidden(cookieSet);
          if (typeof localStorage !== "undefined") {
            localStorage.setItem("ins_cookie", "true");
          }
          // setIsHidden(true);
        }}
        >
          <img src={closeButton} alt="close icon" />
        </CookieCloseButtonStyles>        
        <div className="row">
          <img src="/images/cookie/cookies-icon.svg" alt="Cookies icon" className="w-[72px] h-[72px]" />
          <h2>This website uses cookies</h2>
        </div>
        <div>
          <span>
            By using this website, you accept our use of cookies as outlined by the Insmed{" "}
            <ExternalLink tabIndex={isHidden ? -1 : 2} isTrusted={true} href="https://insmed.com/privacy-policy/">
              Privacy Policy
            </ExternalLink>
            .
          </span>
          <span>
            <Button
              tabIndex={isHidden ? -1 : 1}
              className='!w-[160px] !mt-[0]'
              label="Accept"
              primary
              onClick={() => {
                cookieSet = true;
                setIsHidden(cookieSet);
                if (typeof localStorage !== "undefined") {
                  localStorage.setItem("ins_cookie", "true");
                }
                // setIsHidden(true);
              }}
            />
          </span>
        </div>
      </div>
    </CookieBannerStyles>
  );
};

const CookieCloseButtonStyles = styled.button`
  position: absolute;
  right: 13px;
  top: 13px;
  @media (min-width: 768px) {
    right: 15px;
    top: 15px;
  }
  img {
    height: 16px;
    width: 16px;
    @media (min-width: 768px) {
      height: 16px;
      width: 16px;
    }
  }


  

`;
const CookieBannerStyles = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  bottom: 0;
  margin: 0;
  width: 100%;
  z-index: 1000;
  transition: transform 0.3s ease-in-out;
  &.hidden {
    transform: translateY(100%);
  }
  h2 {
    margin: 0 0 12px 0;
    color: #000000;
    font-size: 26px;
    line-height: 1.3;
    font-weight: 700;
    @media (min-width: 768px) {
      display: inline;
      margin-bottom: 0;
      margin-left: 12px;
    }
  }
  & > div {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 18px 19px 24px;
    box-shadow: 0 3px 25px 0 rgba(0, 0, 0, 0.11);
    max-width: 617px;
    background-color: #ffffff;
    border-radius: 8px 8px 0 0;
    @media (min-width: 768px) {
      align-items: flex-start;
      padding: 24px 36px;
      flex-shrink: 0;
      max-width: 772px;
    }    
    & > div {
      display: flex;
      flex-direction: column;
      align-items: space-between;
      justify-content: center;
      width: 100%;
      & > span:nth-child(1) {
        margin-bottom: 20px;
        @media (min-width: 768px) {
          margin-bottom: 0;
          margin-right: 45px;
        }
      }
      & > span:nth-child(2) {
        @media (min-width: 768px) {
          margin-right: 85px;
        }
      }
      @media (min-width: 768px) {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: auto;
      }
    }
  }
  img {
    margin: 0 auto 12px;
    @media (min-width: 768px) {
      display: inline;
      margin-bottom: 0;
    }
  }
`;
