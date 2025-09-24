import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Card({
  title = 'Comming Soon',
  description = 'Comming Soon',
  onButtonClick,
  className = '',
}) {
  const [isHovered, setIsHovered] = useState(false);

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
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      {/* Title */}
      <motion.h3
        className="font-bold font-poppins text-black z-10"
        animate={{
          fontSize: isHovered ? '22px' : '30px',
          y: isHovered ? -97 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {title}
      </motion.h3>

      {/* Description + Button */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        className="absolute top-0 left-1/2 w-full h-full -translate-x-1/2 px-4 sm:px-6 md:px-9 flex flex-col justify-center items-center text-center"
        animate={{
          opacity: isHovered ? 1 : 0,
          y: isHovered ? 0 : 50,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <motion.p className="text-gray-700 mb-4 text-xs sm:text-sm mt-2">
          {description}
        </motion.p>
        <motion.button
          onClick={onButtonClick}
          className="absolute bottom-4 sm:bottom-5 bg-blue-700 hover:bg-yellow-400 text-white hover:text-black px-5 sm:px-6 py-2 rounded-full cursor-pointer text-sm"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
          Learn More
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
