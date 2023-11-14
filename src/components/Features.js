import React from "react";
import feature1 from "../images/icon-access-anywhere.svg";
import feature2 from "../images/icon-security.svg";
import feature3 from "../images/icon-collaboration.svg";
import feature4 from "../images/icon-any-file.svg";

const Features = () => {
  const feats = [
    {
      imgsrc: feature1,
      title: "Access your files, anywhere",
      desc: "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
    },
    {
      imgsrc: feature2,
      title: "Security you can trust",
      desc: " 2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files",
    },
    {
      imgsrc: feature3,
      title: "Real-time collaboration",
      desc: "Securely share files and folders with friends, family, and colleagues for live collaboration. No email attachments required.",
    },
    {
      imgsrc: feature4,
      title: "Store any type of file",
      desc: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
    },
  ];

  return (
    <div className='features'>
      {feats.map((feat) => (
        <div className='features-card' key={feat.title}>
          <img src={feat.imgsrc} className='features-image' />
          <h6 className='features-title'>{feat.title}</h6>
          <p className='features-desc'>{feat.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;
