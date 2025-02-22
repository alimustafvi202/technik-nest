import React from "react";
import Image from '../../../assets/Welcome/s.png';
import Navbar from "../Navbar/NavBar";
import { Link } from "react-router-dom";
import Bg from '../../../assets/Bg/bg234.jpg';

const Welcome = () => {
    return (
        <>
        <Navbar />
        <section 
    className="relative w-full min-h-[1000px] bg-cover bg-center backdrop-blur-sm bg-no-repeat mb-10 lg:min-h-[700px]" // Maintained for both views
    style={{ backgroundImage: `url(${Bg})` }} // Background set with inline styles
>
    
<style>
    {`
        @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); } /* Moves by half of content width */
        }

        .marquee-wrapper {
            display: flex;
            overflow: hidden;
            width: 100%;
            white-space: nowrap;
            position: relative;
        }

        .marquee-content {
            display: flex;
            min-width: 200%; /* Ensure continuous flow */
            animation: marquee 30s linear infinite; /* Slow speed and infinite loop */
        }
    `}
</style>

{/* Scrolling Marquee Bar 
<div className="w-full bg-gradient-to-r from-blue-500 to-purple-600 py-3 relative top-[80px] overflow-hidden">
    <div className="marquee-wrapper">
        <div className="marquee-content">
            {/* Marquee Content (Repeated Twice for Seamless Scrolling) 
            <div className="flex">
                <span className="text-lg font-bold text-white mx-8">
                    🚀 Technik Nest – Crafting Digital Excellence!
                </span>
                <span className="text-lg font-bold text-white mx-8">
                    📢 Join Technik Nest Internships – Learn, Build, and Grow!
                </span>
                <span className="text-lg font-bold text-white mx-8">
                    🎨 Stunning Designs | 💻 Robust Web Apps | 📱 Mobile Innovations
                </span>
                <span className="text-lg font-bold text-white mx-8">
                    📚 Markaz e Ilm – A Global Learning Platform by Technik Nest!
                </span>
                <span className="text-lg font-bold text-white mx-8">
                    🚀 Empowering Innovation | 🔥 Affordable Tech Solutions
                </span>
            </div>

            {/* Duplicate Content for Continuous Flow 
            <div className="flex">
                <span className="text-lg font-bold text-white mx-8">
                    🚀 Technik Nest – Crafting Digital Excellence!
                </span>
                <span className="text-lg font-bold text-white mx-8">
                    📢 Join Technik Nest Internships – Learn, Build, and Grow!
                </span>
                <span className="text-lg font-bold text-white mx-8">
                    🎨 Stunning Designs | 💻 Robust Web Apps | 📱 Mobile Innovations
                </span>
                <span className="text-lg font-bold text-white mx-8">
                    📚 Markaz e Ilm – A Global Learning Platform by Technik Nest!
                </span>
                <span className="text-lg font-bold text-white mx-8">
                    🚀 Empowering Innovation | 🔥 Affordable Tech Solutions
                </span>
            </div>
        </div>
    </div>
</div>
    */}


    {/* Shape Section */}
    <div className="absolute inset-0 bg-white bg-opacity-10 flex justify-center items-center">
        

        <div className="max-w-6xl w-full px-4 py-10 top-[70px] relative transition-all duration-300 backdrop-blur-md rounded-3xl shadow-lg">
            {/* Adjusted margin for desktop */}
            <div className="flex flex-col lg:flex-row items-center justify-between text-center lg:text-left space-y-8 lg:space-y-0">
                {/* Welcome Text Section */}
                <div className="w-full lg:w-1/2 text-white px-6">
                    <h1 className="text-4xl font-semibold text-stroke order-last md:order-none mt-4 md:mt-0">
                        Welcome To
                    </h1>
                    <h2 className="text-5xl font-extrabold mt-2 text-stroke">Technik Nest</h2>
                    <p className="mt-4 text-lg text-gray-200 leading-relaxed">
                        Technik Nest is a leading software development house in Pakistan, specializing in crafting custom software solutions, web applications, and mobile apps. Our dedicated team blends cutting-edge technology with industry expertise to deliver innovative and efficient solutions that drive business success. Committed to excellence and customer satisfaction, Technik Nest transforms complex challenges into seamless, user-friendly products that align with your goals and vision.
                    </p>
                    <div className="mt-6 flex gap-4 justify-center lg:justify-start relative">
    {/* Registration Open Badge 
    <div className="absolute -top-5 right-1/2 transform -translate-x-1/2 bg-red-500 text-white text-xs font-bold p-1 rounded-full shadow-lg animate-pulse">
        🚀 Registration Open!
    </div>
*/}
    <Link 
        to="/Internships" 
        className="py-2 px-6 border-2 border-white rounded-full text-white hover:bg-cyan-400 hover:text-black transition-all duration-300 text-stroke relative"
    >
        Start Internship
    </Link>
    
    <Link 
        to="/contact" 
        className="py-2 px-6 border-2 border-white rounded-full text-white hover:bg-cyan-400 hover:text-black transition-all duration-300 text-stroke"
    >
        Contact With Us
    </Link>
</div>


                </div>

                {/* Welcome Image Section */}
                <div className="w-full lg:w-1/2 text-center">
                    <img src={Image} alt="Technik Nest" className="mx-auto w-full max-w-xs lg:max-w-md" />
                </div>
            </div>
        </div>
    </div>
</section>
            
</>
    );
};

export default Welcome;
