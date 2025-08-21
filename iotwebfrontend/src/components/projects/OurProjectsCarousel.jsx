import React, { useRef, useState, useEffect } from "react";
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

  const [atBeginning, setAtBeginning] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;

      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, [swiperRef, prevRef, nextRef]);

  const scaleSlides = (swiper) => {
    swiper.slides.forEach((slide, index) => {
      const activeIndex = swiper.activeIndex;
      if (index >= activeIndex && index <= activeIndex + 2) {
        slide.style.transform = "scale(1)";
        slide.style.opacity = "1";
      } else {
        slide.style.transform = "scale(0)";
        slide.style.opacity = "0";
      }
    });
  };

  return (
    <div className="our-projects relative w-full">
      <div className="m-10">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            scaleSlides(swiper);
          }}
          onSlideChange={(swiper) => scaleSlides(swiper)}
          className="our-projects-swiper"
          modules={[Navigation, Mousewheel, Autoplay, Keyboard, Parallax]}
          slidesPerView={3}
          threshold={5}
          spaceBetween={50}
          mousewheel={{ forceToAxis: true, releaseOnEdges: false }}
          keyboard={{ enabled: true }}
          parallax={true}
          onReachBeginning={() => setAtBeginning(true)}
          onReachEnd={() => setAtEnd(true)}
          onFromEdge={() => {
            setAtBeginning(false);
            setAtEnd(false);
          }}
        >
          {React.Children.map(children, (child, _) => (
            <div>
              <SwiperSlide>{child}</SwiperSlide>
            </div>
          ))}
        </Swiper>

        <div className="flex justify-between mt-4">
          <div
            ref={prevRef}
            className={`swiper-button-prev transition-opacity hover:opacity-100 hover:scale-120 ${
              atBeginning ? "!opacity-0 pointer-events-none" : "opacity-70"
            }`}
          ></div>
          <div
            ref={nextRef}
            className={`swiper-button-next transition-opacity hover:opacity-100 hover:scale-120 ${
              atEnd ? "!opacity-0 pointer-events-none" : "opacity-70"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
}
