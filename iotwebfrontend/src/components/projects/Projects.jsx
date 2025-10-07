import OurProjectsContainer from "./OurProjects/OurProjectsContainer";
import FadeIn from "/src/utils/fadeIn";

function Projects() {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  }, []);

  return (
    <>
      <FadeIn delay={0.8} direction={"down"}>
        <h1 className="flex items-center justify-center font-bold text-[50px] text-[var(--color-biru-tua)] text-center mx-5 mt-10 mb-5 select-none">
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
