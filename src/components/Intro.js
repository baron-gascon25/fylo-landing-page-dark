import React from "react";
import intro from "../images/illustration-intro.png";
import introBG from "../images/bg-curvy-desktop.svg";

const INTRO_HEADING =
  "All your files in one secure location, accessible anywhere.";

const INTRO_DESC =
  "Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.";

const Intro = () => {
  return (
    <>
      <div className='intro-section'>
        <img src={intro} alt='intro-image' className='intro-img' />
        <h1>{INTRO_HEADING}</h1>
        <p>{INTRO_DESC}</p>
        <button className='intro-button'>Get Started</button>
        <img
          src={introBG}
          alt='intro-desktop-bg'
          className='intro-desktop-bg'
        />
      </div>
    </>
  );
};

export default Intro;
