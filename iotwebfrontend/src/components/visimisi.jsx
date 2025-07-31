import React from 'react';

const VisionMission = () => {
  return (
    <div className="w-fullpy-20 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Kiri: Visi & Misi */}
      <div className="md:w-1/2 text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Vision</h2>
        <p className="text-gray-700 mb-10 leading-relaxed">
          Menjadikan KSM Internet of Things (IoT) sebagai wadah pengembangan minat dan bakat mahasiswa
          dalam bidang Internet of Things untuk menghasilkan mahasiswa berprestasi serta berkualitas.
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Mission</h2>
        <ol className="list-decimal list-inside space-y-3 text-gray-700 leading-relaxed">
          <li>Melakukan penelitian dan mengimplementasikan ilmu-ilmu yang berkaitan dengan Internet of Things.</li>
          <li>Berpartisipasi aktif dalam mengikuti berbagai macam perlombaan dalam bidang Internet of Things.</li>
          <li>Meningkatkan mutu dan wawasan melalui partisipasi dalam lomba Internet of Things.</li>
          <li>Menjalin komunikasi yang baik agar terjadinya keharmonisan di internal KSM IOT.</li>
        </ol>
      </div>

      {/* Kanan: Gambar Logo */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src="/Logo_IoT.png" 
          alt="Logo KSM IoT"
          className="max-w-sm w-full h-auto"
        />
      </div>
    </div>
  );
};

export default VisionMission;
