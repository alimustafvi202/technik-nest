import React from "react";
import { Link } from "react-router-dom";
import { FaLaptopCode, FaMobileAlt, FaPaintBrush, FaBullhorn, FaSyncAlt,FaRobot,FaTools, FaUserCircle, FaShieldAlt, FaBrain, FaCogs } from "react-icons/fa";
import Navbar from "../Home/Navbar/NavBar";
import Bg from "../../assets/Services/serbg.jpg";
import Contact from "../Home/Contact/contact";
import Footer from "../Home/Footer/footer";

// Services Data with Icons
const services = [
  {
    title: "Web Development",
    description:
      "At Technik Nest, we build responsive, user-friendly websites tailored to drive engagement and optimize performance for businesses.",
    link: "/web",
    icon: <FaLaptopCode className="text-blue-500 text-4xl mb-4" />,
  },
  {
    title: "App Development",
    description:
      "We create high-performance, custom mobile apps with seamless design and functionality, ensuring a superior user experience across platforms.",
    link: "/app",
    icon: <FaMobileAlt className="text-green-500 text-4xl mb-4" />,
  },
  {
    title: "Graphic Designing",
    description:
      "We create high-impact, custom graphic designs with seamless creativity and precision, ensuring a strong brand presence across all platforms.",
    link: "/graphic",
    icon: <FaPaintBrush className="text-purple-500 text-4xl mb-4" />,
  },
  {
    title: "Digital Marketing",
    description:
      "Our expert digital marketing services help you reach your target audience and drive measurable growth through SEO, social media, and paid advertising strategies.",
    link: "/digital-marketing",
    icon: <FaBullhorn className="text-yellow-500 text-4xl mb-4" />,
  },
  {
    title: "UI/UX Design",
    description:
      "We specialize in designing intuitive, user-friendly interfaces and experiences that drive customer engagement and satisfaction.",
    link: "/ux/ui",
    icon: <FaUserCircle className="text-teal-500 text-4xl mb-4" />,
  },
  {
    title: "Python Automation",
    description:
      "Leverage Python's powerful automation capabilities to streamline repetitive tasks, integrate systems, and enhance operational efficiency.",
    link: "/python",
    icon: <FaSyncAlt className="text-indigo-500 text-4xl mb-4" />,
  },
  {
    title: "Cybersecurity",
    description:
      "We offer top-tier cybersecurity services to protect your business from online threats with advanced security protocols and monitoring.",
    link: "/cybersecurity",
    icon: <FaShieldAlt className="text-red-500 text-4xl mb-4" />,
  },
  {
    title: "AI & Machine Learning",
    description:
      "Our AI and machine learning solutions drive innovation, automating processes and providing valuable insights to enhance decision-making.",
    link: "/ai-ml",
    icon: <FaBrain className="text-grey-500 text-4xl mb-4" />,
  },
  {
    title: "Software Development",
    description:
      "We create custom software solutions that streamline operations, enhance productivity, and ensure the success of your business.",
    link: "/software",
    icon: <FaCogs className="text-pink-500 text-4xl mb-4" />,
  },
  
];

const Services = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100">
        {/* Box with image background */}
        <div
        className="relative bg-cover bg-center text-white p-6 sm:p-16 lg:p-24 rounded-lg"
        style={{
          backgroundImage: `url(${Bg})`,
          height: "500px",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70 rounded-lg"></div>
        <div className="relative z-30 text-center mt-12  pt-12 sm:pt-2 pb-8 px-4 sm:px-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 sm:mb-6">We Provide Digital Services</h1>
        <p className="text-lg sm:text-xl mb-6 max-w-2xl mx-auto">
        Technik Nest drives innovation and growth in the digital age, empowering businesses with AI-driven solutions. Our technology mentorship equips teams with the skills to stay ahead of industry trends and succeed in a rapidly evolving landscape. </p></div>
      </div>

        <div className="max-w-screen-xl mx-auto text-center mt-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white text-gray-800 rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl p-6 flex flex-col items-center text-center"
              >
                {service.icon}
                <h2 className="text-2xl font-semibold text-blue-600 mb-4">{service.title}</h2>
                <p className="text-sm mb-4">{service.description}</p>
                <Link
                  to={service.link}
                  className="mt-auto text-sm text-blue-600 font-semibold hover:underline transition-all"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
};

export default Services;
