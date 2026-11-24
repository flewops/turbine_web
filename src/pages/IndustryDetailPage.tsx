import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, Check } from "lucide-react";
import SEO from "../components/SEO";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";
import Icon from "../components/IconMap";
import { getIndustryById } from "../data/industries";
import { getAppById } from "../data/apps";

export default function IndustryDetailPage() {
  const { industryId } = useParams<{ industryId: string }>();
  const industry = industryId ? getIndustryById(industryId) : undefined;
  if (!industry) return <Navigate to="/industries" replace />;

  const recApps = industry.recommendedApps.map((id) => getAppById(id)).filter(Boolean);

  return (
    <>
      <SEO title={industry.name} description={industry.description} path={`/industries/${industry.id}`} image={industry.image} />
      <article>
        <header className="relative min-h-[55vh] overflow-hidden border-b-8 border-primary bg-primary">
          <img src={industry.image} alt={industry.name} className="absolute inset-0 h-full w-full object-cover grayscale opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/40" />
          <div className="relative mx-auto flex min-h-[55vh] max-w-[1600px] flex-col justify-end px-4 pb-14 pt-10 text-secondary sm:px-6 lg:px-8">
            <Link to="/industries" className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-secondary/80 hover:text-secondary">
              <ArrowLeft className="h-4 w-4" /> All industries
            </Link>
            <p className="text-sm font-bold font-display uppercase tracking-[0.1em] text-secondary/75">Industry</p>
            <h1 className="mt-2 font-display text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-8xl">{industry.name}</h1>
            <p className="mt-4 text-xl font-semibold text-secondary/80">{industry.tagline}</p>
            <p className="mt-6 max-w-2xl text-lg text-secondary/80">{industry.description}</p>
          </div>
        </header>

        {/* CHALLENGES → SOLUTIONS — compact two-column comparison: the problem, then how Turbine solves it */}
        <section className="mx-auto max-w-[1600px] px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <SectionHeading eyebrow="Challenges & solutions" title="Common challenges, solved" />

          <div className="mt-8 border-2 border-primary">
            <div className="hidden bg-primary text-secondary md:grid md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
              <p className="px-6 py-3 font-display text-xs font-bold uppercase tracking-[0.1em] text-secondary/80">The challenge</p>
              <p className="border-l-2 border-secondary/20 px-6 py-3 font-display text-xs font-bold uppercase tracking-[0.1em] text-secondary/80">
                How Turbine solves it
              </p>
            </div>

            <ol>
              {industry.solutions.map((s, i) => {
                const apps = s.apps.map((id) => getAppById(id)).filter((app) => app !== undefined);
                return (
                  <li
                    key={s.title}
                    className={`grid border-primary md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] ${i > 0 ? "border-t-2" : "md:border-t-2"}`}
                  >
                    <div className="flex gap-4 px-5 py-5 sm:px-6 md:py-6">
                      <span className="pt-0.5 font-display text-sm font-bold tabular-nums text-primary/40">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="mb-1 font-display text-[11px] font-bold uppercase tracking-[0.1em] text-primary/55 md:hidden">The challenge</p>
                        <p className="font-display text-lg font-semibold leading-snug text-primary/75">{s.problem}</p>
                      </div>
                    </div>

                    <div className="border-t border-primary/15 bg-primary/[0.04] px-5 py-5 sm:px-6 md:border-l-2 md:border-t-0 md:border-primary md:py-6">
                      <p className="mb-1 font-display text-[11px] font-bold uppercase tracking-[0.1em] text-primary/55 md:hidden">How Turbine solves it</p>
                      <h3 className="flex items-center gap-2 font-display text-lg font-extrabold">
                        <Check className="h-4 w-4 shrink-0" aria-hidden="true" />
                        {s.title}
                      </h3>
                      <p className="mt-1 text-[15px] leading-relaxed text-primary/75">{s.description}</p>
                      {apps.length > 0 && (
                        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5">
                          {apps.map((app) => (
                            <Link
                              key={app.id}
                              to={`/apps/${app.id}`}
                              className="inline-flex items-center gap-1.5 text-xs font-bold text-primary/80 underline-offset-4 hover:text-primary hover:underline"
                            >
                              <Icon name={app.icon} className="h-3.5 w-3.5" />
                              {app.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        <section className="border-t-8 border-primary">
          <div className="mx-auto max-w-[1600px] px-4 py-14 sm:px-6 lg:px-8">
            <p className="text-sm font-bold font-display uppercase tracking-[0.1em] text-primary/75">Stack</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">Recommended apps</h2>
            {/* Each card has its own border, overlapped by 2px, so any number of apps tiles cleanly */}
            <div className="mt-8 grid pl-[2px] pt-[2px] sm:grid-cols-2 lg:grid-cols-4">
              {recApps.map((app) => app && (
                <Link
                  key={app.id}
                  to={`/apps/${app.id}`}
                  className="-ml-[2px] -mt-[2px] border-2 border-primary p-5 transition hover:bg-primary hover:text-secondary"
                >
                  <div className="mb-3 inline-flex border-2 border-current p-2.5">
                    <Icon name={app.icon} className="h-4 w-4" />
                  </div>
                  <h3 className="font-display font-extrabold">{app.name}</h3>
                  <p className="mt-1 text-xs opacity-80">{app.tagline}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </article>
      <CTASection />
    </>
  );
}
