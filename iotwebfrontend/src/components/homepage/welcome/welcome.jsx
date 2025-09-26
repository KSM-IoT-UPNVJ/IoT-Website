import FadeIn from '../../../utils/fadeIn';
import PhotoSlider from './photo_slider';
import 'swiper/css';

const Home = () => {
  const imagesRow1 = [
    'homepage/foto1.webp',
    'homepage/foto2.webp',
    'homepage/foto3.webp',
    'homepage/foto4.webp',
    'homepage/foto5.webp',
  ];
  const imagesRow2 = [
    'homepage/foto8.webp',
    'homepage/foto9.webp',
    'homepage/foto10.webp',
    'homepage/foto11.webp',
    'homepage/foto12.webp',
  ];
  const imagesRow3 = [
    'homepage/foto15.webp',
    'homepage/foto16.webp',
    'homepage/foto17.webp',
    'homepage/foto18.webp',
    'homepage/foto19.webp',
  ];
  const imagesRow4 = [
    'homepage/foto22.webp',
    'homepage/foto23.webp',
    'homepage/foto21.webp',
    'homepage/foto14.webp',
    'homepage/foto20.webp',
  ];

  return (
    <div className="relative overflow-x-hidden">
      <div className="max-h-screen flex flex-col text-optima">
        <div className="relative w-full py-1.5 h-[75vh] sm:h-[80vh] md:h-[90vh] -z-10">
          <PhotoSlider images={imagesRow1} direction="animate-scroll-right" />
          <PhotoSlider images={imagesRow2} direction="animate-scroll-left" />
          <PhotoSlider images={imagesRow3} direction="animate-scroll-right" />
          <PhotoSlider images={imagesRow4} direction="animate-scroll-left" />
          <div className="absolute inset-0 bg-black/60" />
          {/* Konten teks */}
          <div className="absolute inset-x-0 top-24 sm:top-28 md:top-1/4 px-4 sm:px-6 md:px-12 z-20 text-white max-w-3xl md:max-w-2xl">
            <FadeIn direction="up" delay={0.2}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-light font-optima">
                Welcome To
              </h1>
            </FadeIn>
            <FadeIn direction="up" delay={0.4}>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mt-4 font-optima">
                KSM Internet Of Things
              </h2>
            </FadeIn>
            <FadeIn direction="up" delay={0.6}>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 font-optima">
                UPNVJ
              </h3>
            </FadeIn>
            <FadeIn direction="left" delay={1.0}>
              <p className="mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-left sm:text-justify font-optima">
                KSM Internet of Things (IoT) UPN Veteran Jakarta adalah wadah
                bagi mahasiswa Fakultas Teknik yang berfokus mengembangkan
                teknologi IoT melalui riset, implementasi, dan kompetisi
                nasional maupun internasional. Bergabunglah untuk mengasah
                kemampuan dan siap menghadapi revolusi industri 4.0 dengan
                semangat
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={0.9}>
              <p className="mt-1 text-lg sm:text-xl font-bold font-optima">
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
