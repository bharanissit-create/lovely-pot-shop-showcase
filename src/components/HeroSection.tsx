import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Beautiful plant pots arrangement"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container">
        <div className="max-w-2xl animate-fade-up">
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
            🌱 Welcome to our garden
          </span>
          
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
            Lovely Pot
            <span className="block text-gradient">Shop</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Beautiful Pots for Every Plant. Discover our handpicked collection of premium planters that bring life to your spaces.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="xl" onClick={scrollToProducts}>
              Explore Collection
            </Button>
            <Button variant="hero-outline" size="xl" onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>
              Our Story
            </Button>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-12 pt-8 border-t border-border/50">
            <div>
              <p className="font-display text-3xl font-bold text-primary">280+</p>
              <p className="text-muted-foreground text-sm">Products in Stock</p>
            </div>
            <div>
              <p className="font-display text-3xl font-bold text-primary">500+</p>
              <p className="text-muted-foreground text-sm">Happy Customers</p>
            </div>
            <div>
              <p className="font-display text-3xl font-bold text-primary">5★</p>
              <p className="text-muted-foreground text-sm">Customer Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
