import { Flame } from "lucide-react";

interface ProductCardProps {
  name: string;
  price: string;
  oldPrice: string;
  discount: string;
  rarity: "Rare" | "Mythical";
  image: string;
}

export function ProductCard({ name, price, oldPrice, discount, rarity, image }: ProductCardProps) {
  const isRare = rarity === "Rare";
  
  return (
    <div className="relative w-full max-w-[234px] h-[276px] rounded-[15px] overflow-hidden group">
      <div 
        className="absolute inset-0 rounded-[15px]"
        style={{ background: '#030C08' }}
      />
      
      <div 
        className="absolute inset-0 rounded-[15px]"
        style={{
          background: isRare 
            ? 'linear-gradient(180deg, rgba(3, 12, 8, 0.00) 44.57%, rgba(29, 114, 76, 0.34) 100%)'
            : 'linear-gradient(180deg, rgba(3, 8, 12, 0.00) 44.57%, rgba(29, 53, 114, 0.34) 100%)'
        }}
      />
      
      <div className="relative h-full flex flex-col p-[17px]">
        <img 
          src={image}
          alt={name}
          className="w-[119px] h-[119px] object-contain mx-auto mt-[14px]"
        />
        
        <div className="mt-auto">
          <h3 className="text-white font-bold text-[13px] leading-[18px] mb-[21px]">
            {name}
          </h3>
          
          <div className="flex items-center gap-[7px] mb-[4px]">
            <div
              className="flex items-center gap-[7px] px-2 py-1 rounded-[6px] shadow-lg"
              style={{
                background: isRare
                  ? 'rgba(255, 66, 50, 0.10)'
                  : 'rgba(50, 156, 255, 0.10)',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.10), 0 8px 10px -6px rgba(0, 0, 0, 0.10)'
              }}
            >
              <Flame
                size={15}
                className="flex-shrink-0"
                style={{
                  color: isRare ? '#FF4232' : '#329CFF'
                }}
              />
              <span
                className="text-[9px] font-bold leading-[18px] whitespace-nowrap"
                style={{
                  background: isRare
                    ? 'linear-gradient(0deg, #FF4232 19.44%, #FF7A6E 80.56%)'
                    : 'linear-gradient(0deg, #329CFF 19.44%, #6ED4FF 80.56%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                {rarity}
              </span>
            </div>
          </div>
          
          <div className="flex items-center justify-between gap-[4px] mb-[8px]">
            <span
              className="text-[16px] font-bold leading-[24px]"
              style={{
                background: 'linear-gradient(10deg, #EA9A49 15.44%, #FFC68D 72.82%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              {price}
            </span>

            <span className="text-[#FF4232] text-[12px] font-bold leading-[18px] tracking-[0.48px]">
              {discount}
            </span>

            <button
              className="w-8 h-8 rounded flex items-center justify-center border border-white/10 hover:scale-110 transition-transform"
              style={{
                background: 'linear-gradient(180deg, #13E97D 0%, #00AE56 100%)'
              }}
              aria-label="Add to cart"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask id="mask0" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
                  <path d="M15.9896 0H0V15.9896H15.9896V0Z" fill="white"/>
                </mask>
                <g mask="url(#mask0)">
                  <path d="M4.66342 11.9918C3.92723 11.9918 3.33761 12.588 3.33761 13.3242C3.33761 14.0604 3.92723 14.6567 4.66342 14.6567C5.3996 14.6567 5.99588 14.0604 5.99588 13.3242C5.99588 12.588 5.3996 11.9918 4.66342 11.9918ZM0.666016 1.33203V2.66449H1.99848L4.39359 7.71788L3.49418 9.35015C3.39091 9.54339 3.33095 9.75989 3.33095 9.99309C3.33095 10.7293 3.92723 11.3255 4.66342 11.3255H12.6582V9.99309H4.94656C4.8533 9.99309 4.78001 9.91978 4.78001 9.82648C4.78001 9.7965 4.78667 9.76988 4.79999 9.74653L5.39627 8.6606H10.3597C10.8594 8.6606 11.2957 8.38414 11.5256 7.97438L13.9074 3.65052C13.9607 3.55725 13.9907 3.44732 13.9907 3.33073C13.9907 2.96097 13.6909 2.66449 13.3244 2.66449H3.47419L2.84127 1.33203H0.666016ZM11.3257 11.9918C10.5896 11.9918 9.99995 12.588 9.99995 13.3242C9.99995 14.0604 10.5896 14.6567 11.3257 14.6567C12.062 14.6567 12.6582 14.0604 12.6582 13.3242C12.6582 12.588 12.062 11.9918 11.3257 11.9918Z" fill="white"/>
                </g>
              </svg>
            </button>
          </div>

          <div className="opacity-60 pb-[16px]">
            <span className="text-[#BABABA] font-bold text-[10px] leading-[24px] tracking-[1.2px] line-through">
              {oldPrice}
            </span>
          </div>
        </div>
      </div>
      
    </div>
  );
}