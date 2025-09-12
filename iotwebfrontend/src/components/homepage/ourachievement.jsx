import { useState } from 'react';
import { MoveLeft } from 'lucide-react';
import FadeIn from '../../utils/fadeIn';

const OurAchievement = () => {
  const [selectedAchievement, setSelectedAchievement] = useState(null);

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
      <FadeIn direction={'left'} delay={0.3}>
        <h2 className="text-[56px] font-bold text-center text-gray-800 mb-16 font-optima">
          Our Achievement
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-[1300px]">
        {achievements.map((item, index) => (
          <FadeIn key={index} direction={'right'} delay={0.6}>
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus lacinia odio vitae vestibulum vestibulum. Cras
                  venenatis euismod malesuada.
                </p>

                {/* Transisi tombol Learn More */}
                <button
                  onClick={() => setSelectedAchievement(item)}
                  className="mt-4 px-5 py-2 text-sm bg-blue-800 text-white rounded-full opacity-0 translate-y-8 
                        group-hover:opacity-100 group-hover:translate-y-0 
                        transition-all duration-500 ease-in-out hover:bg-yellow-400 active:bg-yellow-500"
                >
                  Learn More
                </button>

                {selectedAchievement && (
                  <div className="fixed inset-0 flex items-center justify-center bg-black/10 z-50">
                    {/* Overlay transparan */}
                    <div
                      className="absolute inset-0"
                      onClick={() => setSelectedAchievement(null)}
                    />
                    <div className="w-[90%] h-[80%] rounded-2xl shadow-2xl overflow-auto">
                      <div className="bg-white/10 backdrop-filter backdrop-blur-[2px]"></div>
                      <div className="relative flex flex-col lg:flex-row h-full gap-8 p-6">
                        {/* Left image (placeholder) */}
                        <div className="w-full lg:w-1/2 h-128 lg:h-auto bg-abu-muda rounded-xl border border-white/20"></div>

                        {/* Right content */}
                        <div className="flex-1 flex flex-col justify-between text-white">
                          <button
                            onClick={() => setSelectedAchievement(null)}
                            className="self-start mb-4 hover:scale-110 transition"
                          >
                            <MoveLeft size={48} />
                          </button>

                          <div className="text-justify">
                            <h2 className="text-3xl mb-4">
                              {selectedAchievement}
                            </h2>
                            <h5 className="text-xl font-semibold mb-8">
                              Penghargaan
                            </h5>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Facere possimus quisquam ipsa obcaecati modi
                              cum vitae voluptatibus, aspernatur, saepe eos
                              laboriosam illo delectus culpa ducimus.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
};

export default OurAchievement;
