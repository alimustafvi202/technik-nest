import React, { useState, useEffect } from 'react';
import Preloader from './Preloader/Preloader';
import Welcome from './Main/index';
import Services from './Serv/Services-short';
import OurWork from './Work/Our_Work';
import Testimonials from './Testimonial/Testimonials';
import Contact from './Contact/contact';
import Footer from './Footer/footer';
import About from './About/Abouth';
import NewsEvents from './News and Events/NewsEvents';

const Home = () => {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false); // Hide Preloader after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  return (
    <>
      {/* Render Preloader while it is active */}
      {showPreloader && <Preloader />}

      {/* Render the rest of the content after the preloader */}
      {!showPreloader && (
        <>
          <Welcome />
          <About />
          <Services />
          <OurWork />
          <NewsEvents/>
          <Testimonials />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
