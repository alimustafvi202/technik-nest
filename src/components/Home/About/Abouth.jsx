import React from "react";
import AboutImage from '../../../assets/about/1.svg'; // Image import
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <div className="flex flex-wrap items-center justify-between px-8 lg:px-20 py-12 gap-16">
      {/* About Content */}
      <div className="flex-1 max-w-lg text-left animate-fade-in">
        <h2 className="text-3xl font-bold text-black relative pb-2 after:content-[''] after:w-12 after:h-1 after:bg-blue-500 after:absolute after:bottom-0 after:left-0">
          About Us
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed mt-6">
          At Technik Nest, we specialize in creating transformative digital experiences.
          From crafting innovative web solutions to developing user-friendly mobile applications
          and unlocking insights through data analytics, we empower businesses to thrive in the digital age.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed mt-4">
          Our dedicated team of experts ensures every project is a fusion of creativity,
          technology, and strategy, tailored to meet your unique needs.
        </p>
        <Link
          to="/about"
          className="mt-6 inline-block bg-transparent text-blue-500 border-2 border-blue-500 py-3 px-6 rounded-full font-semibold hover:bg-blue-500 hover:text-white hover:shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          Learn More
        </Link>
      </div>

      {/* About Image */}
      <div className="flex-1 max-w-2xl overflow-hidden animate-slide-in">
        <img
          src={AboutImage}
          alt="About Technik Nest"
          className="w-full rounded-xl transition-transform duration-500 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default AboutSection;
