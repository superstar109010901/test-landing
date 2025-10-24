import { useState } from "react";
import * as SliderPrimitive from '@radix-ui/react-slider';

interface RarityOption {
  name: string;
  count: number;
  gradient: string;
  checked: boolean;
}

export default function FilterSidebar() {
  const [priceRange, setPriceRange] = useState([0.25, 2000]);
  const [rarities, setRarities] = useState<RarityOption[]>([
    {
      name: "Secret",
      count: 0,
      gradient: "linear-gradient(182deg, #FF1B1B -6.62%, #FF9797 99.05%)",
      checked: false,
    },
    {
      name: "Ultimate",
      count: 0,
      gradient: "linear-gradient(182deg, #FF8D1B -6.62%, #FFCE97 99.05%)",
      checked: false,
    },
    {
      name: "Prismatic",
      count: 0,
      gradient: "linear-gradient(182deg, #E4FF1B -6.62%, #FFFC97 99.05%)",
      checked: false,
    },
    {
      name: "Godly",
      count: 0,
      gradient: "linear-gradient(182deg, #49FF1B -6.62%, #AFFF97 99.05%)",
      checked: false,
    },
    {
      name: "Exclusive",
      count: 0,
      gradient: "linear-gradient(182deg, #1BF7FF -6.62%, #97F8FF 99.05%)",
      checked: false,
    },
    {
      name: "Mythic",
      count: 0,
      gradient: "linear-gradient(182deg, #1B41FF -6.62%, #A197FF 99.05%)",
      checked: false,
    },
    {
      name: "Legendary",
      count: 0,
      gradient: "linear-gradient(182deg, #C61BFF -6.62%, #F197FF 99.05%)",
      checked: false,
    },
    {
      name: "Ultra rare",
      count: 0,
      gradient: "linear-gradient(182deg, #FF1B54 -6.62%, #FF97B4 99.05%)",
      checked: false,
    },
    {
      name: "Rare",
      count: 0,
      gradient: "linear-gradient(182deg, #FFF -6.62%, #9A9A9A 99.05%)",
      checked: false,
    },
    {
      name: "Uncommon",
      count: 0,
      gradient: "linear-gradient(182deg, #FF1B1B -6.62%, #FF9797 99.05%)",
      checked: false,
    },
    {
      name: "Common",
      count: 0,
      gradient: "linear-gradient(182deg, #FFF -6.62%, #E9E9E9 99.05%)",
      checked: false,
    },
  ]);

  const [isRarityCollapsed, setIsRarityCollapsed] = useState(false);

  const toggleRarity = (index: number) => {
    setRarities((prev) =>
      prev.map((rarity, i) =>
        i === index ? { ...rarity, checked: !rarity.checked } : rarity
      )
    );
  };

  const clearAll = () => {
    setRarities((prev) =>
      prev.map((rarity) => ({ ...rarity, checked: false }))
    );
    setPriceRange([0.25, 2000]);
  };

  const totalFilters = rarities.filter((r) => r.checked).length;

  return (
    <div className=" bg-[#030C08] flex flex-col overflow-y-auto">
      <div className="px-4 pt-8 pb-4 flex-1 flex flex-col">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img
            src="/logo.svg"
            alt="RoCart Logo"
            className="w-[108px] h-[27px]"
          />
        </div>

        {/* Filter Header */}
        <div className="px-[13px]">
          <div className="flex items-center gap-2 mb-7">
            <h2 className="text-white text-[13px] font-bold leading-6">
              Filter items
            </h2>
            <div className="flex items-center justify-center w-[27px] h-[25px] rounded-lg bg-gradient-to-r from-[#13E97D] to-[#0B8346]">
              <span className="text-white text-[13px] font-bold leading-[17.5px]">
                {totalFilters || 43}
              </span>
            </div>
            <button
              className="ml-auto text-[#13E97D] text-[10px] font-medium leading-6"
              onClick={clearAll}
            >
              Reset
            </button>
          </div>

          {/* Item Price */}
          <div className="mb-9">
            <h3 className="text-white/53 text-[11px] font-bold leading-6 mb-7">
              Item price
            </h3>

            <div className="flex gap-[30px] mb-5">
              <div>
                <label className="text-white/53 text-[10px] font-bold leading-6 block mb-[7px]">
                  From
                </label>
                <div className="w-[108px] h-[41px] rounded-[13px] bg-[#141D15] flex items-center justify-center">
                  <span className="text-[#88918C]/56 text-[13px] font-bold leading-6">{`min $${priceRange[0].toFixed(2)}`}</span>
                </div>
              </div>

              <div>
                <label className="text-white/53 text-[10px] font-bold leading-6 block mb-[7px]">
                  To
                </label>
                <div className="w-[108px] h-[41px] rounded-[13px] bg-[#141D15] flex items-center justify-center">
                  <span className="text-[#88918C]/56 text-[13px] font-bold leading-6">{`max $${priceRange[1].toFixed(0)}`}</span>
                </div>
              </div>
            </div>

            {/* Price Range Slider */}
            <div className="relative mb-8">
              <SliderPrimitive.Root
                className="relative flex w-full select-none touch-none items-center"
                min={0.25}
                max={2000}
                step={0.25}
                value={priceRange}
                onValueChange={(v: number[]) => setPriceRange([Number(v[0]), Number(v[1])])}
                aria-label="Price range"
              >
                <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-[#141D15]">
                  <SliderPrimitive.Range className="absolute h-full bg-[#13E97D]" />
                </SliderPrimitive.Track>

                <SliderPrimitive.Thumb
                  className="block h-5 w-5 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#13E97D', boxShadow: '0 0 0 3px rgba(19,233,125,0.08)' }}
                  aria-label="Minimum price"
                />
                <SliderPrimitive.Thumb
                  className="block h-5 w-5 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#13E97D', boxShadow: '0 0 0 3px rgba(19,233,125,0.08)' }}
                  aria-label="Maximum price"
                />
              </SliderPrimitive.Root>

              <div className="h-px bg-[#373737] mt-[18px]"></div>
            </div>
          </div>

          {/* Rarity Section */}
          <div className="mb-8">
            <button
              className="flex items-center gap-[21px] mb-[9px]"
              onClick={() => setIsRarityCollapsed(!isRarityCollapsed)}
            >
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                className={`transition-transform ${isRarityCollapsed ? "-rotate-90" : ""}`}
              >
                <path
                  d="M7.5 3.75L5 6.25L2.5 3.75"
                  stroke="#336239"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h3 className="text-white text-[11px] font-bold leading-6">
                Rarity
              </h3>
            </button>

            {!isRarityCollapsed && (
              <div className="space-y-[3px] pl-[4px]">
                {rarities.map((rarity, index) => (
                  <div key={rarity.name} className="flex items-center h-[29px]">
                    <div
                    className="w-[22px] h-[22px] flex-shrink-0 rounded-sm"
                    style={{
                      background: rarity.gradient,
                      WebkitMaskImage: "url('https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f?width=44')",
                      WebkitMaskRepeat: 'no-repeat',
                      WebkitMaskSize: 'contain',
                      maskImage: "url('https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f?width=44')",
                      maskRepeat: 'no-repeat',
                      maskSize: 'contain',
                      transform: 'rotate(-0.695deg)',
                    }}
                  />
                  <img src={"/virus(1).svg"} alt="Virus" />
                    <span className="text-white text-[11px] font-bold leading-6 ml-[15px]">
                      {rarity.name}
                    </span>
                    <span className="text-[#989898] text-[8px] font-bold leading-6 ml-auto">
                      ({rarity.count})
                    </span>
                    <button
                      className="w-[21px] h-[20px] rounded-[5px] bg-[#141D15] flex items-center justify-center ml-[10px] flex-shrink-0"
                      style={{ transform: 'rotate(-0.695deg)' }}
                      onClick={() => toggleRarity(index)}
                    >
                      {rarity.checked && (
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                        >
                          <path
                            d="M10 3L4.5 8.5L2 6"
                            stroke="#13E97D"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="space-y-[12px] mb-8">
            <button className="w-full h-[43px] rounded-[13px] bg-gradient-to-r from-[#48FFA3] to-[#0B8346] flex items-center justify-center">
              <span className="text-white text-[12px] font-bold leading-6">
                Confirm
              </span>
            </button>

            <button
              className="w-full h-[43px] rounded-[13px] border border-[#313131] bg-[#141D15] flex items-center justify-center"
              onClick={clearAll}
            >
              <span className="text-white text-[12px] font-bold leading-6">
                Clear all
              </span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-auto px-4 pb-8">
          <p className="text-[#666666] text-[11.1px] font-medium leading-[18px] mb-[17px]">
            RoPlaza is not affiliated, associated, or partnered with UpliftGames
            LLC and Roblox Corporation in any way. We are not authorized,
            endorsed, or sponsored by Uplift Games LLC and Roblox Corporation.
          </p>
          <p className="text-[#6B7685]/45 text-[12px] font-bold leading-[21px]">
            © 2020-2025 RoPlaza All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}
