import { useMemo } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import SectionHeading from "../components/SectionHeading";
import DocsContent from "../components/DocsContent";
import { parseDocsMarkdown } from "../lib/parseDocsMarkdown";
import { legalPages, type LegalPageId } from "../data/legal";

/** Privacy Policy, Cookie Policy and Terms & Conditions — content lives in data/legal.ts. */
export default function LegalPage({ page }: { page: LegalPageId }) {
  const content = legalPages[page];
  const sections = useMemo(() => parseDocsMarkdown(content.markdown).sections, [content.markdown]);
  const others = (Object.keys(legalPages) as LegalPageId[]).filter((id) => id !== page);

  return (
    <>
      <SEO title={content.title} description={content.description} path={content.path} />

      <section className="border-b-8 border-primary bg-primary px-4 py-14 text-secondary sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1600px]">
          <SectionHeading eyebrow="Legal" title={content.title} description={`Last updated ${content.updated}`} light />
        </div>
      </section>

      <div className="mx-auto grid max-w-[1600px] gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16 lg:px-8 lg:py-16">
        <aside className="hidden lg:sticky lg:top-24 lg:block lg:self-start">
          <p className="font-display text-xs font-bold uppercase tracking-[0.1em] text-primary/70">On this page</p>
          <nav className="mt-3 border-l-2 border-primary">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="block px-4 py-1.5 text-sm font-medium text-primary/75 transition-colors hover:bg-primary hover:text-secondary"
              >
                {s.title}
              </a>
            ))}
          </nav>

          <p className="mt-8 font-display text-xs font-bold uppercase tracking-[0.1em] text-primary/70">Related</p>
          <div className="mt-3 flex flex-col gap-1.5 text-sm font-semibold">
            {others.map((id) => (
              <Link key={id} to={legalPages[id].path} className="text-primary/80 underline-offset-4 hover:text-primary hover:underline">
                {legalPages[id].title}
              </Link>
            ))}
          </div>
        </aside>

        <article className="max-w-3xl">
          {sections.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-24 border-t-2 border-primary/15 py-8 first:border-t-0 first:pt-0">
              <h2 className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl">{s.title}</h2>
              <div className="mt-4">
                <DocsContent blocks={s.intro} />
              </div>
            </section>
          ))}

          {/* Mobile: links to the other policies after the text (the sidebar is desktop-only) */}
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 border-t-2 border-primary pt-6 text-sm font-semibold lg:hidden">
            {others.map((id) => (
              <Link key={id} to={legalPages[id].path} className="underline underline-offset-4">
                {legalPages[id].title}
              </Link>
            ))}
          </div>
        </article>
      </div>
    </>
  );
}
