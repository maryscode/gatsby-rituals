import React, { useState, useEffect, useRef } from "react";
import Layout from "../components/Layouts/Layout";
// import { ParallaxProvider } from 'react-scroll-parallax';
import styled from "styled-components";
import Ritual from "../components/Ritual";
import { RitualsData } from '../data/RitualsData';
import { HeadApi } from "../components/HeadApi";
import { Button } from "../components/Button";
import Modals from "../components/Modals";
export const Head = () => <HeadApi page="unseenRituals" />;

const IndexPage = () => {
  let localDateTime = Date.now();
  const isWindow = typeof window !== "undefined";
  if (isWindow) {
    const url = new URL(window.location.href);
    const forceLocalDateTime = url.searchParams.get("force_date");
    if (forceLocalDateTime) {
      let date = new Date(forceLocalDateTime);
      localDateTime = date.getTime();
    }
  }
  const [formOpen, setFormOpen] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const handleClick = () => {
    setShareOpen(true);
  }    

  const openForm = (e) => {
    setFormOpen(true);
  }

  
  // SCROLL
  const muralContainerRef = useRef(null);
  const shareContainerRef = useRef(null);
  const [stickyBtn, setStickybtn] = useState(false);
  const [stickyShare, setStickyShare] = useState(false);
  
  useEffect(() => {
    
    const handleResize = () => {
      shareContainerRef.current.style.top = (muralContainerRef.current.children[0].offsetHeight - 35) + 'px';
      handleScroll();
    }

    const handleScroll = () => {
      const containerTop = muralContainerRef.current.offsetTop; 
      const containerBtm = containerTop + muralContainerRef.current.offsetHeight;
      const scrollTop = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const secondRitualInView = containerTop + muralContainerRef.current.children[1].offsetHeight - windowHeight - 20;

        if (scrollTop > containerTop) {
          setStickybtn(true);
        } else if (scrollTop > containerBtm) {
          setStickybtn(false);
        } else {
          setStickybtn(false);        
        }
      
        if (scrollTop > secondRitualInView) {
          setStickyShare(true);
        } else {
          setStickyShare(false);
        }      
    };
    window.addEventListener('load', handleScroll);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('load', handleScroll);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    }; 
  }, []);
  

  // Position Share icon after page loads
  useEffect(() => {
    const onPageLoad = () => {
      shareContainerRef.current.style.top = (muralContainerRef.current.children[0].offsetHeight - 35) + 'px';
    };
    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad);
      return () => window.removeEventListener('load', onPageLoad);
    }
  }, []);


  return (
    <>
      {/* <ParallaxProvider> */}
        <Layout isHome={false} isMural={true} theme={`single`} className="page-rituals" footerBg="transparent">
          <StyledSection>
            <div className="!pb-[0] container transparent">
              <div className="row">
                <h1 className="handwriting">A living mural:</h1>
                <h1 className="sansserif">Unseen rituals in BE</h1>
                <p>
                  <strong>Bronchiectasis (BE) can lead people to do many different, and sometimes unconventional, things to live with and handle their disease.</strong>
                </p>
                <p className="!mb-0">Do you have a unique way of completing an everyday task or a simple approach to a hurdle that makes a huge difference? Whatever it is, it’s worth sharing.</p>   
              </div>
            </div>
          </StyledSection>
          <StyledRitualsContainer>


            <div id="" className={`add-ritual-btn button-row-centered`}>
              <Button onClick={openForm}>Add your ritual</Button>
            </div>

            <div className={`add-ritual-btn button-row-centered sticky ${stickyBtn ? 'show' : ''}`}>
              <Button onClick={openForm}>Add your ritual</Button>
            </div>            
            
            <div ref={muralContainerRef} className="container">

              {RitualsData.map((ritual, index) => {
                
                // Show ritual if releaseDate has passed
                if (Date.parse(ritual.releaseDate) < localDateTime && Date.parse(ritual.endDate) > localDateTime) {
                
                //if (index > -1) { // show all
                  return (
                    <Ritual
                    key={ritual.anchorId}
                    releaseDate={ritual.releaseDate}
                    bg={ritual.bgImage.filename}
                    bgAlt={ritual.bgImage.alt}
                    story={ritual.storyImage.src}
                    storyAlt={ritual.storyImage.alt}  
                    storyClass={ritual.storyImage.class}
                    id={ritual.anchorId}
                    zIndexReverse={200 - index}
                    />
                  )
                } else return false;
              })
              }
           
            <div id="share-container" ref={shareContainerRef} className={stickyShare ? 'sticky' : ''}>
                <button className="share-icon" onClick={handleClick}>Share</button>
              </div>               
            </div>
            
          </StyledRitualsContainer>
        
          <StyledSection>
            <div className="container transparent !pb-0">
              <div className="row">
                <h3 className="">If your rituals are becoming too radical, it may be time to speak up</h3>
                <p>Speak Up In BE is dedicated to providing you with information, tips, and resources to help you better understand your condition and start productive conversations with your doctor.</p>
                <p className="!mb-[0]">Be sure to secure your limited-edition copy of <em>SEEN</em>, our first resource that includes real stories from people living with BE.</p>
                <div className="button-row-centered">
                  <Button to="/" className='!w-[160px]'>Learn more</Button>
                </div>
              </div>
            </div>
          </StyledSection>
          <Modals.MuralStoryForm isOpen={formOpen} className="w-[600px] border-4" setOpen={setFormOpen} />
          <Modals.Share isOpen={shareOpen} className="w-[600px] border-4" setOpen={setShareOpen} /> 

        </Layout>
      {/* </ParallaxProvider> */}
    </>
  );
};

const StyledSection = styled.div`
  overflow: hidden;
  position: relative;
  .container {
    @media (min-width: 768px) {
      width: 688px;
      padding-right: 0;
      padding-left: 0;
    }
  }  
  .sansserif {
    margin: 0 0px 50px 0;
    font-family: "Nunito Sans";
    font-weight: 700;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    text-align: center;
    color: #000;
    font-size: 40px;
    line-height: 1;
    @media (min-width: 768px) {
      text-align: left;
      font-size: 48px;
      line-height: 0.73;
      margin: 15px 0px 40px 36px;
    }
  }
  .handwriting {
    font-family: Caveat;
    margin: 0;
    padding: 0;
    font-weight: 400;
    color: #000;
    font-size: 30px;
    line-height: 1.2;
    text-align: center;
    @media (min-width: 768px) {
      font-size: 36px;
      text-align: left;
    }
  }
  h3 {
    margin: 0 0 40px;
    font-family: "Nunito Sans";
    font-weight: 800;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    text-align: center;
    color: #000;
    font-size: 26px;
    line-height: 1.31;
    @media (min-width: 768px) {
      text-align: left;
      font-size: 26px;
      font-weight: 800;
      line-height: 1.31;
      margin-bottom: 20px;
    }
  }    
  .container p {
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    margin-bottom: 16px;
  }
`;

const StyledRitualsContainer = styled.div`
  .container {
    position: relative;
    background: transparent;
    padding: 0 0 20px;
    /* overflow-x: hidden; */
    width: 100%;
    border-radius: 0;
    @media (min-width: 859px) {
      overflow: visible;
      background: #1e1e1e;
      padding: 40px 0 60px;
    }
  }
  .button-row-centered {
    display: flex;
    justify-content: center;
  }
  .add-ritual-btn {
    padding-bottom: 60px;
    @media (min-width: 768px) {
      padding-bottom: 40px;
    }
    button {
      width: 182px;
    }
  }
  .add-ritual-btn.sticky {
    position: fixed;
    top: -100px;
    left: 50%;
    margin-left: -91px;
    transition: top .5s ease-in-out .2s;
    width: 182px;
    padding: 0;
    z-index: 202;
    &.show {
      top: -49px;
    }
          
    button {
      align-items: flex-end;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      &:before {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
    }
    span {
      padding-bottom: 4px
    }
  }
  #share-container {
    position: absolute;
    height: 0;
    width: 100%;
    margin: 0px auto;
    z-index: 201;
    /* top: 480px; */
    @media (min-width: 768px){
      /* top: 1020px; */
    }
    @media (min-width: 859px) {
      width: 859px;
      /* top: 900px; */
    }

  }

  #share-container.sticky {
    position: sticky;
    top: auto !important;
    bottom: 15px;
    height: 0;
  }
  .share-icon {
    position: absolute;
    /* right: 24px;
    bottom: 12px; */
    right: 5px;
    bottom: -10px;
    transition: all .4s;
    overflow: hidden;
    width: 58px;
    height: 58px;
    background: transparent url('/images/icon-share.png') no-repeat 0 0;    
    text-indent: -9999em;
    background-size: 58px 58px;

    @media (min-width: 859px) {
      right: -6px; 
      bottom: 12px;
      width: 66px;
      height: 66px;        
    }
    &:hover {
      background: transparent url('/images/icon-share-hover.png') no-repeat 0 0;
      background-size: 66px 66px;
      transform: scale(1.1);
    }
  }
`;

export default IndexPage;
