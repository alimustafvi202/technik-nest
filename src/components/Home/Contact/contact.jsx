import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaGlobe ,FaLinkedin } from "react-icons/fa";
import Swal from "sweetalert2";

const Contact = () => {
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    // Add the Web3Forms API key
    formData.append("access_key", "3ff4cc31-4978-4e14-9298-6e5e52cac905");

    // Convert FormData to JSON
    const object = Object.fromEntries(formData.entries());
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();

      if (result.success) {
        Swal.fire({
          title: "Success!",
          text: "Message Sent Successfully!",
          icon: "success",
        });
        event.target.reset(); // Reset the form after successful submission
      } else {
        Swal.fire({
          title: "Error",
          text: "Failed to send the message. Please try again.",
          icon: "error",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "An error occurred. Please check your connection and try again.",
        icon: "error",
      });
    }

    // Clear the status message after 5 seconds
    setTimeout(() => {
      setSubmissionStatus(null);
    }, 5000);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-start gap-6 p-8">
      {/* Left Container */}
      <div className="flex-1 bg-white p-6">
      <h1 className="text-5xl text-blue-600 font-bold mb-4">Let's connect!</h1>
        <p className="text-lg text-gray-600 mb-8">
          Ready to take your business to the next level? Contact us today to
          discuss your project and learn how our digital solutions can help you
          achieve your goals. Let’s connect and explore the possibilities
          together.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
  {/* First Row - Phone and Email */}
  <div className="flex items-center gap-4 p-4 bg-white shadow-lg rounded-lg border-b-4 border-indigo-600 w-auto">
    <FaPhoneAlt className="text-xl text-gray-600" />
    <p className="text-l font-semibold">+92 335 6863761</p>
  </div>
  <div className="flex items-center gap-4 p-4 bg-white shadow-lg rounded-lg border-b-4 border-red-600 w-auto">
    <FaEnvelope className="text-xl text-gray-600" />
    <p className="text-l font-semibold sm:text-lg md:text-base">techniknestofficial@gmail.com</p>
  </div>

  {/* Second Row - Website and LinkedIn */}
  <div className="flex items-center gap-4 p-4 bg-white shadow-lg rounded-lg border-b-4 border-green-600 w-auto">
    <FaGlobe className="text-xl text-gray-600" />
    <p className="text-l font-semibold">techniknest.tech</p>
  </div>
  <div className="flex items-center gap-4 p-4 bg-white shadow-lg rounded-lg border-b-4 border-blue-600 w-auto">
    <FaLinkedin className="text-xl text-gray-600" />
    <p className="text-l font-semibold">techniknest</p>
  </div>
</div>


      </div>

      {/* Right Container */}
      <div className="flex-1 max-w-lg bg-white p-8 rounded-lg shadow-lg w-full sm:w-4/5 md:w-3/4 lg:w-1/2">
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            name="name"
            required
            className="p-3 border border-gray-300 rounded-lg focus:border-indigo-600 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            required
            className="p-3 border border-gray-300 rounded-lg focus:border-indigo-600 focus:outline-none"
          />
          <input
            type="tel"
            placeholder="Phone"
            name="phone"
            className="p-3 border border-gray-300 rounded-lg focus:border-indigo-600 focus:outline-none"
          />
          <textarea
            placeholder="Message"
            name="message"
            required
            className="p-3 border border-gray-300 rounded-lg focus:border-indigo-600 focus:outline-none resize-none"
            rows="5"
          ></textarea>
          <button
            type="submit"
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold p-3 rounded-lg hover:from-purple-600 hover:to-indigo-600"
          >
            Send Message
          </button>
        </form>
        {submissionStatus && (
          <p className="text-center text-red-600 mt-4">{submissionStatus}</p>
        )}
      </div>
    </div>
  );
};

export default Contact;
