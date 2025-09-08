import React from 'react';
import VisiMisi from './visimisi.jsx';
import OurProgram from './ourprogram.jsx';
import OurAchievement from './ourachievement.jsx';
import MoreInsight from './insight.jsx';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const Home = () => {
  // Data untuk setiap baris
  const row1 = ['public/foto_IoT1.webp', 'public/foto_IoT1.webp'];
  const row2 = ['public/foto_IoT2.webp', 'public/foto_IoT2.webp'];
  const row3 = ['public/foto_IoT3.webp', 'public/foto_IoT3.webp'];
  const row4 = ['public/foto_IoT4.webp', 'public/foto_IoT4.webp'];

  // Komponen helper untuk bikin 1 baris slider
  const SliderRow = ({ images, reverse }) => (
    <Swiper
      modules={[Autoplay]}
      slidesPerView="auto"
      spaceBetween={0}
      loop={true}
      allowTouchMove={false}
      speed={20000}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: reverse,
      }}
      className="flex"
    >
      {images.map((src, idx) => (
        <SwiperSlide
          key={idx}
          style={{ width: 'auto' }}
          className="flex-shrink-0"
        >
          <img
            src={src}
            alt={`row-img-${idx}`}
            className="h-[22.5vh] object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );

  return (
    <div className="relative overflow-x-hidden">
      <div className="min-h-screen flex flex-col text-optima">
        {/* Background dengan 4 baris */}
        <div className="relative h-[90vh] overflow-hidden flex flex-col">
          {/* Row 1 → kanan */}
          <SliderRow images={row1} reverse={false} />

          {/* Row 2 → kiri */}
          <SliderRow images={row2} reverse={true} />

          {/* Row 3 → kanan */}
          <SliderRow images={row3} reverse={false} />

          {/* Row 4 → kiri */}
          <SliderRow images={row4} reverse={true} />

          {/* Overlay hitam */}
          <div className="absolute inset-0 bg-black opacity-60 z-10" />
          {/* Konten teks */}
          <div className="absolute top-1/4 left-12 z-20 text-white max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-light font-optima">
              Welcome To
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 font-optima">
              KSM Internet Of Things
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mt-4">
              UPNVJ
            </h3>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-justify font-optima">
              KSM Internet of Things (IoT) UPN Veteran Jakarta adalah wadah bagi
              mahasiswa Fakultas Teknik yang berfokus mengembangkan teknologi
              IoT melalui riset, implementasi, dan kompetisi nasional maupun
              internasional. Bergabunglah untuk mengasah kemampuan dan siap
              menghadapi revolusi industri 4.0 dengan semangat
            </p>
            <p className="mt-1 text-xl font-bold font-optima">
              "Innovating Today, Champion Tomorrow"!
            </p>
          </div>
        </div>

        {/* Komponen lainnya */}
        <VisiMisi />
        <OurProgram />
        <OurAchievement />
        <MoreInsight />
      </div>
    </div>
  );
};

export default Home;
