import ProjectCard from "/components/ProjectCard.jsx";
import ProjectCarousel from "/components/ProjectCarousel";

function Projects() {
  return (
    <>
      <h1 className="flex items-center justify-center font-bold text-[50px] text-[var(--color-biru-tua)] mt-15 mb-5">
        Our Projects
      </h1>
      <ProjectCarousel>
        <ProjectCard
          title="KSM IoT UPNVJ Website Development"
          description="This project focuses on the development of an official website for KSM IoT UPNVJ, aiming to serve as an informative and interactive platform for students, members, and the public."
          image="/src/assets/LOGO_IOT.png"
        />
        <ProjectCard
          title="Smart Home Monitoring"
          description="Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
          image="/images/smart-home.png"
        />
        <ProjectCard
          title="IoT Plant Watering System"
          description="An automatic plant watering solution using soil moisture sensors and solenoid valve control to optimize irrigation."
          image=""
        />
        <ProjectCard
          title="IoT Plant Watering System"
          description="An automatic plant watering solution using soil moisture sensors and solenoid valve control to optimize irrigation."
          image="/images/plant-watering.png"
        />
        <ProjectCard
          title="IoT Plant Watering System"
          description="An automatic plant watering solution using soil moisture sensors and solenoid valve control to optimize irrigation."
          image="/images/plant-watering.png"
        />
        <ProjectCard
          title="IoT Plant Watering System"
          description="An automatic plant watering solution using soil moisture sensors and solenoid valve control to optimize irrigation."
          image="/images/plant-watering.png"
        />
        <ProjectCard
          title="IoT Plant Watering System"
          description="An automatic plant watering solution using soil moisture sensors and solenoid valve control to optimize irrigation."
          image="/images/plant-watering.png"
        />
      </ProjectCarousel>
    </>
  );
}

export default Projects;
