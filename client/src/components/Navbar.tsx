import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@assets/AS_1771522686023.jpg";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "Blogs", href: "/blogs" },
    { name: "About Us", href: "/about" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
        }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-1 group">
            <div className="relative overflow-hidden rounded-full border-2 border-primary/50 group-hover:border-primary transition-colors duration-300">
              <img
                src={logo}
                alt="As Kreativ Logo"
                className="w-10 h-10 md:w-12 md:h-12 object-cover"
              />
            </div>
            <span className="font-heading font-bold text-lg md:text-xl tracking-wider text-white group-hover:text-primary transition-colors">
              ASKREATIV
            </span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <a className="text-sm font-medium text-white/80 hover:text-primary transition-colors tracking-wide uppercase">
                {link.name}
              </a>
            </Link>
          ))}
          <a
            href="/#contact"
            className="px-6 py-2.5 bg-primary hover:bg-primary/90 text-white font-bold tracking-wide uppercase text-sm rounded transition-all transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href}>
                  <a
                    className="text-lg font-heading text-white hover:text-primary"
                    onClick={() => {
                      setIsOpen(false);
                      if (link.href.startsWith('/#')) {
                        const id = link.href.substring(2);
                        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {link.name}
                  </a>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
