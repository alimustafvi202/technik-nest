import React from "react";
import "./team.css";
import Aleem from "../../../assets/Team/Aleem.png";
import Ali from "../../../assets/Team/Ali.png";
import Ahsan from "../../../assets/Team/Ahsan.png";
import Fahad from "../../../assets/Team/Fahad.png";
import Hassan from "../../../assets/Team/Hassan.png";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

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
      facebook: "https://facebook.com/",
      linkedin: "https://linkedin.com/in/",
      instagram: "https://instagram.com/",
    },
  },
];

const Team = () => {
  return (
    <section className="team-section">
      <h1>Our Team</h1>
      <p>
        We foster a collaborative environment that encourages creativity and growth.
        Each member is dedicated to turning ideas into reality with precision and passion.
        Our commitment to quality and client satisfaction sets us apart in the industry.
      </p>
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
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
