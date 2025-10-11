// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '@/components/shared/button';

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
  const divisionSlug = division.name
    .replace(/ Division$/i, '')
    .trim()
    .toLowerCase()
    .replace(/\//g, '-')
    .replace(/\s+/g, '-');

  const handleToggle = () => {
    onSelect(isActive ? null : index);
  };
  // const handleLearnMore = (event) => {
  //   event.stopPropagation();
  //   navigate(`/insight?division=${encodeURIComponent(divisionSlug)}`);
  // };

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
      <div className="absolute inset-0">
        <Image
          src={division.image}
          alt={`${division.name} background`}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          quality={60}
          sizes="(min-width: 640px) 600px, 100vw"
          priority={index === 0}
        />
      </div>

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
          <Button
            href={`/insight?division=${encodeURIComponent(divisionSlug)}`}
          >
            Learn More
          </Button>
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
