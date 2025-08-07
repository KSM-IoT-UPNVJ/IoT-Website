import React, { useState } from "react";

const divisions = [
  { name: "Firmware Division", image: "/firmware.png" },
  { name: "Hardware Division", image: "/hardware.jpg" },
  { name: "Software Division", image: "/software.jpg" },
  { name: "UI/UX Division", image: "/uiux.jpg" },
  { name: "Network Division", image: "/network.jpg" },
];

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.";

const MoreInsight = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="w-full relative min-h-screen py-20 px-12 flex flex-col items-center">
      <h2 className="text-5xl font-bold text-center text-gray-800 mb-16">More Insight</h2>
      <div className="w-full flex justify-center items-center gap-6 flex-wrap md:flex-nowrap">
        {divisions.map((division, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              className={`relative flex flex-col justify-end rounded-2xl shadow-lg overflow-hidden transition-all duration-700 ease-in-out ${
                isActive ? "w-[400px]" : "w-[200px]"
              } h-[600px] group cursor-pointer`}
            >
              {/* Background image */}
              <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-transform duration-700 ease-in-out scale-100 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${division.image})`,
                }}
              />

              {/* Vertical Title */}
              <div
                className={`absolute z-10 font-extrabold text-black transition-all duration-700 ease-in-out ${
                  isActive
                    ? "text-3xl bottom-[180px] left-6 scale-100 text-left rotate-0"
                    : "text-5xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90"
                }`}
                style={{
                  writingMode: isActive ? "horizontal-tb" : "horizontal-tb",
                  textOrientation: "upright",
                  textAlign: "center",
                  whiteSpace: "nowrap",
                }}
              >
                {division.name}
              </div>

              {!isActive && (
                <div
                  className={`absolute w-full h-full inset-0 bg-gradient-to-b to-color pointer-events-none transform transition-all duration-700 ease-in-out
                    ${isActive? "opacity-0 -translate-x-10" : "opacity-100 translate-x-0"} ${
                  index === 0 ? "from-gray-200/60 to-gray-600/70" :
                  index === 1 ? "from-purple-400/60 to-yellow-400/60" :
                  index === 2 ? "from-yellow-300/60 to-pink-500/80" :
                  index === 3 ? "from-blue-300/70 to-blue-300/70" :
                  index === 4 ? "from-green-300/70 to-green-700/70" :
                  "from-gray-400/90"
              }`}
                style={{
                  top: "0%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  zIndex: 1,
                }}
                />
              )}

              
              {/* Description on Hover */}
              {isActive && (
                <div className="relative z-20 p-4 text-white text-sm font-medium mt-auto bg-black/10 backdrop-blur-sm rounded-t-2xl">
                  <p className="mb-4">{lorem}</p>
                  <button className="px-4 py-2 bg-white text-black rounded-lg text-sm font-semibold hover:bg-gray-200 transition">
                    Learn More
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MoreInsight;