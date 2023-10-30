import styled from "styled-components";

const muralMinWidth = '859px';

export const MuralStyles = styled.div`
  overflow: hidden;
  position: relative;
  margin-top: -11.75%; // -40px @ 375px wide
  min-height: 510px;
  &#morning-manifestation {
    margin-top: -50px;
  }
  &#great-indoors {
    margin-top: -65px;
  }
  @media (min-width: ${muralMinWidth}) {
      margin-top: -77px; //73px
      min-height: 935px;
      &#morning-manifestation {
        margin-top: -105px;
      }
      &#close-by {
        left: 1%;
      }
      &#great-indoors {
        margin-top: -115px;
      }
  }

  &#secret-stash {
    margin-top: -40%;
    @media (min-width: ${muralMinWidth}) {
      margin-top: -251px;
    }
  }
  &:nth-of-type(1) {
      margin-top: 0 !important;
  }
  .bg {
      width: 126%;
      margin-left: -13%;
      height: auto;
      max-width: none;
      @media (min-width: ${muralMinWidth}) {
          margin: 0;
          width: ${muralMinWidth};
      }  
  }
    .story {
      position: absolute;
      width: 350px;
      height: 250px;
      @media (min-width: ${muralMinWidth}) {
          width: 350px;
          height: 250px;
      }
  }
  /* General Story Positions */
  .story,
  .story-bottom-right {
    position: absolute;
    bottom: 9%;
    right: 0px;
    &.new-story {
        right: -80px;
    }
    @media (min-width: ${muralMinWidth}) {
      bottom: 140px;
      left: auto;
      right: 80px;
      &.new-story {
        right: 95px;
      }
    }      
  }    
  .story-bottom-left {
    bottom: 61px;
    left: -23px;
    right: auto;
    @media (min-width: ${muralMinWidth}) {
      bottom: 90px;
      left: 85px;
    }
  }  
  .story-middle-left {
    bottom: 60px;
    left: -50px;
    right: auto;
    @media (min-width: ${muralMinWidth}) {
      bottom: 330px;
      left: 50px;
    }      
  }
  .story-after-party-planner.new-story {
    left: -60px;
    right: auto;
    @media (min-width: ${muralMinWidth}) {
      left: 85px;
    }
  }
  .story-sputum-shield.new-story {
    right: -35px;
    @media (min-width: ${muralMinWidth}) {
      right: 105px;
    }  
  }
  .story-scent-free-clean.new-story {
    right: -50px;
    bottom: -15px;
    @media (min-width: ${muralMinWidth}) {
      right: 80px;
      bottom: 100px;
    }  
  }
  .story-morning-manifestation.new-story {
    bottom: -10px;
    left: -23px;
    right: auto;
    @media (min-width: ${muralMinWidth}) {
        bottom: 105px;
        left: 85px;
        right: auto;
    }  
  }
  .story-close-by.new-story {
    bottom: -40px;
    @media (min-width: ${muralMinWidth}) {
      bottom: 90px;
    }  
  }
  .story-after-party-planner.new-story {
    bottom: 20px;
    @media (min-width: ${muralMinWidth}) {
      bottom: 90px;
    }  
  }
  .story-great-indoors.new-story {
    bottom: 10px;
    @media (min-width: ${muralMinWidth}) {
        bottom: 50px;
        right: 97px;
    }  
  }
  
  /* Custom Story positions */
  .story-cleanup {
    right: auto;
    /* bottom: 11%; */ // does not work w/ parallax plugin
    bottom: 50px;
    left: 3%;
    @media (min-width: ${muralMinWidth}) {
      bottom: 270px;
      left: 170px;      
    }
  }
  .story-bathtub-sink {
    bottom: 15px; //6%;
    left: -4%;
    right: auto;
    @media (min-width: ${muralMinWidth}) {
      bottom: 90px;
      left: 85px;
    }      
  }  
  .story-shop-stop {
    right: auto;
    bottom: 20px;
    left: -30px;
    @media (min-width: ${muralMinWidth}) {
      bottom: 94px;
      left: 107px;
    }  
  }
  .story-stair-scoot {
    bottom: 10px;//7%;
    right: -23px;
    @media (min-width: 768px) {
      bottom: 100px;
    }
    @media (min-width: ${muralMinWidth}) {
      bottom: 57px;
      right: 136px;
    }      
  } 
  .story-deodor-hunt {
    bottom: 30px;//11%;
    left: 0px;
    right: auto;
    @media (min-width: ${muralMinWidth}) {
      bottom: 255px;
      left: 109px;
    }      
  }  
  .story-pre-approved-parking {
    bottom: 20px; //6%;
    left: 10px;
    @media (min-width: ${muralMinWidth}) {
      bottom: 90px;
      left: 187px;
    }      
  }  
  .story-elevators-only {
    bottom: 110px;// 21%;
    right: auto;
    left: -37px;
    @media (min-width: 768px) {
      bottom: 300px;
    }
    @media (min-width: ${muralMinWidth}) {
      bottom: 273px;
      left: 89px;
    }      
  }    
  .story-secret-stash {
    bottom: 38px;
    left: 65px;
    right: auto;
    @media (min-width: ${muralMinWidth}) {
      bottom: 103px;
      left: 379px;
    }      
  }  
  .story-no-spice-snacking {
    bottom: 57px; //11%;
    left: 70px;
    @media (min-width: ${muralMinWidth}) {
      bottom: 183px;
      left: 140px;
    }      
  }

  .story-sticky-situations {
    bottom: -10px;//-1%;
    left: -50px;
    @media (min-width: ${muralMinWidth}) {
      bottom: 67px;
      left: 80px;
    }      
  } 
  .no-cook-cookware {
    bottom: 42px;
    right: 12px;
    @media (min-width: 768px) {
      bottom: 100px;
    }    
    @media (min-width: ${muralMinWidth}) {
      bottom: 140px;
      left: auto;
      right: 80px;
    }      
  }
  .story-tiring-towels {
    bottom: 50px;
    right: 10px;
    @media (min-width: 768px) {
      bottom: 100px;
    }        
    @media (min-width: ${muralMinWidth}) {
      bottom: 140px;
      left: auto;
      right: 80px;
    }      
  }
  .story-furniture-covers {
    bottom: 10px;
    right: -20px;
    left: auto;
    @media (min-width: 768px) {
      bottom: 100px;
    }          
    @media (min-width: ${muralMinWidth}) {
      bottom: 118px;
      left: auto;
      right: 68px;
    }      
  }   

`;
