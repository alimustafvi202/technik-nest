import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/About';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;