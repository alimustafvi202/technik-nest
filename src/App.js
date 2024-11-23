import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home'; // Import the Home component
import About from './components/AboutUs/About';
import Services from './components/Services/Services';
import Team from './components/Team/Team';
import Portfolio from './components/Portfolio/Portfolio';


const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define routes for different components */}
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="team" element={<Team />} />
        <Route path="portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  );
};

export default App;
