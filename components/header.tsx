"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ToggleTheme } from "./toggle-theme";

export function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const menus: Array<{ id: string; name: string }> = [
    { id: "#projects", name: "Projects" },
    { id: "#articles", name: "Articles" },
    { id: "#contact", name: "Contact" },
  ];

  return (
    <header className="md:py-4 fixed start-0 top-0 left-0 w-full border-gray-200 bg-background z-50">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center">
          <h4 className="text-xl font-medium text-foreground/70 hover:text-foreground">
            <Link href={"/"}>Buddha Gurung</Link>
          </h4>

          <div
            className={`space-x-6 ml-auto mr-5 ${isHomePage ? "" : "hidden"}`}
          >
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
        </div>
      </div>
    </header>
  );
}
