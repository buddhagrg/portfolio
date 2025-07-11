"use client";

import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setIsDarkMode(savedTheme === "DARK");
  }, []);

  const toggleThemeMode = () => {
    const root = document.documentElement;

    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      if (newMode) {
        window.localStorage.setItem("theme", "DARK");
        root.classList.add("dark");
      } else {
        window.localStorage.setItem("theme", "LIGHT");
        root.classList.remove("dark");
      }
      return newMode;
    });
  };

  return { isDarkMode, toggleThemeMode };
};
