import OurProjectsCard from "/src/components/projects/OurProjectsCard.jsx";

function OurProjectsContainer() {
  const cards = [
    {
      title: "KSM IoT UPNVJ Website Development",
      description:
        "This project focuses on the development of an official website for KSM IoT UPNVJ, aiming to serve as an informative and interactive platform for students, members, and the public. The website includes features such as organizational profiles, division overviews, event updates, and contact information.",
      image: "/projects/template-foto-OurProjects.jpg",
    },
    {
      title: "Project Title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
      image: "/projects/smart-home.jpg",
    },
    {
      title: "Project Title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. ",
      image: "/projects/template-foto-OurProjects.jpg",
    },
    {
      title: "IoT Plant Watering System",
      description:
        "An automatic plant watering solution using soil moisture sensors and solenoid valve control to optimize irrigation.",
      image: "/projects/template-foto-OurProjects.jpg",
    },
    {
      title: "IoT Plant Watering System",
      description:
        "An automatic plant watering solution using soil moisture sensors and solenoid valve control to optimize irrigation.",
      image: "",
    },
    {
      title: "IoT Plant Watering System",
      description:
        "An automatic plant watering solution using soil moisture sensors and solenoid valve control to optimize irrigation.",
      image: "/images/plant-watering.png",
    },
    {
      title: "IoT Plant Watering System",
      description:
        "An automatic plant watering solution using soil moisture sensors and solenoid valve control to optimize irrigation.",
      image: "/projects/template-foto-OurProjects.jpg",
    },
  ];

  const realCards = cards.map(card => ({ ...card, isPlaceholder: false }));
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

export default OurProjectsContainer;
