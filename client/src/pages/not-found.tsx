import { Link } from "wouter";
import { ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <main style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "80px 24px" }}>
      <div style={{ textAlign: "center", maxWidth: "500px" }}>
        <div style={{ fontSize: "120px", fontWeight: 900, color: "var(--orange)", opacity: 0.15, lineHeight: 1, marginBottom: "0" }}>404</div>
        <h1 style={{ fontSize: "32px", fontWeight: 800, color: "var(--fg)", marginBottom: "16px", marginTop: "-16px" }}>Page Not Found</h1>
        <p style={{ color: "var(--fg-light)", lineHeight: "1.8", marginBottom: "32px" }}>
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/" className="btn-primary">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <Link href="/contact" className="btn-outline">
            Contact Support
          </Link>
        </div>
      </div>
    </main>
  );
}
