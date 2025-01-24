import React from "react";
import Navbar from '../../../../Home/Navbar/NavBar';
import Footer from '../../../../Home/Footer/footer';

// Images for Custom Software Development Services
import HeroImageCustomSoftware from '../../../../../assets/Services/custom-software/hero.jpg';
import CSImg1 from '../../../../../assets/Services/custom-software/1.jpg';
import CSImg2 from '../../../../../assets/Services/custom-software/2.png';
import CSImg6 from '../../../../../assets/Services/custom-software/6.jpg';
import CSImg7 from '../../../../../assets/Services/custom-software/7.jpg';
import CSImg8 from '../../../../../assets/Services/custom-software/8.jpg';
import CSImg9 from '../../../../../assets/Services/custom-software/9.jpg';
import CSImg10 from '../../../../../assets/Services/custom-software/10.jpg';

const CustomSoftwarePage = () => {
  const features = [
    { name: "Enterprise Applications", description: "Scalable solutions for large organizations.", img: CSImg1 },
    { name: "API Development", description: "Seamless integrations with robust APIs.", img: CSImg2 },
    { name: "Database Management", description: "Efficient and secure data handling solutions.", img: CSImg6 },
    { name: "Software Modernization", description: "Upgrade legacy systems to modern standards.", img: CSImg7 },
    { name: "Custom ERP Solutions", description: "Streamline business operations with tailored ERPs.", img: CSImg8 },
    { name: "Automation Tools", description: "Optimize workflows with custom automation.", img: CSImg9 },
    { name: "Technical Support Services", description: "Dedicated support for your software needs.", img: CSImg10 },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <section
        className="relative bg-cover bg-center h-[400px] flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${HeroImageCustomSoftware})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center z-10">
          <h2 className="text-4xl font-bold mb-4">Tailored Software Solutions</h2>
          <p className="text-lg mb-6">Custom applications built to solve your unique challenges.</p>
        </div>
      </section>
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Custom Software Development Services</h2>
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

export default CustomSoftwarePage;