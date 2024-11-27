import React from "react";
import "./team.css";
import Aleem from "../../../assets/Team/Aleem.png";
import Ali from "../../../assets/Team/Ali.png";
import Ahsan from "../../../assets/Team/Ahsan.png";
import Fahad from "../../../assets/Team/Fahad.png";
import Hassan from "../../../assets/Team/Hassan.png";

const teamMembers = [
  { name: "Muhammad Ali", role: "Founder & CEO",  image: Ali,socials: {
    facebook: "https://facebook.com/syedaleem",
    linkedin: "https://linkedin.com/in/syedaleem",
    instagram: "https://instagram.com/syedaleem",
  }, },
  { name: "Syed Aleem", role: "HR Manager", image: Aleem,socials: {
    facebook: "https://facebook.com/syedaleem",
    linkedin: "https://linkedin.com/in/syedaleem",
    instagram: "https://instagram.com/syedaleem",
  }, },
  { name: "Ahsan Naseer", role: "IT Manager",  image: Ahsan,socials: {
    facebook: "https://facebook.com/syedaleem",
    linkedin: "https://linkedin.com/in/syedaleem",
    instagram: "https://instagram.com/syedaleem",
  }, },
  { name: "Fahad Sajid", role: "Project Manager",  image: Fahad,socials: {
    facebook: "https://facebook.com/syedaleem",
    linkedin: "https://linkedin.com/in/syedaleem",
    instagram: "https://instagram.com/syedaleem",
  }, },
  { name: "Hassan Ali", role: "Software Developer", image: Hassan ,socials: {
    facebook: "https://facebook.com/syedaleem",
    linkedin: "https://linkedin.com/in/syedaleem",
    instagram: "https://instagram.com/syedaleem",
  },},
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
                    <a href={member.socials.facebook} target="_blank" rel="noopener noreferrer" className="icon fb-icon"></a>
                  )}
                  {member.socials.linkedin && (
                    <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="icon linkedin-icon"></a>
                  )}
                  {member.socials.instagram && (
                    <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" className="icon insta-icon"></a>
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
