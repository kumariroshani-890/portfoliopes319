import { Download, ArrowDown, Github, Linkedin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0" style={{ background: "var(--hero-gradient)" }} />

      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Hero card */}
        <div className="max-w-3xl mx-auto bg-card/60 backdrop-blur-sm rounded-2xl border border-border p-10 md:p-14 glow-border">
          {/* Profile photo with rotating border */}
          <div className="relative w-40 h-40 mx-auto mb-6">
            <div className="absolute inset-0 rounded-full border-2 border-primary/40 animate-spin" style={{ animationDuration: "8s" }} />
            <div className="absolute inset-1 rounded-full overflow-hidden bg-secondary">
              <img
                src="/profile-photo.jpg"
                alt="Roshani Kumari"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=RK&background=0ea5e9&color=fff&size=200";
                }}
              />
            </div>
          </div>

          {/* Open to opportunities badge */}
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium">
            Open to Opportunities
          </div>

          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-2">
            Hi, I'm Roshani Kumari
          </h1>
          <p className="text-2xl md:text-3xl font-heading font-semibold text-gradient mb-6 glow-text">
            Aspiring Data Scientist
          </p>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            CSE undergraduate building real-world projects in{" "}
            <span className="text-primary">Data Science & ML</span>. Strong problem-solver with a passion for{" "}
            <span className="text-primary">analyzing data</span> and turning insights into impactful solutions.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              <Download size={18} />
              Download Resume
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:border-primary/50 transition-colors"
            >
              View Projects
              <ArrowDown size={18} />
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://github.com/kumariroshani-890"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/roshani-kumari-0b9b9028a/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-12 animate-bounce">
          <ArrowDown className="mx-auto text-muted-foreground" size={24} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
