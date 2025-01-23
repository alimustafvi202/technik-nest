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
import Team from './components/Team/Team';
import Python from './components/Home/Serv/ServicesModule/Python/cloudservices';
import UIUX from './components/Home/Serv/ServicesModule/UXUI/UXUI';
import DigitalMarketingPage from './components/Home/Serv/ServicesModule/Digital Marketing/DigitalMarketing';
import CybersecurityServicesPage from './components/Home/Serv/ServicesModule/CyberSecurity/cybersecurity';
import AIAndMachineLearningServicesPage from './components/Home/Serv/ServicesModule/ai-ml/AIAndMachineLearningServicesPage';
import MaintenancePage from './components/Home/Serv/ServicesModule/CustomSoftware/custom software development';
import ChatMaintenancePage from './components/Home/Serv/ServicesModule/CustomSoftware/custom software development';
import PMaintenancePage from './components/Home/Serv/ServicesModule/CustomSoftware/custom software development';
import NewsEvents from './components/Event/Event';
import Contact from './components/ContactUs/contact';
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
        <Route path='/team' element={<Team/>}/>
        <Route path='/python' element={<Python/>}/>
        <Route path='/ux/ui' element={<MaintenancePage/>}/>
        <Route path='/digital-marketing' element={<DigitalMarketingPage/>}/>
        <Route path='/cybersecurity' element={<CybersecurityServicesPage/>}/>
        <Route path='/ai-ml' element={<AIAndMachineLearningServicesPage/>}/>
        <Route path='/software' element={<MaintenancePage/>}/>
        <Route path='/chatbot' element={<ChatMaintenancePage/>}/>
        <Route path='/promptengineering' element={<PMaintenancePage/>}/>
        <Route path ='/event' element={<NewsEvents/>}/>
        <Route path ='/contact' element={<Contact/>}/>
  </Routes>
    </BrowserRouter>
  );
}

export default App;
