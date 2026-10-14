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
          <p className="inline-flex items-center gap-2 border-2 border-secondary/40 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-secondary/80 sm:text-sm">
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
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-primary/75">
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

      {/* ONE BOLD ROW PER INDUSTRY — alternating light/dark for separation */}
      {industries.map((ind, i) => {
        const inverted = i % 2 === 1;
        const recApps = ind.recommendedApps
          .map((id) => getAppById(id))
          .filter(Boolean)
          .slice(0, 4);

        return (
          <section
            key={ind.id}
            id={ind.id}
            className={`scroll-mt-20 border-b-8 border-primary ${
              inverted ? "bg-primary text-secondary" : "bg-secondary text-primary"
            }`}
          >
            <div
              className={`mx-auto grid max-w-[1600px] lg:grid-cols-2 ${
                inverted ? "lg:[direction:rtl]" : ""
              }`}
            >
              {/* Image side */}
              <div
                className={`relative min-h-[280px] border-primary lg:min-h-[520px] [direction:ltr] ${
                  inverted
                    ? "border-b-2 lg:border-b-0 lg:border-l-2 border-secondary/30"
                    : "border-b-2 lg:border-b-0 lg:border-r-2"
                }`}
              >
                <img
                  src={ind.image}
                  alt={ind.name}
                  loading={i > 1 ? "lazy" : undefined}
                  className="absolute inset-0 h-full w-full object-cover grayscale"
                />
                <div
                  className={`absolute left-0 top-0 flex items-center gap-3 px-5 py-3 font-display text-xl font-extrabold ${
                    inverted
                      ? "bg-secondary text-primary"
                      : "bg-primary text-secondary"
                  }`}
                >
                  <span className="tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-bold uppercase tracking-[0.14em] opacity-85">
                    Industry
                  </span>
                </div>
              </div>

              {/* Content side */}
              <div className="flex flex-col justify-center px-4 py-12 [direction:ltr] sm:px-8 lg:px-12 lg:py-16">
                <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  {ind.name}
                </h2>
                <p
                  className={`mt-3 text-lg font-semibold sm:text-xl ${
                    inverted ? "text-secondary/80" : "text-primary/80"
                  }`}
                >
                  {ind.tagline}
                </p>
                <p
                  className={`mt-5 max-w-xl text-base leading-relaxed sm:text-lg ${
                    inverted ? "text-secondary/80" : "text-primary/80"
                  }`}
                >
                  {ind.description}
                </p>

                {/* What Turbine solves — quick scan list */}
                <ul className="mt-8 grid gap-2.5 sm:grid-cols-2">
                  {ind.solutions.slice(0, 4).map((s) => (
                    <li
                      key={s.title}
                      className={`flex items-start gap-2.5 text-sm font-semibold ${
                        inverted ? "text-secondary/85" : "text-primary/85"
                      }`}
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0" />
                      {s.title}
                    </li>
                  ))}
                </ul>

                {/* Recommended app chips */}
                <div className="mt-8">
                  <p
                    className={`text-xs font-bold uppercase tracking-[0.16em] ${
                      inverted ? "text-secondary/75" : "text-primary/75"
                    }`}
                  >
                    Recommended stack
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {recApps.map(
                      (app) =>
                        app && (
                          <Link
                            key={app.id}
                            to={`/apps/${app.id}`}
                            className={`inline-flex items-center gap-2 border-2 px-3 py-1.5 text-xs font-bold transition ${
                              inverted
                                ? "border-secondary/40 hover:bg-secondary hover:text-primary"
                                : "border-primary hover:bg-primary hover:text-secondary"
                            }`}
                          >
                            <Icon name={app.icon} className="h-3.5 w-3.5" />
                            {app.name}
                          </Link>
                        )
                    )}
                    {ind.recommendedApps.length > 4 && (
                      <span
                        className={`inline-flex items-center px-2 py-1.5 text-xs font-bold ${
                          inverted ? "text-secondary/75" : "text-primary/75"
                        }`}
                      >
                        +{ind.recommendedApps.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                <Link
                  to={`/industries/${ind.id}`}
                  className={`mt-10 inline-flex w-fit items-center gap-2 border-2 px-6 py-3.5 text-sm font-bold transition sm:px-7 ${
                    inverted
                      ? "border-secondary bg-secondary text-primary hover:bg-primary hover:text-secondary"
                      : "border-primary bg-primary text-secondary hover:bg-secondary hover:text-primary"
                  }`}
                >
                  Open the {ind.name} playbook
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </section>
        );
      })}

      <CTASection />
    </>
  );
}
