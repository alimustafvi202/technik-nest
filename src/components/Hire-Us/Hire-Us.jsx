import React, { useState, useEffect } from "react";
import img1 from "../../assets/Event/29 jan.jpg";
import img2 from "../../assets/Event/AUST.png";
import Navbar from "../Home/Navbar/NavBar";
import Bg from "../../assets/Event/bg.jpg";
import Contact from "../Home/Contact/contact";
import Footer from "../Home/Footer/footer";

const events = [
  { name: "Cyber Security, AI, Cloud Computing", date: "2025-02-26T10:00:00", venue: "AUST University", image: img2 },
  { name: "Linux For Cyber Defenders", date: "2025-01-30T11:00:00", venue: "Pak Austria University", image: img1 }
];

const categorizeEvents = (events) => {
  const now = new Date();
  return {
    upcoming: events.filter(event => new Date(event.date) > now),
    passed: events.filter(event => new Date(event.date).getTime() + 3600000 <= now)
  };
};

const Countdown = ({ eventDate }) => {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const eventTime = new Date(eventDate);
      const diff = eventTime - now;
      if (diff <= 0) {
        setTimeLeft("Event Started");
        clearInterval(interval);
      } else {
        const hours = Math.floor(diff / 3600000);
        const minutes = Math.floor((diff % 3600000) / 60000);
        const seconds = Math.floor((diff % 60000) / 1000);
        setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [eventDate]);

  return <p className="text-red-500 font-bold">Starts in: {timeLeft}</p>;
};

const StudentForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", Program: "", Semester: "" });
  const [selectedEvent, setSelectedEvent] = useState(null);
  const { upcoming, passed } = categorizeEvents(events);
  const [successPopup, setSuccessPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const [progress, setProgress] = useState(0);

const handleSubmit = async (e) => {
  e.preventDefault();
  if (!selectedEvent) return alert("Please select an event first.");

  setLoading(true);
  setProgress(0);

  const formEle = e.target;
  const formDataToSend = new FormData(formEle);
  formDataToSend.append("event", selectedEvent.name);

  // Simulate progress
  const progressInterval = setInterval(() => {
    setProgress((prev) => (prev < 90 ? prev + 10 : prev)); // Increase until 90%
  }, 500);

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbwJHWIAl4jrjTQsHlac3uBH2ncQML8aHijhh9K6qoxDodlQcS-72LhDAnNUdfSCh2-N/exec", {
      method: "POST",
      body: formDataToSend,
    });

    clearInterval(progressInterval);
    setProgress(100); // Complete progress

    if (response.ok) {
      setFormData({ name: "", email: "", phone: "", Program: "", Semester: "" });
      setSelectedEvent(null);
      setSuccessPopup(true);
    } else {
      alert("Failed to submit the form. Please try again.");
    }
  } catch (error) {
    alert("An error occurred. Please try again.");
  } finally {
    setLoading(false);
    setTimeout(() => setProgress(0), 1000); // Reset after showing full progress
  }
};

  
  return (
    <>
      <Navbar />
      <div className="relative bg-cover bg-center text-white p-24 rounded-lg" style={{ backgroundImage: `url(${Bg})`, height: "500px" }}>
        <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
        <div className="relative z-10 text-center pt-24">
          <h1 className="text-4xl font-extrabold mb-6">Stay Updated with the Latest News & Events</h1>
          <p className="text-lg mb-12 leading-relaxed">Stay connected with Technik Nest to discover the latest happenings, announcements, and updates.</p>
        </div>
      </div>
      <div className="min-h-screen bg-gray-100 p-6">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">Events</h2>
        {[{ title: "Upcoming Events", list: upcoming }, { title: "Passed Events", list: passed }].map(({ title, list }) => (
          <div key={title} className="mb-6">
            <h3 className="text-2xl font-semibold mb-4 text-gray-700">{title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {list.map((event, index) => (
                <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer relative">
                  <div className="w-full overflow-hidden">
                    <img src={event.image} alt={event.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold">{event.name}</h3>
                    <p className="text-gray-600"><span className="mr-1">⏰</span>{new Date(event.date).toLocaleString()}</p>
                    <p className="text-gray-800"><span className="mr-1">📍</span>Venue: {event.venue}</p>
                    {title === "Upcoming Events" && (
                      <>
                        <Countdown eventDate={event.date} />
                        <button onClick={() => setSelectedEvent(event)} className="mt-4 w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition">
                          Register Now
                        </button>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {selectedEvent && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg relative w-96">
              <button onClick={() => setSelectedEvent(null)} className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full">&times;</button>
              <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">{selectedEvent.name} Registration</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400" required />
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400" required />
                <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400" required />
                <input type="text" name="Program" placeholder="Program" value={formData.Program} onChange={handleChange} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400" required />
                <input type="number" name="Semester" placeholder="Semester" value={formData.Semester} onChange={handleChange} className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400" required />
                <button
  type="submit"
  className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition"
  disabled={loading}
>
  {loading ? <span>Submitting... {progress}%</span> : "Submit"}
</button>

              </form>
            </div>
          </div>
        )}

        {successPopup && (
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 animate-fadeIn">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center w-96">
              <div className="flex justify-center">
                <svg className="w-16 h-16 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-green-600 mt-4">Registration Successful!</h2>
              <p className="text-gray-700 mt-2">Thank you for registering. We'll contact you soon.</p>
              <button onClick={() => setSuccessPopup(false)} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                Close
              </button>
            </div>
          </div>
        )}
      </div>
      <Contact />
      <Footer />
    </>
  );
};

export default StudentForm;
