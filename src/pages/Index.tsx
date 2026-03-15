import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import JourneySection from "@/components/JourneySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Spiral background image */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <img
          src="/spiral-bg.png"
          alt=""
          className="w-full h-full object-cover opacity-[0.07]"
          style={{ animation: "slow-rotate 60s linear infinite" }}
        />
      </div>

      <div className="pointer-events-none fixed inset-0 z-[1]">
        <div className="portfolio-bg-glow portfolio-bg-glow--one" />
        <div className="portfolio-bg-glow portfolio-bg-glow--two" />
        <div className="portfolio-bg-glitter" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <JourneySection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
