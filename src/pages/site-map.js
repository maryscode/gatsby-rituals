import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { ExternalLink } from "../components/ExternalLink";
import Layout from "../components/Layouts/Layout";
import { HeadApi } from "../components/HeadApi";
export const Head = () => <HeadApi page="siteMap" />

const Sitemap = () => {
  return (
    <>
      <Layout theme={`single`} bg={false}>
        <StyledDiv className="container flex-start">
          <h1>Site map</h1>
          <Link className="link bold" to="/">
            Home
          </Link>
          <Link className="link bold" to="/unseen-rituals">
           Unseen Rituals of BE Mural
          </Link>
          {/* <Link className="link bold" to="/ATS2023">
            Insmed at ATS 2023
          </Link> */}
          <ExternalLink
            className="link"
            href="https://insmed.com/terms-of-use/"
            isTrusted={true}
          >
            Terms of use
          </ExternalLink>
          <ExternalLink
            className="link"
            href="https://insmed.com/privacy-policy/"
            isTrusted={true}
          >
            Privacy policy
          </ExternalLink>
          <Link className="link" to="/site-map">
            Site map
          </Link>
          <Link className="link" to="/accessibility-statement">
            Accessibility statement
          </Link>
        </StyledDiv>
      </Layout>
    </>
  );
};

const StyledDiv = styled.div`
.link {
    font-size: 18px;
}
`;

export default Sitemap;
