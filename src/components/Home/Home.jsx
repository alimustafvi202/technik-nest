import React, { useState, useEffect } from 'react';
import Header from './header';
import Preloader from './Preloader';
import Welcome from './index';
import Services from './Services-short';
import OurWork from './Our_Work';
import Team from './team';
import Testimonials from './Testimonials';
import Contact from './contact';
import Footer from './footer';
import { motion } from 'framer-motion';
const Home = () => {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false); // Hide Preloader after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  return (
  

    <>
      {showPreloader ? <Preloader /> : null} {/* Render Preloader only if showPreloader is true */}
      {!showPreloader && ( // Render other components after Preloader
        <>
          <Welcome />
          <Services />
          <OurWork />
          <Team />
          <Testimonials />
          <Contact />
          <Footer />
        </>
      )}
    </>
    
  );
};

export default Home;
