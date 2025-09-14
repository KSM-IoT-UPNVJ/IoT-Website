import OurProjectsCard from "./OurProjectsCard.jsx";
import OurProjectsData from "./ourProjectsData";

export default function OurProjectsContainer() {
  const realCards = OurProjectsData.map((card) => ({
    ...card,
    isPlaceholder: false,
  }));
  const remainder = realCards.length % 3;
  const fillers = remainder === 0 ? 0 : 3 - remainder;

  const fillerCards = Array.from({ length: fillers }, (_, i) => ({
    title: "Coming Soon",
    description: "Stay tuned for more projects!",
    image: "/projects/placeholder.jpg",
    isPlaceholder: true,
  }));

  const displayCards = [...realCards, ...fillerCards];

  return (
    <div className={`flex flex-wrap justify-center gap-8 px-2`}>
      {displayCards.map((card, i) => (
        <OurProjectsCard key={i} {...card} />
      ))}
    </div>
  );
}
