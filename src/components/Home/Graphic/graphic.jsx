import React from 'react';
import './graphic.css';
import designImage1 from '../../../assets/Graphic/wallpaperflare.com_wallpaper.jpg';
import designImage2 from '../../../assets/Graphic/1684418406-GRD101_Image.jpg';
import designImage3 from '../../../assets/Graphic/gray-desk-with-laptop-notepad-with-blank-sheet-pot-flower-stylus-tablet-retouching.jpg';
import Navbar from '../Navbar/NavBar';

const Graphic = () => {
    return (
        
        <div className="graphic-page">
            <Navbar/>
            <section className="hero-section">
                <h1>Unleash Your Creativity</h1>
                <p>We craft stunning designs that leave lasting impressions.</p>
            </section>

            <section className="parallax-section" style={{ backgroundImage: `url(${designImage1})` }}>
                <div className="parallax-content">
                    <h2>Custom Branding</h2>
                    <p>Your brand deserves a unique and memorable identity.</p>
                </div>
            </section>

            <section className="content-section">
                <div className="split-content">
                    <div className="split-text">
                        <h2>Modern Layouts</h2>
                        <p>
                            We design layouts that combine aesthetics with functionality, ensuring your message is clear and impactful.
                        </p>
                    </div>
                    <div className="split-image">
                        <img src={designImage2} alt="Modern Layouts" />
                    </div>
                </div>
            </section>

            <section className="parallax-section" style={{ backgroundImage: `url(${designImage3})` }}>
                <div className="parallax-content">
                    <h2>Immersive Experiences</h2>
                    <p>We design visuals that captivate your audience and drive engagement.</p>
                </div>
            </section>

            <footer className="foot-bar">
  <div className="foot-content">
    <div className="foot-left">
      &copy; 2024 All Rights Reserved
    </div>
    <div className="foot-right">
      Made with <span className="heart-icon">&hearts;</span> by <a href="https://techniknest.tech" target="_blank" rel="noopener noreferrer">Technik Nest</a>
    </div>
  </div>
</footer>
        </div>
    );
};

export default Graphic;