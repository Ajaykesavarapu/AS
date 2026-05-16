import { useState, useRef } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Search, Clock } from "lucide-react";

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, delay }}>
      {children}
    </motion.div>
  );
}

const categories = ["All", "AI & Automation", "Digital Marketing", "SEO", "Branding", "Website Development", "Social Media"];

const posts = [
  { tag: "AI & Automation", title: "How AI Automation is Transforming Business Operations in 2025", excerpt: "Discover how businesses in Hyderabad are using AI-powered automation to cut costs, increase efficiency, and scale faster than ever before.", date: "May 15, 2025", readTime: "6 min read", slug: "ai-automation-business-2025", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&auto=format&fit=crop&q=70" },
  { tag: "SEO", title: "The Complete Guide to SEO for Businesses in Hyderabad", excerpt: "A step-by-step guide to improving your Google rankings and attracting local customers through modern SEO strategies tailored for Hyderabad businesses.", date: "May 10, 2025", readTime: "8 min read", slug: "seo-guide-hyderabad", img: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&auto=format&fit=crop&q=70" },
  { tag: "Branding", title: "Why Your Business Needs a Strong Digital Identity in 2025", excerpt: "In a crowded digital marketplace, your brand identity is your competitive edge. Learn how to build a brand that stands out and drives growth.", date: "April 28, 2025", readTime: "5 min read", slug: "digital-identity-2025", img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&auto=format&fit=crop&q=70" },
  { tag: "Social Media", title: "Instagram Marketing Strategies That Actually Work in 2025", excerpt: "Cut through the noise on Instagram with proven strategies for reels, stories, and engagement that convert followers into loyal customers.", date: "April 20, 2025", readTime: "7 min read", slug: "instagram-marketing-2025", img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&auto=format&fit=crop&q=70" },
  { tag: "Website Development", title: "Why Your Business Website Is Your Most Important Digital Asset", excerpt: "Your website is working 24/7. Learn why investing in a modern, conversion-focused website is the single best digital investment for any business.", date: "April 15, 2025", readTime: "6 min read", slug: "business-website-importance", img: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&auto=format&fit=crop&q=70" },
  { tag: "SEO", title: "Local SEO: How to Dominate Google Search in Hyderabad", excerpt: "Rank #1 for local searches in Hyderabad with proven local SEO tactics that bring more customers to your business.", date: "April 5, 2025", readTime: "9 min read", slug: "local-seo-hyderabad", img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&auto=format&fit=crop&q=70" },
  { tag: "Digital Marketing", title: "Performance Marketing vs. Digital Marketing: What's the Difference?", excerpt: "Understand the key differences between performance marketing and digital marketing, and which approach is right for your business goals.", date: "March 28, 2025", readTime: "5 min read", slug: "performance-vs-digital-marketing", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=70" },
  { tag: "AI & Automation", title: "WhatsApp Business Automation: The Complete Guide for 2025", excerpt: "Learn how to automate your WhatsApp Business to generate leads, follow up with customers, and improve sales — all on autopilot.", date: "March 20, 2025", readTime: "7 min read", slug: "whatsapp-automation-guide", img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&auto=format&fit=crop&q=70" },
  { tag: "Branding", title: "10 Branding Mistakes That Hurt Your Business Growth", excerpt: "Avoid these common branding mistakes that damage credibility, confuse customers, and slow down your business growth.", date: "March 10, 2025", readTime: "6 min read", slug: "branding-mistakes-business", img: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&auto=format&fit=crop&q=70" },
];

export default function Blog() {
  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = posts.filter((p) => {
    const matchCat = active === "All" || p.tag === active;
    const matchSearch = search === "" || p.title.toLowerCase().includes(search.toLowerCase()) || p.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const featured = posts[0];

  return (
    <main>
      {/* Hero */}
      <section style={{ background: "var(--bg-section)", padding: "100px 0 80px" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }} className="max-lg:block">
            <div>
              <span className="section-tag">Blog & Insights</span>
              <h1 style={{ fontSize: "clamp(32px, 4vw, 50px)", fontWeight: 800, color: "var(--fg)", marginBottom: "16px" }}>
                Digital Growth <span style={{ color: "var(--orange)" }}>Insights</span>
              </h1>
              <p style={{ fontSize: "16px", color: "var(--fg-light)", lineHeight: "1.8", marginBottom: "28px" }}>
                Strategies, guides, and insights on AI automation, digital marketing, SEO, and business growth from the ASKreativ team.
              </p>
              <div style={{ position: "relative", maxWidth: "400px" }}>
                <Search size={16} style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", color: "var(--fg-lighter)" }} />
                <input
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search articles..."
                  style={{
                    width: "100%", padding: "12px 16px 12px 40px", fontSize: "14px",
                    background: "var(--card-bg)", color: "var(--fg)",
                    border: "1px solid var(--border-c)", borderRadius: "50px", outline: "none",
                  }}
                />
              </div>
            </div>
            {/* Featured Post */}
            <FadeUp delay={0.2}>
              <Link href={`/blog/${featured.slug}`} style={{ display: "block" }}>
                <div className="card" style={{ padding: 0, overflow: "hidden" }}>
                  <img src={featured.img} alt={featured.title} style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover" }} />
                  <div style={{ padding: "20px" }}>
                    <span style={{ padding: "3px 10px", fontSize: "11px", fontWeight: 700, background: "rgba(232,119,34,0.1)", color: "var(--orange)", borderRadius: "50px", display: "inline-block", marginBottom: "10px" }}>Featured · {featured.tag}</span>
                    <h3 style={{ fontWeight: 700, fontSize: "17px", color: "var(--fg)", marginBottom: "8px", lineHeight: "1.4" }}>{featured.title}</h3>
                    <p style={{ fontSize: "13px", color: "var(--fg-light)", lineHeight: "1.6" }}>{featured.excerpt.slice(0, 100)}...</p>
                  </div>
                </div>
              </Link>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="section">
        <div className="container">
          {/* Filter */}
          <FadeUp>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "40px" }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  style={{
                    padding: "7px 18px", borderRadius: "50px", fontSize: "13px", fontWeight: 600,
                    cursor: "pointer", transition: "all 0.2s", border: "2px solid",
                    borderColor: active === cat ? "var(--orange)" : "var(--border-c)",
                    background: active === cat ? "var(--orange)" : "transparent",
                    color: active === cat ? "#fff" : "var(--fg-light)",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeUp>

          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "60px 0", color: "var(--fg-light)" }}>No articles found matching your search.</div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "24px" }}>
              {filtered.map((post, i) => (
                <FadeUp key={post.slug} delay={i * 0.07}>
                  <Link href={`/blog/${post.slug}`} style={{ display: "block", height: "100%" }}>
                    <div className="card" style={{ padding: 0, overflow: "hidden", height: "100%", display: "flex", flexDirection: "column" }}>
                      <div style={{ overflow: "hidden" }}>
                        <img src={post.img} alt={post.title} style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover", transition: "transform 0.4s" }} />
                      </div>
                      <div style={{ padding: "20px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
                        <span style={{ padding: "3px 10px", fontSize: "11px", fontWeight: 700, background: "rgba(232,119,34,0.1)", color: "var(--orange)", borderRadius: "50px", display: "inline-block", marginBottom: "10px", alignSelf: "flex-start" }}>{post.tag}</span>
                        <h3 style={{ fontWeight: 700, fontSize: "16px", color: "var(--fg)", marginBottom: "10px", lineHeight: "1.4", flex: 1 }}>{post.title}</h3>
                        <p style={{ fontSize: "13px", color: "var(--fg-light)", lineHeight: "1.6", marginBottom: "16px" }}>{post.excerpt.slice(0, 100)}...</p>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "12px", color: "var(--fg-lighter)" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                            <span>{post.date}</span>
                            <span style={{ display: "flex", alignItems: "center", gap: "4px" }}><Clock size={12} /> {post.readTime}</span>
                          </div>
                          <span style={{ color: "var(--orange)", display: "flex", alignItems: "center", gap: "4px" }}>Read <ArrowRight size={12} /></span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </FadeUp>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
