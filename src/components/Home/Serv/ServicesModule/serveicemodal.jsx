import React, { useState } from "react";
import Navbar from "../../Navbar/NavBar";
import Footer from "../../Footer/footer";
import HeroImage from "../../../../assets/web/WebImage.jpg";
import Img1 from '../../../../assets/Services/app/1.png';
import Img2 from '../../../../assets/Services/app/2.png';
import Img3 from '../../../../assets/Services/app/3.png';
import Img4 from '../../../../assets/Services/app/4.png';
import Img5 from '../../../../assets/Services/app/5.png';
import Img6 from '../../../../assets/Services/app/6.png';
import Img7 from '../../../../assets/Services/app/7.jpg';
import Img8 from '../../../../assets/Services/app/8.webp';
import Img9 from '../../../../assets/Services/app/9.png';
import Img10 from '../../../../assets/Services/app/10.png';
import App1 from '../../../../assets/Services/graphic/1.jpg';
import App2 from '../../../../assets/Services/graphic/2.jpg';
import App3 from '../../../../assets/Services/graphic/3.jpg';
import App4 from '../../../../assets/Services/graphic/4.jpg';
import App5 from '../../../../assets/Services/graphic/5.jpg';
import App6 from '../../../../assets/Services/graphic/6.jpg';
import App7 from '../../../../assets/Services/graphic/7.jpg';
import App8 from '../../../../assets/Services/graphic/8.jpg';
import App9 from '../../../../assets/Services/graphic/9.jpg';
import App10 from '../../../../assets/Services/graphic/10.png';
import Web1 from '../../../../assets/Services/web/1.jpg';
import Web2 from '../../../../assets/Services/web/Img2.avif';
import Web3 from '../../../../assets/Services/web/Img4.jpeg';
import Web4 from '../../../../assets/Services/web/Img3.jpg';
import Web5 from '../../../../assets/Services/web/Img5.webp';
import Web6 from '../../../../assets/Services/web/Img6.png';
import Web7 from '../../../../assets/Services/web/Img27.webp';
import Web8 from '../../../../assets/Services/web/Img8.jpg';
import Web9 from '../../../../assets/Services/web/Img9.png';
import Web10 from '../../../../assets/Services/web/Img10.png';
const ServicesPage = () => {
  // Categories and Subcategories
  const services = [
    {
      category: "Web Development",
      items: [
        { name: "E-commerce Website", description: "Sell your products online seamlessly.", img: Web1 },
        { name: "Portfolio Website", description: "Showcase your work beautifully.", img: Web2 },
        { name: "Corporate Website", description: "Professional websites for businesses.", img: Web3 },
        { name: "Educational Website", description: "Online learning platforms.", img: Web4 },
        { name: "Blog Website", description: "Personal or multi-author blogs.", img: Web5 },
        { name: "News Website", description: "Publish news and articles.", img: Web6 },
        { name: "Landing Page", description: "Promote products or campaigns.", img: Web7 },
        { name: "Non-Profit Website", description: "Raise awareness and donations.", img: Web8 },
        { name: "Real Estate Website", description: "List properties with ease.", img: Web9 },
        { name: "Event Website", description: "Manage events and tickets online.", img: Web10 },
      ],
    },
    {
      category: "Graphic Designing",
      items: [
        { name: "Logo Design", description: "Custom logo for your brand.", img: App1},
        { name: "Flyer Design", description: "Promote your events effectively.", img: App2},
        { name: "Business Card Design", description: "Professional business cards.", img: App3},
        { name: "Brochure Design", description: "Informative brochures.", img: App4 },
        { name: "Social Media Graphics", description: "Stand out on social platforms.", img: App5 },
        { name: "Infographic Design", description: "Visual storytelling.", img: App6},
        { name: "Poster Design", description: "Eye-catching posters.", img: App7 },
        { name: "Web Banner Design", description: "Attractive banners.", img: App8},
        { name: "Packaging Design", description: "Product packaging solutions.", img: App9},
        { name: "Presentation Design", description: "Make impactful presentations.", img: App10 },
      ],
    },
    {
      category: "App Development",
      items: [
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
      ],
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(services[0]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[400px] flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center z-10">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg mb-6">Explore our expertise across various domains.</p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4 py-8">
        <h3 className="text-2xl font-bold text-center mb-6">Service Categories</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {services.map((service, index) => (
            <button
              key={index}
              className={`px-6 py-3 rounded-lg font-semibold transition ${
                selectedCategory.category === service.category ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
              }`}
              onClick={() => setSelectedCategory(service)}
            >
              {service.category}
            </button>
          ))}
        </div>
      </section>

      {/* Subcategories Section */}
      <section className="container mx-auto px-4 py-8">
        <h3 className="text-2xl font-bold text-center mb-6">{selectedCategory.category}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {selectedCategory.items.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-48 object-cover group-hover:opacity-80 transition"
              />
              <div className="p-4 flex items-center justify-between">
              <div >
                <h4 className="text-xl font-bold mb-2">{item.name}</h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
              <button className="px-6 py-2 text-lg font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600 whitespace-nowrap">
  Order Now
</button>
</div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
