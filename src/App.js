import React, { useState, useEffect } from 'react';
import Header from './components/header';
import Preloader from './components/Preloader';
import Welcome from './components/index';


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
        
        <Header/>
          <Welcome/>
          
        </>
      )}
    </>
  );
}

export default App;
