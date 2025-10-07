'use client';

import { useRouter } from 'next/navigation.js';
import OurProjectsCard from './OurProjectsCard.jsx';
import OurProjectsData from './ourProjectsData';

export default function OurProjectsContainer() {
  const navigate = useRouter();

  const realCards = OurProjectsData.map((card) => ({
    ...card,
    isPlaceholder: false,
  }));
  const remainder = realCards.length % 3;
  const fillers = remainder === 0 ? 3 : 3 - remainder;

  const fillerCards = Array.from({ length: fillers }, (_, i) => ({
    title: 'Coming Soon',
    description: 'Stay tuned for more projects!',
    image: '/projects/placeholder.jpg',
    isPlaceholder: true,
  }));

  const displayCards = [...realCards, ...fillerCards];

  return (
    <div className={`flex flex-wrap justify-center gap-8 px-2`}>
      {realCards.map((card, i) => (
        <button
          key={i}
          className="h-min w-min"
          onClick={() => navigate.push(`/project/projectdesc/${i + 1}`)}
        >
          <OurProjectsCard {...card} />
        </button>
      ))}
      {fillerCards.map((card, i) => (
        <OurProjectsCard key={i} {...card} />
      ))}
    </div>
  );
}
