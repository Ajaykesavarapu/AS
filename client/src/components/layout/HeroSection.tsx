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

      {/* Centered CTA Button */}
      {showCta && ctaText && ctaOnClick && (
        <div 
          className="absolute z-10"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
          }}
        >
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            onClick={ctaOnClick}
            style={{
              backgroundColor: "var(--orange)",
              color: "#fff",
              padding: "16px 36px",
              borderRadius: "50px",
              fontSize: "17px",
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              gap: "8px",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 10px 30px rgba(232, 119, 34, 0.4)",
              whiteSpace: "nowrap"
            }}
            className="hover:scale-105 transition-transform"
          >
            {ctaText} <ArrowUpRight size={20} />
          </motion.button>
        </div>
      )}
    </section>
  );
}