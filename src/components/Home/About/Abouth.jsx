import React from "react";
import "./Abouth.css";
import AboutImage from '../../../assets/about/1.svg'; // Renamed the import to avoid conflict
import { Link } from "react-router-dom";
const AboutSection = () => {
  return (
    <div className="about-section">
      <div className="about-content">
        <h2>About Technik Nest</h2>
        <p>
          At Technik Nest, we specialize in creating transformative digital experiences. 
          From crafting innovative web solutions to developing user-friendly mobile applications 
          and unlocking insights through data analytics, we empower businesses to thrive in the digital age.
        </p>
        <p>
          Our dedicated team of experts ensures every project is a fusion of creativity, 
          technology, and strategy, tailored to meet your unique needs.
        </p>
        <Link to ="/about" className="learn-more-btn">Learn More</Link>
      </div>
      <div className="about-image">
        <img
          src={AboutImage} // Referencing the renamed import
          alt="About Technik Nest"
        />
      </div>
    </div>
  );
};

export default AboutSection;
