import { MoveLeft } from 'lucide-react';

export default function AchievementPopup({ item, onClose }) {
  if (!item) return null; // Jangan render apapun jika tidak ada item yang dipilih

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      {/* Kontainer utama popup */}
      <div className="relative w-[90%] h-[80%] shadow-2xl rounded-2xl p-6">
        {/* Lapisan background dengan efek glassmorphism */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-2xl -z-10"></div>

        {/* Lapisan konten (teks & gambar) */}
        <div className="relative z-10 w-full h-full flex flex-col md:flex-row gap-8">
          {/* Bagian Kiri (Gambar) */}
          <div className="w-full md:w-1/2 h-full bg-abu-muda rounded-lg">
            {/* Ganti dengan gambar jika ada */}
            {/* <img src={item.image} alt={item.title} className="w-full h-full object-cover rounded-lg"/> */}
          </div>

          {/* Bagian Kanan (Konten Teks) */}
          <div className="w-full md:w-1/2 flex flex-col justify-between p-4 text-white">
            <div className="self-start">
              <button onClick={onClose}>
                <MoveLeft size={48} />
              </button>
            </div>

            <div className="text-center flex-grow flex flex-col justify-center">
              <h2 className="text-4xl font-bold mb-4">{item.title}</h2>
              <h5 className="text-2xl font-semibold mb-8">{item.award}</h5>
              <p className="text-lg text-gray-200 mb-4">{item.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
