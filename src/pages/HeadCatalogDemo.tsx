import React from 'react';
import HeadCatalog from '../components/head_catalog';

const HeadCatalogDemo: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <HeadCatalog />
      <div className="p-8">
        <h1 className="text-white text-2xl font-bold mb-6 text-center">
          Head Catalog Component Demo
        </h1>
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-white text-xl font-semibold mb-4">Features:</h2>
            <ul className="text-gray-300 space-y-2">
              <li>• "Hot Items" section with red flame icon</li>
              <li>• Bright blue line at the top</li>
              <li>• Six product cards in horizontal grid</li>
              <li>• Pixel art raccoon characters</li>
              <li>• Rarity badges: Rare (red) and Mythical (blue)</li>
              <li>• Pricing with current price, discount percentage, and strikethrough original price</li>
              <li>• Green add to cart buttons with shopping cart icons</li>
              <li>• Vertical blue separators between cards</li>
              <li>• Dark theme with proper contrast</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadCatalogDemo;
