import React from "react";
import { Pagination, Mousewheel, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

export default function IotInsightCarousel({ children }) {
  return (
    <div className="iot-insight cursor-default select-none mx-4">
        <Swiper
          modules={[Pagination, Mousewheel, Autoplay]}
          slidesPerView={3}
          threshold={5}
          spaceBetween={-7}
          centeredSlides={true}
          mousewheel={{ forceToAxis: true, releaseOnEdges: true }}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
            dynamicBullets: true, dynamicMainBullets: 3
          }}
          loop={true}
          autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
          slideToClickedSlide={true}
        >
          {React.Children.map(children, (child) => {
            return (
              <SwiperSlide
                className={`w-fit snap-center md:snap-start mx-7.5 md:m-0 md:px-18.5`}
              >
                {child}
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="custom-pagination" />
    </div>
  );
}
