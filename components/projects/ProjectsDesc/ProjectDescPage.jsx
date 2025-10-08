'use client';

import { useEffect, useMemo, useRef } from 'react';
import { useParams } from 'next/navigation';
import ProjectDescContainer from './ProjectDescContainer';
import projectsDescData from './projectsDescData.json';

const toSingleValue = (value) =>
  Array.isArray(value) ? value[0] : value ?? undefined;

export default function ProjectDescPage({ slug: slugProp }) {
  const params = useParams();
  const paramSlug = params ? toSingleValue(params.slug) : undefined;
  const paramIndexRaw = params ? toSingleValue(params.i) : undefined;
  const paramIndex = paramIndexRaw ? parseInt(paramIndexRaw, 10) - 1 : null;

  const derivedSlugFromIndex =
    paramIndex !== null && projectsDescData[paramIndex]
      ? projectsDescData[paramIndex].slug
      : undefined;

  const slug = slugProp ?? paramSlug ?? derivedSlugFromIndex;

  const selectedProject = slug
    ? projectsDescData.find((project) => project.slug === slug)
    : undefined;

  const showAllProjects = !selectedProject;

  const projectRefs = useRef([]);

  useEffect(() => {
    if (!showAllProjects || paramIndex === null) {
      return;
    }

    const target = projectRefs.current[paramIndex];
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [showAllProjects, paramIndex]);

  useEffect(() => {
    if (!showAllProjects) {
      projectRefs.current = [];
    }
  }, [showAllProjects]);

  const cardsToRender = useMemo(() => {
    if (selectedProject) {
      return [selectedProject];
    }
    return projectsDescData;
  }, [selectedProject]);

  return (
    <div className="flex flex-wrap justify-center gap-8 px-2">
      {cardsToRender.map((card, idx) => (
        <div
          key={card.slug ?? idx}
          ref={
            showAllProjects
              ? (el) => {
                  projectRefs.current[idx] = el;
                }
              : undefined
          }
          className="w-full"
        >
          <ProjectDescContainer {...card} />
        </div>
      ))}
    </div>
  );
}
