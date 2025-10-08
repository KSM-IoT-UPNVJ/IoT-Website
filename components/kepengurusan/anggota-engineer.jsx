'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  EffectCoverflow,
  EffectCards,
  Navigation,
  Pagination,
  Mousewheel,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-cards';
import './kepengurusan.css';

const images = [
  {
    src: '/kepengurusan/engineer.webp',
    href: 'https://www.instagram.com/p/DMNDqnqR9Ca/',
  },
  {
    src: '/kepengurusan/Firmware.webp',
    href: 'https://www.instagram.com/p/DMNDGnBx7J8/',
  },
  {
    src: '/kepengurusan/hardware.webp',
    href: 'https://www.instagram.com/p/DMND9y7xSG8/',
  },
  {
    src: '/kepengurusan/network.webp',
    href: 'https://www.instagram.com/p/DMNCVUMRsUZ/',
  },
  {
    src: '/kepengurusan/Software.webp',
    href: 'https://www.instagram.com/p/DMNDV7ZRhBy/',
  },
  {
    src: '/kepengurusan/UX.webp',
    href: 'https://www.instagram.com/p/DMNCzpNxAZn/',
  },
];

const ImageSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsSmallScreen(window.innerWidth < 1024);
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  return (
    <div className="w-full flex relative h-auto justify-center items-center">
      <div className="w-full h-auto">
        <Swiper
          modules={[
            Navigation,
            Pagination,
            Mousewheel,
            isSmallScreen ? EffectCards : EffectCoverflow,
          ]}
          spaceBetween={0}
          slidesPerView={isSmallScreen ? 1.9 : 3}
          mousewheel={{ forceToAxis: true }}
          initialSlide={0}
          speed={800}
          loop={!isSmallScreen}
          centeredSlides={true}
          watchSlidesProgress
          effect={isSmallScreen ? 'cards' : 'coverflow'}
          coverflowEffect={
            !isSmallScreen
              ? {
                  rotate: 60,
                  stretch: -10,
                  depth: 100,
                  modifier: 1,
                  slideShadows: false,
                }
              : undefined
          }
          cardsEffect={isSmallScreen ? { slideShadows: false } : undefined}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          breakpoints={{
            1024: {
              spaceBetween: 55,
              coverflowEffect: {
                stretch: -5,
                rotate: 60,
              },
            },
            1280: {
              spaceBetween: 110,
              coverflowEffect: {
                stretch: 0,
                rotate: 55,
              },
            },
          }}
        >
          {images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <div className="h-auto max-h-[515px] w-auto max-w-[412px] my-[50px] mx-[5px] rounded-[15px] overflow-hidden shadow-lg hover:scale-[1.05] duration-200">
                <a href={img.href} target="_blank" rel="noopener noreferrer">
                  <img
                    src={img.src}
                    alt={`slide-${idx}`}
                    className="w-full h-full object-fill"
                  />
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom Prev/Next */}
      <div className="absolute h-[30%] px-[30px] top-1/2 left-0 right-0 flex justify-between items-center transform -translate-y-1/2 z-50 pointer-events-none">
        <div className="relative flex items-center justify-end h-full w-[200px] pointer-events-auto translate-x-[-160px]">
          <ChevronLeft
            size={128}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-auto h-auto scale-[0.6] sm:scale-[0.8] md:scale-[1]"
          />
          <button
            ref={prevRef}
            className="h-[80px] w-[50px] z-60 pointer-events-auto"
          />
        </div>
        <div className="relative flex items-center h-full w-[200px] pointer-events-auto translate-x-[160px]">
          <ChevronRight
            size={128}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-auto h-auto scale-[0.6] sm:scale-[0.8] md:scale-[1]"
          />
          <button
            ref={nextRef}
            className="h-[80px] w-[50px] z-60 pointer-events-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
