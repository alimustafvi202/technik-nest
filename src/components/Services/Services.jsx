import React, { useState, useEffect } from "react"; // Import useState and useEffect
import "./Services.css";
import Navbar from "../Home/NavBar";
import Services from "../Home/Services-short";
import Footer from "../Home/footer";
import Preloader from '../Home/Preloader';
const ServicesMain = () => {
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
   
    <div className="services">
           {/* Header Section */}
      <Navbar/>
      <header className="services-header">
        <div className="container">
          <h1>What We Offer</h1>
          <p>HOME &gt; Services</p>
        </div>
      </header>
      <Services/>
      <Footer/>
      </div>
        )}
        </>
      );
      };
      export default ServicesMain;