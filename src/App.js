import React, { useState, useEffect } from 'react';
import Header from './components/header';
import Preloader from './components/Preloader';
import Welcome from './components/index';
import Services from './components/Services-short';
import OurWork from './components/Our_Work';
import Team from './components/team';
import Testimonials from './components/Testimonials';
import Contact from './components/contact';
import Footer from './components/footer';
import NavBar from './components/NavBar';


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
        
        <NavBar/>
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
