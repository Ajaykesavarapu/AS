import { useState, createContext, useContext } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import ConsultationModal from "@/components/popups/ConsultationModal";
import CookieBanner from "@/components/popups/CookieBanner";
import ExitIntentPopup from "@/components/popups/ExitIntentPopup";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import ServiceDetail from "@/pages/ServiceDetail";
import Portfolio from "@/pages/Portfolio";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import Contact from "@/pages/Contact";
import FAQ from "@/pages/FAQ";
import Careers from "@/pages/Careers";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

interface ModalContextType {
  openModal: () => void;
}

export const ModalContext = createContext<ModalContextType>({ openModal: () => {} });

export function useModal() {
  return useContext(ModalContext);
}

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ModalContext.Provider value={{ openModal: () => setModalOpen(true) }}>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <CustomCursor />
            <Navbar />
            <Switch>
              <Route path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/services" component={Services} />
              <Route path="/services/:slug" component={ServiceDetail} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/blog" component={Blog} />
              <Route path="/blog/:slug" component={BlogPost} />
              <Route path="/contact" component={Contact} />
              <Route path="/faq" component={FAQ} />
              <Route path="/careers" component={Careers} />
              <Route component={NotFound} />
            </Switch>
            <Footer />
            <ConsultationModal open={modalOpen} onClose={() => setModalOpen(false)} />
            <CookieBanner />
            <ExitIntentPopup />
          </WouterRouter>
        </ModalContext.Provider>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
