import React from 'react';
import './styles.css'; // Make sure this file contains the styles for the component
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import Logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="header">
      {/* Logo Section */}
      <div className="logo">
        <img
          src={Logo}
          alt="Technik Nest Logo"
          className="logo-image"
        />
      </div>

      {/* Navigation Menu */}
      <nav className="nav-menu">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
        </ul>
      </nav>

      {/* Social Icons */}
      <div className="social-icons">
        <a
          href="https://www.linkedin.com/company/techniknest"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaLinkedin size={20} />
        </a>
        <a
          href="https://www.instagram.com/techniknest"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="https://www.facebook.com/techniknest"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaFacebook size={20} />
        </a>
      </div>

      {/* Hire Us Button */}
      <button className="hire-us">
    <span role="img" aria-label="Man">👨</span> Hire Us
</button>
    </header>
  );
};

export default Header;
