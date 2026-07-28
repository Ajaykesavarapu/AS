import { lazy, Suspense } from "react";
import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SocialSidebar from "@/components/layout/SocialSidebar";
import ThemeToggle from "@/components/layout/ThemeToggle";
import ConsultationModal from "@/components/popups/ConsultationModal";
import ExitIntentPopup from "@/components/popups/ExitIntentPopup";
import CookieBanner from "@/components/popups/CookieBanner";

const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const Services = lazy(() => import("@/pages/Services"));
const ServiceDetail = lazy(() => import("@/pages/ServiceDetail"));
const Portfolio = lazy(() => import("@/pages/Portfolio"));
const Blog = lazy(() => import("@/pages/Blog"));
const BlogPost = lazy(() => import("@/pages/BlogPost"));
const Contact = lazy(() => import("@/pages/Contact"));
const FAQ = lazy(() => import("@/pages/FAQ"));
const NotFound = lazy(() => import("@/pages/not-found"));

const queryClient = new QueryClient();

interface ModalContextType {
  openModal: () => void;
}

export const ModalContext = createContext<ModalContextType>({ openModal: () => {} });
export function useModal() {
  return useContext(ModalContext);
}

function ScrollProgress() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const pct = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100;
      setWidth(pct);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <div id="scroll-progress" style={{ width: `${width}%` }} />;
}

function ScrollToTop() {
  const [pathname] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

import Industries from "@/pages/Industries";

import { useState, createContext, useContext, useEffect } from "react";

function AppInner() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ openModal: () => setModalOpen(true) }}>
      <ScrollToTop />
      <ScrollProgress />
      <SocialSidebar />
      <ThemeToggle />
      <Navbar />
      <Suspense fallback={
        <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: "40px", height: "40px", borderRadius: "50%", border: "3px solid var(--orange-glass)", borderTopColor: "var(--orange)", animation: "spin 1s linear infinite" }} />
          <style>{`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      }>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/industries" component={Industries} />
          
          {/* Specific Service Slugs */}
          <Route path="/website-development-services-hyderabad" component={ServiceDetail} />
          <Route path="/seo-services-hyderabad" component={ServiceDetail} />
          <Route path="/ai-automation-services-hyderabad" component={ServiceDetail} />
          <Route path="/social-media-marketing-services-hyderabad" component={ServiceDetail} />
          <Route path="/ppc-services-hyderabad" component={ServiceDetail} />
          <Route path="/digital-content-video-production-services-hyderabad" component={ServiceDetail} />
          <Route path="/graphic-design-services-hyderabad" component={ServiceDetail} />
          <Route path="/mobile-app-development-services-hyderabad" component={ServiceDetail} />
          <Route path="/erp-management-systems-hyderabad" component={ServiceDetail} />
          <Route path="/traditional-marketing-services-hyderabad" component={ServiceDetail} />

          <Route path="/services/:slug" component={ServiceDetail} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/blog" component={Blog} />
          <Route path="/blogs" component={Blog} />
          <Route path="/blog/:slug" component={BlogPost} />
          <Route path="/contact" component={Contact} />
          <Route path="/faq" component={FAQ} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
      <Footer />
      <ConsultationModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <ExitIntentPopup />
      <CookieBanner />
    </ModalContext.Provider>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ThemeProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <AppInner />
          </WouterRouter>
        </ThemeProvider>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
