import React from "react";

export default function HakMilik({ people = [], title, height, width }) {
  return (
    <section
      className="overflow-y-auto mt-5"
      style={{ height, width }}
    >
      <h2 className="flex items-center justify-center font-bold text-[50px] text-[var(--color-biru-tua)] text-center mx-5 mt-10 mb-5 select-none">
        {title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto p-5 border border-gray-200 shadow-md bg-white/30 backdrop-blur-md rounded-xl">
        {people.map((p, i) => {
          const isLeft = i % 2 === 0;
          return (
            <div
              key={i}
              className={`flex flex-col items-center gap-4 md:gap-6 ${
                isLeft ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              {/* image */}
              <img
                src={p.image}
                alt={p.name}
                draggable="false"
                className="w-28 h-28 md:w-36 md:h-36 object-cover rounded-lg shadow-sm"
              />

              {/* text */}
              <div
                className={`w-full ${
                  isLeft ? "md:text-right" : "md:text-left"
                }`}
              >
                <h3 className="text-lg md:text-xl font-semibold text-center">
                  {p.name}
                </h3>
                <p className="text-sm md:text-base text-gray-600 text-center">
                  {p.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
