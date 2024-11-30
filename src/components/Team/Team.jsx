import React from 'react';

// Sample team data
const teamMembers = [
  {
    name: 'Fahad Sajid',
    role: 'Project Manager',
    description: 'Fahad leads our projects with excellent management skills and ensures timely deliveries.',
    imageUrl: 'https://via.placeholder.com/150', // Replace with team member image URL
  },
  {
    name: 'Muhammad Ali',
    role: 'Founder & CEO',
    description: 'As the Founder & CEO, Ali oversees the vision and strategy of the company.',
    imageUrl: 'https://via.placeholder.com/150', // Replace with team member image URL
  },
  {
    name: 'Ahsan Naseer',
    role: 'IT Manager',
    description: 'Ahsan is responsible for managing all IT-related tasks and ensuring smooth system operations.',
    imageUrl: 'https://via.placeholder.com/150', // Replace with team member image URL
  },
  {
    name: 'Hassan Ali',
    role: 'Software Developer',
    description: 'Hassan is a talented developer who specializes in building high-quality software solutions.',
    imageUrl: 'https://via.placeholder.com/150', // Replace with team member image URL
  },
  {
    name: 'Syed Aleem',
    role: 'HR Manager',
    description: 'Syed ensures our company culture thrives and handles all HR-related tasks.',
    imageUrl: 'https://via.placeholder.com/150', // Replace with team member image URL
  },
];

const Team = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-screen-xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold text-blue-600">Meet Our Team</h1>
        <p className="text-lg text-gray-600 mt-4">A group of passionate professionals dedicated to your success.</p>
      </div>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 px-4">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl text-center"
          >
            <img
              src={member.imageUrl}
              alt={member.name}
              className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
            />
            <h2 className="text-xl font-semibold text-blue-600">{member.name}</h2>
            <p className="text-sm text-gray-500 mb-4">{member.role}</p>
            <p className="text-sm text-gray-600">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
