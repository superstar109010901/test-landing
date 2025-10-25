import React, { useState } from 'react';
import type { ReactNode } from 'react';
import FilterSidebar from '../components/Sidebar';
import Header_1 from '../components/Header_1';
import FilterBar from '../components/Filterbar';
import ProductCard from '../components/ProductCard';
import FAQ from '../components/faq';
import Footer from '../components/Footer';
import ProductSlider from '../components/ProductSlider';
import CartButton from '../components/CartButton';
const Dashboard: React.FC = () => {
  // Sample product data
  const sampleProducts = [
    {
      id: "1",
      name: "Racoon Pets",
      price: "$ 20.29",
      originalPrice: "$69.99",
      discount: "-31%",
      rarity: "mythical" as const,
      image: "/animal.png",
    },
    {
      id: "2", 
      name: "Racoon Pets",
      price: "$ 20.29",
      originalPrice: "$69.99",
      discount: "-31%",
      rarity: "rare" as const,
      image: "/animal.png",
    },
    {
      id: "3",
      name: "Racoon Pets", 
      price: "$ 20.29",
      originalPrice: "$69.99",
      discount: "-31%",
      rarity: "mythical" as const,
      image: "/animal.png",
    },
    {
      id: "4",
      name: "Racoon Pets",
      price: "$ 20.29", 
      originalPrice: "$69.99",
      discount: "-31%",
      rarity: "rare" as const,
      image: "/animal.png",
    },
    {
      id: "5",
      name: "Racoon Pets",
      price: "$ 20.29",
      originalPrice: "$69.99",
      discount: "-31%", 
      rarity: "mythical" as const,
      image: "/animal.png",
    },
    {
      id: "6",
      name: "Racoon Pets",
      price: "$ 20.29",
      originalPrice: "$69.99",
      discount: "-31%",
      rarity: "rare" as const,
      image: "/animal.png",
    },
    {
        id: "7",
        name: "Racoon Pets",
        price: "$ 20.29",
        originalPrice: "$69.99",
        discount: "-31%", 
        rarity: "mythical" as const,
        image: "/animal.png",
      },
      {
        id: "8",
        name: "Racoon Pets",
        price: "$ 20.29",
        originalPrice: "$69.99",
        discount: "-31%",
        rarity: "rare" as const,
        image: "/animal.png",
      },
  ];

  // State for each section's view mode
  const [viewModes, setViewModes] = useState<{
    'Best Sellers': boolean;
    'Pets': boolean;
    'Mutated Pets': boolean;
    'Mega Pets': boolean;
    'Sheckles': boolean;
    'Fruits': boolean;
    'Bundles': boolean;
  }>({
    'Best Sellers': false,
    'Pets': false,
    'Mutated Pets': false,
    'Mega Pets': false,
    'Sheckles': false,
    'Fruits': false,
    'Bundles': false,
  });

  const handleViewAll = (section: keyof typeof viewModes) => {
    console.log(`View all ${section} clicked`);
    setViewModes(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Component to render products in grid view
  const ProductGrid = ({ products, title, titleKey }: { 
    products: typeof sampleProducts, 
    title: ReactNode, 
    titleKey: keyof typeof viewModes 
  }) => (
    <div className="flex flex-col gap-[14px]">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          {title}
        </div>
        <button
          onClick={() => handleViewAll(titleKey)}
          className="text-[11px] text-white border w-[74px] h-[26px] border-gray-600 flex justify-center items-center rounded-[9px] hover:bg-gray-700 transition-colors cursor-pointer"
        >
          Show Less
        </button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 justify-items-center">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            originalPrice={product.originalPrice}
            discount={product.discount}
            rarity={product.rarity}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div>
    <div className="grid grid-cols-[298px_1fr] items-start bg-[#030C08]">
      <FilterSidebar />
      <div className='p-9 flex flex-col gap-[42px]'>
            <Header_1/>
            <div className='relative rounded-[12px] overflow-hidden'>
                <img src="/Rectangle_20.jpg" alt="Gamepad" className="w-full " />
                <div className='absolute top-0 left-0 w-full h-full pl-[102px] pr-[102px] flex flex-col justify-center'>
                    <h1 className='text-[#4D4D4D] text-[22px] font-bold line-height-[18px]'>Adopt Me</h1>
                    <p className='text-[#4D4D4D] max-w-[504px] text-[12px] font-bold line-height-[16px]'>
                        RoPlaza is not affiliated, associated, or partnered with
                        UpliftGames LLC and Roblox Corporation in any way. We are not
                        authorized, endorsed, or sponsored by Uplift Games LLC and Roblox
                        Corporation.
                    </p>
                </div>
            </div>
            {/* Hot Item Section */}
            <ProductSlider
              products={sampleProducts}
              title={
                <div className="flex items-center gap-2">
                  <img src="/icon(6).svg" alt="Icon" className="w-5 h-5" />
                  <span className="text-white font-bold text-xl">Hot Item</span>
                </div>
              }
              showNavigation={false}
              showScrollbar={false}
            />
            <FilterBar/>
           <div className='flex flex-col gap-[100px]'>
           {/* Best Sellers Section */}
           {viewModes['Best Sellers'] ? (
             <ProductGrid 
               products={sampleProducts} 
               title={
                <div className="flex items-center gap-2">
                <img src="/icon(11).svg" alt="Icon" className="w-5 h-5" />
                <span className="text-white font-bold text-xl">Best Sellers</span>
              </div>
               }
               titleKey="Best Sellers" 
             />
           ) : (
             <ProductSlider
               products={sampleProducts}
               onViewAll={() => handleViewAll('Best Sellers')}
               title={
                <div className="flex items-center gap-2">
                <img src="/icon(11).svg" alt="Icon" className="w-5 h-5" />
                <span className="text-white font-bold text-xl">Best Sellers</span>
              </div>
               }
             />
           )}
            {/* Pets Section */}
            {viewModes['Pets'] ? (
              <ProductGrid 
                products={sampleProducts} 
                title={
                  <div className="flex items-center gap-2">
                    <img src="/icon(10).svg" alt="Icon" className="w-5 h-5" />
                    <span className="text-white font-bold text-xl">Pets</span>
                  </div>
                }
                titleKey="Pets" 
              />
            ) : (
              <ProductSlider
                products={sampleProducts}
                onViewAll={() => handleViewAll('Pets')}
                title={
                    <div className="flex items-center gap-2">
                    <img src="/icon(10).svg" alt="Icon" className="w-5 h-5" />
                    <span className="text-white font-bold text-xl">Pets</span>
                  </div>
                }
              />
            )}
            {/* Sheckles Section */}
            {viewModes['Sheckles'] ? (
              <ProductGrid 
                products={sampleProducts} 
                title={
                  <div className="flex items-center gap-2">
                    <img src="/icon(5).svg" alt="Icon" className="w-5 h-5" />
                    <span className="text-white font-bold text-xl">Sheckles</span>
                  </div>
                }
                titleKey="Sheckles" 
              />
            ) : (
              <ProductSlider
                products={sampleProducts}
                onViewAll={() => handleViewAll('Sheckles')}
                title={
                  <div className="flex items-center gap-2">
                    <img src="/icon(5).svg" alt="Icon" className="w-5 h-5" />
                    <span className="text-white font-bold text-xl">Sheckles</span>
                  </div>
                }
              />
            )}
            {/* Fruits Section */}
            {viewModes['Fruits'] ? (
              <ProductGrid 
                products={sampleProducts} 
                title={
                  <div className="flex items-center gap-2">
                    <img src="/icon(4).svg" alt="Icon" className="w-5 h-5" />
                    <span className="text-white font-bold text-xl">Fruits</span>
                  </div>
                }
                titleKey="Fruits" 
              />
            ) : (
              <ProductSlider
                products={sampleProducts}
                onViewAll={() => handleViewAll('Fruits')}
                title={
                  <div className="flex items-center gap-2">
                    <img src="/icon(4).svg" alt="Icon" className="w-5 h-5" />
                    <span className="text-white font-bold text-xl">Fruits</span>
                  </div>
                }
              />
            )}
            {/* Mutated Pets Section */}
            {viewModes['Mutated Pets'] ? (
              <ProductGrid 
                products={sampleProducts} 
                title={
                  <div className="flex items-center gap-2">
                    <img src="/icon(3).svg" alt="Icon" className="w-5 h-5" />
                    <span className="text-white font-bold text-xl">Mutated Pets</span>
                  </div>
                }
                titleKey="Mutated Pets" 
              />
            ) : (
            <ProductSlider
              products={sampleProducts}
              onViewAll={() => handleViewAll('Mutated Pets')}
              title={
                <div className="flex items-center gap-2">
                  <img src="/icon(3).svg" alt="Icon" className="w-5 h-5" />
                  <span className="text-white font-bold text-xl">Mutated Pets</span>
                </div>
              }
            />
            )}
            {/* Mega Pets Section */}
            {viewModes['Mega Pets'] ? (
              <ProductGrid 
                products={sampleProducts} 
                title={
                  <div className="flex items-center gap-2">
                    <img src="/icon(2).svg" alt="Icon" className="w-5 h-5" />
                    <span className="text-white font-bold text-xl">Mega Pets</span>
                  </div>
                }
                titleKey="Mega Pets" 
              />
            ) : (
            <ProductSlider
              products={sampleProducts}
              onViewAll={() => handleViewAll('Mega Pets')}
              title={
                <div className="flex items-center gap-2">
                  <img src="/icon(2).svg" alt="Icon" className="w-5 h-5" />
                  <span className="text-white font-bold text-xl">Mega Pets</span>
                </div>
              }
            />
            )}
            {/* Bundles Section */}
            {viewModes['Bundles'] ? (
              <ProductGrid 
                products={sampleProducts} 
                title={
                  <div className="flex items-center gap-2">
                    <img src="/icon(1).svg" alt="Icon" className="w-5 h-5" />
                    <span className="text-white font-bold text-xl">Bundles</span>
                  </div>
                }
                titleKey="Bundles" 
              />
            ) : (
              <ProductSlider
                products={sampleProducts}
                onViewAll={() => handleViewAll('Bundles')}
                title={
                  <div className="flex items-center gap-2">
                    <img src="/icon(1).svg" alt="Icon" className="w-5 h-5" />
                    <span className="text-white font-bold text-xl">Bundles</span>
                  </div>
                }
              />
            )}
            
           </div>
           <div className='grid grid-cols-2 gap-[95px]'>
            <div className='flex flex-col gap-12'>

                    <p className='font-semibold text-white text-[20px]'>
                        What is Grow a Garden and why do players want seeds and gears?
                    </p>
                    <p className='text-white text-[20px]'>
                        Grow a Garden is a massively popular Roblox farming game where players cultivate crops, collect pets, and build their dream gardens. Seeds are essential items that let you grow different crops with varying growth times and profit potential. Gears provide important bonuses like faster growth rates and better harvest yields. Players eagerly seek rare seeds and powerful gears because they dramatically increase farming efficiency and profits. The game's unique mutation system also means certain seeds can evolve into valuable variants under special conditions, making seed collection an exciting part of the gameplay.
                    </p>
            </div>
            <div className='flex flex-col gap-12'>

                    <p className='font-semibold text-white text-[20px]'>
                        What is Grow a Garden and why do players want seeds and gears?
                    </p>
                    <p className='text-white text-[20px]'>
                        Grow a Garden is a massively popular Roblox farming game where players cultivate crops, collect pets, and build their dream gardens. Seeds are essential items that let you grow different crops with varying growth times and profit potential. Gears provide important bonuses like faster growth rates and better harvest yields. Players eagerly seek rare seeds and powerful gears because they dramatically increase farming efficiency and profits. The game's unique mutation system also means certain seeds can evolve into valuable variants under special conditions, making seed collection an exciting part of the gameplay.
                    </p>
            </div>
            <div className='flex flex-col gap-12'>

                    <p className='font-semibold text-white text-[20px]'>
                        What is Grow a Garden and why do players want seeds and gears?
                    </p>
                    <p className='text-white text-[20px]'>
                        Grow a Garden is a massively popular Roblox farming game where players cultivate crops, collect pets, and build their dream gardens. Seeds are essential items that let you grow different crops with varying growth times and profit potential. Gears provide important bonuses like faster growth rates and better harvest yields. Players eagerly seek rare seeds and powerful gears because they dramatically increase farming efficiency and profits. The game's unique mutation system also means certain seeds can evolve into valuable variants under special conditions, making seed collection an exciting part of the gameplay.
                    </p>
            </div>
            <div className='flex flex-col gap-12'>

                    <p className='font-semibold text-white text-[20px]'>
                        What is Grow a Garden and why do players want seeds and gears?
                    </p>
                    <p className='text-white text-[20px]'>
                        Grow a Garden is a massively popular Roblox farming game where players cultivate crops, collect pets, and build their dream gardens. Seeds are essential items that let you grow different crops with varying growth times and profit potential. Gears provide important bonuses like faster growth rates and better harvest yields. Players eagerly seek rare seeds and powerful gears because they dramatically increase farming efficiency and profits. The game's unique mutation system also means certain seeds can evolve into valuable variants under special conditions, making seed collection an exciting part of the gameplay.
                    </p>
            </div>
            <div className='flex flex-col gap-12'>

                    <p className='font-semibold text-white text-[20px]'>
                        What is Grow a Garden and why do players want seeds and gears?
                    </p>
                    <p className='text-white text-[20px]'>
                        Grow a Garden is a massively popular Roblox farming game where players cultivate crops, collect pets, and build their dream gardens. Seeds are essential items that let you grow different crops with varying growth times and profit potential. Gears provide important bonuses like faster growth rates and better harvest yields. Players eagerly seek rare seeds and powerful gears because they dramatically increase farming efficiency and profits. The game's unique mutation system also means certain seeds can evolve into valuable variants under special conditions, making seed collection an exciting part of the gameplay.
                    </p>
            </div>
            
           </div>
        <FAQ />
        <CartButton />
           

      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Dashboard;
