import React from "react";
import img from "../../../assets/Event/29 jan.jpg";
import { Link } from "react-router-dom";

const eventsData = [
  {
    id: 1,
    date: "30",
    month: "JAN",
    title: "Linux for Cyber Defenders",
    time: "11:00 am - 12:00 pm",
    location: "Pak-Austria Fachhochschule",
    image: img,
  },
  {
    id: 2,
    date: "10",
    month: "FEB",
    title: "AI and Machine Learning Bootcamp",
    time: "10:00 am - 4:00 pm",
    location: "Tech Conference Hall",
    image: null,
  },
  {
    id: 3,
    date: "15",
    month: "MAR",
    title: "Web Development Essentials",
    time: "9:00 am - 3:00 pm",
    location: "Innovation Center",
    image: null,
  },
];

const NewsEvents = () => {
  return (
    <div>
      <div className="w-full bg-gray-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          className="w-full"
          fill="#ffffff"
        >
          <path d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z" />
        </svg>
      </div>
      <div className="py-12 px-4 md:px-10 lg:px-20 bg-gray-200 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Latest News & Events
        </h1>
        <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto mb-10">
          Discover our latest programs, workshops, and initiatives designed to
          empower individuals and businesses. Join us in shaping the future with
          impactful opportunities.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventsData.map((event) => (
            <div
              key={event.id}
              className="bg-white shadow-md rounded-md overflow-hidden w-full flex flex-col"
            >
              {event.image ? (
                <Link to="/gallery">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-56 object-cover cursor-pointer"
                  />
                </Link>
              ) : (
                <div className="w-full h-56 flex justify-center items-center bg-gray-300">
                  <span className="text-xl font-semibold text-gray-600">
                    Coming Soon
                  </span>
                </div>
              )}
              <div className="p-4 flex flex-col flex-grow">
                <div className="flex items-start">
                  <div className="text-center pr-4 border-r border-gray-300">
                    <h3 className="text-3xl font-semibold text-red-600">
                      {event.date}
                    </h3>
                    <p className="text-xs font-medium text-gray-700">
                      {event.month}
                    </p>
                  </div>
                  <div className="pl-4 flex-grow">
                    <h3 className="text-base font-bold text-gray-800 mb-2 text-left">
                      {event.title}
                    </h3>
                    <div className="text-xs text-blue-600 flex items-center mb-2">
                      <span className="mr-1">⏰</span> {event.time}
                    </div>
                    <div className="text-xs text-blue-600 flex items-center">
                      <span className="mr-1">📍</span> {event.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full bg-gray-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          className="w-full transform scale-y-[-1]"
          fill="#ffffff"
        >
          <path d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z" />
        </svg>
      </div>
    </div>
  );
};

export default NewsEvents;
