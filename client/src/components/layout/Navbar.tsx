import { useState, useEffect, useRef, useCallback } from "react";
import { Link, useLocation } from "wouter";
import { ChevronDown, X, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "@/App";
import logoPath from "@/assets/As-01.png";

import { navLinks, siteConfig } from "@/constants/siteData";

const services = navLinks.find(l => l.label === "Services")?.items || [];
const industriesDropdown = navLinks.find(l => l.label === "Industries")?.items || [];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  const { openModal } = useModal();
  const dropRef = useRef<HTMLDivElement>(null);

  // Use useCallback to prevent unnecessary re-renders
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

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
    setMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isActive = useCallback((href: string) =>
    href === "/" ? location === "/" : location.startsWith(href),
    [location]);

  // Optimized navbar height
  const navbarHeight = scrolled ? 80 : 95;
  const menuPadTop = `${navbarHeight + 20}px`;

  return (
    <>
      {/* Navbar with improved performance */}
      <nav
        className="site-nav"
        style={{
          height: `${navbarHeight}px`,
          transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
          overflow: "visible",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          backgroundColor: "var(--bg-glass-heavy, rgba(11, 14, 26, 0.85))",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--border-c)",
          boxShadow: scrolled ? "0 4px 20px rgba(0, 0, 0, 0.08)" : "none"
        }}
      >
        <div className="container" style={{ height: "100%", position: "relative" }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "100%",
            padding: "0 8px" // Add horizontal padding for mobile
          }}>
            {/* Logo - Optimized size for better balance */}
            <Link href="/" data-testid="link-logo" style={{ position: "relative", zIndex: 10 }}>
              <img
                src={logoPath}
                alt="ASKreativ Global Solutions"
                style={{
                  height: scrolled ? "65px" : "85px",
                  width: "auto",
                  display: "block",
                  transition: "height 0.3s ease",
                  filter: "drop-shadow(0 2px 8px rgba(0, 0, 0, 0.12))"
                }}
              />
            </Link>

            {/* Desktop Nav */}
            <div
              style={{
                alignItems: "center",
                gap: "6px", // Reduced gap for better space usage
                flexShrink: 0
              }}
              className="hidden lg:flex"
            >
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div
                    key={link.label}
                    style={{ position: "relative" }}
                    ref={link.label === "Services" || link.label === "Industries" ? dropRef : undefined}
                    onMouseEnter={() => setActiveDropdown(link.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    onTouchStart={() => setActiveDropdown(link.label)} // Add touch support
                  >
                    <Link
                      href={link.href}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "4px", // Reduced gap
                        padding: "8px 12px", // Optimized padding
                        fontSize: "14px", // Slightly reduced font size
                        fontWeight: 600,
                        color: isActive(link.href) ? "var(--orange)" : (scrolled ? "var(--fg)" : "#ffffff"),
                        borderRadius: "8px", // Reduced border radius
                        transition: "all 0.2s ease",
                        whiteSpace: "nowrap" // Prevent text wrapping
                      }}
                      className="nav-link"
                    >
                      {link.label}
                      <ChevronDown
                        size={12} // Reduced size
                        style={{
                          transform: activeDropdown === link.label ? "rotate(180deg)" : "none",
                          transition: "transform 0.2s ease"
                        }}
                      />
                    </Link>

                    <AnimatePresence>
                      {activeDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          style={{
                            position: "absolute",
                            top: "100%",
                            left: "50%",
                            transform: "translateX(-50%)",
                            minWidth: "220px", // Reduced width
                            background: "var(--card-bg-glass)",
                            border: "1px solid var(--card-border)",
                            borderRadius: "12px", // Reduced border radius
                            boxShadow: "0 8px 24px rgba(0,0,0,0.15)", // Optimized shadow
                            overflow: "hidden",
                            zIndex: 9999,
                            backdropFilter: "blur(12px)", // Reduced blur for performance
                            marginTop: "4px" // Reduced margin
                          }}
                        >
                          <div style={{ padding: "8px" }}>
                            {link.items?.map((s) => (
                              <Link
                                key={s.label}
                                href={s.slug.startsWith("/") ? s.slug : `/${s.slug}`}
                                style={{
                                  display: "block",
                                  padding: "10px 14px", // Optimized padding
                                  fontSize: "13px", // Slightly reduced font size
                                  fontWeight: 500,
                                  color: "var(--fg-light)",
                                  borderRadius: "6px",
                                  transition: "all 0.2s ease",
                                  whiteSpace: "nowrap"
                                }}
                                className="hover:bg-[var(--orange-glass)] hover:text-[var(--orange)]"
                              >
                                {s.label}
                              </Link>
                            ))}
                          </div>
                          <div style={{
                            padding: "12px",
                            background: "rgba(232,119,34,0.05)",
                            borderTop: "1px solid var(--card-border)"
                          }}>
                            <button
                              onClick={() => {
                                setActiveDropdown(null);
                                openModal();
                              }}
                              className="btn-primary"
                              style={{
                                width: "100%",
                                justifyContent: "center",
                                fontSize: "13px", // Reduced font size
                                padding: "10px"
                              }}
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
                      padding: "8px 12px", // Optimized padding
                      fontSize: "14px", // Slightly reduced font size
                      fontWeight: 600,
                      color: isActive(link.href) ? "var(--orange)" : (scrolled ? "var(--fg)" : "#ffffff"),
                      borderRadius: "8px", // Reduced border radius
                      transition: "all 0.2s ease",
                      whiteSpace: "nowrap",
                      position: "relative"
                    }}
                    className="nav-link"
                  >
                    {link.label}
                    {isActive(link.href) && (
                      <motion.div
                        layoutId="nav-active"
                        style={{
                          position: "absolute",
                          bottom: "0",
                          left: "8px", // Reduced offset
                          right: "8px", // Reduced offset
                          height: "2px",
                          background: "var(--orange)",
                          borderRadius: "1px"
                        }}
                      />
                    )}
                  </Link>
                )
              )}
            </div>

            {/* CTA + Hamburger - Optimized for mobile */}
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "10px", // Reduced gap
              flexShrink: 0
            }}>
              <button
                onClick={openModal}
                className="btn-primary hidden lg:inline-flex"
                style={{
                  padding: "8px 16px", // Optimized padding
                  fontSize: "14px" // Slightly reduced font size
                }}
              >
                Get a Free Quote
              </button>

              {/* Unified Animated Menu Toggle */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  border: menuOpen ? "1px solid transparent" : (scrolled ? "1px solid var(--orange)" : "1px solid rgba(255,255,255,0.3)"),
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  background: menuOpen ? "var(--orange)" : (scrolled ? "var(--card-bg-glass)" : "rgba(255,255,255,0.1)"),
                  backdropFilter: "blur(8px)",
                  cursor: "pointer",
                  transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                  marginLeft: "8px",
                  zIndex: 100000,
                }}
                aria-label="Toggle Menu"
                className="hover:scale-105"
              >
                <div style={{ position: "relative", width: "22px", height: "16px" }}>
                  <span style={{ 
                    position: "absolute", left: 0, top: menuOpen ? "7px" : "0", 
                    width: "100%", height: "2px", 
                    background: menuOpen ? "#fff" : (scrolled ? "var(--orange)" : "#ffffff"), 
                    transition: "all 0.3s ease", 
                    transform: menuOpen ? "rotate(45deg)" : "none" 
                  }}></span>
                  <span style={{ 
                    position: "absolute", left: 0, top: "7px", 
                    width: "100%", height: "2px", 
                    background: menuOpen ? "#fff" : (scrolled ? "var(--orange)" : "#ffffff"), 
                    transition: "all 0.3s ease", 
                    opacity: menuOpen ? 0 : 1 
                  }}></span>
                  <span style={{ 
                    position: "absolute", left: 0, top: menuOpen ? "7px" : "14px", 
                    width: "100%", height: "2px", 
                    background: menuOpen ? "#fff" : (scrolled ? "var(--orange)" : "#ffffff"), 
                    transition: "all 0.3s ease", 
                    transform: menuOpen ? "rotate(-45deg)" : "none" 
                  }}></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Translucent Backdrop when Mega Menu is Open */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              top: scrolled ? "80px" : "95px",
              background: "rgba(0, 0, 0, 0.4)",
              backdropFilter: "blur(4px)",
              zIndex: 998,
            }}
          />
        )}
      </AnimatePresence>

      {/* Dropdown Mega Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "fixed",
              top: scrolled ? "80px" : "95px",
              left: 0,
              right: 0,
              background: "var(--card-bg)",
              borderBottom: "1px solid var(--border-c)",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.12)",
              zIndex: 999,
              padding: "48px 0",
              overflowY: "auto",
              maxHeight: "calc(100vh - 100px)",
              transition: "top 0.3s ease",
            }}
          >
            <div className="container">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {/* Column 1: Company */}
                <div>
                  <h3 style={{ fontSize: "14px", fontWeight: 800, marginBottom: "24px", color: "var(--orange)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Company</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                    {navLinks.filter(l => !l.hasDropdown).map((l) => (
                      <Link
                        key={l.label}
                        href={l.href}
                        onClick={() => setMenuOpen(false)}
                        style={{ color: "var(--fg-light)", fontSize: "15px", fontWeight: 600, textDecoration: "none", display: "inline-block", transition: "color 0.2s" }}
                        className="hover:text-[var(--orange)]"
                      >
                        {l.label}
                      </Link>
                    ))}
                    <Link
                      href="/faq"
                      onClick={() => setMenuOpen(false)}
                      style={{ color: "var(--fg-light)", fontSize: "15px", fontWeight: 600, textDecoration: "none", display: "inline-block", transition: "color 0.2s" }}
                      className="hover:text-[var(--orange)]"
                    >
                      FAQ
                    </Link>
                  </div>
                </div>

                {/* Column 2: Our Services */}
                <div>
                  <h3 style={{ fontSize: "14px", fontWeight: 800, marginBottom: "24px", color: "var(--orange)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Core Services</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                    {services.map((s) => (
                      <Link
                        key={s.label}
                        href={s.slug.startsWith("/") ? s.slug : `/${s.slug}`}
                        onClick={() => setMenuOpen(false)}
                        style={{ color: "var(--fg-light)", fontSize: "15px", fontWeight: 500, textDecoration: "none", display: "inline-block", transition: "color 0.2s" }}
                        className="hover:text-[var(--orange)]"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Column 3: Industries We Serve */}
                <div>
                  <h3 style={{ fontSize: "14px", fontWeight: 800, marginBottom: "24px", color: "var(--orange)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Industries We Serve</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                    {industriesDropdown.map((s) => (
                      <Link
                        key={s.label}
                        href={s.slug.startsWith("/") ? s.slug : `/${s.slug}`}
                        onClick={() => setMenuOpen(false)}
                        style={{ color: "var(--fg-light)", fontSize: "15px", fontWeight: 500, textDecoration: "none", display: "inline-block", transition: "color 0.2s" }}
                        className="hover:text-[var(--orange)]"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Column 4: Let's Connect */}
                <div>
                  <h3 style={{ fontSize: "14px", fontWeight: 800, marginBottom: "24px", color: "var(--orange)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Let's Connect</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "24px", background: "var(--bg-section)", borderRadius: "20px", border: "1px solid var(--border-c)" }}>
                    <h4 style={{ color: "var(--fg)", fontSize: "17px", fontWeight: 800, margin: 0 }}>Start Your Project</h4>
                    <p style={{ color: "var(--fg-light)", fontSize: "13px", lineHeight: 1.5, margin: 0 }}>Ready to engineer your digital growth? Let's discuss your vision.</p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "13px", color: "var(--fg-light)", fontWeight: 500 }}>
                      <span style={{ wordBreak: "break-all" }}>Email: {siteConfig.contact.email}</span>
                      <span>Phone: {siteConfig.contact.phone}</span>
                    </div>
                    <button
                      onClick={() => { setMenuOpen(false); openModal(); }}
                      className="btn-primary"
                      style={{ width: "100%", justifyContent: "center", fontSize: "14px", padding: "12px" }}
                    >
                      Get a Free Quote
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
