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
    <div className="w-full min-h-screen py-20 px-12 bg-gradient-to-b from-white to-blue-100 flex flex-col items-center">
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
                  filter: isActive ? "brightness(0.8)" : "brightness(0.4)",
                }}
              />

              {/* Vertical Title */}
              <div
                className={`absolute z-10 font-extrabold text-white transition-all duration-700 ease-in-out ${
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

              {/* Description on Hover */}
              {isActive && (
                <div className="relative z-20 p-4 text-white text-sm font-medium mt-auto bg-black/40 backdrop-blur-sm rounded-t-2xl">
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