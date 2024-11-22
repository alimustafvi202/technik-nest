import React from "react";
import "./styles.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
const Footer = () => {
  
  return (
    <div>
    <section className="testimonials">
      <div className="testimonials-header">
        <h1>Looking For The Best Solution Tech For Your Bussiness?</h1>
        <p>
        Have questions or need more information? Feel free to reach out to our team. We`re here to assist you and provide personalized solutions tailored to your specific needs. Contact us today for a consultation.
        </p>
        <div>
            <button className="hire-us">Contact Us</button>
        </div>
      </div>
    </section>
     <footer className="footer-container">
     <div className="footer-branding">
       <h2>Technik Nest</h2>
       <p>Innovative Mind, Nesting Success.</p>
     </div>
     <div className="footer-links">
       <h3>Quick Links</h3>
       <ul>
         <li><a href="#home">Home</a></li>
         <li><a href="#about">About Us</a></li>
         <li><a href="#services">Services</a></li>
         <li><a href="#contact">Contact</a></li>
       </ul>
     </div>
     <div className="footer-contact">
       <h3>Contact Us</h3>
       <p>+923165601184</p>
       <p>techniknestofficial@gmail.com</p>
     </div>
     <div className="footer-social">
       <h3>Follow Us</h3>
       <div className="social-icons">
         <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
           <FaFacebookF />
         </a>
         <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
           <FaTwitter />
         </a>
         <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
           <FaLinkedinIn />
         </a>
         <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
           <FaInstagram />
         </a>
       </div>
     </div>
   </footer>
   <div className="footer-bottom">
        <p>© 2024 All Rights Reserved</p>
        <p>Made By <span className="footer-highlight">Technik Nest</span></p>
      </div>
   </div>
  );
};

export default Footer;
