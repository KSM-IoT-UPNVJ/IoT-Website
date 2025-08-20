import React, { useRef, useEffect } from "react";
import {
  Navigation,
  Mousewheel,
  Autoplay,
  Keyboard,
  Parallax,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

export default function OurProjectsCarousel({ children }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      const swiper = swiperRef.current.swiper;
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, []);

  return (
    <div className="our-projects relative w-full">
      <div className="m-10">
        <Swiper
          ref={swiperRef}
          className="our-projects-swiper"
          modules={[Navigation, Mousewheel, Autoplay, Keyboard, Parallax]}
          slidesPerView={3}
          threshold={5}
          spaceBetween={50}
          mousewheel={{ forceToAxis: true, releaseOnEdges: true }}
          keyboard={{ enabled: true }}
          parallax={true}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
        >
          {React.Children.map(children, (child, _) => (
            <SwiperSlide>{child}</SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-between mt-4">
          <div ref={prevRef} className="swiper-button-prev"></div>
          <div ref={nextRef} className="swiper-button-next"></div>
        </div>
      </div>
    </div>
  );
}
