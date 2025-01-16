import React from "react";
import CountUp from "react-countup";
import { FaUsers, FaTrophy, FaBriefcase } from "react-icons/fa"; // Import Font Awesome icons

const CompanyInfo = () => {
  return (
    <section className="company-info py-16 bg-teal-400" id="company-info">
      <div className="company-info-header text-center mb-16 px-4 sm:px-4">
        <h1 className="text-4xl font-extrabold text-white mb-6 tracking-wide">
          Why Choose Us
        </h1>
        <p className="text-xl text-white max-w-4xl mx-auto">
          Discover what sets Technik Nest apart. Our dedication to quality, innovation, and customer satisfaction has helped us build strong relationships across various industries. Here's why our clients trust us.
        </p>
      </div>
      <div className="company-info-stats grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {/* Number of Clients */}
        <div className="info-stat text-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex justify-center items-center mb-4">
            <FaUsers className="text-6xl text-teal-500" />
          </div>
          <h3 className="text-5xl font-extrabold text-teal-500 mb-4">
            <CountUp start={0} end={50} duration={5} />+
          </h3>
          <p className="text-gray-700 text-xl font-medium">Clients Served</p>
        </div>
        
        {/* Award Winning */}
        <div className="info-stat text-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex justify-center items-center mb-4">
            <FaTrophy className="text-6xl text-teal-500" />
          </div>
          <h3 className="text-5xl font-extrabold text-teal-500 mb-4">
            <CountUp start={0} end={10} duration={8} />+
          </h3>
          <p className="text-gray-700 text-xl font-medium">Award Winning</p>
        </div>
        
        {/* Years of Experience */}
        <div className="info-stat text-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex justify-center items-center mb-4">
            <FaBriefcase className="text-6xl text-teal-500" />
          </div>
          <h3 className="text-5xl font-extrabold text-teal-500 mb-4">
            <CountUp start={0} end={5} duration={8} />+
          </h3>
          <p className="text-gray-700 text-xl font-medium">Years of Experience</p>
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;
