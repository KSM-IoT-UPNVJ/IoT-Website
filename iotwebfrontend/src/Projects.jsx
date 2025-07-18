import ProjectCard from "/components/ProjectCard.jsx";
import ProjectCarousel from "/components/ProjectCarousel";

function Projects() {
  return (
    <>
      <ProjectCarousel>
        <ProjectCard
          title="KSM IoT UPNVJ Website Development"
          description="This project focuses on the development of an official website for KSM IoT UPNVJ, aiming to serve as an informative and interactive platform for students, members, and the public."
          image="/src/assets/LOGO_IOT.png"
        />
        <ProjectCard
          title="Smart Home Monitoring"
          description="A system to monitor temperature, humidity, and motion inside a smart home environment using ESP32 and real-time web dashboard."
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
