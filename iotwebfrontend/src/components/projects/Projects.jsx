import OurProjectsContainer from "./OurProjects/OurProjectsContainer";
import FadeIn from "/src/utils/fadeIn";

function Projects() {
  return (
    <>
      <FadeIn delay={0.8} direction={"down"}>
        <h1 className="flex items-center justify-center font-bold text-[50px] text-[var(--color-biru-tua)] mt-10 mb-5">
          Our Projects
        </h1>
      </FadeIn>

      <FadeIn delay={1.2} direction={"down"}>
        <OurProjectsContainer />
      </FadeIn>

    </>
  );
}

export default Projects;
