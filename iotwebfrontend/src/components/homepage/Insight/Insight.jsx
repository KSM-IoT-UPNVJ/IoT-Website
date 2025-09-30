import React, { useEffect, useState } from 'react';
import FadeIn from '../../../utils/fadeIn';
import InsightCard from './InsightCard';

const divisions = [
  {
    name: 'Firmware Division',
    image: '/firmware.png',
    gradient:
      'bg-gradient-to-b from-gray-200/70 via-gray-800/35 to-gray-900/80',
  },
  {
    name: 'Hardware Division',
    image: '/hardware.jpg',
    gradient:
      'bg-gradient-to-b from-indigo-400/70 via-purple-500/40 to-fuchsia-600/70',
  },
  {
    name: 'Software Division',
    image: '/software.jpg',
    gradient:
      'bg-gradient-to-b from-amber-300/70 via-pink-400/40 to-rose-500/70',
  },
  {
    name: 'UI/UX Division',
    image: '/uiux.jpg',
    gradient:
      'bg-gradient-to-b from-blue-200/70 via-blue-400/40 to-blue-600/70',
  },
  {
    name: 'Network Division',
    image: '/network.jpg',
    gradient:
      'bg-gradient-to-b from-emerald-200/70 via-emerald-400/40 to-emerald-700/80',
  },
];

const defaultDescription =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

const InsightSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const updateInteractionMode = () => {
      const touchLike =
        window.matchMedia('(hover: none)').matches ||
        window.matchMedia('(pointer: coarse)').matches ||
        window.innerWidth < 768;

      setIsTouch(touchLike);
      if (!touchLike) {
        setActiveIndex(null);
      }
    };

    updateInteractionMode();
    window.addEventListener('resize', updateInteractionMode);

    return () => {
      window.removeEventListener('resize', updateInteractionMode);
    };
  }, []);

  const handleSelect = (value) => {
    setActiveIndex((prev) => {
      if (typeof value !== 'number') {
        return isTouch ? null : prev;
      }

      if (isTouch) {
        return prev === value ? null : value;
      }

      return value;
    });
  };

  const handleClear = () => {
    if (!isTouch) {
      setActiveIndex(null);
    }
  };

  return (
    <section className="relative w-full px-4 py-16 sm:px-8 sm:py-20 md:px-12 lg:px-16">
      <FadeIn direction="up" delay={0.15}>
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl md:text-[52px]">
            More Insight
          </h2>
        </div>
      </FadeIn>

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 md:flex-row md:items-stretch md:justify-center md:gap-4">
        {divisions.map((division, index) => (
          <FadeIn key={division.name} direction="up" delay={0.2 + index * 0.1}>
            <InsightCard
              division={division}
              description={defaultDescription}
              gradient={division.gradient}
              index={index}
              isActive={activeIndex === index}
              isTouch={isTouch}
              onSelect={handleSelect}
              onClear={handleClear}
            />
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default InsightSection;
