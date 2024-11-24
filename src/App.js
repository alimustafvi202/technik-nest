import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/About';
import ServicesMain from './components/Services/Services';
import PastWork from './components/Portfolio/Portfolio';
import HireUs from './components/Hire-Us/Hire-Us';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path='/services' element={<ServicesMain/>}/>
        <Route path="/portfolio" element={<PastWork />} />
        <Route path="/hiring" element={<HireUs />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;