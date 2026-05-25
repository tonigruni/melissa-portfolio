"use client";

import { useEffect } from "react";

export default function ClientEffects() {
  useEffect(() => {
    // --- Scroll: parallax + nav shrink ---
    const onScroll = () => {
      const scrolled = window.scrollY;

      // Parallax for hero/impact background text
      document
        .querySelectorAll<HTMLElement>(".hero-bg-text, .impact-bg-text")
        .forEach((el) => {
          el.style.transform = `translateX(${scrolled * 0.1}px)`;
        });

      // Nav shrink + background on scroll
      const nav = document.querySelector<HTMLElement>("nav");
      if (nav) {
        if (scrolled > 50) {
          nav.style.paddingTop = "1rem";
          nav.style.paddingBottom = "1rem";
          nav.style.backgroundColor = "var(--color-surface)";
          nav.style.borderBottom = "1px solid var(--color-structural-line)";
          nav.style.boxShadow = "0 4px 6px -1px rgb(0 0 0 / 0.1)";
        } else {
          nav.style.paddingTop = "";
          nav.style.paddingBottom = "";
          nav.style.backgroundColor = "";
          nav.style.borderBottom = "";
          nav.style.boxShadow = "";
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mousemove", () => {});
    };
  }, []);

  return null;
}
