import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

export default function About() {
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
            <h1 className="font-heading text-5xl md:text-7xl font-bold uppercase mb-12">About <span className="text-primary">As Kreativ</span></h1>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-lg text-white/70 leading-relaxed">
                <p>
                  As Kreativ is a premier global consultancy dedicated to crafting digital reality. We specialize in bridging the gap between ambitious vision and technical excellence.
                </p>
                <p>
                  Our mission is to empower businesses worldwide with cutting-edge technology, immersive experiences, and strategic digital solutions that drive real growth.
                </p>
              </div>
              <div className="aspect-video bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center">
                <span className="text-white/20 font-heading text-2xl uppercase italic">Innovation Excellence</span>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
