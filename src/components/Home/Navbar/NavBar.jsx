import React, { useState, useEffect } from 'react';
import logo from '../../../assets/logo/Group 1.png';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();  // To get the current path

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to check if the current path matches the link
  const isActiveLink = (path) => location.pathname === path ? 'text-teal-400' : 'text-white';

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md ${
        scrolled ? 'bg-gray-900 shadow-lg' : 'bg-gray-900/30'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-12" />
        </div>

        {/* Hamburger Menu */}
        <button
          className="sm:hidden flex flex-col justify-center items-center space-y-1 "
          onClick={toggleMenu}
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            menuOpen ? 'block' : 'hidden'
          } sm:flex absolute sm:static top-16 sm:top-0 left-0 right-0 bg-gray-900 sm:bg-transparent text-center sm:text-left transition-all duration-300`}
        >
          <ul className="space-y-4 sm:space-y-0 sm:flex sm:space-x-8 py-4 sm:py-0">
            <li>
              <a
                href="/"
                className={`hover:text-teal-400 transition duration-300 ${isActiveLink('/')}`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className={`hover:text-teal-400 transition duration-300 ${isActiveLink('/about')}`}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/services"
                className={`hover:text-teal-400 transition duration-300 ${isActiveLink('/services')}`}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/team"
                className={`hover:text-teal-400 transition duration-300 ${isActiveLink('/team')}`}
              >
                Team
              </a>
            </li>
            <li>
              <a
                href="/event"
                className={`hover:text-teal-400 transition duration-300 ${isActiveLink('/event')}`}
              >
                Event
              </a>
            </li>
            <li>
              <a
                href="/portfolio"
                className={`hover:text-teal-400 transition duration-300 ${isActiveLink('/portfolio')}`}
              >
                Portfolio
              </a>
            </li>
          </ul>
        </nav>

        {/* Social Icons */}
        <div className="hidden sm:flex items-center space-x-4">
          <a
            href="https://facebook.com/techniknest"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-gray-700 hover:bg-teal-400 w-10 h-10 flex items-center justify-center rounded-full transition-all text-xl"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com/techniknest"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-gray-700 hover:bg-teal-400 w-10 h-10 flex items-center justify-center rounded-full transition-all text-xl"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com/company/techniknest"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-gray-700 hover:bg-teal-400 w-10 h-10 flex items-center justify-center rounded-full transition-all text-xl"
          >
            <FaLinkedinIn />
          </a>
          <Link
      to="/hire"
      className="text-white bg-transparent px-4 py-2 border-2 border-white rounded-full hover:bg-teal-400 hover:border-teal-400 transition duration-300 flex items-center space-x-2 transform hover:scale-105 hover:shadow-lg"
    >
      <FontAwesomeIcon icon={faUserTie} className="text-lg transform -translate-y-0.8" />
      <span>Join Us</span>
    </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;