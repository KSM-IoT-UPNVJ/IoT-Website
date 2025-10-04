import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import ProjectDescContainer from "./ProjectDescContainer";
import projectsDescData from "./projectsDescData.json";

export default function ProjectDescPage() {
  const { i } = useParams();
  const index = i ? parseInt(i, 10) - 1 : null;

  // Refs for each project
  const projectRefs = useRef([]);

  useEffect(() => {
    if (index !== null && projectRefs.current[index]) {
      projectRefs.current[index].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [index]);

  return (
    <div className="flex flex-wrap justify-center gap-8 px-2">
      {projectsDescData.map((card, idx) => (
        <div
          key={idx}
          ref={(el) => (projectRefs.current[idx] = el)}
          className="w-full"
        >
          <ProjectDescContainer id={idx + 1} {...card} />
        </div>
      ))}
    </div>
  );
}
