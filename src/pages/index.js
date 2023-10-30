import React from "react";

import Layout from "../components/Layouts/Layout";
// import { References } from "../components/References";
import styled from "styled-components";
import { SignUpForm } from "../components/Forms/signup";
import { ExternalLink } from "../components/ExternalLink";
import Underline from "../components/Underline";
import { HeadApi } from "../components/HeadApi";
import { Button } from "../components/Button";
export const Head = () => <HeadApi page="index" />;

const IndexPage = () => {
  
  return (
    <>
      <Layout isHome={true} theme={`single`} className="page-home">
        <HomeStyles>
          <div className="container transparent hero">

            <div className="grid md:grid-cols-[auto_1fr] gap-0 text-center md:text-left">

              <h1 className="!self-end order-1 md:order-2 !mb-0">
                <span className="deserve block">You deserve to</span>
                <span className="seen block">BE seen</span>
              </h1>

              <img src={`/images/home/image-bronchiectasis-patient-jodi-desktop.png`} alt="Image of a real bronchiectasis (BE) patient, Jodi" className="hidden md:block seen-image w-[300px] border-r-transparent rounded-lg row-span-2 order-2 md:order-1 m-auto" />
              
              <img src={`/images/home/image-bronchiectasis-patient-jodi-mobile.png`} alt="Image of a real bronchiectasis (BE) patient, Jodi" className="block md:!hidden seen-image w-[300px] border-r-transparent rounded-lg row-span-2 order-2 md:order-1 m-auto"/>

              <div className="order-3 md:order-4 text-left md:mr-[90px]">
                <p><strong>Bronchiectasis (brong-kee-ek-tuh-suhs), or BE, is hard to say. And for many, it’s hard to live with.</strong></p>
                <p>That’s why Speak Up In BE is dedicated to bringing you information and resources no matter where you are in your BE journey.</p>
              </div>

            </div>

          </div>
          <div id="signup" className="container">
            <div className="row">
              <div>
                <div className="register">
                  <p><strong>The first resource we’re excited to offer is <em>SEEN</em>.</strong></p>
                  <p>This limited-edition book is full of stories, articles, and tips from real people living with BE. We aim to bring you hope,
                    connection, and a sense of belonging through the stories of <strong>Jodi,</strong> <strong>Allison,</strong> <strong>Amber,</strong> and <strong>Edna.</strong></p>
                </div>
                <img className="book-image show-on-mobile" src={`/images/home/image-seen-bronchiectasis-patient-stories-book-desktop.png`} alt="Seen book cover" />
                <h2 className="register-h2">Sign up below to secure your copy! Coming to you this fall</h2>
              </div>
              <img className="book-image show-on-desktop" src={`/images/home/image-seen-bronchiectasis-patient-stories-book-desktop.png`} alt="Seen book cover" />
            </div>
            <div className="sign-up">
              <h2 className="be-h2">Want to <Underline className="be-in-the-know">BE informed?</Underline></h2>
            </div>
            <p className={`register`}>
              Sign up to receive information and resources from Speak Up In BE, including your copy of our patient-stories book, <em>SEEN</em>. This educational resource is made specifically for people living with bronchiectasis.
            </p>
            <SignUpForm />
            <div className="external-links">
              <ExternalLink className="arrow" href="https://insmed.com/privacy-policy/" isTrusted={true}>
                View Privacy Policy
              </ExternalLink>
              <ExternalLink className="arrow" href="https://insmed.com/terms-of-use/" isTrusted={true}>
                View Terms of Use
              </ExternalLink>
            </div>
          </div>
          <div className="container transparent">
            <h2 className="mural-h2">See the <Underline className="unseen-rituals">unseen rituals</Underline> of bronchiectasis (BE)</h2>
            <div className="mural-container">
              
              <img className="mural_image" src={`/images/home/image-bronchiectasis-mural-after-party-planner.png`} alt={`A collage titled "After-party planner" shows a woman standing next to a bed. To her left is a family at a picnic table and a charcoal grill`} />
            
              <div>
                <p>Having BE is an experience that only those with the disease can truly understand.</p>
                <p>Discover what real people are doing to live with and handle their BE.</p>
                <Button to="/unseen-rituals/" className='!mt-[36px] !w-[170px]'>Explore now</Button>
              </div>
            </div>
          </div>
          
        </HomeStyles>
      </Layout>
    </>
  );
};

const HomeStyles = styled.div`
  .hero {
    @media (min-width: 768px) {
      padding-top: 0;
      margin-top: -13px;
    }
  }
  .hero > .grid {
    max-width: 772px;
  }
  .container.transparent {
    background: transparent;
    align-items: flex-start;
  }
  .container {
    border-radius: 0;
    @media (min-width: 768px) {
      width: 100%;
    }
    & > * {
      max-width: 668px;
      width: 100%;
      margin-left: auto;
      margin-right: auto;
    }
    h2 {
      font-size: 32px;
      @media (min-width: 768px) {
        font-size: 40px;
      }
      font-weight: 300;
      margin: 0 0 22px;
      .bronchiectasis {
        font-weight: bold;
        line-height: 1.33;
      }
      &.mural-h2 {
        width: 100%;        
        margin: 0 auto 30px auto;
        font-family: "Nunito Sans";
        font-size: 26px;
        font-weight: 800;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.31;
        letter-spacing: normal;
        text-align: center;
        color: #000;
        @media (min-width: 768px) {
          width: 100%;
          margin: 0 auto 30px auto;
          font-family: "Nunito Sans";
          font-size: 26px;
          font-weight: 800;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.31;
          letter-spacing: normal;
          text-align: left;
          color: #000;
        }
      }
    }
    p {
      font-family: "Nunito Sans";
      font-size: 18px;
      line-height: 24px;
      margin: 0 0 16px;
      font-weight: 100;
      &:nth-last-child(1) {
        margin: 0;
      }
      &.required-msg {
        color: #707070;
        font-size: 14px;
        margin: 0px 0px 20px;
      }
    }

    .register {
      margin-bottom: 36px;
    }
  }
  h2 {
    font-size: 26px;
    font-weight: 800;
    margin: 0 0 12px;
    line-height: 34px;
    br {
      content: "";
      @media (min-width: 768px) {
        content: initial;
      }
      &:after {
        content: " ";
        @media (min-width: 768px) {
          content: initial;
        }
      }
    }
    
    &.register-h2 {
      margin-bottom: 0;
      font-family: Caveat;
      font-weight: 400;
      color: #b83b4d;
      text-align: center;
      line-height: 1.36;
      font-size: 28px;
    }
    &.be-h2 {
      width: 324px;
      height: 35px;
      margin: 0 auto 30px;
      font-family: "Nunito Sans";
      font-size: 26px;
      font-weight: 800;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.31;
      letter-spacing: normal;
      text-align: center;
      color: #000;
      @media (min-width: 768px) {
        text-align: left;
        margin-right: 0;
        margin-left: 0;
      }
    }
  }
  .seen-image {
    width: 260px;
    height: 198px;
    margin: 5px auto 40px;
    @media (min-width: 768px) {
      width: 352px;
      height: 372px;
      margin: 0 30px 0 0;
    }
  }
  .book-image {
    width: 264px;
    height: 316px;
    margin: 0 auto 30px;
    display: block;
    @media (min-width: 768px) {
      margin-bottom: 0;
    }
  }
  .mural_image {
    width: 290px;
    height: 316px;
    margin: 0 auto 30px;
    display: block;
    @media (min-width: 768px) {
      margin-bottom: 0;
      margin-right: 33px;
    }
  }
  .mural-container {
    @media (min-width: 768px) {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
    }
  }
  .sign-up-btn {
    width: 176px;
    display: block;
    margin: 0 auto 60px;
    font-family: 'Nunito Sans';
    font-weight: 700;
  }
  .sign-up {
    margin-top: 60px;
  }
  .points-of-interest {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 324px;
    min-height: 0;
    @media (min-width: 768px) {
      flex-direction: row;
      height: auto;
    }
    flex: 1;
    min-width: 0;
    max-width: 100%;
    margin: 0 0 40px;
    padding: 0;
    li {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      padding: 0 19px;
      flex: 1;
      height: 88px;
      flex-basis: 88px;
      margin-bottom: 30px;
      &:nth-last-child(1) {
        margin-bottom: 0;
      }
      @media (min-width: 768px) {
        flex-direction: column;
        padding: 0;
        height: auto;
        margin-bottom: 0;
      }
      flex: 1;
      min-width: 0;
      img {
        width: 88px;
        margin: 0 18px 0 0;
        @media (min-width: 768px) {
          width: 140px;
          margin: 0 auto;
        }
      }
      p {
        height: fit-content;
        font-size: 20px;
        line-height: 24px;
        color: #6f0013;
        font-weight: bold;
        margin: 0;
        font-family: "Nunito Sans";
        /* padding-right: 25px; */
        @media (min-width: 768px) {
          text-align: center;
        }
        br {
          content: "";
          @media (min-width: 768px) {
            content: initial;
          }
          &:after {
            content: " ";
            @media (min-width: 768px) {
              content: initial;
            }
          }
        }
      }
    }
  }
  .deserve {
      font-family: Caveat;
      text-align: center;
      width: 80%;
      margin: 0;
      color: #b83b4d;
      font-size: 30px;
      padding: 0;
      font-weight: 400;
      @media (min-width: 768px) {
        text-align: left;
        width: 100%;
        margin: 0 0 8px;
        padding: 0 10px 0 0;
        font-size: 35px;
        line-height: 42px;
      }
    }
    .seen {
      font-family: "Nunito Sans";
      text-align: center;
      width: 80%;
      margin-right: auto;
      margin-left: auto;
      /* margin: 0 0 24.8px; */
      color: #000000;
      font-size: 40px;
      padding: 0 25px;
      font-weight: bold;
      @media (min-width: 768px) {
        text-align: left;
        width: 100%;
        margin: 0 0 16px;
        padding: 0 35px;
        font-size: 46px;
        line-height: 1;
      }
    }
  /* .be-seen {
    @media (min-width: 768px) {
      margin: -60px 0 35px;
    }
  } */

  .address-hover-link {
    position: relative;
  }
  .address-hover {
    @media (min-width: 768px) {
      position: absolute;
      left: -25px;
      top: 25px;
    }
  }
  .please {
    position: absolute;
    z-index: 100;
    left: -13px;
    bottom: 40px;
    margin-bottom: 0 !important;
    /* background-image: url("/images/home/pop-up-hover.svg"); */
    background-size: 100% 100%;
    background-repeat: no-repeat;
    padding: 16px 12px 28px 12px;
    width: calc(100vw - 64px);
    @media (min-width: 768px) {
      width: 552px;
      /* height: 38px; */
      padding: 4px 9px 10px 8px;
      left: -39px;
      bottom: -12px;
    }
    display: none;
    &.open {
      display: block;
    }
  }
  .row {
    display: flex;
    flex-direction: column;
    margin-bottom: 0;
    & > div {
      margin: 0 0 20px 0;
      &:last-of-type {
        margin: 0;
      }
    }
    @media (min-width: 768px) {
      flex-direction: row;
      flex: 1;
      justify-content: space-between;
      align-items: flex-start;
      & > div {
        min-width: 0;
        flex-basis: 50%;
        margin: 0;
        &:nth-of-type(1) {
          margin: 0 20px 0 0;
        }
      }
      &.last,
      .last {
        margin: 0 !important;
      }
    }
  }
  .form-last {
      margin: 0 0 36px 0 !important;
    }
  .show-on-desktop {
    display: none;
    @media (min-width: 768px) {
      display: block;
    }
  }
  .show-on-mobile {
    display: block;
    @media (min-width: 768px) {
      display: none;
    }
  }
  .external-links {
    display: block;
    margin-top: 36px;

    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: 31% 31%;
    }
    .arrow {
      display: block;
      margin: 0 auto 20px;
    }
  }
`;

export default IndexPage;
