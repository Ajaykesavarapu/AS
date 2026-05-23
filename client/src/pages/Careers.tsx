import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, MapPin, Clock, ArrowRight, Zap, Users, Heart, Star, Target, Code2, Video, PenTool, Smartphone, FileText, BarChart3 } from "lucide-react";
import { useModal } from "@/App";
import { useSEO } from "@/hooks/useSEO";
import avatarImg from "@/assets/careers_avatar.png";
import HeroSection from "@/components/layout/HeroSection";

function FadeUp({ children, delay = 0, style }: { children: React.ReactNode; delay?: number; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div 
      ref={ref} 
      initial={{ opacity: 0, y: 30 }} 
      animate={inView ? { opacity: 1, y: 0 } : {}} 
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }} 
      style={style}
    >
      {children}
    </motion.div>
  );
}

const openings = [
  { 
    icon: Target, 
    title: "SEO Executive / Analyst", 
    type: "Full-time", 
    location: "Hyderabad", 
    dept: "Marketing", 
    desc: "Perform technical SEO audits, keyword research, and on-page optimization to dominate search rankings for our clients." 
  },
  { 
    icon: BarChart3, 
    title: "Performance Marketer", 
    type: "Full-time", 
    location: "Hyderabad", 
    dept: "Marketing", 
    desc: "Manage high-ROI Google & Meta ad campaigns, optimizing every rupee for maximum business growth." 
  },
  { 
    icon: Code2, 
    title: "Website Developer", 
    type: "Full-time", 
    location: "Hyderabad", 
    dept: "Technology", 
    desc: "Build modern, fast, and conversion-ready websites using Frontend technologies, WordPress, or Shopify." 
  },
  { 
    icon: Video, 
    title: "Video Editor & Content Creator", 
    type: "Full-time", 
    location: "Hyderabad", 
    dept: "Creative", 
    desc: "Craft cinematic and viral visual experiences that tell the human story behind modern brands." 
  },
  { 
    icon: PenTool, 
    title: "Graphic Designer", 
    type: "Full-time", 
    location: "Hyderabad", 
    dept: "Creative", 
    desc: "Create professional social media and branding designs that command respect and build instant trust." 
  },
  { 
    icon: Smartphone, 
    title: "Mobile App Developer", 
    type: "Full-time", 
    location: "Hyderabad", 
    dept: "Technology", 
    desc: "Develop scalable and high-performance Android and iOS applications for the modern user." 
  },
  { 
    icon: FileText, 
    title: "Content Writer", 
    type: "Full-time", 
    location: "Hyderabad", 
    dept: "Creative", 
    desc: "Write high-impact, SEO-optimized content that connects with audiences and drives conversions." 
  },
  { 
    icon: Users, 
    title: "Sales Executive / Business Development", 
    type: "Full-time", 
    location: "Hyderabad", 
    dept: "Sales", 
    desc: "Identify growth opportunities and build unshakeable partnerships with visionary businesses." 
  },
];

const culture = [
  { icon: Zap, title: "High-Growth Engine", desc: "Work on cutting-edge AI and digital projects that are transforming industries." },
  { icon: Users, title: "Collaborative Storytelling", desc: "Join a team where creativity and technology collide to solve real-world problems." },
  { icon: Heart, title: "Human-First Vision", desc: "Every project we build is about a dream and a struggle. We take that personally." },
  { icon: Star, title: "Unmatched Acceleration", desc: "Continuous learning and professional development are built into our culture." },
];

export default function Careers() {
  const [applied, setApplied] = useState<string | null>(null);
  const { openModal } = useModal();

  useSEO({
    title: "Join the Engine | Careers at ASKreativ Global Solutions",
    description: "We're not looking for employees. We're looking for architects, builders, and visionaries ready to scale the digital world. Join us in Hyderabad."
  });

  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ minHeight: "max(70vh, 500px)", background: "var(--bg-alt)" }}>
        <div className="container" style={{ height: "100%", display: "flex", alignItems: "center", padding: "80px 20px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "60px", width: "100%" }}>
            <div style={{ flex: "1 1 400px" }}>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 900, color: "var(--fg)", marginBottom: "24px", lineHeight: 1.15 }}
              >
                Join the Engine
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ fontSize: "20px", color: "var(--fg-light)", lineHeight: 1.6, maxWidth: "600px" }}
              >
                We're not looking for employees. We're looking for architects, builders, and visionaries ready to scale the digital world. Join ASKreativ Global Solutions.
              </motion.p>
            </div>
            <div style={{ flex: "1 1 400px", display: "flex", justifyContent: "center" }}>
              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                src={avatarImg}
                alt="Careers Avatar"
                style={{ width: "100%", maxWidth: "450px", objectFit: "contain", dropShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CULTURE ──────────────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <FadeUp style={{ textAlign: "center", marginBottom: "64px" }}>
            <h2 className="section-title">Engineered for <span>Elite Performance</span></h2>
          </FadeUp>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "32px" }}>
            {culture.map((c, i) => {
              const Icon = c.icon;
              return (
                <FadeUp key={c.title} delay={i * 0.1}>
                  <div className="card glass-card" style={{ textAlign: "center", padding: "48px 32px", borderRadius: "32px", height: "100%" }}>
                    <div style={{ width: "64px", height: "64px", borderRadius: "20px", background: "var(--orange-glass)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px", border: "1px solid var(--orange-border)" }}>
                      <Icon size={32} style={{ color: "var(--orange)" }} />
                    </div>
                    <h3 style={{ fontWeight: 850, fontSize: "20px", marginBottom: "12px" }}>{c.title}</h3>
                    <p style={{ fontSize: "15px", color: "var(--fg-light)", lineHeight: "1.7", margin: 0 }}>{c.desc}</p>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── OPENINGS ─────────────────────────────────────────────────── */}
      <section className="section" style={{ background: "var(--bg-section)" }}>
        <div className="container">
          <FadeUp style={{ marginBottom: "56px" }}>
            <span className="section-tag">OPEN ROLES</span>
            <h2 className="section-title">Your <span>Bench</span> is Ready</h2>
          </FadeUp>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {openings.map((job, i) => {
              const Icon = job.icon;
              return (
                <FadeUp key={job.title} delay={i * 0.08}>
                  <div className="card glass-card" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "32px", flexWrap: "wrap", padding: "40px", borderRadius: "32px" }}>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: "24px", flex: 1 }}>
                      <div style={{ width: "56px", height: "56px", borderRadius: "16px", background: "var(--orange-glass)", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid var(--orange-border)", flexShrink: 0 }}>
                        <Icon size={24} style={{ color: "var(--orange)" }} />
                      </div>
                      <div>
                        <h3 style={{ fontWeight: 900, fontSize: "22px", marginBottom: "8px" }}>{job.title}</h3>
                        <p style={{ fontSize: "16px", color: "var(--fg-light)", marginBottom: "20px", lineHeight: "1.6" }}>{job.desc}</p>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", fontSize: "14px", fontWeight: 700 }}>
                          <span style={{ display: "flex", alignItems: "center", gap: "8px" }}><MapPin size={16} />{job.location}</span>
                          <span style={{ display: "flex", alignItems: "center", gap: "8px" }}><Clock size={16} />{job.type}</span>
                        </div>
                      </div>
                    </div>
                    <button onClick={() => setApplied(job.title)} className="btn-primary" style={{ minWidth: "200px", justifyContent: "center" }}>
                      {applied === job.title ? "Vision Received ✓" : "Apply to Role"}
                    </button>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="section">
        <div className="container" style={{ background: "var(--fg)", borderRadius: "40px", padding: "100px 20px", textAlign: "center", position: "relative", overflow: "hidden" }}>
           <div style={{ position: "absolute", inset: 0, background: "linear-gradient(45deg, rgba(232,119,34,0.1) 0%, transparent 100%)" }} />
           <FadeUp>
             <h2 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 950, color: "#fff", marginBottom: "24px" }}>Build the Future with Us</h2>
             <p style={{ fontSize: "20px", color: "rgba(255,255,255,0.7)", marginBottom: "40px", maxWidth: "700px", margin: "0 auto 40px" }}>Don't see your specific role? Show us what we're missing. Send your vision and resume to our team.</p>
             <button onClick={openModal} className="btn-primary" style={{ padding: "18px 48px" }}>Contact Talent Team <ArrowRight size={20} /></button>
           </FadeUp>
         </div>
       </section>
     </main>
   );
}