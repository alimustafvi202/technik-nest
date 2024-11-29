import React from "react";
import Navbar from "../../../Navbar/NavBar";
import Footer from "../../../Footer/footer";
import WebImage from '../../../../../assets/web/WebImage.jpg';

const WebDevelopmentPage = () => {
  const websites = [
    { name: "E-commerce Website", description: "Sell your products online seamlessly.", img: "/images/web1.jpg" },
    { name: "Portfolio Website", description: "Showcase your work beautifully.", img: "/images/web2.jpg" },
    { name: "Corporate Website", description: "Professional websites for businesses.", img: "/images/web3.jpg" },
    { name: "Educational Website", description: "Online learning platforms.", img: "/images/web4.jpg" },
    { name: "Blog Website", description: "Personal or multi-author blogs.", img: "/images/web5.jpg" },
    { name: "News Website", description: "Publish news and articles.", img: "/images/web6.jpg" },
    { name: "Landing Page", description: "Promote products or campaigns.", img: "/images/web7.jpg" },
    { name: "Non-Profit Website", description: "Raise awareness and donations.", img: "/images/web8.jpg" },
    { name: "Real Estate Website", description: "List properties with ease.", img: "/images/web9.jpg" },
    { name: "Event Website", description: "Manage events and tickets online.", img: "/images/web10.jpg" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <Navbar/>

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[400px] flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${WebImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center z-10">
          <h2 className="text-4xl font-bold mb-4">Building Stunning Websites to Elevate Your Brand</h2>
          <p className="text-lg mb-6">Crafting responsive and user-friendly websites for all your business needs.</p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {websites.map((website, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105"
            >
              <img
                src={website.img}
                alt={website.name}
                className="w-full h-48 object-cover group-hover:opacity-80 transition"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{website.name}</h3>
                <p className="text-gray-600">{website.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default WebDevelopmentPage;
