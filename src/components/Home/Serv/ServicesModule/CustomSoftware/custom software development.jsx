import React from "react";

const MaintenancePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4 text-blue-600">Under Maintenance</h1>
        <p className="text-lg mb-6">
          Our website is currently undergoing scheduled maintenance. <br />
          We’ll be back shortly. Thank you for your patience!
        </p>
        <div>
          <svg
            className="w-32 h-32 mx-auto mb-6 text-blue-500 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"
            ></path>
          </svg>
        </div>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Refresh
        </button>
      </div>
    </div>
  );
};

export default MaintenancePage;
