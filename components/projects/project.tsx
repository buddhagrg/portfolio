import Link from "next/link";
import { GithubIcon, Link2 } from "lucide-react";

import type { ProjectMeta } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Tags } from "../tags";

export const Project = ({ project }: { project: ProjectMeta }) => {
  return (
    <Card key={project.title}>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
        <CardDescription className="text-base">
          {project.subtitle}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-x-2">
          <Tags tags={project.stack} />
        </div>

        <div className="flex items-center mt-5 space-x-4">
          <Button variant="outline" asChild>
            <Link
              href={project.demo}
              className="inline-flex items-center gap-2"
            >
              <Link2 className="size-6 md:size-4" />
              <p className="font-normal">Live Demo</p>
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link
              href={project.code}
              className="inline-flex items-center gap-2"
            >
              <GithubIcon className="size-6 md:size-4" />
              <p className="font-normal">Source Code</p>
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
