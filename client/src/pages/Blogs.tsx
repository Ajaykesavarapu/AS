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
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
              <h2 className="text-4xl font-bold text-white mb-4">Blogs Coming Soon</h2>
              <p className="text-gray-400 text-lg max-w-md">
                We're crafting insightful articles on digital marketing, web development, design trends, and more. Stay tuned!
              </p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
