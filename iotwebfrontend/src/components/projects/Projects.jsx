import OurProjectsCard from '/src/components/projects/OurProjectsCard.jsx';
import OurProjectsCarousel from '/src/components/projects/OurProjectsCarousel';

import './Projects.css';

import FadeIn from '../../utils/fadeIn';

function Projects() {
  return (
    <>
      <FadeIn delay={0.8} direction={'down'}>
        <h1 className="flex items-center justify-center font-bold text-[50px] text-[var(--color-biru-tua)] mt-20 mb-10">
          Our Projects
        </h1>
      </FadeIn>

      <FadeIn delay={0.8} direction={'down'}>
        <OurProjectsCarousel>
          <OurProjectsCard
            title="KSM IoT UPNVJ Website Development"
            description="This project focuses on the development of an official website for KSM IoT UPNVJ, aiming to serve as an informative and interactive platform for students, members, and the public. The website includes features such as organizational profiles, division overviews, event updates, and contact information."
            image="/projects/template-foto-OurProjects.jpg"
          />
          <OurProjectsCard
            title="Project Title"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum."
            image="/projects/template-foto-OurProjects.jpg"
          />
          <OurProjectsCard
            title="Project Title"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. "
            image="/projects/template-foto-OurProjects.jpg"
          />
          <OurProjectsCard
            title="IoT Plant Watering System"
            description="An automatic plant watering solution using soil moisture sensors and solenoid valve control to optimize irrigation."
            image="/projects/template-foto-OurProjects.jpg"
          />
          <OurProjectsCard
            title="IoT Plant Watering System"
            description="An automatic plant watering solution using soil moisture sensors and solenoid valve control to optimize irrigation."
            image=""
          />
          <OurProjectsCard
            title="IoT Plant Watering System"
            description="An automatic plant watering solution using soil moisture sensors and solenoid valve control to optimize irrigation."
            image="/images/plant-watering.png"
          />
          <OurProjectsCard
            title="IoT Plant Watering System"
            description="An automatic plant watering solution using soil moisture sensors and solenoid valve control to optimize irrigation."
            image="/projects/template-foto-OurProjects.jpg"
          />
        </OurProjectsCarousel>
      </FadeIn>

      
    </>
  );
}

export default Projects;
