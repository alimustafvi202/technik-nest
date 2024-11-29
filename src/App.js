import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/About';
import ServicesMain from './components/Services/Services';
import PastWork from './components/Portfolio/Portfolio';
import HireUs from './components/Hire-Us/Hire-Us';
import Graphic from './components/Home/Graphic/graphic';
import Internships from './components/Home/Internship/Internships';

function App() {
  return (
    
    <BrowserRouter>
    
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<AboutUs />} />
        <Route path="/Services" element={<ServicesMain />} />
        <Route path="/Portfolio" element={<PastWork />} />
        <Route path="/Hiring" element={<HireUs />} />
        <Route path="/Graphic" element={<Graphic />} />
        <Route path="/Internships" element={<Internships />} />
        <Route path='/hire' element={<HireUs/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
