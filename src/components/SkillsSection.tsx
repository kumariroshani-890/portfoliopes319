const skillCategories = [
  { title: "Programming Languages", skills: ["Java", "Python", "C", "C++", "JavaScript"] },
  { title: "Web Development", skills: ["HTML", "CSS", "NodeJS"] },
  { title: "Database & Tools", skills: ["MySQL", "Git", "Jupyter Notebook", "Google Colab", "VS Code"] },
  { title: "Soft Skills", skills: ["Problem-Solving", "Adaptability", "Teamwork"] },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3 text-center animate-fade-in-up">
          <span className="text-gradient">Skills</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 animate-fade-in-up animate-delay-1">
          Technologies and tools I work with
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat, i) => (
            <div
              key={cat.title}
              className="bg-card rounded-xl border border-border p-6 card-hover animate-fade-in-up"
              style={{ animationDelay: `${i * 0.15}s`, animation: `fade-in-up 0.7s ease-out ${i * 0.15}s both` }}
            >
              <h3 className="text-lg font-heading font-semibold text-foreground mb-1">{cat.title}</h3>
              <div className="flex flex-wrap gap-2 mt-3">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground text-sm font-medium transition-all hover:scale-110 hover:bg-primary/20 hover:text-primary cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
