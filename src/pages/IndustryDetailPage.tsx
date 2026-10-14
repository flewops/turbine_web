import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, Check } from "lucide-react";
import SEO from "../components/SEO";
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
      <SEO title={industry.name} description={industry.description} path={`/industries/${industry.id}`} />
      <article>
        <header className="relative min-h-[55vh] overflow-hidden border-b-8 border-primary bg-primary">
          <img src={industry.image} alt={industry.name} className="absolute inset-0 h-full w-full object-cover grayscale opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/40" />
          <div className="relative mx-auto flex min-h-[55vh] max-w-[1600px] flex-col justify-end px-4 pb-14 pt-10 text-secondary sm:px-6 lg:px-8">
            <Link to="/industries" className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-secondary/80 hover:text-secondary">
              <ArrowLeft className="h-4 w-4" /> All industries
            </Link>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-secondary/75">Industry</p>
            <h1 className="mt-2 font-display text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-8xl">{industry.name}</h1>
            <p className="mt-4 text-xl font-semibold text-secondary/80">{industry.tagline}</p>
            <p className="mt-6 max-w-2xl text-lg text-secondary/80">{industry.description}</p>
          </div>
        </header>

        <section className="mx-auto max-w-[1600px] px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-primary/75">Challenges</p>
              <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">What slows teams down</h2>
              <ul className="mt-8 border-2 border-primary">
                {industry.challenges.map((c, i) => (
                  <li key={c} className={`flex gap-4 px-5 py-4 ${i > 0 ? "border-t-2 border-primary" : ""}`}>
                    <span className="text-sm font-bold text-primary/75">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-sm font-medium">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-primary/75">Solutions</p>
              <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">How Turbine helps</h2>
              <div className="mt-8 border-2 border-primary">
                {industry.solutions.map((s, i) => (
                  <div key={s.title} className={`p-5 ${i > 0 ? "border-t-2 border-primary" : ""} ${i % 2 === 0 ? "bg-primary text-secondary" : ""}`}>
                    <div className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0" />
                      <div>
                        <h3 className="font-display text-lg font-extrabold">{s.title}</h3>
                        <p className="mt-1 text-sm opacity-85">{s.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t-8 border-primary">
          <div className="mx-auto max-w-[1600px] px-4 py-14 sm:px-6 lg:px-8">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-primary/75">Stack</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">Recommended apps</h2>
            <div className="mt-8 grid border-2 border-primary sm:grid-cols-2 lg:grid-cols-4">
              {recApps.map((app, i) => app && (
                <Link
                  key={app.id}
                  to={`/apps/${app.id}`}
                  className={`border-primary p-5 transition hover:bg-primary hover:text-secondary ${
                    i % 2 === 1 ? "sm:border-l-2" : ""
                  } ${i % 4 !== 0 ? "lg:border-l-2" : ""} ${i >= 2 ? "border-t-2" : ""} ${i >= 4 ? "lg:border-t-2" : i >= 2 ? "lg:border-t-0" : ""}`}
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
