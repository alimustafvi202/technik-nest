import React from "react";
import "./styles.css";
import { FaFacebookF,  FaLinkedinIn, FaInstagram } from "react-icons/fa";
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
            <button className="footerbtn">Contact Us</button>
        </div>
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
         <li><a href="#home">Home</a></li>
         <li><a href="#about">About Us</a></li>
         <li><a href="#services">Services</a></li>
         <li><a href="#contact">Contact</a></li>
       </ul>
     </div>
     <div className="footer-contact">
       <h3>Contact Us</h3>
       <p>+92 3165601184</p>
       <p>info@techniknest.tech</p>
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
