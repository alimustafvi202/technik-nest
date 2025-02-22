import React from "react";
import { useParams } from "react-router-dom";
import Navbar from '../Home/Navbar/NavBar';
import Footer from '../Home/Footer/footer';
import Contact from '../Home/Contact/contact';
import frame from "../../assets/gallery/Frame2.png";
import BgWorkshop1 from "../../assets/gallery/Workshop1/bg.jpg";
import BgWorkshop2 from "../../assets/gallery/Workshop2/bg.webp";
// Workshop 1 Images
import Img1 from "../../assets/gallery/Workshop1/1.JPG";
import Img2 from "../../assets/gallery/Workshop1/2.JPG";
import Img3 from "../../assets/gallery/Workshop1/3.JPG";
import Img4 from "../../assets/gallery/Workshop1/4.jpg";
import Img5 from "../../assets/gallery/Workshop1/5.JPG";
import Img6 from "../../assets/gallery/Workshop1/6.JPG";
import Img7 from "../../assets/gallery/Workshop1/7.JPG";
import Img8 from "../../assets/gallery/Workshop1/8.JPG";
import Img9 from "../../assets/gallery/Workshop1/9.JPG";
import Img10 from "../../assets/gallery/Workshop1/10.JPG";
import Img11 from "../../assets/gallery/Workshop1/11.JPG";
import Img12 from "../../assets/gallery/Workshop1/12.JPG";
import Img13 from "../../assets/gallery/Workshop1/13.JPG";
import Img14 from "../../assets/gallery/Workshop1/14.JPG";
import Img15 from "../../assets/gallery/Workshop1/15.JPG";
import Img16 from "../../assets/gallery/Workshop1/16.JPG";
import Img17 from "../../assets/gallery/Workshop1/17.JPG";
import Img18 from "../../assets/gallery/Workshop1/18.JPG";
import Img19 from "../../assets/gallery/Workshop1/19.JPG";
import Img20 from "../../assets/gallery/Workshop1/20.JPG";
// Workshop 2 Images
import W2_Img1 from "../../assets/gallery/Workshop2/1.png";
import W2_Img2 from "../../assets/gallery/Workshop2/1.png";
import W2_Img3 from "../../assets/gallery/Workshop2/1.png";
import W2_Img4 from "../../assets/gallery/Workshop2/1.png";
import W2_Img5 from "../../assets/gallery/Workshop2/1.png";
import W2_Img6 from "../../assets/gallery/Workshop2/1.png";
import W2_Img7 from "../../assets/gallery/Workshop2/1.png";
import W2_Img8 from "../../assets/gallery/Workshop2/1.png";
import W2_Img9 from "../../assets/gallery/Workshop2/1.png";
import W2_Img10 from "../../assets/gallery/Workshop2/1.png";

const workshopData = {
  workshop1: {
    title: "Linux For Cyber Defenders Workshop",
    description:
      "Join us in an immersive experience designed to enhance your skills in cybersecurity...",
    images: [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10, Img11, Img12, Img13, Img14, Img15, Img16, Img17, Img18, Img19, Img20],
   Bg: BgWorkshop1
  },
  workshop2: {
    title: "Advanced Ethical Hacking Workshop",
    description:
      "Explore advanced techniques in ethical hacking to secure networks...",
    images: [W2_Img1, W2_Img2, W2_Img3, W2_Img4, W2_Img5, W2_Img6, W2_Img7, W2_Img8, W2_Img9, W2_Img10],
    Bg:BgWorkshop2
  },
};

const Gallery = () => {
  const { workshopId } = useParams(); // Get workshop ID from URL
  const workshop = workshopData[workshopId] || workshopData["workshop1"];

  return (
    <div>
      <Navbar />
      <div
        className="relative bg-cover bg-center text-white p-6 sm:p-16 lg:p-24 rounded-lg"
        style={{
          backgroundImage: `url(${workshop.Bg})`,
          height: "500px",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
        <div className="relative z-30 text-center mt-16 pt-12 sm:pt-16 pb-8 px-4 sm:px-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 sm:mb-6">
            {workshop.title}
          </h1>
          <p className="text-lg sm:text-xl mb-6">{workshop.description}</p>
        </div>
      </div>

      <div className="relative w-full h-full flex flex-col justify-center items-center p-6">
        {/* Header */}
        <h1 className="text-2xl sm:text-3xl font-semibold mb-6">{workshop.title}</h1>

        {/* Image Gallery */}
        <div className="relative w-full flex justify-center items-center flex-wrap gap-6">
          {workshop.images.map((image, index) => (
            <div key={index} className="relative w-64 h-64 flex justify-center items-center">
              {/* Gallery Image */}
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="absolute w-full h-full object-cover rounded-lg z-0"
              />

              {/* Frame PNG */}
              <img
                src={frame}
                alt={`Frame for image ${index + 1}`}
                className="absolute w-full h-full pointer-events-none z-10"
              />
            </div>
          ))}
        </div>
      </div>

      <Contact />
      <Footer />
    </div>
  );
};

export default Gallery;
