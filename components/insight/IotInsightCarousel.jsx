import React, { useState, useEffect } from "react";
import { Mousewheel, Autoplay, Keyboard, EffectFlip } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/effect-flip";

export default function IotInsightCarousel({ children, reverse }) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const childCount = React.Children.count(children);
  const shouldAutoplay = childCount > 2; 

  useEffect(() => {
    const checkScreen = () => setIsSmallScreen(window.innerWidth < 1024); // 👈 Tailwind sm breakpoint
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <div className="iot-insight cursor-default select-none mx-4 h-full w-full">
      <Swiper
        key={isSmallScreen ? "flip" : "slide"}
        modules={[Mousewheel, Autoplay, Keyboard, EffectFlip]}
        {...(reverse && { initialSlide: React.Children.count(children) - 1 })}
        slidesPerView={1}
        threshold={5}
        spaceBetween={20}
        mousewheel={{ forceToAxis: true }}
        keyboard={{ enabled: false }}
        loop={true}
        autoplay={
          shouldAutoplay
            ? {
                delay: 3000,
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
                reverseDirection: reverse,
              }
            : false
        }
        onTouchStart={(swiper) => swiper.autoplay.stop()}
        onTouchEnd={(swiper) => swiper.autoplay.start()}
        effect={isSmallScreen ? "flip" : "slide"}
        flipEffect={{
          slideShadows: !isSmallScreen, 
        }}
        breakpoints={{
          1024: {
            slidesPerView: 2,
          },
          2048: {
            slidesPerView: 3,
          },
          3072: {
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
    </div>
  );
}
