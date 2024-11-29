import React, { useState } from "react";
import Navbar from "../../Navbar/NavBar";
import Footer from "../../Footer/footer";
import HeroImage from "../../../../assets/web/WebImage.jpg";


const ServicesPage = () => {
  // Categories and Subcategories
  const services = [
    {
      category: "Web Development",
      items: [
        { name: "E-commerce Website", description: "Sell your products online seamlessly.", img: "/images/web1.jpg" },
        { name: "Portfolio Website", description: "Showcase your work beautifully.", img: "/images/web2.jpg" },
        { name: "Corporate Website", description: "Professional websites for businesses.", img: "/images/web3.jpg" },
        { name: "Educational Website", description: "Online learning platforms.", img: "/images/web4.jpg" },
        { name: "Blog Website", description: "Personal or multi-author blogs.", img: "/images/web5.jpg" },
        { name: "News Website", description: "Publish news and articles.", img: "/images/web6.jpg" },
        { name: "Landing Page", description: "Promote products or campaigns.", img: "/images/web7.jpg" },
        { name: "Non-Profit Website", description: "Raise awareness and donations.", img: "/images/web8.jpg" },
        { name: "Real Estate Website", description: "List properties with ease.", img: "/images/web9.jpg" },
        { name: "Event Website", description: "Manage events and tickets online.", img: "/images/web10.jpg" },
      ],
    },
    {
      category: "Graphic Designing",
      items: [
        { name: "Logo Design", description: "Custom logo for your brand.", img: "/images/graphic1.jpg" },
        { name: "Flyer Design", description: "Promote your events effectively.", img: "/images/graphic2.jpg" },
        { name: "Business Card Design", description: "Professional business cards.", img: "/images/graphic3.jpg" },
        { name: "Brochure Design", description: "Informative brochures.", img: "/images/graphic4.jpg" },
        { name: "Social Media Graphics", description: "Stand out on social platforms.", img: "/images/graphic5.jpg" },
        { name: "Infographic Design", description: "Visual storytelling.", img: "/images/graphic6.jpg" },
        { name: "Poster Design", description: "Eye-catching posters.", img: "/images/graphic7.jpg" },
        { name: "Web Banner Design", description: "Attractive banners.", img: "/images/graphic8.jpg" },
        { name: "Packaging Design", description: "Product packaging solutions.", img: "/images/graphic9.jpg" },
        { name: "Presentation Design", description: "Make impactful presentations.", img: "/images/graphic10.jpg" },
      ],
    },
    {
      category: "App Development",
      items: [
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
              <div className="p-4">
                <h4 className="text-xl font-bold mb-2">{item.name}</h4>
                <p className="text-gray-600">{item.description}</p>
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
