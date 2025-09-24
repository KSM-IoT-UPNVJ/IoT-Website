import { MoveLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AchievementPopup({
  item,
  onClose,
  clickedElementPosition,
}) {
  if (!item) return null; // Jangan render apapun jika tidak ada item yang dipilih

  // Calculate initial position for animation
  const getInitialPosition = () => {
    if (!clickedElementPosition) {
      return { scale: 0, opacity: 0 };
    }

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    return {
      x: clickedElementPosition.x - centerX,
      y: clickedElementPosition.y - centerY,
      scale: 0,
      opacity: 0,
    };
  };

  const getFinalPosition = () => {
    return {
      x: 0,
      y: 0,
      scale: 1,
      opacity: 1,
    };
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-3 sm:p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Kontainer utama popup */}
        <motion.div
          className="relative w-full sm:w-[90%] h-[86%] sm:h-[80%] shadow-2xl rounded-2xl p-4 sm:p-6"
          initial={getInitialPosition()}
          animate={getFinalPosition()}
          exit={getInitialPosition()}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
            duration: 0.6,
          }}
        >
          {/* Lapisan background dengan efek glassmorphism */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-2xl -z-10"></div>

          {/* Lapisan konten (teks & gambar) */}
          <div className="relative z-10 w-full h-full flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8">
            {/* Bagian Kiri (Gambar) */}
            <motion.div
              className="w-full md:w-1/2 h-1/2 md:h-full bg-abu-muda rounded-lg"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {/* Ganti dengan gambar jika ada */}
              {/* <img src={item.image} alt={item.title} className="w-full h-full object-cover rounded-lg"/> */}
            </motion.div>

            {/* Bagian Kanan (Konten Teks) */}
            <motion.div
              className="w-full md:w-1/2 flex flex-col justify-between p-2 sm:p-4 text-white"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="self-start">
                <motion.button
                  onClick={onClose}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  <MoveLeft size={36} className="sm:size-[48px]" />
                </motion.button>
              </div>

              <motion.div
                className="text-center flex-grow flex flex-col justify-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">
                  {item.title}
                </h2>
                <h5 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-6 md:mb-8">
                  {item.award}
                </h5>
                <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-2 sm:mb-4">
                  {item.description}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
