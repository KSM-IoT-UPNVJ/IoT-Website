import OurProjectsContainer from '../../components/projects/OurProjects/OurProjectsContainer';
import FadeIn from '../../utils/fadeIn';

function Projects() {
  return (
    <>
      <FadeIn delay={0.8} direction={'down'}>
        <h1 className="flex items-center justify-center font-bold text-[50px] text-[var(--color-biru-tua)] text-center mx-5 mt-10 mb-5 select-none">
          Our Projects
        </h1>
      </FadeIn>

      <FadeIn delay={1.2} direction={'down'}>
        <OurProjectsContainer />
      </FadeIn>
    </>
  );
}

export default Projects;
