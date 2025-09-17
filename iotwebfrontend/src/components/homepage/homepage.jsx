import React, { useEffect } from 'react';
import Welcome from './welcome/welcome';
import VisiMisi from './visimisi';
import OurProgram from './ourprogram';
import OurAchievement from './achievement/ourachievement';
import MoreInsight from './insight';

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
