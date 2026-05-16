import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, Target, Lightbulb, Users, Zap, Star } from "lucide-react";
import { useModal } from "@/App";

function FadeUp({ children, delay = 0, style }: { children: React.ReactNode; delay?: number; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, delay }} style={style}>
      {children}
    </motion.div>
  );
}

const values = [
  { icon: Target, title: "Results-Driven", desc: "Every strategy, system, and campaign is built around measurable outcomes — leads, visibility, and real business growth." },
  { icon: Lightbulb, title: "Innovation First", desc: "We stay ahead with AI automation, emerging technologies, and modern digital approaches that drive real impact." },
  { icon: Users, title: "Long-Term Partnership", desc: "We work as your extended digital team, invested in your long-term success from the very first day we work together." },
  { icon: Zap, title: "Speed & Precision", desc: "Fast execution with meticulous attention to quality, detail, and brand consistency across all deliverables." },
];

const milestones = [
  { year: "2019", title: "Founded in Hyderabad", desc: "ASKreativ Global Solutions was founded with a mission to bring world-class digital growth to Indian businesses." },
  { year: "2020", title: "First 20 Clients", desc: "Grew our client base across education, healthcare, and real estate industries in Hyderabad." },
  { year: "2022", title: "AI Automation Launch", desc: "Launched our AI automation services, integrating chatbots, CRM systems, and workflow automation for clients." },
  { year: "2023", title: "100+ Projects Delivered", desc: "Crossed 100+ successful digital projects across multiple industries across India." },
  { year: "2025", title: "200+ Projects Milestone", desc: "Expanded to serve businesses nationally and internationally with complete digital growth ecosystems." },
];

const team = [
  { name: "Ashwin Kumar", role: "Founder & CEO", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80" },
  { name: "Sravani Reddy", role: "Head of Digital Marketing", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80" },
  { name: "Kiran Babu", role: "Lead Web Developer", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80" },
  { name: "Priya Singh", role: "AI Automation Specialist", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&auto=format&fit=crop&q=80" },
];

export default function About() {
  const { openModal } = useModal();

  return (
    <main>
      {/* Hero */}
      <section style={{ background: "var(--bg-section)", padding: "100px 0 80px" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }} className="max-lg:block">
            <div>
              <span className="section-tag">About ASKreativ</span>
              <h1 className="section-title" style={{ fontSize: "clamp(32px, 4vw, 50px)" }}>
                We Are Your <span>Digital Growth Partner</span>
              </h1>
              <p style={{ color: "var(--fg-light)", lineHeight: "1.8", marginBottom: "16px" }}>
                ASKreativ Global Solutions is an AI-powered digital growth company based in Hyderabad, India. We help businesses scale through automation, branding, marketing, websites, ERP systems, and modern digital solutions.
              </p>
              <p style={{ color: "var(--fg-light)", lineHeight: "1.8", marginBottom: "32px" }}>
                We combine creativity, technology, AI, and strategy to build intelligent digital ecosystems designed for visibility, efficiency, and long-term business growth.
              </p>
              <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
                <button onClick={openModal} className="btn-primary">
                  Work With Us <ArrowRight size={16} />
                </button>
                <Link href="/services" className="btn-outline">Explore Services</Link>
              </div>
            </div>
            <FadeUp delay={0.2}>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&auto=format&fit=crop&q=80"
                alt="ASKreativ team at work"
                style={{ width: "100%", borderRadius: "20px", boxShadow: "0 20px 60px var(--shadow-md)" }}
              />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: "var(--navy)", padding: "48px 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "24px", textAlign: "center" }}>
            {[
              { num: "200+", label: "Projects Delivered" },
              { num: "50+", label: "Happy Clients" },
              { num: "10+", label: "Digital Services" },
              { num: "5+", label: "Years of Experience" },
            ].map((s) => (
              <div key={s.label}>
                <div style={{ fontSize: "42px", fontWeight: 800, color: "#fff", lineHeight: 1 }}><span style={{ color: "var(--gold)" }}>{s.num}</span></div>
                <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.65)", marginTop: "6px" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }} className="max-lg:block">
            <FadeUp>
              <span className="section-tag">Our Story</span>
              <h2 className="section-title">From a Vision to <span>Hyderabad's Leading Agency</span></h2>
              <p style={{ color: "var(--fg-light)", lineHeight: "1.8", marginBottom: "16px" }}>
                ASKreativ Global Solutions was founded with a singular mission — to bring world-class digital growth strategies to businesses in Hyderabad and across India. We recognized that most businesses needed more than just marketing. They needed an intelligent, interconnected digital ecosystem.
              </p>
              <p style={{ color: "var(--fg-light)", lineHeight: "1.8", marginBottom: "16px" }}>
                From our base in Hyderabad, we've helped educational institutions, solar industries, healthcare providers, real estate companies, startups, and corporate enterprises build smarter digital futures.
              </p>
              <p style={{ color: "var(--fg-light)", lineHeight: "1.8" }}>
                We combine creativity, technology, AI, and strategy to build systems that don't just work — they scale.
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div style={{ position: "relative", paddingLeft: "32px" }}>
                <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "2px", background: "linear-gradient(to bottom, var(--orange), transparent)" }} />
                {milestones.map((m, i) => (
                  <div key={m.year} style={{ paddingLeft: "24px", marginBottom: i < milestones.length - 1 ? "32px" : 0, position: "relative" }}>
                    <div style={{ position: "absolute", left: "-7px", top: "4px", width: "12px", height: "12px", borderRadius: "50%", background: "var(--orange)" }} />
                    <div style={{ fontSize: "12px", fontWeight: 700, color: "var(--orange)", marginBottom: "4px" }}>{m.year}</div>
                    <div style={{ fontWeight: 600, fontSize: "15px", color: "var(--fg)", marginBottom: "4px" }}>{m.title}</div>
                    <div style={{ fontSize: "13px", color: "var(--fg-light)" }}>{m.desc}</div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ background: "var(--bg-section)" }}>
        <div className="container">
          <FadeUp style={{ textAlign: "center", marginBottom: "48px" }}>
            <span className="section-tag" style={{ justifyContent: "center" }}>Our Values</span>
            <h2 className="section-title" style={{ textAlign: "center" }}>
              The Principles That <span>Guide Everything We Do</span>
            </h2>
          </FadeUp>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "20px" }}>
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <FadeUp key={v.title} delay={i * 0.1}>
                  <div className="card">
                    <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(232,119,34,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                      <Icon size={22} style={{ color: "var(--orange)" }} />
                    </div>
                    <h3 style={{ fontWeight: 700, fontSize: "16px", color: "var(--fg)", marginBottom: "8px" }}>{v.title}</h3>
                    <p style={{ fontSize: "13px", color: "var(--fg-light)", lineHeight: "1.7", margin: 0 }}>{v.desc}</p>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="container">
          <FadeUp style={{ textAlign: "center", marginBottom: "48px" }}>
            <span className="section-tag" style={{ justifyContent: "center" }}>Our Team</span>
            <h2 className="section-title" style={{ textAlign: "center" }}>
              The People <span>Behind ASKreativ</span>
            </h2>
          </FadeUp>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "20px" }}>
            {team.map((member, i) => (
              <FadeUp key={member.name} delay={i * 0.1}>
                <div className="card" style={{ textAlign: "center" }}>
                  <img src={member.img} alt={member.name} style={{ width: "80px", height: "80px", borderRadius: "50%", objectFit: "cover", margin: "0 auto 16px", display: "block", border: "3px solid var(--orange)" }} />
                  <div style={{ fontWeight: 700, fontSize: "16px", color: "var(--fg)", marginBottom: "4px" }}>{member.name}</div>
                  <div style={{ fontSize: "13px", color: "var(--orange)" }}>{member.role}</div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, color: "#fff", marginBottom: "16px" }}>
            Ready to Build Your <span style={{ color: "var(--gold)" }}>Digital Future?</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "32px", fontSize: "16px" }}>
            Partner with ASKreativ and transform your business with AI-powered growth strategies.
          </p>
          <button onClick={openModal} className="btn-primary">
            Book a Free Consultation <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </main>
  );
}
