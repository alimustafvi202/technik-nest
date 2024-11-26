import React, { useState, useEffect } from "react";
import "./Internships.css";
import Navbar from "../Navbar/NavBar";
import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/footer';
import Img1 from "../../../assets/internship/intern1.jpg";
import Img2 from "../../../assets/internship/intern2.webp";
import Img3 from "../../../assets/internship/intern3.jpg";
import Img4 from "../../../assets/internship/intern4.avif";
import Img5 from "../../../assets/internship/intern5.webp";
import Img6 from "../../../assets/internship/intern6.jpg";
import Img7 from "../../../assets/internship/intern7.webp";
import Img8 from "../../../assets/internship/intern8.webp";
import Img9 from "../../../assets/internship/intern9.avif";
import Img10 from "../../../assets/internship/intern10.jpg";
const internshipsData = [
  { title: "Software Developer Intern", description: "Work on developing new features for our platform.", imageUrl: Img1 },
  { title: "Web Developer Intern", description: "Assist with frontend and backend development tasks.", imageUrl: Img2 },
  { title: "Data Analyst Intern", description: "Analyze large datasets and provide insights.", imageUrl: Img3 },
  { title: "UX/UI Design Intern", description: "Help design user-friendly interfaces and experiences.", imageUrl: Img4  },
  { title: "AI/ML Intern", description: "Support our marketing campaigns and strategies.", imageUrl: Img5 },
  { title: "Chatbot Dev Intern", description: "Assist with product strategy and development planning.", imageUrl: Img6  },
  { title: "Cyber Security Intern", description: "Provide support to customers and handle inquiries.", imageUrl: Img7  },
  { title: "Python Developer Intern", description: "Assist with recruitment and employee onboarding.", imageUrl:Img8  },
  { title: "App Developer Intern", description: "Test new products and ensure quality standards.", imageUrl: Img9},
  { title: "Graphic Designer Intern", description: "Support business development initiatives and partnerships.", imageUrl: Img10 }
];

const Internships = () => {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false); // Hide Preloader after 2 seconds
    }, 500);

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  return (
    <>
      {showPreloader ? <Preloader /> : null} {/* Render Preloader only if showPreloader is true */}
      
      {/* Render other components after Preloader is hidden */}
      {!showPreloader && (
        <div className="internship">
          {/* Header Section */}
          <Navbar />
          <header className="internship-header">
            <div className="internship-container">
              <h1>Explore Our Internship Opportunities</h1>
              <p>Join our team at Technik Nest and gain valuable hands-on experience in software development, AI, and more.</p>
      
            </div>
          </header>
          
          {/* Internship List Section */}
          <div className="internship-list">
            {internshipsData.map((internship, index) => (
              
              <div key={index} className="internship-item">
<img src={internship.imageUrl} alt={internship.title} className="internship-item-image" />
                <div className="internship-item-content">
                  <h3 className="internship-item-title">{internship.title}</h3>
                  <p className="internship-item-description">{internship.description}</p>
                  <a href="#" className="internship-apply-btn">Apply Now</a>
                </div>
                
              </div>
            ))}
          </div>
          <Footer/>
        </div>
      )}
    </>
  );
};

export default Internships;
