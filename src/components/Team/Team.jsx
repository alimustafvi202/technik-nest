import React from "react";
import Navbar from '../Home/Navbar/NavBar';
import Footer from "../Home/Footer/footer";
import TeamHeroImage from '../../assets/Team/1.jpg';
import Member1 from '../../assets/Team/dp1.png';
import Member2 from '../../assets/Team/fahad.jpg';
import Member3 from '../../assets/Team/ahsan.jpeg';
import Member4 from '../../assets/Team/hassan.jpeg';
import Member5 from '../../assets/Team/aleem.jpeg';
import Member6 from '../../assets/Team/abdullah.png';
import Member8 from '../../assets/Team/iqra.png';
import Member9 from '../../assets/Team/wajahat.png';
import Member10 from '../../assets/Team/abdulfahad.png';
import Member11 from '../../assets/Team/zainab.png';

const teamMembers = [
  { Name: "Muhammad Ali", role: "Founder & CEO", img: Member1, social: { facebook: "https://facebook.com/m.alimustafvi202", linkedin: "https://linkedin.com/in/alimustafviofficial1", instagram: "https://instagram.com/alimustafvi202", github: "https://github.com/alimustafvi202/" } },
  { Name: "Fahad Sajid", role: "Chief Operating Officer", img: Member2, social: { github: "https://github.com/fahad4920/", linkedin: "https://www.linkedin.com/in/fahad-sajid-660043268/" } },
  { Name: "Ahsan Naseer", role: "IT Manager", img: Member3, social: { linkedin: "https://www.linkedin.com/in/ahsan-naseer-3617aa25b/" } },
  { Name: "Hassan Ali", role: "Software Developer", img: Member4, social: { linkedin: "https://linkedin.com/in/hassanali202/", github: "https://github.com/hassanali167" } },
  { Name: "Syed Aleem", role: "HR Manager", img: Member5, social: { linkedin: "https://www.linkedin.com/in/syed-aleem-gillani-0bbb76269/", instagram: "https://www.instagram.com/_aleem_syed97?igsh=ZGhwYWljeXF3bnkx", facebook: "https://www.facebook.com/share/191NGraXzP/" } },
  { Name: "Iqra Bibi", role: "Frontend Developer", img: Member8, social: { facebook: "https://www.facebook.com/share/18JujxwXBt/", linkedin: "https://www.linkedin.com/in/iqra-bibi-906993312" } },
  { Name: "Abdullah", role: "MERN Stack Developer", img: Member6, social: { facebook: "https://www.facebook.com/just.abdullah.dev/", linkedin: "https://www.linkedin.com/in/just-abdullah/", instagram: "https://www.instagram.com/just_abdullah_._/", github: "https://github.com/just-abdullah-dev/" } },
  { Name: "Wajahat Khan", role: "Flutter Developer", img: Member9, social: { facebook: "https://www.facebook.com/wajahatkhanmarwat30", linkedin: "https://www.linkedin.com/in/abdul-wajahat-khan-61b096265/" } },
  { Name: "Abdul Fahad", role: "WordPress Developer", img: Member10, social: { facebook: "https://www.facebook.com/share/1A64386QWb//", linkedin: "https://www.linkedin.com/in/fahad-marwat-6a5060265/" } },
  { Name: "Zainab Raza", role: "Content Writer", img: Member11, social: { linkedin: "https://www.linkedin.com/in/zainab-raza-5ab752316?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", instagram: "https://www.instagram.com/isabella126973?igsh=MTl2ZDgwaHlzeTBuZA%3D%3D&utm_source=qr", facebook: "https://www.facebook.com/share/14ytnNaoby/?mibextid=wwXIfr" } }
];

const OurTeamPage = () => {
  return (
    <>
      <div className="min-h-screen">
        <Navbar />
        <div
        className="relative bg-cover bg-center text-white p-6 sm:p-16 lg:p-24 rounded-lg"
        style={{
          backgroundImage: `url(${TeamHeroImage})`,
          height: "500px",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70 rounded-lg"></div>
        <div className="relative z-30 text-center mt-12  pt-12 sm:pt-2 pb-8 px-4 sm:px-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 sm:mb-6">Our Team</h1>
        <p className="text-lg sm:text-xl mb-6 max-w-2xl mx-auto">
        Technik Nest is at the forefront of innovation, fueling growth in the digital era with AI-driven solutions. Our team fosters success by equipping businesses with the skills and knowledge to navigate industry trends and thrive in an ever-changing landscape.
        </p></div>
      </div>
        <div className="py-10">
          <div className="flex flex-wrap justify-center gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white w-60 rounded-lg shadow-md overflow-hidden">
                <div className="bg-teal-500 h-20 relative">
                  <div className="absolute top-10 left-1/2 transform -translate-x-1/2">
                    {member.img && (
                      <img className="w-20 h-20 rounded-full border-4 border-white" src={member.img} alt={member.Name} />
                    )}
                  </div>
                </div>
                <div className="mt-12">
                  <h2 className="text-xl text-center font-bold text-red-600">{member.Name}</h2>
                  <p className="text-gray-500 text-center">{member.role}</p>
                </div>
                <div className="flex justify-center space-x-6 mt-4 text-gray-400">
                  {member.social.facebook && <a href={member.social.facebook} className="hover:text-teal-500" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>}
                  {member.social.linkedin && <a href={member.social.linkedin} className="hover:text-teal-500" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>}
                  {member.social.instagram && <a href={member.social.instagram} className="hover:text-teal-500" aria-label="Instagram"><i className="fab fa-instagram"></i></a>}
                  {member.social.github && <a href={member.social.github} className="hover:text-teal-500" aria-label="GitHub"><i className="fab fa-github"></i></a>}
                </div>
                <div className="mt-6 flex">
                      <div className="flex-1 h-2 bg-red-500"></div>
                      <div className="flex-1 h-2 bg-teal-500"></div>
                      <div className="flex-1 h-2 bg-yellow-500"></div>
                    </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OurTeamPage;




