import React from "react";
import "./styles.css";
import Aleem from "../../assets/Aleem.png";
import Ali from "../../assets/Ali.png";
import Ahsan from "../../assets/Ahsan.png";
import Fahad from "../../assets/Fahad.png";
import Hassan from "../../assets/Hassan.png";

const teamMembers = [
  { name: "Muhammad Ali", role: "Founder & CEO", description: "Muhammad Ali, the Founder and CEO of Technik Nest, leads the company with a vision to transform businesses through innovative technology solutions. A Software Engineering student and passionate entrepreneur, Muhammad Ali brings a wealth of experience in app development, artificial intelligence, and custom software design. Under his leadership, Technik Nest has grown into a trusted partner for businesses looking to navigate the complexities of digital transformation. Muhammad Ali’s leadership philosophy is centered on collaboration, creativity, and adaptability, ensuring that the company delivers cutting-edge solutions tailored to clients' unique needs. He is dedicated to fostering a culture of innovation within his team, empowering them to push boundaries and redefine what’s possible in the digital landscape.", image: Ali },
  { name: "Syed Aleem", role: "HR Manager", description: "Syed Aleem is the HR Manager at Technik Nest, where he focuses on cultivating a supportive and innovative work environment. With expertise in recruitment, employee engagement, and professional development, Syed ensures the company attracts and retains top talent.He plays a pivotal role in building a strong company culture, emphasizing teamwork, growth, and creativity. Syed’s strategic approach to HR management aligns with Technik Nest’s goals, ensuring that employees feel valued and motivated to contribute to the company’s mission. His efforts in fostering collaboration and communication have been instrumental in the team's continued success.", image: Aleem },
  { name: "Ahsan Naseer", role: "IT Manager", description: "Ahsan Naseer serves as the IT Manager at Technik Nest, where he plays a critical role in ensuring the company’s technological infrastructure runs seamlessly. With a comprehensive understanding of IT systems, cybersecurity, and network administration, Ahsan ensures that the organization remains efficient, secure, and future-ready.He takes charge of evaluating new technologies, optimizing IT processes, and troubleshooting complex technical challenges. Ahsan’s approach focuses on integrating the latest advancements in technology to support the team in delivering top-tier solutions. His commitment to innovation and excellence enables Technik Nest to stay ahead in the rapidly evolving tech industry.", image: Ahsan },
  { name: "Fahad Sajid", role: "Project Manager", description: "Fahad Sajid is the dynamic Project Manager at Technik Nest, where he expertly oversees the successful delivery of diverse projects, ensuring alignment with the company's vision of providing innovative software solutions. With a strong aptitude for strategic planning and resource management, Fahad is skilled at turning ideas into tangible results.Leveraging his expertise in project lifecycle management, he collaborates closely with cross-functional teams, fostering clear communication and ensuring that every project milestone is met with precision. Fahad is known for his ability to anticipate challenges and implement proactive solutions, enabling the team to deliver exceptional value to clients on time and within budget.", image: Fahad },
  { name: "Hassan Ali", role: "Software Developer", description: "Hassan Ali is a highly skilled Software Developer at Technik Nest, specializing in creating innovative software that addresses real-world problems. With a strong background in Software Engineering, he has hands-on experience in app development, artificial intelligence, and technology integration. Hassan is committed to building scalable, user-friendly applications that empower businesses and enhance user experiences.He takes a proactive approach to development, constantly staying updated with emerging technologies to ensure that Technik Nest delivers solutions that are both innovative and robust. Hassan’s attention to detail and commitment to quality make him a driving force behind the company's technical success.", image: Hassan },
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
