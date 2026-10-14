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

        {/* PROBLEMS → FIXES — each card pairs an industry problem with how Turbine solves it */}
        <section className="mx-auto max-w-[1600px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <SectionHeading eyebrow="What Turbine fixes" title="The problems we solve" />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {industry.solutions.map((s) => (
              <div key={s.title} className="flex flex-col border-2 border-primary">
                <div className="p-6 sm:p-8">
                  <p className="font-display text-xs font-bold uppercase tracking-[0.1em] text-primary/60">Problem</p>
                  <p className="mt-2 font-display text-lg font-bold leading-snug text-primary/80 sm:text-xl">{s.problem}</p>
                </div>
                <div className="mt-auto flex gap-4 border-t-2 border-primary bg-primary p-6 text-secondary sm:p-8">
                  <Check className="mt-1 h-5 w-5 shrink-0" />
                  <div>
                    <h3 className="font-display text-xl font-extrabold sm:text-2xl">{s.title}</h3>
                    <p className="mt-1.5 text-base leading-relaxed text-secondary/80">{s.description}</p>
                  </div>
                </div>
              </div>
            ))}
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
