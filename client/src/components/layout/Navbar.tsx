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
  const [mobileOpen, setMobileOpen] = useState(false);
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
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isActive = useCallback((href: string) =>
    href === "/" ? location === "/" : location.startsWith(href),
    [location]);

  // Optimized navbar height
  const navbarHeight = scrolled ? 64 : 72;

  return (
    <>
      {/* Navbar with improved performance */}
      <nav
        className="site-nav"
        style={{
          height: `${navbarHeight}px`,
          transition: "height 0.3s ease",
          overflow: "visible",
          position: "sticky",
          top: 0,
          zIndex: 1000
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
                  height: scrolled ? "45px" : "60px", // Reduced size for better proportion
                  width: "auto",
                  display: "block",
                  transition: "height 0.3s ease",
                  filter: scrolled ? "drop-shadow(0 0 8px transparent)" : "var(--logo-filter)",
                }}
              />
            </Link>

            {/* Desktop Nav */}
            <div
              style={{
                display: "flex",
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
                        color: isActive(link.href) ? "var(--orange)" : "var(--fg)",
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
                      color: isActive(link.href) ? "var(--orange)" : "var(--fg)",
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
              <button
                onClick={() => setMobileOpen(true)}
                style={{
                  padding: "8px", // Optimized padding
                  color: "var(--fg)",
                  background: "var(--card-bg-glass)",
                  border: "1px solid var(--card-border)",
                  borderRadius: "8px", // Reduced border radius
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
                className="lg:hidden"
                aria-label="Open menu"
              >
                <Menu size={20} /> {/* Reduced size */}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Optimized for better UX */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 170,
              duration: 0.3
            }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 99999,
              background: "var(--bg)",
              display: "flex",
              flexDirection: "column",
              overflowY: "auto",
              height: "100dvh", // Use dynamic viewport height
              maxHeight: "100vh"
            }}
          >
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "16px 20px", // Optimized padding
              borderBottom: "1px solid var(--border-c)"
            }}>
              <img
                src={logoPath}
                alt="ASKreativ"
                style={{
                  height: "36px", // Optimized size
                  filter: "var(--logo-filter)"
                }}
              />
              <button
                onClick={() => setMobileOpen(false)}
                style={{
                  width: "36px", // Optimized size
                  height: "36px", // Optimized size
                  borderRadius: "8px", // Reduced border radius
                  background: "var(--card-bg-glass)",
                  border: "1px solid var(--card-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "var(--fg)"
                }}
                aria-label="Close menu"
              >
                <X size={20} /> {/* Reduced size */}
              </button>
            </div>
            <div style={{
              flex: 1,
              padding: "24px 20px", // Optimized padding
              overflowY: "auto"
            }}>
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link
                    href={link.href}
                    style={{
                      display: "block",
                      padding: "14px 0", // Optimized padding
                      fontSize: "18px", // Optimized font size for touch
                      fontWeight: 700,
                      color: isActive(link.href) ? "var(--orange)" : "var(--fg)",
                      borderBottom: isActive(link.href) ? "2px solid var(--orange)" : "1px solid var(--border-c)",
                      letterSpacing: "-0.01em",
                      textTransform: "uppercase",
                      transition: "all 0.2s ease"
                    }}
                  >
                    {link.label}
                  </Link>
                  {link.hasDropdown && (
                    <div style={{
                      paddingLeft: "12px",
                      marginTop: "8px",
                      borderLeft: "2px solid var(--border-c)"
                    }}>
                      {link.items?.map((s) => (
                        <Link
                          key={s.label}
                          href={s.slug.startsWith("/") ? s.slug : `/${s.slug}`}
                          style={{
                            display: "block",
                            padding: "10px 0", // Optimized padding
                            fontSize: "16px", // Optimized font size for touch
                            fontWeight: 600,
                            color: "var(--fg-light)",
                            borderBottom: "1px solid var(--border-c)",
                            opacity: 0.9,
                            transition: "all 0.2s ease"
                          }}
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div style={{
              padding: "24px 20px", // Optimized padding
              borderTop: "1px solid var(--border-c)"
            }}>
              <button
                onClick={() => {
                  setMobileOpen(false);
                  openModal();
                }}
                className="btn-primary"
                style={{
                  width: "100%",
                  justifyContent: "center",
                  padding: "12px 24px", // Optimized padding
                  fontSize: "16px", // Optimized font size
                  fontWeight: 800
                }}
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
