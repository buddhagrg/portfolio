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
    <header className="md:py-4 fixed start-0 top-0 left-0 w-full bg-background-secondary z-50">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row">
          <h4 className="text-xl font-medium text-foreground/70 hover:text-foreground">
            <Link href={"/"}>Buddha Gurung</Link>
          </h4>

          <div
            className={`flex items-center space-x-6 md:ml-auto mr-5 ${
              isHomePage ? "" : "hidden"
            }`}
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
            <ToggleTheme />
          </div>
        </div>
      </div>
    </header>
  );
}
