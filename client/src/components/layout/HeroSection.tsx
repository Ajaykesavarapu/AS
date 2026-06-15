import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export interface HeroSectionProps {
  backgroundType?: "video" | "image";
  backgroundSrc?: string;
  backgroundStyle?: React.CSSProperties;
  ctaText?: string;
  ctaOnClick?: () => void;
  showCta?: boolean;
  className?: string;
}

export default function HeroSection({
  backgroundType = "image",
  backgroundSrc,
  backgroundStyle,
  ctaText = "Get Started",
  ctaOnClick,
  showCta = true,
  className = "",
}: HeroSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={ref}
      className={`shiftwave-hero ${className}`}
      style={backgroundStyle}
    >
      {/* Background video or image */}
      {backgroundType === "video" && backgroundSrc && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="shiftwave-hero-media"
        >
          <source src={backgroundSrc} type="video/mp4" />
        </video>
      )}
      {backgroundType === "image" && backgroundSrc && (
        <img 
          src={backgroundSrc} 
          alt="Hero background" 
          className="shiftwave-hero-media"
          loading="eager"
        />
      )}

      {/* Overlay to ensure readability/contrast */}
      <div className="shiftwave-hero-overlay" />

      {/* Bottom-left CTA Button */}
      {showCta && ctaText && ctaOnClick && (
        <div className="shiftwave-hero-cta">
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            onClick={ctaOnClick}
            className="hover:scale-105 transition-transform px-6 py-3 md:px-9 md:py-4 text-sm md:text-lg"
            style={{
              backgroundColor: "var(--orange)",
              color: "#fff",
              borderRadius: "50px",
              fontWeight: 700,
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 10px 30px rgba(232, 119, 34, 0.4)",
              whiteSpace: "nowrap"
            }}
          >
            {ctaText} <ArrowUpRight size={20} />
          </motion.button>
        </div>
      )}
    </section>
  );
}