import React, { useState, useEffect } from "react"; // Import useState and useEffect
import "./Portfolio.css";
import Navbar from "../Home/Navbar/NavBar";
import Contact from "../Home/Contact/contact";
import Footer from "../Home/Footer/footer";
import Testimonials from "../Home/Testimonial/Testimonials";
import Img1 from '../../assets/work/broucher.jpg';
import Img2 from '../../assets/work/summer.jpg';
import Img3 from '../../assets/work/my.png';
import Img4 from '../../assets/work/vote.png';
import Img5 from '../../assets/work/markaz e ilm.png';
import Img6 from '../../assets/work/chatbot.png';
import Img7 from '../../assets/work/chatting.png';
import Img8 from '../../assets/work/Create-a-free-ecommerce-website.jpg';
import Img9 from '../../assets/work/portfolio.png';
import Img10 from '../../assets/work/ATS-Password-Checker-Tool.jpg.png';
import Bg from "../../assets/Bg/welcome_bg.jpg";

const PastWork = () => {
  const projects = [
    { title: "Broucher Design", description: "Graphic Designing Project", image: Img1 },
    { title: "Poster Design", description: "Graphic Designing Project", image: Img2 },
    { title: "Card Design", description: "Graphic Designing Project", image: Img3 },
    { title: "Voting System", description: "Web Development Project", image: Img4 },
    { title: "Markaz e ilm", description: "Full Stack Project", image: Img5 },
    { title: "Personalized Chatbot", description: "AI/ML Project", image: Img6 },
    { title: "Chatting App", description: "AI Project", image: Img7 },
    { title: "E-commerce", description: "App Development Project", image: Img8 },
    { title: "Portfolio", description: "3D Modeling Website Project", image: Img9 },
    { title: "Pass Strength Meter", description: "Cyber Security Project", image: Img10 },
  ];
  
  return (
    <>
      
      
      {/* Render other components after Preloader is hidden */}
      (
        
          <div className="ourwork">
            {/* Header Section */}
            <Navbar />
            <div
          className="relative bg-cover bg-center text-white p-24 rounded-lg mb-10"
          style={{
            backgroundImage: `url(${Bg})`,
            height: "500px",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
          <div className="relative z-10 text-center pt-24">
            <h1 className="text-4xl font-extrabold mb-6">Our Past Work</h1>
            <p className="text-lg mb-12 leading-relaxed">
            At Technik Nest, we’ve delivered impactful digital solutions across industries, including high-performing websites, user-friendly apps, and data-driven marketing strategies. Our proven track record showcases our ability to drive growth and success for businesses of all sizes.
            </p>
          </div>
        </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-8 mb-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
            </div>
          ))}
        </div>

            <Testimonials />
            <Contact />
            <Footer />
          </div>
        
      )
    </>
  );
};

export default PastWork;
