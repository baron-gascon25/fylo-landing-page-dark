import React from "react";
import productive from "../images/illustration-stay-productive.png";
import arrow from "../images/icon-arrow.svg";

const BENEFITS_TITLE = "Stay productive, wherever your are";
const BENEFITS_DESC_1 =
  "Never let location be an issue when accessing your files. Fylo has you covered for all of your storage needs.";
const BENEFITS_DESC_2 =
  "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.";

const Benefits = () => {
  return (
    <div className='benefits'>
      <img
        src={productive}
        alt='stay-productive-img'
        className='benefits-img'
      />
      <div className='benefits-title-desc-container'>
        <h1 className='benefits-title'>{BENEFITS_TITLE}</h1>
        <p className='benefits-desc'>{BENEFITS_DESC_1}</p>
        <p className='benefits-desc'>{BENEFITS_DESC_2}</p>
        <span className='benefits-link-container'>
          <a href='#' className='benefits-a'>
            See how Fylo works{" "}
          </a>
          <img src={arrow} alt='arrow-icon' className='benefits-a-icon' />
        </span>
      </div>
    </div>
  );
};

export default Benefits;
