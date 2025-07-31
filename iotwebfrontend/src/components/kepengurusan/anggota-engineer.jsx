import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import './kepengurusan.css';

const images = [
 {
    src: 'src/public/engineer.webp',
    href: 'https://www.instagram.com/p/DMNDqnqR9Ca/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  },
  {
    src: 'src/public/Firmware.webp',
    href: 'https://www.instagram.com/p/DMNDGnBx7J8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  },
  {
    src: 'src/public/hardware.webp',
    href: 'https://www.instagram.com/p/DMND9y7xSG8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  },
  {
    src: 'src/public/network.webp',
    href: 'https://www.instagram.com/p/DMNCVUMRsUZ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  },
  {
    src: 'src/public/Software.webp',
    href: 'https://www.instagram.com/p/DMNDV7ZRhBy/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  },
  {
    src: 'src/public/UX.webp',
    href: 'https://www.instagram.com/p/DMNCzpNxAZn/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  },
];


const ImageSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);

  const [swiperReady, setSwiperReady] = useState(false); // add trigger

  useEffect(() => {
    // Ensure refs are available before rendering Swiper
    setSwiperReady(true);
  }, []);

  return (
    <div className="w-full flex justify-center items-center overflow-hidden relative h-[655px]">
      <div className='w-[95%] '>
        {swiperReady && (
          <Swiper
            modules={[EffectCoverflow, Pagination, Navigation]}
            spaceBetween={20}
            slidesPerView={3}
            initialSlide={0}
            speed={800}
            loop={true}
            centeredSlides={true}
            effect="coverflow"
            coverflowEffect={{
            rotate: 67.5,
            stretch: -20,
            depth: 100,
            modifier: 1,
            slideShadows: false
            }}
            pagination={{
              clickable: true}}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current
            }}
            onBeforeInit={(swiper) => {
              // Fix for Swiper 8+ requiring refs to be set early
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;

            }}
            breakpoints={{
              768: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3 },
            }}
            className="!overflow-visible pb-10"
          >
            {images.map((img, idx) => (
              <SwiperSlide key={idx}>
                <div className="w-[472px] h-[515px] bg-biru-muda rounded-[15px] overflow-hidden shadow-lg hover:scale-[1.05]  duration-[0.2s]">
                  <a href={img.href} target="_blank" rel="noopener noreferrer">
                    <img src={img.src} alt={`slide-${idx}`} className="w-full h-full object-fill" />
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
      

      <div className="absolute h-[50%] px-[30px] top-1/2 left-0 right-0 flex justify-between items-center transform -translate-y-1/2 z-50 pointer-events-none">
        <div className='relative flex items-center justify-end h-full w-[200px] pointer-events-auto z-0 duration-[1s] translate-x-[-160px] group'>
          <img src="src/public/Chevron/chevron-left.webp" alt='kiri' className="top-1/2 -translate-y-1/2 absolute translate-x-[-50px] w-auto h-auto group-hover:translate-x-[40px] duration-[1s]"></img>
          <button ref={prevRef} className=" hover:cursor-pointer pointer-events-auto h-[80px] w-[50px] z-60"> 
          </button>
        </div>
        <div className='relative flex items-center  h-full w-[200px] pointer-events-auto z-0 duration-[1s] translate-x-[160px] group'>
          <img src="src/public/Chevron/chevron-right.webp" alt='kanan' className="top-1/2 -translate-y-1/2 absolute translate-x-[50px] w-auto h-auto group-hover:translate-x-[-40px] duration-[1s]"></img>
          <button ref={nextRef} className="hover:cursor-pointer h-[80px] w-[50px] z-60 pointer-events-auto">
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
