'use client';

import { useEffect, useState, use} from "react";
import ProjectDescContainer from "@/components/projects/ProjectsDesc/ProjectDescContainer";

export default function ProjectDetail({ params }) {
  const { slug } = use(params);
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const res = await fetch(`http://127.0.0.1:8000/admin/projects/${slug}`);
        const data = await res.json();
        setProject(data);
      } catch (err) {
        console.error("Error fetching project:", err);
      }
    };

    fetchDetail();
  }, [slug]);

  if (!project) {
    return (
      <div className="text-white text-center py-10">
        Loading...
      </div>
    );
  }

  return <ProjectDescContainer {...project} />;
}
