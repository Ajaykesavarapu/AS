import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Briefcase, MapPin, Clock, ArrowRight, Users, Zap, Heart, Star } from "lucide-react";

function FadeUp({ children, delay = 0, style }: { children: React.ReactNode; delay?: number; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, delay }} style={style}>
      {children}
    </motion.div>
  );
}

const openings = [
  { title: "Digital Marketing Specialist", type: "Full-time", location: "Hyderabad", dept: "Marketing", desc: "Drive digital marketing campaigns across SEO, SEM, social media, and content marketing for our clients." },
  { title: "AI / Automation Engineer", type: "Full-time", location: "Hyderabad", dept: "Technology", desc: "Build and deploy AI automation systems, chatbots, CRM integrations, and workflow automation solutions." },
  { title: "SEO Analyst", type: "Full-time", location: "Hyderabad", dept: "Marketing", desc: "Execute technical and content SEO strategies for clients across various industries." },
  { title: "Web Developer (React / Next.js)", type: "Full-time", location: "Hyderabad / Remote", dept: "Technology", desc: "Build modern, performant websites and web applications using React, Next.js, and TypeScript." },
  { title: "Brand & Creative Designer", type: "Full-time", location: "Hyderabad", dept: "Design", desc: "Create compelling brand identities, marketing collateral, and digital designs that drive business results." },
  { title: "Business Development Executive", type: "Full-time", location: "Hyderabad", dept: "Sales", desc: "Identify new business opportunities, manage client relationships, and drive revenue growth." },
  { title: "Social Media Manager", type: "Full-time", location: "Hyderabad", dept: "Marketing", desc: "Create and manage social media strategies, content calendars, and campaigns across platforms." },
  { title: "Mobile App Developer (Flutter)", type: "Full-time", location: "Hyderabad", dept: "Technology", desc: "Develop cross-platform Android and iOS mobile applications using Flutter and Dart." },
];

const culture = [
  { icon: Zap, title: "Fast-Paced Growth", desc: "Work on cutting-edge AI and digital projects shaping the future of business in India." },
  { icon: Users, title: "Collaborative Culture", desc: "Join a tight-knit team of creative and technical professionals who support each other's growth." },
  { icon: Heart, title: "Purpose-Driven Work", desc: "Help real businesses in Hyderabad and across India build stronger digital futures." },
  { icon: Star, title: "Learning & Development", desc: "Continuous learning opportunities, certifications, and skill development programs." },
];

const perks = [
  "Competitive salary packages", "Flexible working hours", "Remote work options",
  "Health insurance coverage", "Learning & certification support", "Career growth opportunities",
  "Dynamic work environment", "Performance bonuses",
];

const deptColors: Record<string, string> = {
  Marketing: "rgba(232, 119, 34, 0.1)", Technology: "rgba(26, 31, 110, 0.1)",
  Design: "rgba(245, 166, 35, 0.15)", Sales: "rgba(37, 211, 102, 0.1)",
};

export default function Careers() {
  const [applied, setApplied] = useState<string | null>(null);

  return (
    <main>
      {/* Hero */}
      <section style={{ background: "var(--bg-section)", padding: "100px 0 80px" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }} className="max-lg:block">
            <div>
              <span className="section-tag">Join Our Team</span>
              <h1 style={{ fontSize: "clamp(32px, 4vw, 50px)", fontWeight: 800, color: "var(--fg)", marginBottom: "16px" }}>
                Build Your Career at <span style={{ color: "var(--orange)" }}>ASKreativ</span>
              </h1>
              <p style={{ fontSize: "16px", color: "var(--fg-light)", lineHeight: "1.8", marginBottom: "24px" }}>
                Join Hyderabad's fastest-growing AI and digital marketing agency. Help businesses grow while growing yourself.
              </p>
              <a href="mailto:hello@askreativ.com?subject=Job Application - ASKreativ" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                Send Your Resume <ArrowRight size={16} />
              </a>
            </div>
            <FadeUp delay={0.2}>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&auto=format&fit=crop&q=80"
                alt="ASKreativ team"
                style={{ width: "100%", borderRadius: "20px", boxShadow: "0 20px 60px var(--shadow-md)" }}
              />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="section">
        <div className="container">
          <FadeUp style={{ textAlign: "center", marginBottom: "48px" }}>
            <span className="section-tag" style={{ justifyContent: "center" }}>Why ASKreativ</span>
            <h2 className="section-title" style={{ textAlign: "center" }}>Why Work at <span>ASKreativ?</span></h2>
          </FadeUp>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "20px", marginBottom: "48px" }}>
            {culture.map((c, i) => {
              const Icon = c.icon;
              return (
                <FadeUp key={c.title} delay={i * 0.1}>
                  <div className="card" style={{ textAlign: "center" }}>
                    <div style={{ width: "56px", height: "56px", borderRadius: "14px", background: "rgba(232,119,34,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                      <Icon size={24} style={{ color: "var(--orange)" }} />
                    </div>
                    <h3 style={{ fontWeight: 700, fontSize: "16px", color: "var(--fg)", marginBottom: "8px" }}>{c.title}</h3>
                    <p style={{ fontSize: "13px", color: "var(--fg-light)", lineHeight: "1.7", margin: 0 }}>{c.desc}</p>
                  </div>
                </FadeUp>
              );
            })}
          </div>

          <FadeUp delay={0.2}>
            <div className="card" style={{ background: "var(--bg-section)" }}>
              <h3 style={{ fontWeight: 700, fontSize: "18px", color: "var(--fg)", marginBottom: "20px" }}>Employee Perks & Benefits</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "12px" }}>
                {perks.map((perk) => (
                  <div key={perk} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "var(--fg-light)" }}>
                    <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--orange)", flexShrink: 0 }} />
                    {perk}
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section" style={{ background: "var(--bg-section)" }}>
        <div className="container">
          <FadeUp style={{ marginBottom: "36px" }}>
            <span className="section-tag">Current Openings</span>
            <h2 className="section-title">Open Positions at <span>ASKreativ</span></h2>
          </FadeUp>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {openings.map((job, i) => (
              <FadeUp key={job.title} delay={i * 0.06}>
                <div className="card" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", flexWrap: "wrap" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "16px", flex: 1 }}>
                    <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: deptColors[job.dept] || "rgba(232,119,34,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Briefcase size={18} style={{ color: "var(--orange)" }} />
                    </div>
                    <div>
                      <h3 style={{ fontWeight: 700, fontSize: "16px", color: "var(--fg)", marginBottom: "4px" }}>{job.title}</h3>
                      <p style={{ fontSize: "13px", color: "var(--fg-light)", marginBottom: "8px" }}>{job.desc}</p>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", fontSize: "12px", color: "var(--fg-lighter)" }}>
                        <span style={{ display: "flex", alignItems: "center", gap: "4px" }}><MapPin size={12} />{job.location}</span>
                        <span style={{ display: "flex", alignItems: "center", gap: "4px" }}><Clock size={12} />{job.type}</span>
                        <span style={{ padding: "2px 10px", background: deptColors[job.dept] || "rgba(232,119,34,0.1)", borderRadius: "50px", color: "var(--orange)", fontWeight: 600 }}>{job.dept}</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setApplied(job.title)}
                    className="btn-primary"
                    style={{ fontSize: "13px", padding: "10px 20px" }}
                  >
                    {applied === job.title ? "Applied! ✓" : "Apply Now →"}
                  </button>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: 800, color: "#fff", marginBottom: "16px" }}>
            Don't See the Right Role?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "32px" }}>
            Send your resume and we'll reach out when a matching position opens.
          </p>
          <a href="mailto:hello@askreativ.com?subject=Job Application - ASKreativ" className="btn-primary">
            Send Your Resume <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </main>
  );
}
