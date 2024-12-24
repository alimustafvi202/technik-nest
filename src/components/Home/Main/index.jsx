import React from "react";
import './index.css';
import Image from '../../../assets/Welcome/s.png';
import Navbar from "../Navbar/NavBar";
import { Link } from "react-router-dom";
import Video from "../../../assets/Video/Video.mp4";

const Welcome = () => {
    
    return (
        
        <section className="welcome-area">
            <Navbar />
            {/* Background Video */}
            <video className="background-video" autoPlay muted loop>
                <source src = {Video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="shape">
                <div className="welcome-content">
                    {/* Welcome Text Section */}
                    <div className="welcome-text">
                        <h1>Welcome To</h1>
                        <h2>Technik Nest</h2>
                        <p>
                            Technik Nest is a leading software development house in Pakistan, specializing in crafting custom software solutions, web applications, and mobile apps. Our dedicated team blends cutting-edge technology with industry expertise to deliver innovative and efficient solutions that drive business success. Committed to excellence and customer satisfaction, Technik Nest transforms complex challenges into seamless, user-friendly products that align with your goals and vision.
                        </p>
                        <div className="button-container">
                            <Link to="/Internships" className="mainbtn">Start Internship</Link>
                            <Link to="/contact" className="mainbtn1">Contact With Us</Link>
                        </div>
                    </div>
                    {/* Welcome Image Section */}
                    <div className="welcome-image">
                        <img src={Image} alt="Technik Nest" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Welcome;
