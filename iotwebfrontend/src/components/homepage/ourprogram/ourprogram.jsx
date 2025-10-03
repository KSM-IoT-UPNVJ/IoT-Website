import React, { useRef, useState, useEffect } from 'react';
import FadeIn from '../../../utils/fadeIn';
import ourProgramData from './ourProgramData.json';
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
    {
      id: 'studi-banding',
      title: 'STUDI BANDING',
      image: '/stuban.webp',
      link: '/stuban',
    },
    {
      id: 'youthiot',
      title: 'YOUTH IOT 2025',
      image: '/OurProgram/foto_youthiot1.webp',
      link: '/youthiot',
    },
    {
      id: 'iotcheckpoint',
      title: 'IOT CHECKPOINT',
      image: '/OurProgram/foto_checkpoint.webp',
      link: '/checkpoint',
    },
    {
      id: 'sharing-with-sensor',
      title: 'SHARING WITH SENIOR',
      image: '/OurProgram/foto_sensor.webp',
      link: '/sensor',
    },
    {
      id: 'pengabdian-masyarakat1',
      title: 'PENGABDIAN MASYARAKAT 1',
      image: '/OurProgram/foto_pengmas1.webp',
      link: '/pengabdian1',
    },
    {
      id: 'pengabdian-masyarakat2',
      title: 'PENGABDIAN MASYARAKAT 2',
      image: '/OurProgram/foto_pengmas2.webp',
      link: '/pengabdian2',
    },
  ];

  return (
    <div className="pt-10 pb-32 px-4 md:px-36 overflow-hidden bg-[#2E3A4B] select-none">
      <FadeIn direction={'up'} delay={0.3}>
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
            transition: 'opacity 0.3s ease',
          }}
        >
          <img src="/Chevron_left.png" alt="left" className="w-16 h-16" />
        </button>

        {/* Scrollable Area */}
        <FadeIn direction={'up'} delay={0.6}>
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
                  className={`font-black text-white text-center leading-tight break-words whitespace-normal max-w-[90%] mx-auto transition-transform duration-500 ease-in-out z-10 ${
                    hovered === index
                      ? 'text-[24px] translate-y-[-97px]'
                      : 'text-[27px] translate-y-0'
                  }`}
                >
                  {program.title}
                </h3>

                {/* Description + Button */}
                <div
                  className={`absolute top-[57px] left-1/2 -translate-x-1/2 w-full px-6 text-center transition-all duration-500 z-10 ${
                    hovered === index
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-4'
                  }`}
                >
                  <div className="flex flex-col items-center gap-y-3 px-2">
                    <p className="text-gray-200 text-sm md:text-base leading-snug break-words whitespace-normal max-w-[90%] mx-auto mt-4">
                      {ourProgramData[program.id]?.data?.frontText || ''}
                    </p>
                    <Link
                      to={`/program/${program.id}`}
                      className="bg-blue-700 hover:bg-yellow-400 text-white hover:text-black px-6 py-2 rounded-full transition-colors duration-300 inline-block"
                    >
                      Learn More
                    </Link>
                  </div>
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
            transition: 'opacity 0.3s ease',
          }}
        >
          <img src="/Chevron_right.png" alt="right" className="w-16 h-16" />
        </button>
      </div>
    </div>
  );
};

export default OurProgram;
