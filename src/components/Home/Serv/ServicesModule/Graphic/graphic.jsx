import React from "react";
import GraphicImage from '../../../../../assets/Graphic/graphic.jpg';
import Navbar from '../../../../Home/Navbar/NavBar';
import Footer from "../../../../Home/Footer/footer";
import Contact from "../../../../Home/Contact/contact";

const GraphicDesigningPage = () => {
  const projects = [
    { name: "Logo Design", description: "Modern and sleek logo design.", img: "/images/design1.jpg" },
    { name: "Business Card", description: "Professional and stylish cards.", img: "/images/design2.jpg" },
    { name: "Social Media Kit", description: "Eye-catching templates.", img: "/images/design3.jpg" },
    { name: "Poster Design", description: "Creative and impactful posters.", img: "/images/design4.jpg" },
    { name: "Brochure Design", description: "Elegant and informative brochures.", img: "/images/design5.jpg" },
    { name: "Flyer Design", description: "Captivating flyers for promotion.", img: "/images/design6.jpg" },
    { name: "Brand Identity", description: "Complete branding solutions.", img: "/images/design7.jpg" },
    { name: "Illustrations", description: "Unique hand-drawn art.", img: "/images/design8.jpg" },
    { name: "Product Packaging", description: "Creative and engaging packaging.", img: "/images/design9.jpg" },
    { name: "UI/UX Design", description: "User-friendly and modern interfaces.", img: "/images/design10.jpg" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
     <Navbar/>

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[400px] flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${GraphicImage})` }} // Corrected way to insert the image URL
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center z-10">
          <h2 className="text-4xl font-bold mb-4">Crafting Visual Excellence</h2>
          <p className="text-lg mb-6">We bring your ideas to life with stunning graphic designs.</p>
   
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105"
            >
              <img
                src={project.img}
                alt={project.name}
                className="w-full h-48 object-cover group-hover:opacity-80 transition"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

     <Contact/>
     <Footer/>
    </div>
  );
};

export default GraphicDesigningPage;
