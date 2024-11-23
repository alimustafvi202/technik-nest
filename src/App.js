import React, { useState, useEffect } from 'react';
import Header from './components/Home/header';
import Preloader from './components/Home/Preloader';
import Welcome from './components/Home/index';
import Services from './components/Home/Services-short';
import OurWork from './components/Home/Our_Work';
import Team from './components/Home/team';
import Testimonials from './components/Home/Testimonials';
import Contact from './components/Home/contact';
import Footer from './components/Home/footer';
import Navbar from './components/Home/NavBar';


function App() {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false); // Hide Preloader after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  return (
    <>
      {showPreloader ? <Preloader /> : null} {/* Render Preloader only if showPreloader is true */}
      {!showPreloader && ( // Render other components after Preloader
        <>
        
        <Navbar/>
          <Welcome/>
          <Services/>
          <OurWork/>
          <Team/>
          <Testimonials/>
          <Contact/>
          <Footer/>
        </>
      )}
    </>
  );
}

export default App;
