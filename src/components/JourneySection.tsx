import { BookOpen, Award, GraduationCap, ExternalLink } from "lucide-react";

interface Certificate {
  title: string;
  org: string;
  link: string;
  preview: string;
}

const certificates: Certificate[] = [
  {
    title: "Computational Theory: Language Principle & Finite Automata Theory",
    org: "Infosys",
    link: "https://drive.google.com/file/d/1AXteKTkV8WFLDi8ckGoZdx3wtxKcn9eT/view?usp=drive_link",
    preview: "https://drive.google.com/thumbnail?id=1AXteKTkV8WFLDi8ckGoZdx3wtxKcn9eT&sz=w800",
  },
  {
    title: "Training in Git and GitHub",
    org: "Cipher Schools",
    preview: "/certificates/git-github.jpg",
    link: "/certificates/git-github.pdf",
  },
  {
    title: "Data Analytics Job Simulations — Deloitte",
    org: "Deloitte",
    link: "https://drive.google.com/file/d/14x9bxwi5bWu9iIMuhi7Pg5VkOhzzP0oa/view?usp=drive_link",
    preview: "https://drive.google.com/thumbnail?id=14x9bxwi5bWu9iIMuhi7Pg5VkOhzzP0oa&sz=w800",
  },
  {
    title: "Cloud Computing",
    org: "NPTEL",
    link: "https://drive.google.com/file/d/10DqI5stvOCxWM5yXaKUbTtkPX9hKE_ye/view?usp=drive_link",
    preview: "https://drive.google.com/thumbnail?id=10DqI5stvOCxWM5yXaKUbTtkPX9hKE_ye&sz=w800",
  },
];

const runnerUpHighlights = [
  { image: "/achievements/runner-up-1.jpg", link: "https://drive.google.com/file/d/1uEk7s9SqEgXseKfzVEaF0wDv3c24o2Z-/view?usp=sharing", alt: "2nd Runner-Up Coding Quiz image 1" },
  { image: "/achievements/runner-up-2.jpg", link: "https://drive.google.com/file/d/1YXaygv0BacHJcd8ohXfI7QCm19oyhnGJ/view?usp=sharing", alt: "2nd Runner-Up Coding Quiz image 2" },
];

const JourneySection = () => {
  return (
    <section id="journey" className="section-padding">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-12 text-center animate-fade-in-up">
          Journey in <span className="text-gradient">Data Science</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="bg-card rounded-xl border border-border p-6 animate-slide-in-left" style={{ animation: "slide-in-left 0.7s ease-out both" }}>
            <h3 className="text-lg font-heading font-semibold text-primary mb-4">Currently Learning</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Data analysis using Python</li>
              <li>• Data Structures & Algorithms for strong problem-solving</li>
              <li>• Data visualization tools and analytical techniques</li>
              <li>• Basics of DevOps practices and automation</li>
              <li>• Linux and development workflows</li>
            </ul>
          </div>
          <div className="bg-card rounded-xl border border-border p-6 animate-slide-in-right" style={{ animation: "slide-in-right 0.7s ease-out both" }}>
            <h3 className="text-lg font-heading font-semibold text-primary mb-4">Hands-on Practice</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Building data analysis and visualization projects</li>
              <li>• Implementing DSA problem-solving solutions</li>
              <li>• Developing Python and Java-based applications</li>
              <li>• Exploring tools and workflows used in modern software development</li>
            </ul>
          </div>
        </div>

        <blockquote className="text-center text-lg text-muted-foreground italic border-l-4 border-primary pl-6 max-w-2xl mx-auto mb-16 animate-fade-in-up">
          "My goal is to combine data science, problem solving, and modern development practices to build efficient and scalable technology solutions."
        </blockquote>

        {/* Training */}
        <div className="mb-16 animate-fade-in-up" style={{ animation: "fade-in-up 0.8s ease-out 0.2s both" }}>
          <h3 className="text-2xl font-heading font-bold text-foreground mb-6 flex items-center gap-2">
            <BookOpen className="text-primary" size={24} style={{ animation: "float 3s ease-in-out infinite" }} /> Training
          </h3>
          <div className="bg-card rounded-xl border border-border p-6 card-hover">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <h4 className="font-heading font-semibold text-foreground">Data Structures & Algorithm using Java</h4>
                <p className="text-sm text-muted-foreground mt-1">Cipher Schools • Jun' 2025 – Jul' 2025</p>
                <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                  <li>• Built a strong foundation in core data structures including arrays, linked lists, stacks, queues, and recursion using Java</li>
                  <li>• Strengthened problem-solving skills by implementing algorithms with a focus on time and space complexity optimization</li>
                  <li>• Applied object-oriented programming principles to design efficient, modular, and reusable solutions</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-3">
                  {["Java", "OOP Concepts", "Data Structures & Algorithms"].map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground text-xs hover:scale-110 hover:bg-primary/20 hover:text-primary transition-all cursor-default">{t}</span>
                  ))}
                </div>
              </div>
              <div className="md:w-48 shrink-0">
                <a href="https://drive.google.com/file/d/1Uy1bidKgkQG6i-Klx0UTD7BV6xGq8qcA/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="block rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all hover:scale-105">
                  <img src="/certificates/training-dsa.jpg" alt="DSA Training Certificate" loading="lazy" className="w-full h-auto" />
                  <p className="text-xs text-primary text-center py-1.5">View Certificate →</p>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Certificates */}
        <div className="mb-16 animate-fade-in-up" style={{ animation: "fade-in-up 0.8s ease-out 0.3s both" }}>
          <h3 className="text-2xl font-heading font-bold text-foreground mb-6 flex items-center gap-2">
            <Award className="text-primary" size={24} style={{ animation: "float 3.5s ease-in-out infinite" }} /> Certificates
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {certificates.map((c, i) => (
              <div key={c.title} className="bg-card rounded-lg border border-border overflow-hidden hover:border-primary/50 transition-all card-hover" style={{ animation: `fade-in-up 0.7s ease-out ${i * 0.15}s both` }}>
                <a href={c.link} target="_blank" rel="noopener noreferrer" className="block overflow-hidden">
                  <img src={c.preview} alt={c.title} loading="lazy" className="w-full h-40 object-cover object-top border-b border-border transition-transform duration-500 hover:scale-110" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                </a>
                <div className="p-4 text-center">
                  <p className="font-heading font-semibold text-foreground text-sm">{c.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{c.org}</p>
                  <a href={c.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-primary mt-2 hover:underline transition-all hover:scale-105">
                    View Certificate <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16 animate-fade-in-up" style={{ animation: "fade-in-up 0.8s ease-out 0.4s both" }}>
          <h3 className="text-2xl font-heading font-bold text-foreground mb-6 flex items-center gap-2">
            <Award className="text-primary" size={24} style={{ animation: "float 4s ease-in-out infinite" }} /> Achievements
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <a href="https://leetcode.com/medal/?showImg=0&id=8122549&isLevel=false" target="_blank" rel="noopener noreferrer" className="bg-card rounded-lg border border-border overflow-hidden hover:border-primary/50 transition-all card-hover block">
              <div className="w-full h-48 bg-secondary p-4 flex items-center justify-center">
                <img src="/achievements/leetcode-badge.png" alt="LeetCode 50-Day Badge" loading="lazy" className="h-full object-contain" style={{ animation: "float 4s ease-in-out infinite" }} />
              </div>
              <div className="p-4 text-center">
                <p className="text-sm font-semibold text-foreground">🏆 50-Day LeetCode Badge</p>
                <p className="text-xs text-muted-foreground mt-1">LeetCode & GeeksforGeeks</p>
              </div>
            </a>

            <div className="bg-card rounded-lg border border-border overflow-hidden p-4 card-hover">
              <p className="text-sm font-semibold text-foreground text-center">🏆 2nd Runner-Up in Coding Quiz</p>
              <p className="text-xs text-muted-foreground mt-1 text-center">LPU CPE</p>
              <div className="grid grid-cols-2 gap-3 mt-4">
                {runnerUpHighlights.map((item, index) => (
                  <a key={item.link} href={item.link} target="_blank" rel="noopener noreferrer" className="rounded-md overflow-hidden border border-border hover:border-primary/50 transition-all hover:scale-105" aria-label={`Open coding quiz achievement image ${index + 1}`}>
                    <img src={item.image} alt={item.alt} loading="lazy" className="w-full h-36 object-cover" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="animate-fade-in-up" style={{ animation: "fade-in-up 0.8s ease-out 0.5s both" }}>
          <h3 className="text-2xl font-heading font-bold text-foreground mb-6 flex items-center gap-2">
            <GraduationCap className="text-primary" size={24} style={{ animation: "float 3s ease-in-out infinite" }} /> Education
          </h3>
          <div className="space-y-4">
            {[
              { school: "Lovely Professional University", loc: "Punjab, India", degree: "Bachelor of Technology - Computer Science and Engineering", period: "Aug' 2023 – Jun' 2027", score: "CGPA: 7.23" },
              { school: "PM Shri Kendriya Vidyalaya No.1, AFS, Agra", loc: "Agra, Uttar Pradesh", degree: "Intermediate", period: "Apr' 2021 – Apr' 2022", score: "Percentage: 71%" },
              { school: "PM Shri Kendriya Vidyalaya No.2, AFS, Tezpur", loc: "Tezpur, Assam", degree: "Matriculation", period: "Apr' 2019 – Apr' 2020", score: "Percentage: 95%" },
            ].map((e, i) => (
              <div key={e.school} className="bg-card rounded-lg border border-border p-5 card-hover" style={{ animation: `fade-in-up 0.7s ease-out ${i * 0.15}s both` }}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h4 className="font-heading font-semibold text-foreground">{e.school}</h4>
                    <p className="text-xs text-muted-foreground">{e.loc}</p>
                    <p className="text-sm text-muted-foreground mt-1">{e.degree}</p>
                  </div>
                  <div className="text-right mt-2 sm:mt-0">
                    <p className="text-xs text-muted-foreground">{e.period}</p>
                    <p className="text-sm text-primary font-medium">{e.score}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
