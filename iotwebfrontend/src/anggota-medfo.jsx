import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import './kepengurusan.css';


const images = [
 {
    src: 'src/public/medfo.webp',
    href: 'https://www.instagram.com/p/DMNAZGpxtCN/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  },
  {
    src: 'src/public/humas.webp',
    href: 'https://www.instagram.com/p/DMM_1IpxBPU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  },
  {
    src: 'src/public/Medkraf.webp',
    href: 'https://www.instagram.com/p/DMNB-72R3MD/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  },
  {
    src: 'src/public/medfo.webp',
    href: 'https://www.instagram.com/p/DMNAZGpxtCN/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  },
  {
    src: 'src/public/humas.webp',
    href: 'https://www.instagram.com/p/DMM_1IpxBPU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  },
  {
    src: 'src/public/Medkraf.webp',
    href: 'https://www.instagram.com/p/DMNB-72R3MD/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  },
];


const ImageSliderMedfo = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
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
            modules={[EffectCoverflow, Navigation]}
            spaceBetween={20}
            slidesPerView={3}
            speed={800}
            loop={true}
            loopedSlides={images.length}
            watchSlidesProgress={true}
            watchSlidesVisibility={true}
            centeredSlides={true}
            effect="coverflow"
            coverflowEffect={{
            rotate: 67.5,
            stretch: -20,
            depth: 100,
            modifier: 1,
            slideShadows: false
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current
            }}
           onSwiper={(swiper) => {
              swiperRef.current = swiper;
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
      

      <div className="absolute px-[30px] top-1/2 left-0 right-0 flex justify-between items-center transform -translate-y-1/2 z-50 pointer-events-none">
        <button ref={prevRef} className="relative hover:cursor-pointer h-[80px] w-[50px] pointer-events-auto"> 
        </button>
        <img src="src/public/Chevron/chevron-left.webp" alt='kiri' className="absolute left-5"></img>
        <img src="src/public/Chevron/chevron-right.webp" alt='kanan' className="absolute right-5"></img>
        <button ref={nextRef} className="relative hover:cursor-pointer h-[80px] w-[50px] pointer-events-auto">
        </button>
      </div>
    </div>
  );
};

export default ImageSliderMedfo;
