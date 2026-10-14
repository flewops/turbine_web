import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, Check, ArrowUpRight } from "lucide-react";
import SEO from "../components/SEO";
import CTASection from "../components/CTASection";
import AppWalkthrough from "../components/AppWalkthrough";
import Icon from "../components/IconMap";
import { getAppById, getAppsByCategory, getCategoryById } from "../data/apps";

export default function AppDetailPage() {
  const { appId } = useParams<{ appId: string }>();
  const app = appId ? getAppById(appId) : undefined;
  if (!app) return <Navigate to="/apps" replace />;

  const category = getCategoryById(app.category);
  const related = getAppsByCategory(app.category).filter((a) => a.id !== app.id).slice(0, 3);

  return (
    <>
      <SEO title={app.name} description={app.description} path={`/apps/${app.id}`} />

      <article>
        <header className="border-b-8 border-primary bg-primary px-4 py-14 text-secondary sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1600px]">
            <Link to="/apps" className="inline-flex items-center gap-2 text-sm font-bold text-secondary/80 hover:text-secondary">
              <ArrowLeft className="h-4 w-4" /> All apps
            </Link>
            <div className="mt-10 grid items-end gap-10 lg:grid-cols-[1fr_340px]">
              <div>
                <div className="flex items-center gap-4">
                  <div className="border-2 border-secondary p-4">
                    <Icon name={app.icon} className="h-8 w-8" />
                  </div>
                  {category && (
                    <Link to={`/apps?category=${category.id}`} className="text-sm font-bold uppercase tracking-wide text-secondary/80">
                      {category.name}
                    </Link>
                  )}
                </div>
                <h1 className="mt-8 font-display text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-8xl">
                  {app.name}
                </h1>
                <p className="mt-4 text-xl font-semibold text-secondary/80">{app.tagline}</p>
                <p className="mt-6 max-w-2xl text-lg text-secondary/80">{app.description}</p>
              </div>
              <aside className="border-2 border-secondary/40 p-6">
                <p className="text-xs font-bold uppercase tracking-wide text-secondary/75">At a glance</p>
                <ul className="mt-5 space-y-3">
                  {app.features.slice(0, 4).map((f) => (
                    <li key={f.title} className="flex items-start gap-2.5 text-sm text-secondary/80">
                      <Check className="mt-0.5 h-4 w-4 shrink-0" />
                      {f.title}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="mt-6 flex w-full items-center justify-center gap-2 border-2 border-secondary bg-secondary py-3.5 text-sm font-bold text-primary">
                  Request walkthrough <ArrowUpRight className="h-4 w-4" />
                </Link>
              </aside>
            </div>
          </div>
        </header>

        <section className="mx-auto max-w-[1600px] px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-sm font-bold font-display uppercase tracking-[0.1em] text-primary/75">Capabilities</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">What {app.name} delivers</h2>
          <div className="mt-10 grid border-2 border-primary sm:grid-cols-2">
            {app.features.map((feature, i) => (
              <div
                key={feature.title}
                className={`p-7 ${i % 2 === 1 ? "sm:border-l-2 border-primary" : ""} ${i >= 2 ? "border-t-2 border-primary" : ""}`}
              >
                <span className="text-sm font-bold text-primary/75">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-display text-xl font-extrabold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-primary/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <AppWalkthrough app={app} />

        {related.length > 0 && (
          <section className="border-t-8 border-primary bg-primary text-secondary">
            <div className="mx-auto max-w-[1600px] px-4 py-14 sm:px-6 lg:px-8">
              <p className="text-sm font-bold font-display uppercase tracking-[0.1em] text-secondary/75">Related</p>
              <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">More {category?.name} apps</h2>
              <div className="mt-8 grid border-2 border-secondary/30 sm:grid-cols-3">
                {related.map((r, i) => (
                  <Link
                    key={r.id}
                    to={`/apps/${r.id}`}
                    className={`border-secondary/30 p-6 transition hover:bg-secondary hover:text-primary ${i > 0 ? "border-t-2 sm:border-t-0 sm:border-l-2" : ""}`}
                  >
                    <div className="mb-4 inline-flex border-2 border-current p-2.5">
                      <Icon name={r.icon} className="h-4 w-4" />
                    </div>
                    <h3 className="font-display text-lg font-extrabold">{r.name}</h3>
                    <p className="mt-1 text-sm opacity-80">{r.tagline}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>
      <CTASection />
    </>
  );
}
