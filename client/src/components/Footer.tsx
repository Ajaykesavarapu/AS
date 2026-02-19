import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter, Facebook, Sidebar as Pinterest } from "lucide-react";
import logo from "@assets/AS_1771522686023.jpg";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-black/40 border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-1">
              <img 
                src={logo} 
                alt="Logo" 
                className="w-10 h-10 rounded-full border border-white/10" 
              />
              <span className="font-heading font-bold text-lg tracking-wider text-white">
                ASKREATIV
              </span>
            </div>
            <p className="text-white/60 leading-relaxed text-sm">
              Global consultancy transforming ambitious ideas into exceptional digital experiences. 
              Elevating brands through technology and design innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: "Services", href: "/#services" },
                { name: "About Us", href: "/about" },
                { name: "Blogs", href: "/blogs" },
                { name: "Contact", href: "/#contact" }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href}>
                    <a className="text-white/60 hover:text-primary transition-colors text-sm">
                      {item.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-bold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+91 9666976611</span>
              </li>
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:helloaskreativ@gmail.com" className="hover:text-white transition-colors">
                  helloaskreativ@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>Hyderabad, India</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading text-lg font-bold text-white mb-6">Follow Us</h4>
            <div className="flex flex-wrap gap-4">
              {[
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Facebook, href: "#" },
                { icon: Pinterest, href: "#" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Crafting Digital Reality. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
