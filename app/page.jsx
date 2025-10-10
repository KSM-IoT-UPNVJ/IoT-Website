'use client';

import React from 'react';
import Welcome from '@/components/homepage/welcome/Welcome';
import VisiMisi from '@/components/homepage/VisiMisi';
import OurProgram from '@/components/homepage/ourprogram/OurProgram';
import OurAchievement from '@/components/homepage/achievement/OurAchievement';
import MoreInsight from '@/components/homepage/Insight/Insight';
import Nav from '@/components/shared/Nav';
import Footer from '@/components/shared/Footer';

function Homepage() {
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
