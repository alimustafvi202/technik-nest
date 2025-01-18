import React from "react";
import Navbar from '../Home/Navbar/NavBar';
import Footer from "../Home/Footer/footer";
import TeamHeroImage from '../../assets/Team/hero.jpg';
import Member1 from '../../assets/Team/dp1.png';
import Member2 from '../../assets/Team/fahad.jpg';
import Member3 from '../../assets/Team/ahsan.jpeg';
import Member4 from '../../assets/Team/hassan.jpeg';
import Member5 from '../../assets/Team/aleem.jpeg';
import Member6 from '../../assets/Team/abdullah.png';
import Member7 from '../../assets/Team/noor.png';
const OurTeamPage = () => {
  const teamCategories = {
    Owners: [
      { name: "Muhammad Ali", role: "Founder & CEO", img: Member1 },
      { name: "Fahad Sajid", role: "Chief Operating Officer", img: Member2 },
    ],
    Developers: [
      { name: "Ahsan Naseer", role: "IT Manager", img: Member3 },
      { name: "Hassan Ali", role: "Software Developer", img: Member4 },
      { name: "Unknown", role: "Frontend Developer" },
      { name: "Abdullah", role: "Web Developer",img: Member6 },
    ],
    Media: [
      { name: "Syed Aleem", role: "HR Manager", img: Member5 },
      { name: "Unknown", role: "Graphic Designer" },
      { name: "Noor Mustafa", role: "Video Editor", img: Member7 },
    ],
  };

  return (
    <>
      <div className="min-h-screen">
        <Navbar />

        {/* Hero Section */}
        <section
          className="relative bg-cover bg-center h-[350px] flex items-center justify-center text-white mb-10"
          style={{ backgroundImage: `url(${TeamHeroImage})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          <div className="relative text-center z-10">
            <h2 className="text-5xl font-extrabold mb-4 drop-shadow-lg">Our Team</h2>
            <p className="text-lg drop-shadow-md">
              Meet the passionate individuals shaping our vision.
            </p>
          </div>
        </section>

        {/* Team Cards */}
        <div className="py-10">
          {Object.keys(teamCategories).map((category) => (
            <div key={category} className="mb-12">
              <h3 className="text-3xl font-bold mb-4 text-center">{category}</h3>
              <div className="flex flex-wrap justify-center gap-8">
                {teamCategories[category].map((member, index) => (
                  <div key={index} className="bg-white w-60 rounded-lg shadow-md overflow-hidden">
                    {/* Top Section */}
                    <div className="bg-teal-500 h-20 relative">
                      <div className="absolute top-10 left-1/2 transform -translate-x-1/2">
                        <img
                          className="w-20 h-20 rounded-full border-4 border-white"
                          src={member.img} // Dynamic image
                          alt={member.name}
                        />
                      </div>
                    </div>

                    {/* User Info */}
                    <div className="mt-12">
                      <h2 className="text-xl text-center font-bold text-red-600">{member.name}</h2>
                      <p className="text-gray-500 text-center">{member.role}</p>
                    </div>

                    {/* Social Media Links */}
                    <div className="flex justify-center space-x-6 mt-4 text-gray-400">
                      <a href="#" className="hover:text-teal-500" aria-label="Facebook">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#" className="hover:text-teal-500" aria-label="Dribbble">
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a href="#" className="hover:text-teal-500" aria-label="Twitter">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>

                    {/* Bottom Bar */}
                    <div className="mt-6 flex">
                      <div className="flex-1 h-2 bg-red-500"></div>
                      <div className="flex-1 h-2 bg-teal-500"></div>
                      <div className="flex-1 h-2 bg-yellow-500"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default OurTeamPage;
