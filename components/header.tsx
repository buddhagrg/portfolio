"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ToggleTheme } from "./toggle-theme";
import clsx from "clsx";

export function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const menus: Array<{ id: string; name: string }> = [
    { id: "#projects", name: "Projects" },
    { id: "#articles", name: "Articles" },
    { id: "#contact", name: "Contact" },
  ];

  const Brand = (
    <h4 className="text-xl font-medium text-foreground/70 hover:text-foreground shrink-0">
      <Link href={"/"}>Buddha Gurung</Link>
    </h4>
  );

  return (
    <header className="md:py-4 fixed start-0 top-0 left-0 w-full bg-background-secondary z-50">
      <div
        className={clsx(
          `max-w-4xl mx-auto flex flex-col md:flex-row justify-between md:items-center`,
          isHomePage ? "flex-col" : "flex-row"
        )}
      >
        {Brand}

        {isHomePage ? (
          <nav className="flex items-center">
            <div className="space-x-6 md:ml-auto mr-5">
              {menus.map(({ id, name }) => (
                <Link
                  href={id}
                  className="text-foreground/70 hover:text-foreground"
                  key={id}
                >
                  {name}
                </Link>
              ))}
            </div>
            <ToggleTheme />
          </nav>
        ) : (
          <ToggleTheme />
        )}
      </div>
    </header>
  );
}
