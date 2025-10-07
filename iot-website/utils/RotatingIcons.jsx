'use client';

import React, { useRef } from 'react';
import clsx from 'clsx';

function RotatingIcons({ link, icon1, icon2, alt = 'icon', className }) {
  const containerRef = useRef(null);
  const rotatingRef = useRef(null);

  const handleMouseEnter = (e) => {
    const rect = containerRef.current.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dx = e.clientX - centerX;
    const dy = e.clientY - centerY;

    const angle = Math.atan2(dy, dx) * (180 / Math.PI); // radians to degrees
    const normalizedAngle = (angle + 360) % 360; // to get 0–360°

    if (normalizedAngle >= 0 && normalizedAngle < 45)
      rotatingRef.current.classList.add('rotate-45');
    else if (normalizedAngle >= 45 && normalizedAngle < 90)
      rotatingRef.current.classList.add('-rotate-45');
    else if (normalizedAngle >= 90 && normalizedAngle < 135)
      rotatingRef.current.classList.add('rotate-45');
    else if (normalizedAngle >= 135 && normalizedAngle < 180)
      rotatingRef.current.classList.add('-rotate-45');
    else if (normalizedAngle >= 180 && normalizedAngle < 225)
      rotatingRef.current.classList.add('rotate-45');
    else if (normalizedAngle >= 225 && normalizedAngle < 270)
      rotatingRef.current.classList.add('-rotate-45');
    else if (normalizedAngle >= 270 && normalizedAngle < 315)
      rotatingRef.current.classList.add('rotate-45');
    else if (normalizedAngle >= 315 && normalizedAngle < 360)
      rotatingRef.current.classList.add('-rotate-45');
  };

  const handleMouseLeave = () => {
    rotatingRef.current.classList.remove('rotate-45', '-rotate-45');
  };

  return (
    <div
      ref={containerRef}
      onClick={() => window.open(link, '_blank')}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-[57px] h-[57px] group hover:cursor-pointer"
    >
      <div
        ref={rotatingRef}
        className={clsx(
          'w-full h-full rounded-[10px] bg-[var(--color-biru-tua)] group-hover:bg-white border-3 border-[var(--color-biru-tua)] transition-all duration-500 ease-in-out',
          className,
        )}
      ></div>

      <img
        src={icon1}
        alt={alt}
        className="w-[38px] h-[38px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:opacity-0 transition-all duration-500 ease-in-out text-xs pointer-events-none"
        draggable="false"
      />
      <img
        src={icon2}
        alt={alt}
        className="w-[38px] h-[38px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out pointer-events-none"
        draggable="false"
      />
    </div>
  );
}

export default RotatingIcons;
