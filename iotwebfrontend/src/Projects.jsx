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
          image="/template-foto-OurProjects.jpg"
        />
        <OurProjectsCard
          title="Project Title"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum."
          image=""
        />
        <OurProjectsCard
          title="Project Title"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. "
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
          image="/IotInsight-Hardware1.png"
          vol={1}
          title="Imajinasi ke Dunia Nyata dengan Fusion 360 & Blender?"
        />
        <IotInsightCard
          image="/IotInsight-Firmware1.png"
          vol={2}
          title="ESP32 Otak Pintar di Balik Proyek IoT!"
        />
        <IotInsightCard
          image="/IotInsight-Software1.png"
          vol={3}
          title="Apa Bahasa Pemrogramanmu?"
        />
        <IotInsightCard
          image="/IotInsight-Uiux1.png"
          vol={4}
          title="Menyelami Dunia UI/UX!"
        />
        <IotInsightCard
          image="/IotInsight-Network1.png"
          vol={5}
          title="VPN, Apakah Aman?"
        />
        <IotInsightCard
          image="/IotInsight-Firmware2.png"
          vol={6}
          title="Kenalan yuk sama PLC!"
        />
      </IotInsightCarousel>
    </>
  );
}

export default Projects;
