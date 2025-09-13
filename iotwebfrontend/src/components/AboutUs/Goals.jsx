import { useState } from "react";
import FadeIn from "../../utils/fadeIn";

export default function VisiMisiSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const boxes = [
    {
      title: "Pengembangan Anggota",
      content:
        "Mengembangkan potensi anggota dalam bidang Internet of Things melalui edukasi soft skill dan hard skill, serta menyediakan platform untuk mewujudkan ide-ide inovatif.",
    },
    {
      title: "Prestasi dan Kompetisi",
      content:
        "Mendorong partisipasi aktif dan meraih prestasi di berbagai kompetisi IoT tingkat regional, nasional, dan internasional, termasuk GEMASTIK, dan Kontes Kapal Indonesia (KKI).",
    },
    {
      title: "Kontribusi bagi Universitas",
      content:
        "Memberikan kontribusi nyata bagi universitas dengan meningkatkan akreditasi melalui prestasi, menjadi daya tarik bagi calon mahasiswa, dan mendukung proyek pengembangan loT internal.",
    },
    {
      title: "Kolaborasi dan Relasi",
      content:
        "Membangun kolaborasi strategis dengan organisasi lain dan industri untuk mengharumkan nama universitas melalui prestasi dan proyek lintas disiplin ilmu.",
    },
  ];

  const handleClick = (index) => {
    if (window.innerWidth < 1025) {
      // Hanya aktif di tablet & HP
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    }
  };

  return (
    <div className="">
      {/* Judul */}
      <FadeIn direction={"left"} delay={1.2}>
        <h1
          className="text-4xl md:text-5xl lg:text-6xl mt-30 font-semibold text-[#2C3E50] text-center"
          style={{ fontFamily: "'OptimaNova'" }}
        >
          Our Goals
        </h1>
      </FadeIn>

      {/* Grid Box */}
      <FadeIn direction={"up"} delay={1.6}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-x-26  xl:gap-y-24 py-28 px-8 sm:px-6 md:px-10 xl:px-30 w-full max-w-screen-xl mx-auto">
          {boxes.map((box, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                onClick={() => handleClick(index)}
                className={`group relative bg-[#2C3E50] text-white rounded-2xl p-6 sm:p-8 lg:p-10 h-[340px] sm:h-[360px] lg:h-[380px] overflow-hidden transition-all duration-500 ease-in-out
                  ${isActive ? "bg-gray-200 text-black border-8 border-[#2C3E50]" : ""}
                  hover:bg-gray-200 hover:text-black hover:border-8 hover:border-[#2C3E50]`}
              >
                {/* Judul */}
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out z-20 
                    ${isActive ? "-translate-y-28" : ""}
                    group-hover:-translate-y-28`}
                >
                  <h2
                    className={`text-4xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-center leading-tight transition-all duration-500 
                      ${isActive ? "text-2xl lg:text-3xl text-black" : "group-hover:text-xl lg:group-hover:text-4xl group-hover:text-black"}`}
                  >
                    {box.title.split(" ").slice(0, 2).join(" ")}
                    <br />
                    {box.title.split(" ").slice(2).join(" ")}
                  </h2>
                </div>

                {/* Konten */}
                <div
                  className={`absolute inset-0 px-4 sm:px-6 pt-26 flex items-start justify-center text-center transition-opacity duration-500 z-10
                    ${(isActive || window.innerWidth >= 1024) ? "opacity-100" : "opacity-0"} 
                    group-hover:opacity-100`}
                >
                  <p className="text-base sm:text-xl md:text-lg lg:text-xl lg:mt-6 leading-relaxed font-medium text-gray-700">
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
