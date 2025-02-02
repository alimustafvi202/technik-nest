import React from "react";
import "./footer.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faCogs, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FaFacebookF,  FaLinkedinIn, FaInstagram,FaWhatsapp } from "react-icons/fa";
const Footer = () => {
  
  return (
    <div>
    {/* Testimonials Section */}
    <section className="bg-teal-400 text-white py-16 px-4 sm:px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Looking For The Best Solution Tech For Your Business?</h1>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            Have questions or need more information? Feel free to reach out to our team. We’re here to assist you and provide personalized solutions tailored to your specific needs. Contact us today for a consultation.
          </p>
          <button className="bg-transparent text-white py-3 px-8 border-2 border-white rounded-full font-semibold hover:bg-white hover:border-white hover:text-teal-500 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
  <Link to="/contact" className="w-full h-full block">
    Contact Us
  </Link>
</button>
        </div>
      </section>
     <footer className="footer-container">
     <div className="footer-branding">
       <h2>Technik Nest</h2>
       <p>Technik Nest is a leading software development house in Pakistan, specializing in crafting custom software solutions, web applications, and mobile apps.</p>
     </div>
     <div className="footer-links">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#home"><FontAwesomeIcon icon={faHome} /> Home</a></li>
          <li><a href="#about"><FontAwesomeIcon icon={faInfoCircle} /> About Us</a></li>
          <li><a href="#services"><FontAwesomeIcon icon={faCogs} /> Services</a></li>
          <li><a href="#contact"><FontAwesomeIcon icon={faEnvelope} /> Contact</a></li>
        </ul>
      </div>
      <div className="footer-contact">
        <h3>Contact Us</h3>
        <p><FontAwesomeIcon icon={faPhone} /> +92 335 6863761</p>
        <p><FontAwesomeIcon icon={faEnvelope} /> info@techniknest.tech</p>
      </div>
     <div className="footer-social">
       <h3>Follow Us</h3>
       <div className="footsocial-icons">
         <a href="https://facebook.com/techniknest" target="_blank" rel="noopener noreferrer">
           <FaFacebookF />
         </a>
        
         <a href="https://linkedin.com/company/techniknest" target="_blank" rel="noopener noreferrer">
           <FaLinkedinIn />
         </a>
         <a href="https://instagram.com/techniknest" target="_blank" rel="noopener noreferrer">
       <FaInstagram />
           </a>
           <a href="https://whatsapp.com/channel/0029VaEGUWDBlHpTjOtHxS2L" target="_blank" rel="noopener noreferrer">
           <FaWhatsapp />
         </a>
       </div>
     </div>
   </footer>
  <footer className="foot-bar">
  <div className="foot-content">
    <div className="foot-left">
      &copy; 2024 All Rights Reserved
    </div>
    <div className="foot-right">
      Made with <span className="heart-icon">&hearts;</span> by <a href="https://techniknest.tech" target="_blank" rel="noopener noreferrer">Technik Nest</a>
    </div>
  </div>
</footer>
   </div>
  );
};

export default Footer;
