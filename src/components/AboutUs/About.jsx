import React from "react";
import "./About.css";

const AboutUs = () => {
  return (
    <div className="about-us">
      {/* Header Section */}
      <header className="about-header">
        <div className="container">
          <h1>About Us</h1>
          <p>HOME &gt; About Us</p>
        </div>
      </header>

      {/* Intro Section */}
      <section className="about-intro">
        <div className="container">
          <div className="intro-content">
            <img
              src="/images/intro-image.png" // Replace with your actual image path
              alt="Introduction"
              className="intro-image"
            />
            <p className="intro-text">
              We provide solutions that grow your business.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-mission">
        <div className="container">
          <h2>Our Mission</h2>
          <p>
            Our mission is to empower businesses and institutions with
            state-of-the-art software solutions that drive efficiency, enhance
            user experiences, and foster growth. We strive to be a trusted
            partner in navigating the ever-evolving landscape of technology,
            providing our clients with the tools and support they need to
            succeed.
          </p>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="about-services">
        <div className="container">
          <h2>What We Do</h2>
          <div className="services-list">
            <div className="service-item">
              <img
                src="/images/software-dev.png" // Replace with your actual image path
                alt="Custom Software Development"
              />
              <h3>Custom Software Development</h3>
              <p>
                We design and develop specific solutions that address unique
                challenges and opportunities.
              </p>
            </div>
            <div className="service-item">
              <img
                src="/images/mobile-app.png" // Replace with your actual image path
                alt="Mobile App Development"
              />
              <h3>Mobile App Development</h3>
              <p>
                Deliver intuitive and engaging apps that enhance the mobile
                experience.
              </p>
            </div>
            <div className="service-item">
              <img
                src="/images/game-dev.png" // Replace with your actual image path
                alt="Game Development"
              />
              <h3>Game Development</h3>
              <p>
                We craft immersive games that captivate players and bring
                creative visions to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="about-contact">
        <div className="container">
          <h2>Let's Connect!</h2>
          <div className="contact-info">
            <p>📞 +92 316 560 1184</p>
            <p>📧 techniknestofficial@gmail.com</p>
          </div>
          <form className="contact-form">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="tel" placeholder="Phone" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="about-footer">
        <div className="container">
          <p>Looking For The Best Solution Tech For Your Business?</p>
          <button>Contact Us</button>
          <div className="footer-info">
            <p>ABOUT US</p>
            <p>
              Technik Nest is a leading software development house in Pakistan,
              specializing in custom software, web applications, and mobile
              apps.
            </p>
            <p>SERVICES</p>
            <p>Web Development, App Development, Graphic Designing</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
