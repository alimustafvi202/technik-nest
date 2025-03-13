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
import Bg from "../../../assets/Bg/welcome_bg.jpg";
const internshipsData = [
  
  { title: "Web Developer Intern", description: "Assist with frontend and backend development tasks.", imageUrl: Img2 },
  { title: "Data Analyst Intern", description: "Analyze large datasets and provide insights.", imageUrl: Img3 },
  { title: "UX/UI Design Intern", description: "Help design user-friendly interfaces and experiences.", imageUrl: Img4  },
  { title: "AI/ML Intern", description: "Support our marketing campaigns and strategies.", imageUrl: Img5 },
  { title: "Chatbot Dev Intern", description: "Assist with product strategy and development planning.", imageUrl: Img6  },
  { title: "Cyber Security Intern", description: "Provide support to customers and handle inquiries.", imageUrl: Img7  },
  { title: "Python Developer Intern", description: "Assist with recruitment and employee onboarding.", imageUrl:Img8  },
  { title: "App Developer Intern", description: "Test new products and ensure quality standards.", imageUrl: Img9},
  { title: "Graphic Designer Intern", description: "Support business development initiatives and partnerships.", imageUrl: Img10 },
  { title: "Software Developer Intern", description: "Work on developing new features for our platform.", imageUrl: Img1 }
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
          <Navbar/>
          <div
        className="relative bg-cover bg-center text-white p-6 sm:p-16 lg:p-24 rounded-lg"
        style={{
          backgroundImage: `url(${Bg})`,
          height: "500px",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70 rounded-lg"></div>
        <div className="relative z-30 text-center mt-12  pt-12 sm:pt-2 pb-8 px-4 sm:px-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 sm:mb-6">News & Events</h1>
        <p className="text-lg sm:text-xl mb-6 max-w-2xl mx-auto">
        Stay up to date with the latest news and events at Technik Nest! From exciting workshops and bootcamps to insightful seminars, we keep you informed about all the happenings that drive knowledge, innovation, and collaboration. Keep an eye on this section for updates and get inspired for what’s coming next!  </p></div>
      </div>
          
          {/* Internship List Section */}
          <div className="internship-list">
            {internshipsData.map((internship, index) => (
              
              <div key={index} className="internship-item">
<img src={internship.imageUrl} alt={internship.title} className="internship-item-image" />
                <div className="internship-item-content">
                  <h3 className="internship-item-title">{internship.title}</h3>
                  <p className="internship-item-description">{internship.description}</p>
                  <a href="/hire" className="internship-apply-btn">Apply Now</a>
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
