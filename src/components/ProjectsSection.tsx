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
    icon: "📡",
    title: "Advanced Telecom Customer Churn Analysis Dashboard",
    period: "2025",
    problem: "Telecom companies struggle to identify and reduce customer churn patterns",
    solution: "Power BI dashboard analyzing customer churn with advanced visualizations and actionable insights",
    role: "Data Analyst – Designed interactive Power BI dashboard with churn metrics and trend analysis",
    highlights: ["Customer churn analysis", "Power BI visualizations", "Actionable insights", "Trend identification"],
    techStack: ["Power BI", "Data Analytics", "Dashboard Design", "Data Visualization"],
    outcome: "Provides telecom businesses with clear, data-driven insights to understand churn patterns and take proactive retention measures.",
    githubUrl: "https://github.com/kumariroshani-890/Advanced-Telecom-Customer-Churn-Analysis-Dashboard",
    liveUrl: "https://www.linkedin.com/posts/roshanikumari110_powerbi-dataanalytics-customerchurn-activity-7408097500055818240-MJvC?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZMPY0B2hJMHWimzYC3n6ByU3jSBZ8TkVg",
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
    githubUrl: "https://github.com/kumariroshani-890/INT217_INTERACTIVEDASHBOARD_PUBLICLIBRARIES",
    liveUrl: "https://www.linkedin.com/posts/roshanikumari110_lpu-cse-datascience-activity-7316789902266773504-2uGJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZMPY0B2hJMHWimzYC3n6ByU3jSBZ8TkVg",
  },
  {
    icon: "⚙️",
    title: "Java Maven CI/CD Demo",
    period: "2025",
    problem: "Setting up continuous integration and deployment pipelines can be complex for Java projects",
    solution: "A demo project showcasing CI/CD pipeline setup using Java and Maven with automated build and deployment",
    role: "Developer – Configured Maven build system and CI/CD pipeline for automated workflows",
    highlights: ["CI/CD Pipeline", "Maven build automation", "Automated testing", "Deployment workflow"],
    techStack: ["Java", "Maven", "CI/CD", "Git"],
    outcome: "Demonstrates end-to-end CI/CD pipeline setup for Java applications, enabling automated builds, tests, and deployments.",
    githubUrl: "https://github.com/kumariroshani-890/java-maven-ci-cd-demo",
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
                    <ExternalLink size={14} /> LinkedIn Post
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
