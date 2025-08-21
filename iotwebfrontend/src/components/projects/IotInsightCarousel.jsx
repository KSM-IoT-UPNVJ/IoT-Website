import React, { useEffect, useRef } from "react";
import { Pagination, Mousewheel, Autoplay, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

export default function IotInsightCarousel({ children }) {
  const containerRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            if (swiperRef.current) {
              swiperRef.current.autoplay.start();
            }
          }, 0);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="iot-insight cursor-default select-none mx-4"
    >
      <Swiper
        modules={[Pagination, Mousewheel, Autoplay, Keyboard]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          swiper.autoplay.stop();
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
        autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
        slideToClickedSlide={true}
      >
        {React.Children.map(children, (child) => (
          <SwiperSlide className="w-fit snap-center md:snap-start mx-7.5 md:m-0 md:px-18.5">
            {child}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-pagination" />
    </div>
  );
}
