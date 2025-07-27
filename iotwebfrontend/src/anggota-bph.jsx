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
    src: 'src/public/chairman.webp',
    href: 'https://www.instagram.com/p/DMNGCGvx6oq/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  },
  {
    src: 'src/public/academic advisor.webp',
    href: 'https://www.instagram.com/p/DMNFxi8RXV2/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  },
  {
    src: 'src/public/vice chairman.webp',
    href: 'https://www.instagram.com/p/DMNFizGxH8n/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  },
  {
    src: 'src/public/sekbend.webp',
    href: 'https://www.instagram.com/p/DMNFS6TRCaG/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  },
];


const ImageSliderBPH = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);
  const swiperRef = useRef(null);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  const [swiperReady, setSwiperReady] = useState(false); // add trigger

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

  return (
    <div className="w-full flex justify-center items-center overflow-hidden relative h-[655px]">
      <div className='w-[95%] '>
        {swiperReady && (
          <Swiper
            modules={[EffectCoverflow, Pagination, Navigation]}
            spaceBetween={20}
            slidesPerView={3}
            initialSlide={0}
            speed={1250}
            loop={false}
            observer={true}
            observeParents={true}
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
                <div className="w-[472px] h-[515px] bg-biru-muda rounded-[15px] overflow-hidden shadow-lg">
                  <a href={img.href} target="_blank" rel="noopener noreferrer">
                    <img src={img.src} alt={`slide-${idx}`} className="w-full h-full object-fill" onLoad={() => setImagesLoaded(prev => prev + 1)} />
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
      

      <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center px-[20px] transform -translate-y-1/2 z-0">
        <button ref={prevRef} className=" hover:cursor-pointer"> 
        <img src="src/public/Chevron/chevron-left.webp" alt='kiri'></img>
        </button>
        <button ref={nextRef} className=" hover:cursor-pointer ">
        <img src="src/public/Chevron/chevron-right.webp" alt='kanan'></img>
        </button>
      </div>
    </div>
  );
};

export default ImageSliderBPH;
