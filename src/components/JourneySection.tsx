import { BookOpen, Award, GraduationCap, Pen } from "lucide-react";

const JourneySection = () => {
  return (
    <section id="journey" className="section-padding">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Cloud Learning Journey */}
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-12 text-center">
          Cloud Learning <span className="text-gradient">Journey</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="bg-card rounded-xl border border-border p-6">
            <h3 className="text-lg font-heading font-semibold text-primary mb-4">Currently Learning</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• AWS core services (EC2, S3, IAM)</li>
              <li>• CI/CD pipelines & automation</li>
              <li>• Terraform for Infrastructure as Code</li>
              <li>• Docker containerization</li>
              <li>• Linux & shell scripting</li>
            </ul>
          </div>
          <div className="bg-card rounded-xl border border-border p-6">
            <h3 className="text-lg font-heading font-semibold text-primary mb-4">Hands-on Deployments</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• DevOps CI/CD mini pipeline</li>
              <li>• S3 static website hosting</li>
              <li>• EC2 Apache web server setup</li>
              <li>• Terraform AWS infrastructure</li>
            </ul>
          </div>
        </div>

        <blockquote className="text-center text-lg text-muted-foreground italic border-l-4 border-primary pl-6 max-w-2xl mx-auto mb-16">
          "My goal is to transform my projects into scalable, cloud-deployed applications and build a strong foundation for a career in cloud engineering."
        </blockquote>

        {/* Training */}
        <div className="mb-16">
          <h3 className="text-2xl font-heading font-bold text-foreground mb-6 flex items-center gap-2">
            <BookOpen className="text-primary" size={24} /> Training
          </h3>
          <div className="bg-card rounded-xl border border-border p-6">
            <h4 className="font-heading font-semibold text-foreground">Data Structures and Algorithm with Java</h4>
            <p className="text-sm text-muted-foreground mt-1">CipherSchools • Jul' 2025 – Aug' 2025</p>
            <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
              <li>• Completed a summer training program in Java with DSA at CipherSchool, focusing on core data structures, algorithms, and efficient problem-solving.</li>
              <li>• Built a Library Tracker project using Java, implementing features for book management, user handling, and borrowing records.</li>
            </ul>
            <div className="flex flex-wrap gap-2 mt-3">
              {["Java", "OOP Concepts", "Data Structures & Algorithms"].map((t) => (
                <span key={t} className="px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground text-xs">{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Certificates */}
        <div className="mb-16">
          <h3 className="text-2xl font-heading font-bold text-foreground mb-6 flex items-center gap-2">
            <Award className="text-primary" size={24} /> Certificates
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { title: "Responsive Web Design", org: "freeCodeCamp" },
              { title: "Social Networks", org: "NPTEL – IIT Madras" },
              { title: "DSA with Java", org: "CipherSchools" },
            ].map((c) => (
              <div key={c.title} className="bg-card rounded-lg border border-border p-4 card-hover text-center">
                <p className="font-heading font-semibold text-foreground text-sm">{c.title}</p>
                <p className="text-xs text-muted-foreground mt-1">{c.org}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h3 className="text-2xl font-heading font-bold text-foreground mb-6 flex items-center gap-2">
            <Award className="text-primary" size={24} /> Achievements
          </h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "1st Runner-Up – HackWithVertos Hackathon",
              "Top 10 Finalist – Miss Verbal Cosmos",
              "Keynote Speaker – SEMS Foundation",
              "5 Merit Certificates – Public Speaking",
            ].map((a) => (
              <div key={a} className="bg-card rounded-lg border border-border p-4 text-sm text-muted-foreground">
                🏆 {a}
              </div>
            ))}
          </div>
        </div>

        {/* Articles */}
        <div className="mb-16">
          <h3 className="text-2xl font-heading font-bold text-foreground mb-6 flex items-center gap-2">
            <Pen className="text-primary" size={24} /> Articles
          </h3>
          <p className="text-muted-foreground text-sm mb-4">My thoughts and reflections on LinkedIn</p>
          <div className="space-y-3">
            {[
              "India's Language Wars: Balancing Unity and Diversity (Ektha mai Anektha)",
              "When Borders Tense, India Stands Strong – A Student's Reflection from Punjab",
            ].map((a) => (
              <a key={a} href="#" className="block bg-card rounded-lg border border-border p-4 text-sm text-foreground hover:border-primary/50 transition-colors">
                📝 {a}
                <span className="text-primary text-xs ml-2">Read on LinkedIn →</span>
              </a>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-2xl font-heading font-bold text-foreground mb-6 flex items-center gap-2">
            <GraduationCap className="text-primary" size={24} /> Education
          </h3>
          <div className="space-y-4">
            {[
              { school: "Lovely Professional University", loc: "Punjab, India", degree: "Bachelor of Technology - Computer Science and Engineering", period: "Aug' 2023 – Jun' 2027", score: "CGPA: 6.3" },
              { school: "Fittjee World School", loc: "Hyd, Telangana", degree: "Intermediate", period: "Apr' 2022 – Mar' 2023", score: "Percentage: 83%" },
              { school: "Bhashyam High School", loc: "Hyd, Telangana", degree: "Matriculation", period: "Apr' 2020 – Mar' 2021", score: "CGPA: 10.0" },
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
