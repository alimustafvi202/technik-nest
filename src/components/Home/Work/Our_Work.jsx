import React from "react";
import './port.css';
import Web from '../../../assets/Services/Web.png';
import App from '../../../assets/Services/app.png';
import { Link } from "react-router-dom";
const OurWork = () => {
    return(
        <div className="portfolio">
            <h1 className="portfolio-title">Our Work</h1>
            <p className="portfolio-description">
            Our recent projects showcase our ability to deliver innovative digital solutions that drive business growth. From developing cutting-edge e-commerce platforms to creating engaging mobile apps, our team has successfully tackled a diverse range of challenges. Explore our portfolio to see how we’ve helped businesses like yours achieve their goals.
            </p>
            <div className="portfolio-grid">
                <div className="portfolio-card1">
                    <div className="portfolio-image-container">
                        <img src={Web} alt="Web Development" className="portfolio-image"/>
                        <div className="portfolio-hover-text">
                            <h2 className="portfolio-hover-title">Web Development</h2>
                            <p className="portfolio-hover-description">
                                At Technik Nest, we build responsive, user-friendly websites tailored to drive
                                engagement and optimize performance for businesses.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="portfolio-card1">
                    <div className="portfolio-image-container">
                        <img src={App}alt="App Development" className="portfolio-image"/>
                        <div className="portfolio-hover-text">
                            <h2 className="portfolio-hover-title">App Development</h2>
                            <p className="portfolio-hover-description">
                                We create high-performance, custom mobile apps with seamless design and functionality,
                                ensuring a superior user experience across platforms.
                            </p>
                        </div>
                    </div>
                </div>
      {      /*    <div className="portfolio-card1">
                    <div className="portfolio-image-container">
                        <img src="graphic-designing-image.jpg" alt="Graphic Designing" className="portfolio-image"/>
                        <div className="portfolio-hover-text">
                            <h2 className="portfolio-hover-title">Graphic Designing</h2>
                            <p className="portfolio-hover-description">
                                We create high-impact, custom graphic designs with seamless creativity and precision,
                                ensuring a strong brand presence across all platforms.
                            </p>
                        </div>
                    </div>
                </div>*/}
            </div>
            <div>
            <Link to = '/allservices' className="portbtn">View More</Link>
        </div>
        </div>
    );
};

export default OurWork;
