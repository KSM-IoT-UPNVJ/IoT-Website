'use client';

import { useState, useEffect } from 'react';
import FadeIn from '../../../utils/fadeIn';
import AchievementCard from './AchievementCard';
import AchievementPopup from './AchievementPopUp';

const OurAchievement = () => {
  const [achievements, setAchievements] = useState([]);
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const [clickedElementPosition, setClickedElementPosition] = useState(null);

  // Fetch ke backend FastAPI
  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/admin/achievement/");
        const data = await res.json();
        setAchievements(data);
      } catch (error) {
        console.error("Error fetching achievements:", error);
      }
    };

    fetchAchievements();
  }, []);

  // ❗ FIX: tidak pakai event lagi
  const handleCardClick = (achievement, elementPosition) => {
    setClickedElementPosition(elementPosition);
    setSelectedAchievement(achievement);
  };

  return (
    <div className="py-24 px-8 flex flex-col items-center justify-center">
      <FadeIn direction={'left'} delay={0.3}>
        <h2 className="text-[56px] font-bold text-center text-gray-800 mb-16 font-optima">
          Our Achievement
        </h2>
      </FadeIn>

      {/* card component */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-full">
        {achievements.map((achievement) => (
          <FadeIn key={achievement.id}>
            <AchievementCard
              item={achievement}
              onSelect={handleCardClick}
            />
          </FadeIn>
        ))}
      </div>

      {selectedAchievement && (
        <AchievementPopup
          item={selectedAchievement}
          clickedElementPosition={clickedElementPosition}
          onClose={() => setSelectedAchievement(null)}
        />
      )}
    </div>
  );
};

export default OurAchievement;
