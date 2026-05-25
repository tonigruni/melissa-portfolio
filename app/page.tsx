import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ToolsMarquee from "@/components/ToolsMarquee";
import WhyMe from "@/components/WhyMe";
import About from "@/components/About";
import Projects from "@/components/Projects";
import ImpactStatement from "@/components/ImpactStatement";
import ProfessionalSummary from "@/components/ProfessionalSummary";
import HomepageExperience from "@/components/HomepageExperience";
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
      <ProfessionalSummary />
      <HomepageExperience />
      <FooterSection />
    </>
  );
}
