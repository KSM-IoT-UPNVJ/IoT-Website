import HakMilik from "/src/utils/hakMilik";

const peopleData = [
  {
    name: "Faiz Daffa",
    title: "Frontend Developer",
    image: "/team/faiz.jpg",
  },
  {
    name: "Zahid Alim",
    title: "Backend Engineer",
    image: "/team/zahid.jpg",
  },
  {
    name: "Goesny A.",
    title: "UI/UX Designer",
    image: "/team/goesny.jpg",
  },
];

export default function CreditsPage() {
  return <HakMilik people={peopleData} />;
}
