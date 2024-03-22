// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Scrollbar, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useRef } from 'react';
import Svg from '../Svg/Svg';
import { ProductCard } from '../ProductCard/ProductCard';

export const SwiperComponent = ({ products }) => {
  const breakpoints = {
    1200: {
      slidesPerView: 3,
      spaceBetween: 10,

    },
    420: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
  };


  return (
    <>
      {products && (
        <Swiper
          className="flex flex-wrap justify-center gap-4 md:gap-8 xl:gap-12 items-center  pb-12"
          pagination={{
            clickable: true,

          }}
          modules={[Autoplay, Navigation, Scrollbar, Pagination]}
          breakpoints={breakpoints}
        >
              {products.map((el, index) => (
                 <SwiperSlide
                 key={index}
                 className="w-full relative"
               >
              <ProductCard img={el.img} price={el.price} description={el.description} title={el.title}/>
               </SwiperSlide>
              ))}

        </Swiper>
      )}
    </>
  );
};
