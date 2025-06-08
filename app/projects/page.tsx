import { MoveLeft } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

import { Project } from "@/components/projects/project";
import { SiteLayout } from "@/components/site-layout";
import { Button } from "@/components/ui/button";
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
      <section className="max-w-4xl mx-auto pt-30 pb-20">
        <div className="flex items-center gap-4">
          <Button variant="outline" asChild>
            <Link href={"/"} className="flex items-center space-x-1">
              <MoveLeft className="size-6 md:size-4" />
              <div className="text-base font-normal">Back Home</div>
            </Link>
          </Button>
          <h2 className="text-4xl font-medium">All Projects</h2>
        </div>

        <div className="text-lg text-muted-foreground mt-5 mb-8">
          Explore all the projects I&apos;ve worked on, from web applications to
          design systems.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
          {projects.map((project) => (
            <Project key={project.title} project={project} />
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
