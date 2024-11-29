import React from "react";
import Navbar from '../../../../Home/Navbar/NavBar';
import Footer from "../../../../Home/Footer/footer";
import AppImage from '../../../../../assets/app/hero-app.jpg';

const AppDevelopmentPage = () => {
  const apps = [
    { name: "Fitness App", description: "Track workouts and health.", img: "/images/app1.jpg" },
    { name: "E-commerce App", description: "Sell products on mobile.", img: "/images/app2.jpg" },
    { name: "Food Delivery App", description: "Deliver food conveniently.", img: "/images/app3.jpg" },
    { name: "Educational App", description: "Learn anywhere, anytime.", img: "/images/app4.jpg" },
    { name: "Task Management App", description: "Boost productivity.", img: "/images/app5.jpg" },
    { name: "Social Media App", description: "Connect with others.", img: "/images/app6.jpg" },
    { name: "Healthcare App", description: "Book doctor appointments.", img: "/images/app7.jpg" },
    { name: "News App", description: "Stay updated.", img: "/images/app8.jpg" },
    { name: "Travel App", description: "Book tickets and hotels.", img: "/images/app9.jpg" },
    { name: "Messaging App", description: "Real-time communication.", img: "/images/app10.jpg" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <Navbar/>

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[400px] flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${AppImage})` }} // Corrected way to insert the image URL
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative text-center z-10">
          <h2 className="text-4xl font-bold mb-4">Revolutionizing Your Ideas into Mobile Apps</h2>
          <p className="text-lg mb-6">We create high-performance, user-friendly apps for your business needs.</p>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {apps.map((app, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105"
            >
              <img
                src={app.img}
                alt={app.name}
                className="w-full h-48 object-cover group-hover:opacity-80 transition"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{app.name}</h3>
                <p className="text-gray-600">{app.description}</p>
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

export default AppDevelopmentPage;
