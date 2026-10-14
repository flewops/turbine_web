import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SEO from "../components/SEO";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";
import DocsContent from "../components/DocsContent";
import { useDocs } from "../hooks/useDocs";

/** Documentation is loaded from /public/docs.md — edit that file to update this page. */
export default function ResourcesPage() {
  const { docs, loading, error, reload } = useDocs("/docs.md");
  const location = useLocation();
  const [activeId, setActiveId] = useState<string>("");

  const sections = useMemo(() => docs?.sections ?? [], [docs]);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      requestAnimationFrame(() => {
        setActiveId(id);
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    } else if (sections[0]) {
      const firstId = sections[0].id;
      requestAnimationFrame(() => setActiveId(firstId));
    }
  }, [location.hash, sections]);

  // Track active section while scrolling — prefer the section nearest the top of the viewport
  useEffect(() => {
    if (!sections.length) return;

    const onScroll = () => {
      const headerOffset = 96; // navbar + breathing room
      let current = sections[0]?.id ?? "";

      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top - headerOffset <= 0) {
          current = s.id;
        } else {
          break;
        }
      }
      setActiveId((prev) => (prev === current ? prev : current));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [sections]);

  // Keep active TOC item visible inside the sidebar scroll area
  useEffect(() => {
    if (!activeId) return;
    const link = document.querySelector<HTMLElement>(`[data-toc-id="${activeId}"]`);
    link?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }, [activeId]);

  const toc = useMemo(
    () =>
      sections.map((s, i) => ({
        id: s.id,
        title: s.title,
        index: String(i + 1).padStart(2, "0"),
      })),
    [sections]
  );

  const scrollToSection = (id: string) => {
    setActiveId(id);
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <>
      <SEO
        title={docs?.title || "Resources & Documentation"}
        description={
          docs?.description ||
          "Turbine documentation — getting started, platform architecture, commercial model, and industry guides."
        }
        path="/resources"
        keywords="Turbine documentation, ERP documentation, business operating system guide, Turbine resources"
      />

      <section className="border-b-8 border-primary bg-primary px-4 py-16 text-secondary sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1600px]">
          <SectionHeading
            eyebrow="Resources"
            title={docs?.title || "Documentation"}
            description={
              docs?.description ||
              "Clear reference material for demos, onboarding, and client conversations."
            }
            light
            large
          />
          <p className="mt-6 max-w-2xl text-sm text-secondary/75">
            Content is generated from{" "}
            <code className="rounded bg-secondary/10 px-1.5 py-0.5 text-secondary/80">
              public/docs.md
            </code>
            . Update the markdown file to refresh this page — no code changes required.
          </p>
        </div>
      </section>

      {loading && (
        <div className="mx-auto max-w-[1600px] px-4 py-24 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary/80">
            Loading documentation…
          </p>
        </div>
      )}

      {error && (
        <div className="mx-auto max-w-[1600px] px-4 py-24 text-center sm:px-6 lg:px-8">
          <p className="font-display text-2xl font-bold">Could not load docs</p>
          <p className="mt-2 text-primary/80">{error}</p>
          <p className="mt-4 text-sm text-primary/75">
            Ensure <code className="bg-primary/5 px-1">public/docs.md</code> exists.
          </p>
          <button
            type="button"
            onClick={reload}
            className="mt-6 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-secondary"
          >
            Try again
          </button>
        </div>
      )}

      {docs && !loading && !error && (
        <div className="mx-auto max-w-[1600px] lg:grid lg:grid-cols-[280px_minmax(0,1fr)]">
          {/*
            Desktop sidebar: sticky to viewport under the fixed header for the full
            height of the docs column, so section links stay available on section 4/5+.
          */}
          <aside className="hidden lg:block">
            <div className="sticky top-16 flex h-[calc(100dvh-4rem)] flex-col border-r-2 border-primary bg-secondary">
              <div className="shrink-0 border-b-2 border-primary/10 px-5 py-5">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary/80">
                  On this page
                </p>
              </div>

              <nav className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-3 py-4">
                <div className="flex flex-col gap-1">
                  {toc.map((item) => {
                    const active = activeId === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        data-toc-id={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`flex w-full gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition ${
                          active
                            ? "bg-primary font-semibold text-secondary"
                            : "text-primary/80 hover:bg-primary/5 hover:text-primary"
                        }`}
                      >
                        <span
                          className={`shrink-0 tabular-nums ${
                            active ? "text-secondary/75" : "text-primary/75"
                          }`}
                        >
                          {item.index}
                        </span>
                        <span className="leading-snug">{item.title}</span>
                      </button>
                    );
                  })}
                </div>
              </nav>

              <div className="shrink-0 border-t-2 border-primary/10 px-5 py-5">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary/80">
                  Quick links
                </p>
                <div className="mt-3 flex flex-col gap-2 text-sm">
                  <Link to="/apps" className="text-primary/80 hover:text-primary">
                    All apps
                  </Link>
                  <Link to="/pricing" className="text-primary/80 hover:text-primary">
                    Pricing
                  </Link>
                  <Link to="/contact" className="text-primary/80 hover:text-primary">
                    Book a demo
                  </Link>
                </div>
              </div>
            </div>
          </aside>

          {/* Mobile: sticky jump bar so sections stay reachable while scrolling */}
          <div className="sticky top-14 z-30 border-b-2 border-primary bg-secondary/95 px-4 py-3 backdrop-blur-md sm:top-16 lg:hidden sm:px-6">
            <label
              htmlFor="resources-jump"
              className="text-xs font-bold uppercase tracking-[0.14em] text-primary/80"
            >
              On this page
            </label>
            <select
              id="resources-jump"
              className="mt-2 w-full border-2 border-primary bg-secondary px-3 py-2.5 text-sm outline-none"
              value={activeId}
              onChange={(e) => scrollToSection(e.target.value)}
            >
              {toc.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.index} — {item.title}
                </option>
              ))}
            </select>
          </div>

          {/* Content */}
          <div className="min-w-0">
            {docs.sections.map((section, sIdx) => {
              const inverted = sIdx % 2 === 1;
              return (
                <section
                  key={section.id}
                  id={section.id}
                  className={`scroll-mt-28 border-b-2 border-primary px-4 py-14 sm:scroll-mt-32 sm:px-6 lg:scroll-mt-24 lg:px-10 ${
                    inverted ? "bg-primary text-secondary" : ""
                  }`}
                >
                  <div className="mb-8">
                    <p
                      className={`text-xs font-bold uppercase tracking-[0.14em] ${
                        inverted ? "text-secondary/80" : "text-primary/80"
                      }`}
                    >
                      Section {String(sIdx + 1).padStart(2, "0")}
                    </p>
                    <h2
                      className={`mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl ${
                        inverted ? "text-secondary" : "text-primary"
                      }`}
                    >
                      {section.title}
                    </h2>
                  </div>

                  {section.intro.length > 0 && (
                    <div className="mb-10">
                      <DocsContent blocks={section.intro} inverted={inverted} />
                    </div>
                  )}

                  <div
                    className={`space-y-0 border-2 ${
                      inverted ? "border-secondary/30" : "border-primary"
                    }`}
                  >
                    {section.articles.map((article, aIdx) => (
                      <article
                        key={article.id}
                        id={article.id}
                        className={`scroll-mt-36 p-6 sm:p-10 lg:scroll-mt-28 ${
                          aIdx > 0
                            ? inverted
                              ? "border-t-2 border-secondary/30"
                              : "border-t-2 border-primary"
                            : ""
                        }`}
                      >
                        <div className="flex flex-col gap-6 lg:flex-row lg:gap-12">
                          <div className="lg:w-[30%]">
                            <p
                              className={`text-xs font-bold tabular-nums ${
                                inverted ? "text-secondary/80" : "text-primary/80"
                              }`}
                            >
                              {String(aIdx + 1).padStart(2, "0")}
                            </p>
                            <h3
                              className={`mt-3 font-display text-2xl font-extrabold tracking-tight sm:text-3xl ${
                                inverted ? "text-secondary" : "text-primary"
                              }`}
                            >
                              {article.title}
                            </h3>
                          </div>
                          <div className="flex-1">
                            <DocsContent blocks={article.blocks} inverted={inverted} />
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      )}

      <CTASection />
    </>
  );
}
