import React from "react";
import Navbar from '../../../../Home/Navbar/NavBar';
import Footer from "../../../../Home/Footer/footer";
import AppImage from '../../../../../assets/app/hero-app.jpg';
import Img1 from '../../../../../assets/Services/app/1.png';
import Img2 from '../../../../../assets/Services/app/2.png';
import Img3 from '../../../../../assets/Services/app/3.png';
import Img4 from '../../../../../assets/Services/app/4.png';
import Img5 from '../../../../../assets/Services/app/5.png';
import Img6 from '../../../../../assets/Services/app/6.png';
import Img7 from '../../../../../assets/Services/app/7.jpg';
import Img8 from '../../../../../assets/Services/app/8.webp';
import Img9 from '../../../../../assets/Services/app/9.png';
import Img10 from '../../../../../assets/Services/app/10.png';
const AppDevelopmentPage = () => {
  const apps = [
    { name: "Fitness App", description: "Track workouts and health.", img: Img1 },
    { name: "E-commerce App", description: "Sell products on mobile.", img:Img2  },
    { name: "Food Delivery App", description: "Deliver food conveniently.", img:Img3  },
    { name: "Educational App", description: "Learn anywhere, anytime.", img: Img4  },
    { name: "Task Management App", description: "Boost productivity.", img: Img5  },
    { name: "Social Media App", description: "Connect with others.", img: Img6 },
    { name: "Healthcare App", description: "Book doctor appointments.", img: Img7 },
    { name: "News App", description: "Stay updated.", img:Img8 },
    { name: "Travel App", description: "Book tickets and hotels.", img: Img9  },
    { name: "Messaging App", description: "Real-time communication.", img: Img10  },
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
              <div className="p-4 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">{app.name}</h3>
                  <p className="text-gray-600">{app.description}</p>
                </div>
                <button className="px-6 py-2 text-lg font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600 whitespace-nowrap">
  Order Now
</button>
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