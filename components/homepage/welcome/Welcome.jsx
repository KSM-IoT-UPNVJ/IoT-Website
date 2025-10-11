'use client';

import FadeIn from '../../../utils/fadeIn';
import PhotoSlider from './photo_slider';
import 'swiper/css';

const SLIDER_CONFIG = [
  {
    images: [
      '/homepage/foto1.webp',
      '/homepage/foto2.webp',
      '/homepage/foto3.webp',
      '/homepage/foto4.webp',
      '/homepage/foto5.webp',
    ],
    direction: 'animate-scroll-right',
  },
  {
    images: [
      '/homepage/foto8.webp',
      '/homepage/foto9.webp',
      '/homepage/foto10.webp',
      '/homepage/foto11.webp',
      '/homepage/foto12.webp',
    ],
    direction: 'animate-scroll-left',
  },
  {
    images: [
      '/homepage/foto15.webp',
      '/homepage/foto16.webp',
      '/homepage/foto17.webp',
      '/homepage/foto18.webp',
      '/homepage/foto19.webp',
    ],
    direction: 'animate-scroll-right',
  },
  {
    images: [
      '/homepage/foto22.webp',
      '/homepage/foto23.webp',
      '/homepage/foto21.webp',
      '/homepage/foto14.webp',
      '/homepage/foto20.webp',
    ],
    direction: 'animate-scroll-left',
  },
];

const Home = () => {
  return (
    <div className="relative overflow-x-hidden bg-white -z-10">
      <div className="min-h-screen flex flex-col text-optima -z-10">
        <div className="relative w-full min-h-screen py-8 md:py-12 -z-10 flex flex-col justify-center">
          {SLIDER_CONFIG.map(({ images, direction }, index) => (
            <PhotoSlider
              key={`${direction}-${index}`}
              images={images}
              direction={direction}
            />
          ))}
          <div className="absolute inset-0 bg-white/80 pointer-events-none" />
          {/* Konten teks */}
          <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 md:px-12 z-20 text-slate-900 max-w-3xl md:max-w-2xl gap-2">
            <FadeIn direction="up" delay={0.2}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-light font-optima">
                Welcome To
              </h1>
            </FadeIn>
            <FadeIn direction="up" delay={0.4}>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mt-4 font-optima text-slate-900">
                KSM Internet Of Things
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.6}>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mt-4 font-optima">
                UPNVJ
              </h3>
            </FadeIn>
            <FadeIn direction="left" delay={1.0}>
              <p className="mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-left sm:text-justify font-optima text-slate-700">
                KSM Internet of Things (IoT) UPN Veteran Jakarta adalah wadah
                bagi mahasiswa Fakultas Teknik yang berfokus mengembangkan
                teknologi IoT melalui riset, implementasi, dan kompetisi
                nasional maupun internasional. Bergabunglah untuk mengasah
                kemampuan dan siap menghadapi revolusi industri 4.0 dengan
                semangat
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={0.9}>
              <p className="mt-1 text-lg sm:text-xl font-bold font-optima text-slate-800">
                "Innovating Today, Champion Tomorrow"!
              </p>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
