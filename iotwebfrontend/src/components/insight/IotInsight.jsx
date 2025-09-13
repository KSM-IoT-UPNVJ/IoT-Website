import IotInsightCard from './IotInsightCard';
import IotInsightCarousel from './IotInsightCarousel';
import FadeIn from '../../utils/fadeIn';

export default function Insight() {
  return (
    <>
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
