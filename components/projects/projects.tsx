import Link from "next/link";
import { GithubIcon } from "lucide-react";

import { getProjectMetadata } from "@/utils";
import { Project } from "./project";
import { Button } from "../ui/button";

export function Projects() {
  const projects = getProjectMetadata().filter(
    (project) => project.featured === true
  );

  return (
    <section className="py-20" id="projects">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          Featured Projects
        </h1>
        <p className="mb-10">
          Here are some projects I&apos;ve worked on. Each project presented unique
          challenges that helped me grow as a developer and improve my skills.
        </p>

        <div className="grid grid-cols-1 gap-y-8">
          {projects.map((project) => (
            <Project key={project.title} project={project} />
          ))}
        </div>

        <div className="text-center mt-8">
          <div>Interested in seeing more of my work?</div>
          <Button className="mt-4" asChild>
            <Link href={"/projects"} className="inline-flex items-center">
              <GithubIcon className="size-6 md:size-5 lg:size-4" />
              <span>View All Projects</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
