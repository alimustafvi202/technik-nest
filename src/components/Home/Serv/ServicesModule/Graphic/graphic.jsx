import React from "react";
import GraphicImage from '../../../../../assets/Graphic/graphic.jpg';
import Navbar from '../../../../Home/Navbar/NavBar';
import Footer from "../../../../Home/Footer/footer";
import Contact from "../../../../Home/Contact/contact";
import Img1 from '../../../../../assets/Services/graphic/1.jpg';
import Img2 from '../../../../../assets/Services/graphic/2.jpg';
import Img3 from '../../../../../assets/Services/graphic/3.jpg';
import Img4 from '../../../../../assets/Services/graphic/4.jpg';
import Img5 from '../../../../../assets/Services/graphic/5.jpg';
import Img6 from '../../../../../assets/Services/graphic/6.jpg';
import Img7 from '../../../../../assets/Services/graphic/7.jpg';
import Img8 from '../../../../../assets/Services/graphic/8.jpg';
import Img9 from '../../../../../assets/Services/graphic/9.jpg';
import Img10 from '../../../../../assets/Services/graphic/10.png';
const GraphicDesigningPage = () => {
  const projects = [
    { name: "Logo Design", description: "Modern and sleek logo design.", img: Img1 },
    { name: "Business Card", description: "Professional and stylish cards.", img: Img2 },
    { name: "Social Media Kit", description: "Eye-catching templates.", img: Img3 },
    { name: "Poster Design", description: "Creative and impactful posters.", img: Img4 },
    { name: "Brochure Design", description: "Elegant and informative brochures.", img:Img5 },
    { name: "Flyer Design", description: "Captivating flyers for promotion.", img:Img6 },
    { name: "Brand Identity", description: "Complete branding solutions.", img: Img7 },
    { name: "Illustrations", description: "Unique hand-drawn art.", img: Img8},
    { name: "Product Packaging", description: "Creative and engaging packaging.", img: Img9 },
    { name: "UI/UX Design", description: "User-friendly and modern interfaces.", img:Img10 },
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
        <h2 className="text-3xl font-bold text-center mb-8">Our Graphic Desining Services</h2>
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
              <div className="p-4 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
                <button className="px-6 py-2 text-lg font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600 whitespace-nowrap">
  Order Now
</button>
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
