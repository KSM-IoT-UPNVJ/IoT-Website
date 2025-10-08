import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import WhatIs from '../../components/aboutus/WhatIs';
import Slogan from '../../components/aboutus/Slogan';
import Goals from '../../components/aboutus/Goals';
import TeamGallery from '../../components/aboutus/TeamGallery';
import Nav from '@/components/shared/Nav';
import Footer from '@/components/shared/Footer';

import '../globals.css';
function AboutUs() {
  return (
    <>
      <Nav />
      <WhatIs />
      <Slogan />
      <Goals />
      <TeamGallery />
      <Footer />
    </>
  );
}

export default AboutUs;
