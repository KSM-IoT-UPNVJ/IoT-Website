import OurProjectsCard from "/src/components/OurProjectsCard.jsx";
import OurProjectsCarousel from "/src/components/OurProjectsCarousel";
import IotInsightCard from "/src/components/IotInsightCard";

function Projects() {
  return (
    <>
      <h1 className="flex items-center justify-center font-bold text-[50px] text-[var(--color-biru-tua)] mt-15 mb-5">
        Our Projects
      </h1>

      <OurProjectsCarousel>
        <OurProjectsCard
          title="KSM IoT UPNVJ Website Development"
          description="This project focuses on the development of an official website for KSM IoT UPNVJ, aiming to serve as an informative and interactive platform for students, members, and the public."
          image="/src/assets/LOGO_IOT.png"
        />
        <OurProjectsCard
          title="Smart Home Monitoring"
          description="Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos."
          image="/images/smart-home.png"
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
          image="/images/plant-watering.png"
        />
        <OurProjectsCard
          title="IoT Plant Watering System"
          description="An automatic plant watering solution using soil moisture sensors and solenoid valve control to optimize irrigation."
          image="/images/plant-watering.png"
        />
        <OurProjectsCard
          title="IoT Plant Watering System"
          description="An automatic plant watering solution using soil moisture sensors and solenoid valve control to optimize irrigation."
          image="/images/plant-watering.png"
        />
      </OurProjectsCarousel>

      <h1 className="flex items-center justify-center font-bold text-[50px] text-[var(--color-biru-tua)] mt-15 mb-5">
        IoT Insight
      </h1>

      <IotInsightCard
        vol="1"
        title="KSM IoT UPNVJ Website Development KSM IoT UPNVJ Website Development"
        image="/src/assets/LOGO_IOT.png"
      />
    </>
  );
}

export default Projects;
