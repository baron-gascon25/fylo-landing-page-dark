import React from "react";
import intro from "../images/illustration-intro.png";
import introBG from "../images/bg-curvy-desktop.svg";
import introBGMobile from "../images/bg-curvy-mobile.svg";

const INTRO_HEADING =
  "All your files in one secure location, accessible anywhere.";

const INTRO_DESC =
  "Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.";

const Intro = () => {
  return (
    <>
      <div className='intro-section'>
        <img src={intro} alt='intro' className='intro-img' />
        <h1>{INTRO_HEADING}</h1>
        <p>{INTRO_DESC}</p>
        <div className='mobile-layout'>
          <button className='intro-button'>Get Started</button>
          <img
            src={introBG}
            alt='desktop bg design'
            className='intro-desktop-bg'
          />
          <img
            src={introBGMobile}
            alt='mobile bg design'
            className='intro-mobile-bg'
          />
        </div>
      </div>
    </>
  );
};

export default Intro;
