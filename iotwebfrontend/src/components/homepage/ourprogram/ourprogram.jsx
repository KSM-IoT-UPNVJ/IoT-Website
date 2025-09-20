import React, { useRef, useState, useEffect } from 'react';
import FadeIn from '../../../utils/fadeIn';
import ProgramCard from '../Card';

const OurProgram = () => {
  const scrollRef = useRef(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isFadingLeft, setIsFadingLeft] = useState(false);
  const [isFadingRight, setIsFadingRight] = useState(false);

  // Remove hovered state as it's now handled by ProgramCard

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
    {
      id: 1,
      title: 'Robotics Workshop',
      description:
        'Learn the fundamentals of robotics and build your own robot from scratch. Perfect for beginners and intermediate learners.',
    },
    {
      id: 2,
      title: 'AI & Machine Learning',
      description:
        'Dive deep into artificial intelligence and machine learning concepts with hands-on projects and real-world applications.',
    },
    {
      id: 3,
      title: 'Web Development',
      description:
        'Master modern web development technologies including React, Node.js, and database management.',
    },
    {
      id: 4,
      title: 'Mobile App Development',
      description:
        'Create cross-platform mobile applications using React Native and Flutter frameworks.',
    },
    {
      id: 5,
      title: 'Data Science',
      description:
        'Analyze data and extract meaningful insights using Python, R, and advanced statistical methods.',
    },
  ];

  const handleProgramClick = (program) => {
    console.log('Program clicked:', program);
    // Add your program click logic here
  };

  return (
    <div className=" pt-10 pb-32 px-4 md:px-36 overflow-hidden bg-[#2E3A4B]">
      <FadeIn direction={'up'} delay={0.3}>
        <h2 className="text-white text-[56px] font-extrabold text-center mb-14 font-optima">
          Our Program
        </h2>
      </FadeIn>

      <div className="relative">
        {/* Chevron Kiri */}
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

        {/* Area Scroll kanan dan Kiri */}
        <FadeIn direction={'up'} delay={0.6}>
          <div
            ref={scrollRef}
            className="flex space-x-14 overflow-x-auto scroll-smooth px-20 scrollbar-hide"
          >
            {programs.map((program, index) => (
              <ProgramCard
                key={program.id}
                title={program.title}
                description={program.description}
                index={index}
                onButtonClick={handleProgramClick}
              />
            ))}
          </div>
        </FadeIn>

        {/* Chevron Kanan */}
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
