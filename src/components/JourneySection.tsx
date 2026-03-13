import { BookOpen, Award, GraduationCap, ExternalLink } from "lucide-react";
import { useState } from "react";

const JourneySection = () => {
  const [expandedCert, setExpandedCert] = useState<string | null>(null);

  const certificates = [
    { title: "Computational Theory: Language Principle & Finite Automata Theory", org: "Infosys", link: "https://drive.google.com/file/d/1AXteKTkV8WFLDi8ckGoZdx3wtxKcn9eT/view?usp=drive_link", preview: `https://drive.google.com/thumbnail?id=1AXteKTkV8WFLDi8ckGoZdx3wtxKcn9eT&sz=w800` },
    { title: "Training in Git and GitHub", org: "Cipher Schools", preview: "/certificates/git-github.jpg", link: "/certificates/git-github.pdf" },
    { title: "Data Analytics Job Simulations — Deloitte", org: "Deloitte", link: "https://drive.google.com/file/d/14x9bxwi5bWu9iIMuhi7Pg5VkOhzzP0oa/view?usp=drive_link", preview: `https://drive.google.com/thumbnail?id=14x9bxwi5bWu9iIMuhi7Pg5VkOhzzP0oa&sz=w800` },
    { title: "Cloud Computing", org: "NPTEL", link: "https://drive.google.com/file/d/10DqI5stvOCxWM5yXaKUbTtkPX9hKE_ye/view?usp=drive_link", preview: `https://drive.google.com/thumbnail?id=10DqI5stvOCxWM5yXaKUbTtkPX9hKE_ye&sz=w800` },
  ];

  return (
    <section id="journey" className="section-padding">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-12 text-center">
          Journey in <span className="text-gradient">Data Science</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="bg-card rounded-xl border border-border p-6">
            <h3 className="text-lg font-heading font-semibold text-primary mb-4">Currently Learning</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Data analysis using Python</li>
              <li>• Data Structures & Algorithms for strong problem-solving</li>
              <li>• Data visualization tools and analytical techniques</li>
              <li>• Basics of DevOps practices and automation</li>
              <li>• Linux and development workflows</li>
            </ul>
          </div>
          <div className="bg-card rounded-xl border border-border p-6">
            <h3 className="text-lg font-heading font-semibold text-primary mb-4">Hands-on Practice</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Building data analysis and visualization projects</li>
              <li>• Implementing DSA problem-solving solutions</li>
              <li>• Developing Python and Java-based applications</li>
              <li>• Exploring tools and workflows used in modern software development</li>
            </ul>
          </div>
        </div>

        <blockquote className="text-center text-lg text-muted-foreground italic border-l-4 border-primary pl-6 max-w-2xl mx-auto mb-16">
          "My goal is to combine data science, problem solving, and modern development practices to build efficient and scalable technology solutions."
        </blockquote>

        {/* Training */}
        <div className="mb-16">
          <h3 className="text-2xl font-heading font-bold text-foreground mb-6 flex items-center gap-2">
            <BookOpen className="text-primary" size={24} /> Training
          </h3>
          <div className="bg-card rounded-xl border border-border p-6">
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
                    <span key={t} className="px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground text-xs">{t}</span>
                  ))}
                </div>
              </div>
              <div className="md:w-48 shrink-0">
                <a href="/certificates/training-dsa.pdf" target="_blank" rel="noopener noreferrer" className="block rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-colors">
                  <img src="/certificates/training-dsa.jpg" alt="DSA Training Certificate" className="w-full h-auto" />
                  <p className="text-xs text-primary text-center py-1.5">View Certificate →</p>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Certificates */}
        <div className="mb-16">
          <h3 className="text-2xl font-heading font-bold text-foreground mb-6 flex items-center gap-2">
            <Award className="text-primary" size={24} /> Certificates
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {certificates.map((c) => (
              <div key={c.title} className="bg-card rounded-lg border border-border overflow-hidden hover:border-primary/50 transition-colors">
                {c.preview && (
                  <div
                    className="cursor-pointer"
                    onClick={() => setExpandedCert(expandedCert === c.title ? null : c.title)}
                  >
                    <img
                      src={c.preview}
                      alt={c.title}
                      className="w-full h-40 object-cover object-top border-b border-border"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>
                )}
                <div className="p-4 text-center">
                  <p className="font-heading font-semibold text-foreground text-sm">{c.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{c.org}</p>
                  {c.link && (
                    <a
                      href={c.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-primary mt-2 hover:underline"
                    >
                      View Certificate <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h3 className="text-2xl font-heading font-bold text-foreground mb-6 flex items-center gap-2">
            <Award className="text-primary" size={24} /> Achievements
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <a href="https://leetcode.com/medal/?showImg=0&id=8122549&isLevel=false" target="_blank" rel="noopener noreferrer" className="bg-card rounded-lg border border-border overflow-hidden hover:border-primary/50 transition-colors block">
              <img src="/achievements/leetcode-badge.png" alt="LeetCode 50-Day Badge" className="w-full h-48 object-contain bg-secondary p-4" />
              <div className="p-4 text-center">
                <p className="text-sm font-semibold text-foreground">🏆 50-Day LeetCode Badge</p>
                <p className="text-xs text-muted-foreground mt-1">LeetCode & GeeksforGeeks</p>
              </div>
            </a>
            <div className="bg-card rounded-lg border border-border overflow-hidden">
              <img src="/achievements/coding-quiz.jpg" alt="2nd Runner-Up Coding Quiz" className="w-full h-48 object-cover" />
              <div className="p-4 text-center">
                <p className="text-sm font-semibold text-foreground">🏆 2nd Runner-Up in Coding Quiz</p>
                <p className="text-xs text-muted-foreground mt-1">LPU CPE</p>
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-2xl font-heading font-bold text-foreground mb-6 flex items-center gap-2">
            <GraduationCap className="text-primary" size={24} /> Education
          </h3>
          <div className="space-y-4">
            {[
              { school: "Lovely Professional University", loc: "Punjab, India", degree: "Bachelor of Technology - Computer Science and Engineering", period: "Aug' 2023 – Jun' 2027", score: "CGPA: 7.23" },
              { school: "PM Shri Kendriya Vidyalaya No.1, AFS, Agra", loc: "Agra, Uttar Pradesh", degree: "Intermediate", period: "Apr' 2021 – Apr' 2022", score: "Percentage: 71%" },
              { school: "PM Shri Kendriya Vidyalaya No.2, AFS, Tezpur", loc: "Tezpur, Assam", degree: "Matriculation", period: "Apr' 2019 – Apr' 2020", score: "Percentage: 95%" },
            ].map((e) => (
              <div key={e.school} className="bg-card rounded-lg border border-border p-5">
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
