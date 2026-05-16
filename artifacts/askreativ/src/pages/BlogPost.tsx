import { useParams, Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useModal } from "@/App";

const posts: Record<string, { tag: string; title: string; content: string; date: string; readTime: string }> = {
  "ai-automation-business-2025": {
    tag: "AI & Automation",
    title: "How AI Automation is Transforming Business Operations in 2025",
    date: "May 15, 2025",
    readTime: "6 min read",
    content: `Artificial intelligence is no longer a futuristic concept — it's a present-day competitive advantage. Businesses in Hyderabad and across India are rapidly adopting AI automation to streamline operations, reduce costs, and accelerate growth.\n\nFrom WhatsApp automation that handles hundreds of customer inquiries simultaneously to AI-powered CRM systems that predict lead behavior, the possibilities are transforming every industry.\n\n**What is AI Business Automation?**\n\nAI automation refers to the use of artificial intelligence technologies to automate repetitive tasks, decision-making processes, and customer communications that would otherwise require human intervention.\n\n**Key Applications**\n\n- WhatsApp Business Automation for customer support\n- AI-powered lead scoring and nurturing\n- Automated appointment scheduling and follow-ups\n- Intelligent invoice and billing management\n- Predictive analytics for business decisions\n\n**The ASKreativ Approach**\n\nAt ASKreativ, we build custom AI automation ecosystems tailored to your specific business needs. We don't just implement tools — we design intelligent systems that grow with your business.`
  },
  "seo-guide-hyderabad": {
    tag: "SEO",
    title: "The Complete Guide to SEO for Businesses in Hyderabad",
    date: "May 10, 2025",
    readTime: "8 min read",
    content: `Search Engine Optimization (SEO) is the foundation of sustainable digital growth. For businesses in Hyderabad, ranking on Google's first page means more visibility, more leads, and more revenue.\n\n**Why SEO Matters for Hyderabad Businesses**\n\nWith over 10 million people and thousands of businesses competing for attention in Hyderabad, appearing on the first page of Google for your target keywords is critical.\n\n**Core SEO Pillars**\n\n- Technical SEO: Site speed, mobile-friendliness, crawlability\n- On-Page SEO: Keyword optimization, content quality, meta tags\n- Off-Page SEO: Backlink building, brand mentions, authority signals\n- Local SEO: Google Business Profile, local citations, reviews\n\n**Getting Results**\n\nSEO is a long-term strategy. Most businesses see significant improvements within 3-6 months of consistent, strategic effort. The key is starting now — every day you delay is another day your competitors gain ground.`
  },
  "digital-identity-2025": {
    tag: "Branding",
    title: "Why Your Business Needs a Strong Digital Identity in 2025",
    date: "April 28, 2025",
    readTime: "5 min read",
    content: `In 2025, your digital identity is your business identity. Customers form opinions about your brand within seconds of seeing your logo, website, or social media profile.\n\n**What Makes a Strong Digital Identity?**\n\nA strong digital identity goes beyond a pretty logo. It encompasses your visual language, brand voice, customer experience, and the values your business communicates at every touchpoint.\n\n**The Components**\n\n- Logo and visual identity system\n- Brand color palette and typography\n- Brand voice and messaging guidelines\n- Website design and user experience\n- Social media presence and consistency\n\n**The Business Impact**\n\nBrands with strong, consistent identities generate 23% more revenue than those without. In a competitive market like Hyderabad, your brand is often the deciding factor between you and a competitor with similar offerings.`
  },
};

export default function BlogPost() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug ?? "";
  const { openModal } = useModal();
  const post = posts[slug];

  if (!post) {
    return (
      <main className="pt-24 min-h-screen bg-[#0A0B1A] flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Article not found.</p>
          <Link href="/blog" className="text-primary hover:underline" data-testid="link-back-blog">Back to Blog</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-24 overflow-x-hidden">
      <section className="py-20 bg-[#0A0B1A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Link href="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-white text-sm mb-8 transition-colors group" data-testid="link-back-to-blog">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Blog
          </Link>
          <span className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-xs rounded-full mb-6">{post.tag}</span>
          <h1 className="text-4xl lg:text-5xl font-display font-extrabold text-white leading-tight mb-6">{post.title}</h1>
          <div className="flex items-center gap-4 text-muted-foreground text-sm mb-12 pb-8 border-b border-white/8">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
          <div className="prose prose-invert prose-orange max-w-none">
            {post.content.split("\n\n").map((para, i) => {
              if (para.startsWith("**") && para.endsWith("**")) {
                return <h2 key={i} className="text-2xl font-display font-bold text-white mt-8 mb-4">{para.replace(/\*\*/g, "")}</h2>;
              }
              if (para.includes("\n-")) {
                const lines = para.split("\n");
                return (
                  <div key={i}>
                    {lines[0].startsWith("**") ? <h3 className="text-lg font-display font-semibold text-white mt-6 mb-3">{lines[0].replace(/\*\*/g, "")}</h3> : null}
                    <ul className="space-y-2 mb-4">
                      {lines.filter(l => l.startsWith("- ")).map(l => (
                        <li key={l} className="flex items-start gap-3 text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          {l.replace("- ", "")}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              }
              return <p key={i} className="text-muted-foreground leading-relaxed mb-4">{para}</p>;
            })}
          </div>
          <div className="mt-16 bg-[#141630] border border-primary/20 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-display font-bold text-white mb-3">Ready to Grow Your Business?</h3>
            <p className="text-muted-foreground mb-6">Book a free consultation with our digital growth experts.</p>
            <button
              onClick={openModal}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-all hover:shadow-[0_0_30px_rgba(232,119,34,0.4)]"
              data-testid="button-blogpost-cta"
            >
              Book a Free Consultation <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
