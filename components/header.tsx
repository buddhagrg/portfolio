"use client";

import Link from "next/link";
import { FileText } from "lucide-react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import { ToggleTheme } from "./toggle-theme";
import { Button } from "./ui/button";

export function Header() {
  const pathname = usePathname();

  const menus: Array<{ id: string; name: string }> = [
    { id: "/", name: "Home" },
    { id: "/projects", name: "Projects" },
    { id: "/articles", name: "Articles" },
  ];

  const Resume = () => (
    <Button asChild variant="default">
      <Link href={`/resume.pdf`}>
        <FileText className="size-6 md:size-5 lg:size-4" />
        Resume
      </Link>
    </Button>
  );

  return (
    <header className="md:py-6">
      <div className="max-w-4xl mx-auto">
        <nav className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="space-x-6">
            {menus.map(({ id, name }) => (
              <Link
                href={id}
                className={clsx(
                  `text-lg`,
                  `text-foreground/70`,
                  (pathname === id || pathname.startsWith(id + "/")) &&
                    "link-active"
                )}
                key={id}
              >
                {name}
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-5 md:ml-auto">
            <Resume />
            <ToggleTheme />
          </div>
        </nav>
      </div>
    </header>
  );
}
