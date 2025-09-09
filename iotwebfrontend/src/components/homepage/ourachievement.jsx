import { useState } from 'react';
const OurAchievement = () => {
  const [showPopup, setShowPopup] = useState(false);

  const achievements = [
    'Achievement Name',
    'Achievement Name',
    'Achievement Name',
    'Achievement Name',
    'Achievement Name',
    'Achievement Name',
  ];

  return (
    <div className="py-24 px-8 flex flex-col items-center justify-center">
      <h2 className="text-[56px] font-bold text-center text-gray-800 mb-16 font-optima">
        Our Achievement
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-[1300px]">
        {achievements.map((item, index) => (
          <div
            key={index}
            className="bg-gray-300 rounded-2xl h-[250px] relative shadow-lg overflow-hidden group"
          >
            {/* Container isi */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 py-4 
                        transition-all duration-300 group-hover:justify-start group-hover:pt-6"
            >
              {/* Transisi judul achievement name */}
              <h3
                className="text-[26px] font-bold text-black mb-0 transition-all duration-300 
                          group-hover:mb-3 group-hover:self-center mt-[calc(50%-15px)] group-hover:mt-0"
              >
                {item}
              </h3>

              {/* Transisi keterangan atau isi */}
              <p
                className="text-[17px] text-gray-700 opacity-0 translate-y-8 
                          group-hover:opacity-100 group-hover:translate-y-0 
                          transition-all duration-500 ease-in-out"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
                malesuada.
              </p>

              {/* Transisi tombol Learn More */}
              <button
                onClick={() => setShowPopup(true)}
                className="mt-4 px-5 py-2 text-sm bg-blue-800 text-white rounded-full opacity-0 translate-y-8 
                        group-hover:opacity-100 group-hover:translate-y-0 
                        transition-all duration-500 ease-in-out hover:bg-yellow-400 active:bg-yellow-500"
              >
                Learn More
              </button>

              {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-transparent z-50">
                  <div className="bg-white w-[90%] h-[90%] rounded-2xl shadow-2xl p-6 relative overflow-y-auto">
                    {/* Tombol Close */}
                    <button
                      onClick={() => setShowPopup(false)}
                      className="absolute top-4 right-4 px-3 py-1 bg-red-500 text-white rounded-lg"
                    >
                      X
                    </button>
                    {/* Konten */}
                    <h1 className="text-2xl font-bold mb-4">ANNOUNCEMENT</h1>
                    <p className="mb-4">
                      Ini contoh popup yang hampir memenuhi 1 layar penuh. Kamu
                      bisa isi dengan teks panjang, gambar, atau konten lain
                      sesuai kebutuhan.
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-blue-100 rounded-lg">
                        Content 1
                      </div>
                      <div className="p-4 bg-green-100 rounded-lg">
                        Content 2
                      </div>
                      <div className="p-4 bg-yellow-100 rounded-lg">
                        Content 3
                      </div>
                      <div className="p-4 bg-purple-100 rounded-lg">
                        Content 4
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurAchievement;
