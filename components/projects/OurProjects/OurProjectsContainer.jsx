'use client';

import { useRouter } from 'next/navigation';
import OurProjectsCard from './OurProjectsCard.jsx';
import OurProjectsData from './ourProjectsData';
import Link from 'next/link.js';

export default function OurProjectsContainer() {
  const router = useRouter();

  const realCards = OurProjectsData.map((card) => ({
    ...card,
    isPlaceholder: false,
  }));
  const remainder = realCards.length % 3;
  const fillers = remainder === 0 ? 3 : 3 - remainder;

  const fillerCards = Array.from({ length: fillers }, () => ({
    title: 'Coming Soon',
    description: 'Stay tuned for more projects!',
    image: '/projects/placeholder.jpg',
    isPlaceholder: true,
  }));

  return (
    <div className="flex flex-wrap justify-center gap-8 px-2">
      {realCards.map((card) => (
        <Link
          key={card.slug}
          className="h-min w-min"
          href={`/project/ourprojectdesc/${card.slug}`}
          
        >
          <OurProjectsCard {...card} />
        </Link>
      ))}
      {fillerCards.map((card, i) => (
        <OurProjectsCard key={`placeholder-${i}`} {...card} />
      ))}
    </div>
  );
}
