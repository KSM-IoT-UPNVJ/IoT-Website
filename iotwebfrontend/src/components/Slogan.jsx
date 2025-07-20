import React from 'react';

const Slogan = () => {
  return (
    <section className="py-16 px-4 bg-white" style={{ fontFamily: "var(--font-poppins)", color: "var(--color-biru-tua)" }}>
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-8">
        <img src="slogan.png" alt="slogan"className="w-[560px] h-auto" />

        <p className="text-xs md:text-lg text-center max-w-3xl">
          Slogan ini menjadi fondasi utama dan cerminan semangat KSM IoT tahun 2025 yang memiliki dua pilar utama:
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="text-3xl font-bold mb-2" style={{ color: "var(--color-biru-tua)" }}>
              Innovating Today
            </h3>
            <p className="text-base md:text-lg leading-relaxed">
              Menanamkan keberanian untuk bermimpi besar, berani mencoba, dan tak henti <br />
              menciptakan solusi cerdas di bidang teknologi Internet of Things.
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-2" style={{ color: "var(--color-biru-tua)" }}>
              Champion Tomorrow
            </h3>
            <p className="text-base md:text-lg leading-relaxed">
              Menegaskan tujuan besar untuk melahirkan individu yang menjadi juara, baik <br />
              dalam kompetisi teknologi maupun sebagai pribadi yang bermanfaat dan menjadi <br />
              penggerak perubahan di era teknologi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slogan;