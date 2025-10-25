import ProductSlider from "./ProductSlider";

// Sample product data
const sampleProducts = [
  {
    id: "1",
    name: "Racoon Pets",
    price: "$ 20.29",
    originalPrice: "$69.99",
    discount: "-31%",
    rarity: "mythical" as const,
    image: "/public/animal.png", // Replace with actual image path
  },
  {
    id: "2",
    name: "Racoon Pets",
    price: "$ 20.29",
    originalPrice: "$69.99",
    discount: "-31%",
    rarity: "rare" as const,
    image: "/public/animal.png",
  },
  {
    id: "3",
    name: "Racoon Pets",
    price: "$ 20.29",
    originalPrice: "$69.99",
    discount: "-31%",
    rarity: "mythical" as const,
    image: "/public/animal.png",
  },
  {
    id: "4",
    name: "Racoon Pets",
    price: "$ 20.29",
    originalPrice: "$69.99",
    discount: "-31%",
    rarity: "rare" as const,
    image: "/public/animal.png",
  },
  {
    id: "5",
    name: "Racoon Pets",
    price: "$ 20.29",
    originalPrice: "$69.99",
    discount: "-31%",
    rarity: "mythical" as const,
    image: "/public/animal.png",
  },
  {
    id: "6",
    name: "Racoon Pets",
    price: "$ 20.29",
    originalPrice: "$69.99",
    discount: "-31%",
    rarity: "rare" as const,
    image: "/public/animal.png",
  },
];

const ProductSliderDemo = () => {
  const handleViewAll = () => {
    console.log("View All clicked");
    // Navigate to products page or show all products
  };

  return (
    <div className="bg-gray-900 min-h-screen p-8">
      <ProductSlider
        products={sampleProducts}
        onViewAll={handleViewAll}
        title="Best Sellers"
      />
    </div>
  );
};

export default ProductSliderDemo;
