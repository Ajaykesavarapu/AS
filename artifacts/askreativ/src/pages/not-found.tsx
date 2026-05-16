import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0A0B1A] flex items-center justify-center pt-20">
      <div className="text-center px-4">
        <p className="text-8xl font-display font-extrabold text-primary/20 mb-4">404</p>
        <h1 className="text-3xl font-display font-bold text-white mb-3">Page Not Found</h1>
        <p className="text-muted-foreground mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-colors"
          data-testid="link-back-home"
        >
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>
    </main>
  );
}
