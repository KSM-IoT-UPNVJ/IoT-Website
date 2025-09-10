import React from 'react';
import FadeIn from '../../utils/fadeIn';

const VisionMission = () => {
  return (
    <div className="w-full min-h-screen px-6 md:px-20 flex flex-col md:flex-row items-center justify-center gap-10">
      {/* Kiri: Visi & Misi */}
      <div className="md:w-1/2 text-left">
      <FadeIn direction="up" delay={0.4}>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 font-optima">Our Vision</h2>
      </FadeIn>
      <FadeIn direction="up" delay={0.5}>
        <p className="text-gray-700 mb-10 leading-relaxed pl-3">
          Menjadikan KSM Internet of Things (IoT) sebagai wadah pengembangan minat dan bakat mahasiswa
          dalam bidang Internet of Things untuk menghasilkan mahasiswa berprestasi serta berkualitas.
        </p>
      </FadeIn>

        <FadeIn direction="up" delay={0.5}>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4 font-optima">Our Mission</h2>
        <ol className="list-decimal list-outside pl-7 space-y-3 text-gray-700 leading-relaxed">
          <li>Melakukan penelitian dan mengimplementasikan ilmu-ilmu yang berkaitan dengan Internet of Things.</li>
          <li>Berpartisipasi aktif dalam mengikuti berbagai macam perlombaan dalam bidang Internet of Things.</li>
          <li>Meningkatkan mutu dan wawasan melalui partisipasi dalam lomba Internet of Things.</li>
          <li>Menjalin komunikasi yang baik agar terjadinya keharmonisan di internal KSM IOT.</li>
        </ol>
        </FadeIn>
      </div>

      {/* Kanan: Gambar Logo */}
      <div className="md:w-1/2 flex justify-center">
      <FadeIn direction="right" delay={0.6}>
        <img
          src="/Logo_IoT.png" 
          alt="Logo KSM IoT"
          className="max-w-md w-md h-auto"
        />
        </FadeIn>
      </div>
    </div>
  );
};

export default VisionMission;
