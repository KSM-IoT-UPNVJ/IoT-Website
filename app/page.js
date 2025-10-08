'use client';

import React, { useEffect } from 'react';
import Welcome from '../components/homepage/welcome/Welcome';
import VisiMisi from '../components/homepage/VisiMisi';
import OurProgram from '../components/homepage/ourprogram/OurProgram';
import OurAchievement from '../components/homepage/achievement/OurAchievement';
import MoreInsight from '../components/homepage/Insight/Insight';
import Nav from '@/components/shared/Nav';
import Footer from '@/components/shared/Footer';

function Homepage() {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 300);
  }, []);

  return (
    <>
      <Nav />
      <Welcome />
      <VisiMisi />
      <OurProgram />
      <OurAchievement />
      <MoreInsight />
      <Footer />
    </>
  );
}

export default Homepage;
