'use client';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import WhatIs from '../../components/AboutUs/WhatIs';
import Slogan from '../../components/AboutUs/Slogan';
import Goals from '../../components/aboutus/Goals';
import TeamGallery from '../../components/AboutUs/TeamGallery';
import '../globals.css';
import { useEffect } from 'react';
function AboutUs() {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 300);
  }, []);

  return (
    <>
      <WhatIs />
      <Slogan />
      <Goals />
      <TeamGallery />
    </>
  );
}

export default AboutUs;
