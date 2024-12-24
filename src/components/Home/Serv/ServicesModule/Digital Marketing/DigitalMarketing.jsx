import React from "react";
import Navbar from '../../../../Home/Navbar/NavBar';
import Footer from "../../../../Home/Footer/footer";
import DigitalMarketingImage from '../../../../../assets/Bg/blog_bg.jpg';
import Img1 from '../../../../../assets/Services/Web.png';
import Img2 from '../../../../../assets/Services/Web.png';
// Add other images...

const DigitalMarketingPage = () => {
  const services = [
    { name: "SEO Optimization", description: "Improve your website's search engine ranking.", img: Img1 },
    { name: "Social Media Marketing", description: "Reach your audience through social platforms.", img: Img2 },
    { name: "PPC Campaigns", description: "Drive traffic through pay-per-click advertising.", img: Img1 },
    { name: "Content Marketing", description: "Create and distribute valuable content.", img: Img2 },
    { name: "Email Marketing", description: "Engage your audience with email newsletters.", img: Img1 },
    { name: "Affiliate Marketing", description: "Collaborate with affiliates to boost sales.", img: Img2 },
    { name: "Influencer Marketing", description: "Promote your brand through influencers.", img: Img1 },
    { name: "Video Marketing", description: "Utilize videos to promote products/services.", img: Img2 },
    { name: "Conversion Rate Optimization", description: "Increase conversion rates on your website.", img: Img1 },
    { name: "Online Reputation Management", description: "Maintain a positive online reputation.", img: Img2 },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <section
        className="relative bg-cover bg-center h-[400px] flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${DigitalMarketingImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center z-10">
          <h2 className="text-4xl font-bold mb-4">Boost Your Business with Our Digital Marketing Solutions</h2>
          <p className="text-lg mb-6">We provide innovative strategies to grow your online presence and drive traffic.</p>
        </div>
      </section>

      <section id="portfolio" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Digital Marketing Services</h2>
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

export default DigitalMarketingPage;
