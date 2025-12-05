'use client';

import FadeIn from '@/utils/fadeIn';
import Card from '@/components/shared/Card';

export default function AchievementCard({ item, onSelect }) {

  const handleClick = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const elementPosition = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
      width: rect.width,
      height: rect.height,
    };

    // ❗ FIX: kirim elementPosition, bukan event
    onSelect(item, elementPosition);
  };

  return (
    <FadeIn direction="right" delay={0.6}>
      <Card
        onButtonClick={handleClick}
        title={item.title}
        description={item.description}
        backgroundImage={item.image}
      />
    </FadeIn>
  );
}
