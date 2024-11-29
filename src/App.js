import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/About';
import ServicesMain from './components/Services/Services';
import PastWork from './components/Portfolio/Portfolio';
import HireUs from './components/Hire-Us/Hire-Us';
import Graphic from './components/Home/Serv/ServicesModule/Graphic/graphic';
import Internships from './components/Home/Internship/Internships';
import WebDevelopmentPage from './components/Home/Serv/ServicesModule/WebdevelopmentPage/Web';
import AppDevelopmentPage from './components/Home/Serv/ServicesModule/App/app';
import ServicesPage from './components/Home/Serv/ServicesModule/serveicemodal';

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
        <Route path='/web' element={<WebDevelopmentPage/>}/>
        <Route path='/app' element={<AppDevelopmentPage/>}/>
        <Route path='/allservices' element={<ServicesPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
