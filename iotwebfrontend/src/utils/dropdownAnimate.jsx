import { motion, AnimatePresence } from 'framer-motion';

/**
 * Reusable MotionFade Component
 * @param {boolean} show - controls visibility
 * @param {ReactNode} children - content inside the animation
 * @param {string} className - optional className for styling
 * @param {object} animation - optional override for animation props
 */
function dropdownAnimate({ show, children, className = '', animation = {} }) {
  const defaultAnimation = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
    transition: { duration: 0.25 },
    ...animation, // allow override
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div {...defaultAnimation} className={className}>
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default dropdownAnimate;
