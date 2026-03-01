import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Murali Krishna Raju",
    role: "Digital Marketing Specialist",
    image: "/images/team-murali.jpg",
    bio: "Murali Krishna Raju is a Digital Marketing expert with over 4 years of experience across DevOps, software testing, and digital marketing. He combines technical depth with smart SEO strategies to drive growth. He specializes in keyword research, performance tracking, and is also an AI comic artist, blending creativity with technology."
  },
  {
    name: "Komaravelli Anudeep",
    role: "Graphic Designer",
    image: "/images/team-anudeep.jpg",
    bio: "Komaravelli Anudeep is a creative Graphic Designer and Fine Arts student with 5 years of experience. He specializes in branding, social media creatives, and digital advertisements. With a strong eye for detail, he delivers designs that effectively communicate brand messages and support business identity."
  },
  {
    name: "Kesavarapu Ajay",
    role: "AI/ML Engineer | Website Developer",
    image: "/images/team-ajay.jpg",
    bio: "Kesavarapu Ajay is a forward-thinking Website Developer and AI/ML Engineer specializing in intelligent automation systems. He builds scalable web applications and smart automation agents that streamline business operations. His focus is on delivering adaptive, high-impact solutions that drive measurable efficiency."
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <main className="pt-32 pb-24">
        {/* Hero Section */}
        <section className="container px-4 md:px-6 mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-heading text-5xl md:text-8xl font-bold uppercase mb-12 tracking-tighter">
              About <span className="text-primary">As Kreativ</span>
            </h1>
            <div className="relative rounded-3xl overflow-hidden aspect-[21/9] border border-white/10 shadow-2xl">
              <img
                src="/images/about-as-kreativ.jpg"
                alt="Digital Creativity"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-12 left-12 max-w-2xl">
                <p className="text-2xl md:text-3xl text-white font-medium leading-tight">
                  A premier global consultancy dedicated to crafting digital reality.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Brand Core Section (Mission, Vision, Values) */}
        <section className="container px-4 md:px-6 mx-auto mb-32 space-y-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <span className="text-accent font-bold uppercase tracking-widest text-sm">Empowerment</span>
              <h2 className="text-4xl md:text-5xl font-bold font-heading uppercase">Our Mission</h2>
              <p className="text-xl text-white/70 leading-relaxed">
                To craft innovative digital solutions that help brands stand out, connect with their audience, and grow confidently in the digital world.
              </p>
            </div>
            <div className="order-1 lg:order-2 aspect-video bg-white/5 rounded-3xl border border-white/10 overflow-hidden group">
              <img
                src="/images/mission.jpg"
                alt="Mission"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-video bg-white/5 rounded-3xl border border-white/10 overflow-hidden group">
              <img
                src="/images/vision.jpg"
                alt="Vision"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="space-y-6">
              <span className="text-primary font-bold uppercase tracking-widest text-sm">Future</span>
              <h2 className="text-4xl md:text-5xl font-bold font-heading uppercase">Our Vision</h2>
              <p className="text-xl text-white/70 leading-relaxed">
                To be a global leader in digital transformation, recognized for our creativity, integrity, and commitment to client success.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <span className="text-accent font-bold uppercase tracking-widest text-sm">Principles</span>
              <h2 className="text-4xl md:text-5xl font-bold font-heading uppercase">Our Values</h2>
              <p className="text-xl text-white/70 leading-relaxed">
                Integrity, Innovation, Excellence, Collaboration, Customer Focus.
              </p>
            </div>
            <div className="order-1 lg:order-2 aspect-video bg-white/5 rounded-3xl border border-white/10 overflow-hidden group">
              <img
                src="/images/values.png"
                alt="Values"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-white/5 py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-bold font-heading uppercase mb-4">Our Team</h2>
              <div className="w-24 h-1 bg-primary mx-auto" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group bg-card border border-white/10 rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-500"
                >
                  <div className="aspect-[4/5] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{member.name}</h3>
                    <p className="text-sm text-accent font-bold uppercase tracking-widest mb-4">{member.role}</p>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
