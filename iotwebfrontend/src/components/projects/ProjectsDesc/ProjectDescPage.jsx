import { useEffect, useRef } from "react";
import { useParams, Navigate } from "react-router-dom";
import ProjectDescContainer from "./ProjectDescContainer";
import projectsDescData from "../projectsDescData";

export default function ProjectDescPage() {
  const { i } = useParams();
  const index = i ? parseInt(i, 10) - 1 : null;

  const projectRefs = useRef([]);
  const HEADER_HEIGHT = 0;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (
      typeof index === "number" &&
      !isNaN(index) &&
      projectRefs.current[index]
    ) {
      const el = projectRefs.current[index];

      setTimeout(() => {
        const elementTop =
          el.getBoundingClientRect().top + window.pageYOffset - HEADER_HEIGHT;
        window.scrollTo({ top: elementTop, behavior: "smooth" });
      }, 50); 
    }
  }, [index]);

  if (isNaN(index) || index < 0 || index >= projectsDescData.length) {
    return <Navigate to="/404" replace />;
  }

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
