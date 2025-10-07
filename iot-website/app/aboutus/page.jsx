import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WhatIs from "../../../iotwebfrontend/src/components/AboutUs/WhatIs";
import Slogan from "../../../iotwebfrontend/src/components/AboutUs/Slogan";
import Goals from "../../../iotwebfrontend/src/components/AboutUs/Goals";
import TeamGallery from "../../../iotwebfrontend/src/components/AboutUs/TeamGallery";
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
