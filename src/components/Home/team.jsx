import React from "react";
import "./styles.css";
import Aleem from "../../assets/Aleem.png";
import Ali from "../../assets/Ali.png";
import Ahsan from "../../assets/Ahsan.png";
import Fahad from "../../assets/Fahad.png";
import Hassan from "../../assets/Hassan.png";

const teamMembers = [
  { name: "Muhammad Ali", role: "Founder & CEO", description: "Leading the team to success.", image: Ali },
  { name: "Syed Aleem", role: "HR Manager", description: "Fostering a collaborative culture.", image: Aleem },
  { name: "Ahsan Naseer", role: "IT Manager", description: "Ensuring seamless IT operations.", image: Ahsan },
  { name: "Fahad Sajid", role: "Project Manager", description: "Delivering projects with precision.", image: Fahad },
  { name: "Hassan Ali", role: "Software Developer", description: "Building innovative solutions.", image: Hassan },
];

const Team = () => {
  return (
    <section className="team-section">
      <h2>Our Team</h2>
      <p>
        Our diverse team of skilled professionals brings innovation and expertise to every project. Together, we strive for excellence and deliver impactful solutions.
      </p>
      <div className="team-cards">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <div className="image-container">
              <img src={member.image} alt={member.name} className="team-image" />
              <div className="overlay">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
                <span>{member.description}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
