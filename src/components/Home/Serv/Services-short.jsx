import React from "react";
import { Link } from "react-router-dom";
import "./serv.css";

const Services = () => {

  return (
    <div>
      {/* Shape below service cards */}
     
      <div className="service-shape-bottom">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" fill="#FFFFFF">
          <path
            className="shape-fill"
            d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7 c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4 c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
          ></path>
        </svg>
      </div>
      <div className="services-container1">
      <h1 className="services-title">We provide the best digital services</h1>
      <p className="services-description">
        Technik Nest is your trusted partner for cutting-edge digital solutions. We offer a
        comprehensive range of services designed to help your business thrive in the digital age.
        From website development and mobile app creation to digital marketing and e-commerce
        solutions, our team of experts delivers innovative and effective strategies tailored to your
        unique needs.
      </p>
      <div className="services-grid">
        <div className="service-card1">
          <h2 className="service-title">Web Development</h2>
          <p className="service-description">
            At Technik Nest, we build responsive, user-friendly websites tailored to drive
            engagement and optimize performance for businesses.
          </p>
          <Link to="/web" className="service-link">Learn More</Link>
        </div>
        <div className="service-card1">
          <h2 className="service-title">App Development</h2>
          <p className="service-description">
            We create high-performance, custom mobile apps with seamless design and functionality,
            ensuring a superior user experience across platforms.
          </p>
          <Link to="/app" className="service-link">Learn More</Link>
        </div>
        <div className="service-card1">
          <h2 className="service-title">Graphic Designing</h2>
          <p className="service-description">
            We create high-impact, custom graphic designs with seamless creativity and precision,
            ensuring a strong brand presence across all platforms.
          </p>
          <Link to="/graphic" className="service-link">Learn More</Link>
        </div>
      </div>
    </div>


      {/* Bottom shape */}
      <div className="service-shape-bottom1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          fill="#FFFFFF"
        >
          <path
            className="shape-fill"
            d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7 c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4 c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Services;
