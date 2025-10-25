// ProductSlider.tsx
import { useRef } from "react";
import type { ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import { ChevronLeft, ChevronRight, Flame } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import ProductCard from "./ProductCard";

interface Product {
  id: string;
  name: string;
  price: string;
  originalPrice: string;
  discount: string;
  rarity: "rare" | "mythical";
  image: string;
}

interface ProductSliderProps {
  products: Product[];
  onViewAll?: () => void;
  title?: ReactNode;
  showNavigation?: boolean;
  showScrollbar?: boolean;
}

const ProductSlider: React.FC<ProductSliderProps> = ({ 
  products, 
  onViewAll, 
  title = "Best Sellers",
  showNavigation = true,
  showScrollbar = true
}) => {
  const swiperRef = useRef<any>(null);

  const goToPrev = () => {
    console.log('Previous button clicked');
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const goToNext = () => {
    console.log('Next button clicked');
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div className="w-full relative px-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          {
            title
          }
        </div>
        {(showNavigation || onViewAll) && (
          <div className="flex items-center gap-2">
            {/* Navigation buttons */}
            {showNavigation && (
              <>
                <button
                  onClick={goToPrev}
                  className="w-[30px] h-[30px] rounded-[9px] bg-gray-800 border border-[#999999] flex items-center justify-center hover:bg-gray-700 transition-colors"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-4 h-4 text-[#3DFF88]" />
                </button>
                <button
                  onClick={goToNext}
                  className="w-[30px] h-[30px] rounded-[9px] bg-gray-800 border border-[#999999] flex items-center justify-center hover:bg-gray-700 transition-colors"
                  aria-label="Next"
                >
                  <ChevronRight className="w-4 h-4 text-[#3DFF88]" />
                </button>
              </>
            )}
            {/* View All button */}
            {onViewAll && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  console.log('View All button clicked');
                  if (onViewAll) {
                    onViewAll();
                  }
                }}
                className="text-[11px] text-white border w-[74px] h-[26px] border-gray-600 flex justify-center items-center rounded-[9px] hover:bg-gray-700 transition-colors cursor-pointer"
                type="button"
              >
                View All
              </button>
            )}
          </div>
        )}
      </div>

      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={showScrollbar ? [Navigation, Scrollbar] : [Navigation]}
        spaceBetween={16}
        slidesPerView={1}
        centeredSlides={false}
        freeMode={false}
        scrollbar={showScrollbar ? {
          hide: false,
          draggable: true,
          dragSize: 'auto',
          snapOnRelease: true,
        } : undefined}
        breakpoints={{
          640: { 
            slidesPerView: 2,
            spaceBetween: 16,
          },
          768: { 
            slidesPerView: 3,
            spaceBetween: 16,
          },
          1024: { 
            slidesPerView: 4,
            spaceBetween: 16,
          },
          1280: { 
            slidesPerView: 6,
            spaceBetween: 16,
          },
        }}
        className="product-swiper"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="!w-[250px] flex justify-center">
            <ProductCard
              name={product.name}
              price={product.price}
              originalPrice={product.originalPrice}
              discount={product.discount}
              rarity={product.rarity}
              image={product.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
