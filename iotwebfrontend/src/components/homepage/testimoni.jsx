// src/components/homepage/testimoni.jsx
import React from "react";

const Testimoni = () => {
  const author = {
    nama: "Naufal Lis",
    jabatan: "Kadept Engineer",
    foto: "/profile1.jpg",
  };

  const introParagraph = `Adalah organisasi mahasiswa di bawah naungan Fakultas Teknik, UPN Veteran Jakarta. Didirikan pada tahun 2023 oleh mahasiswa Teknik Elektro 2020 & 2021, KSM IoT berfungsi sebagai wadah untuk menghimpun, mengedukasi, dan melatih mahasiswa yang memiliki minat dan bakat di bidang teknologi Internet of Things. Seiring dengan pesatnya perkembangan teknologi dan transformasi digital di era revolusi industri 4.0, KSM IoT bertujuan untuk mempersiapkan mahasiswa agar kompetitif dan mampu menjawab tingginya permintaan industri terhadap keahlian di bidang otomatisasi, machine learning, dan artificial intelligence.`;
  const orientasiParagraph = `Organisasi ini berorientasi pada riset keilmuan teknologi Internet of Things dan berkomitmen untuk mencetak mahasiswa yang tidak hanya berprestasi dan profesional, tetapi juga berwawasan luas dan memiliki rasa solidaritas serta kepedulian sosial. Melalui berbagai program kerja dan proyek inovasi, setiap anggota diasah untuk menjadi individu yang kreatif, berdaya saing, serta memiliki soft skill dan hard skill yang solid.`;

  return (
    <div className="min-h-screen relative pt-28 pb-28 px-6 md:px-12 bg-transparent">
      <div className="w-[92%] max-w-[1300px] mx-auto">
        {/* CARD UTAMA */}
        <article className="relative z-8 rounded-3xl bg-white/30 backdrop-blur-md border border-white/20 shadow-2xl overflow-hidden">
          <div className="p-10 md:p-10">
            
            {/* HEADER */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-4 border-white shadow">
                <img src={author.foto} alt={author.nama} className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-sm text-gray-600">
                  Written by <span className="font-extrabold text-gray-900">{author.nama}</span>
                </p>
                <p className="text-xs text-gray-500">{author.jabatan}</p>
              </div>
            </div>

            {/* KOTAK FOTO BESAR */}
            <div className="w-full rounded-md overflow-hidden mb-8">
              <div className="w-full h-[350px] md:h-[670px] bg-gray-200 border border-white/20 shadow-inner" />
            </div>

            {/* KONTEN TEKS */}
            <div className="w-full text-justify text-gray-800">

              {/* Intro */}
              <p className="mb-8 text-base md:text-lg leading-relaxed">
                {introParagraph}
              </p>

              {/* Paragraf orientasi diulang 3x */}
              <p className="mb-8 text-base md:text-lg leading-relaxed">
                {orientasiParagraph}
              </p>
              <p className="mb-8 text-base md:text-lg leading-relaxed">
                {orientasiParagraph}
              </p>
              <p className="mb-8 text-base md:text-lg leading-relaxed">
                {orientasiParagraph}
              </p>

              <div className="mt-10 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-4 border-white shadow">
                  <img src={author.foto} alt={author.nama} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-lg">{author.nama}</p>
                  <p className="text-sm text-gray-500">{author.jabatan}</p>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Spacer bawah */}
        <div className="h-28" />
      </div>
    </div>
  );
};

export default Testimoni;
