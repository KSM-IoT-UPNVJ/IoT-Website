import OurProjectsCard from './OurProjectsCard.jsx';
import projectsDescData from '../projectsDescData.json';

import { useNavigate } from 'react-router-dom';

export default function OurProjectsContainer() {
  const navigate = useNavigate();

  const realCards = projectsDescData.map((card) => ({
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

  return (
    <div className={`flex flex-wrap justify-center gap-8 px-2`}>
      {realCards.map((card, i) => (
        <button
          key={`project-${i}-${card.title ?? 'untitled'}`}
          className="h-min w-min"
          onClick={() => navigate(`/project/projectdesc/${i + 1}`)}
        >
          <OurProjectsCard {...card} />
        </button>
      ))}
      {fillerCards.map((card, i) => (
        <OurProjectsCard key={`placeholder-${i}`} {...card} />
      ))}
    </div>
  );
}
