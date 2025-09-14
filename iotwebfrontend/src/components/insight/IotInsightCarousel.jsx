import React, { useRef } from "react";
import {
  Pagination,
  Mousewheel,
  Autoplay,
  Keyboard,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

export default function IotInsightCarousel({ children, reverse }) {
  // const swiperRef = useRef(null);
 
  return (
    <div className="iot-insight cursor-default select-none mx-4 h-full w-full">
      <Swiper
        modules={[Pagination, Mousewheel, Autoplay, Keyboard]}
        {...(reverse && { initialSlide: React.Children.count(children) - 1 })}
        // onSwiper={(swiper) => {
        //   swiperRef.current = swiper;
        //   if (swiper.autoplay) swiper.autoplay.stop();

        //   const observer = new IntersectionObserver(
        //     ([entry]) => {
        //       if (entry.isIntersecting) {
        //         if (swiper.autoplay) {
        //           requestAnimationFrame(() => swiper.autoplay.start());
        //         }
        //         observer.disconnect(); // stop observing once started
        //       }
        //     },
        //     { threshold: 0.2 }
        //   );

        //   if (swiper.el) {
        //     observer.observe(swiper.el);
        //   }
        // }}
        slidesPerView={1}
        threshold={5}
        spaceBetween={20}
        mousewheel={{ forceToAxis: true }}
        keyboard={{ enabled: true }}
        // pagination={{
        //   el: "custom-pagination",
        //   clickable: true,
        //   dynamicBullets: true,
        //   dynamicMainBullets: 2,
        // }}
        loop={true}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
          reverseDirection: reverse,
        }}
        breakpoints = {{
          1024 : {
            slidesPerView: 2,
          },
          2048 : {
            slidesPerView: 3,
          },
          3072 : {
            slidesPerView: 5,
          },
        }}
      >
        {!reverse
          ? React.Children.map(children, (child, index) => (
              <SwiperSlide key={index}>{child}</SwiperSlide>
            ))
          : React.Children.toArray(children)
              .reverse()
              .map((child, index) => (
                <SwiperSlide key={index}>{child}</SwiperSlide>
              ))}
      </Swiper>
      {/* <div className="custom-pagination" /> */}
    </div>
  );
}
