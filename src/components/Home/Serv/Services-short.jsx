import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./serv.css";

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    { title: "Web Development", description: "Responsive, user-friendly websites for businesses.", link: "/web" },
    { title: "App Development", description: "High-performance custom mobile apps with seamless design.", link: "/app" },
    { title: "Graphic Designing", description: "Custom graphic designs that ensure a strong brand presence.", link: "/graphic" },
    { title: "Digital Marketing", description: "Reach target audiences through SEO, social media, and ads.", link: "/digital-marketing" },
    { title: "E-commerce Solutions", description: "End-to-end solutions for secure and seamless online selling.", link: "/ecommerce" },
    { title: "UI/UX Design", description: "Intuitive, user-friendly designs that enhance engagement.", link: "/uiux" },
    { title: "Cloud Services", description: "Scale operations with secure, efficient cloud infrastructure.", link: "/cloud" },
    { title: "Cybersecurity", description: "Advanced security services to protect businesses from threats.", link: "/cybersecurity" },
    { title: "AI & Machine Learning", description: "Automate processes and gain insights with AI solutions.", link: "/ai-ml" },
    { title: "Software Development", description: "Custom software solutions for streamlined operations.", link: "/software" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [services.length]);

  const visibleServices = services.slice(currentIndex, currentIndex + 3).concat(
    currentIndex + 3 > services.length
      ? services.slice(0, (currentIndex + 3) % services.length)
      : []
  );

  return (
    <div>
      <div className="service-shape-bottom">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" fill="#FFFFFF">
          <path
            className="shape-fill"
            d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7 c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4 c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
          ></path>
        </svg>
      </div>
      <div className="services-container">
        <h1 className="services-title">We provide the best digital services</h1>
        <p className="services-description">
          Technik Nest is your trusted partner for cutting-edge digital solutions. We offer a
          comprehensive range of services designed to help your business thrive in the digital age.
          From website development and mobile app creation to digital marketing and e-commerce
          solutions, our team of experts delivers innovative and effective strategies tailored to your
          unique needs.
        </p>

        <div className="services-slider">
          <div className="services-cards">
            {visibleServices.map((service, index) => (
              <div key={index} className="service-card">
                <h2 className="service-title">{service.title}</h2>
                <p className="service-description">{service.description}</p>
                <Link to={service.link} className="service-link">
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
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
