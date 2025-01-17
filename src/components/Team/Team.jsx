import React from "react";
import Navbar from '../Home/Navbar/NavBar';
import Footer from "../Home/Footer/footer";
import TeamHeroImage from '../../assets/Team/hero.jpg';
import Member1 from '../../assets/Team/dp1.png';
import Member2 from '../../assets/Team/fahad.jpg';
import Member3 from '../../assets/Team/ahsan.jpeg';
import Member4 from '../../assets/Team/hassan.jpeg';
import Member5 from '../../assets/Team/aleem.jpeg';

const OurTeamPage = () => {
  const teamCategories = {
    Owners: [
      { name: "Muhammad Ali", role: "Founder & CEO", img: Member1 },
      { name: "Fahad Sajid", role: "Chief Operating Officer", img: Member2 },
    ],
    Developers: [
      { name: "Ahsan Naseer", role: "IT Manager", img: Member3 },
      { name: "Hassan Ali", role: "Software Developer", img: Member4 },
    ],
    Marketing: [
      { name: "Syed Aleem", role: "HR Manager", img: Member5 },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[350px] flex items-center justify-center text-white"
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

      {/* Team Section */}
      <section className="container mx-auto px-6 py-12 space-y-12">
        {Object.keys(teamCategories).map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <h3 className="text-3xl font-bold text-gray-700 mb-6 text-center uppercase">
              {category}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamCategories[category].map((member, memberIndex) => (
                <div
                  key={memberIndex}
                  className="bg-white shadow-md rounded-lg overflow-hidden text-center p-6 transform transition hover:scale-105"
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-gray-200"
                  />
                  <h4 className="text-xl font-semibold text-gray-800">{member.name}</h4>
                  <p className="text-sm text-gray-500 mb-2">{member.role}</p>
                  <p className="text-xs text-gray-600">
                    Dedicated to driving innovation and success through expertise.
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <Footer />
    </div>
  );
};

export default OurTeamPage;
