import React from "react";
import Navbar from '../../../../Home/Navbar/NavBar';
import Footer from '../../../../Home/Footer/footer';

// Images for UX/UI Design Services
import HeroImageUXUI from '../../../../../assets/Services/ux-ui/hero.jpg';
import UXImg1 from '../../../../..//assets/Services/ux-ui/1.jpeg';
import UXImg2 from '../../../../../assets/Services/ux-ui/2.png';
import UXImg3 from '../../../../../assets/Services/ux-ui/3.jpg';
import UXImg4 from '../../../../../assets/Services/ux-ui/4.jpg';
import UXImg5 from '../../../../../assets/Services/ux-ui/5.jpg';
import UXImg6 from '../../../../../assets/Services/ux-ui/6.jpg';
import UXImg7 from '../../../../../assets/Services/ux-ui/7.png';
import UXImg8 from '../../../../../assets/Services/ux-ui/8.jpg';
import UXImg9 from '../../../../../assets/Services/ux-ui/9.jpg';
import UXImg10 from '../../../../../assets/Services/ux-ui/10.png';



const UXUIPage = () => {
  const features = [
    { Name: "Wireframing & Prototyping", description: "Turn ideas into interactive prototypes.", img: UXImg1 },
    { Name: "User Research", description: "Understand your audience to create impactful designs.", img: UXImg2 },
    { Name: "Visual Design", description: "Design stunning interfaces that captivate users.", img: UXImg3 },
    { Name: "Usability Testing", description: "Ensure your designs are user-friendly and efficient.", img: UXImg4 },
    { Name: "Information Architecture", description: "Organize content for optimal user navigation.", img: UXImg5 },
    { Name: "Interaction Design", description: "Craft engaging interactions for better experiences.", img: UXImg6 },
    { Name: "Responsive Design", description: "Create designs that look great on any device.", img: UXImg7 },
    { Name: "Design Systems", description: "Build cohesive and scalable design systems.", img: UXImg8 },
    { Name: "Accessibility Design", description: "Design inclusive experiences for all users.", img: UXImg9 },
    { Name: "UX Audits", description: "Identify and improve pain points in your design.", img: UXImg10 },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <section
        className="relative bg-cover bg-center h-[400px] flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${HeroImageUXUI})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center z-10">
          <h2 className="text-4xl font-bold mb-4">Craft Exceptional Experiences</h2>
          <p className="text-lg mb-6">Intuitive designs that put your users first.</p>
        </div>
      </section>
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our UX/UI Design Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105"
            >
              <img src={feature.img} alt={feature.Name} className="w-full h-48 object-cover group-hover:opacity-80 transition" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{feature.Name}</h3>
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


export default UXUIPage;