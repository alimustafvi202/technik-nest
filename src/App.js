import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/About';
import ServicesMain from './components/Services/Services';
import PastWork from './components/Portfolio/Portfolio';
import HireUs from './components/Hire-Us/Hire-Us';
import AnimatedRoutes from './components/routes/Routes';
import Navbar from './components/Home/';



function App() {
  return (
    <Router>
      <div className="App">
      
      <AnimatedRoutes />
      
    
      </div>
    </Router>
  )
}

export default App;