import { Leaf, Instagram, Facebook, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brown-dark text-primary-foreground py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-full bg-primary-foreground/10">
                <Leaf className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-semibold">
                Lovely Pot Shop
              </span>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed">
              Beautiful pots for every plant. Making your green spaces more lovely since 2018.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#products" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Youtube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <p className="text-primary-foreground/70 mt-4 text-sm">
              @lovelypotshop
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} Lovely Pot Shop. All rights reserved. Made with 🌱 in India.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
