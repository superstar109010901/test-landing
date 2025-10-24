import React from 'react';
import NavBar from '../components/nav_bar';

const NavBarDemo: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <NavBar />
      <div className="p-8">
        <h1 className="text-white text-2xl font-bold mb-6 text-center">
          Navigation Bar Component Demo
        </h1>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-white text-xl font-semibold mb-4">Features:</h2>
            <ul className="text-gray-300 space-y-2">
              <li>• Game selector dropdown with four-leaf clover icon</li>
              <li>• Language and currency selector with flag icon</li>
              <li>• Green login button</li>
              <li>• Dark theme with proper hover effects</li>
              <li>• Responsive design</li>
              <li>• Click outside to close dropdowns</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarDemo;
