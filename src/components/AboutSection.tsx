import { Heart, Leaf, Sparkles } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image/Visual Side */}
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-accent via-muted to-sage-light/30 p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 animate-float">
                  <Leaf className="w-12 h-12 text-primary" />
                </div>
                <p className="font-display text-6xl font-bold text-foreground/10">Since</p>
                <p className="font-display text-8xl font-bold text-primary">2018</p>
              </div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -right-4 bg-card rounded-2xl p-4 shadow-card animate-float" style={{ animationDelay: "0.5s" }}>
              <Heart className="w-8 h-8 text-primary mb-2" />
              <p className="font-semibold text-foreground">Made with Love</p>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-card rounded-2xl p-4 shadow-card animate-float" style={{ animationDelay: "1s" }}>
              <Sparkles className="w-8 h-8 text-secondary mb-2" />
              <p className="font-semibold text-foreground">Quality First</p>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
              About Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Welcome to <span className="text-primary font-semibold">Lovely Pot Shop</span>, your one-stop destination for beautiful and affordable plant pots! What started as a small passion project in 2018 has grown into a beloved local business serving garden enthusiasts across the city.
              </p>
              <p>
                We believe every plant deserves a beautiful home. That's why we carefully source and handpick each pot in our collection – from traditional terracotta to modern self-watering designs. Our mission is simple: to help you create stunning green spaces without breaking the bank.
              </p>
              <p>
                Whether you're a seasoned gardener or just starting your plant journey, we're here to help you find the perfect pot. Visit us today and let's grow together!
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 rounded-xl bg-muted/50">
                <p className="font-display text-2xl font-bold text-primary">100%</p>
                <p className="text-sm text-muted-foreground">Quality Assured</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-muted/50">
                <p className="font-display text-2xl font-bold text-primary">Local</p>
                <p className="text-sm text-muted-foreground">Sourced Products</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-muted/50">
                <p className="font-display text-2xl font-bold text-primary">Eco</p>
                <p className="text-sm text-muted-foreground">Friendly Options</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
