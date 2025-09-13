import { useState } from 'react';
import { MoveLeft } from 'lucide-react';
import FadeIn from '../../../utils/fadeIn';
import AchievementCard from './AchievementCard';
import AchievementPopup from './AchievementPopUp';

const OurAchievement = () => {
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
  };

  const handleClosePopup = () => {
    setSelectedAchievement(null);
  };

  return (
    <div className="py-24 px-8 flex flex-col items-center justify-center">
      <FadeIn direction={'left'} delay={0.3}>
        <h2 className="text-[56px] font-bold text-center text-gray-800 mb-16 font-optima">
          Our Achievement
        </h2>
      </FadeIn>

      {/* card component */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-[1300px]">
        {achievements.map((item) => (
          <AchievementCard
            key={item.id}
            item={item}
            onSelect={handleOpenPopup}
          />
        ))}
      </div>

      {/* pop up component */}
      <AchievementPopup item={selectedAchievement} onClose={handleClosePopup} />
    </div>
  );
};

export default OurAchievement;
