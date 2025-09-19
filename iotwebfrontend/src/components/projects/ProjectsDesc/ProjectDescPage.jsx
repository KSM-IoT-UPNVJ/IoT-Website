import ProjectDescContainer from "./ProjectDescContainer";
import projectsDescData from "./projectsDescData.json"

export default function ProjectDescPage() {
  const realCards = projectsDescData.map((card) => ({
          ...card
        }));
  return (
    <>
          <div className={`flex flex-wrap justify-center gap-8 px-2`}>
            {realCards.map((card, i) => (
              <ProjectDescContainer key={i} {...card} />
            ))}
          </div>
    </>
  );
}
