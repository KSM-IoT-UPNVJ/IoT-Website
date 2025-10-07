import React, { useEffect } from 'react';
import Welcome from './welcome/Welcome';
import VisiMisi from './VisiMisi';
import OurProgram from './ourprogram/OurProgram';
import OurAchievement from './achievement/OurAchievement';
import MoreInsight from './Insight/Insight';

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
