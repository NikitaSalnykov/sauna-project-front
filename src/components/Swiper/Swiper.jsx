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
import { Review } from '../Review/Review';

export const SwiperComponent = ({ reviews }) => {

  const breakpoints = {
    1280: {
      slidesPerView: 2,
    },
    760: {
      slidesPerView: 1,
    },
    320: {
      slidesPerView: 1,
    },
    0: {
      slidesPerView: 1,
    },
  };

  return (
    <>
      {reviews && (
        <Swiper
          className="flex justify-center items-center min-h-[350px] md:min-h-[480px] slider-reviews"
          modules={[Autoplay, Navigation, Scrollbar, Pagination]}
          // loop={true}
          spaceBetween={40}
          breakpoints={breakpoints}
          // autoplay={{
          //   delay: 1800, // Указывает время между сменой слайдов в миллисекундах (в данном случае, 5 секунд)
          //   disableOnInteraction: true, // Отключает остановку автоплея при взаимодействии с пользователем
          // }}
          pagination={{
            clickable: true,
          }}
          // speed={5000}
        >
              {reviews.map((el, index) => (
                 <SwiperSlide
                 key={index}
                 className="w-full  relative  "
               >
              <Review review={el}/>
               </SwiperSlide>
              ))}

        </Swiper>
      )}
    </>
  );
};
