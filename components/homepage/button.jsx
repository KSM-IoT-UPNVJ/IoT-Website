import { motion } from 'framer-motion';

export default function Button({ onButtonClick, children, className }) {
  return (
    <motion.button
      onClick={onButtonClick}
      className="bg-blue-700 hover:bg-yellow-400 m-3 text-white hover:text-black px-5 sm:px-6 py-2 rounded-full cursor-pointer text-sm"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.button>
  );
}
