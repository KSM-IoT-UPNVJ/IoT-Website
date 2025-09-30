import React, { useEffect, useState } from "react";
import FadeIn from "../../../utils/fadeIn";

const LayoutProgram = ({program}) => {
  // Saat di klik our program, halaman akan muncul dari atas
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // untuk slider foto
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderImages = [
    "/OurProgram.jpg",
    "/aboutUs/bangFalis.webp",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === sliderImages.length - 1 ? 0 : prev + 1
      );
    }, 3000); // ganti foto tiap 3 detik
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen relative pt-13 pb-28 px-6 md:px-12 bg-transparent">
      <div className="w-[92%] max-w-[1300px] mx-auto">

        {/* Judul Halaman */}
        <FadeIn direction={"left"} delay={0.5}>
        <h2 className="text-[60px] font-bold text-center text-gray-800 mb-8 font-optima">
          {program.data.title}
        </h2>
        </FadeIn>

        {/* Card Utama */}
        <article className="relative z-8 rounded-3xl bg-white/30 backdrop-blur-md border border-white/20 shadow-2xl overflow-hidden">
          <div className="p-10 md:p-10">
            
            {/* Header Author */}
            <FadeIn direction={"up"} delay={0.3}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-4 border-white shadow">
                <img
                  src={program.data.foto2}
                  alt="Naufalis Febrian"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm text-gray-600">
                  Written by{" "}
                  <span className="font-extrabold text-gray-900">
                    {program.author.namaHeader}
                  </span>
                </p>
                <p className="text-xs text-gray-500">{program.author.jabatanHeader}</p>
              </div>
            </div>
            </FadeIn>

            {/* Kotak Foto Besar */}
            <FadeIn direction={"right"} delay={0.5}>
            <div className="w-full rounded-md overflow-hidden mb-8">
              <div className="w-full h-[350px] md:h-[670px] bg-gray-200 border border-white/20 shadow-inner" />
            </div>
            </FadeIn>

            {/* Konten Teks */}
            <div className="max-w-5xl mx-auto text-gray-800 text-justify">

              {/* Intro */}
              <FadeIn direction={"left"} delay={0.6}>
              <p className="mb-8 text-base md:text-lg leading-relaxed">
                {program.data.deskripsi1}
              </p>
              </FadeIn>

              {/* Paragraf */}
              <FadeIn direction={"right"} delay={0.6}>
              <p className="mb-8 text-base md:text-lg leading-relaxed">
                {program.data.deskripsi2}
              </p>
              </FadeIn>
              
              <FadeIn direction={"left"} delay={0.7}>
              <p className="mb-8 text-base md:text-lg leading-relaxed">
                {program.data.deskripsi3}
              </p>
              </FadeIn>

              <FadeIn direction={"left"} delay={0.9}>
              <div className="flex flex-col md:flex-row items-start mt-8">
                {/* Teks Review */}
                <div className="md:w-2/3 w-full pr-6">
                  <p className="text-base md:text-lg leading-relaxed text-gray-800">
                    {program.data.testimoni}
                  </p>
                </div>

                {/* Foto di kanan */}
                <div className="md:w-1/3 w-full flex justify-center mt-6 md:mt-0">
                  <img
                    src="/kolase.jpg"
                    alt="Foto Kolase"
                    className="rounded-lg shadow-lg w-64 h-48 object-cover"
                  />
                </div>
              </div>
              </FadeIn>

              {/* Footer Author */}
              <FadeIn direction={"up"} delay={0.6}>
              <div className="mt-5 mb-6 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-4 border-white shadow">
                  <img
                    src="/aboutUs/bangFalis.webp"
                    alt={program.author.namaFooter}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-lg">
                    {program.author.namaFooter}
                  </p>
                  <p className="text-sm text-gray-500">{program.author.jabatanFooter}</p>
                </div>
              </div>
              </FadeIn>
            </div> {/* tutup div max-w-5xl */}

            {/* ✅ Slider Foto Otomatis (sekarang keluar dari max-w-5xl) */}
            <div className="relative w-[calc(100%+5rem)] -ml-10 h-[350px] md:h-[670px] overflow-hidden -mb-10 rounded-b-none">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                  width: `${sliderImages.length * 100}%`,
                }}
              >
                {sliderImages.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Slide ${i}`}
                    className="w-full h-[350px] md:h-[670px] object-cover flex-shrink-0"
                  />
                ))}
              </div>
            </div>
          </div>
        </article>

        {/* Spacer Bawah */}
        <div className="h-28" />
      </div>
    </div>
  );
};

export default LayoutProgram;
