import React from "react";
import './styles.css';
import Image from '../../assets/s.png';

const Welcome = () => {
    return (
        <section id="home" className="section welcome-area bg-overlay overflow-hidden d-flex align-items-center">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-md-7">
                        <div className="welcome-intro">
                            <h1 className="text-white">Welcome To</h1>
                            <h2 className="text-white">Technik Nest</h2>
                            <p className="text-white my-4">
                                Technik Nest is a leading software development house in Pakistan, specializing in crafting custom software solutions, web applications, and mobile apps. Our dedicated team blends cutting-edge technology with industry expertise to deliver innovative and efficient solutions that drive business success. Committed to excellence and customer satisfaction, Technik Nest transforms complex challenges into seamless, user-friendly products that align with your goals and vision.
                            </p>
                            <div className="button-container">
                                <button className="mainbtn">Start a Project</button>
                                <button className="mainbtn1">Contact With Us</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-5">
                        <div className="welcome-thumb-wrapper mt-5 mt-md-0">
                            <span className="welcome-thumb-1">
                                <img className="welcome-animation d-block ml-auto" src={Image} alt="Technik Nest" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape shape-bottom">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" fill="#FFFFFF">
                    <path className="shape-fill" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7 c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4 c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path>
                </svg>
            </div>
        </section>
    );
}

export default Welcome;