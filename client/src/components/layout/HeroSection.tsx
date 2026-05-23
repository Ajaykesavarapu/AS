import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export interface HeroSectionProps {
  backgroundType?: "video" | "image";
  backgroundSrc?: string;
  backgroundStyle?: React.CSSProperties;
  title?: React.ReactNode;
  description?: string;
  ctaText?: string;
  ctaOnClick?: () => void;
  showCta?: boolean;
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
  className = "",
}: HeroSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className={`relative flex items-end justify-start overflow-hidden rounded-3xl mx-4 mt-[32px] md:mx-[60px] md:mt-[40px] pb-16 md:pb-24 ${className}`}
      style={{
        minHeight: "max(80vh, 500px)",
        ...backgroundStyle
      }}
    >
      {/* Background video or image */}
      {backgroundType === "video" && backgroundSrc && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-fill z-0"
        >
          <source src={backgroundSrc} type="video/mp4" />
        </video>
      )}
      {backgroundType === "image" && backgroundSrc && (
        <img 
          src={backgroundSrc} 
          alt="Hero background" 
          className="absolute inset-0 w-full h-full object-fill z-0"
          loading="lazy"
        />
      )}

      {/* Content */}
      <div style={{
        position: "relative",
        zIndex: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        textAlign: "left",
        width: "100%",
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "0 32px",
        color: "#fff",
      }}>
        {title && (
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            style={{
              fontSize: "clamp(32px, 5vw, 56px)",
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: "20px",
              maxWidth: "800px",
              textShadow: "0 4px 20px rgba(0,0,0,0.4)"
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
              fontSize: "clamp(16px, 3vw, 18px)",
              lineHeight: 1.6,
              opacity: 0.9,
              marginBottom: "36px",
              maxWidth: "600px",
              textShadow: "0 2px 10px rgba(0,0,0,0.5)"
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
            style={{
              backgroundColor: "var(--orange)", // Red-ish orange like Shiftwave image
              color: "#fff",
              padding: "14px 32px",
              borderRadius: "50px",
              fontSize: "16px",
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              gap: "8px",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 4px 14px rgba(232, 119, 34, 0.4)"
            }}
            className="hover:scale-105 transition-transform"
          >
            {ctaText} <ArrowUpRight size={20} />
          </motion.button>
        )}
      </div>
    </section>
  );
}