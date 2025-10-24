import { ShoppingCart, Flame } from "lucide-react";

interface ProductCardProps {
  name: string;
  price: string;
  originalPrice: string;
  discount: string;
  rarity: "rare" | "mythical";
  image: string;
}

export default function ProductCard({
  name,
  price,
  originalPrice,
  discount,
  rarity,
  image,
}: ProductCardProps) {
  const isRare = rarity === "rare";
  const rarityColors = isRare
    ? {
        bg: "rgba(255, 66, 50, 0.10)",
        gradient: "linear-gradient(0deg, #FF4232 19.44%, #FF7A6E 80.56%)",
      }
    : {
        bg: "rgba(50, 156, 255, 0.10)",
        gradient: "linear-gradient(0deg, #329CFF 19.44%, #6ED4FF 80.56%)",
      };

  const cardGradient = isRare
    ? "linear-gradient(180deg, rgba(3, 12, 8, 0.00) 44.57%, rgba(29, 114, 76, 0.34) 100%)"
    : "linear-gradient(180deg, rgba(3, 8, 12, 0.00) 44.57%, rgba(29, 53, 114, 0.34) 100%)";

  return (
    <div className="relative w-full max-w-[234px] h-[276px] rounded-[15px] bg-[#030C08] overflow-hidden group">
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 rounded-[15px] border border-transparent"
        style={{
          background: cardGradient,
        }}
      />

      {/* Image section - upper half */}
      <div className="absolute top-0 left-0 right-0 h-[170px] flex items-center justify-center">
        <img
          src={image}
          alt={name}
          className="w-[119px] h-[119px] object-contain"
        />
      </div>

      {/* Content section - lower half */}
      <div className="absolute bottom-0 left-0 right-0 h-[150px] px-[17px] pt-[20px] flex flex-col justify-between">
        {/* Product info */}
        <div className="space-y-[6px]">
          <h3 className="text-white font-bold text-[13px] leading-[18px]">
            {name}
          </h3>

          {/* Rarity badge */}
          <div
            className="inline-flex items-center gap-[7px] px-1 pr-[10px] h-5 rounded-md shadow-lg w-fit"
            style={{
              background: rarityColors.bg,
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.10), 0 8px 10px -6px rgba(0, 0, 0, 0.10)",
            }}
          >
            <Flame className="w-[15px] h-[15px] flex-shrink-0 text-white opacity-75" />
            <span
              className="text-[9px] font-bold leading-[18px]"
              style={{
                background: rarityColors.gradient,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {rarity === "rare" ? "Rare" : "Mythical"}
            </span>
          </div>

          {/* Original price (strikethrough) */}
          <div className="flex items-center opacity-60">
            <span className="text-[#BABABA] text-[10px] font-semibold leading-6 tracking-[1.2px] line-through">
              {originalPrice}
            </span>
          </div>

          {/* Current price */}
          <span
            className="inline-block text-base font-bold leading-6"
            style={{
              background:
                "linear-gradient(10deg, #EA9A49 15.44%, #FFC68D 72.82%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {price}
          </span>
        </div>
      </div>

      {/* Discount badge - positioned absolutely at bottom center-right */}
      <div
        className="absolute rounded-md flex-shrink-0"
        style={{
          background: "rgba(255, 66, 50, 0.10)",
          boxShadow:
            "0 20px 25px -5px rgba(0, 0, 0, 0.10), 0 8px 10px -6px rgba(0, 0, 0, 0.10)",
          left: "50%",
          bottom: "24px",
          transform: "translateX(-50%)",
          padding: "1px 4px",
        }}
      >
        <span className="text-[#FF4232] text-xs font-semibold leading-[18px] tracking-[0.48px]">
          {discount}
        </span>
      </div>

      {/* Cart button - positioned absolutely at bottom right */}
      <button
        className="absolute w-8 h-8 rounded flex items-center justify-center border border-white/10 shadow-sm transition-transform hover:scale-110"
        style={{
          background: "linear-gradient(180deg, #13E97D 0%, #00AE56 100%)",
          right: "17px",
          bottom: "24px",
        }}
      >
        <ShoppingCart className="w-4 h-4 text-white" />
      </button>
    </div>
  );
}
