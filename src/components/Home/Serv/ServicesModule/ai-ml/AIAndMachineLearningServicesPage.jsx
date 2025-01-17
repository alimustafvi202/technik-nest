import React from "react";
import Navbar from '../../../../Home/Navbar/NavBar';
import Footer from "../../../../Home/Footer/footer";
import HeroImage from '../../../../../assets/Services/ai-ml/hero.jpg';
import Img1 from '../../../../../assets/Services/ai-ml/1.png';
import Img2 from '../../../../../assets/Services/ai-ml/2.png';
import Img3 from '../../../../../assets/Services/ai-ml/3.jpg';
import Img4 from '../../../../../assets/Services/ai-ml/4.jpg';
import Img5 from '../../../../../assets/Services/ai-ml/5.jpg';
import Img6 from '../../../../../assets/Services/ai-ml/6.jpg';

const AIAndMachineLearningServicesPage = () => {
  const features = [
    { name: "Predictive Analytics", description: "Use data to forecast future trends and outcomes.", img: Img1 },
    { name: "Natural Language Processing", description: "Develop AI that understands and interacts with human language.", img: Img2 },
    { name: "Image Recognition", description: "Automate tasks using advanced image processing models.", img: Img3 },
    { name: "Chatbot Development", description: "Build intelligent conversational agents for businesses.", img: Img4 },
    { name: "Recommendation Systems", description: "Enhance user experience with personalized recommendations.", img: Img5 },
    { name: "Custom AI Models", description: "Tailor AI solutions to meet your unique business needs.", img: Img6 },
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
          <h2 className="text-4xl font-bold mb-4">Empower Your Business with AI</h2>
          <p className="text-lg mb-6">Cutting-edge AI and machine learning solutions tailored for your success.</p>
        </div>
      </section>
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our AI & ML Capabilities</h2>
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

export default AIAndMachineLearningServicesPage;
