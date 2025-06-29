import Link from "next/link";
import { MoveRight } from "lucide-react";

import { getProjectMetadata } from "@/utils";
import { Project } from "./project";
import { Button } from "../ui/button";

export function Projects() {
  const projects = getProjectMetadata().filter(
    (project) => project.featured === true
  );

  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center mb-5">
          <h1 className="text-2xl font-bold">Projects</h1>
          <Button className="ml-auto" variant="secondary" size="sm" asChild>
            <Link href={`/projects`} className="space-x-1">
              View All
              <MoveRight className="size-6 md:size-5 lg:size-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-y-8">
          {projects.map((project) => (
            <Project key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
