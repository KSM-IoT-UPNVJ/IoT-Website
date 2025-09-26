import React, { useRef, useState, useEffect } from 'react';
import FadeIn from '../../../utils/fadeIn';
import { Link } from 'react-router-dom';

const OurProgram = () => {
  const scrollRef = useRef(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isFadingLeft, setIsFadingLeft] = useState(false);
  const [isFadingRight, setIsFadingRight] = useState(false);

  const [hovered, setHovered] = useState(null);

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

  // Dummy program data
  const programs = [
    { id: "studi-banding", title: "STUDI BANDING", image: "/stuban.webp", link: "/stuban" },
    { id: "youthiot",title: "YOUTH IOT 2025", image: "/OurProgram.jpg", link: "/youthiot" },
    { id: "sharing-with-sensor",title: "SHARING WITH SENIOR", image: "/OurProgram.jpg", link: "/sensor" },
    { id: "iotcheckpoint",title: "IOT CHECKPOINT", image: "/OurProgram.jpg", link: "/checkpoint" },
    { id: "program-name-5",title: "Program Name 5", image: "/OurProgram.jpg" },
  ];

  return (
    <div className="pt-10 pb-32 px-4 md:px-36 overflow-hidden bg-[#2E3A4B] select-none">
      <FadeIn direction={"up"} delay={0.3}>
        <h2 className="text-white text-[56px] font-extrabold text-center mb-14 font-optima">
          Our Program
        </h2>
      </FadeIn>

      <div className="relative">
        {/* Chevron Left */}
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

        {/* Scrollable Area */}
        <FadeIn direction={"up"} delay={0.6}>
          <div
            ref={scrollRef}
            className="flex space-x-14 overflow-x-auto scroll-smooth px-20 scrollbar-hide"
          >
            {programs.map((program, index) => (
              <div
                key={index}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                className="relative min-w-[420px] h-[300px] bg-gray-300 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl overflow-hidden transition-all duration-500"
              >
                {/* Background Image */}
                <img
                  src={program.image}
                  alt={program.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Title */}
                <h3
                  className={`font-black text-white transition-all duration-500 z-10 ${
                    hovered === index
                      ? "text-[28px] translate-y-[-97px]"
                      : "text-[36px] translate-y-0"
                  }`}
                >
                  {program.title}
                </h3>

                {/* Description + Button */}
                <div
                  className={`absolute top-[77px] left-1/2 -translate-x-1/2 w-full px-9 text-center transition-all duration-500 z-10 ${
                    hovered === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  <p className="text-gray-200 mb-4 text-m mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <Link
                    to={`/program/${program.id}`}
                    className="bg-blue-700 hover:bg-yellow-400 text-white hover:text-black px-6 py-2 rounded-full transition-colors duration-300 inline-block"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Chevron Right */}
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
