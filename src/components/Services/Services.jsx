import React from "react";
import "./Services.css";
import Navbar from "../Home/NavBar";
import Services from "../Home/Services-short";
import Footer from "../Home/footer";

const ServicesMain = () => {
  return (
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
      );
      }
      export default ServicesMain;