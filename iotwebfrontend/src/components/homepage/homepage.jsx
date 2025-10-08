import React, { useEffect } from "react";
import { useNavigationType } from "react-router-dom";
import Welcome from "./welcome/welcome";
import VisiMisi from "./visimisi";
import OurProgram from "./ourprogram/ourprogram";
import OurAchievement from "./achievement/ourachievement";
import MoreInsight from "./Insight/Insight";

function Homepage() {
  const navigationType = useNavigationType();
  
  useEffect(() => {
    if (navigationType !== "POP") {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    }
  }, [navigationType]);

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
