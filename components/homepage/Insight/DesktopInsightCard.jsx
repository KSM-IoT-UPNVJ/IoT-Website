import React from 'react';
import { useRouter } from 'next/navigation';

const DesktopInsightCard = ({
  division,
  description,
  gradient,
  index,
  isActive,
  onSelect,
  onClear,
}) => {
  const router = useRouter();
  const handleMouseEnter = () => {
    if (typeof onSelect === 'function') {
      onSelect(index);
    }
  };

  const handleMouseLeave = () => {
    if (typeof onClear === 'function') {
      onClear();
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative flex flex-col justify-end rounded-2xl shadow-lg overflow-hidden transition-all duration-700 ease-in-out ${
        isActive ? 'w-[530px]' : 'w-[200px]'
      } h-[600px] group cursor-pointer`}
    >
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-transform duration-700 ease-in-out scale-100 group-hover:scale-110"
        style={{
          backgroundImage: `url(${division.image})`,
        }}
      />

      <div
        className={`absolute z-30 font-extrabold text-black transition-all duration-700 ease-in-out ${
          isActive
            ? 'text-4xl bottom-[200px] left-6 scale-100 text-left rotate-0'
            : 'text-5xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90'
        }`}
        style={{
          writingMode: isActive ? 'horizontal-tb' : 'horizontal-tb',
          textOrientation: 'upright',
          textAlign: 'center',
          whiteSpace: 'nowrap',
        }}
      >
        {`${division.name.replace(' Division', '')} Division`}
      </div>

      {!isActive && (
        <div
          className={`absolute w-full h-full inset-0 bg-gradient-to-b to-color pointer-events-none transform transition-all duration-700 ease-in-out ${
            isActive ? 'opacity-0 -translate-x-10' : 'opacity-100 translate-x-0'
          } ${gradient}`}
          style={{
            top: '0%',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1,
          }}
        />
      )}

      {isActive && (
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/80 via-transparent to-white/98 transition-opacity duration-700 ease-in-out" />
      )}

      <div
        className={`absolute bottom-0 left-0 w-full z-30 p-6 text-black text-base font-bold leading-relaxed transform transition-all duration-500 ease-in-out ${
          isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-300'
        }`}
        style={{
          pointerEvents: isActive ? 'auto' : 'none',
        }}
      >
        <p className="mb-4">{description}</p>
        <button
          className="bg-blue-800 hover:bg-yellow-400 text-white hover:text-black px-6 py-2 rounded-full transition-colors duration-300 text-sm"
          onClick={() =>
            router.push(
              `/insight/${division.name
                .replace(' Division', '')
                .toLowerCase()
                .replace('/', '-')}`,
            )
          }
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default DesktopInsightCard;
