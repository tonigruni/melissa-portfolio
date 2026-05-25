import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ToolsMarquee from "@/components/ToolsMarquee";
import WhyMe from "@/components/WhyMe";
import About from "@/components/About";
import Projects from "@/components/Projects";
import ImpactStatement from "@/components/ImpactStatement";
import ExperienceHero from "@/components/experience/ExperienceHero";
import ExperienceTimeline from "@/components/experience/ExperienceTimeline";
import ExperienceCTA from "@/components/experience/ExperienceCTA";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ToolsMarquee />
      <WhyMe />
      <About />
      <Projects />
      <ImpactStatement />
      <ExperienceHero />
      <ExperienceTimeline />
      <ExperienceCTA />
      <FooterSection />
    </>
  );
}
