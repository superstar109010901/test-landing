import React from 'react';
import FilterSidebar from '../components/Sidebar';
import Header_1 from '../components/Header_1';
import FilterBar from '../components/Filterbar';
import ProductCard from '../components/ProductCard';
import FAQ from '../components/faq';
import Footer from '../components/Footer';
import { FooterSection } from '../components/sections/Footer';

const Dashboard: React.FC = () => {
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
                    <p className='text-[#4D4D4D] text-[12px] font-bold line-height-[16px]'>
                        RoPlaza is not affiliated, associated, or partnered with
                        UpliftGames LLC and Roblox Corporation in any way. We are not
                        authorized, endorsed, or sponsored by Uplift Games LLC and Roblox
                        Corporation.
                    </p>
                </div>
            </div>
            <div className='flex flex-col gap-[14px]'>
                <div className='w-full flex gap-4 items-center'>
                    
                    <img src="/icon(6).svg" alt="Icon" />
                    <span className='text-white font-bold text-20'>Hot Item</span>
                </div>
                <div className='grid grid-cols-6 space-between'>
                    {[1,2,3,4,5,6].map((item, index) => (
                        <ProductCard key={item} name='Adopt Me' price='100' originalPrice='100' discount='10' rarity={index % 2 === 0 ? 'rare' : 'mythical'} image='/animal.png' />
                    ))}
                </div>
            </div>
            <FilterBar/>
           <div className='flex flex-col gap-[100px]'>
           <div className='flex flex-col gap-[14px]'>
                <div className='w-full flex gap-4 items-center'>
                 
                    <img src="/icon(11).svg" alt="Icon" />
                    <span className='text-white font-bold text-20'>Best Sellers</span>
                </div>
                <div className='grid grid-cols-6 space-between'>
                    {[1,2,3,4,5,6].map((item, index) => (
                        <ProductCard key={item} name='Adopt Me' price='100' originalPrice='100' discount='10' rarity={index % 2 === 0 ? 'rare' : 'mythical'} image='/animal.png' />
                    ))}
                </div>
            </div>
            <div className='flex flex-col gap-[14px]'>
                <div className='w-full flex gap-4 items-center'>
                    
                    <img src="/icon(10).svg" alt="Icon" />
                    
                    <span className='text-white font-bold text-20'>Pets</span>
                </div>
                <div className='grid grid-cols-6 space-between'>
                    {[1,2,3,4,5,6].map((item, index) => (
                        <ProductCard key={item} name='Adopt Me' price='100' originalPrice='100' discount='10' rarity={index % 2 === 0 ? 'rare' : 'mythical'} image='/animal.png' />
                    ))}
                </div>
            </div>
            <div className='flex flex-col gap-[14px]'>
                <div className='w-full flex gap-4 items-center'>
                    <img src="/icon(5).svg" alt="Icon" />
                    <span className='text-white font-bold text-20'>Sheckles</span>
                </div>
                <div className='grid grid-cols-6 space-between'>
                    {[1,2,3,4,5,6].map((item, index) => (
                        <ProductCard key={item} name='Adopt Me' price='100' originalPrice='100' discount='10' rarity={index % 2 === 0 ? 'rare' : 'mythical'} image='/animal.png' />
                    ))}
                </div>
            </div>
            <div className='flex flex-col gap-[14px]'>
                <div className='w-full flex gap-4 items-center'>
                    <img src="/icon(4).svg" alt="Icon" />
                    
                    <span className='text-white font-bold text-20'>Fruits</span>
                </div>
                <div className='grid grid-cols-6 space-between'>
                    {[1,2,3,4,5,6].map((item, index) => (
                        <ProductCard key={item} name='Adopt Me' price='100' originalPrice='100' discount='10' rarity={index % 2 === 0 ? 'rare' : 'mythical'} image='/animal.png' />
                    ))}
                </div>
            </div>
            <div className='flex flex-col gap-[14px]'>
                <div className='w-full flex gap-4 items-center'>
                    <img src="/icon(3).svg" alt="Icon" />
                   
                    <span className='text-white font-bold text-20'>Mutated Pets</span>
                </div>
                <div className='grid grid-cols-6 space-between'>
                    {[1,2,3,4,5,6].map((item, index) => (
                        <ProductCard key={item} name='Adopt Me' price='100' originalPrice='100' discount='10' rarity={index % 2 === 0 ? 'rare' : 'mythical'} image='/animal.png' />
                    ))}
                </div>
            </div>
            <div className='flex flex-col gap-[14px]'>
                <div className='w-full flex gap-4 items-center'>
                    <img src="/icon(2).svg" alt="Icon" />
                    
                    <span className='text-white font-bold text-20'>Mega Pets</span>
                </div>
                <div className='grid grid-cols-6 space-between'>
                    {[1,2,3,4,5,6].map((item, index) => (
                        <ProductCard key={item} name='Adopt Me' price='100' originalPrice='100' discount='10' rarity={index % 2 === 0 ? 'rare' : 'mythical'} image='/animal.png' />
                    ))}
                </div>
            </div>
            <div className='flex flex-col gap-[14px]'>
                <div className='w-full flex gap-4 items-center'>
                    <img src="/icon(1).svg" alt="Icon" />
                    
                    <span className='text-white font-bold text-20'>Bundles</span>
                </div>
                <div className='grid grid-cols-6 space-between'>
                    {[1,2,3,4,5,6].map((item, index) => (
                        <ProductCard key={item} name='Adopt Me' price='100' originalPrice='100' discount='10' rarity={index % 2 === 0 ? 'rare' : 'mythical'} image='/animal.png' />
                    ))}
                </div>
            </div>
            
           </div>
           <FAQ />
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
            <div className='flex flex-col gap-12'>

                    <p className='font-semibold text-white text-[20px]'>
                        What is Grow a Garden and why do players want seeds and gears?
                    </p>
                    <p className='text-white text-[20px]'>
                        Grow a Garden is a massively popular Roblox farming game where players cultivate crops, collect pets, and build their dream gardens. Seeds are essential items that let you grow different crops with varying growth times and profit potential. Gears provide important bonuses like faster growth rates and better harvest yields. Players eagerly seek rare seeds and powerful gears because they dramatically increase farming efficiency and profits. The game's unique mutation system also means certain seeds can evolve into valuable variants under special conditions, making seed collection an exciting part of the gameplay.
                    </p>
            </div>
           </div>
        
           

      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Dashboard;
