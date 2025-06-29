import React from "react";
import Link from "next/link";
import { Github, Linkedin, LucideProps, Mail } from "lucide-react";

import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Availability } from "./availability";

const socials: Array<{
  id: string;
  label: string;
  link: string;
  icon: React.FC<LucideProps>;
}> = [
  {
    id: "email",
    label: "Email",
    link: `mailto:gurungbuddha6@outlook.com`,
    icon: Mail,
  },
  {
    id: "github",
    label: "Github",
    link: `https://github.com/buddhagrg`,
    icon: Github,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    link: `https://www.linkedin.com/in/buddhagrg/`,
    icon: Linkedin,
  },
];

export function Hero() {
  return (
    <section className="min-h-[60vh] pt-15 mt-5">
      <div className="container max-w-3xl mx-auto flex flex-col md:flex-row space-x-10">
        <div className="mb-5 md:mb-0 flex justify-center">
          <Avatar className="border-2 border-border shadow-lg">
            <AvatarImage src="/profile.png" alt="Profile picture" />
            <AvatarFallback className="bg-primary/10 text-primary text-xl">
              BG
            </AvatarFallback>
          </Avatar>
        </div>
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-2">Buddha Gurung</h1>
          <h2 className="text-xl text-muted-foreground mb-2">
            Frontend developer with 3 years of experience
          </h2>
          <p className="text-lg my-6">
            I am a React developer focused on building modern, user-focused web
            applications. I am passionate about clean design, smooth user
            experiences, and maintainable code. Currently expanding backend
            skills for full-stack solutions.
          </p>
          <Availability />
          <div className="flex flex-wrap gap-3 mt-5">
            {socials.map(({ id, label, link, icon: Icon }) => (
              <Button variant="outline" asChild key={id}>
                <Link href={link}>
                  <Icon className="size-6 md:size-5 lg:size-4" />
                  {label}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
