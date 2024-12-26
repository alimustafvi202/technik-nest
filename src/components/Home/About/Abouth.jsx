import React from 'react';
import AboutImage from "../../../assets/about/1.svg";
import { useNavigate } from "react-router-dom";
import { useInView } from 'react-intersection-observer'; // Import intersection observer

const AboutUs = () => {
  const navigate = useNavigate();

  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: true, // Trigger animation once when it comes into view
    threshold: 0.2, // Trigger when 20% of the element is visible
  });

  const { ref: paragraphRef, inView: paragraphInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: buttonRef, inView: buttonInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const handleViewMore = () => {
    navigate("/about"); // Navigates to the portfolio page
  };

  return (
    <section className="bg">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Heading */}
        <h2 
          ref={headingRef} 
          className={`text-4xl font-bold text-blue-600 mb-8 transform transition-all duration-1000 ${headingInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          About Us
          <span className="block w-24 h-1 bg-blue-600 mb-4"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Paragraph */}
          <div 
            ref={paragraphRef} 
            className={`text-lg text-gray-700 transform transition-all duration-1000 ${paragraphInView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
          >
            <p className="mb-6">
              At <span className="font-semibold text-blue-600">Technik Nest</span>, we are passionate about delivering innovative solutions in the fields of software development, web applications, and mobile app development. Our team of experts works collaboratively to create custom software that enhances business operations and customer experiences.
            </p>
            <p className="mb-6">
              Founded with the mission of fostering digital transformation, we strive to bring ideas to life with creativity, precision, and cutting-edge technologies. We believe in building long-term partnerships and supporting our clients every step of the way, from concept to execution.
            </p>
            <p className="mb-6">
              Our core values of integrity, innovation, and excellence drive us to deliver results that exceed expectations. Whether you're looking to launch a new web app, create an engaging mobile app, or enhance your online presence, we are here to help you succeed.
            </p>
            <p className="font-bold text-blue-600">
              'Innovative Mind, Nesting Success' – Technik Nest
            </p>
          </div>

          {/* Image */}
          <div 
            ref={imageRef} 
            className={`flex justify-center items-center transform transition-all duration-1000 ${imageInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            <img 
              src={AboutImage} 
              alt="Technik Nest Team"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Button */}
        <div 
          ref={buttonRef} 
          className={`mt-8 transform transition-all duration-1000 ${buttonInView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
        >
          <button
            className="bg-transparent text-blue-600 py-3 px-8 border-2 border-blue-600 rounded-full font-semibold hover:bg-teal-600 hover:border-teal-600 hover:text-white transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            onClick={handleViewMore}
          >
            View More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
