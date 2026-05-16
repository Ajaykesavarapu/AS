import { useParams, Link } from "wouter";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowLeft, ArrowRight, Clock, Tag } from "lucide-react";
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

const posts: Record<string, { tag: string; title: string; date: string; readTime: string; img: string; content: string[] }> = {
  "ai-automation-business-2025": {
    tag: "AI & Automation", title: "How AI Automation is Transforming Business Operations in 2025",
    date: "May 15, 2025", readTime: "6 min read",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&auto=format&fit=crop&q=80",
    content: [
      "Artificial intelligence is no longer a futuristic concept — it's a present-day competitive advantage that's transforming how businesses operate. In 2025, businesses in Hyderabad and across India are rapidly adopting AI automation to streamline operations, reduce costs, and accelerate growth.",
      "## What is AI Business Automation?",
      "AI automation refers to the use of artificial intelligence technologies to automate repetitive tasks, decision-making processes, and customer communications that would otherwise require human intervention.",
      "## Key Applications of AI Automation",
      "**WhatsApp Business Automation**: Businesses are using AI-powered WhatsApp bots to handle customer inquiries 24/7, send automated follow-ups, confirm appointments, and nurture leads through intelligent conversation flows.",
      "**CRM Integration & Automation**: AI-powered CRM systems automatically score leads, trigger follow-up sequences, and prioritize prospects based on behavior and engagement patterns.",
      "**Workflow Automation**: Cross-platform workflow automation connects different business tools — from invoicing to HR management — eliminating manual data entry and process delays.",
      "## The Business Impact",
      "Companies implementing AI automation are seeing dramatic improvements: 40-60% reduction in manual operational tasks, 3x faster lead response times, 24/7 customer service availability without additional staffing costs, and improved data accuracy across all business processes.",
      "## Getting Started with AI Automation",
      "The key to successful AI automation is starting with your biggest pain points. Identify the repetitive tasks consuming the most team time, map out the ideal automated workflow, and implement incrementally. ASKreativ helps businesses audit their current operations and build customized AI automation systems designed for their specific needs.",
    ],
  },
  "seo-guide-hyderabad": {
    tag: "SEO", title: "The Complete Guide to SEO for Businesses in Hyderabad",
    date: "May 10, 2025", readTime: "8 min read",
    img: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1200&auto=format&fit=crop&q=80",
    content: [
      "Search Engine Optimization (SEO) is the foundation of sustainable digital growth. For businesses in Hyderabad, ranking on Google's first page means more visibility, more leads, and more revenue.",
      "## Why SEO Matters for Hyderabad Businesses",
      "With over 10 million people and thousands of businesses competing for attention in Hyderabad, appearing on the first page of Google for your target keywords is critical. 75% of users never scroll past the first page of search results.",
      "## Core SEO Pillars",
      "**Technical SEO**: Site speed, mobile-friendliness, crawlability, and indexing ensure search engines can find and understand your content.",
      "**On-Page SEO**: Keyword optimization, content quality, meta tags, and internal linking help pages rank for target queries.",
      "**Off-Page SEO**: Backlink building from reputable websites improves your domain authority and ranking power.",
      "**Local SEO**: Google Business Profile optimization, local citations, and location-specific keywords attract nearby customers.",
      "## Local SEO for Hyderabad",
      "Local SEO is especially critical for Hyderabad businesses. Optimize your Google Business Profile with accurate information, high-quality photos, and regular posts. Build local citations in Indian directories. Encourage satisfied customers to leave Google reviews. Target location-specific keywords like 'digital marketing agency Hyderabad' or 'SEO services Hyderabad'.",
      "## Getting Results",
      "SEO is a long-term investment. Most businesses see initial improvements within 2-3 months and significant results within 4-6 months. The compounding nature of SEO means results improve over time — every piece of optimized content you create continues to attract visitors for months and years.",
    ],
  },
  "digital-identity-2025": {
    tag: "Branding", title: "Why Your Business Needs a Strong Digital Identity in 2025",
    date: "April 28, 2025", readTime: "5 min read",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&auto=format&fit=crop&q=80",
    content: [
      "In 2025, your digital identity is your business identity. Customers form opinions about your brand within 50 milliseconds of seeing your logo, website, or social media profile.",
      "## What Makes a Strong Digital Identity?",
      "A strong digital identity goes beyond a pretty logo. It encompasses your visual language, brand voice, customer experience, and the values your business communicates at every touchpoint.",
      "## The Components of Digital Brand Identity",
      "**Logo and Visual Identity**: A professional, memorable logo forms the foundation of your visual brand identity.",
      "**Brand Color Palette**: Consistent colors across all platforms create instant recognition and brand associations.",
      "**Typography**: Consistent font choices communicate personality and professionalism.",
      "**Brand Voice**: How you communicate in writing — whether formal, friendly, or technical — must be consistent everywhere.",
      "**Visual Content Style**: Your photography, graphics, and video content should follow a consistent aesthetic.",
      "## The Business Impact",
      "Brands with strong, consistent identities generate 23% more revenue than those without. In a competitive market like Hyderabad, your brand is often the deciding factor between you and a competitor with similar offerings.",
      "## Where to Start",
      "Begin with a brand audit. Review every customer touchpoint — your website, social media, business cards, email signatures — and ask whether they communicate a consistent, professional identity. If not, it's time for a brand refresh.",
    ],
  },
};

const relatedPosts = [
  { title: "How AI Automation is Transforming Business Operations", slug: "ai-automation-business-2025", tag: "AI & Automation" },
  { title: "The Complete Guide to SEO for Businesses in Hyderabad", slug: "seo-guide-hyderabad", tag: "SEO" },
  { title: "Why Your Business Needs a Strong Digital Identity", slug: "digital-identity-2025", tag: "Branding" },
];

function renderContent(line: string, i: number) {
  if (line.startsWith("## ")) {
    return <h2 key={i} style={{ fontSize: "22px", fontWeight: 700, color: "var(--fg)", marginTop: "32px", marginBottom: "12px" }}>{line.replace("## ", "")}</h2>;
  }
  if (line.startsWith("**") && line.includes("**:")) {
    const [bold, ...rest] = line.split("**:");
    return <p key={i} style={{ color: "var(--fg-light)", lineHeight: "1.8", marginBottom: "12px" }}><strong style={{ color: "var(--fg)", fontWeight: 600 }}>{bold.replace("**", "")}:</strong>{rest.join(": ")}</p>;
  }
  return <p key={i} style={{ color: "var(--fg-light)", lineHeight: "1.8", marginBottom: "16px" }}>{line}</p>;
}

export default function BlogPost() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug ?? "";
  const { openModal } = useModal();
  const post = posts[slug];

  if (!post) {
    return (
      <main style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <p style={{ color: "var(--fg-light)", marginBottom: "16px" }}>Article not found.</p>
          <Link href="/blog" style={{ color: "var(--orange)", fontWeight: 600 }}>← Back to Blog</Link>
        </div>
      </main>
    );
  }

  return (
    <main>
      {/* Hero Image */}
      <div style={{ height: "400px", overflow: "hidden", position: "relative" }}>
        <img src={post.img} alt={post.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6))" }} />
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: "1100px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: "60px", alignItems: "start" }} className="max-lg:block">
            {/* Article */}
            <div>
              <Link href="/blog" style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--fg-light)", fontSize: "14px", marginBottom: "24px", transition: "color 0.2s" }} className="hover:text-[var(--orange)]">
                <ArrowLeft size={16} /> Back to Blog
              </Link>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px", flexWrap: "wrap" }}>
                <span style={{ padding: "4px 14px", background: "rgba(232,119,34,0.1)", color: "var(--orange)", fontSize: "12px", fontWeight: 700, borderRadius: "50px" }}>{post.tag}</span>
                <span style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "13px", color: "var(--fg-lighter)" }}><Clock size={14} /> {post.readTime}</span>
                <span style={{ fontSize: "13px", color: "var(--fg-lighter)" }}>{post.date}</span>
              </div>
              <h1 style={{ fontSize: "clamp(24px, 3.5vw, 38px)", fontWeight: 800, color: "var(--fg)", lineHeight: "1.3", marginBottom: "36px" }}>{post.title}</h1>
              <div style={{ borderBottom: "2px solid var(--border-c)", marginBottom: "36px" }} />
              <div>
                {post.content.map((line, i) => renderContent(line, i))}
              </div>

              {/* CTA */}
              <FadeUp delay={0.2}>
                <div className="card" style={{ marginTop: "48px", textAlign: "center", background: "var(--navy)", border: "none", borderRadius: "20px" }}>
                  <h3 style={{ fontWeight: 700, fontSize: "22px", color: "#fff", marginBottom: "8px" }}>Ready to Grow Your Business?</h3>
                  <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: "20px" }}>Book a free consultation with our digital growth experts.</p>
                  <button onClick={openModal} className="btn-primary">
                    Book a Free Consultation <ArrowRight size={16} />
                  </button>
                </div>
              </FadeUp>
            </div>

            {/* Sidebar */}
            <div style={{ position: "sticky", top: "88px" }}>
              <div className="card" style={{ marginBottom: "24px" }}>
                <h3 style={{ fontWeight: 700, fontSize: "16px", color: "var(--fg)", marginBottom: "16px" }}>Related Articles</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                  {relatedPosts.filter((r) => r.slug !== slug).map((r) => (
                    <Link key={r.slug} href={`/blog/${r.slug}`} style={{ display: "block" }}>
                      <div style={{ padding: "12px", borderRadius: "10px", border: "1px solid var(--border-c)", transition: "all 0.2s" }} className="hover:border-[var(--orange)]">
                        <span style={{ fontSize: "11px", fontWeight: 700, color: "var(--orange)", display: "block", marginBottom: "4px" }}>{r.tag}</span>
                        <p style={{ fontSize: "13px", color: "var(--fg)", fontWeight: 500, lineHeight: "1.5", margin: 0 }}>{r.title}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="card" style={{ textAlign: "center", background: "rgba(232,119,34,0.06)", border: "1px solid rgba(232,119,34,0.2)" }}>
                <div style={{ fontSize: "28px", marginBottom: "8px" }}>🚀</div>
                <h3 style={{ fontWeight: 700, fontSize: "15px", color: "var(--fg)", marginBottom: "8px" }}>Free Consultation</h3>
                <p style={{ fontSize: "13px", color: "var(--fg-light)", marginBottom: "16px" }}>Get a customized digital strategy for your business.</p>
                <button onClick={openModal} className="btn-primary" style={{ width: "100%", justifyContent: "center", fontSize: "13px", padding: "10px 16px" }}>
                  Book Free Call →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
