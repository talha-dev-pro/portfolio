"use client";
import About from "@/components/about/About";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "@/styles/pages/home.module.scss"; // create this file below

export default function Home() {
  // "dark" or "light"
  const [theme, setTheme] = useState<"dark" | "light">("light");

  useEffect(() => {
    // read saved theme from localStorage
    const saved = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    if (saved === "dark") setTheme("dark");
  }, []);

  useEffect(() => {
    // apply theme class on documentElement (html)
    if (typeof document !== "undefined") {
      const root = document.documentElement;
      if (theme === "dark") root.classList.add("theme-dark");
      else root.classList.remove("theme-dark");
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return (
    <div className={styles.home}>
      <div className={styles.controls}>
        <button onClick={() => setTheme("dark")} aria-label="Dark">
          <Image src={"/moon.svg"} alt="Dark" height={20} width={20} />
        </button>
        <button onClick={() => setTheme("light")} aria-label="Light">
          <Image src={"/sun.svg"} alt="Light" height={20} width={20} />
        </button>
      </div>

      <p>Hello — this page uses CSS variables for theming.</p>
      <About />
    </div>
  );
}
