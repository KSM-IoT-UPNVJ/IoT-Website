import { useState } from 'react';
import { MoveLeft } from 'lucide-react';
import FadeIn from '../../utils/fadeIn';

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
                  onClick={() => setShowPopup(true)}
                  className="mt-4 px-5 py-2 text-sm bg-blue-800 text-white rounded-full opacity-0 translate-y-8 
                        group-hover:opacity-100 group-hover:translate-y-0 
                        transition-all duration-500 ease-in-out hover:bg-yellow-400 active:bg-yellow-500"
                >
                  Learn More
                </button>

                {showPopup && (
                  <div className="fixed inset-0 flex items-center justify-center bg-transparent z-50">
                    <div className="bg-white w-[90%] h-[90%] rounded-2xl shadow-2xl p-6 relative overflow-y-auto flex flex-row gap-12 ">
                      {/* left image */}
                      <div className="w-full h-full bg-abu-muda p-4"></div>

                      {/* right content */}
                      <div className="flex flex-col justify-between p-4">
                        {/* back button */}
                        <button onClick={() => setShowPopup(false)}>
                          <MoveLeft size={48} />
                        </button>
                        <div className="text-justify">
                          <h2 className="text-3xl font-bold mb-4">
                            Achievement Title
                          </h2>
                          <h5 className="text-xl font-semibold mb-16">
                            Penghargaan
                          </h5>
                          <p className="text-gray-700 mb-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Facere possimus quisquam ipsa obcaecati modi
                            cum vitae voluptatibus, aspernatur, saepe eos
                            laboriosam illo delectus culpa ducimus. Iure nihil
                            voluptas minus deserunt dolore aliquid commodi quis
                            dicta eligendi saepe, facere ut vero cumque quo
                            officia aspernatur adipisci labore. Architecto
                            cupiditate labore dolor!
                          </p>
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
