import React from "react";
import Navbar from '../../../../Home/Navbar/NavBar';
import Footer from "../../../../Home/Footer/footer";
import HeroImage from '../../../../../assets/Services/digital-marketing/hero.jpg';
import Img1 from '../../../../../assets/Services/digital-marketing/1.png';
import Img2 from '../../../../../assets/Services/digital-marketing/2.png';
import Img3 from '../../../../../assets/Services/digital-marketing/3.jpg';
import Img4 from '../../../../../assets/Services/digital-marketing/4.jpg';
import Img5 from '../../../../../assets/Services/digital-marketing/5.jpg';
import Img6 from '../../../../../assets/Services/digital-marketing/6.jpg';
import Img7 from '../../../../../assets/Services/digital-marketing/7.jpg';
import Img8 from '../../../../../assets/Services/digital-marketing/8.jpg';
import Img9 from '../../../../../assets/Services/digital-marketing/9.jpg';
import Img10 from '../../../../../assets/Services/digital-marketing/10.jpg';

const DigitalMarketingServicesPage = () => {
  const features = [
    { name: "Search Engine Optimization (SEO)", description: "Boost your website's ranking on search engines.", img: Img1 },
    { name: "Pay-Per-Click (PPC) Advertising", description: "Drive traffic with targeted ad campaigns.", img: Img2 },
    { name: "Social Media Marketing", description: "Grow your brand presence on social platforms.", img: Img3 },
    { name: "Content Marketing", description: "Engage audiences with high-quality content.", img: Img4 },
    { name: "Email Marketing", description: "Reach your audience with personalized email campaigns.", img: Img5 },
    { name: "Affiliate Marketing", description: "Leverage partnerships to increase sales.", img: Img6 },
    { name: "Influencer Marketing", description: "Collaborate with influencers to amplify your brand.", img: Img7 },
    { name: "Video Marketing", description: "Create compelling video content to engage audiences.", img: Img8 },
    { name: "Web Analytics & Reporting", description: "Measure performance and optimize strategies.", img: Img9 },
    { name: "Online Reputation Management", description: "Protect and enhance your brand’s online image.", img: Img10 },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <section
        className="relative bg-cover bg-center h-[400px] flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center z-10">
          <h2 className="text-4xl font-bold mb-4">Grow Your Business Digitally</h2>
          <p className="text-lg mb-6">Comprehensive digital marketing services tailored for success.</p>
        </div>
      </section>
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Digital Marketing Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105"
            >
              <img src={feature.img} alt={feature.name} className="w-full h-48 object-cover group-hover:opacity-80 transition" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{feature.name}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default DigitalMarketingServicesPage;
