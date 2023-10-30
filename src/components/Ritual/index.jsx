import React from "react";
import { MuralStyles } from "./Ritual.styled";
// import { Parallax } from 'react-scroll-parallax';

/**
 * Component definition
 */
const Ritual = ({ children, bg, bgAlt, story, storyAlt, storyClass, id, zIndexReverse, releaseDate,  className }) => {

  const customZIndex = {
    zIndex: zIndexReverse
  }

  return (
    
      <MuralStyles id={id} style={customZIndex} className="ritual">
        <picture>
          <source srcSet={`/images/mural/rituals/${bg}.webp`} type="image/webp" />
          <source srcSet={`/images/mural/rituals/${bg}.png`} type="image/png" /> 
          <img src={`/images/mural/rituals/${bg}.png`} alt={bgAlt} className="bg" loading="lazy" />      
        </picture>  
        
        <div className="parallax-container">
          {story ? <img src={`/images/mural/rituals/${story}`} alt={storyAlt} className={`story ${storyClass}`} /> : ''}
        </div>
      </MuralStyles>
  );
};
export default Ritual;
