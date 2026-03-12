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
  period: string;
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    icon: "🤖",
    title: "Workout Assistant Chatbot",
    period: "Apr' 2025 – May' 2025",
    problem: "Users lack personalized, instant fitness guidance and workout recommendations",
    solution: "AI-powered fitness chatbot using Flask that delivers personalized workout plans and goal-based training recommendations",
    role: "Full-Stack Developer – Built backend logic, integrated AI model, and optimized user interaction flow",
    highlights: ["AI-powered exercise suggestions", "Goal-based training plans", "Fast & adaptive responses", "DeepSeek AI integration"],
    techStack: ["Python", "Flask", "DeepSeek AI", "LangChain"],
    outcome: "Provides personalized, intelligent fitness guidance instantly—helping users get tailored workout plans without needing a personal trainer.",
    githubUrl: "https://github.com/kumariroshani-890",
  },
  {
    icon: "📊",
    title: "Public Libraries Interactive Dashboard",
    period: "Mar' 2025 – Apr' 2025",
    problem: "Complex library data across multiple counties is hard to analyze and visualize",
    solution: "Excel-based interactive dashboard to analyze key library metrics with dynamic visuals",
    role: "Data Analyst – Designed PivotTables, charts, slicers, and timelines for data visualization",
    highlights: ["PivotTables & Charts", "Slicers & Timelines", "Multi-county analysis", "Clean dynamic visuals"],
    techStack: ["Excel", "PivotTables", "Charts", "Slicers", "Data Analysis"],
    outcome: "Simplified complex library data into clean, dynamic visuals for better decision-making across multiple counties.",
    githubUrl: "https://github.com/kumariroshani-890",
  },
  {
    icon: "💾",
    title: "Real Time Memory Allocation Tracker",
    period: "Feb' 2025 – Mar' 2025",
    problem: "Memory allocation techniques are abstract and hard to understand for OS learners",
    solution: "Graphical desktop application simulating best-fit and worst-fit memory allocation in real-time",
    role: "Developer – Built GUI application with real-time system metrics integration",
    highlights: ["Real-time visualization", "Best-fit & Worst-fit simulation", "CPU & RAM monitoring", "Educational tool"],
    techStack: ["Python", "Tkinter", "psutil", "OOP"],
    outcome: "Makes OS memory allocation concepts tangible through interactive visualization—helping students understand complex concepts through hands-on simulation.",
    githubUrl: "https://github.com/kumariroshani-890",
  },
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
              <div className="flex items-start gap-4 mb-1">
                <span className="text-3xl">{p.icon}</span>
                <div>
                  <h3 className="text-xl font-heading font-bold text-foreground">{p.title}</h3>
                  <p className="text-xs text-muted-foreground">{p.period}</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-4 mt-4 text-sm">
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
      </div>
    </section>
  );
};

export default ProjectsSection;
