import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ProgramCard = ({
  title = 'Program Name',
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  buttonText = 'Learn More',
  onButtonClick = () => {},
  className = '',
  index = 0,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleButtonClick = () => {
    onButtonClick({ title, description, index });
  };

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative min-w-[420px] h-[300px] bg-gray-300 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl overflow-hidden ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      {/* Title */}
      <motion.h3
        className="font-black text-black z-10"
        animate={{
          fontSize: isHovered ? '28px' : '36px',
          y: isHovered ? -97 : 0,
        }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        {title}
      </motion.h3>

      {/* Description + Button */}
      <motion.div
        className="absolute top-[77px] left-1/2 -translate-x-1/2 w-full px-9 text-center"
        animate={{
          opacity: isHovered ? 1 : 0,
          y: isHovered ? 0 : 16,
        }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <p className="text-gray-700 mb-4 text-sm mt-2">{description}</p>
        <motion.button
          onClick={handleButtonClick}
          className="bg-blue-700 hover:bg-yellow-400 text-white hover:text-black px-6 py-2 rounded-full"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
          {buttonText}
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default ProgramCard;
