'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

import FadeIn from '../../utils/fadeIn';
import IotInsightSection from '../../components/insight/IotInsightSection';

export default function Insight() {
  const searchParams = useSearchParams();
  const division = searchParams?.get('division');

  useEffect(() => {
    if (!division) {
      return;
    }

    const normalizedDivision = division.toLowerCase();
    const targetElement = document.getElementById(normalizedDivision);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [division]);

  return (
    <>
      <FadeIn delay={0.8} direction={'down'}>
        <h1 className="flex items-center justify-center font-bold text-[50px] text-[var(--color-biru-tua)] text-center mx-5 mt-10 mb-5">
          IoT Insight
        </h1>
      </FadeIn>

      <FadeIn delay={0.8} direction={'down'}>
        <IotInsightSection division={'firmware'} carouselReverse={true} />
        <IotInsightSection division={'hardware'} carouselReverse={false} />
        <IotInsightSection division={'software'} carouselReverse={true} />
        <IotInsightSection division={'ui/ux'} carouselReverse={false} />
        <IotInsightSection division={'network'} carouselReverse={true} />
      </FadeIn>
    </>
  );
}
