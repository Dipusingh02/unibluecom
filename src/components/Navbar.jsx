import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import Logo from "../assests/sitelogo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="nav">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={Logo} alt="logo" />
        </div>
        <button className="hamburger" onClick={toggleMenu}>
          <span className={isOpen ? "hamburger-icon open" : "hamburger-icon"}>
            &#9776;
          </span>
        </button>
        <div className={`navbar-links ${isOpen ? "show" : ""}`}>
          <ul>
            <li><Link to="/">Home</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
