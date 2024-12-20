import React, { useState, useEffect } from "react";
import Navbar from "../Home/Navbar/NavBar";
import Contact from "../Home/Contact/contact";
import Footer from "../Home/Footer/footer";
import Logo from '../../assets/logo/logo1.png';

const Form = () => {
  const [qualification, setQualification] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    qualification: "",
    semester: "",
    experience: "",
    cv: null,
    message: "",
  });
  const [imageVisible, setImageVisible] = useState(false);

  useEffect(() => {
    // Trigger the image transition when the component mounts
    setImageVisible(true);
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.cv) {
      alert("Please upload your resume.");
      return;
    }
    alert("Form submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-6">
      <Navbar />
      
      {/* Animated Picture Section with margin-top */}
      <div
        className={`transition-all duration-700 ease-out transform mt-12 ${
          imageVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
        }`}
      >
        <img
          src={Logo}// Replace with your image path
          alt="Company Logo"
          className="w-32 h-32 rounded-full shadow-lg"
        />
        <h1 className="text-2xl font-bold mt-4 text-gray-800">Welcome to Technik Nest</h1>
        <p className="text-gray-600 italic">"Innovative Mind, Nesting Success"</p>
      </div>

      {/* Form Section with margin-top */}
      <form
        onSubmit={handleSubmit}
        className="mt-12 w-full max-w-xl bg-white p-6 shadow-lg rounded-lg space-y-4"
      >
        <div className="space-y-2">
          <label className="block font-medium">Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block font-medium">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block font-medium">Contact No.:</label>
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block font-medium">Qualification:</label>
          <select
            name="qualification"
            value={qualification}
            onChange={(e) => {
              setQualification(e.target.value);
              handleInputChange(e);
            }}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
            required
          >
            <option value="">Select Qualification</option>
            <option value="Matric">Matric</option>
            <option value="FSc">FSc</option>
            <option value="BS">BS</option>
            <option value="MS">MS</option>
          </select>
        </div>

        {["BS", "MS"].includes(qualification) && (
          <div className="space-y-2">
            <label className="block font-medium">Semester:</label>
            <select
              name="semester"
              value={formData.semester}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
              required
            >
              <option value="">Select Semester</option>
              {qualification === "BS"
                ? ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"].map(
                    (sem, idx) => (
                      <option key={idx} value={sem}>
                        {sem}
                      </option>
                    )
                  )
                : ["1st", "2nd", "3rd", "4th"].map((sem, idx) => (
                    <option key={idx} value={sem}>
                      {sem}
                    </option>
                  ))}
            </select>
          </div>
        )}

        <div className="space-y-2">
          <label className="block font-medium">Experience (Years):</label>
          <input
            type="number"
            name="experience"
            placeholder="Years of Experience"
            value={formData.experience}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block font-medium">Upload Resume:</label>
          <input
            type="file"
            name="cv"
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block font-medium">Why We Hire You?</label>
          <textarea
            name="message"
            placeholder="Why We Hire You?"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
        >
          Submit
        </button>
      </form>

      <Contact />
      <Footer />
    </div>
  );
};

export default Form;
