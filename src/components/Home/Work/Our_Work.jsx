import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules"; 
import { useNavigate } from "react-router-dom";
import "swiper/css/bundle"; 
import Img1 from '../../../assets/work/broucher.jpg';
import Img2 from '../../../assets/work/summer.jpg';
import Img3 from '../../../assets/work/my.png';
import Img4 from '../../../assets/work/vote.png';
import Img5 from '../../../assets/work/markaz e ilm.png';
import Img6 from '../../../assets/work/chatbot.png';
import Img7 from '../../../assets/work/chatting.png';
import Img8 from '../../../assets/work/Create-a-free-ecommerce-website.jpg';
import Img9 from '../../../assets/work/portfolio.png';
import Img10 from '../../../assets/work/ATS-Password-Checker-Tool.jpg.png';

const PastWork = () => {
  const [leftArrowActive, setLeftArrowActive] = useState(false);
  const [rightArrowActive, setRightArrowActive] = useState(false);

  const projects = [
    {
      title: "Broucher Design",
      description: "Graphic Designing Project",
      image: Img1,
    },
    {
      title: "Poster Design",
      description: "Graphic Designing Project",
      image: Img2,
    },
    {
      title: "Card Design",
      description: "Graphic Designing Project",
      image: Img3,
    },
    {
      title: "Voting System",
      description: "Web Development Project",
      image: Img4,
    },
    {
      title: "Markaz e ilm",
      description: "Full Stack Project",
      image: Img5,
    },
    {
      title: "Personalized Chatbot",
      description: "AI/ML Project",
      image: Img6,
    },
    {
      title: "Chatting App",
      description: "AI Project",
      image: Img7,
    },
    {
      title: "E-commerce",
      description: "App Development Project ",
      image: Img8,
    },
    {
      title: "Portfolio",
      description: "3D Modeling Website Project",
      image: Img9,
    },
    {
      title: "Pass Strength Meter",
      description: "Cyber Security Project",
      image: Img10,
    },
  ];
  
  

  const swiperRef = useRef(null);
  const navigate = useNavigate();

  const handleViewMore = () => {
    navigate("/portfolio"); // Navigates to the portfolio page
  };

  const handlePrevClick = () => {
    if (swiperRef.current) swiperRef.current.swiper.slidePrev();
  };

  const handleNextClick = () => {
    if (swiperRef.current) swiperRef.current.swiper.slideNext();
  };

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">Our Work</h1>
        <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-10">
          Our recent projects showcase our ability to deliver innovative digital solutions that drive business growth. From developing cutting-edge e-commerce platforms to creating engaging mobile apps, our team has successfully tackled a diverse range of challenges. Explore our portfolio to see how we’ve helped businesses like yours achieve their goals.
        </p>

        <div className="relative">
          <Swiper
            ref={swiperRef}
            spaceBetween={30}
            slidesPerView={1} // Default for mobile
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 1 }, // One project on mobile
              768: { slidesPerView: 2 }, // Two projects on tablets
              1024: { slidesPerView: 4 }, // Four projects on larger screens
            }}
            navigation={{ prevEl: ".prev-arrow", nextEl: ".next-arrow" }} // Custom navigation arrows
            modules={[Autoplay, Navigation]}
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <div
                  className="bg-white p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 w-full"
                  style={{ width: "260px", height: "300px", margin: "auto" }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                  <p className="text-gray-600 mt-2">{project.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Left Arrow - Only on mobile */}
          <button
            onMouseDown={() => setLeftArrowActive(true)}
            onMouseUp={() => setLeftArrowActive(false)}
            onClick={handlePrevClick}
            className={`absolute top-1/2 left-2 transform -translate-y-1/2 text-3xl text-gray-500 cursor-pointer transition-all duration-300 opacity-100 sm:hidden ${leftArrowActive ? 'animate-ping' : ''}`}
            style={{ zIndex: 10 }}
          >
            &#8592; {/* Left Arrow */}
          </button>

          {/* Right Arrow - Only on mobile */}
          <button
            onMouseDown={() => setRightArrowActive(true)}
            onMouseUp={() => setRightArrowActive(false)}
            onClick={handleNextClick}
            className={`absolute top-1/2 right-2 transform -translate-y-1/2 text-3xl text-gray-500 cursor-pointer transition-all duration-300 opacity-100 sm:hidden ${rightArrowActive ? 'animate-ping' : ''}`}
            style={{ zIndex: 10 }}
          >
            &#8594; {/* Right Arrow */}
          </button>
        </div>

        {/* View More Button */}
        <div className="text-center mt-8">
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

export default PastWork;
