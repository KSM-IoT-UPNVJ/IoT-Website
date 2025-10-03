import React, { useEffect } from "react";
import Welcome from "./welcome";
import VisiMisi from "./visimisi";
import OurProgram from "./OurProgram/ourprogram";
import OurAchievement from "./ourachievement";
import MoreInsight from "./insight";

function Homepage() {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "instant" });
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