const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-10 text-center animate-fade-in-up">
          About <span className="text-gradient">Me</span>
        </h2>
        <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
          {[
            "Hello! I'm Roshani Kumari, a B.Tech Computer Science & Engineering student at Lovely Professional University, specializing in Data Science with an open minor in DevOps.",
            "I'm passionate about technology, problem solving, and building practical solutions using data and software. Currently, I am strengthening my skills in Data Structures & Algorithms, while working on projects using Python and Java.",
            "I enjoy learning by building and experimenting with real projects, and I'm also exploring DevOps practices and modern development workflows.",
            "My goal is to grow into a skilled software engineer who can build scalable and impactful technology solutions.",
          ].map((text, i) => (
            <p key={i} className={`animate-fade-in-up animate-delay-${i + 1}`} style={{ animationDelay: `${i * 0.15}s` }}>
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
