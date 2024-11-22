import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiGithubFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="links-icons">
        <div className="vertical-line"></div>
        <div className="icons">
          <a href="https://github.com/DavidAroh"><RiGithubFill /></a>
          <a href="https://x.com/ArohTari29054"><FaSquareXTwitter /></a>
          <a href="davidarohtari@gmail.com"><BiLogoGmail /></a>
        </div>
      </div>

      <div className="navbar-logo">
        <img src="assets/Logo.svg" alt="logo" />
        <h1>David</h1>
      </div>

      {/* Hamburger Icon */}
      <div
        className={`menu-icon ${isMobileMenuOpen ? "open" : ""}`}
        onClick={toggleMobileMenu}
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>

      <ul className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>  
            <span>#</span>home
          </Link>
        </li>
        <li>
          <Link to="/projects" onClick={() => setIsMobileMenuOpen(false)}>
            <span>#</span>projects
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>
            <span>#</span>about-me
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
            <span>#</span>contacts
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
