import FadeIn from '../../../utils/fadeIn';
import Card from '../Card';
import React, { useState } from 'react';
export default function AchievementCard({ item, onSelect }) {
  const handleClick = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const elementPosition = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
      width: rect.width,
      height: rect.height,
    };
    onSelect(item, elementPosition);
  };
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <FadeIn direction={'right'} delay={0.6}>
      <div 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="h-full w-full">
        <Card
          onButtonClick={handleClick}
          title={item.title}
          description={item.description}
          backgroundImage={item.image}
          achievement={true}
        />
      </div>
    </FadeIn>
  );
}
