import React from "react";
import './styles.css';
import Web from '../../assets/Web.png';
import App from '../../assets/app.png';
const OurWork = () => {
    return(
        <div className="portfolio">
            <h1 className="portfolio-title">We provide the best digital services</h1>
            <p className="portfolio-description">
                Technik Nest is your trusted partner for cutting-edge digital solutions. We offer a
                comprehensive range of services designed to help your business thrive in the digital age.
                From website development and mobile app creation to digital marketing and e-commerce
                solutions, our team of experts delivers innovative and effective strategies tailored to your
                unique needs.
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
            <button className="portbtn">View More</button>
        </div>
        </div>
    );
};

export default OurWork;
