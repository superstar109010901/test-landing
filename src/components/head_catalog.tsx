import { ProductCard } from "./cards";
import { Flame } from "lucide-react";

export default function Index() {
  const products = [
    {
      name: "Kitsune",
      price: "$ 20.29",
      oldPrice: "$69.99",
      discount: "-31%",
      rarity: "Rare" as const,
       image: "/IMG-5467-_1_ 1.png"
    },
    {
      name: "Racoon Pets",
      price: "$ 20.29",
      oldPrice: "$69.99",
      discount: "-31%",
      rarity: "Mythical" as const,
       image: "/IMG-5467-_1_ 1.png"
    },
    {
      name: "Racoon Pets",
      price: "$ 20.29",
      oldPrice: "$69.99",
      discount: "-31%",
      rarity: "Rare" as const,
       image: "/IMG-5467-_1_ 1.png"
    },
    {
      name: "Racoon Pets",
      price: "$ 20.29",
      oldPrice: "$69.99",
      discount: "-31%",
      rarity: "Mythical" as const,
       image: "/IMG-5467-_1_ 1.png"
    },
    {
      name: "Racoon Pets",
      price: "$ 20.29",
      oldPrice: "$69.99",
      discount: "-31%",
      rarity: "Rare" as const,
       image: "/IMG-5467-_1_ 1.png"
    },
    {
      name: "Racoon Pets",
      price: "$ 20.29",
      oldPrice: "$69.99",
      discount: "-31%",
      rarity: "Mythical" as const,
       image: "/IMG-5467-_1_ 1.png"
    }
  ];

  return (
    <div className="min-h-screen bg-black px-4 py-8 md:px-8 lg:px-16">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex items-center gap-[22px] mb-11">
          <Flame
            size={29}
            className="flex-shrink-0"
            style={{
              background: 'linear-gradient(180deg, #FF867C 0%, #FF4232 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: '#FF4232'
            }}
          />
          <h1 className="text-white text-[20px] md:text-[24px] lg:text-[28px] font-bold leading-[18px]">
            Hot Items
          </h1>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6 justify-items-center">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              price={product.price}
              oldPrice={product.oldPrice}
              discount={product.discount}
              rarity={product.rarity}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}