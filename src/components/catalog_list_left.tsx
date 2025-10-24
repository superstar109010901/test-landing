import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';

interface CatalogListLeftProps {
  className?: string;
}

const CatalogListLeft: React.FC<CatalogListLeftProps> = ({ className }) => {
  const [priceRange, setPriceRange] = useState({ min: 0.25, max: 2000 });
  const [selectedRarities, setSelectedRarities] = useState<string[]>([]);

  const rarities = [
    { name: 'Secret', color: '#FF4444', count: 0 },
    { name: 'Ultimate', color: '#FF8800', count: 0 },
    { name: 'Prismatic', color: '#FFDD00', count: 0 },
    { name: 'Godly', color: '#88FF88', count: 0 },
    { name: 'Exclusive', color: '#44FFFF', count: 0 },
    { name: 'Mythic', color: '#4488FF', count: 0 },
    { name: 'Legendary', color: '#8844FF', count: 0 },
    { name: 'Ultra rare', color: '#FF44FF', count: 0 },
    { name: 'Rare', color: '#CCCCCC', count: 0 },
    { name: 'Uncommon', color: '#884444', count: 0 },
    { name: 'Common', color: '#CCCCCC', count: 0 },
  ];

  const handleRarityToggle = (rarityName: string) => {
    setSelectedRarities(prev => 
      prev.includes(rarityName) 
        ? prev.filter(r => r !== rarityName)
        : [...prev, rarityName]
    );
  };

  const handlePriceChange = (type: 'min' | 'max', value: number) => {
    setPriceRange(prev => ({ ...prev, [type]: value }));
  };

  const handleReset = () => {
    setPriceRange({ min: 0.25, max: 2000 });
    setSelectedRarities([]);
  };

  const handleClearAll = () => {
    setSelectedRarities([]);
  };

  return (
    <div className={`bg-[#0A0A0A] text-white p-6 rounded-lg font-poppins ${className}`}>
      {/* Header with Logo */}
      <div className="text-center mb-6">
        <img 
          src="/catalog_logo.png" 
          alt="RoCART Logo" 
          className="mx-auto h-12 w-auto"
        />
      </div>

      {/* Filter Items Section */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <span className="text-white font-bold">Filter items</span>
          <Badge className="bg-[#39E07F] text-white rounded-md px-2 py-1">
            43
          </Badge>
        </div>
        <button 
          onClick={handleReset}
          className="text-[#39E07F] text-sm hover:underline"
        >
          Reset
        </button>
      </div>

      {/* Item Price Filter */}
      <div className="mb-6">
        <label className="text-white text-sm font-medium mb-3 block">Item price</label>
        <div className="flex gap-2 mb-3">
          <Input
            type="number"
            placeholder="min $0.25"
            value={priceRange.min}
            onChange={(e) => handlePriceChange('min', parseFloat(e.target.value) || 0.25)}
            className="bg-[#1A1A1A] border-gray-600 text-white placeholder:text-gray-400"
          />
          <Input
            type="number"
            placeholder="max $2000"
            value={priceRange.max}
            onChange={(e) => handlePriceChange('max', parseFloat(e.target.value) || 2000)}
            className="bg-[#1A1A1A] border-gray-600 text-white placeholder:text-gray-400"
          />
        </div>
        
        {/* Price Range Slider */}
        <div className="relative">
          <input
            type="range"
            min="0.25"
            max="2000"
            step="0.25"
            value={priceRange.min}
            onChange={(e) => handlePriceChange('min', parseFloat(e.target.value))}
            className="absolute w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
            style={{
              background: `linear-gradient(to right, #39E07F 0%, #39E07F ${((priceRange.min - 0.25) / (2000 - 0.25)) * 100}%, #333333 ${((priceRange.min - 0.25) / (2000 - 0.25)) * 100}%, #333333 100%)`
            }}
          />
          <input
            type="range"
            min="0.25"
            max="2000"
            step="0.25"
            value={priceRange.max}
            onChange={(e) => handlePriceChange('max', parseFloat(e.target.value))}
            className="absolute w-full h-2 bg-transparent rounded-lg appearance-none cursor-pointer slider"
          />
        </div>
      </div>

      {/* Rarity Filter */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[6px] border-l-transparent border-r-transparent border-t-[#39E07F]"></div>
          <span className="text-white font-medium">Rarity</span>
        </div>
        
        <div className="space-y-2">
          {rarities.map((rarity) => (
            <div key={rarity.name} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div 
                  className="w-4 h-4 rounded-sm"
                  style={{ backgroundColor: rarity.color }}
                ></div>
                <span className="text-white text-sm">{rarity.name}</span>
                <span className="text-gray-400 text-sm">({rarity.count})</span>
              </div>
              <input
                type="checkbox"
                checked={selectedRarities.includes(rarity.name)}
                onChange={() => handleRarityToggle(rarity.name)}
                className="w-4 h-4 bg-gray-600 border-gray-500 rounded text-[#39E07F] focus:ring-[#39E07F] focus:ring-2"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3 mb-6">
        <Button 
          className="w-full bg-gradient-to-r from-[#39E07F] to-[#2BCB5A] text-white font-bold py-3 rounded-lg hover:from-[#2BCB5A] hover:to-[#39E07F] transition-all"
        >
          Confirm
        </Button>
        <Button 
          variant="secondary"
          onClick={handleClearAll}
          className="w-full bg-gray-600 text-white font-bold py-3 rounded-lg hover:bg-gray-500"
        >
          Clear all
        </Button>
      </div>

      {/* Footer/Disclaimer */}
      <div className="text-center text-xs text-gray-400 space-y-2">
        <p>
          RoPlaza is not affiliated, associated, or partnered with UpliftGames LLC and Roblox Corporation in any way. 
          We are not authorized, endorsed, or sponsored by Uplift Games LLC and Roblox Corporation.
        </p>
        <p>© 2020-2025 RoPlaza All Rights Reserved</p>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #39E07F;
          cursor: pointer;
          border: 2px solid #fff;
        }
        
        .slider::-moz-range-thumb {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #39E07F;
          cursor: pointer;
          border: 2px solid #fff;
        }
      `}</style>
    </div>
  );
};

export default CatalogListLeft;
