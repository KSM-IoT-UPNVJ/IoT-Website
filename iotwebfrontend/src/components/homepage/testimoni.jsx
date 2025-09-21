// src/components/homepage/testimoni.jsx
import React, { useEffect } from "react";

const Testimoni = () => {
  // Data penulis
  const author = {
    nama: "Naufalis Febrian",
    jabatan: "Kadept Engineer",
    foto: "/profile1.jpg",
  };

  // Saat di klik our program, halaman akan muncul dari atas
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen relative pt-13 pb-28 px-6 md:px-12 bg-transparent">
      <div className="w-[92%] max-w-[1300px] mx-auto">

        {/* Judul Halaman */}
        <h2 className="text-[60px] font-bold text-center text-gray-800 mb-8 font-optima">
          Studi <br /> Banding
        </h2>

        {/* Card Utama */}
        <article className="relative z-8 rounded-3xl bg-white/30 backdrop-blur-md border border-white/20 shadow-2xl overflow-hidden">
          <div className="p-10 md:p-10">
            
            {/* Header Author */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border-4 border-white shadow">
                <img
                  src={author.foto}
                  alt={author.nama}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm text-gray-600">
                  Written by{" "}
                  <span className="font-extrabold text-gray-900">
                    {author.nama}
                  </span>
                </p>
                <p className="text-xs text-gray-500">{author.jabatan}</p>
              </div>
            </div>

            {/* Kotak Foto Besar */}
            <div className="w-full rounded-md overflow-hidden mb-8">
              <div className="w-full h-[350px] md:h-[670px] bg-gray-200 border border-white/20 shadow-inner" />
            </div>

            {/* Konten Teks */}
            <div className="max-w-5xl mx-auto text-gray-800 text-justify">

              {/* Intro */}
              <p className="mb-8 text-base md:text-lg leading-relaxed">
                Kegiatan studi banding adalah sebuah aktivitas akademis sekaligus organisasi yang bertujuan untuk memberikan pengalaman belajar langsung 
                kepada anggotanya melalui kunjungan ke lembaga, komunitas, organisasi, maupun instansi lainnya. Kegiatan ini berfungsi sebagai alat penting 
                bagi KSM IoT untuk memperluas pandangan, meningkatkan pemahaman, dan menambah pengalaman dengan cara mengamati dan mempelajari bagaimana organisasi atau komunitas lainnya, 
                terutama yang berfokus pada teknologi dan Internet of Things, melaksanakan aktivitas, program kerja, serta manajemen internal mereka. Studi banding bukan hanya kunjungan resmi, 
                tetapi juga proses tukar informasi, berbagi pengalaman, dan menjalin hubungan baik yang dapat memberikan dampak positif untuk pengembangan organisasi dan individu di KSM IoT.
              </p>

              {/* Paragraf */}
              <p className="mb-8 text-base md:text-lg leading-relaxed">
                Dengan aktivitas ini, anggota KSM IoT mendapatkan kesempatan untuk memahami lebih dalam tentang sistem manajemen, pola pengelolaan, dan budaya organisasi yang diterapkan oleh pihak yang dikunjungi. 
                Ini bisa jadi sumber inspirasi dan acuan yang berharga untuk merancang dan meningkatkan kualitas program kerja, baik dalam aspek ilmu, penelitian, maupun kegiatan pengembangan komunitas di dalam KSM IoT. 
                Selain itu, studi perbandingan juga memiliki fungsi krusial dalam memperkuat jaringan luar. Melalui komunikasi dan hubungan yang baik dengan organisasi mahasiswa, komunitas teknologi, atau instansi terkait, 
                KSM IoT dapat menciptakan kesempatan kolaborasi dan kerja sama yang berharga untuk jangka waktu yang lama.
              </p>
              
              <p className="mb-8 text-base md:text-lg leading-relaxed">
                Bagi anggota, program studi banding juga memberikan keuntungan berupa peningkatan kemampuan diri serta dorongan dalam berorganisasi. 
                Melalui pengamatan langsung terhadap keberhasilan dan tantangan yang dihadapi oleh organisasi lain, anggota dapat mendapatkan wawasan praktis yang tidak hanya memperdalam pengetahuan teknis, tetapi juga memotivasi untuk berperan lebih aktif dalam pengembangan KSM IoT. 
                Dengan pengalaman ini, anggota menyadari bahwa kesuksesan suatu organisasi tidak hanya bergantung pada program kerja, tetapi juga oleh semangat kerjasama, inovasi, dan profesionalisme yang terintegrasi dalam setiap aktivitas.
              </p>
              
              <p className="mb-8 text-base md:text-lg leading-relaxed">
                Secara keseluruhan, program studi banding KSM Internet of Things merupakan agenda strategis yang dirancang untuk mendukung proses belajar, memperluas jaringan, serta memperkuat kualitas organisasi. 
                Kegiatan ini menjadi wujud nyata dari semangat KSM IoT untuk terus berkembang, terbuka terhadap perubahan, dan siap berkolaborasi dengan berbagai pihak guna menciptakan komunitas mahasiswa yang tidak hanya unggul dalam bidang akademik dan teknologi, tetapi juga adaptif, kreatif, dan inovatif dalam menghadapi tantangan masa depan.
              </p>

              {/* Footer Author */}
              <div className="mt-10 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-4 border-white shadow">
                  <img
                    src={author.foto}
                    alt={author.nama}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-lg">
                    {author.nama}
                  </p>
                  <p className="text-sm text-gray-500">{author.jabatan}</p>
                </div>
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

export default Testimoni;
