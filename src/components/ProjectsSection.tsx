import { ExternalLink, Github } from "lucide-react";

interface Project {
  icon: string;
  title: string;
  problem: string;
  solution: string;
  role: string;
  highlights?: string[];
  techStack: string[];
  outcome: string;
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    icon: "🌱",
    title: "Vidhura – Sustainable Farming Guide",
    problem: "Farmers lack instant, localized, language-friendly guidance",
    solution: "Web platform designed for accessibility and structured information",
    role: "Frontend Developer – Built responsive UI, structured content, and collaborated on UX design",
    highlights: ["Voice-based interaction concept", "Location-aware guidance idea", "Clean, accessible UI", "Strong frontend structure"],
    techStack: ["HTML", "CSS", "JavaScript", "React", "GitHub"],
    outcome: "Bridges the digital divide for rural farmers by providing accessible, language-friendly guidance that can transform agricultural practices and livelihoods.",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    icon: "♻️",
    title: "EchoChic – Clean4Change",
    problem: "Limited awareness about plastic reduction and sustainable choices",
    solution: "Purpose-driven web platform promoting sustainability awareness",
    role: "Full-Stack Developer – Designed and developed the complete website architecture",
    techStack: ["HTML", "CSS", "JavaScript", "GitHub"],
    outcome: "Drives environmental consciousness by making sustainability actionable—empowering individuals to make eco-friendly choices that collectively reduce plastic waste.",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    icon: "📊",
    title: "DevOps Log Monitor",
    problem: "Server logs are scattered and hard to analyze manually in real-time",
    solution: "Automated log monitoring system that tracks, filters, and alerts on critical server events",
    role: "DevOps Engineer – Built the complete log monitoring and alerting pipeline",
    techStack: ["Linux", "Bash", "Shell Scripting", "Cron", "GitHub"],
    outcome: "Simplifies server health tracking for small teams—automating log analysis saves hours of manual monitoring and helps catch issues before they escalate.",
    githubUrl: "#",
  },
];

const awsProjects = [
  { title: "Terraform AWS Beginner Guide", desc: "Infrastructure as Code learning with Terraform on AWS" },
  { title: "S3 Static Website", desc: "Deploying static websites using AWS S3 bucket hosting" },
  { title: "EC2 Apache Web Server", desc: "Setting up Apache web server on EC2 instance" },
  { title: "Vidhura AWS Deployment", desc: "Deploying Vidhura project as static website on AWS" },
  { title: "Simple CI/CD Pipeline – AWS Sandbox", desc: "Building and automating CI/CD workflows on AWS" },
  { title: "DevOps CI/CD Mini Pipeline", desc: "Automated CI/CD pipeline with Docker and GitHub Actions" },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3 text-center">
          <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12">
          Hands-on work demonstrating my technical journey
        </p>

        <div className="space-y-8">
          {projects.map((p) => (
            <div key={p.title} className="bg-card rounded-xl border border-border p-6 md:p-8 card-hover">
              <div className="flex items-start gap-4 mb-4">
                <span className="text-3xl">{p.icon}</span>
                <h3 className="text-xl font-heading font-bold text-foreground">{p.title}</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
                <div>
                  <p className="text-primary font-medium mb-1">Problem:</p>
                  <p className="text-muted-foreground">{p.problem}</p>
                </div>
                <div>
                  <p className="text-primary font-medium mb-1">Solution:</p>
                  <p className="text-muted-foreground">{p.solution}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                <span className="text-primary font-medium">My Role: </span>
                {p.role}
              </p>
              {p.highlights && (
                <div className="mb-4">
                  <p className="text-primary font-medium text-sm mb-2">Highlights:</p>
                  <ul className="grid grid-cols-2 gap-1 text-sm text-muted-foreground">
                    {p.highlights.map((h) => (
                      <li key={h}>• {h}</li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="flex flex-wrap gap-2 mb-4">
                {p.techStack.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-medium">
                    {t}
                  </span>
                ))}
              </div>
              <div className="bg-secondary/50 rounded-lg p-4 mb-4">
                <p className="text-sm text-muted-foreground">
                  <span className="text-primary">💡 Learning Outcome: </span>
                  {p.outcome}
                </p>
              </div>
              <div className="flex gap-3">
                {p.liveUrl && (
                  <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
                    <ExternalLink size={14} /> Live Project
                  </a>
                )}
                {p.githubUrl && (
                  <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-foreground text-sm font-medium hover:border-primary/50 transition-colors">
                    <Github size={14} /> GitHub Repo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* AWS Learning Projects */}
        <div className="mt-12">
          <h3 className="text-2xl font-heading font-bold text-foreground mb-2 text-center">
            AWS Deployment Learning Projects
          </h3>
          <p className="text-primary text-sm text-center mb-8">🚀 Currently exploring – hands-on practice projects for cloud fundamentals</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {awsProjects.map((p) => (
              <div key={p.title} className="bg-card rounded-lg border border-border p-5 card-hover">
                <h4 className="text-sm font-heading font-semibold text-foreground mb-2">{p.title}</h4>
                <p className="text-xs text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
