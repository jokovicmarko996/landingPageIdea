// components/MySwiper.js
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core Swiper styles
import "swiper/css/navigation"; // Optional styles
import "swiper/css/pagination"; // Optional styles

import { Navigation, Pagination } from "swiper/modules"; // Import optional modules

const MySwiper = () => {
  return (
    <Swiper
      //   modules={[Navigation, Pagination]} // Add the modules you need
      //   navigation
      //   pagination={{ clickable: true }}
      //   spaceBetween={50}
      //   slidesPerView={1}
      // >
      loop={true}
      modules={[Pagination]}
      pagination={{
        clickable: true,
      }}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
};

export default MySwiper;
