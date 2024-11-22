import React from "react";
import "./styles.css";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="left-container">
        <h1>Let's connect!</h1>
        <p>
          Ready to take your business to the next level? Contact us today to
          discuss your project and learn how our digital solutions can help you
          achieve your goals. Let’s connect and explore the possibilities
          together.
        </p>
        <div className="info-card">
          <FaPhoneAlt className="icon" />
          <p>+923165601184</p>
        </div>
        <div className="info-card">
          <FaEnvelope className="icon" />
          <p>info@techniknest.com</p>
        </div>
      </div>
      <div className="right-container">
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="tel" placeholder="Phone" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">
            <span>Send Message</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
