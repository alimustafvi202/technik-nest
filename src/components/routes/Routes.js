import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import AboutUs from '../AboutUs/About';
import ServicesMain from '../Services/Services';
import PastWork from '../Portfolio/Portfolio';
import HireUs from '../Hire-Us/Hire-Us';
import Home from '../Home/Home';
import Graphic from '../Home/Graphic/graphic';
import Navbar from '../Home/NavBar';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <>
    <Navbar />
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
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
