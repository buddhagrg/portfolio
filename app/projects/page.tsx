import { Metadata } from "next";

import { Project } from "@/components/projects/project";
import { SiteLayout } from "@/components/site-layout";
import { generateCustomMetadata, getProjectMetadata } from "@/utils";

export const metadata: Metadata = generateCustomMetadata({
  title: "Projects by Buddha Gurung",
  description: "Projects by Buddha Gurung",
  canonicalUrl: `${URL}/projects`,
});

export default function Projects() {
  const projects = getProjectMetadata();

  return (
    <SiteLayout>
      <section className="max-w-3xl mx-auto pt-15 pb-20">
        <h2 className="text-3xl font-bold">Projects</h2>

        <div className="text-lg text-muted-foreground mt-2 mb-8">
          A collection of my recent work and side projects.
        </div>

        <div className="grid grid-cols-1 gap-y-5">
          {projects.map((project) => (
            <Project key={project.title} project={project} />
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
