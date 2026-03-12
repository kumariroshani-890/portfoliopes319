import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="font-heading font-semibold text-foreground mb-1">Roshani Kumari</p>
        <p className="text-sm text-muted-foreground mb-4">Aspiring Data Scientist</p>
        <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
          © 2025 Roshani Kumari. All rights reserved. • Built with
          <Heart size={12} className="text-primary" />
          and cloud dreams
        </p>
      </div>
    </footer>
  );
};

export default Footer;
