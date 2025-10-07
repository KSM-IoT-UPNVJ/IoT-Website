'use client';

import React, { useEffect } from 'react';
import Welcome from '../components/homepage/welcome/Welcome';
import VisiMisi from '../components/homepage/VisiMisi';
import OurProgram from '../components/homepage/ourprogram/OurProgram';
import OurAchievement from '../components/homepage/achievement/OurAchievement';
import MoreInsight from '../components/homepage/Insight/Insight';

function Homepage() {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 300);
  }, []);

  return (
    <>
      <Welcome />
      <VisiMisi />
      <OurProgram />
      <OurAchievement />
      <MoreInsight />
    </>
  );
}

export default Homepage;
