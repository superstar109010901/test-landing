import React from 'react';
import Header from '../components/header';

const HeaderDemo: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="p-8">
        <h1 className="text-gray-800 text-2xl font-bold mb-6 text-center">
          Header Component Demo
        </h1>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h2 className="text-gray-800 text-xl font-semibold mb-4">Features:</h2>
            <ul className="text-gray-600 space-y-2">
              <li>• Light blue sky background with fluffy white clouds</li>
              <li>• Cute animal characters: Golden dog, deer, owl, unicorn</li>
              <li>• Flying bees with striped patterns</li>
              <li>• Floating R$ currency symbols</li>
              <li>• Falling leaves for depth and movement</li>
              <li>• Adopt Me logo and disclaimer text</li>
              <li>• Cartoonish, friendly design</li>
              <li>• Responsive layout</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderDemo;
