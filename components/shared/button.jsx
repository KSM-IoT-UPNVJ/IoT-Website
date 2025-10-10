'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Button({
  onButtonClick = () => {},
  children,
  className = '',
  href,
}) {
  const baseClass =
    'bg-blue-700 hover:bg-yellow-400 m-3 text-white text-center hover:text-black px-5 sm:px-6 py-2 rounded-full cursor-pointer text-sm' +
    className;
  if (href) {
    return (
      <Link href={href}>
        <motion.div
          className={baseClass}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
          {children}
        </motion.div>
      </Link>
    );
  }
  return (
    <motion.button
      onClick={onButtonClick}
      className={baseClass}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.button>
  );
}
