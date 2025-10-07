import OurProjectsContainer from "./OurProjects/OurProjectsContainer";
import ProjectDescPage from "./ProjectsDesc/ProjectDescPage";
import FadeIn from "/src/utils/fadeIn";

import HakMilik from "/src/utils/hakMilik";

function Projects() {
  const HMWeb = [
    {
      name: "NAUFALIS FEBRIAN WIBOWO",
      title: "Head of Engineer Department",
      image: "/aboutUs/bangFalis.webp",
    },
    {
      name: "ZAHID FAQIH ALIM RABBANI",
      title: "Head of Software Engineer Division",
      image: "/aboutUs/bangZahid.webp",
    },
    {
      name: "FAIZ DAFFA MAKARIM",
      title: "Software Engineer Staff",
      image: "/aboutUs/bangFaiz.webp",
    },
    {
      name: "MOH GOESNY ISNADY",
      title: "Software Engineer Staff",
      image: "/aboutUs/bangGoesny.webp",
    },
    {
      name: "KHALIF FAREL FAUZAN",
      title: "Software Engineer Staff",
      image: "/aboutUs/khalif.webp",
    },
    {
      name: "RAMADHANI PUTRA YUDITAMA",
      title: "Software Engineer Staff",
      image: "/aboutUs/dhani.webp",
    },
    {
      name: "RAMADHANI PUTRA YUDITAMA",
      title: "Software Engineer Staff",
      image: "/aboutUs/dhani.webp",
    },
  ];

  return (
    <>
      <FadeIn delay={0.8} direction={"down"}>
        <h1 className="flex items-center justify-center font-bold text-[50px] text-[var(--color-biru-tua)] text-center mx-5 mt-10 mb-5 select-none">
          Our Projects
        </h1>
      </FadeIn>

      <FadeIn delay={1.2} direction={"down"}>
        <OurProjectsContainer />
      </FadeIn>

      <FadeIn delay={1.2} direction={"down"}>
        <HakMilik people={HMWeb} title="Web Development Team" height = "auto" width = "100%"
/>
      </FadeIn>
    </>
  );
}

export default Projects;
