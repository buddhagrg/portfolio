import Link from "next/link";
import { Code, FileText, FileUser } from "lucide-react";

import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function Hero() {
  return (
    <section className="min-h-[0vh] pt-10 md:pt-20 mt-10" id="home">
      <div className="container max-w-4xl mx-auto flex flex-col md:flex-row space-x-10">
        <div className="mb-5 md:mb-0 flex justify-center">
          <Avatar className="border-2 border-primary shadow-lg">
            <AvatarImage src="/profile.png" alt="Profile picture" />
            <AvatarFallback className="bg-primary/10 text-primary text-xl">
              BG
            </AvatarFallback>
          </Avatar>
        </div>
        <div>
          <p className="font-mono text-lg text-primary mb-1">
            Hello, my name is
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
            Buddha Gurung
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-500 mb-2">
            Frontend developer
          </h2>
          <div className="space-y-4 mb-6">
            <p className="text-sm md:text-base text-muted-foreground">
              Frontend developer with 3 years of experience specializing in
              React.js. Building clean, responsive and user-friendly web
              applications.
            </p>

            <p className="text-sm md:text-base text-muted-foreground">
              When I&apos;m not coding, I enjoy hiking, reading tech blogs, and
              experimenting with new web technologies. I&apos;m always open to
              learning new things and tackling challenging projects.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/projects" className="inline-flex items-center gap-2">
                <Code className="size-6 md:size-4" />
                View Projects
              </Link>
            </Button>

            <Button variant="outline" asChild>
              <Link href="/articles" className="inline-flex items-center gap-2">
                <FileText className="size-6 md:size-4" />
                Read Articles
              </Link>
            </Button>

            <Button variant="outline" asChild>
              <Link
                href="/resume.pdf"
                className="inline-flex items-center gap-2"
              >
                <FileUser className="size-6 md:size-4" />
                View Resume
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
