import { Github, Linkedin, Mail, Youtube } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:roshni1985upl@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}`;
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3 text-center">
          Get In <span className="text-gradient">Touch</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12">
          Let's connect and discuss opportunities
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Connect */}
          <div className="bg-card rounded-xl border border-border p-6">
            <h3 className="text-lg font-heading font-semibold text-foreground mb-4">Connect With Me</h3>
            <p className="text-sm text-muted-foreground mb-6">Click any icon to connect with me!</p>
            <div className="flex gap-4">
              <a href="https://github.com/kumariroshani-890" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors">
                <Github size={22} />
              </a>
              <a href="https://www.linkedin.com/in/roshani-kumari-0b9b9028a/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors">
                <Linkedin size={22} />
              </a>
              <a href="mailto:roshni1985upl@gmail.com" className="p-3 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors">
                <Mail size={22} />
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card rounded-xl border border-border p-6">
            <h3 className="text-lg font-heading font-semibold text-foreground mb-4">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
