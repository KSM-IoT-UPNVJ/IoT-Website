import { useState } from 'react';
import { MoveLeft } from 'lucide-react';
import FadeIn from '../../utils/fadeIn';

const OurAchievement = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  const achievements = [
    {
      id: 1,
      title: 'Juara 1 Lomba Robotik Nasional',
      award: 'Medali Emas',
      description:
        'Tim kami berhasil meraih juara pertama dalam kompetisi robotik tingkat nasional yang diselenggarakan oleh Universitas ABC, mengalahkan 50 tim lainnya.',
      image: '/path/to/your/image1.jpg',
    },
    {
      id: 2,
      title: 'Finalis KKI',
      award: 'Top 10 Finalist',
      description: 'Berhasil masuk final kki dalam ',
      image: '/path/to/your/image2.jpg',
    },
    {
      id: 3,
      title: 'Achievement Name 3',
      award: 'Penghargaan 3',
      description: 'Deskripsi untuk achievement 3.',
      image: '/path/to/your/image3.jpg',
    },
    {
      id: 4,
      title: 'Achievement Name 4',
      award: 'Penghargaan 4',
      description: 'Deskripsi untuk achievement 4.',
      image: '/path/to/your/image4.jpg',
    },
    {
      id: 5,
      title: 'Achievement Name 5',
      award: 'Penghargaan 5',
      description: 'Deskripsi untuk achievement 5.',
      image: '/path/to/your/image5.jpg',
    },
    {
      id: 6,
      title: 'Achievement Name 6',
      award: 'Penghargaan 6',
      description: 'Deskripsi untuk achievement 6.',
      image: '/path/to/your/image6.jpg',
    },
  ];

  const handleOpenPopup = (achievement) => {
    setSelectedAchievement(achievement);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedAchievement(null);
  };

  return (
    <div className="py-24 px-8 flex flex-col items-center justify-center">
      <FadeIn direction={'left'} delay={0.3}>
        <h2 className="text-[56px] font-bold text-center text-gray-800 mb-16 font-optima">
          Our Achievement
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-[1300px]">
        {achievements.map((item) => (
          <FadeIn key={item.id} direction={'right'} delay={0.6}>
            <div className="bg-gray-300 rounded-2xl h-[250px] relative shadow-lg overflow-hidden group">
              <div className="absolute inset-0 flex items-center justify-center p-6 transition-opacity duration-300 ease-in-out group-hover:opacity-0">
                <h3 className="text-[26px] font-bold text-black text-center">
                  {item.title}
                </h3>
              </div>

              {/* State Hover: Konten slide dari bawah ke atas */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-between text-center p-6 pt-8 
                            opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 
                            transition-all duration-300 ease-in-out"
              >
                {/* Grup untuk Teks */}
                <div>
                  <h3 className="text-[26px] font-bold text-black mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[17px] text-gray-700">
                    {item.description.substring(0, 100)}...
                  </p>
                </div>
                {/* Tombol Learn More */}
                <button
                  onClick={() => handleOpenPopup(item)}
                  className="px-5 py-2 text-sm bg-blue-800 text-white rounded-full hover:bg-yellow-400 active:bg-yellow-500"
                >
                  Learn More
                </button>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Elemen Popup */}
      {showPopup && selectedAchievement && (
        // LAPISAN OVERLAY (TAMBAHKAN `backdrop-blur-sm` DI SINI)
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          {/* Kontainer utama popup */}
          <div className="relative w-[90%] h-[90%] shadow-2xl rounded-2xl p-6">
            {/* LAPISAN BACKGROUND POPUP (EFEK GLASSMORPHISM) */}
            <div className="absolute inset-0 bg-black/30 backdrop-blur-lg rounded-2xl -z-10"></div>

            {/* LAPISAN KONTEN POPUP (TEKS & GAMBAR) */}
            <div className="relative z-10 w-full h-full flex flex-col md:flex-row gap-8">
              {/* Bagian Kiri (Gambar) */}
              <div className="w-full md:w-1/2 h-full bg-abu-muda rounded-lg">
                {/* <img src={selectedAchievement.image} alt={selectedAchievement.title} className="w-full h-full object-cover rounded-lg"/> */}
              </div>

              {/* Bagian Kanan (Konten Teks) */}
              <div className="w-full md:w-1/2 flex flex-col justify-between p-4 text-white">
                <div className="self-start">
                  <button onClick={handleClosePopup}>
                    <MoveLeft size={48} />
                  </button>
                </div>

                <div className="text-left flex-grow flex flex-col justify-center">
                  <h2 className="text-4xl font-bold mb-4">
                    {selectedAchievement.title}
                  </h2>
                  <h5 className="text-2xl font-semibold mb-8">
                    {selectedAchievement.award}
                  </h5>
                  <p className="text-lg text-white mb-4">
                    {selectedAchievement.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurAchievement;
