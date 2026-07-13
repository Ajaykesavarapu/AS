import { useState, useRef } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Search, Clock } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { useModal } from "@/App";
import blogAi from "@/assets/blog_ai.png";
import blogSeo from "@/assets/blog_seo.png";
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

const posts = [
  {
    tag: "SEO",
    title: "AS Kreativ Helps You Rank Number One on Google with SEO Services",
    excerpt: "AS Kreativ provides search engine optimization (SEO) services to businesses to increase your online presence.",
    date: "May 2026",
    readTime: "8 min read",
    slug: "search-engine-optimization",
    img: blogSeo
  },
  {
    tag: "AI & Marketing",
    title: "AI in Digital Marketing Services: How AS Kreativ Helps Businesses Grow",
    excerpt: "AS Kreativ AI-powered digital marketing services transform marketing data into clear decisions and automated execution.",
    date: "May 2026",
    readTime: "10 min read",
    slug: "ai-digital-marketing-services",
    img: blogAi
  },
];

export default function Blog() {
  const [search, setSearch] = useState("");
  const { openModal } = useModal();

  const filtered = posts.filter((p) => {
    return search === "" || p.title.toLowerCase().includes(search.toLowerCase()) || p.excerpt.toLowerCase().includes(search.toLowerCase());
  });

  useSEO({
    title: "Blog & Insights | AI Marketing & SEO Success | ASKreativ",
    description: "The latest breakthroughs in AI automation, growth engineering, and the human psychology of elite branding. Engineered to keep you ahead.",
    schema: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.askreativ.in/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://www.askreativ.in/blog"
        }
      ]
    }
  });

  return (
    <main>
      <h1 className="sr-only">Blog & Insights | AI Marketing & SEO Success | ASKreativ</h1>
       {/* ── HERO ─────────────────────────────────────────────────────── */}
       <HeroSection
         backgroundType="image"
         backgroundSrc="/Images/blogs.jpeg"
         ctaText="Read Blog"
         ctaOnClick={openModal}
       />

      {/* ── ARTICLES ─────────────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "40px" }} className="max-md:grid-cols-1">
            {filtered.map((post, i) => (
              <FadeUp key={post.slug} delay={i * 0.1}>
                <Link href={`/blog/${post.slug}`} style={{ display: "block", height: "100%" }}>
                  <div className="card glass-card" style={{ padding: 0, overflow: "hidden", height: "100%", display: "flex", flexDirection: "column", borderRadius: "32px" }}>
                    <div style={{ padding: "40px", flex: 1, display: "flex", flexDirection: "column" }}>
                      <span className="section-tag" style={{ marginBottom: "16px" }}>{post.tag}</span>
                      <h3 style={{ fontWeight: 850, fontSize: "24px", color: "var(--fg)", marginBottom: "16px", lineHeight: "1.3" }}>{post.title}</h3>
                      <p style={{ fontSize: "16px", color: "var(--fg-light)", lineHeight: "1.8", marginBottom: "32px", flex: 1 }}>{post.excerpt}</p>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid var(--card-border)", paddingTop: "24px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "14px", color: "var(--fg-light)" }}>
                          <span>{post.date}</span>
                          <span style={{ display: "flex", alignItems: "center", gap: "6px" }}><Clock size={14} /> {post.readTime}</span>
                        </div>
                        <span style={{ color: "var(--orange)", fontWeight: 800, display: "flex", alignItems: "center", gap: "6px" }}>Read Article <ArrowRight size={18} /></span>
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
