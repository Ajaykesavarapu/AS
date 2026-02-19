import { Link } from "wouter";
import { AlertTriangle } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex items-center justify-center p-4 text-center">
        <div className="max-w-md">
          <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-8 text-primary">
            <AlertTriangle className="w-10 h-10" />
          </div>
          
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            404 Page Not Found
          </h1>
          <p className="text-white/60 mb-8 leading-relaxed">
            The page you are looking for doesn't exist or has been moved. 
            Let's get you back to crafting digital reality.
          </p>
          
          <Link href="/">
            <a className="inline-block px-8 py-3 bg-primary text-white font-bold uppercase rounded hover:bg-primary/90 transition-colors">
              Return Home
            </a>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
