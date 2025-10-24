import React from 'react';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <div className={`relative w-full h-64 overflow-hidden ${className}`}>
      {/* Light Blue Sky Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-200 to-blue-300"></div>
      
      {/* White Clouds */}
      <div className="absolute inset-0">
        {/* Cloud 1 */}
        <div className="absolute top-8 left-16 w-20 h-12 bg-white rounded-full opacity-80"></div>
        <div className="absolute top-6 left-20 w-16 h-10 bg-white rounded-full opacity-80"></div>
        <div className="absolute top-10 left-12 w-12 h-8 bg-white rounded-full opacity-80"></div>
        
        {/* Cloud 2 */}
        <div className="absolute top-12 right-32 w-24 h-16 bg-white rounded-full opacity-80"></div>
        <div className="absolute top-10 right-28 w-20 h-12 bg-white rounded-full opacity-80"></div>
        <div className="absolute top-14 right-36 w-16 h-10 bg-white rounded-full opacity-80"></div>
        
        {/* Cloud 3 */}
        <div className="absolute top-20 left-1/3 w-18 h-12 bg-white rounded-full opacity-80"></div>
        <div className="absolute top-18 left-1/3 w-14 h-10 bg-white rounded-full opacity-80"></div>
        
        {/* Bottom Cloud Border */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white opacity-90 rounded-t-full"></div>
      </div>

      {/* Floating R$ Currency Symbols */}
      <div className="absolute top-16 left-24 w-8 h-8 bg-gray-200 rounded-full opacity-60 flex items-center justify-center">
        <span className="text-gray-600 font-bold text-sm">R$</span>
      </div>
      <div className="absolute top-20 right-20 w-6 h-6 bg-gray-200 rounded-full opacity-50 flex items-center justify-center">
        <span className="text-gray-600 font-bold text-xs">R$</span>
      </div>
      <div className="absolute top-32 left-40 w-7 h-7 bg-gray-200 rounded-full opacity-40 flex items-center justify-center">
        <span className="text-gray-600 font-bold text-xs">R$</span>
      </div>

      {/* Falling Leaves */}
      <div className="absolute top-12 left-32 w-3 h-6 bg-gray-800 rounded-full opacity-60 transform rotate-12"></div>
      <div className="absolute top-24 right-40 w-2 h-5 bg-gray-700 rounded-full opacity-50 transform -rotate-12"></div>
      <div className="absolute top-36 left-60 w-3 h-5 bg-gray-800 rounded-full opacity-70 transform rotate-45"></div>
      <div className="absolute top-28 right-60 w-2 h-4 bg-gray-700 rounded-full opacity-60 transform -rotate-30"></div>

      {/* Characters */}
      <div className="absolute inset-0">
        {/* Golden Dog (Main Character) */}
        <div className="absolute top-16 right-32 w-20 h-20 bg-yellow-400 rounded-full border-4 border-white">
          <div className="absolute top-4 left-4 w-3 h-3 bg-black rounded-full"></div>
          <div className="absolute top-4 right-4 w-3 h-3 bg-black rounded-full"></div>
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black rounded-full"></div>
          <div className="absolute top-8 left-2 w-4 h-2 bg-yellow-500 rounded-full"></div>
          <div className="absolute top-8 right-2 w-4 h-2 bg-yellow-500 rounded-full"></div>
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-3 bg-yellow-500 rounded-full"></div>
          {/* R$ symbol on belly */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full opacity-80 flex items-center justify-center">
            <span className="text-gray-600 font-bold text-xs">R$</span>
          </div>
        </div>

        {/* Deer */}
        <div className="absolute top-20 left-32 w-16 h-16 bg-amber-600 rounded-full border-2 border-white">
          <div className="absolute top-2 left-3 w-2 h-2 bg-black rounded-full"></div>
          <div className="absolute top-2 right-3 w-2 h-2 bg-black rounded-full"></div>
          <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-pink-300 rounded-full"></div>
          <div className="absolute top-1 right-1/2 transform translate-x-1/2 w-1 h-1 bg-pink-300 rounded-full"></div>
          {/* Antlers */}
          <div className="absolute -top-2 left-2 w-1 h-3 bg-amber-700 rounded-full transform rotate-12"></div>
          <div className="absolute -top-2 right-2 w-1 h-3 bg-amber-700 rounded-full transform -rotate-12"></div>
        </div>

        {/* Owl */}
        <div className="absolute top-18 left-48 w-14 h-14 bg-amber-800 rounded-full border-2 border-white">
          <div className="absolute top-3 left-2 w-3 h-3 bg-amber-100 rounded-full"></div>
          <div className="absolute top-3 right-2 w-3 h-3 bg-amber-100 rounded-full"></div>
          <div className="absolute top-4 left-3 w-1 h-1 bg-black rounded-full"></div>
          <div className="absolute top-4 right-3 w-1 h-1 bg-black rounded-full"></div>
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-2 h-1 bg-amber-700 rounded-full"></div>
        </div>

        {/* Unicorn */}
        <div className="absolute top-14 right-16 w-18 h-18 bg-white rounded-full border-2 border-white">
          <div className="absolute top-3 left-3 w-2 h-2 bg-black rounded-full"></div>
          <div className="absolute top-3 right-3 w-2 h-2 bg-black rounded-full"></div>
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-pink-300 rounded-full"></div>
          <div className="absolute top-2 right-1/2 transform translate-x-1/2 w-1 h-1 bg-pink-300 rounded-full"></div>
          {/* Horn */}
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-pink-400 rounded-full"></div>
          {/* Rainbow Mane */}
          <div className="absolute top-1 left-1 w-2 h-3 bg-pink-400 rounded-full"></div>
          <div className="absolute top-1 left-3 w-2 h-3 bg-purple-400 rounded-full"></div>
          <div className="absolute top-1 left-5 w-2 h-3 bg-yellow-400 rounded-full"></div>
          <div className="absolute top-1 left-7 w-2 h-3 bg-green-400 rounded-full"></div>
        </div>

        {/* Bees */}
        {/* Bee 1 */}
        <div className="absolute top-32 left-20 w-8 h-8 bg-yellow-300 rounded-full border-2 border-white">
          <div className="absolute top-1 left-1 w-1 h-1 bg-black rounded-full"></div>
          <div className="absolute top-1 right-1 w-1 h-1 bg-black rounded-full"></div>
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-pink-300 rounded-full"></div>
          {/* Wings */}
          <div className="absolute top-0 left-0 w-3 h-2 bg-white rounded-full opacity-80"></div>
          <div className="absolute top-0 right-0 w-3 h-2 bg-white rounded-full opacity-80"></div>
          {/* Stripes */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-black rounded-full"></div>
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-black rounded-full"></div>
        </div>

        {/* Bee 2 */}
        <div className="absolute top-12 right-48 w-6 h-6 bg-gray-400 rounded-full border-2 border-white">
          <div className="absolute top-1 left-1 w-1 h-1 bg-black rounded-full"></div>
          <div className="absolute top-1 right-1 w-1 h-1 bg-black rounded-full"></div>
          {/* Wings */}
          <div className="absolute top-0 left-0 w-2 h-1 bg-white rounded-full opacity-80"></div>
          <div className="absolute top-0 right-0 w-2 h-1 bg-white rounded-full opacity-80"></div>
          {/* Stripes */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-3 h-1 bg-black rounded-full"></div>
        </div>

        {/* Bee 3 */}
        <div className="absolute top-8 right-8 w-7 h-7 bg-yellow-300 rounded-full border-2 border-white">
          <div className="absolute top-1 left-1 w-1 h-1 bg-black rounded-full"></div>
          <div className="absolute top-1 right-1 w-1 h-1 bg-black rounded-full"></div>
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-pink-300 rounded-full"></div>
          {/* Wings */}
          <div className="absolute top-0 left-0 w-2 h-1 bg-white rounded-full opacity-80"></div>
          <div className="absolute top-0 right-0 w-2 h-1 bg-white rounded-full opacity-80"></div>
          {/* Stripes */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-3 h-1 bg-black rounded-full"></div>
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-1 bg-black rounded-full"></div>
        </div>
      </div>

      {/* Text Content */}
      <div className="absolute top-4 left-4 z-10">
        {/* Adopt Me Logo */}
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Adopt Me</h1>
        
        {/* Disclaimer */}
        <p className="text-xs text-gray-700 max-w-xs leading-tight">
          RoPlaza is not affiliated, associated, or partnered with UpliftGames LLC and Roblox Corporation in any way. 
          We are not authorized, endorsed, or sponsored by Uplift Games LLC and Roblox Corporation.
        </p>
      </div>

      {/* Additional R$ Symbol behind disclaimer */}
      <div className="absolute top-8 left-32 w-12 h-12 bg-gray-200 rounded-full opacity-30 flex items-center justify-center">
        <span className="text-gray-600 font-bold">R$</span>
      </div>
    </div>
  );
};

export default Header;
