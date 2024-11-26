import React from "react";
import './styles.css';
import Image from '../../assets/s.png';
import Navbar from "./NavBar";
import { Link } from "react-router-dom";

const Welcome = () => {
    return (
        <section className="welcome-area">
            <Navbar />
            <div className="container">
                <div className="welcome-content">
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
                    <div className="welcome-image">
                        <img src={Image} alt="Technik Nest" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Welcome;
