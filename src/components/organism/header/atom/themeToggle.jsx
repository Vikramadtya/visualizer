"use client";

import * as React from "react";

import SunIcon from "../../../../../public/icons/theme/sun.svg";
import MoonIcon from "../../../../../public/icons/theme/owl.svg";

import { useTheme } from "next-themes";

// Another icon that we can use for the theme toggle switch is
// import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
        className="inline-flex items-center rounded-full p-2.5 text-center text-sm font-medium text-blue-700  hover:text-white dark:text-blue-500 dark:hover:text-white"
      >
        <SunIcon className="h-[1.5rem] w-[1.5rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <MoonIcon className="absolute h-[1.5rem] w-[1.5rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />

        <span className="sr-only">Icon description</span>
      </button>
    </>
  );
};
export default ThemeToggle;
