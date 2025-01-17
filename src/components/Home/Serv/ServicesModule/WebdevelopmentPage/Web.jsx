import React from "react";
import Navbar from "../../../Navbar/NavBar";
import Footer from "../../../Footer/footer";
import WebImage from '../../../../../assets/web/WebImage.jpg';
import Img1 from '../../../../../assets/Services/web/1.jpg';
import Img2 from '../../../../../assets/Services/web/Img2.avif';
import Img3 from '../../../../../assets/Services/web/Img4.jpeg';
import Img4 from '../../../../../assets/Services/web/Img3.jpg';
import Img5 from '../../../../../assets/Services/web/Img5.webp';
import Img6 from '../../../../../assets/Services/web/Img6.png';
import Img7 from '../../../../../assets/Services/web/Img27.webp';
import Img8 from '../../../../../assets/Services/web/Img8.jpg';
import Img9 from '../../../../../assets/Services/web/Img9.png';
import Img10 from '../../../../../assets/Services/web/Img10.png';

const WebDevelopmentPage = () => {
  const websites = [
    { name: "E-commerce Website", description: "Sell your products online seamlessly.", img: Img1 },
    { name: "Portfolio Website", description: "Showcase your work beautifully.", img: Img2 },
    { name: "Corporate Website", description: "Professional websites for businesses.", img: Img3 },
    { name: "Educational Website", description: "Online learning platforms.", img: Img4 },
    { name: "Blog Website", description: "Personal or multi-author blogs.", img: Img5 },
    { name: "News Website", description: "Publish news and articles.", img: Img6 },
    { name: "Landing Page", description: "Promote products or campaigns.", img: Img7 },
    { name: "Non-Profit Website", description: "Raise awareness and donations.", img: Img8 },
    { name: "Real Estate Website", description: "List properties with ease.", img: Img9 },
    { name: "Event Website", description: "Manage events and tickets online.", img: Img10 },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <Navbar />

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
              <div className="p-4 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">{website.name}</h3>
                  <p className="text-gray-600">{website.description}</p>
                </div>
               
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default WebDevelopmentPage;
