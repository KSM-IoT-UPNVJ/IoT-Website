import { animate } from 'framer-motion';
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
    <div className="flex flex-col w-full">
      <PhotoSlider images={imagesRow1} direction="animate-scroll-right" />
      <PhotoSlider images={imagesRow2} direction="animate-scroll-left" />
      <PhotoSlider images={imagesRow3} direction="animate-scroll-right" />
      <PhotoSlider images={imagesRow4} direction="animate-scroll-left" />
    </div>
  );
};

export default Home;
