// import OurProjectsContainer from "./OurProjects/OurProjectsContainer";
import "./Projects.css";
import FadeIn from "/src/utils/fadeIn";

import IotInsightSection from "./IotInsight/IotInsightSection";

function Projects() {
  return (
    <>
      {/* <FadeIn delay={0.8} direction={"down"}>
        <h1 className="flex items-center justify-center font-bold text-[50px] text-[var(--color-biru-tua)] mt-10 mb-5">
          Our Projects
        </h1>
      </FadeIn>

      <FadeIn delay={1.2} direction={"down"}>
        <OurProjectsContainer />
      </FadeIn> */}

      <FadeIn delay={0.8} direction={"down"}>
        <h1 className="flex items-center justify-center font-bold text-[50px] text-[var(--color-biru-tua)] mt-10 mb-5">
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

export default Projects;
