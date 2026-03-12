const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-10 text-center">
          About <span className="text-gradient">Me</span>
        </h2>
        <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
          <p>
            I'm a B.Tech Computer Science & Engineering student at Lovely Professional University, passionate about building systems that scale and solve real-world problems.
          </p>
          <p>
            My approach is hands-on — I build projects to understand how real-world systems work, from frontend interfaces to the concepts behind cloud infrastructure.
          </p>
          <p>
            Currently, I'm focused on strengthening my foundations in cloud computing and DevOps, while actively working on projects that demonstrate clean architecture and scalable design.
          </p>
          <p>
            I believe in continuous learning and building incrementally — starting with solid fundamentals before moving to advanced implementations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
