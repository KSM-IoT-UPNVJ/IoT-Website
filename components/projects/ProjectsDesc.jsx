import ProjectDescPage from "./ProjectsDesc/ProjectDescPage";
import FadeIn from "/src/utils/fadeIn";

function ProjectsDesc() {
  return (
    <>
      <FadeIn delay={0.8} direction={"down"}>
        <h1 className="flex items-center justify-center font-bold text-[50px] text-[var(--color-biru-tua)] text-center mx-5 mt-10 mb-5 select-none">
          Projects Description
        </h1>
      </FadeIn>

        <ProjectDescPage />
    </>
  );
}

export default ProjectsDesc;
