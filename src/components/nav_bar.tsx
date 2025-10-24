import React, { useState } from 'react';
import { Button } from './ui/button';

interface NavBarProps {
  className?: string;
}

const NavBar: React.FC<NavBarProps> = ({ className }) => {
  const [selectedGame, setSelectedGame] = useState('Select Game');
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [showGameDropdown, setShowGameDropdown] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  const games = [
    'Pet Simulator X',
    'Adopt Me',
    'Brookhaven',
    'Bloxburg',
    'Arsenal',
    'Jailbreak'
  ];

  const languages = [
    { name: 'English', flag: '🇺🇸' },
    { name: 'Spanish', flag: '🇪🇸' },
    { name: 'French', flag: '🇫🇷' },
    { name: 'German', flag: '🇩🇪' },
    { name: 'Portuguese', flag: '🇵🇹' }
  ];

  const currencies = ['USD', 'EUR', 'GBP', 'CAD', 'AUD'];

  return (
    <nav className={`bg-black px-6 py-4 ${className}`}>
      <div className="flex items-center justify-between">
        {/* Left side - Game Selector */}
        <div className="relative">
          <button
            onClick={() => setShowGameDropdown(!showGameDropdown)}
            className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors"
          >
            {/* Four-leaf clover icon */}
            <div className="w-5 h-5 flex items-center justify-center">
              <svg viewBox="0 0 20 20" className="w-4 h-4 text-green-400">
                <path
                  d="M10 2L12 6L16 6L13 9L14 13L10 11L6 13L7 9L4 6L8 6L10 2Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <span className="text-white font-medium">{selectedGame}</span>
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {/* Game Dropdown */}
          {showGameDropdown && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg z-50">
              {games.map((game) => (
                <button
                  key={game}
                  onClick={() => {
                    setSelectedGame(game);
                    setShowGameDropdown(false);
                  }}
                  className="w-full text-left px-4 py-2 text-white hover:bg-gray-700 first:rounded-t-lg last:rounded-b-lg"
                >
                  {game}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Center - Empty space */}
        <div className="flex-1"></div>

        {/* Right side - Language/Currency and Login */}
        <div className="flex items-center gap-4">
          {/* Language and Currency Selector */}
          <div className="relative">
            <button
              onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
              className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors"
            >
              <span className="text-lg">🇺🇸</span>
              <span className="text-white font-medium">{selectedLanguage}</span>
              <div className="w-px h-4 bg-white"></div>
              <span className="text-white font-medium">{selectedCurrency}</span>
            </button>

            {/* Language Dropdown */}
            {showLanguageDropdown && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg z-50">
                <div className="p-2">
                  <div className="text-gray-400 text-xs font-semibold mb-2 px-2">Language</div>
                  {languages.map((lang) => (
                    <button
                      key={lang.name}
                      onClick={() => {
                        setSelectedLanguage(lang.name);
                        setShowLanguageDropdown(false);
                      }}
                      className="w-full text-left px-2 py-2 text-white hover:bg-gray-700 rounded flex items-center gap-2"
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
                <div className="border-t border-gray-700 p-2">
                  <div className="text-gray-400 text-xs font-semibold mb-2 px-2">Currency</div>
                  {currencies.map((currency) => (
                    <button
                      key={currency}
                      onClick={() => {
                        setSelectedCurrency(currency);
                        setShowLanguageDropdown(false);
                      }}
                      className="w-full text-left px-2 py-2 text-white hover:bg-gray-700 rounded"
                    >
                      {currency}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Login Button */}
          <Button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-lg transition-colors">
            Login
          </Button>
        </div>
      </div>

      {/* Click outside to close dropdowns */}
      {(showGameDropdown || showLanguageDropdown) && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => {
            setShowGameDropdown(false);
            setShowLanguageDropdown(false);
          }}
        />
      )}
    </nav>
  );
};

export default NavBar;
