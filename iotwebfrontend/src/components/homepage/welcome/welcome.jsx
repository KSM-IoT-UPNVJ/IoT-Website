import FadeIn from '../../../utils/fadeIn';
import PhotoSlider from './photo_slider';
import 'swiper/css';

const Home = () => {
  const images = [
    'aboutUs/azam.webp',
    'aboutUs/bangDhoni.webp',
    'aboutUs/bangAzriel.webp',
    'aboutUs/bangMusfa.webp',
    'aboutUs/bangFaiq.webp',
    'aboutUs/bangRifqi.webp',
    'aboutUs/bangZahid.webp',
    
  ];
  return (
    <div>
      <PhotoSlider images={images} />
    </div>
  );
};

export default Home;
