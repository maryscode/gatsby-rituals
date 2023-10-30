import React from "react";
import styled from "styled-components";

/**
 * Component definition
 */
export const BackgroundGradient = () => {
  return (
    <BGWrapperStyles>
      {/* <BackgroundGradientStyle /> */}
      {/* <NoiseDiv className="noise-div" /> */}
      {/* <NoiseDivWithMask /> */}
    </BGWrapperStyles>
  );
};

const BGWrapperStyles = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  /* overflow: hidden; */
  z-index: -1;
  background-image: url(/images/background.svg);
  background-repeat: repeat;
`;

// const NoiseDivWithMask = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100%;
//   @media (min-width: 768px) {
//     top: -170vw;
//     left: -200vw;
//     width: 300vw;
//     height: 300vw;
//   }
//   background-image: url(/images/background.svg);
//   z-index: -1;
//   opacity: 1;
//   mix-blend-mode: multiply;

//   mask-image: radial-gradient(
//     circle,
//     rgba(0, 0, 0, 1) 0%,
//     rgba(0, 0, 0, 1) 30%,
//     rgba(0, 0, 0, 0.5) 50%
//   );
//   mask-size: 100% 100%;
//   mask-repeat: no-repeat;
//   mask-position: left top;
// `;

// const NoiseDiv = styled(NoiseDivWithMask)`
//   position: absolute;
//   top: 0;
//   left: 0;
//   top: calc(-200vw + 500vw);
//   opacity: 0;
//   @media (min-width: 768px) {
//     top: calc(-170vw + 300vw);
//     left: -200vw;
//     width: 300vw;
//     height: 300vw;
//     opacity: 0.5;
//   }
//   /* display: none; */

//   mask-image: initial;
//   mask-size: initial;
//   mask-repeat: initial;
//   mask-position: initial;
// `;

/**
 * Component default styles
 */
// const BackgroundGradientStyle = styled.div`
//   /* mix-blend-mode: difference; */
//   position: absolute;
//   top: -200vw;
//   left: -85vw;
//   width: 400vw;
//   height: 400vw;
//   opacity: 0.85;
//   background: rgb(255, 127, 81);
//   background: radial-gradient(
//     circle,
//     rgba(255, 127, 81, 0.8) 4%,
//     rgb(252, 196, 84) 15%,
//     rgba(252, 196, 84, 0) 40%
//   );
//   @media (min-width: 768px) {
//     top: -130vw;
//     left: -150vw;
//     width: 280vw;
//     height: 260vw;
//     opacity: 0.85;
//     background: radial-gradient(
//       circle,
//       rgba(255, 127, 81, 0.8) 5%,
//       rgb(252, 196, 84) 18%,
//       rgba(252, 196, 84, 0) 40%
//     );
//   }
//   z-index: -2;
//   background-repeat: no-repeat;
//   background-size: contain;
//   background-position: center;
// `;
