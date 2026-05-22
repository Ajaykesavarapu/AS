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
        minHeight: "80vh",
        position: "relative",
        overflow: "hidden",
        borderRadius: "28px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px",
        marginLeft: "60px",
        marginRight: "60px",
        marginTop: "60px",
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
          maxWidth: "1800px",
          margin: "0 auto",
          color: "#fff",
        }}>
          {/* Left side: text and CTA */}
          <div className="hero-text" style={{
            flex: 1,
            maxWidth: "45%",
            paddingRight: "60px",
          }}>
            {title && (
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                style={{
                  fontSize: "clamp(32px, 5vw, 48px)",
                  fontWeight: 800,
                  lineHeight: 1.2,
                  marginBottom: "24px",
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
                  fontSize: "clamp(16px, 3vw, 20px)",
                  lineHeight: 1.7,
                  opacity: 0.9,
                  marginBottom: "32px",
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
                  padding: "16px 32px",
                  fontSize: "17px",
                }}
              >
                {ctaText} <ArrowRight size={18} />
              </motion.button>
            )}
          </div>

          {/* Right side: stats cards */}
          {stats && stats.length > 0 && (
            <div className="hero-stats" style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              alignItems: "flex-end",
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
                    borderRadius: "20px",
                    padding: "20px 28px",
                    textAlign: "center",
                    width: "220px",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                  }}
                >
                  <div style={{
                    fontSize: "28px",
                    fontWeight: 800,
                    color: "#fff",
                    marginBottom: "4px",
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    fontSize: "14px",
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