import React, { useRef } from "react";
import { Pagination, Mousewheel, Autoplay, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

export default function IotInsightCarousel({ children }) {
  const swiperRef = useRef(null);

  return (
    <div
      className="iot-insight cursor-default select-none mx-4"
    >
      <Swiper
        modules={[Pagination, Mousewheel, Autoplay, Keyboard]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          swiper.autoplay.stop();

          const observer = new IntersectionObserver(
            ([entry]) => {
              if (entry.isIntersecting) {
                swiper.autoplay.start();
                observer.disconnect(); // stop observing once started
              }
            },
            { threshold: 0.2 },
          );

          if (swiper.el) {
            observer.observe(swiper.el);
          }
        }}
        slidesPerView={3}
        threshold={5}
        spaceBetween={-120}
        centeredSlides={true}
        mousewheel={{ forceToAxis: true, releaseOnEdges: true }}
        keyboard={{ enabled: true }}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: 1,
        }}
        loop={true}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          // when window width is >= 1024px (desktop)
          1200: {
            slidesPerView: 3,
            spaceBetween: -60,
            centeredSlides: true,
          },
          // when window width is >= 768px (tablet)
          768: {
            slidesPerView: 2,
            spaceBetween: -60,
            centeredSlides: true,
          },
          // when window width is < 768px (mobile)
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: false,
          },
        }}
      >
        {React.Children.map(children, (child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-pagination" />
    </div>
  );
}
