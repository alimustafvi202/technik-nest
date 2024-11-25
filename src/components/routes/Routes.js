import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from '../Home/NavBar';
import { AnimatePresence } from 'framer-motion';
import AboutUs from '../AboutUs/About';
import ServicesMain from '../Services/Services';
import PastWork from '../Portfolio/Portfolio';
import HireUs from '../Hire-Us/Hire-Us';
import Home from '../Home/Home';
import Graphic from '../Home/Graphic/graphic';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <>
    
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
      <Navbar />
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path='/services' element={<ServicesMain/>}/>
        <Route path="/portfolio" element={<PastWork />} />
        <Route path="/hiring" element={<HireUs />} />
        <Route path="/graphic" element={<Graphic />} />
      </Routes>
    </AnimatePresence>
    </>
    
  );
};

export default AnimatedRoutes;
