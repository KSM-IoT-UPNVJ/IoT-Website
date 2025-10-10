import React, { useRef, useState, useEffect, useMemo } from 'react';
import FadeIn from '../../../utils/fadeIn';
import Card from '../../shared/Card';
import ourProgramData from './ourProgramData.json';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const OurProgram = () => {
  const scrollRef = useRef(null);
  const router = useRouter();

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

  const programs = useMemo(
    () =>
      Object.entries(ourProgramData).map(([slug, program]) => {
        const data = program?.data ?? {};
        const title = data.title ?? slug;
        return {
          id: slug,
          slug,
          title: title.toUpperCase(),
          description: data.frontText ?? '',
          image: data.fotoHeader ?? data.fotoKolase ?? '',
        };
      }),
    [],
  );

  return (
    <div className=" pt-10 pb-24 sm:pb-28 md:pb-32 px-4 sm:px-8 md:px-12 lg:px-36 overflow-hidden bg-[#2E3A4B]">
      <FadeIn direction={'up'} delay={0.3}>
        <h2 className="text-white text-3xl sm:text-4xl md:text-[56px] font-extrabold text-center mb-10 sm:mb-12 md:mb-14 font-optima">
          Our Program
        </h2>
      </FadeIn>

      <div className="relative">
        {/* Chevron Kiri */}
        <button
          onClick={scrollLeft}
          className="hidden md:block absolute left-[-4.7rem] top-1/2 -translate-y-1/2 z-20 p-2 bg-transparent hover:scale-110 transition"
          style={{
            opacity: isFadingLeft ? 0.1 : canScrollLeft ? 0.4 : 0.2,
            pointerEvents: canScrollLeft ? 'auto' : 'none',
            transition: 'opacity 0.3s ease',
          }}
        >
          <Image
            src="/Chevron_left.png"
            width={64}
            height={64}
            alt="left"
            className="w-16 h-16"
          />
        </button>

        {/* Area Scroll kanan dan Kiri */}
        <FadeIn direction={'up'} delay={0.6}>
          <div
            ref={scrollRef}
            className="flex space-x-5 sm:space-x-10 md:space-x-14 overflow-x-auto scroll-smooth px-4 sm:px-10 md:px-20 scrollbar-hide"
          >
            {programs.map((program) => (
              <Card
                key={program.id}
                title={program.title}
                description={program.description}
                backgroundImage={program.image}
                href={`/program/${program.slug}`}
              />
            ))}
          </div>
        </FadeIn>

        {/* Chevron Kanan */}
        <button
          onClick={scrollRight}
          className="hidden md:block absolute right-[-4.7rem] top-1/2 -translate-y-1/2 z-20 p-2 bg-transparent hover:scale-110 transition"
          style={{
            opacity: isFadingRight ? 0.1 : canScrollRight ? 0.4 : 0.2,
            pointerEvents: canScrollRight ? 'auto' : 'none',
            transition: 'opacity 0.3s ease',
          }}
        >
          <Image src="/Chevron_right.png" width={64} height={64} alt="right" />
        </button>
      </div>
    </div>
  );
};

export default OurProgram;
