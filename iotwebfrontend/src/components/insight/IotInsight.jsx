import FadeIn from "/src/utils/fadeIn";
import IotInsightSection from "./IotInsightSection";

import { useParams, useNavigationType, Navigate } from "react-router-dom";
import { useEffect } from "react";

import iotInsightData from "./iotInsightData";

export default function Insight() {
  const { division } = useParams();

  const navigationType = useNavigationType();
  
  useEffect(() => {
    if (navigationType !== "POP") {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    }
  }, [navigationType]);

  useEffect(() => {
    if (division) {
      const el = document.getElementById(division);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [division]);

  const validDivisions = Object.keys(iotInsightData)
    .filter((key) => key.endsWith("-slide"))
    .map((key) => key.replace("-slide", ""));

  if (division && !validDivisions.includes(division)) {
    return <Navigate to="/404" replace />;
  }

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
        <IotInsightSection division={"uiux"} carouselReverse={false} />
        <IotInsightSection division={"network"} carouselReverse={true} />
      </FadeIn>
    </>
  );
}
