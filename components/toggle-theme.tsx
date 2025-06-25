"use client";

import { Moon, Sun } from "lucide-react";
import { useDarkMode } from "@/hooks/use-dark-mode";

export const ToggleTheme = () => {
  const { isDarkMode, toggleThemeMode } = useDarkMode();

  return (
    <div
      onClick={toggleThemeMode}
      className="text-foreground/70 hover:cursor-pointer hover:text-foreground"
    >
      {isDarkMode ? (
        <Sun className="size-7 md:size-5" />
      ) : (
        <Moon className="size-7 md:size-5" />
      )}
    </div>
  );
};
