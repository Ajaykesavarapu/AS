import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const blogPosts = [
  {
    id: 1,
    title: "The Future of 3D Web Experiences",
    excerpt: "How immersive technology is changing the way we interact with the digital world.",
    date: "Feb 15, 2024"
  },
  {
    id: 2,
    title: "Strategic Digital Marketing for Global Brands",
    excerpt: "Navigating complex global markets with data-driven marketing strategies.",
    date: "Feb 10, 2024"
  }
];

export default function Blogs() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-5xl md:text-7xl font-bold uppercase mb-12">Latest <span className="text-primary">Insights</span></h1>
            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts.map((post) => (
                <div key={post.id} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all group">
                  <span className="text-primary font-bold text-sm uppercase tracking-widest">{post.date}</span>
                  <h2 className="font-heading text-3xl font-bold mt-4 mb-4 group-hover:text-primary transition-colors">{post.title}</h2>
                  <p className="text-white/60 mb-6">{post.excerpt}</p>
                  <button className="text-white font-bold uppercase text-sm tracking-widest border-b border-primary pb-1">Read More</button>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
