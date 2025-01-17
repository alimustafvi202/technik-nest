import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaCode, FaMobileAlt, FaBrush, FaBullhorn, FaShoppingCart, FaDesktop, FaCloud, FaShieldAlt, FaRobot, FaCogs } from "react-icons/fa";
import "swiper/css/bundle";

const Services = () => {
  const [isMobile, setIsMobile] = useState(false);
  const swiperRef = useRef(null); // Reference for Swiper instance

  // Update screen size on load and resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize(); // Check screen size on component mount
    window.addEventListener("resize", handleResize); // Update screen size on resize
    return () => window.removeEventListener("resize", handleResize); // Clean up on unmount
  }, []);

  const services = [
    { title: "Web Development", description: "Responsive, user-friendly websites for businesses.", link: "/web", icon: <FaCode className="text-blue-500 text-5xl" /> },
    { title: "App Development", description: "High-performance custom mobile apps with seamless design.", link: "/app", icon: <FaMobileAlt className="text-green-500 text-5xl" /> },
    { title: "Graphic Designing", description: "Custom graphic designs that ensure a strong brand presence.", link: "/graphic", icon: <FaBrush className="text-purple-500 text-5xl" /> },
    { title: "Digital Marketing", description: "Reach target audiences through SEO, social media, and ads.", link: "DigitalMarketing", icon: <FaBullhorn className="text-yellow-500 text-5xl" /> },
    { title: "UI/UX Design", description: "Intuitive, user-friendly designs that enhance engagement.", link: "/ux/ui", icon: <FaDesktop className="text-teal-500 text-5xl" /> },
    { title: "Python Automation", description: "Automate tasks and workflows using Python for enhanced efficiency.", link: "/python", icon: <FaCogs className="text-indigo-500 text-5xl" /> },
    { title: "Cybersecurity", description: "Advanced security services to protect businesses from threats.", link: "/cybersecurity", icon: <FaShieldAlt className="text-red-500 text-5xl" /> },
    { title: "AI & Machine Learning", description: "Automate processes and gain insights with AI solutions.", link: "/ai-ml", icon: <FaRobot className="text-gray-500 text-5xl" /> },
    { title: "Custom Chatbot Development", description: "Build intelligent chatbots tailored to your business.", link: "/chatbot", icon: <FaRobot className="text-teal-500 text-5xl" /> },
    { title: "Prompt Engineering", description: "Optimize AI models by refining inputs to generate precise and effective outputs.", link: "/prompt-engineering", icon: <FaCogs className="text-pink-500 text-5xl" /> },
  ];

  const handlePrevClick = () => {
    if (swiperRef.current) swiperRef.current.swiper.slidePrev();
  };

  const handleNextClick = () => {
    if (swiperRef.current) swiperRef.current.swiper.slideNext();
  };

  return (
    <div>
      {/* Top SVG Shape */}
      <div className="w-full bg-gray-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          className="w-full"
          fill="#ffffff"
        >
          <path d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z" />
        </svg>
      </div>

      {/* Services Section */}
      <div className="py-12 px-6 bg-gray-200 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          We Provide the Best Digital Services
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-10">
          Technik Nest is your trusted partner for cutting-edge digital solutions. We offer a comprehensive range of services designed to help your business thrive in the digital age.
        </p>

        {/* Swiper Services Carousel */}
        <div className="relative">
          <Swiper
            ref={swiperRef}
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}  // Ensure only 1 slide is visible on mobile
            autoplay={{ delay: 3000 }}
            loop={true} // Enables looping
            breakpoints={{
              768: { slidesPerView: 2 },  // 2 slides for tablets
              1024: { slidesPerView: 4 }, // 4 slides for desktop
            }}
            className="max-w-6xl mx-auto"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div
                  className="border border-gray-300 rounded-lg shadow-lg p-6 hover:shadow-xl transform transition-all duration-500"
                  style={{ width: "260px", height: "300px", margin: "auto" }} // Fixed size
                >
                  <div className="flex justify-center mb-4">{service.icon}</div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">{service.title}</h2>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Link to={service.link} className="inline-block text-teal-400 font-semibold hover:underline">
                    Learn More
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Arrows for mobile */}
          <button
            onClick={handlePrevClick}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 text-3xl text-gray-500 cursor-pointer transition-all duration-300 sm:hidden"
            style={{ zIndex: 10 }}
          >
            &#8592; {/* Left Arrow */}
          </button>

          <button
            onClick={handleNextClick}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 text-3xl text-gray-500 cursor-pointer transition-all duration-300 sm:hidden"
            style={{ zIndex: 10 }}
          >
            &#8594; {/* Right Arrow */}
          </button>
        </div>
      </div>

      {/* Bottom Flipped SVG Shape */}
      <div className="w-full bg-gray-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          className="w-full transform scale-y-[-1]"
          fill="#ffffff"
        >
          <path d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z" />
        </svg>
      </div>
    </div>
  );
};

export default Services;
