import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Home/Footer/footer";
import Contact from "../Home/Contact/contact";
import Navbar from "../Home/Navbar/NavBar";
import Bg from "../../assets/gallery/bg.png";
import img1 from "../../assets/gallery/Workshop1/3.JPG";
import img2 from "../../assets/gallery/Workshop2/1.png";
import img3 from "../../assets/gallery/Workshop2/1.png";

const events = [
  {
    id: 1,
    name: "Linux for Cyber Defenders",
    thumbnail: img1,
    gallery: "/gallery/workshop1",
    date: "Jan 30, 2025",
    location: "Pak Austria University"
  },
  {
    id: 2,
    name: "AI Seminar",
    thumbnail: img3,
    gallery: "/gallery/workshop2",
    date: "Feb 26, 2025",
    location: "Abbottabad University Havelian"
  }
];

export default function EventGallery() {
  const navigate = useNavigate();

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
        <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
        <div className="relative z-30 text-center mt-10  pt-5 sm:pt-2 pb-8 px-4 sm:px-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 sm:mb-6">Event Gallery</h1>
        <p className="text-lg sm:text-xl mb-6 max-w-2xl mx-auto">
            Welcome to our Event Gallery! Here, you can explore highlights from our past workshops, bootcamps, and seminars. 
            Each event is a testament to our commitment to fostering knowledge, innovation, and collaboration. 
            Relive the moments, browse through the photos, and get inspired for future events. 
            Whether it's a hands-on workshop, an insightful seminar, or an intensive bootcamp, 
            our gallery captures the essence of learning and growth. Dive in and experience the journey!
          </p></div>
      </div>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Event Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 container mx-auto">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition duration-300"
            >
              <div className="relative group">
                <img src={event.thumbnail} alt={event.name} className="w-full h-60 object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-white p-4">
                  <p className="text-lg"><span className="mr-1">⏰</span> Date: {event.date}</p>
                  <p className="text-lg"><span className="mr-1">📍</span>Location: {event.location}</p>
                </div>
              </div>
              <div className="p-4 text-center flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-800">{event.name}</h2>
                <span 
                  onClick={() => navigate(event.gallery)} 
                  className="text-blue-500 hover:text-blue-700 cursor-pointer transition duration-300 flex items-center"
                >
                  View Gallery →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
}
