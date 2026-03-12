import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = ["About", "Skills", "Projects", "Journey", "Contact"];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <a href="#" className="text-xl font-heading font-bold text-primary">
          RK
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMobileOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-lg border-b border-border px-6 pb-4">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsMobileOpen(false)}
              className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
