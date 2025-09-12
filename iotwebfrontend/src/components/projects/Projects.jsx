import OurProjectsCard from '/src/components/projects/OurProjectsCard.jsx';
import OurProjectsCarousel from '/src/components/projects/OurProjectsCarousel';
import IotInsightCard from '/src/components/projects/IotInsightCard';
import IotInsightCarousel from '/src/components/projects/IotInsightCarousel';

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

      <FadeIn delay={0.8} direction={'down'}>
        <h1 className="flex items-center justify-center font-bold text-[50px] text-[var(--color-biru-tua)] mt-20 mb-10">
          IoT Insight
        </h1>
      </FadeIn>

      <FadeIn delay={0.8} direction={'down'}>
        <IotInsightCarousel>
          <IotInsightCard
            image="/projects/IotInsight-Hardware1.png"
            vol={1}
            title="Imajinasi ke Dunia Nyata dengan Fusion 360 & Blender?"
            link="https://www.instagram.com/p/DHVhPUizghU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
          />
          <IotInsightCard
            image="/projects/IotInsight-Firmware1.png"
            vol={2}
            title="ESP32 Otak Pintar di Balik Proyek IoT!"
            link="https://www.instagram.com/p/DHvDhJxRK1i/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
          />
          <IotInsightCard
            image="/projects/IotInsight-Software1.png"
            vol={3}
            title="Apa Bahasa Pemrogramanmu?"
            link="https://www.instagram.com/p/DItBMJHx_FT/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
          />
          <IotInsightCard
            image="/projects/IotInsight-Uiux1.png"
            vol={4}
            title="Menyelami Dunia UI/UX!"
            link="https://www.instagram.com/p/DJbaNkyR6rj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
          />
          <IotInsightCard
            image="/projects/IotInsight-Network1.png"
            vol={5}
            title="VPN, Apakah Aman?"
            link="https://www.instagram.com/p/DJ01PEBR7Ff/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
          />
          <IotInsightCard
            image="/projects/IotInsight-Firmware2.png"
            vol={6}
            title="Kenalan yuk sama PLC!"
            link="https://www.instagram.com/p/DKRbFZ_xfTE/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
          />
        </IotInsightCarousel>
      </FadeIn>
    </>
  );
}

export default Projects;
