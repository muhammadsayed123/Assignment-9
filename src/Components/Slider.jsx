// import React from 'react';
import img_1 from "../Pic/Slider_1.webp";
import img_2 from "../Pic/Slider_2.webp";
import img_3 from "../Pic/Slider_3.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Slider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}

      className="h-[300px] md:h-[450px] w-full"
    >
      <SwiperSlide>
        <img src={img_1} alt="" style={{ width: "100%", height: "100%"  }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img_2} alt="" style={{ width: "100%", height: "100%" }} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img_3} alt="" style={{ width: "100%", height: "100%" }} />
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;
