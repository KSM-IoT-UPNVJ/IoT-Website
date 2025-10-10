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
      { src: '/aboutUs/bangRifqi.webp' },
      { src: '/aboutUs/bangDimas.webp' },
    ],
    className: '',
  },
  {
    type: 'medium',
    images: [
      { src: '/aboutUs/kakBella.webp' },
      { src: '/aboutUs/kakNaira.webp' },
    ],
    className: 'pt-10',
  },
  {
    type: 'short',
    images: [
      { src: '/aboutUs/bangFalis.webp' },
      { src: '/aboutUs/bangOctogius.webp' },
      { src: '/aboutUs/bangNaufal.webp' },
    ],
    className: '',
  },
  {
    type: 'tall',
    images: [
      { src: '/aboutUs/bangKumkum.webp' },
      { src: '/aboutUs/bangRifat.webp' },
    ],
    className: '',
  },
  {
    type: 'medium',
    images: [
      { src: '/aboutUs/bangZahid.webp' },
      { src: '/aboutUs/bangRakka.webp' },
    ],
    className: 'pt-10',
  },
  {
    type: 'short',
    images: [
      { src: '/aboutUs/bangReby.webp' },
      { src: '/aboutUs/bangMusfa.webp' },
      { src: '/aboutUs/bangFaiq.webp' },
    ],
    className: '',
  },
  {
    type: 'tall',
    images: [
      { src: '/aboutUs/bangLucky.webp' },
      { src: '/aboutUs/Shauqi.webp' },
    ],
    className: '',
  },
  {
    type: 'medium',
    images: [
      { src: '/aboutUs/bangRiza.webp' },
      { src: '/aboutUs/kakAmelia.webp' },
    ],
    className: 'pt-10',
  },
  {
    type: 'short',
    images: [
      { src: '/aboutUs/bangMauli.webp' },
      { src: '/aboutUs/bangRakka2.webp' },
      { src: '/aboutUs/azam.webp' },
    ],
    className: '',
  },
  {
    type: 'tall',
    images: [{ src: '/aboutUs/bangRafif.webp' }, { src: '/aboutUs/nada.webp' }],
    className: '',
  },
  {
    type: 'medium',
    images: [
      { src: '/aboutUs/ilham.webp' },
      { src: '/aboutUs/bangDhoni.webp' },
    ],
    className: 'pt-10',
  },
  {
    type: 'short',
    images: [
      { src: '/aboutUs/bangJohn.webp' },
      { src: '/aboutUs/bangMarsel.webp' },
      { src: '/aboutUs/bangIrfan.webp' },
    ],
    className: '',
  },
  {
    type: 'tall',
    images: [
      { src: '/aboutUs/bangNico.webp' },
      { src: '/aboutUs/bangGerard.webp' },
    ],
    className: '',
  },
  {
    type: 'medium',
    images: [
      { src: '/aboutUs/bangFairly.webp' },
      { src: '/aboutUs/bangAzriel.webp' },
    ],
    className: 'pt-10',
  },
  {
    type: 'short',
    images: [
      { src: '/aboutUs/bangFarhan.webp' },
      { src: '/aboutUs/nabhan.webp' },
      { src: '/aboutUs/bangSaddam.webp' },
    ],
    className: '',
  },
  {
    type: 'medium',
    images: [
      { src: '/aboutUs/bangImmanuel.webp' },
      { src: '/aboutUs/bangGoesny.webp' },
    ],
    className: 'pt-10',
  },
  {
    type: 'short',
    images: [
      { src: '/aboutUs/bangFaiz.webp' },
      { src: '/aboutUs/dhani.webp' },
      { src: '/aboutUs/khalif.webp' },
    ],
    className: '',
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
