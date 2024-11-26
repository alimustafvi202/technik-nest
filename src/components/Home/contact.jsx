import React, { useState } from "react";
import "./styles.css";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Swal from 'sweetalert2'

const Contact = () => {
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "3ff4cc31-4978-4e14-9298-6e5e52cac905");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        Swal.fire({
          title: "Success!",
          text: "Message Sent Successfully!",
          icon: "Success"
        });
      } 
    } catch (error) {
      setSubmissionStatus("An error occurred. Please check your connection and try again.");
    }

    
    setTimeout(() => {
      setSubmissionStatus(null);
    }, 5000);
  };

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
        <form onSubmit={onSubmit}>
          <input type="text" placeholder="Name" name="name" required />
          <input type="email" placeholder="Email" name="email" required />
          <input type="tel" placeholder="Phone" name="phone" />
          <textarea placeholder="Message" name="message" required></textarea>
          <button type="submit">
            <span>Send Message</span>
          </button>
        </form>
        {submissionStatus && <p className="confirmation-message">{submissionStatus}</p>}
      </div>
    </div>
  );
};

export default Contact;

