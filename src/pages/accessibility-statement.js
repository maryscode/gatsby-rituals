import * as React from "react";
import styled from "styled-components";
import Layout from "../components/Layouts/Layout";
import { ExternalLink } from "../components/ExternalLink";

import { HeadApi } from "../components/HeadApi";
export const Head = () => <HeadApi page="accessibilityStatement" />;

const Accessibility = () => {
  return (
    <>
      <Layout theme={`single`} bg={false}>
        <AccessibilityStyles>
          <div className="container flex-start !mb-0 !pb-0">
          <h1 className="accessibility-heading">
            Accessibility statement for Speak Up In BE
          </h1>
          <p className="last-of-section">
            This is an accessibility statement from Insmed.
          </p>
          <h2>Measures to support accessibility</h2>
          <p>
            Insmed takes the following measures to ensure accessibility of{" "}
            SpeakUpInBronchiectasis.com:
          </p>
          <ul className="last-of-section">
            <li>Include accessibility throughout our internal policies</li>
            <li>Employ formal accessibility quality assurance methods</li>
          </ul>
          <h2>Conformance status</h2>
          <p className="last-of-section">
            The{" "}
            <ExternalLink href="https://www.w3.org/WAI/standards-guidelines/wcag/">
              Web Content Accessibility Guidelines (WCAG)
            </ExternalLink>{" "}
            defines requirements for designers and developers to improve
            accessibility for people with disabilities. It defines three levels
            of conformance: Level A, Level AA, and Level AAA.
            SpeakUpInBronchiectasis.com is fully conformant with WCAG 2.1 level
            AA. Fully conformant means that the content fully conforms to the
            accessibility standard without any exceptions.
          </p>
          <h2>Compatibility with browsers and assistive technology</h2>
          <p>
            SpeakUpInBronchiectasis.com is designed to be compatible with the
            following assistive technologies:
          </p>
          <ul>
            <li>Microsoft Edge</li>
            <li>Google Chrome</li>
            <li>Mozilla Firefox</li>
            <li>Apple Safari</li>
          </ul>
          <p>SpeakUpInBronchiectasis.com is not compatible with:</p>
          <ul className="last-of-section">
            <li>
              Older browser versions or any operating system or software that is
              out of date
            </li>
          </ul>
          <h2>Technical specifications</h2>
          <p>
            Accessibility of SpeakUpInBronchiectasis.com relies on the following
            technologies to work with the particular combination of web browser
            and any assistive technologies or plugins installed on your
            computer:
          </p>
          <ul>
            <li>HTML</li>
            <li>WAI-ARIA</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>SMIL</li>
          </ul>
          <p className="last-of-section">
            These technologies are relied upon for conformance with the
            accessibility standards used.
          </p>
          <h2>Assessment approach</h2>
          <p>
            Insmed assessed the accessibility of SpeakUpInBronchiectasis.com by
            the following approaches:
          </p>
          <ul className="last-of-section">
            <li>Self-evaluation</li>
          </ul>
          <h2>Date</h2>
          <p>
            This statement was created on June 28, 2023, using the{" "}
            <ExternalLink href="https://www.w3.org/WAI/planning/statements/">
              W3C Accessibility Statement Generator Tool
            </ExternalLink>
            .
            </p>
          </div>
        </AccessibilityStyles>
      </Layout>
    </>
  );
};

const AccessibilityStyles = styled.div`
  .container {
    h2 {
      margin: 60px 0 12px;
      font-weight: bold;
    }
    p {
      font-size: 18px;
      line-height: 24px;
      margin: 0 0 14px;
    }
    ul {
      margin-bottom: 14px;
    }
    .last-of-section {
      margin-bottom: 0;
    }
  }
  
  /* h2,
  p {
    color: #000;
    margin: 0 0 12px 0; // HERELEON
    a {
      display: inline;
    }
  }
  p {
    margin-bottom: 14px;
  }
  ul {
    margin: 0 0 16px 0; 
  }
  .last-of-section {
    margin: 0 0 32px 0;
  }
  & > *:nth-last-child(1) {
    margin: 0;
  } */
`;

export default Accessibility;
