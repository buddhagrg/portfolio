import Link from "next/link";
import { Code, FileText, FileUser } from "lucide-react";

import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Availability } from "./availability";

export function Hero() {
  return (
    <section className="min-h-[60vh] pt-20 mt-10" id="home">
      <div className="container max-w-4xl mx-auto flex flex-col md:flex-row space-x-10">
        <div className="mb-5 md:mb-0 flex justify-center">
          <Avatar className="border-2 border-border shadow-lg">
            <AvatarImage src="/profile.png" alt="Profile picture" />
            <AvatarFallback className="bg-primary/10 text-primary text-xl">
              BG
            </AvatarFallback>
          </Avatar>
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
            Buddha Gurung
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-2">
            Frontend developer
          </h2>
          <div className="space-y-4 my-6">
            <p className="text-base md:text-lg">
              React developer with 3+ years building modern, user-focused web
              applications.
            </p>

            <p className="text-base md:text-lg text-muted-foreground">
              Passionate about clean design, smooth user experiences, and
              maintainable code. Currently expanding backend skills for
              full-stack solutions.
            </p>
          </div>
          <Availability />
          <div className="flex flex-wrap gap-3 mt-5">
            <Button asChild>
              <Link href="/projects" className="inline-flex items-center gap-2">
                <Code className="size-6 md:size-5 lg:size-4" />
                View Projects
              </Link>
            </Button>

            <Button variant="outline" asChild>
              <Link href="/articles" className="inline-flex items-center gap-2">
                <FileText className="size-6 md:size-5 lg:size-4" />
                Read Articles
              </Link>
            </Button>

            <Button variant="outline" asChild>
              <Link
                href="/resume.pdf"
                className="inline-flex items-center gap-2"
              >
                <FileUser className="size-6 md:size-5 lg:size-4" />
                View Resume
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
