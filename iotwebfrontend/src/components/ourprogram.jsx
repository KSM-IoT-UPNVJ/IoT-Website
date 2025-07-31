import React, { useRef, useState, useEffect } from 'react';

const OurProgram = () => {
  const scrollRef = useRef(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isFadingLeft, setIsFadingLeft] = useState(false);
  const [isFadingRight, setIsFadingRight] = useState(false);

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
    "Program Name 1",
    "Program Name 2",
    "Program Name 3",
    "Program Name 4",
    "Program Name 5",
  ];

  return (
    <div className=" pt-10 pb-32 px-4 md:px-36 overflow-hidden">
      <h2 className="text-white text-[56px] font-extrabold text-center mb-14">Our Program</h2>

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
              className="min-w-[420px] h-[300px] bg-gray-300 rounded-2xl flex items-center justify-center text-[36px] font-black text-black flex-shrink-0 shadow-xl"
            >
              {title}
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
