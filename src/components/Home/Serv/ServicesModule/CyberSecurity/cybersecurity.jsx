import React from "react";
import Navbar from '../../../../Home/Navbar/NavBar';
import Footer from "../../../../Home/Footer/footer";
import HeroImage from '../../../../../assets/Services/cybersecurity/hero.jpg';
import Img1 from '../../../../../assets/Services/cybersecurity/1.png';
import Img2 from '../../../../../assets/Services/cybersecurity/2.png';
import Img3 from '../../../../../assets/Services/cybersecurity/3.png';
import Img4 from '../../../../../assets/Services/cybersecurity/4.png';
import Img5 from '../../../../../assets/Services/cybersecurity/5.png';
import Img6 from '../../../../../assets/Services/cybersecurity/6.png';

const CybersecurityServicesPage = () => {
  const features = [
    { name: "Network Security", description: "Protect your network from unauthorized access and threats.", img: Img1 },
    { name: "Threat Detection", description: "Identify and mitigate potential threats in real time.", img: Img2 },
    { name: "Data Encryption", description: "Secure sensitive data with advanced encryption techniques.", img: Img3 },
    { name: "Endpoint Protection", description: "Safeguard devices from malware and cyber attacks.", img: Img4 },
    { name: "Vulnerability Assessments", description: "Identify weak points in your system for proactive security.", img: Img5 },
    { name: "Incident Response", description: "Quickly respond to and recover from security breaches.", img: Img6 },
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
          <h2 className="text-4xl font-bold mb-4">Secure Your Digital World</h2>
          <p className="text-lg mb-6">Comprehensive cybersecurity solutions tailored for your needs.</p>
        </div>
      </section>
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Cybersecurity Capabilities</h2>
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

export default CybersecurityServicesPage;
