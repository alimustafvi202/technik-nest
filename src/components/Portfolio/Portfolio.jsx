import React, { useState, useEffect } from "react"; // Import useState and useEffect
import "./Portfolio.css";
import Navbar from "../Home/Navbar/NavBar";
import OurWork from "../Home/Work/Our_Work";
import Contact from "../Home/Contact/contact";
import Footer from "../Home/Footer/footer";
import Testimonials from "../Home/Testimonial/Testimonials";
import Preloader from '../Home/Preloader/Preloader';

const PastWork = () => {
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
        
          <div className="ourwork">
            {/* Header Section */}
            <Navbar />
            <header className="ourwork-header">
              <div className="ourwork-container">
                <h1>Our Past Work</h1>
                <p>Home &gt; HireUs</p>
              </div>
            </header>
            <OurWork />
            <Testimonials />
            <Contact />
            <Footer />
          </div>
        
      )}
    </>
  );
};

export default PastWork;
