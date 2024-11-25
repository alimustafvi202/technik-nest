import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/About';
import ServicesMain from './components/Services/Services';
import PastWork from './components/Portfolio/Portfolio';
import HireUs from './components/Hire-Us/Hire-Us';
import Graphic from './components/Home/Graphic/graphic';
import Navbar from './components/Home/NavBar';

function App() {
  return (
    
    <BrowserRouter>
    
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<ServicesMain />} />
        <Route path="/portfolio" element={<PastWork />} />
        <Route path="/hiring" element={<HireUs />} />
        <Route path="/graphic" element={<Graphic />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
