import React, { useState } from 'react';
import FadeIn from '../../utils/fadeIn';

const divisions = [
  { name: 'Firmware Division', image: '/firmware.png' },
  { name: 'Hardware Division', image: '/hardware.jpg' },
  { name: 'Software Division', image: '/software.jpg' },
  { name: 'UI/UX Division', image: '/uiux.jpg' },
  { name: 'Network Division', image: '/network.jpg' },
];

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.';

const MoreInsight = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="w-full relative min-h-screen py-16 sm:py-20 px-4 sm:px-8 md:px-12 flex flex-col items-center">
      <FadeIn direction="up" delay={0.2}>
        <h2 className="text-3xl sm:text-4xl md:text-[56px] font-bold text-center text-gray-800 mb-10 sm:mb-14 md:mb-16 font-optima">
          More Insight
        </h2>
      </FadeIn>
      <div className="w-full flex justify-center items-center gap-4 sm:gap-6 flex-wrap md:flex-nowrap">
        {divisions.map((division, index) => {
          const isActive = activeIndex === index;

          return (
            <FadeIn key={index} direction="up" delay={0.3 + index * 0.2}>
              <div
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                className={`relative flex flex-col justify-end rounded-2xl shadow-lg overflow-hidden transition-all duration-700 ease-in-out ${
                  isActive
                    ? 'w-[80vw] sm:w-[420px] md:w-[530px]'
                    : 'w-[44vw] sm:w-[180px] md:w-[200px]'
                } h-[360px] sm:h-[480px] md:h-[600px] group cursor-pointer`}
              >
                {/* Background image */}
                <div
                  className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-transform duration-700 ease-in-out scale-100 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${division.image})`,
                  }}
                />

                {/* Tittle masing-masing kotak */}
                <div
                  className={`absolute z-30 font-extrabold text-black transition-all duration-700 ease-in-out ${
                    isActive
                      ? 'text-2xl sm:text-3xl md:text-4xl bottom-[120px] sm:bottom-[160px] md:bottom-[200px] left-4 sm:left-6 scale-100 text-left rotate-0'
                      : 'text-3xl sm:text-4xl md:text-5xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90'
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
                    className={`absolute w-full h-full inset-0 bg-gradient-to-b to-color pointer-events-none transform transition-all duration-700 ease-in-out
                    ${
                      isActive
                        ? 'opacity-0 -translate-x-10'
                        : 'opacity-100 translate-x-0'
                    } ${
                      index === 0
                        ? 'from-gray-200/60 to-gray-600/70'
                        : index === 1
                        ? 'from-purple-400/60 to-yellow-400/60'
                        : index === 2
                        ? 'from-yellow-300/60 to-pink-500/80'
                        : index === 3
                        ? 'from-blue-300/70 to-blue-300/70'
                        : index === 4
                        ? 'from-green-300/70 to-green-700/70'
                        : 'from-gray-400/90'
                    }`}
                    style={{
                      top: '0%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      zIndex: 1,
                    }}
                  />
                )}

                {/* Gradiensi ketika hover */}
                {isActive && (
                  <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/80 via-transparent to-white/98 transition-opacity duration-700 ease-in-out" />
                )}

                {/* transisi ke kiri ketika hover */}
                <div
                  className={`absolute bottom-0 left-0 w-full z-30 p-6 text-black text-base font-bold leading-relaxed transform transition-all duration-500 ease-in-out ${
                    isActive
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 translate-x-300'
                  }`}
                  style={{
                    pointerEvents: isActive ? 'auto' : 'none',
                  }}
                >
                  <p className="mb-4 text-sm md:text-base">{lorem}</p>
                  <button className="bg-blue-800 hover:bg-yellow-400 text-white hover:text-black px-5 md:px-6 py-2 rounded-full transition-colors duration-300 text-sm">
                    Learn More
                  </button>
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </div>
  );
};

export default MoreInsight;
