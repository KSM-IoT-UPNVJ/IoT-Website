
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WhatIs from "./WhatIs";
import Slogan from "./Slogan";
import Goals from "./Goals";
import TeamGallery from "./TeamGallery";
import "../../index.css";
import { useEffect } from "react";
function AboutUs() {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "instant" });
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
