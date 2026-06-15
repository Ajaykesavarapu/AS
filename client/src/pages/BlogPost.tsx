import { useParams, Link } from "wouter";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowLeft, ArrowRight, Clock, Tag } from "lucide-react";
import { useModal } from "@/App";
import { useSEO } from "@/hooks/useSEO";
import HeroSection from "@/components/layout/HeroSection";
import blogAi from "@/assets/blog_ai.png";
import blogSeo from "@/assets/blog_seo.png";

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, delay }}>
      {children}
    </motion.div>
  );
}

const posts: Record<string, { tag: string; title: string; date: string; readTime: string; img: string; content: string[]; seo: { title: string; description: string } }> = {
  "search-engine-optimization": {
    tag: "SEO", 
    title: "AS Kreativ Helps You Rank Number One on Google with SEO Services",
    date: "June 2024", 
    readTime: "8 min read",
    img: blogSeo,
    seo: {
      title: "AS Kreativ That Delivers Real Impact Through SEO",
      description: "Achieve real impact with AS Kreativ SEO strategies to improve website ranking higher on Google and increase organic traffic and visibility."
    },
    content: [
      "AS Kreativ provides search engine optimization (SEO) services to businesses to increase your online presence. Our team provides you with strategies that are designed professionally to improve your appearance on Google. We offer you customized SEO solutions that deliver real and measurable results. We are experts to optimize your website's performance and natural presence.",
      "## What is SEO and Why is it Important for Your Business",
      "Search Engine Optimization (SEO) involves in improving your website to achieve higher rankings in search engine results like Google. When done right, SEO increases organic traffic, builds brand trust, and draws in more qualified leads for your business.",
      "SEO is crucial because users care to trust websites that appear on the first page of search results. If your site is not visible where your audience is looking, you could be missing out on valuable opportunities.",
      "### What SEO services do we offer to you?",
      "We offer SEO services that are proven strategies designed to improve your website’s visibility, usability, and competitiveness in search engine rankings.",
      "At AS Kreativ, we follow a pattern that makes your keyword ranks",
      "#### Keyword Research",
      "we will find out what your audience is really looking for, and we will maintain all the requirements from the client base.",
      "Here, the keyword is the first foundation of every successful SEO strategy. It involves in identifying the exact keywords and attracting your potential customers by typing them into search engines.",
      "Our keyword research is the process that goes beyond the basic search volume metrics for the user intent, Search volume & trends, and competitor Analysis.",
      "#### On-Page",
      "On-page is the process of optimizing individual pages on your website. And we will calculate each and every parameter like Title Tags & Meta Descriptions, Header Tags (H1, H2, H3...), Keyword Placement, Image Optimization, Internal Linking, URL Structure, and many more.",
      "#### Off-Page",
      "Off-Page is an activity that is done outside of the website to improve the search visibility for trustworthiness and authority in the eyes of search engines",
      "While on-page SEO focuses on your site’s internal content and structure, off-page SEO boosts your credibility and rankings through external signals.",
      "#### Technical SEO",
      "Technical SEO focuses on optimizing the behind-the-scenes of your website, so that search engines can crawl, index, and rank your content. We will fix of all the technical issues to improve both search engine accessibility and user experience.",
      "We will do Site speed optimization, Mobile Friendliness, XML Sitemaps, & Robots.txt, Crawl Error Fixing, HTTPS & Site Security, Structured Data Markup, Core Web Vitals Optimization.",
      "#### Local SEO",
      "Local SEO focuses on your online presence to attract customers from your specific geographic area. Whether you own a local shop, clinic, restaurant, or service-based business, we will help you to create a Google My Business that appears when users search for you, like “near me” or include a city name.",
      "We will maintain the Google Business Profile Optimization, Local Keyword Targeting, and NAP Consistency, Local Citations & Directory Listings, Location-Based Content, Customer Reviews & Ratings.",
      "#### Analytics & Reporting",
      "it is the backbone of any successful SEO strategy. Without clear insights into performance, it’s impossible to know what’s working and what needs the improvement.",
      "At AS Kreativ, we provide transparent, actionable reporting so you can track your SEO progress with confidence. We will keep your website on the path to sustained growth and success.",
      "AS Kreativ stands out by offering personalized search engine optimization strategies that align with your business goals.",
      "We don’t believe in one-size-fits-all - every SEO plan is customized for the target audience. This is better for engagement, more visibility, and higher Google rankings.",
      "Our team follows only white-hat, Google-approved methods to build lasting online credibility With a strong foundation, your website becomes search-engine friendly and user-focused.",
      "You’ll receive regular updates on rankings, traffic growth, and conversions. We help you understand where you stand and where you're heading.",
      "At AS Kreativ, we treat every client as a partner in success. Our responsive support, strategic thinking, and performance-driven mindset set us apart. We’re not just doing SEO - we’re building your digital future.",
      "## Ready to Rank #1 on Google? Let AS Kreativ Lead the Way",
      "Want to be the top on Google? AS Kreativ is here to help you craft powerful search engine optimization that boosts your visibility and organic traffic. Our team of experts uses tried-and-true methods to get your site ranking high in search results and keep it there.",
      "AS Kreativ positions your business as a leader in a competitive online environment. We handle everything from finding the right keywords to the nitty-gritty technical SEO details; every step aligns with your business goals. It’s not just about getting a high rank - it’s about ranking for a reason.",
      "## Conclusion",
      "Search engine optimization is more than just a buzzword; it’s your ticket to real digital growth. When you’re ready to stand out, build trust, and become the preferred choice for your audience, AS Kreativ is the partner you need to make it happen. Let us help you turn your website into a top-performing asset. Contact us, we are just a message away."
    ],
  },
  "ai-digital-marketing-services": {
    tag: "AI & Marketing", 
    title: "AI in Digital Marketing Services: How AS Kreativ Helps Businesses Grow",
    date: "June 2024", 
    readTime: "10 min read",
    img: blogAi,
    seo: {
      title: "AI in Digital Marketing: How AS Kreativ Helps Businesses Grow",
      description: "AS Kreativ AI-powered digital marketing services transform marketing data into clear decisions, automated execution, and sustainable business growth."
    },
    content: [
      "Digital marketing can feel like a lot these days. There are ads everywhere, dashboards that never stop updating, and a constant flow of tools. Because of all this, many companies struggle to grow consistently.",
      "At AS Kreativ Global Solutions, we help companies that are doing all the usual things in digital marketing but still find it tough to see real results. Marketing teams often feel overwhelmed, constantly putting out fires. They have data but struggle to use it to make good choices. They also get leads, but some are great, while others aren't worth the time, and following up takes too long.",
      "That's where AI digital marketing can be helpful; it can bridge the gap between being busy and making a real difference.",
      "It's not about kicking marketers to the curb. Instead, it’s about building a system that adds smarts, structure, and consistency to boost your expansion.",
      "## Why Regular Digital Marketing Isn't Always Enough",
      "Typical digital marketing relies on doing things by hand, data that's all over the place, and guesses. This might be fine for small shops, but it's not as useful as you get bigger, gain more customers, and grow your reach.",
      "As companies expand, they have more ways for buyers to from websites and ads to emails, social media, and sales chats. Trying to keep up with everything on your own means slower response times, a lack of consistency, and maybe missing out.",
      "AI digital marketing solves this by turning marketing from a manual job to smart planning. Instead of reacting to what's happening, AI helps companies see what's coming, decide what matters, and stay consistent as they expand.",
      "At AS Kreativ Global Solutions, we think AI is more than just something to add; it's a chance to change how marketing is done.",
      "## How AI Digital Marketing Works at AS Kreativ",
      "AI digital marketing at AS Kreativ is about making choices based on real data, not guesses.",
      "This means using AI to get what buyers do, what they want, when they want it, and the patterns they follow. Instead of treating every lead or chat the same, AI can sort out what's most important and when you need to act.",
      "Then, automation makes sure those things happen fast. Follow-ups happen on time, ads change by themselves, and important info goes right to your sales and customer systems.",
      "This helps tie your marketing efforts together.",
      "## From Unknown Numbers to Important Ones",
      "When companies start using AI digital marketing services, they often change what they focus on. Numbers like clicks, views, and website visits become less important.",
      "At AS Kreativ, we help companies track what shows real customer interest and value. AI looks at things like actions, how involved customers are, and how likely they are to buy. This lets teams focus on quality instead of just chasing clicks.",
      "That makes it easier to decide where to put cash, create better ads, and work better with sales. Marketing goes from being about attention to being about getting bigger.",
      "## Personalize as You Grow, Without Extra Trouble",
      "These days, it's key to make things personal. Buyers expect you to get their needs, and they'll ignore ads that are too broad.",
      "AI helps you make things personal by watching how people interact with you. You can change your ads, timing, and offers based on behavior instead of doing the same thing for everyone.",
      "At AS Kreativ, we set up personalization as a core part of the system. AI gives you the info to make things better, and automation keeps things consistent across different contact points.",
      "This makes people pay attention to what you're saying and reduces the work for your marketing teams.",
      "## Automation: Making Sure Things Get Done",
      "Doing marketing tasks by hand makes it hard to keep up with what buyers expect. Slow follow-ups, bad lead handling, and relying too much on people can cause problems and wasted potential.",
      "Automation solves these problems.",
      "By mixing AI insights with automated actions, AS Kreativ makes sure marketing actions happen at the right instant, every time. Leads go to the right people, ads are changed as needed, and results go right to those who make choices.",
      "Automation doesn't replace smart thinking, but it makes sure you can act well as you expand.",
      "## Simple and Clear AI Marketing",
      "Risks can pop up if AI isn't handled right. Being confused about how choices are made, not knowing where actions come from, and not watching things closely can hurt trust inside and outside the company.",
      "That's why AS Kreativ builds AI digital marketing systems that are clear and simple to handle. The reasons behind choices are clear, results are easy to track, and tasks are well-defined.",
      "This makes sure AI-driven marketing lines up with your brand's values, legal rules, and business plans. This is super important in industries where rules are tight or where brand image is important.",
      "## The Gains of AI Digital Marketing With AS Kreativ",
      "When AI digital marketing is used as a system, companies can expect real gains:",
      "Better leads based on what buyers need and what they do",
      "Faster response times across marketing and sales",
      "Better use of marketing money",
      "Consistent work without more manual labor",
      "Better teamwork between marketing, sales, and money teams",
      "Growth that can be expanded without a big jump in costs",
      "These gains get better over time as AI learns and actions become more focused.",
      "## AI Digital Marketing: A Way to Grow for the Long Haul",
      "AI digital marketing doesn't just make ads better; it changes how you run your company.",
      "By adding smart decision-making and automation to your marketing, you can change fast, test things well, and react to market changes.",
      "At AS Kreativ, we see AI digital marketing as a step toward a smarter way of running businesses. Marketing gets reliable, measurable, and lasting. It helps drive expansion.",
      "## How AS Kreativ Helps Companies Use AI Digital Marketing",
      "AS Kreativ starts by getting your current marketing decision-making and finding pain points. We focus on putting everything together, being smart, and acting. This makes sure AI fits into how you work now.",
      "Our solutions are made to expand with your business and are backed by ongoing checks and updates. This makes sure marketing keeps making better results.",
      "Our goal is to help companies build marketing that thinks, acts, and expands smartly.",
      "## Final Thoughts",
      "In tough markets, expansion depends on planning and doing.",
      "AI digital marketing Services companies give a chance to go from reacting to planning and steady expansion.",
      "At AS Kreativ, we help companies make this change carefully by adding AI, automation, and handling. This turns marketing into a tool for expansion."
    ],
  },
};

const relatedPosts = [
  { title: "AS Kreativ Helps You Rank Number One on Google with SEO Services", slug: "search-engine-optimization", tag: "SEO" },
  { title: "AI in Digital Marketing: How AS Kreativ Helps Businesses Grow", slug: "ai-digital-marketing-services", tag: "AI & Marketing" },
];

function renderContent(line: string, i: number) {
  if (line.startsWith("#### ")) return <h4 key={i} style={{ fontSize: "20px", fontWeight: 800, color: "var(--fg)", marginTop: "32px", marginBottom: "16px" }}>{line.replace("#### ", "")}</h4>;
  if (line.startsWith("### ")) return <h3 key={i} style={{ fontSize: "24px", fontWeight: 850, color: "var(--fg)", marginTop: "40px", marginBottom: "16px" }}>{line.replace("### ", "")}</h3>;
  if (line.startsWith("## ")) return <h2 key={i} style={{ fontSize: "28px", fontWeight: 850, color: "var(--fg)", marginTop: "48px", marginBottom: "20px", letterSpacing: "-0.02em" }}>{line.replace("## ", "")}</h2>;
  if (line.startsWith("**") && line.includes("**:")) {
    const [bold, ...rest] = line.split("**:");
    return <p key={i} style={{ fontSize: "17px", color: "var(--fg-light)", lineHeight: "1.8", marginBottom: "20px" }}><strong style={{ color: "var(--fg)", fontWeight: 700 }}>{bold.replace("**", "")}:</strong>{rest.join(": ")}</p>;
  }
  return <p key={i} style={{ fontSize: "17px", color: "var(--fg-light)", lineHeight: "1.8", marginBottom: "24px" }}>{line}</p>;
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

  useSEO(post.seo);

  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <HeroSection
        backgroundType="image"
        backgroundSrc={post.img}
        ctaText="Share Your Vision"
        ctaOnClick={openModal}
      />

      <section className="section" style={{ padding: "80px 0" }}>
        <div className="container" style={{ maxWidth: "1200px" }}>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-10 lg:gap-20 items-start">
            {/* Article Content */}
            <article>
              <Link href="/blog" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "var(--fg-light)", fontSize: "14px", fontWeight: 600, marginBottom: "40px" }} className="hover:text-[var(--orange)]">
                <ArrowLeft size={16} /> Back to Insights
              </Link>
              
              <div style={{ marginBottom: "60px" }}>
                {post.content.map((line, i) => renderContent(line, i))}
              </div>

              {/* Author/CTA */}
              <FadeUp>
                <div style={{ padding: "48px", borderRadius: "32px", background: "var(--card-bg-glass)", border: "1px solid var(--card-border)", textAlign: "center" }}>
                  <h3 style={{ fontSize: "24px", fontWeight: 900, marginBottom: "16px" }}>Ready to Fuel Your Growth?</h3>
                  <p style={{ color: "var(--fg-light)", fontSize: "17px", marginBottom: "32px", maxWidth: "600px", margin: "0 auto 32px" }}>The insights in this article are just the beginning. Let's build your custom growth engine today.</p>
                  <button onClick={openModal} className="btn-primary" style={{ padding: "18px 40px" }}>
                    Book a Growth Consultation <ArrowRight size={20} />
                  </button>
                </div>
              </FadeUp>
            </article>

            {/* Sidebar */}
            <aside style={{ position: "sticky", top: "100px" }}>
              <div className="card glass-card" style={{ marginBottom: "32px", padding: "32px" }}>
                <h3 style={{ fontWeight: 800, fontSize: "18px", marginBottom: "24px", color: "var(--fg)" }}>Related Insights</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  {relatedPosts.filter((r) => r.slug !== slug).map((r) => (
                    <Link key={r.slug} href={`/blog/${r.slug}`} style={{ display: "block" }}>
                      <div style={{ transition: "all 0.3s" }} className="hover:translate-x-1">
                        <span style={{ fontSize: "11px", fontWeight: 800, color: "var(--orange)", textTransform: "uppercase", display: "block", marginBottom: "8px" }}>{r.tag}</span>
                        <h4 style={{ fontSize: "15px", fontWeight: 700, lineHeight: "1.4", margin: 0 }}>{r.title}</h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div style={{ padding: "40px", borderRadius: "32px", background: "var(--orange)", textAlign: "center" }}>
                <div style={{ width: "60px", height: "60px", background: "rgba(255,255,255,0.2)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
                  <Tag size={28} color="#fff" />
                </div>
                <h3 style={{ color: "#fff", fontWeight: 900, fontSize: "20px", marginBottom: "12px" }}>Custom Strategy</h3>
                <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "14px", lineHeight: "1.6", marginBottom: "24px" }}>Get a personalized marketing plan for your business goals.</p>
                <button onClick={openModal} style={{ width: "100%", background: "#fff", color: "var(--orange)", padding: "14px", borderRadius: "12px", border: "none", fontWeight: 800, cursor: "pointer" }}>
                  Get Started Free
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
