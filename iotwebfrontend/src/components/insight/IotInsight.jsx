import FadeIn from "/src/utils/fadeIn";
import IotInsightSection from "./IotInsightSection";

import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function Insight() {
  const { division } = useParams();

  useEffect(() => {
    if (division) {
      const el = document.getElementById(division);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [division]);

  return (
    <>
      <FadeIn delay={0.8} direction={"down"}>
        <h1 className="flex items-center justify-center font-bold text-[50px] text-[var(--color-biru-tua)] text-center mx-5 mt-10 mb-5 select-none">
          IoT Insight
        </h1>
      </FadeIn>

      <FadeIn delay={0.8} direction={"down"}>
        <IotInsightSection division={"firmware"} carouselReverse={true} />
        <IotInsightSection division={"hardware"} carouselReverse={false} />
        <IotInsightSection division={"software"} carouselReverse={true} />
        <IotInsightSection division={"ui/ux"} carouselReverse={false} />
        <IotInsightSection division={"network"} carouselReverse={true} />
      </FadeIn>
    </>
  );
}
