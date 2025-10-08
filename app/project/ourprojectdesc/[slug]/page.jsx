import { notFound } from 'next/navigation';

import ProjectDescPage from '../../../../components/projects/ProjectsDesc/ProjectDescPage.jsx';
import projectsDescData from '../../../../components/projects/ProjectsDesc/projectsDescData.json';
import FadeIn from '../../../../utils/fadeIn.jsx';

const TITLE = 'Project Description';

export default function ProjectDetailPage({ params }) {
  const { slug } = params ?? {};
  const normalizedSlug = Array.isArray(slug) ? slug[0] : slug;
  const projectExists = projectsDescData.some(
    (project) => project.slug === normalizedSlug,
  );

  if (!projectExists) {
    notFound();
  }

  return (
    <>
      <FadeIn delay={0.8} direction={'down'}>
        <h1 className="mx-5 mt-10 mb-5 flex items-center justify-center text-center text-[50px] font-bold text-[var(--color-biru-tua)]">
          {TITLE}
        </h1>
      </FadeIn>

      <FadeIn delay={1.2} direction={'down'}>
        <ProjectDescPage slug={normalizedSlug} />
      </FadeIn>
    </>
  );
}
