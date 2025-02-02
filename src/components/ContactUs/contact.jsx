import React from 'react';
import Navbar from '../Home/Navbar/NavBar';
import Bg from "../../assets/Event/bg.jpg";
import Footer from '../Home/Footer/footer';
import Contact from '../Home/Contact/contact';

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div
        className="relative bg-cover bg-center text-white p-24 rounded-lg"
        style={{
          backgroundImage: `url(${Bg})`,
          height: "500px",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
        <div className="relative z-30 text-center mt-16 pt-12 sm:pt-16 pb-8 px-4 sm:px-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 sm:mb-6">
          Contact Us
          </h1>
          <p className="text-lg sm:text-xl mb-6">
          We’d love to hear from you! Whether you have questions, feedback, or inquiries, feel free to get in touch with us. Our team is here to assist you.
          </p>
        </div>

      </div>
      <Contact/>
      <Footer />
    </>
  );
};

export default ContactPage;
