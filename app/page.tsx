import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ToolsMarquee from "@/components/ToolsMarquee";
import WhyMe from "@/components/WhyMe";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import About from "@/components/About";
import TestimonialsSection from "@/components/TestimonialsSection";
import Projects from "@/components/Projects";
import ImpactStatement from "@/components/ImpactStatement";
import ExperienceHero from "@/components/experience/ExperienceHero";
import ExperienceTimeline from "@/components/experience/ExperienceTimeline";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ToolsMarquee />
      <WhyMe />
      <ProjectsCarousel />
      <About />
      <TestimonialsSection />
      <Projects />
      <ImpactStatement />
      <ExperienceHero />
      <ExperienceTimeline />
      <FooterSection />
    </>
  );
}
