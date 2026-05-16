import { useState, useRef } from "react";
import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";

const categories = ["All", "AI & Automation", "Digital Marketing", "SEO", "Branding", "Website Development", "Social Media"];

const posts = [
  { tag: "AI & Automation", title: "How AI Automation is Transforming Business Operations in 2025", excerpt: "Discover how businesses in Hyderabad are using AI-powered automation to cut costs, increase efficiency, and scale faster than ever before.", date: "May 15, 2025", readTime: "6 min read", slug: "ai-automation-business-2025" },
  { tag: "Digital Marketing", title: "The Complete Guide to SEO for Businesses in Hyderabad", excerpt: "A step-by-step guide to improving your Google rankings and attracting local customers through modern SEO strategies tailored for Hyderabad businesses.", date: "May 10, 2025", readTime: "8 min read", slug: "seo-guide-hyderabad" },
  { tag: "Branding", title: "Why Your Business Needs a Strong Digital Identity in 2025", excerpt: "In a crowded digital marketplace, your brand identity is your competitive edge. Learn how to build a brand that stands out and drives growth.", date: "April 28, 2025", readTime: "5 min read", slug: "digital-identity-2025" },
  { tag: "Social Media", title: "Instagram Marketing Strategies That Actually Work in 2025", excerpt: "Cut through the noise on Instagram with proven strategies for reels, stories, and engagement that convert followers into loyal customers.", date: "April 20, 2025", readTime: "7 min read", slug: "instagram-marketing-2025" },
  { tag: "Website Development", title: "Why Your Business Website Is Your Most Important Digital Asset", excerpt: "Your website is working 24/7. Learn why investing in a modern, conversion-focused website is the single best digital investment for any business.", date: "April 15, 2025", readTime: "6 min read", slug: "business-website-importance" },
  { tag: "SEO", title: "Local SEO: How to Dominate Google Search in Hyderabad", excerpt: "Rank #1 for local searches in Hyderabad with these proven local SEO tactics that bring more customers to your business.", date: "April 5, 2025", readTime: "9 min read", slug: "local-seo-hyderabad" },
];

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay }} className={className}>
      {children}
    </motion.div>
  );
}

export default function Blog() {
  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = posts.filter(p => {
    const matchCat = active === "All" || p.tag === active;
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) || p.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <main className="pt-24 overflow-x-hidden">
      <section className="py-20 bg-[#0A0B1A] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #E87722, transparent)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeUp>
            <span className="text-xs font-mono text-primary tracking-widest uppercase mb-4 block">— LATEST INSIGHTS</span>
            <h1 className="text-5xl lg:text-6xl font-display font-extrabold text-white leading-tight mb-6">From Our Blog</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Insights, strategies, and guides on AI automation, digital marketing, SEO, and business growth from the ASKreativ team.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="py-20 bg-[#0F1035]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1 max-w-sm">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search articles..."
                className="w-full bg-[#141630] border border-white/10 rounded-full pl-10 pr-4 py-2.5 text-white text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
                data-testid="input-blog-search"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${active === cat ? "bg-primary text-white" : "bg-[#141630] border border-white/10 text-muted-foreground hover:border-primary/30 hover:text-white"}`}
                  data-testid={`button-cat-${cat.toLowerCase().replace(/\s/g, "-")}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeUp>

          {filtered.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground">No articles found matching your search.</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((post, i) => (
                <FadeUp key={post.slug} delay={i * 0.07}>
                  <Link href={`/blog/${post.slug}`} data-testid={`card-blog-${post.slug}`}>
                    <div className="group h-full bg-[#141630] border border-white/8 rounded-2xl p-6 hover:border-primary/30 hover:shadow-[0_0_30px_rgba(232,119,34,0.1)] hover:-translate-y-1 transition-all duration-300">
                      <span className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-xs rounded-full mb-4">{post.tag}</span>
                      <h2 className="text-white font-display font-bold text-lg mb-3 group-hover:text-primary transition-colors leading-snug">{post.title}</h2>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground/60">
                        <div className="flex items-center gap-3">
                          <span>{post.date}</span>
                          <span>·</span>
                          <span>{post.readTime}</span>
                        </div>
                        <span className="text-primary flex items-center gap-1">Read <ArrowRight size={12} /></span>
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
