import React, { useState } from 'react';
import './styles.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="navbar">
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
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
        </ul>
      </nav>
      <div className={`social-hire ${menuOpen ? 'hidden' : ''}`}>
        <div className="social-icons">
          <a href="https://facebook.com/techniknest" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://instagram.com/techniknest" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://linkedin.com/company/techniknest" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <button className="hire-us">Hire Us</button>
      </div>
    </header>
  );
};

export default Navbar;
