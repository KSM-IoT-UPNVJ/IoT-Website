import React from 'react';
import DesktopInsightCard from './DesktopInsightCard';
import MobileInsightCard from './MobileInsightCard';

const InsightCard = ({
  division,
  description,
  gradient,
  index,
  isActive,
  isTouch,
  onSelect,
  onClear,
}) => {
  if (isTouch) {
    return (
      <MobileInsightCard
        division={division}
        description={description}
        gradient={gradient}
        index={index}
        isActive={isActive}
        onSelect={onSelect}
      />
    );
  }

  return (
    <DesktopInsightCard
      division={division}
      description={description}
      gradient={gradient}
      index={index}
      isActive={isActive}
      onSelect={onSelect}
      onClear={onClear}
    />
  );
};

export default InsightCard;
