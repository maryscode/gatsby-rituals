import styled from "styled-components";

/**
 * Brand styles
 */
export const BrandStyles = styled.div`
  & > header {
    /* border: 1px solid red; */
  }
  &.page-book {
    background-color: #1e1e1e;
    .st2,
    .st1 {
      @media (min-width: 768px) {
        fill: white;
      }
    }
    .hero-container {
      background-color: #1e1e1e;
      padding-top: 10px;
      @media (min-width: 768px) {
        padding-top: 0;
        background-color: transparent;
      }
      .hero-text {
        margin-bottom: 0 !important;
      }
    }
  }
`;
