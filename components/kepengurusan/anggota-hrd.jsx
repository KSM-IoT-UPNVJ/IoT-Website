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
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import './kepengurusan.css';

const baseImages = [
  {
    src: '/kepengurusan/hrd.webp',
    href: 'https://www.instagram.com/p/DMNEqw_Rkwu/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  },
  {
    src: '/kepengurusan/akademik.webp',
    href: 'https://www.instagram.com/p/DMNEOzGxpno/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  },
];

const ImageSliderHRD = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [swiperReady, setSwiperReady] = useState(false); // add trigger

  useEffect(() => {
    const checkScreen = () => setIsSmallScreen(window.innerWidth < 1024);
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  // choose images depending on screen size
  const images = isSmallScreen
    ? baseImages
    : [...baseImages, ...baseImages, ...baseImages];

  useEffect(() => {
    // Ensure refs are available before rendering Swiper
    setSwiperReady(true);
  }, []);

  useEffect(() => {
    // Paksa update swiper ketika semua gambar sudah dimuat
    if (imagesLoaded === images.length && swiperRef.current) {
      swiperRef.current.update();
    }
  }, [imagesLoaded]);

  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;

      swiperRef.current.navigation.update();
    }
  }, [swiperReady]);

  return (
    <div className="w-full flex relative h-auto justify-center items-center">
      <div className="w-full h-auto">
        {swiperReady && (
          <Swiper
            modules={
              isSmallScreen
                ? [EffectCards, Navigation, Pagination, Mousewheel]
                : [EffectCoverflow, Navigation, Mousewheel]
            }
            mousewheel={{ forceToAxis: true }}
            spaceBetween={0}
            slidesPerView={isSmallScreen ? 1.9 : 3}
            speed={800}
            loop={isSmallScreen ? false : true}
            watchSlidesProgress={true}
            centeredSlides={true}
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
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            pagination={{ clickable: true }}
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
            className=""
          >
            {images.map((img, idx) => (
              <SwiperSlide key={idx}>
                <div className="h-auto max-h-[515px] w-auto max-w-[412px] my-[50px] mx-[5px] rounded-[15px] overflow-hidden shadow-lg hover:scale-[1.05]  duration-[0.2s]">
                  <a href={img.href} target="_blank" rel="noopener noreferrer">
                    <img
                      src={img.src}
                      alt={`slide-${idx}`}
                      className="w-full h-full object-fill"
                      onLoad={() => setImagesLoaded((prev) => prev + 1)}
                    />
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>

      <div className="absolute h-[30%] px-[30px] top-1/2 left-0 right-0 flex justify-between items-center transform -translate-y-1/2 z-50 pointer-events-none ">
        <div className="relative flex items-center justify-end h-full w-[200px] pointer-events-auto z-0 duration-[1s] translate-x-[-160px] group">
          <ChevronLeft
            size={128}
            className="chevron-left top-1/2 -translate-y-1/2 absolute translate-x-[45px] w-auto h-auto scale-[0.5] sm:scale-[0.8] md:scale-[1]"
          />
          <button
            ref={prevRef}
            className="chevron-left hover:cursor-pointer translate-x-[5px] scale-[0.6] sm:scale-[1] h-[80px] w-[50px] z-60 pointer-events-auto"
          ></button>
        </div>
        <div className="relative flex items-center  h-full w-[200px] pointer-events-auto z-0 duration-[1s] translate-x-[160px] group">
          <ChevronRight
            size={128}
            className="chevron-right top-1/2 -translate-y-1/2 absolute translate-x-[-45px] w-auto h-auto scale-[0.5] sm:scale-[0.8] md:scale-[1]"
          />
          <button
            ref={nextRef}
            className="chevron-right hover:cursor-pointer translate-x-[-5px] scale-[0.6] sm:scale-[1] h-[80px] w-[50px] z-60 pointer-events-auto"
          ></button>
        </div>
      </div>
    </div>
  );
};

export default ImageSliderHRD;
