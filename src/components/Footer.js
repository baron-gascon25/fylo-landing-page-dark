import React from "react";
import logo from "../images/logo.svg";
import location from "../images/icon-location.svg";
import phone from "../images/icon-phone.svg";
import email from "../images/icon-email.svg";

const footer_others = [
  "About Us",
  "Jobs",
  "Press",
  "Blog",
  "Contact Us",
  "Terms",
  "Privacy",
];

const Footer = () => {
  return (
    <div className='footer-sections-1'>
      <img
        src={logo}
        alt='logo'
        width={117}
        height={37}
        className='fylo-icon'
      />
      <div className='footer-sections-2'>
        <div className='footer-location'>
          <img
            src={location}
            alt='location'
            className='loc-icon'
            width={13}
            height={18}
          />
          <p className='footer-p footer-p-loc'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div className='footer-phone-email'>
          <div className='footer-phone'>
            <img
              src={phone}
              alt='phone'
              className='phone-icon'
              width={18}
              height={18}
            />
            <p className='footer-p'>+1-543-123-4567</p>
          </div>
          <div className='footer-email'>
            <img
              src={email}
              alt='email'
              className='email-icon'
              width={20}
              height={16}
            />
            <p className='footer-p'>example@fylo.com</p>
          </div>
        </div>
        <div className='footer-others'>
          {footer_others.map((other) => (
            <h6
              className={` ${
                other !== "Contact Us" ? "footer-h" : "footer-contact"
              }`}
            >
              {other}
            </h6>
          ))}
        </div>
        <div className='footer-socials'>
          <i className='fa fa-facebook' aria-hidden='true'></i>
          <i className='fa fa-twitter' aria-hidden='true'></i>
          <i className='fa fa-instagram' aria-hidden='true'></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
