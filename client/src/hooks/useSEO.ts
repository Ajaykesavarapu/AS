import { useEffect } from "react";

export function useSEO({ title, description }: { title: string; description: string }) {
  useEffect(() => {
    document.title = title;
    
    const setMeta = (query: string, nameOrProp: string, attr: "name" | "property", value: string) => {
      let element = document.querySelector(query);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, nameOrProp);
        document.head.appendChild(element);
      }
      element.setAttribute('content', value);
    };

    setMeta('meta[name="description"]', 'description', 'name', description);
    setMeta('meta[property="og:title"]', 'og:title', 'property', title);
    setMeta('meta[property="og:description"]', 'og:description', 'property', description);
    setMeta('meta[name="twitter:title"]', 'twitter:title', 'name', title);
    setMeta('meta[name="twitter:description"]', 'twitter:description', 'name', description);

    // Dynamic Canonical Link tag
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    const cleanPath = window.location.pathname === "/" ? "" : window.location.pathname.replace(/\/$/, "");
    canonical.setAttribute('href', `${window.location.origin}${cleanPath}`);
  }, [title, description]);
}
