"use client";

import React, { useEffect, useState } from "react";
import FadeIn from "../../../utils/fadeIn";
import InsightCard from "./InsightCard";

const InsightSection = () => {
  const [divisions, setDivisions] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isTouch, setIsTouch] = useState(false);

  // --- FETCH DATA DARI API FASTAPI ---
  useEffect(() => {
    const fetchDivisions = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/insight/divisions");
        const data = await res.json();
        setDivisions(data);
      } catch (err) {
        console.error("Failed to fetch divisions:", err);
      }
    };

    fetchDivisions();
  }, []);

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

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 lg:flex-row lg:items-stretch lg:justify-center lg:gap-4">
        {divisions.map((division, index) => (
          <FadeIn key={division.name} direction="up" delay={0.2 + index * 0.1}>
            <InsightCard
              division={division}
              description={division.description || defaultDescription}
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
