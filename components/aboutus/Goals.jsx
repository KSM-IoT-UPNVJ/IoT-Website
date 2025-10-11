'use client';

import { useState } from 'react';
import FadeIn from '../../utils/fadeIn';
import Image from 'next/image';

export default function VisiMisiSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const boxes = [
    {
      title: 'Pengembangan Anggota',
      content:
        'Mengembangkan potensi anggota dalam bidang Internet of Things melalui edukasi soft skill dan hard skill, serta menyediakan platform untuk mewujudkan ide-ide inovatif.',
      icon: '/aboutUs/strategy_1167089.webp',
    },
    {
      title: 'Prestasi dan Kompetisi',
      content:
        'Mendorong partisipasi aktif dan meraih prestasi di berbagai kompetisi IoT tingkat regional, nasional, dan internasional, termasuk GEMASTIK, dan Kontes Kapal Indonesia (KKI).',
      icon: '/aboutUs/prize.png',
    },
    {
      title: 'Kontribusi bagi Universitas',
      content:
        'Memberikan kontribusi nyata bagi universitas dengan meningkatkan akreditasi melalui prestasi, menjadi daya tarik bagi calon mahasiswa, dan mendukung proyek pengembangan IoT internal.',
      icon: '/aboutUs/globe.png',
    },
    {
      title: 'Kolaborasi dan Relasi',
      content:
        'Membangun kolaborasi strategis dengan organisasi lain dan industri untuk mengharumkan nama universitas melalui prestasi dan proyek lintas disiplin ilmu.',
      icon: '/aboutUs/mortarboard_1940611.webp',
    },
  ];

  const handleClick = (index) => {
    // Toggle hanya pada layar kecil/tablet (agar perilaku tetap hover pada desktop)
    if (window.innerWidth < 1025) {
      setActiveIndex((prev) => (prev === index ? null : index));
    }
  };

  return (
    <div>
      <FadeIn direction={'left'} delay={1.2}>
        <h1
          className="text-4xl md:text-5xl lg:text-6xl mt-20 font-semibold text-[#2C3E50] text-center select-none"
          style={{ fontFamily: "'OptimaNova'" }}
        >
          Our Goals
        </h1>
      </FadeIn>

      <FadeIn direction={'up'} delay={1.6}>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-2 sm:gap-8 xl:gap-30 py-12 px-2 sm:px-11 xl:px-18 max-w-screen-xl mx-auto">
          {boxes.map((box, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                onClick={() => handleClick(index)}
                /* Card: default glass; on hover/active still glass but slightly stronger blur */
                className={`group relative rounded-2xl p-6 sm:p-12 h-[230px] sm:h-[360px] lg:h-[380px] overflow-hidden cursor-pointer transition-all duration-500 
                  bg-black/30 backdrop-blur-md border border-white/10 shadow-sm
                  hover:bg-black/40 hover:backdrop-blur-lg`}
              >
                {/* Decorative soft highlight (ke kiri/kanan) */}
                <div
                  aria-hidden
                  className="absolute -inset-4 rounded-2xl pointer-events-none opacity-30"
                  style={{
                    background:
                      'radial-gradient(600px 200px at 10% 20%, rgba(59,130,246,0.10), transparent 20%), radial-gradient(500px 180px at 90% 80%, rgba(96,165,250,0.06), transparent 20%)',
                    mixBlendMode: 'screen',
                  }}
                />

                {/* ICON tetap ada, cuma dikasih fade, tapi tidak hidden */}
                <Image
                  src={box.icon}
                  alt="Icon"
                  width={120}
                  height={120}
                  className={`w-23 h-24 sm:w-44 sm:h-45 mx-auto mb-3 sm:mb-4 transition-all duration-400 z-10 select-none
    ${
      isActive
        ? 'opacity-0 scale-90'
        : 'opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-90'
    }`}
                />

                {/* Judul: transform hanya naik saat hover/aktif */}
                <h2
                  className={`absolute left-4 right-4 mx-auto text-center font-extrabold transition-transform duration-500 z-20 select-none
    ${
      isActive
        ? "-translate-y-29 sm:-translate-y-53 text-sm sm:text-2xl md:text-2xl lg:text-2xl"
        : "translate-y-0 text-[16px] sm:text-2xl md:text-2xl lg:text-4xl"
    }
    group-hover:-translate-y-53
  `}
                  style={{ lineHeight: '1.05' }}
                >
                  {box.title.split(' ')[0]}
                  <br />
                  {box.title.split(' ').slice(1).join(' ')}
                </h2>

                {/* Konten teks */}
                <div
                  className={`absolute inset-0 px-2 sm:px-6 lg:px-7 pt-13 sm:pt-30 flex items-start justify-center text-center transition-all duration-500 z-10
                    ${
                      isActive
                        ? 'opacity-100 pointer-events-auto'
                        : 'opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto'
                    }
                  `}
                >
                  <p className="text-xs sm:text-sm lg:text-xl leading-relaxed text-[#1f2937] select-none">
                    {box.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </FadeIn>
    </div>
  );
}
