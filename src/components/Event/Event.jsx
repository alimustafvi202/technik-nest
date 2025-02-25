import React from 'react';
import Navbar from '../Home/Navbar/NavBar';
import Bg from "../../assets/Event/bg.jpg";
import Contact from '../Home/Contact/contact';
import Footer from '../Home/Footer/footer';
import { Link, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useInView } from "react-intersection-observer";
import img1 from "../../assets/Event/29 jan.jpg";
import img2 from "../../assets/Event/AUST.png";
import img3 from "../../assets/Event/29 jan.jpg";
import img4 from "../../assets/Event/29 jan.jpg";

const eventsData = [
    
  {
    id: 2,
    date: "26",
    month: "Feb",
    title: "Cyber Security, AI, Cloud Computing",
    time: "10:00 am - 12:00 pm",
    location: "Abbottabad University Havelian",
    image: img2,
  },
  {
    id: 1,
    date: "30",
    month: "JAN",
    title: "Linux for Cyber Defenders: Shell Scripting",
    time: "11:00 am - 12:00 pm",
    location: "Pak-Austria Fachhochschule",
    image: img1,
  }

];

const NewsEvents = () => {
  const navigate = useNavigate();

  const { ref: buttonRef, inView: buttonInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const handleViewMore = () => {
    navigate("/event");
  };

  return (
    <>
      <Navbar />
      <div
        className="relative bg-cover bg-center text-white p-6 sm:p-16 lg:p-24 rounded-lg"
        style={{
          backgroundImage: `url(${Bg})`,
          height: "500px",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70 rounded-lg"></div>
        <div className="relative z-30 text-center mt-12  pt-12 sm:pt-2 pb-8 px-4 sm:px-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 sm:mb-6">News & Events</h1>
        <p className="text-lg sm:text-xl mb-6 max-w-2xl mx-auto">
        Stay up to date with the latest news and events at Technik Nest! From exciting workshops and bootcamps to insightful seminars, we keep you informed about all the happenings that drive knowledge, innovation, and collaboration. Keep an eye on this section for updates and get inspired for what’s coming next!  </p></div>
      </div>

      <div className="h-screen w-full bg-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">News & Events</h2>

          {/* Swiper for Events */}
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          modules={[Pagination]}
        >
          {eventsData.map((event) => (
            <SwiperSlide key={event.id}>
              <div className="bg-white shadow-md rounded-md overflow-hidden w-full flex flex-col">
                <Link to="/gallery">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-46 object-cover cursor-pointer"
                  />
                </Link>
                <div className="p-4 flex flex-col flex-grow">
                  <div className="flex items-start">
                    <div className="text-center pr-4 border-r border-gray-300">
                      <h3 className="text-3xl font-semibold text-red-600">
                        {event.date}
                      </h3>
                      <p className="text-xs font-medium text-gray-700">
                        {event.month}
                      </p>
                    </div>
                    <div className="pl-4 flex-grow">
                      <h3 className="text-base font-bold text-gray-800 mb-2 text-left">
                        {event.title}
                      </h3>
                      <div className="text-xs text-blue-600 flex items-center mb-2">
                        <span className="mr-1">⏰</span> {event.time}
                      </div>
                      <div className="text-xs text-blue-600 flex items-center">
                        <span className="mr-1">📍</span> {event.location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
};

export default NewsEvents;
