import React, { useEffect, useState } from "react";
import FadeIn from "../../utils/fadeIn";

const YouthIoT = () => {
  // Data penulis
  const author = {
    namaHeader: "Naufalis Febrian",
    jabatanHeader: "Kadept Engineer",
    namaFooter: "Derry Ariadi",
    jabatanFooter: "PO from URC",
  };

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
          Youth IoT
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
                  src="/aboutUs/bangFalis.webp"
                  alt="Naufalis Febrian"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm text-gray-600">
                  Written by{" "}
                  <span className="font-extrabold text-gray-900">
                    {author.namaHeader}
                  </span>
                </p>
                <p className="text-xs text-gray-500">{author.jabatanHeader}</p>
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
                Kegiatan studi banding adalah sebuah aktivitas akademis sekaligus organisasi yang bertujuan untuk memberikan pengalaman belajar langsung 
                kepada anggotanya melalui kunjungan ke lembaga, komunitas, organisasi, maupun instansi lainnya. Kegiatan ini berfungsi sebagai alat penting 
                bagi KSM IoT untuk memperluas pandangan, meningkatkan pemahaman, dan menambah pengalaman dengan cara mengamati dan mempelajari bagaimana organisasi atau komunitas lainnya, 
                terutama yang berfokus pada teknologi dan Internet of Things, melaksanakan aktivitas, program kerja, serta manajemen internal mereka. Studi banding bukan hanya kunjungan resmi, 
                tetapi juga proses tukar informasi, berbagi pengalaman, dan menjalin hubungan baik yang dapat memberikan dampak positif untuk pengembangan organisasi dan individu di KSM IoT.
              </p>
              </FadeIn>

              {/* Paragraf */}
              <FadeIn direction={"right"} delay={0.6}>
              <p className="mb-8 text-base md:text-lg leading-relaxed">
                Dengan aktivitas ini, anggota KSM IoT mendapatkan kesempatan untuk memahami lebih dalam tentang sistem manajemen, pola pengelolaan, dan budaya organisasi yang diterapkan oleh pihak yang dikunjungi. 
                Ini bisa jadi sumber inspirasi dan acuan yang berharga untuk merancang dan meningkatkan kualitas program kerja, baik dalam aspek ilmu, penelitian, maupun kegiatan pengembangan komunitas di dalam KSM IoT. 
                Selain itu, studi perbandingan juga memiliki fungsi krusial dalam memperkuat jaringan luar. Melalui komunikasi dan hubungan yang baik dengan organisasi mahasiswa, komunitas teknologi, atau instansi terkait, 
                KSM IoT dapat menciptakan kesempatan kolaborasi dan kerja sama yang berharga untuk jangka waktu yang lama.
              </p>
              </FadeIn>
              
              <FadeIn direction={"left"} delay={0.7}>
              <p className="mb-8 text-base md:text-lg leading-relaxed">
                Bagi anggota, program studi banding juga memberikan keuntungan berupa peningkatan kemampuan diri serta dorongan dalam berorganisasi. 
                Melalui pengamatan langsung terhadap keberhasilan dan tantangan yang dihadapi oleh organisasi lain, anggota dapat mendapatkan wawasan praktis yang tidak hanya memperdalam pengetahuan teknis, tetapi juga memotivasi untuk berperan lebih aktif dalam pengembangan KSM IoT. 
                Dengan pengalaman ini, anggota menyadari bahwa kesuksesan suatu organisasi tidak hanya bergantung pada program kerja, tetapi juga oleh semangat kerjasama, inovasi, dan profesionalisme yang terintegrasi dalam setiap aktivitas.
              </p>
              </FadeIn>
              
              <FadeIn direction={"right"} delay={0.8}>
              <p className="mb-8 text-base md:text-lg leading-relaxed">
                Secara keseluruhan, program studi banding KSM Internet of Things merupakan agenda strategis yang dirancang untuk mendukung proses belajar, memperluas jaringan, serta memperkuat kualitas organisasi. 
                Kegiatan ini menjadi wujud nyata dari semangat KSM IoT untuk terus berkembang, terbuka terhadap perubahan, dan siap berkolaborasi dengan berbagai pihak guna menciptakan komunitas mahasiswa yang tidak hanya unggul dalam bidang akademik dan teknologi, tetapi juga adaptif, kreatif, dan inovatif dalam menghadapi tantangan masa depan.
              </p>
              </FadeIn>

              <FadeIn direction={"left"} delay={0.9}>
              <div className="flex flex-col md:flex-row items-start mt-8">
                {/* Teks Review */}
                <div className="md:w-2/3 w-full pr-6">
                  <p className="text-base md:text-lg leading-relaxed text-gray-800">
                    “Gw sangat bahagia dan merasa terhormat atas kunjungan studi banding dari KSM loT UPNVJ. Kehadiran teman-teman membawa semangat baru dan menciptakan suasana hangat yang penuh kolaborasi serta diskusi bermanfaat. 
                    Pertukaran ide dan pengalaman sangat memperkaya wawasan kami. Semoga studi banding ini menjadi awal dari hubungan yang lebih erat dan kolaborasi jangka panjang. Kami berharap apa yang didapat bisa menjadi referensi 
                    positif bagi masing-masing organisasi. Mohon maaf bila ada kekurangan dalam penyambutan, dan sampai jumpa di kesempatan berikutnya. Semoga silaturahmi ini terus terjaga.”
                  </p>
                </div>

                {/* Foto di kanan */}
                <div className="md:w-1/3 w-full flex justify-center mt-6 md:mt-0">
                  <img
                    src="/OurProgram.jpg"
                    alt="Review Foto"
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
                    alt={author.namaFooter}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-lg">
                    {author.namaFooter}
                  </p>
                  <p className="text-sm text-gray-500">{author.jabatanFooter}</p>
                </div>
              </div>
              </FadeIn>
            </div> {/* ⬅️ tutup div max-w-5xl */}

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

export default YouthIoT;