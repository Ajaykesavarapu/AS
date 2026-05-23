import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

export interface HeroSectionProps {
  backgroundType?: "video" | "image";
  backgroundSrc?: string;
  backgroundStyle?: React.CSSProperties;
  title?: string;
  description?: string;
  ctaText?: string;
  ctaOnClick?: () => void;
  showCta?: boolean;
  stats?: Array<{ label: string; value: string }>;
  className?: string;
}

export default function HeroSection({
  backgroundType,
  backgroundSrc,
  backgroundStyle,
  title,
  description,
  ctaText,
  ctaOnClick,
  showCta = true,
  stats,
  className = "",
}: HeroSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className={`hero-section ${className}`}
      style={{
        minHeight: "100svh", // Use small viewport height for better mobile UX
        position: "relative",
        overflow: "hidden",
        borderRadius: "24px", // Curve shape hero section
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "40px 40px 0 40px", // Top: 40px, Right: 40px, Bottom: 0, Left: 40px
        ...backgroundStyle,
        background: backgroundType === "image" ? `url(${backgroundSrc}) center/cover no-repeat` : undefined,
      }}
    >
      {/* Background video or image */}
      {backgroundType === "video" && backgroundSrc && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hero-media"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        >
          <source src={backgroundSrc} type="video/mp4" />
        </video>
      )}
      {/* Dark overlay */}
      <div className="hero-overlay" style={{
        position: "absolute",
        inset: 0,
        background: "rgba(0,0,0,0.45)",
        zIndex: 1,
      }}></div>

      {/* Optional content - only render if provided */}
      {title || description || ctaText || stats && (
        <div className="hero-content" style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "1400px", // Reduced from 1800px for better fit
          margin: "0 auto",
          padding: "0 24px", // Add horizontal padding
          color: "#fff",
          flexWrap: "wrap", // Allow wrapping on small screens
        }}>
          {/* Left side: text and CTA */}
          <div className="hero-text" style={{
            flex: "1 1 300px", // Flex grow, shrink, and basis
            minWidth: "250px",
            marginBottom: "40px", // Add margin for mobile stacking
          }}>
            {title && (
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                style={{
                  fontSize: "clamp(28px, 6vw, 42px)", // Reduced max size
                  fontWeight: 800,
                  lineHeight: 1.2,
                  marginBottom: "16px", // Reduced margin
                }}
              >
                {title}
              </motion.h1>
            )}
            {description && (
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{
                  fontSize: "clamp(14px, 4vw, 18px)", // Reduced max size
                  lineHeight: 1.7,
                  opacity: 0.9,
                  marginBottom: "24px", // Reduced margin
                }}
              >
                {description}
              </motion.p>
            )}
            {showCta && ctaText && ctaOnClick && (
              <motion.button
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                onClick={ctaOnClick}
                className="btn-primary"
                style={{
                  padding: "12px 24px", // Reduced padding
                  fontSize: "15px", // Reduced font size
                }}
              >
                {ctaText} <ArrowRight size={16} /> {/* Reduced size */}
              </motion.button>
            )}
          </div>

          {/* Right side: stats cards */}
          {stats && stats.length > 0 && (
            <div className="hero-stats" style={{
              display: "flex",
              flexDirection: "column", // Stack vertically on all screens for consistency
              gap: "16px", // Reduced gap
              alignItems: "stretch", // Stretch to fill width
              marginTop: "auto", // Push to bottom on mobile
            }}>
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: "16px", // Reduced radius
                    padding: "16px 20px", // Reduced padding
                    textAlign: "center",
                    flex: "1", // Equal distribution
                    minHeight: "80px", // Consistent height
                    boxShadow: "0 4px 16px rgba(0,0,0,0.05)", // Reduced shadow
                  }}
                >
                  <div style={{
                    fontSize: "clamp(20px, 5vw, 24px)", // Reduced max size
                    fontWeight: 800,
                    color: "#fff",
                    marginBottom: "4px",
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    fontSize: "clamp(12px, 3vw, 14px)", // Reduced max size
                    color: "rgba(255,255,255,0.7)",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
}