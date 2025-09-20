import FadeIn from '../../../utils/fadeIn';

export default function AchievementCard({ item, onSelect }) {
  const handleClick = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const elementPosition = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
      width: rect.width,
      height: rect.height,
    };
    onSelect(item, elementPosition);
  };
  return (
    <FadeIn direction={'right'} delay={0.6}>
      <div className="bg-gray-300 rounded-2xl h-[250px] relative shadow-lg overflow-hidden group">
        {/* State Awal: Judul di tengah */}
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
            onClick={handleClick}
            className="px-5 py-2 text-sm bg-blue-800 text-white rounded-full hover:bg-yellow-400 active:bg-yellow-500"
          >
            Learn More
          </button>
        </div>
      </div>
    </FadeIn>
  );
}
