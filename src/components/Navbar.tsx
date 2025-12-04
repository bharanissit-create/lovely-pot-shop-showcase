import { Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <nav className="container flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2 group">
          <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
            <Leaf className="w-5 h-5 text-primary" />
          </div>
          <span className="font-display text-xl font-semibold text-foreground">
            Lovely Pot Shop
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("products")}
            className="text-muted-foreground hover:text-foreground transition-colors font-medium"
          >
            Products
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-muted-foreground hover:text-foreground transition-colors font-medium"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-muted-foreground hover:text-foreground transition-colors font-medium"
          >
            Contact
          </button>
        </div>

        <Button variant="hero" size="sm" onClick={() => scrollToSection("products")}>
          Shop Now
        </Button>
      </nav>
    </header>
  );
};

export default Navbar;
