import React, { useState, useEffect } from 'react';
import './nav.css';
import logo from '../../../assets/logo/logo.png';
import { FaFacebookF,  FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Detect scroll event and set 'scrolled' state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true); // Set scrolled to true if user scrolls down
      } else {
        setScrolled(false); // Set scrolled to false if at the top
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <button className="hamburger" onClick={toggleMenu}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </button>
      <nav className={`menu ${menuOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleMenu}>
          &times;
        </button>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/team">Team</a></li>
          <li><a href="/portfolio">Portfolio</a></li>
        </ul>
      </nav>
      <div className={`social-hire ${menuOpen ? 'hidden' : ''}`}>
        <div className="social-icons">
          <a href="https://facebook.com/techniknest" target="_blank" rel="noopener noreferrer">
            <FaFacebookF/>
          </a>
          <a href="https://instagram.com/techniknest" target="_blank" rel="noopener noreferrer">
            <FaInstagram/>
          </a>
          <a href="https://linkedin.com/company/techniknest" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn/>
          </a>
        </div>
        <Link to="/hire" className="hire-us">
        <i className="fas fa-user-tie contact-icon mr-md-2"></i>Hire Us
      </Link>
      </div>
    </header>
  );
};

export default Navbar;
