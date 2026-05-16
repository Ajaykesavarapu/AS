import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { useModal } from "@/App";
import logoPath from "@assets/AS_1778930899290.png";

const services = [
  { label: "Digital Marketing", slug: "digital-marketing" },
  { label: "AI Automation", slug: "ai-automation" },
  { label: "SEO Services", slug: "seo-services" },
  { label: "Website Development", slug: "website-development" },
  { label: "Social Media Marketing", slug: "social-media-marketing" },
  { label: "ERP Management Systems", slug: "erp-management-systems" },
  { label: "Mobile App Development", slug: "mobile-app-development" },
  { label: "Branding & Creative Design", slug: "branding-creative-design" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", dropdown: true },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [location] = useLocation();
  const { openModal } = useModal();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const scrollProgress = () => {
    const el = document.documentElement;
    return ((el.scrollTop || document.body.scrollTop) / (el.scrollHeight - el.clientHeight)) * 100;
  };

  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => setProgress(scrollProgress());
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        style={{ width: `${progress}%` }}
        className="fixed top-0 left-0 h-[3px] bg-primary z-[9999] transition-[width] duration-100"
      />
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-[3px] left-0 right-0 z-[9998] transition-all duration-300 ${
          scrolled
            ? "bg-[#0A0B1A]/90 backdrop-blur-xl border-b border-white/5 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link href="/" data-testid="link-logo">
              <img src={logoPath} alt="ASKreativ Global Solutions" className="h-10 lg:h-12 w-auto" />
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.label} className="relative" ref={dropdownRef}>
                    <button
                      className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${
                        location.startsWith("/services") ? "text-primary" : "text-muted-foreground"
                      }`}
                      onClick={() => setDropdownOpen((v) => !v)}
                      data-testid="button-services-dropdown"
                    >
                      {link.label}
                      <ChevronDown size={14} className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72 bg-[#141630] border border-white/8 rounded-xl shadow-2xl overflow-hidden"
                        >
                          <div className="p-2">
                            {services.map((s) => (
                              <Link
                                key={s.slug}
                                href={`/services/${s.slug}`}
                                onClick={() => setDropdownOpen(false)}
                                className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                                data-testid={`link-service-${s.slug}`}
                              >
                                {s.label}
                              </Link>
                            ))}
                          </div>
                          <div className="p-3 border-t border-white/5 bg-[#0F1035]">
                            <button
                              onClick={() => { setDropdownOpen(false); openModal(); }}
                              className="w-full text-sm text-center text-primary font-medium py-2 rounded-lg hover:bg-primary/10 transition-colors"
                              data-testid="button-dropdown-cta"
                            >
                              Ready to grow? Book a Free Call →
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`text-sm font-medium transition-colors hover:text-primary relative group ${
                      location === link.href ? "text-primary" : "text-muted-foreground"
                    }`}
                    data-testid={`link-nav-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                    <span className={`absolute -bottom-0.5 left-0 h-[2px] bg-primary transition-all duration-300 ${location === link.href ? "w-full" : "w-0 group-hover:w-full"}`} />
                  </Link>
                )
              )}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={openModal}
                className="px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-full hover:bg-primary/90 transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(232,119,34,0.4)]"
                data-testid="button-book-call"
              >
                Book a Free Call →
              </button>
            </div>

            <button
              className="lg:hidden text-white p-2"
              onClick={() => setMobileOpen(true)}
              data-testid="button-mobile-menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-[99999] bg-[#0A0B1A] flex flex-col"
          >
            <div className="flex justify-between items-center px-6 py-5 border-b border-white/8">
              <img src={logoPath} alt="ASKreativ" className="h-10 w-auto" />
              <button onClick={() => setMobileOpen(false)} data-testid="button-close-menu">
                <X size={24} className="text-white" />
              </button>
            </div>
            <div className="flex-1 flex flex-col justify-center px-8 gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block text-2xl font-display font-bold py-3 border-b border-white/5 transition-colors hover:text-primary ${location === link.href ? "text-primary" : "text-white"}`}
                    data-testid={`link-mobile-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="px-8 pb-10">
              <button
                onClick={() => { setMobileOpen(false); openModal(); }}
                className="w-full py-4 bg-primary text-white text-lg font-bold rounded-full hover:bg-primary/90 transition-colors"
                data-testid="button-mobile-cta"
              >
                Book a Free Call →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
