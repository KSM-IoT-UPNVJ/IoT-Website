// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const panelVariants = {
  inactive: { opacity: 0, x: 32, y: 24 },
  active: { opacity: 1, x: 0, y: 0 },
};

const contentVariants = {
  inactive: { opacity: 0, x: 24 },
  active: { opacity: 1, x: 0 },
};

const panelTransition = { duration: 0.45, ease: 'easeOut' };

export default function MobileInsightCard({
  division,
  description,
  gradient,
  index,
  isActive,
  onSelect,
}) {
  const navigate = useRouter();
  const divisionSlug = division.name
    .replace(/ Division$/i, '')
    .trim()
    .toLowerCase()
    .replace(/\//g, '-')
    .replace(/\s+/g, '-');

  const handleToggle = () => {
    onSelect(isActive ? null : index);
  };
  const handleLearnMore = (event) => {
    event.stopPropagation();
    navigate(`/insight?division=${encodeURIComponent(divisionSlug)}`);
  };

  return (
    <motion.div
      layout
      className="group relative flex w-full flex-col justify-end overflow-hidden rounded-2xl bg-gray-200 shadow-xl transition-all duration-500 ease-out focus-within:ring-2 focus-within:ring-blue-400 focus:outline-none h-[300px] sm:h-[360px] cursor-pointer"
      role="button"
      tabIndex={0}
      aria-expanded={isActive}
      onClick={handleToggle}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          handleToggle();
        }
      }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
        style={{ backgroundImage: `url(${division.image})` }}
      />

      <div
        className={`absolute inset-0 z-10 pointer-events-none ${gradient} transition-opacity duration-500 ease-out ${
          isActive ? 'opacity-40' : 'opacity-80'
        }`}
      />

      <div
        className={`absolute inset-x-0 bottom-0 z-20 flex items-center justify-between bg-black/65 px-4 py-3 text-white transition-opacity duration-500 ${
          isActive ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <p className="text-lg font-semibold">{division.name}</p>
        <span className="text-sm uppercase tracking-widest">Tap</span>
      </div>

      <motion.div
        className="z-30 mt-auto w-full bg-gradient-to-b from-transparent to-white p-5"
        style={{ pointerEvents: isActive ? 'auto' : 'none' }}
        variants={panelVariants}
        animate={isActive ? 'active' : 'inactive'}
        initial={false}
        transition={panelTransition}
      >
        <motion.div
          className="mb-4 flex items-center justify-between"
          variants={contentVariants}
          animate={isActive ? 'active' : 'inactive'}
          initial={false}
          transition={panelTransition}
        >
          <h3 className="text-lg font-semibold text-blue-900">
            {division.name}
          </h3>
          <motion.button
            type="button"
            onClick={handleLearnMore}
            className="rounded-full bg-blue-700 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white transition-colors duration-300 hover:bg-yellow-400 hover:text-black"
            variants={contentVariants}
            animate={isActive ? 'active' : 'inactive'}
            initial={false}
            transition={{ ...panelTransition, delay: isActive ? 0.05 : 0 }}
          >
            Learn More
          </motion.button>
        </motion.div>
        <motion.p
          className="text-sm leading-relaxed text-black sm:text-base"
          variants={contentVariants}
          animate={isActive ? 'active' : 'inactive'}
          initial={false}
          transition={{ ...panelTransition, delay: isActive ? 0.1 : 0 }}
        >
          {description}
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
