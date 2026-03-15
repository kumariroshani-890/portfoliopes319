import { Download, ArrowDown, Github, Linkedin, Youtube } from "lucide-react";

const openLink = (url: string) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--hero-gradient)" }} />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto bg-card/60 backdrop-blur-sm rounded-2xl border border-border p-10 md:p-14 glow-border animate-fade-in-up">
          {/* Profile photo */}
          <div className="relative w-40 h-40 mx-auto mb-6" style={{ animation: "float 4s ease-in-out infinite" }}>
            <div className="absolute inset-0 rounded-full border-2 border-primary/40 animate-spin" style={{ animationDuration: "8s" }} />
            <div className="absolute inset-[-3px] rounded-full bg-gradient-to-tr from-primary via-accent to-primary animate-spin" style={{ animationDuration: "4s", opacity: 0.5 }} />
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

          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium" style={{ animation: "pulse-glow 3s ease-in-out infinite" }}>
            Open to Opportunities
          </div>

          <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-2 animate-slide-text-lr">
            Hi, I'm <span className="animate-title-float text-gradient font-extrabold">Roshani Kumari</span>
          </h1>
          <p className="text-2xl md:text-3xl font-heading font-extrabold text-gradient mb-6 glow-text animate-slide-text-rl animate-title-float">
            Aspiring Data Scientist
          </p>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            CSE undergraduate building real-world projects in <span className="text-primary font-bold">Data Science & ML</span>. Strong problem-solver with a passion for <span className="text-primary font-bold">analyzing data</span> and turning insights into impactful solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="https://drive.google.com/file/d/1feGhVrsj6aGWyrv3vyGelZ4oezdsgIdp/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all hover:scale-105"
            >
              <Download size={18} />
              Open Resume
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:border-primary/50 transition-all hover:scale-105"
            >
              View Projects
              <ArrowDown size={18} />
            </a>
          </div>

          {/* Social links - using onClick + window.open to avoid iframe blocking */}
          <div className="flex items-center justify-center gap-4">
            {[
              { url: "https://github.com/kumariroshani-890", icon: <Github size={20} />, hoverClass: "hover:text-primary hover:border-primary/50" },
              { url: "https://www.linkedin.com/in/roshani-kumari-0b9b9028a/", icon: <Linkedin size={20} />, hoverClass: "hover:text-primary hover:border-primary/50" },
              { url: "https://www.youtube.com/@DebugWithRoshani", icon: <Youtube size={20} />, hoverClass: "hover:text-red-500 hover:border-red-500/50" },
            ].map((s) => (
              <button
                key={s.url}
                onClick={() => openLink(s.url)}
                className={`p-3 rounded-full border border-border text-muted-foreground ${s.hoverClass} transition-all hover:scale-110 hover:-translate-y-1 cursor-pointer`}
              >
                {s.icon}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 animate-bounce">
          <ArrowDown className="mx-auto text-muted-foreground" size={24} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
