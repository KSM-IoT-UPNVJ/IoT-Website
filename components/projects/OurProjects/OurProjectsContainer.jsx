'use client';

import { useRouter } from 'next/navigation';
import OurProjectsCard from './OurProjectsCard.jsx';
import Link from 'next/link.js';
import { useEffect, useState } from 'react';

export default function OurProjectsContainer() {
  const router = useRouter();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/admin/projects/");
        const data = await res.json();
        setProjects(data);
      } catch (err) {
        console.error("Error fetching projects:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="text-center text-white py-10">
        Loading projects...
      </div>
    );
  }

  const realCards = projects.map((card) => ({
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
