import OurProjectsCard from "/src/components/OurProjectsCard.jsx";
import OurProjectsCarousel from "/src/components/OurProjectsCarousel";
import IotInsightCard from "/src/components/IotInsightCard";
import IotInsightCarousel from "/src/components/IotInsightCarousel";

function Projects() {
  return (
    <>
      <h1 className="flex items-center justify-center font-bold text-[50px] text-[var(--color-biru-tua)] mt-20 mb-10">
        Our Projects
      </h1>

      <OurProjectsCarousel>
        <OurProjectsCard
          title="KSM IoT UPNVJ Website Development"
          description="This project focuses on the development of an official website for KSM IoT UPNVJ, aiming to serve as an informative and interactive platform for students, members, and the public. The website includes features such as organizational profiles, division overviews, event updates, and contact information."
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

      <h1 className="flex items-center justify-center font-bold text-[50px] text-[var(--color-biru-tua)] mt-20 mb-10">
        IoT Insight
      </h1>

      <IotInsightCarousel>
        <IotInsightCard
          image="/src/assets/LOGO_IOT.png"
          vol={1}
          title="Smart City Infrastructure Using LoRaWAN"
        />
        <IotInsightCard
          image="/src/assets/LOGO_IOT.png"
          vol={2}
          title="Sensor-Based Health Monitoring System for Elderly"
        />
        <IotInsightCard
          image="/images/insight-3.png"
          vol={3}
          title="Automated Agricultural Monitoring and Analytics"
        />
        <IotInsightCard
          image="/images/insight-4.png"
          vol={4}
          title="IoT Security & Privacy Considerations"
        />
        <IotInsightCard
          image="/images/insight-5.png"
          vol={5}
          title="IoT in Public Transport Optimization"
        />
        <IotInsightCard
          image="/images/insight-5.png"
          vol={6}
          title="IoT in Public Transport Optimization"
        />
        <IotInsightCard
          image="/images/insight-5.png"
          vol={7}
          title="IoT in Public Transport Optimization"
        />
      </IotInsightCarousel>
    </>
  );
}

export default Projects;
