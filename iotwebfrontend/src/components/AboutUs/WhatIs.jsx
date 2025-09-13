import FadeIn from "../../utils/fadeIn";

const WhatIs = () => {
  return (
    <section
      className="py-16 px-4"
      style={{
        fontFamily: "var(--font-poppins)",
        color: "var(--color-biru-tua)",
      }}
    >
      <FadeIn direction={"down"} delay={0.4}>
        <h2
          className="text-center text-5xl font-semibold mb-16"
          style={{ color: "var(--color-biru-tua)", fontFamily: "'OptimaNova'" }}
        >
          What Is?
        </h2>
      </FadeIn>
      <FadeIn direction={"right"} delay={0.8}>
        <div className="flex flex-col xl:flex-row items-start justify-center gap-10 md:gap-20 px-4 md:px-20">
          {/* Gambar Placeholder */}

          <div className="w-full xl:w-1/3 mt-10 flex justify-center">
            <img
              src="/aboutUs/IoTFull.webp"
              alt="Foto kabinet IoT"
              className="rounded-2xl object-cover h-[340px] w-full max-w-[400px]"
            />
          </div>
          {/* Teks */}
          <div className="w-full xl:max-w-[700px] text-justify">
            <h1
              className="text-[42px] leading-[48px]"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              <span
                className="font-bold text-[69px]"
                style={{ color: "var(--color-biru-tua)" }}
              >
                KSM{" "}
              </span>
              <span className="font-normal">Internet Of Things</span>
            </h1>

            <p className="text-[16.5px] leading-6 mb-5">
              Adalah organisasi mahasiswa di bawah naungan Fakultas Teknik, UPN
              Veteran Jakarta. Didirikan pada tahun 2023 oleh mahasiswa Teknik
              Elektro 2020 & 2021, KSM IoT berfungsi sebagai wadah untuk
              menghimpun, mengedukasi, dan melatih mahasiswa yang memiliki minat
              dan bakat di bidang teknologi Internet of Things. Seiring dengan
              pesatnya perkembangan teknologi dan transformasi digital di era
              revolusi industri 4.0, KSM IoT bertujuan untuk mempersiapkan
              mahasiswa agar kompetitif dan mampu menjawab tingginya permintaan
              industri terhadap keahlian di bidang otomatisasi, machine
              learning, dan artificial intelligence.
            </p>

            <p className="text-[16.5px] leading-6">
              Organisasi ini berorientasi pada riset keilmuan teknologi Internet
              of Things dan berkomitmen untuk mencetak mahasiswa yang tidak
              hanya berprestasi dan profesional, tetapi juga berwawasan luas dan
              memiliki rasa solidaritas serta kepedulian sosial. Melalui
              berbagai program kerja dan proyek inovasi, setiap anggota diasah
              untuk menjadi individu yang kreatif, berdaya saing, serta memiliki
              soft skill dan hard skill yang solid.
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default WhatIs;
