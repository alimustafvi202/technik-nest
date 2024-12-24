import React from "react";
import Navbar from '../../../../Home/Navbar/NavBar';
import Footer from "../../../../Home/Footer/footer";
import EcommerceImage from '../../../../../assets/Bg/blog_bg.jpg';
import Img1 from '../../../../../assets/Services/Web.png';
import Img2 from '../../../../../assets/Services/Web.png';
// Add other images...

const EcommercePage = () => {
  const services = [
    { name: "Store Design", description: "Create a stunning online store.", img: Img1 },
    { name: "Payment Integration", description: "Secure and fast payment options.", img: Img2 },
    { name: "Shopping Cart", description: "Seamless shopping experience for users.", img: Img1 },
    { name: "Product Pages", description: "Design detailed product pages to enhance sales.", img: Img2 },
    { name: "Order Management", description: "Manage customer orders efficiently.", img: Img1 },
    { name: "Customer Support Integration", description: "Provide 24/7 support to customers.", img: Img2 },
    { name: "Inventory Management", description: "Track and manage inventory effectively.", img: Img1 },
    { name: "SEO for E-commerce", description: "Optimize your store for search engines.", img: Img2 },
    { name: "E-commerce Analytics", description: "Track and analyze your store's performance.", img: Img1 },
    { name: "Mobile-Friendly Store", description: "Ensure your store is mobile responsive.", img: Img2 },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <section
        className="relative bg-cover bg-center h-[400px] flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${EcommerceImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center z-10">
          <h2 className="text-4xl font-bold mb-4">Build Your Online Store with Ease</h2>
          <p className="text-lg mb-6">We provide end-to-end solutions for e-commerce businesses to grow online.</p>
        </div>
      </section>

      <section id="portfolio" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our E-commerce Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105">
              <img
                src={service.img}
                alt={service.name}
                className="w-full h-48 object-cover group-hover:opacity-80 transition"
              />
              <div className="p-4 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                  <p className="text-gray-600">{service.description}</p>
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

export default EcommercePage;
