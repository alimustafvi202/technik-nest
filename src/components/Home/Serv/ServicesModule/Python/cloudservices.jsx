import React from "react";
import Navbar from '../../../Navbar/NavBar';
import Footer from "../../../Footer/footer";
import HeroImage from '../../../../../assets/Services/python/hero.jpg';
import Img1 from '../../../../../assets/Services/python/1.png';
import Img2 from '../../../../../assets/Services/python/2.png';
import Img3 from '../../../../../assets/Services/python/3.jpg';
import Img4 from '../../../../../assets/Services/python/4.jpg';
import Img5 from '../../../../../assets/Services/python/5.jpg';
import Img6 from '../../../../../assets/Services/python/6.png';

const PythonAutomationPage = () => {
  const features = [
    { name: "Data Processing", description: "Automate data collection and analysis.", img: Img1 },
    { name: "Web Scraping", description: "Extract valuable information from websites.", img: Img2 },
    { name: "Workflow Automation", description: "Streamline repetitive business tasks.", img: Img3 },
    { name: "Scripting Solutions", description: "Custom scripts tailored to your needs.", img: Img4 },
    { name: "API Integration", description: "Seamlessly connect and manage APIs.", img: Img5 },
    { name: "Data Visualization", description: "Create meaningful insights with data visuals.", img: Img6 },
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
          <h2 className="text-4xl font-bold mb-4">Automate Your Business Processes</h2>
          <p className="text-lg mb-6">Efficiency and precision with Python automation solutions.</p>
        </div>
      </section>
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Python Automation Services</h2>
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

export default PythonAutomationPage;
