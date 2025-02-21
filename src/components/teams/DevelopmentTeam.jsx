import React from 'react';
import { FaTwitter, FaLinkedin } from 'react-icons/fa'; // Import the icons
import './DevelopmentTeam.scss'; // Import the SCSS file

const DevelopmentTeam = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
      <div className="container mx-auto py-10">
        <h1 className="text-4xl font-bold text-center mb-10">Development Team</h1>
        <div className="flex flex-wrap justify-center gap-10">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <img src="https://via.placeholder.com/150" alt="Profile 1" className="w-32 h-32 rounded-full mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-center">John Doe</h2>
            <p className="text-center text-gray-600 dark:text-gray-400">Frontend Developer</p>
            <div className="flex justify-center mt-4">
              <a href="#" className="text-blue-500 mx-2">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-blue-700 mx-2">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <img src="https://via.placeholder.com/150" alt="Profile 2" className="w-32 h-32 rounded-full mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-center">Jane Smith</h2>
            <p className="text-center text-gray-600 dark:text-gray-400">Backend Developer</p>
            <div className="flex justify-center mt-4">
              <a href="#" className="text-blue-500 mx-2">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-blue-700 mx-2">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <img src="https://via.placeholder.com/150" alt="Profile 3" className="w-32 h-32 rounded-full mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-center">Alice Johnson</h2>
            <p className="text-center text-gray-600 dark:text-gray-400">UI/UX Designer</p>
            <div className="flex justify-center mt-4">
              <a href="#" className="text-blue-500 mx-2">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-blue-700 mx-2">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentTeam;