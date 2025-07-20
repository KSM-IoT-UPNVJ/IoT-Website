export default function VisiMisiSection() {
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
      title: "Kolaborasi dalam Relasi",
      content:
        "Membangun kolaborasi strategis dengan organisasi lain dan industri untuk mengharumkan nama universitas melalui prestasi dan proyek lintas disiplin ilmu.",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-white to-blue-200 flex items-center justify-center px-10 py-28">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-52 gap-y-24 max-w-[1100px] w-full">
        {boxes.map((box, index) => (
          <div
            key={index}
            className="group relative bg-[#2C3E50] text-white rounded-2xl p-10 h-[360px] overflow-hidden transition-all duration-500 ease-in-out hover:bg-gray-200 hover:text-black hover:border-8 hover:border-[#2C3E50]"
          >
            {/* Judul → naik dan mengecil sedikit */}
            <div className="absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out group-hover:translate-y-[-7.5rem] z-20">
              <h2 className="text-[2.6rem] font-extrabold text-center transition-all duration-500 group-hover:text-[2.1rem] group-hover:text-black leading-tight">
                {box.title.split(" ").slice(0, 2).join(" ")}<br />
                {box.title.split(" ").slice(2).join(" ")}
              </h2>
            </div>

            {/* Teks panjang → lebih kecil dan tetap naik */}
            <div className="absolute inset-0 px-8 pt-24 flex items-start justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75 z-10">
              <p className="text-[1.3rem] leading-relaxed font-medium text-gray-700">
                {box.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
