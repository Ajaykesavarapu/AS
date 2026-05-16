import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { ChevronDown, X, Menu } from "lucide-react";
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
  { label: "Graphic Design", slug: "graphic-design" },
  { label: "Traditional Marketing", slug: "traditional-marketing" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [location] = useLocation();
  const { openModal } = useModal();
  const dropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? location === "/" : location.startsWith(href);

  return (
    <>
      <nav className="site-nav">
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "68px" }}>
            {/* Logo */}
            <Link href="/" data-testid="link-logo">
              <img src={logoPath} alt="ASKreativ Global Solutions" style={{ height: "44px", width: "auto" }} />
            </Link>

            {/* Desktop Nav */}
            <div style={{ display: "flex", alignItems: "center", gap: "4px" }} className="hidden lg:flex">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div key={link.label} style={{ position: "relative" }} ref={dropRef}>
                    <button
                      onClick={() => setDropdownOpen((v) => !v)}
                      style={{
                        display: "flex", alignItems: "center", gap: "4px",
                        padding: "8px 14px", fontSize: "14px", fontWeight: 500,
                        color: isActive(link.href) ? "var(--orange)" : "var(--fg)",
                        background: "none", border: "none", cursor: "pointer",
                        borderRadius: "8px", transition: "color 0.2s",
                      }}
                      data-testid="button-services-dropdown"
                    >
                      {link.label}
                      <ChevronDown size={14} style={{ transform: dropdownOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
                    </button>

                    {dropdownOpen && (
                      <div style={{
                        position: "absolute", top: "calc(100% + 8px)", left: "50%", transform: "translateX(-50%)",
                        width: "260px", background: "var(--card-bg)", border: "1px solid var(--card-border)",
                        borderRadius: "12px", boxShadow: "0 12px 40px var(--shadow-md)", overflow: "hidden",
                        zIndex: 9999,
                      }}>
                        {services.map((s) => (
                          <Link
                            key={s.slug}
                            href={`/services/${s.slug}`}
                            style={{
                              display: "block", padding: "10px 18px", fontSize: "14px",
                              color: "var(--fg-light)", borderBottom: "1px solid var(--border-c)",
                              transition: "all 0.15s",
                            }}
                            className="hover:bg-[var(--muted-bg)] hover:text-[var(--orange)]"
                            data-testid={`link-service-${s.slug}`}
                          >
                            {s.label}
                          </Link>
                        ))}
                        <div style={{ padding: "12px 18px", background: "var(--muted-bg)" }}>
                          <button
                            onClick={() => { setDropdownOpen(false); openModal(); }}
                            className="btn-primary"
                            style={{ width: "100%", justifyContent: "center", fontSize: "13px", padding: "10px 16px" }}
                          >
                            Book a Free Consultation →
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    style={{
                      padding: "8px 14px", fontSize: "14px", fontWeight: 500,
                      color: isActive(link.href) ? "var(--orange)" : "var(--fg)",
                      borderRadius: "8px", transition: "color 0.2s",
                      borderBottom: isActive(link.href) ? "2px solid var(--orange)" : "2px solid transparent",
                    }}
                    data-testid={`link-nav-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

            {/* CTA + Hamburger */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <button
                onClick={openModal}
                className="btn-primary hidden lg:inline-flex"
                data-testid="button-book-call"
              >
                Book a Free Call
              </button>
              <button
                onClick={() => setMobileOpen(true)}
                style={{ padding: "8px", color: "var(--fg)", background: "none", border: "none", cursor: "pointer" }}
                className="lg:hidden"
                data-testid="button-mobile-menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 99999,
          background: "var(--bg)", display: "flex", flexDirection: "column",
          overflowY: "auto",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 24px", borderBottom: "1px solid var(--border-c)" }}>
            <img src={logoPath} alt="ASKreativ" style={{ height: "40px" }} />
            <button onClick={() => setMobileOpen(false)} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--fg)" }}>
              <X size={24} />
            </button>
          </div>
          <div style={{ flex: 1, padding: "24px" }}>
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  style={{
                    display: "block", padding: "16px 0", fontSize: "18px", fontWeight: 600,
                    color: isActive(link.href) ? "var(--orange)" : "var(--fg)",
                    borderBottom: "1px solid var(--border-c)",
                  }}
                  data-testid={`link-mobile-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Link>
                {link.hasDropdown && (
                  <div style={{ paddingLeft: "16px" }}>
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        style={{ display: "block", padding: "10px 0", fontSize: "14px", color: "var(--fg-light)", borderBottom: "1px solid var(--border-c)" }}
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div style={{ padding: "24px" }}>
            <button
              onClick={() => { setMobileOpen(false); openModal(); }}
              className="btn-primary"
              style={{ width: "100%", justifyContent: "center", padding: "16px" }}
            >
              Book a Free Consultation →
            </button>
          </div>
        </div>
      )}
    </>
  );
}
