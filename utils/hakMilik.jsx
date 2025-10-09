import React from "react";

export default function HakMilik({
  people = [],
  title,
  height,
  width,
  onClose,
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center backdrop-blur-md bg-black/30 overflow-hidden">
      <section
        className="relative mt-10 bg-white/40 backdrop-blur-lg rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
        style={{ height, width, maxWidth: "90%", maxHeight: "90%" }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:cursor-pointer hover:text-gray-900 text-2xl font-bold select-none"
        >
          ✕
        </button>

        <h2 className="flex items-center justify-center font-bold text-[30px] md:text-[40px] text-[var(--color-biru-tua)] text-center mx-5 mt-10 mb-5 select-none">
          {title}
        </h2>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto p-5 pb-30 md:pb-15
             border border-gray-200 shadow-md bg-white/30 backdrop-blur-md 
             rounded-t-xl overflow-y-auto scrollbar-hide"
          style={{
            maxHeight: "80vh",
            scrollBehavior: "smooth",
          }}
        >
          {people.map((p, i) => {
            const isLeft = i % 2 === 0;

            // Check if the person is "empty"
            const isEmpty = !p.name && !p.title && !p.image;

            return (
              <div
                key={i}
                className={`flex flex-col items-center gap-4 md:gap-6 ${
                  isLeft ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                {isEmpty ? (
                  // invisible placeholder to take space
                  <div className="w-36 h-36 md:w-36 md:h-36"></div>
                ) : (
                  <>
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
                  </>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
