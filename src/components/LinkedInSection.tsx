import { Linkedin, ExternalLink, ThumbsUp, MessageCircle } from "lucide-react";

const openExternalLink = (url: string) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) {
    newWindow.opener = null;
    newWindow.focus();
    return;
  }
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.target = "_blank";
  anchor.rel = "noopener noreferrer";
  anchor.style.display = "none";
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
};

const articles = [
  {
    title: "My Journey into Data Science — From Curiosity to Building Real Projects",
    excerpt:
      "How I transitioned from a curious CSE student to building end-to-end data science projects, and what I learned along the way.",
    date: "Feb 2025",
    likes: 48,
    comments: 12,
    tags: ["Data Science", "Career"],
    url: "https://www.linkedin.com/in/roshani-kumari-0b9b9028a/",
  },
  {
    title: "Why Every Developer Should Learn DSA — My LeetCode Experience",
    excerpt:
      "Sharing my experience of solving 200+ problems on LeetCode and how it sharpened my problem-solving and coding interview skills.",
    date: "Jan 2025",
    likes: 72,
    comments: 18,
    tags: ["DSA", "LeetCode"],
    url: "https://www.linkedin.com/in/roshani-kumari-0b9b9028a/",
  },
  {
    title: "Building a CI/CD Pipeline with Jenkins & Docker — A Beginner's Guide",
    excerpt:
      "A step-by-step walkthrough of my DevOps project where I set up a fully automated CI/CD pipeline for a Java application.",
    date: "Dec 2024",
    likes: 56,
    comments: 9,
    tags: ["DevOps", "CI/CD"],
    url: "https://www.linkedin.com/in/roshani-kumari-0b9b9028a/",
  },
  {
    title: "Tips for B.Tech Students: How to Stand Out in the Tech Industry",
    excerpt:
      "Practical advice on building projects, contributing to open source, and creating an impactful portfolio as an engineering student.",
    date: "Nov 2024",
    likes: 93,
    comments: 24,
    tags: ["Career Tips", "Students"],
    url: "https://www.linkedin.com/in/roshani-kumari-0b9b9028a/",
  },
];

const LinkedInSection = () => {
  return (
    <section id="articles" className="section-padding">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-foreground mb-4 text-center">
          <span className="animate-title-float">Featured</span>{" "}
          <span className="text-gradient animate-title-float font-extrabold" style={{ animationDelay: "0.5s" }}>
            Articles
          </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto animate-fade-in-up">
          Insights, experiences, and learnings I share on LinkedIn
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {articles.map((article, i) => (
            <button
              key={i}
              onClick={() => openExternalLink(article.url)}
              className={`group relative text-left rounded-2xl border border-border bg-card/60 backdrop-blur-sm p-6 card-hover cursor-pointer ${
                i % 2 === 0 ? "animate-slide-text-lr" : "animate-slide-text-rl"
              }`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {/* Accent bar */}
              <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                  {article.title}
                </h3>
                <ExternalLink size={16} className="shrink-0 mt-1 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{article.excerpt}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-full text-xs font-medium border border-primary/20 bg-primary/10 text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Linkedin size={14} className="text-primary" />
                  {article.date}
                </span>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <ThumbsUp size={13} /> {article.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle size={13} /> {article.comments}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="text-center mt-10 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <button
            onClick={() => openExternalLink("https://www.linkedin.com/in/roshani-kumari-0b9b9028a/")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary/30 bg-primary/10 text-primary font-medium hover:bg-primary/20 transition-all hover:scale-105 cursor-pointer"
          >
            <Linkedin size={18} />
            View All on LinkedIn
          </button>
        </div>
      </div>
    </section>
  );
};

export default LinkedInSection;
