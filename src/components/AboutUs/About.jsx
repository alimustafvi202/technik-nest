import {React, useState, useEffect } from "react";
import "./About.css";
import Footer from "../Home/footer";
import Contact from "../Home/contact";
import Navbar from "../Home/NavBar";
import Preloader from "../Home/Preloader";

// Import images
import aboutThumb1 from "../../assets/about/about_thumb_1.jpg";
import missionImage from "../../assets/about/about_thumb_2.png";
import whatWeDoImage from "../../assets/about/about_thumb_3.png";

const AboutUs = () => {

  const [showPreloader, setShowPreloader] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setShowPreloader(false); // Hide Preloader after 2 seconds
      }, 500);
  
      return () => clearTimeout(timer); // Cleanup timer on component unmount
    }, []);
  
    return (
      <>
        {showPreloader ? <Preloader /> : null} {/* Render Preloader only if showPreloader is true */}
        
        {/* Render other components after Preloader is hidden */}
        {!showPreloader && (

    <div className="about-us">
      <Navbar />

      {/* Intro Section */}
      <section className="about-intro">
        <div className="about-container">
          <div className="about-intro-content">
            <h1>ABOUT US</h1>
            <p className="about-intro-text">
              We provide solutions that grow your business.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-overview-section">
        <div className="about-container">
          {/* First Row - Image on Right */}
          <div className="about-row reverse">
            <div className="col about-text-column">
              <h2>We provide solutions that grow your business.</h2>
              <p>
                At TechX Hub, we believe in building long-lasting relationships
                with our clients. Our focus is on delivering reliable, scalable,
                and innovative solutions tailored to meet your business goals.
                We’re committed to exceeding your expectations and helping your
                business thrive.
              </p>
            </div>
            <div className="about-col image-column">
              <img src={aboutThumb1} alt="Coder Illustration" />
            </div>
          </div>

          {/* Second Row - Image on Right */}
          <div className="about-row reverse">
            <div className="about-col image-column">
              <img src={missionImage} alt="Mission Illustration" />
            </div>
            <div className="col about-text-column">
              <h2>Our Mission</h2>
              <p>
                Our mission is to empower businesses and institutions with
                state-of-the-art software solutions that drive efficiency,
                enhance user experiences, and foster growth. We strive to
                provide tools and support that help you succeed.
              </p>
            </div>
          </div>

          {/* Third Row - Image on Left */}
          <div className="about-row">
            <div className="about-col image-column">
              <img src={whatWeDoImage} alt="What We Do Illustration" />
            </div>
            <div className="col about-text-column">
              <h2>What We Do</h2>
              <p>
                Custom Software Development: We design and develop specific
                solutions that address unique challenges and opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
       )}
    </>
  );
};

export default AboutUs;
