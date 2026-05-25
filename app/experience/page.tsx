import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ExperienceHero from "@/components/experience/ExperienceHero";
import ExperienceTimeline from "@/components/experience/ExperienceTimeline";
import TechnicalMastery from "@/components/experience/TechnicalMastery";
import Competencies from "@/components/experience/Competencies";
import ExperienceCTA from "@/components/experience/ExperienceCTA";
import ExperienceFooter from "@/components/experience/ExperienceFooter";

export const metadata: Metadata = {
  title: "Experience | Melissa Morales Cañón",
  description:
    "A decade of leadership in architectural project management — from junior architect to senior project manager.",
};

export default function ExperiencePage() {
  return (
    <>
      <Navbar />
      <main className="pt-32">
        <ExperienceHero />
        <ExperienceTimeline />
        <TechnicalMastery />
        <Competencies />
        <ExperienceCTA />
        <ExperienceFooter />
      </main>
    </>
  );
}
