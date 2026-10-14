import { useEffect } from "react";
import { company } from "../data/company";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  path?: string;
}

export default function SEO({
  title,
  description = company.seo.description,
  keywords = company.seo.keywords,
  path = "",
}: SEOProps) {
  const fullTitle = title
    ? `${title} | ${company.name}`
    : company.seo.defaultTitle;

  useEffect(() => {
    document.title = fullTitle;

    const setMeta = (name: string, content: string, property = false) => {
      const attr = property ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("keywords", keywords);
    setMeta("og:title", fullTitle, true);
    setMeta("og:description", description, true);
    setMeta("og:type", "website", true);
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", description);

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `${company.website}${path}`;
  }, [fullTitle, description, keywords, path]);

  return null;
}
