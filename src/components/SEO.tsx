import { useEffect } from "react";
import { company } from "../data/company";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  path?: string;
  image?: string;
  /** Keep the page out of search results (e.g. 404). */
  noIndex?: boolean;
}

const DEFAULT_IMAGE = "/images/dashboard-preview.jpg";

export default function SEO({
  title,
  description = company.seo.description,
  keywords = company.seo.keywords,
  path = "/",
  image = DEFAULT_IMAGE,
  noIndex = false,
}: SEOProps) {
  const fullTitle = title
    ? `${title} | ${company.name}`
    : company.seo.defaultTitle;

  useEffect(() => {
    const url = `${company.website}${path}`;
    const imageUrl = image.startsWith("http") ? image : `${company.website}${image}`;

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
    setMeta("robots", noIndex ? "noindex, follow" : "index, follow, max-image-preview:large");
    setMeta("og:title", fullTitle, true);
    setMeta("og:description", description, true);
    setMeta("og:url", url, true);
    setMeta("og:image", imageUrl, true);
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", description);
    setMeta("twitter:image", imageUrl);

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;
  }, [fullTitle, description, keywords, path, image, noIndex]);

  return null;
}
