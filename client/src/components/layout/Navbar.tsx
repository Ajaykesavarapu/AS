import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { ChevronDown, X, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "@/App";
import logoPath from "@/assets/As-01.png";

import { navLinks, siteConfig } from "@/constants/siteData";

const services = navLinks.find(l => l.label === "Services")?.items || [];
const industriesDropdown = navLinks.find(l => l.label === "Industries")?.items || [];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  const { openModal } = useModal();
  const dropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? location === "/" : location.startsWith(href);

  return (
    <>
      <nav className={`site-nav ${scrolled ? "scrolled" : ""}`} style={{ height: scrolled ? "75px" : "90px", transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)", overflow: "visible" }}>
        <div className="container" style={{ height: "100%", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "100%" }}>
            {/* Logo - Increased Size */}
            <Link href="/" data-testid="link-logo" style={{ position: "relative", zIndex: 10 }}>
              <img 
                src={logoPath} 
                alt="ASKreativ Global Solutions" 
                style={{ 
                  height: scrolled ? "120px" : "180px", 
                  width: "auto", 
                  display: "block",
                  transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
                  filter: scrolled ? "drop-shadow(0 0 16px transparent)" : "var(--logo-filter)",
                  marginTop: scrolled ? "0px" : "0px"
                }} 
              />
            </Link>

            {/* Desktop Nav */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }} className="hidden lg:flex">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div 
                    key={link.label} 
                    style={{ position: "relative" }} 
                    onMouseEnter={() => setActiveDropdown(link.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={link.href}
                      style={{
                        display: "flex", alignItems: "center", gap: "6px",
                        padding: "10px 16px", fontSize: "15px", fontWeight: 700,
                        color: isActive(link.href) ? "var(--orange)" : "var(--fg)",
                        borderRadius: "12px", transition: "all 0.2s",
                      }}
                      className="nav-link"
                    >
                      {link.label}
                      <ChevronDown size={14} style={{ transform: activeDropdown === link.label ? "rotate(180deg)" : "none", transition: "transform 0.3s" }} />
                    </Link>

                    <AnimatePresence>
                      {activeDropdown === link.label && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          style={{
                            position: "absolute", top: "calc(100% + 12px)", left: "50%", transform: "translateX(-50%)",
                            width: "300px", background: "var(--card-bg-glass)", border: "1px solid var(--card-border)",
                            borderRadius: "20px", boxShadow: "0 20px 50px rgba(0,0,0,0.3)", overflow: "hidden",
                            zIndex: 9999, backdropFilter: "blur(20px)"
                          }}
                        >
                          <div style={{ padding: "8px" }}>
                            {link.items?.map((s) => (
                              <Link
                                key={s.label}
                                href={s.slug.startsWith("/") ? s.slug : `/${s.slug}`}
                                style={{
                                  display: "block", padding: "12px 16px", fontSize: "14px", fontWeight: 600,
                                  color: "var(--fg-light)", borderRadius: "10px",
                                  transition: "all 0.2s",
                                }}
                                className="hover:bg-[var(--orange-glass)] hover:text-[var(--orange)]"
                              >
                                {s.label}
                              </Link>
                            ))}
                          </div>
                          <div style={{ padding: "16px", background: "rgba(232,119,34,0.05)", borderTop: "1px solid var(--card-border)" }}>
                            <button
                              onClick={() => { setActiveDropdown(null); openModal(); }}
                              className="btn-primary"
                              style={{ width: "100%", justifyContent: "center", fontSize: "14px", padding: "12px" }}
                            >
                              Get a Free Quote
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
                    style={{
                      padding: "10px 16px", fontSize: "15px", fontWeight: 700,
                      color: isActive(link.href) ? "var(--orange)" : "var(--fg)",
                      borderRadius: "12px", transition: "all 0.2s",
                      position: "relative"
                    }}
                    className="nav-link"
                  >
                    {link.label}
                    {isActive(link.href) && (
                      <motion.div layoutId="nav-active" style={{ position: "absolute", bottom: "0", left: "16px", right: "16px", height: "2px", background: "var(--orange)", borderRadius: "2px" }} />
                    )}
                  </Link>
                )
              )}
            </div>

            {/* CTA + Hamburger */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <button onClick={openModal} className="btn-primary hidden lg:inline-flex" style={{ padding: "12px 28px" }}>
                Get a Free Quote
              </button>
              <button
                onClick={() => setMobileOpen(true)}
                style={{ padding: "10px", color: "var(--fg)", background: "var(--card-bg-glass)", border: "1px solid var(--card-border)", borderRadius: "12px", cursor: "pointer" }}
                className="lg:hidden"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            style={{
              position: "fixed", inset: 0, zIndex: 99999,
              background: "var(--bg)", display: "flex", flexDirection: "column",
              overflowY: "auto",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 24px", borderBottom: "1px solid var(--border-c)" }}>
              <img src={logoPath} alt="ASKreativ" style={{ height: "48px", filter: "var(--logo-filter)" }} />
              <button onClick={() => setMobileOpen(false)} style={{ width: "45px", height: "45px", borderRadius: "12px", background: "var(--card-bg-glass)", border: "1px solid var(--card-border)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "var(--fg)" }}>
                <X size={24} />
              </button>
            </div>
            <div style={{ flex: 1, padding: "32px 24px" }}>
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link
                    href={link.href}
                    style={{
                      display: "block", padding: "20px 0", fontSize: "24px", fontWeight: 900,
                      color: isActive(link.href) ? "var(--orange)" : "var(--fg)",
                      borderBottom: "1px solid var(--border-c)",
                      letterSpacing: "-0.01em", textTransform: "uppercase"
                    }}
                  >
                    {link.label}
                  </Link>
                  {link.hasDropdown && (
                    <div style={{ paddingLeft: "16px", marginTop: "8px" }}>
                      {link.items?.map((s) => (
                        <Link
                          key={s.label}
                          href={s.slug.startsWith("/") ? s.slug : `/${s.slug}`}
                          style={{ display: "block", padding: "14px 0", fontSize: "16px", fontWeight: 600, color: "var(--fg-light)", borderBottom: "1px solid var(--border-c)", opacity: 0.8 }}
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div style={{ padding: "40px 24px", borderTop: "1px solid var(--border-c)" }}>
              <button
                onClick={() => { setMobileOpen(false); openModal(); }}
                className="btn-primary"
                style={{ width: "100%", justifyContent: "center", padding: "20px", fontSize: "18px", fontWeight: 800 }}
              >
                Get a Free Quote →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
