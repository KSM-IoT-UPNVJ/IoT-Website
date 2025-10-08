import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WhatIs from "./WhatIs";
import Slogan from "./Slogan";
import Goals from "./Goals";
import TeamGallery from "./TeamGallery";
import "../../index.css";
import { useEffect } from "react";
import { useNavigationType } from "react-router-dom";

function AboutUs() {
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
      <WhatIs />
      <Slogan />
      <Goals />
      <TeamGallery />
    </>
  );
}

export default AboutUs;
