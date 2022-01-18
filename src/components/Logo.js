import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y } from 'swiper';
import SwiperCore, { Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



function Logo() {
  return (
    <Swiper
     modules={[A11y]}
      spaceBetween={100}
      slidesPerView={4}
      loop={true}
      autoplay={{ delay: 3000 }}
      onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{
          // when window width is >= 640px
          // when window width is >= 768px
          480: {
            slidesPerView: 5,
          },
          960: {
            slidesPerView: 6
          },
          1260: {
            slidesPerView: 7
          },
  
        }}
    >
 
               <SwiperSlide><div className="max-w-xs"><img src="./img/logos/vitapit.jpg" alt="" /></div></SwiperSlide>
               <SwiperSlide><div><img src="./img/logos/apu.png" alt="" /></div></SwiperSlide>
               <SwiperSlide><div><img src="./img/logos/vitapit.jpg" alt="" /></div></SwiperSlide>
               <SwiperSlide><div><img src="./img/logos/apu.png" alt="" /></div></SwiperSlide>
               <SwiperSlide><div><img src="./img/logos/vitapit.jpg" alt="" /></div></SwiperSlide>
               <SwiperSlide><div><img src="./img/logos/apu.png" alt="" /></div></SwiperSlide>
          </Swiper>
      )
//     </Swiper>
  ;
};

export default Logo