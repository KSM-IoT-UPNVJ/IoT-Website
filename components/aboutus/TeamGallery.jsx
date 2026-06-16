'use client';

import Image from 'next/image';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import FadeIn from '../../utils/fadeIn';

const IMAGE_HEIGHTS = {
  tall: 280,
  medium: 240,
  short: 180,
};

const SIZE_CLASSES = {
  tall: 'w-full h-[280px]',
  medium: 'w-full h-[240px]',
  short: 'w-full h-[180px]',
};

const IMAGE_SIZES =
  '(min-width: 1024px) 16vw, (min-width: 768px) 33vw, 50vw';
const IMAGE_QUALITY = 70;

const SLIDE_BASE_STYLE = {
  width: '240px',
  marginRight: '0px',
  pointerEvents: 'none',
  transition: 'opacity 0.6s ease, transform 0.6s ease',
};

const SWIPER_BREAKPOINTS = {
  430: { slidesPerView: 2 },
  768: { slidesPerView: 3 },
  1024: { slidesPerView: 6 },
};

const AUTOPLAY_BASE = {
  delay: 4000,
  disableOnInteraction: true,
  waitForTransition: false,
};

const TEAM_COLUMNS = [
  {
    type: 'tall',
    images: [
      { src: '/aboutUs/Chairman.webp' },
      { src: '/aboutUs/Vice_Chairman.webp' },
    ],
    className: '',
  },
  {
    type: 'medium',
    images: [
      { src: '/aboutUs/Bendahara.webp' },
      { src: '/aboutUs/Sekretaris.webp' },
    ],
    className: 'pt-10',
  },
  {
    type: 'short',
    images: [
      { src: '/aboutUs/HRD.webp' },
      { src: '/aboutUs/Academic_Ketua.webp' },
      { src: '/aboutUs/Academic_Staff_2.webp' },
    ],
    className: '',
  },
  {
    type: 'tall',
    images: [
      { src: '/aboutUs/Academic_Staff_1.webp' },
      { src: '/aboutUs/Academic_Staff_3revisi.webp' },
    ],
    className: '',
  },
  {
    type: 'medium',
    images: [
      { src: '/aboutUs/Head_Medfo.webp' },
      { src: '/aboutUs/Anggota_Medfo.webp' },
    ],
    className: 'pt-10',
  },
  {
    type: 'short',
    images: [
      { src: '/aboutUs/Humas_Ketua.webp' },
      { src: '/aboutUs/Humas_Staff.webp' },
      { src: '/aboutUs/Humas.webp' },
    ],
    className: '',
  },
  {
    type: 'tall',
    images: [
      { src: '/aboutUs/Editor_Ketua.webp' },
      { src: '/aboutUs/Editor_Berkelas.webp' },
    ],
    className: '',
  },
  {
    type: 'medium',
    images: [
      { src: '/aboutUs/Editor_Staff_1.webp' },
      { src: '/aboutUs/Editor_Staff_2.webp' },
    ],
    className: 'pt-10',
  },
  {
    type: 'short',
    images: [
      { src: '/aboutUs/Head_Engineer.webp' },
      { src: '/aboutUs/Kadip.webp' },
      { src: '/aboutUs/Engineer.webp' },
    ],
    className: '',
  },
  {
    type: 'tall',
    images: [
      { src: '/aboutUs/Firmware_Ketua.webp' }, 
      { src: '/aboutUs/Firmware_Staff_1.webp' }
    ],
    className: '',
  },
  {
    type: 'medium',
    images: [
      { src: '/aboutUs/Firmware_Staff_2.webp' },
      { src: '/aboutUs/Firmware_Staff_3.webp' },
    ],
    className: 'pt-10',
  },
  {
    type: 'short',
    images: [
      { src: '/aboutUs/Hardware_Ketua.webp' },
      { src: '/aboutUs/Hardware_Staff_1.webp' },
      { src: '/aboutUs/Hardware_Staff_2.webp' },
    ],
    className: '',
  },
  {
    type: 'tall',
    images: [
      { src: '/aboutUs/Hardware_Staff_3.webp' },
      { src: '/aboutUs/Hardware_Staff_4.webp' },
    ],
    className: '',
  },
  {
    type: 'medium',
    images: [
      { src: '/aboutUs/Software_Ketua.webp' },
      { src: '/aboutUs/Software_Staff_1.webp' },
    ],
    className: 'pt-10',
  },
  {
    type: 'short',
    images: [
      { src: '/aboutUs/Software_Staff_2.webp' },
      { src: '/aboutUs/Software_Staff_3.webp' },
      { src: '/aboutUs/Software_Staff_4.webp' },
    ],
    className: '',
  },
  {
    type: 'tall',
    images: [
      { src: '/aboutUs/Electrical_Ketua.webp' },
      { src: '/aboutUs/Electrical_Staff_2.webp' },
    ],
    className: '',
  },
  {
    type: 'medium',
    images: [
      { src: '/aboutUs/Electrical_Staff_3.webp' },
      { src: '/aboutUs/Electrical_Staff_4.webp' },
    ],
    className: 'pt-10',
  },
  {
    type: 'short',
    images: [
      { src: '/aboutUs/Electrical_Staff_1.webp' },
      { src: '/aboutUs/UiUx_Ketua.webp' },
      { src: '/aboutUs/UiUx_Staff_1.webp' },
    ],
    className: '',
  },
  {
    type: 'tall',
    images: [
      { src: '/aboutUs/UiUx_Staff_2.webp' },
      { src: '/aboutUs/Network_Ketua.webp' },
    ],
    className: '',
  },
  {
    type: 'medium',
    images: [
      { src: '/aboutUs/Network_Staff_1.webp' },
      { src: '/aboutUs/Network_Staff_2.webp' },
    ],
    className: 'pt-10',
  },
];

export default function TeamGallery() {
  const swiperRef = useRef(null);
  const containerRef = useRef(null);
  const [direction, setDirection] = useState('right');
  const [visibleSlides, setVisibleSlides] = useState(() => new Set());
  const autoplayConfig = useMemo(
    () => ({
      ...AUTOPLAY_BASE,
      reverseDirection: direction === 'left',
    }),
    [direction]
  );

  useEffect(() => {
    if (!swiperRef.current) return;
    const swiper = swiperRef.current.swiper;

    const handleReachEnd = () => {
      setDirection('left');
      swiper.autoplay.start();
    };

    const handleReachBeginning = () => {
      setDirection('right');
      swiper.autoplay.start();
    };

    swiper.on('reachEnd', handleReachEnd);
    swiper.on('reachBeginning', handleReachBeginning);

    return () => {
      swiper.off('reachEnd', handleReachEnd);
      swiper.off('reachBeginning', handleReachBeginning);
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const slides = container.querySelectorAll('.swiper-slide');
    if (!slides.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setVisibleSlides((prev) => {
          let shouldUpdate = false;
          const next = new Set(prev);

          entries.forEach((entry) => {
            const indexAttr = entry.target.getAttribute('data-slide-index');
            const slideIndex = Number(indexAttr);
            if (Number.isNaN(slideIndex)) return;

            if (entry.isIntersecting) {
              if (!next.has(slideIndex)) {
                next.add(slideIndex);
                shouldUpdate = true;
              }
            } else if (next.has(slideIndex)) {
              next.delete(slideIndex);
              shouldUpdate = true;
            }
          });

          return shouldUpdate ? next : prev;
        });
      },
      {
        root: container,
        rootMargin: '50px',
        threshold: 0.25,
      }
    );

    slides.forEach((slide) => observer.observe(slide));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="elementor-widget-container">
      <FadeIn direction="down" delay={0.8}>
        <div className="w-full h-120px flex flex-col items-center justify-center px-3 py-3">
          <h1
            className="text-4xl md:text-5xl font-semibold text-[#2C3E50] mb-30 text-center select-none"
            style={{ fontFamily: "'OptimaNova'" }}
          >
            Our Team
          </h1>
        </div>
      </FadeIn>

      <FadeIn direction="up" delay={0.4}>
        <div
          className="swiper-container-wrap overflow-hidden"
          ref={containerRef}
        >
          <Swiper
            ref={swiperRef}
            modules={[Autoplay]}
            spaceBetween={22}
            slidesPerView={2}
            loop={false}
            autoplay={autoplayConfig}
            speed={9000}
            allowTouchMove={false}
            noSwiping={true}
            noSwipingClass="swiper-slide"
            breakpoints={SWIPER_BREAKPOINTS}
            className="pp-tm-wrapper pp-tm-carousel"
          >
            {TEAM_COLUMNS.map((column, index) => {
              const typeKey = SIZE_CLASSES[column.type] ? column.type : 'short';
              const isVisible = visibleSlides.has(index);
              const isInitial = visibleSlides.size === 0;
              const sizeClass = SIZE_CLASSES[typeKey];
              const imageHeight = IMAGE_HEIGHTS[typeKey];

              return (
                <SwiperSlide
                  key={index}
                  className="swiper-slide"
                  data-slide-index={index}
                  style={{
                    ...SLIDE_BASE_STYLE,
                    opacity: isInitial || isVisible ? 1 : 0,
                    transform:
                      isInitial || isVisible ? 'scale(1)' : 'scale(0.92)',
                  }}
                >
                  <div
                    className={`flex flex-col gap-5 select-none ${column.className}`}
                  >
                    {column.images.map((img, imgIndex) => (
                      <FadeIn
                        key={imgIndex}
                        direction="up"
                        delay={imgIndex * 0.1} // delay berurutan 0s, 0.6s, 1.2s, dst.
                      >
                        <Image
                          src={img.src}
                          alt={img.alt || `team-${index}-${imgIndex}`}
                          width={240}
                          height={imageHeight}
                          sizes={IMAGE_SIZES}
                          quality={IMAGE_QUALITY}
                          className={`rounded-lg object-cover ${sizeClass}`}
                        />
                      </FadeIn>
                    ))}
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </FadeIn>
    </div>
  );
}
