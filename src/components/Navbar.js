import React from "react";
import logo from "../images/logo.svg";

const Navbar = () => {
  const navigations = ["Features", "Team", "Sign in"];
  return (
    <nav className='navigation'>
      <img src={logo} alt='website-logo' className='nav-title' />
      <ul className='navigation-items'>
        {navigations.map((nav) => (
          <li>
            <a href='#' className='a-link'>
              {nav}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
