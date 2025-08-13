import React, { useRef, useState, useEffect } from 'react';

const OurProgram = () => {
  const scrollRef = useRef(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isFadingLeft, setIsFadingLeft] = useState(false);
  const [isFadingRight, setIsFadingRight] = useState(false);

  const [hovered, setHovered] = useState(null); // state untuk hover

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  const scrollLeft = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: -500, behavior: 'smooth' });
    setIsFadingLeft(true);
    setTimeout(() => setIsFadingLeft(false), 300);
  };

  const scrollRight = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: 500, behavior: 'smooth' });
    setIsFadingRight(true);
    setTimeout(() => setIsFadingRight(false), 300);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    checkScroll();
    el.addEventListener('scroll', checkScroll);
    return () => el.removeEventListener('scroll', checkScroll);
  }, []);

  const programs = [
    "Program Name",
    "Program Name",
    "Program Name",
    "Program Name",
    "Program Name",
  ];

  return (
    <div className=" pt-10 pb-32 px-4 md:px-36 overflow-hidden bg-[#2E3A4B]">
      <h2 className="text-white text-[56px] font-extrabold text-center mb-14 font-optima">Our Program</h2>

      <div className="relative">
        {/* Chevron Kiri */}
        <button
          onClick={scrollLeft}
          className="absolute left-[-4.7rem] top-1/2 -translate-y-1/2 z-20 p-2 bg-transparent hover:scale-110 transition"
          style={{
            opacity: isFadingLeft ? 0.1 : canScrollLeft ? 0.4 : 0.2,
            pointerEvents: canScrollLeft ? 'auto' : 'none',
            transition: 'opacity 0.3s ease'
          }}
        >
          <img src="/Chevron_left.png" alt="left" className="w-16 h-16" />
        </button>

        {/* Area Scroll kanan dan Kiri */}
        <div
          ref={scrollRef}
          className="flex space-x-14 overflow-x-auto scroll-smooth px-20 scrollbar-hide"
        >
          {programs.map((title, index) => (
            <div
              key={index}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className="relative min-w-[420px] h-[300px] bg-gray-300 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl overflow-hidden transition-all duration-500"
            >
              {/* Judul */}
              <h3
                className={`font-black text-black transition-all duration-500 z-10 ${
                  hovered === index
                    ? "text-[28px] translate-y-[-97px]"
                    : "text-[36px] translate-y-0"
                }`}
              >
                {title}
              </h3>

              {/* Deskripsi + Tombol */}
              <div
                className={`absolute top-[77px] left-1/2 -translate-x-1/2 w-full px-9 text-center transition-all duration-500 ${
                  hovered === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <p className="text-gray-700 mb-4 text-m mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button className="bg-blue-700 hover:bg-yellow-400 text-white hover:text-black px-6 py-2 rounded-full transition-colors duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Chevron Kanan */}
        <button
          onClick={scrollRight}
          className="absolute right-[-4.7rem] top-1/2 -translate-y-1/2 z-20 p-2 bg-transparent hover:scale-110 transition"
          style={{
            opacity: isFadingRight ? 0.1 : canScrollRight ? 0.4 : 0.2,
            pointerEvents: canScrollRight ? 'auto' : 'none',
            transition: 'opacity 0.3s ease'
          }}
        >
          <img src="/Chevron_right.png" alt="right" className="w-16 h-16" />
        </button>
      </div>
    </div>
  );
};

export default OurProgram;
