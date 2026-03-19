import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import LinkedInSection from "@/components/LinkedInSection";
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
          className="h-full w-full scale-105 object-cover opacity-[0.05] blur-[2px]"
          style={{ animation: "slow-rotate 60s linear infinite" }}
        />
      </div>

      <div className="pointer-events-none fixed inset-0 z-[1]">
        <div className="portfolio-bg-glow portfolio-bg-glow--one" />
        <div className="portfolio-bg-glow portfolio-bg-glow--two" />
        <div className="portfolio-bg-glitter" />
        <div className="portfolio-bg-mist" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <LinkedInSection />
        <JourneySection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
