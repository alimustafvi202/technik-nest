import React, { useState, useEffect } from "react";
import "./team.css";
import Aleem from "../../../assets/Team/Aleem.png";
import Ali from "../../../assets/Team/Ali.png";
import Ahsan from "../../../assets/Team/Ahsan.png";
import Fahad from "../../../assets/Team/Fahad.png";
import Hassan from "../../../assets/Team/Hassan.png";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Navigation } from "swiper/modules";

const teamMembers = [
  {
    name: "Muhammad Ali",
    role: "Founder & CEO",
    image: Ali,
    socials: {
      facebook: "https://facebook.com/alimustafviofficial1",
      linkedin: "https://linkedin.com/in/alimustafviofficial1",
      instagram: "https://instagram.com/alimustafviofficial1",
    },
  },
  {
    name: "Syed Aleem",
    role: "HR Manager",
    image: Aleem,
    socials: {
      facebook: "https://facebook.com/",
      linkedin: "https://linkedin.com/in/",
      instagram: "https://instagram.com/",
    },
  },
  {
    name: "Ahsan Naseer",
    role: "IT Manager",
    image: Ahsan,
    socials: {
      facebook: "https://facebook.com/",
      linkedin: "https://linkedin.com/in/",
      instagram: "https://instagram.com/",
    },
  },
  {
    name: "Fahad Sajid",
    role: "Project Manager",
    image: Fahad,
    socials: {
      facebook: "https://facebook.com/",
      linkedin: "https://linkedin.com/in/",
      instagram: "https://instagram.com/",
    },
  },
  {
    name: "Hassan Ali",
    role: "Software Developer",
    image: Hassan,
    socials: {
      github: "https://github.com/hassanali167",
      linkedin: "https://www.linkedin.com/in/hassanali202/",
    },
  },
];

const Team = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size to determine if it's mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call it initially to set the correct state

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="team-section">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">Our Team</h1>
      <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-10">
        We foster a collaborative environment that encourages creativity and growth.
        Each member is dedicated to turning ideas into reality with precision and passion.
        Our commitment to quality and client satisfaction sets us apart in the industry.
      </p>
      
      {/* Conditionally render Swiper on mobile */}
      {isMobile ? (
        <Swiper
          spaceBetween={20}
          slidesPerView={1} // Show only one team member at a time
          loop={true}
          pagination={{ clickable: true }}
          navigation={true} // Enable navigation arrows
          modules={[Navigation]} // Import the Navigation module for swiper
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="team-card">
                <div className="image-container">
                  <img src={member.image} alt={member.name} className="team-image" />
                  <div className="overlay">
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                    <div className="social-icons">
                      {member.socials.facebook && (
                        <a href={member.socials.facebook} target="_blank" rel="noopener noreferrer" className="icon fb-icon">
                          <FaFacebookF />
                        </a>
                      )}
                      {member.socials.linkedin && (
                        <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="icon linkedin-icon">
                          <FaLinkedinIn />
                        </a>
                      )}
                      {member.socials.instagram && (
                        <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" className="icon insta-icon">
                          <FaInstagram />
                        </a>
                      )}
                      {member.socials.github && (
                        <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="icon github-icon">
                          <FaGithub />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="team-cards">
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>
              <div className="image-container">
                <img src={member.image} alt={member.name} className="team-image" />
                <div className="overlay">
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                  <div className="social-icons">
                    {member.socials.facebook && (
                      <a href={member.socials.facebook} target="_blank" rel="noopener noreferrer" className="icon fb-icon">
                        <FaFacebookF />
                      </a>
                    )}
                    {member.socials.linkedin && (
                      <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="icon linkedin-icon">
                        <FaLinkedinIn />
                      </a>
                    )}
                    {member.socials.instagram && (
                      <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" className="icon insta-icon">
                        <FaInstagram />
                      </a>
                    )}
                    {member.socials.github && (
                      <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="icon github-icon">
                        <FaGithub />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Team;
