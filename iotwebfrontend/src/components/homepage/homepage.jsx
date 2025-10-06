import React, { useEffect } from 'react';
import Welcome from './welcome/welcome';
import VisiMisi from './visimisi';
import OurProgram from './ourprogram/ourprogram';
import OurAchievement from './achievement/ourachievement';
import MoreInsight from './Insight/Insight';

function Homepage() {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
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
