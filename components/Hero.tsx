"use client";

import React from "react";
import { MinimalistHero } from "@/components/ui/minimalist-hero";

const socialLinks: { icon: React.ReactNode; href: string }[] = [];

export default function Hero() {
  return (
    <MinimalistHero
      showHeader={false}
      mainText="Project Manager & Construction Coordinator with 7+ years delivering complex builds on time and on budget. Architectural background, PM mindset — always."
      readMoreLink="#about"
      // Replace with Melissa's actual portrait photo
      imageSrc="/meli%20sideview.png"
      imageAlt="Melissa Morales Cañón – Senior Project Manager"
      overlayText={{
        part1: "project",
        part2: "manager.",
      }}
      socialLinks={socialLinks}
      locationText="Medellín, Colombia"
    />
  );
}
