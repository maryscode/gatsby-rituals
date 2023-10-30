import * as React from "react";
import { Button } from "../components/Button";

import Layout from "../components/Layouts/Layout";
import PatrickFlumeMD from "../images/patrick-flume-md.jpg";
import AshwinBasavarajMD from "../images/ashwin-basavaraj-md.jpg";
import styled from "styled-components";

import { Presentation } from "../components/Presentation";
import atsLogo from "../images/ats-logo.svg";

import { HeadApi } from "../components/HeadApi";
export const Head = () => <HeadApi page="ats2023" />;

const Ats2023 = () => {
  return (
    <>
      <Layout theme={`single`} className="page-ats2023">
        <Ats2023Styles className="container flex-start">
          <h1>
            Join us for Insmed’s bronchiectasis programming at the ATS 2023
            International Conference
          </h1>
          <div className="ats-intro">
            <div className="column left-column">
              <img src={atsLogo} alt="ATS 2023 International Conference logo" />
            </div>
            <div className="column right-column">
              <p>
                Insmed is excited to present information about bronchiectasis at
                this year's conference as part of our goal to increase awareness
                of the disease. Read about our educational programs below:
              </p>
            </div>
          </div>
          <Presentation
            presentations={[
              {
                title:
                  "Hidden in plain sight: understanding inflammation in bronchiectasis",
                presenter: (
                    <>
                      <img
                        src={PatrickFlumeMD}
                        alt="Headshot of presenter Patrick Flume, MD"
                      />
                      <span>Patrick Flume, MD</span>
                    </>
                  ),
                date: "1:30 p.m. EDT, Monday, May 22",
                location: "Exhibit Hall, Guru Bar 1",
                description: (
                  <div>
                    <h4>
                      A Guru Bar presentation at the ATS 2023 International
                      Conference
                    </h4>
                    <p>
                      This presentation is sponsored by Insmed Incorporated. Due
                      to regulatory restrictions, this presentation is only
                      available to attendees from the United States.
                    </p>
                    <p>
                      During this session, participants will journey into the
                      biology and functions of the neutrophil, understanding how
                      the mechanisms intended to defend against infection can
                      become destructive in bronchiectasis. The session will
                      also cover how this evidence applies to clinical practice
                      and informs how addressing inflammation can be
                      incorporated into a holistic management approach aimed at
                      disrupting the vicious vortex of bronchiectasis.
                    </p>
                  </div>
                ),
                link: "https://conference.thoracic.org/",
              },
              {
                title:
                  "Targeting the vicious vortex: understanding bronchiectasis and its management",
                presenter: (
                  <>
                    <img
                      src={AshwinBasavarajMD}
                      alt="Headshot of presenter Ashwin Basavaraj, MD"
                    />
                    <span>Ashwin Basavaraj, MD</span>
                  </>
                ),
                date: "May 21-23",
                location: "Exhibit Hall, Booth #609",
                description: (
                  <div>
                    <p>
                      Hear expert commentary discussing the evolving
                      understanding of bronchiectasis as a “vicious vortex” of
                      pathophysiologic factors and how this model supports the
                      need for a multimodal treatment strategy.
                    </p>
                    <div className="time-slots">
                      <h4>Sunday, May 21</h4>
                      <ul>
                        <li>11-11:30 a.m. EDT</li>
                        <li>12-12:30 p.m. EDT</li>
                        <li></li>
                      </ul>
                      <h4>Monday, May 22</h4>
                      <ul>
                        <li>11:30 a.m.-12 p.m. EDT</li>
                        <li>12:30-1 p.m. EDT</li>
                        <li>2-2:30 p.m. EDT</li>
                      </ul>
                      <h4>Tuesday, May 23</h4>
                      <ul>
                        <li>11-11:30 a.m. EDT</li>
                        <li>12-12:30 p.m. EDT</li>
                        <li>1:30-2 p.m. EDT</li>
                      </ul>
                    </div>
                  </div>
                ),
                link: "https://conference.thoracic.org/",
              },
            ]}
          />
          <p className="keep-up">
            Want to keep up with bronchiectasis research and information?
          </p>
          <Button to="/#signup">Sign up</Button>
        </Ats2023Styles>
      </Layout>
    </>
  );
};

const Ats2023Styles = styled.div`
  .keep-up {
    text-align: center;
    font-weight: bold;
  }
  a.button {
    margin: 0 auto;
  }
  .time-slots {
    text-align: center;
    @media (min-width: 768px) {
      text-align: left;
    }
  }
  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  li {
    flex-basis: 100%;
  }

  @media screen and (min-width: 800px) {
    li {
      flex: 1;
    }
  }
  .ats-intro {
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
      flex-direction: row;
    }
    width: 100%;
    flex: 1;
    margin: 0 0 40px;
    /* @media (min-width: 768px) {
    margin: 0 0 24px;
  } */
    &:last-of-type {
      margin: 0 0 36px;
    }
    .column {
      display: flex;
      flex-direction: column;
    }
    .left-column {
      /* width: 337px;
      max-width: 337px;
      min-width: 337px; */
      justify-items: flex-start;
      margin-bottom: 22.7px;
      @media (min-width: 768px) {
        width: 292px;
        flex-basis: 292px;
        max-width: 292px;
        min-width: 292px;
        margin-bottom: 0;
      margin-right: 44px;
      }
      img {
        margin: 0 auto;
        width: 189px;
        @media (min-width: 768px) {
          width: 240px;
        }
      }
    }
    .right-column {
        width: auto;
    }
    p {
      width: unset;
      &:nth-last-child(1) {
        margin: 0;
      }
    }
  }
`;

export default Ats2023;
