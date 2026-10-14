import { Link } from "react-router-dom";
import { ArrowDown, ArrowRight, Check } from "lucide-react";
import SEO from "../components/SEO";
import CTASection from "../components/CTASection";
import Icon from "../components/IconMap";
import { industries } from "../data/industries";
import { getAppById } from "../data/apps";

export default function IndustriesPage() {
  return (
    <>
      <SEO
        title="Industries"
        description="See how Turbine adapts to manufacturing, retail, distribution, professional services, and more."
        path="/industries"
      />

      {/* HERO — states the page purpose plainly */}
      <section className="border-b-8 border-primary bg-primary px-4 pb-14 pt-16 text-secondary sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1600px]">
          <p className="inline-flex items-center gap-2 border-2 border-secondary/40 px-3 py-1.5 text-xs font-bold font-display uppercase tracking-[0.1em] text-secondary/80 sm:text-sm">
            <span className="inline-block h-2 w-2 bg-secondary" />
            Industries — {industries.length} sectors
          </p>
          <h1 className="mt-6 max-w-5xl font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl sm:leading-[0.94] lg:text-8xl lg:leading-[0.9]">
            Find your industry.
            <br />
            <span className="text-secondary/80">See how Turbine runs it.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-secondary/85 sm:text-xl md:text-2xl">
            Each sector below shows the challenges we solve and the exact apps
            we recommend. Pick yours and open the full playbook.
          </p>
        </div>
      </section>

      {/* INDEX — jump directly to your sector */}
      <section className="border-b-8 border-primary bg-secondary">
        <div className="mx-auto max-w-[1600px] px-4 py-8 sm:px-6 lg:px-8">
          <p className="flex items-center gap-2 text-xs font-bold font-display uppercase tracking-[0.1em] text-primary/75">
            <ArrowDown className="h-4 w-4" /> Jump to your sector
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {industries.map((ind, i) => (
              <a
                key={ind.id}
                href={`#${ind.id}`}
                className="inline-flex items-center gap-2 border-2 border-primary px-3.5 py-2 text-sm font-bold transition hover:bg-primary hover:text-secondary"
              >
                <span className="tabular-nums opacity-80">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {ind.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ONE ROW PER INDUSTRY — edge-to-edge photo beside the details, sides alternating */}
      <div className="border-b-8 border-primary bg-secondary">
        {industries.map((ind, i) => {
          const imageRight = i % 2 === 1;
          const recApps = ind.recommendedApps
            .map((id) => getAppById(id))
            .filter(Boolean)
            .slice(0, 4);

          return (
            <section
              key={ind.id}
              id={ind.id}
              className={`scroll-mt-20 ${i > 0 ? "border-t-2 border-primary" : ""}`}
            >
              <div className="grid lg:grid-cols-2">
                {/* Photo — edge to edge: full row height and out to the screen edge */}
                <div
                  className={`relative aspect-[4/3] overflow-hidden border-b-2 border-primary lg:aspect-auto lg:min-h-[420px] lg:border-b-0 ${
                    imageRight ? "lg:order-2 lg:border-l-2" : "lg:border-r-2"
                  }`}
                >
                  <img
                    src={ind.image}
                    alt={ind.name}
                    loading={i > 1 ? "lazy" : undefined}
                    className="absolute inset-0 h-full w-full object-cover grayscale"
                  />
                  <span className="absolute left-0 top-0 flex items-center gap-3 bg-primary px-4 py-2.5 font-display text-lg font-extrabold text-secondary">
                    <span className="tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-xs font-bold uppercase tracking-[0.1em] opacity-85">Industry</span>
                  </span>
                </div>

                {/* Details */}
                <div className="flex flex-col justify-center px-4 py-10 sm:px-8 sm:py-12 lg:px-12 xl:px-16">
                  <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
                    {ind.name}
                  </h2>
                  <p className="mt-3 text-lg font-semibold text-primary/80 sm:text-xl">{ind.tagline}</p>
                  <p className="mt-5 max-w-xl text-base leading-relaxed text-primary/75 sm:text-lg">
                    {ind.description}
                  </p>

                  {/* What Turbine solves — quick scan list */}
                  <ul className="mt-8 grid gap-2.5 sm:grid-cols-2">
                    {ind.solutions.slice(0, 4).map((s) => (
                      <li key={s.title} className="flex items-start gap-2.5 text-sm font-semibold text-primary/85">
                        <Check className="mt-0.5 h-4 w-4 shrink-0" />
                        {s.title}
                      </li>
                    ))}
                  </ul>

                  {/* Recommended app chips */}
                  <div className="mt-8">
                    <p className="font-display text-xs font-bold uppercase tracking-[0.1em] text-primary/75">
                      Recommended stack
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {recApps.map(
                        (app) =>
                          app && (
                            <Link
                              key={app.id}
                              to={`/apps/${app.id}`}
                              className="inline-flex items-center gap-2 border-2 border-primary px-3 py-1.5 text-xs font-bold transition hover:bg-primary hover:text-secondary"
                            >
                              <Icon name={app.icon} className="h-3.5 w-3.5" />
                              {app.name}
                            </Link>
                          )
                      )}
                      {ind.recommendedApps.length > 4 && (
                        <span className="inline-flex items-center px-2 py-1.5 text-xs font-bold text-primary/75">
                          +{ind.recommendedApps.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  <Link
                    to={`/industries/${ind.id}`}
                    className="mt-8 inline-flex w-fit items-center gap-2 border-2 border-primary bg-primary px-6 py-3.5 text-sm font-bold text-secondary transition hover:bg-secondary hover:text-primary sm:px-7"
                  >
                    Open the {ind.name} playbook
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <CTASection />
    </>
  );
}
