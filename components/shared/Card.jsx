'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Button from './button.jsx';
import Link from 'next/link.js';
// Card component with hover effects and responsive design used by our program and our achievement

export default function Card({
  title = 'Comming Soon',
  description = 'Comming Soon',
  href = null,
  onButtonClick,
  className = '',
  backgroundImage = '',
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth < 640;
  });

  const hasBackgroundImage = Boolean(backgroundImage);
  const safeDescription = description ?? '';
  const truncatedDescription =
    safeDescription.length > 200
      ? safeDescription.substring(0, 200) + '...'
      : safeDescription;
  const titleColorClass = hasBackgroundImage ? 'text-white' : 'text-black';
  const descriptionColorClass = hasBackgroundImage
    ? 'text-gray-200'
    : 'text-gray-700';

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] h-[220px] sm:h-[260px] md:h-[300px] p-3 sm:p-4 bg-gray-300 rounded-2xl flex text-center items-center justify-center flex-shrink-0 shadow-xl overflow-hidden ${className}`}
      style={
        hasBackgroundImage
          ? {
              backgroundImage: 'url(' + backgroundImage + ')',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : undefined
      }
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      {hasBackgroundImage && (
        <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
      )}
      {/* Title */}

      <motion.h3
        className={'font-bold font-poppins ' + titleColorClass + ' z-10'}
        animate={{
          fontSize: isHovered
            ? isMobile
              ? '20px'
              : '22px'
            : isMobile
            ? '26px'
            : '30px',
          y: isHovered ? (isMobile ? -60 : -97) : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {title}
      </motion.h3>

      {/* Description + Button */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        className={`absolute top-0 left-1/2 w-full h-full -translate-x-1/2 px-4 sm:px-6 md:px-9 flex flex-col items-center text-center ${
          isMobile ? 'pt-16 pb-3' : 'pt-24 pb-4'
        } z-20`}
        animate={{
          opacity: isHovered ? 1 : 0,
          y: isHovered ? 0 : 50,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <motion.p
          className={'text-xs sm:text-sm mt-2 ' + descriptionColorClass}
        >
          {truncatedDescription}
        </motion.p>
        <div className="mt-auto w-full flex justify-center pb-2 sm:pb-3 md:pb-4">
          {href ? (
            <Button href={href}>Learn More</Button>
          ) : (
            <Button onButtonClick={onButtonClick}>Learn More</Button>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
