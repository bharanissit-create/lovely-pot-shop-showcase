import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Get in Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have questions or need recommendations? We'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Phone */}
          <div className="bg-card rounded-2xl p-6 shadow-card text-center hover:shadow-hover transition-shadow">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">Phone</h3>
            <p className="text-muted-foreground">+91 63819 22863</p>
            <p className="text-muted-foreground">+91 96776 64282</p>
          </div>

          {/* Email */}
          <div className="bg-card rounded-2xl p-6 shadow-card text-center hover:shadow-hover transition-shadow">
            <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">Email</h3>
            <p className="text-muted-foreground">bharanib783@gmail.com</p>
          </div>

          {/* Address */}
          <div className="bg-card rounded-2xl p-6 shadow-card text-center hover:shadow-hover transition-shadow">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">Address</h3>
            <p className="text-muted-foreground">ICL, 4th Road</p>
            <p className="text-muted-foreground">Sankari West</p>
          </div>

          {/* Hours */}
          <div className="bg-card rounded-2xl p-6 shadow-card text-center hover:shadow-hover transition-shadow">
            <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">Hours</h3>
            <p className="text-muted-foreground">Mon - Sat: 9AM - 7PM</p>
            <p className="text-muted-foreground">Sunday: 10AM - 5PM</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Ready to visit us?</p>
          <Button variant="hero" size="lg">
            Get Directions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
