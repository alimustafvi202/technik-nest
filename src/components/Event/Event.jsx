import React from 'react';
import img from '../../assets/Event/29 jan.jpg';
import Navbar from '../Home/Navbar/NavBar';
import Bg from "../../assets/Event/bg.jpg";
import Contact from '../Home/Contact/contact';
import Footer from '../Home/Footer/footer';
import { Link } from 'react-router-dom';

const NewsEvents = () => {
  return (
    <>
      <Navbar />
      <div
        className="relative bg-cover bg-center text-white p-24 rounded-lg"
        style={{
          backgroundImage: `url(${Bg})`,
          height: "500px",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
        <div className="relative z-10 text-center pt-24">
          <h1 className="text-4xl font-extrabold mb-6">Stay Updated with the Latest News & Events</h1>
          <p className="text-lg mb-12 leading-relaxed">
            Stay connected with Technik Nest to discover the latest happenings, announcements, and updates. 
          </p>
        </div>
      </div>

      <div className="h-screen w-full bg-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">News & Events</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Link to="/gallery">  {/* Add the link to the gallery here */}
                <img
                  src={img} // Replace with actual image path
                  alt="PSDF Free Courses"
                  className="w-full h-72 object-cover cursor-pointer" // Adding cursor-pointer for hover effect
                />
              </Link>
              <div className="p-6">
                <div className="flex items-start">
                  <div className="text-center pr-6 border-r border-gray-300">
                    <h3 className="text-4xl font-bold text-red-600">30</h3>
                    <p className="text-sm font-medium text-gray-700">JAN</p>
                  </div>
                  <div className="pl-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">Linux For Cyber Defenders</h3>
                    <div className="text-sm text-blue-600 flex items-center mb-2">
                      <span className="mr-2">⏰</span> 11:00 am - 12:00 pm
                    </div>
                    <div className="text-sm text-blue-600 flex items-center">
                      <span className="mr-2">📍</span> Pak-Austria Fachhochschule
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Add more cards as needed */}

          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
};

export default NewsEvents;
