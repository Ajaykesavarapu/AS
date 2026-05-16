import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useModal } from "@/App";

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, delay }}>
      {children}
    </motion.div>
  );
}

const categories = [
  {
    title: "SEO & Digital Marketing",
    faqs: [
      { q: "What is SEO?", a: "SEO (Search Engine Optimization) is the process of improving your website visibility on search engines like Google. SEO helps businesses rank higher in search results, attract organic traffic, and improve online presence without paid advertising." },
      { q: "What is PPC and what are its benefits?", a: "PPC (Pay-Per-Click) is a digital advertising method where businesses pay only when someone clicks on their advertisement. PPC helps businesses generate instant visibility, targeted traffic, faster leads, and measurable campaign performance." },
      { q: "What is the difference between SEO and SEM?", a: "SEO focuses on improving organic search visibility naturally over time, while SEM (Search Engine Marketing) includes paid advertising strategies such as Google Ads to generate faster visibility and traffic." },
      { q: "What is Local SEO, and how do I do Local SEO?", a: "Local SEO helps businesses improve visibility in location-based searches. It includes optimizing Google Business Profiles, local keywords, customer reviews, location pages, and local citations." },
      { q: "What are the most important Google ranking factors?", a: "Some important ranking factors include quality content, website speed, mobile responsiveness, backlinks, user experience, keyword relevance, and technical SEO optimization." },
      { q: "How long does it take to rank a new website in Google?", a: "SEO is a long-term process. Ranking timelines depend on competition, keyword difficulty, website quality, content strategy, and optimization efforts. Most businesses see significant improvements within 3–6 months." },
    ],
  },
  {
    title: "Digital Services",
    faqs: [
      { q: "Does my business benefit from digital marketing?", a: "Yes. Digital marketing helps businesses improve visibility, attract customers, generate leads, strengthen branding, and grow online through multiple digital platforms." },
      { q: "What's the difference between On-Page SEO and Technical SEO?", a: "On-Page SEO focuses on optimizing content, keywords, headings, and website pages, while Technical SEO focuses on website speed, indexing, mobile responsiveness, crawlability, and backend optimization." },
      { q: "What is A/B Testing in digital marketing?", a: "A/B Testing is the process of comparing two versions of a webpage, advertisement, or content element to identify which version performs better." },
      { q: "What kind of websites do you work on?", a: "We work on business websites, corporate websites, educational websites, e-commerce platforms, landing pages, and customized web solutions." },
      { q: "Which social media platforms should I use for my business?", a: "The right platform depends on your business goals and audience. Common platforms include Instagram, Facebook, LinkedIn, YouTube, and X (Twitter)." },
      { q: "What is email marketing?", a: "Email marketing is a digital communication strategy used to send promotional content, updates, campaigns, and customer engagement emails directly to audiences." },
    ],
  },
  {
    title: "About ASKreativ",
    faqs: [
      { q: "Do we serve overseas clients?", a: "Yes. ASKreativ Global Solutions works with both domestic and international clients across different industries and business sectors." },
      { q: "Difference between performance marketing and digital marketing?", a: "Digital marketing is a broad category that includes SEO, social media, branding, and content marketing. Performance marketing focuses specifically on measurable outcomes such as leads, conversions, and ROI." },
      { q: "What level of communication and support can I expect?", a: "ASKreativ provides regular communication, performance updates, reporting, campaign discussions, and ongoing strategic support throughout the project." },
      { q: "Do you offer social media marketing, SEO, and PPC advertising services?", a: "Yes. ASKreativ provides complete digital marketing solutions including SEO, PPC advertising, social media marketing, branding, content creation, and automation services." },
      { q: "What metrics do you use to measure the success of digital marketing campaigns?", a: "We track website traffic, engagement, conversions, leads, ROI, keyword rankings, and campaign performance metrics." },
      { q: "What is an SSL Certificate and why is it important?", a: "An SSL Certificate secures website data and creates a secure connection between users and the website. It also improves customer trust and helps with SEO rankings." },
      { q: "Can I lose Google ranking if I redesign my website?", a: "Yes, improper redesign can affect SEO rankings. Proper SEO migration and technical optimization help maintain search visibility during website updates." },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid var(--border-c)" }}>
      <button
        onClick={() => setOpen((v) => !v)}
        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", padding: "20px 0", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
      >
        <span style={{ fontWeight: 500, fontSize: "15px", color: "var(--fg)" }}>{q}</span>
        <span style={{ fontSize: "24px", color: "var(--orange)", flexShrink: 0, lineHeight: 1 }}>{open ? "×" : "+"}</span>
      </button>
      {open && (
        <div style={{ paddingBottom: "20px" }}>
          <p style={{ fontSize: "14px", color: "var(--fg-light)", lineHeight: "1.7", margin: 0 }}>{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const { openModal } = useModal();

  return (
    <main>
      {/* Hero */}
      <section style={{ background: "var(--bg-section)", padding: "100px 0 80px", textAlign: "center" }}>
        <div className="container">
          <span className="section-tag" style={{ justifyContent: "center" }}>FAQ</span>
          <h1 style={{ fontSize: "clamp(32px, 4vw, 50px)", fontWeight: 800, color: "var(--fg)", marginBottom: "16px" }}>
            Frequently Asked <span style={{ color: "var(--orange)" }}>Questions</span>
          </h1>
          <p style={{ fontSize: "16px", color: "var(--fg-light)", maxWidth: "600px", margin: "0 auto", lineHeight: "1.8" }}>
            Everything you need to know about ASKreativ's services, approach, and how we can help your business grow digitally.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "60px", alignItems: "start" }} className="max-lg:block">
            {/* Sidebar */}
            <FadeUp>
              <div style={{ position: "sticky", top: "88px" }}>
                <h3 style={{ fontWeight: 700, fontSize: "16px", color: "var(--fg)", marginBottom: "16px" }}>Categories</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "32px" }}>
                  {categories.map((cat) => (
                    <a
                      key={cat.title}
                      href={`#${cat.title.replace(/\s/g, "-").toLowerCase()}`}
                      style={{ fontSize: "14px", color: "var(--fg-light)", padding: "8px 12px", borderRadius: "8px", border: "1px solid var(--border-c)", display: "block", transition: "all 0.2s" }}
                      className="hover:border-[var(--orange)] hover:text-[var(--orange)]"
                    >
                      {cat.title}
                    </a>
                  ))}
                </div>
                <div className="card" style={{ textAlign: "center" }}>
                  <p style={{ fontWeight: 600, color: "var(--fg)", marginBottom: "8px", fontSize: "14px" }}>Still have questions?</p>
                  <button onClick={openModal} className="btn-primary" style={{ width: "100%", justifyContent: "center", fontSize: "13px" }}>
                    Talk to Our Team <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </FadeUp>

            {/* FAQ Sections */}
            <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
              {categories.map((cat, i) => (
                <FadeUp key={cat.title} delay={i * 0.1}>
                  <div id={cat.title.replace(/\s/g, "-").toLowerCase()}>
                    <h2 style={{ fontWeight: 700, fontSize: "20px", color: "var(--orange)", marginBottom: "24px", paddingBottom: "12px", borderBottom: "2px solid var(--orange)" }}>
                      {cat.title}
                    </h2>
                    {cat.faqs.map((faq) => (
                      <FAQItem key={faq.q} q={faq.q} a={faq.a} />
                    ))}
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: 800, color: "#fff", marginBottom: "16px" }}>
            Ready to Build Your Digital Growth System?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "32px" }}>
            Let's create a customized digital strategy for your business.
          </p>
          <button onClick={openModal} className="btn-primary">
            Book a Free Consultation <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </main>
  );
}
