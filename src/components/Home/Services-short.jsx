import React from "react";
import "./styles.css";

const Services = () => {
  
  return (
    <div>
    <div className="services-container">
      <div className="service-card">
        <h2>Web Development</h2>
        <p>
          At Technik Nest, we deliver bespoke web development services designed
          to create engaging, high-performance websites that align with your
          business goals. Our team specializes in developing responsive,
          user-centric websites that enhance user experience and drive
          conversions. We employ the latest technologies and best practices to
          ensure your website is fast, secure, and optimized for all devices.
        </p>
      </div>
      <div className="service-card">
        <h2>App Development</h2>
        <p>
          At Technik Nest, we excel in crafting custom mobile apps that provide
          seamless experiences on both Android and iOS platforms. Our
          development process is focused on delivering high-performance apps
          with intuitive user interfaces and robust functionality. We integrate
          the latest technologies to ensure your app is scalable, secure, and
          equipped with advanced features that meet your business objectives.
        </p>
      </div>
      <div className="service-card">
        <h2>Data Analytics</h2>
        <p>
          At Technik Nest, we offer comprehensive data analytics services that
          turn complex data into clear, actionable insights. Our team employs
          advanced analytical techniques to analyze your data, identify trends,
          and provide strategic recommendations that drive business growth and
          efficiency. We help businesses harness the power of their data by
          providing detailed reports and visualizations that facilitate informed
          decision-making.
        </p>
      </div>
</div>
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
          <a href="#" className="service-link">Learn More</a>
        </div>
        <div className="service-card1">
          <h2 className="service-title">App Development</h2>
          <p className="service-description">
            We create high-performance, custom mobile apps with seamless design and functionality,
            ensuring a superior user experience across platforms.
          </p>
          <a href="#" className="service-link">Learn More</a>
        </div>
        <div className="service-card1">
          <h2 className="service-title">Graphic Designing</h2>
          <p className="service-description">
            We create high-impact, custom graphic designs with seamless creativity and precision,
            ensuring a strong brand presence across all platforms.
          </p>
          <a href="#" className="service-link">Learn More</a>
        </div>
      </div>
    </div>


    <div className="service-shape-bottom1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" fill="#FFFFFF">
          <path
            className="shape-fill"
            d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7 c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4 c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
          ></path>
        </svg>
      </div>

      
      {/* Second shape that will be flipped */}
     
    </div>
  );
};

export default Services;
