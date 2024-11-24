import React from "react";
import "./Portfolio.css";
import Navbar from "../Home/NavBar";
import OurWork from "../Home/Our_Work";
import Contact from "../Home/contact";
import Footer from "../Home/footer";
import Testimonials from "../Home/Testimonials";

const PastWork = () => {
  return (
    <div className="ourwork">
      {/* Header Section */}
      <Navbar/>
      <header className="ourwork-header">
        <div className="ourwork-container">
          <h1>Our Past Work</h1>
          <p>Home &gt; HireUs</p>
        </div>
      </header>
      <OurWork/>
      <Testimonials/>
      <Contact/>
      <Footer/>
      </div>
      );
      }
      export default PastWork;