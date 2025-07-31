import React from "react";

const OurAchievement = () => {
  const achievements = [
    "Achievement Name",
    "Achievement Name",
    "Achievement Name",
    "Achievement Name",
    "Achievement Name",
    "Achievement Name",
  ];

  return (
    <div className="py-24 px-8 flex flex-col items-center justify-center">
      <h2 className="text-[42px] font-bold text-center text-gray-800 mb-16 font-serif">
        Our Achievement
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-[1300px]">
        {achievements.map((item, index) => (
          <div
            key={index}
            className="bg-gray-300 rounded-2xl h-[250px] relative shadow-lg overflow-hidden group"
          >
            {/* Container isi */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 py-4 
                         transition-all duration-300 group-hover:justify-start group-hover:pt-6"
            >
              {/* Transisi judul achievement name */}
              <h3
                className="text-[26px] font-bold text-black mb-0 transition-all duration-300 
                           group-hover:mb-3 group-hover:self-center mt-[calc(25%-15px)] group-hover:mt-0"
              >
                {item}
              </h3>

              {/* Transisi keterangan atau isi */}
              <p
                className="text-[15px] text-gray-700 opacity-0 translate-y-8 
                           group-hover:opacity-100 group-hover:translate-y-0 
                           transition-all duration-500 ease-in-out"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurAchievement;