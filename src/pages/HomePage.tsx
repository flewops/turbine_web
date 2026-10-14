import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import SEO from "../components/SEO";
import BentoCard from "../components/BentoCard";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";
import Icon from "../components/IconMap";
import { company } from "../data/company";
import { categories, apps } from "../data/apps";
import { features, homepageHighlights } from "../data/features";
import { industries } from "../data/industries";

export default function HomePage() {
  const featuredApps = apps.filter((a) =>
    ["crm", "accounting", "inventory", "manufacturing", "project", "point-of-sale", "website", "employees"].includes(a.id)
  );

  const marqueeItems = [
    ...categories.map((c) => c.name),
    "AWS Hosted",
    "One-time Setup",
    "Per-user Monthly",
    "Fully Integrated",
  ];

  return (
    <>
      <SEO path="/" />

      {/* MAXIMALIST HERO */}
      <section className="relative overflow-hidden border-b-8 border-primary bg-secondary">
        <div className="pointer-events-none absolute inset-0 grid-lines" />
        <div className="relative mx-auto max-w-[1600px] px-4 pt-8 sm:px-6 sm:pt-10 lg:px-8 lg:pt-14">
          <div className="inline-block border-2 border-primary bg-primary px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-secondary sm:px-4 sm:py-2 sm:text-sm sm:tracking-[0.14em]">
            Business Operating System
          </div>

          <h1 className="mt-6 max-w-[1200px] font-display text-[clamp(2.25rem,9.5vw,9.5rem)] font-extrabold leading-[0.9] tracking-[-0.03em] sm:mt-8 sm:leading-[0.86] sm:tracking-[-0.04em]">
            "Your Business
            <br />
            deserves an
            <br />
            <span className="type-outline">Operating</span>
            <br />
            System"
          </h1>

          <div className="mt-8 grid gap-6 border-t-2 border-primary pt-6 sm:mt-10 sm:gap-8 sm:pt-8 lg:grid-cols-12">
            <p className="text-base leading-relaxed text-primary/85 sm:text-lg md:text-xl lg:col-span-5">
              {company.description}
            </p>
            <div className="flex w-full flex-col sm:flex-row sm:flex-wrap lg:col-span-7 lg:justify-end">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary bg-primary px-6 py-3.5 text-sm font-bold text-secondary transition hover:bg-secondary hover:text-primary sm:px-8 sm:py-4 sm:text-base"
              >
                Book a demo
                <ArrowUpRight className="h-5 w-5" />
              </Link>
              <Link
                to="/apps"
                className="inline-flex items-center justify-center gap-2 border-2 border-t-0 border-primary bg-secondary px-6 py-3.5 text-sm font-bold text-primary transition hover:bg-primary hover:text-secondary sm:border-l-0 sm:border-t-2 sm:px-8 sm:py-4 sm:text-base"
              >
                Explore apps
              </Link>
            </div>
          </div>

          {/* Dense stats band */}
          <div className="mt-8 grid grid-cols-2 border-2 border-primary sm:mt-12 sm:grid-cols-4">
            {company.stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`px-4 py-5 sm:px-5 sm:py-7 ${i % 2 === 0 ? "bg-primary text-secondary" : "bg-secondary text-primary"} ${
                  i === 1 || i === 3 ? "border-l-2 border-primary" : ""
                } ${i === 2 || i === 3 ? "border-t-2 border-primary sm:border-t-0" : ""} ${
                  i === 2 ? "sm:border-l-2" : ""
                }`}
              >
                <div className="font-display text-2xl font-extrabold sm:text-3xl md:text-4xl">{stat.value}</div>
                <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.1em] opacity-80 sm:text-xs sm:tracking-[0.12em]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 overflow-hidden border-2 border-primary sm:mt-10">
            <img
              src="/images/dashboard-preview.jpg"
              alt="Turbine dashboard"
              className="aspect-[16/10] w-full object-cover grayscale sm:aspect-[21/9]"
            />
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="overflow-hidden border-b-8 border-primary bg-primary py-5 text-secondary">
        <div className="animate-marquee flex w-max gap-0 whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={`${item}-${i}`} className="flex items-center">
              <span className="px-8 text-sm font-bold uppercase tracking-[0.18em]">{item}</span>
              <span className="text-secondary/80">/</span>
            </span>
          ))}
        </div>
      </div>

      {/* ASYMMETRIC BENTO */}
      <section className="border-b-8 border-primary">
        <div className="mx-auto max-w-[1600px] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <SectionHeading
            eyebrow="Platform"
            title="Not another tool. A system."
            description="Turbine replaces scattered software with a modular operating system. Start lean. Expand without friction."
            large
          />

          <div className="mt-12 grid border-2 border-primary md:grid-cols-6">
            <Link
              to={homepageHighlights[0].href}
              className="group relative col-span-full border-b-2 border-primary bg-primary p-8 text-secondary md:col-span-4 md:row-span-2 md:border-b-0 md:border-r-2 md:p-10"
            >
              <div className="flex items-start justify-between">
                <span className="text-sm font-bold opacity-85">01 — Core</span>
                <ArrowUpRight className="h-7 w-7 opacity-85 transition group-hover:opacity-100" />
              </div>
              <h3 className="mt-16 font-display text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                {homepageHighlights[0].title}
              </h3>
              <p className="mt-4 max-w-md text-lg text-secondary/80">
                {homepageHighlights[0].description}
              </p>
              <div className="mt-8 border-2 border-secondary/30">
                <img
                  src="/images/dashboard-preview.jpg"
                  alt=""
                  className="aspect-[16/8] w-full object-cover grayscale opacity-80 transition group-hover:opacity-100"
                />
              </div>
            </Link>

            {homepageHighlights.slice(1).map((item, i) => (
              <div
                key={item.title}
                className={`col-span-full md:col-span-2 ${i < 2 ? "border-b-2 border-primary" : ""}`}
              >
                <BentoCard
                  title={item.title}
                  description={item.description}
                  href={item.href}
                  variant={i === 1 ? "ink" : "paper"}
                  index={`0${i + 2}`}
                  className="min-h-[220px] border-0"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY — editorial list on primary */}
      <section className="border-b-8 border-primary bg-primary text-secondary">
        <div className="mx-auto grid max-w-[1600px] gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start xl:top-32">
            <SectionHeading
              eyebrow="Why Turbine"
              title={features.headline}
              description={features.subheadline}
              light
              large
            />
          </div>
          <div className="divide-y-2 divide-secondary/20 border-t-2 border-secondary/20 lg:col-span-7">
            {features.pillars.map((pillar, i) => (
              <div key={pillar.title} className="flex gap-6 py-8">
                <span className="text-sm font-bold tabular-nums text-secondary/80">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <div className="mb-3 inline-flex border border-secondary/30 p-2">
                    <Icon name={pillar.icon} className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-2xl font-extrabold">{pillar.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-secondary/80">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPS */}
      <section className="border-b-8 border-primary">
        <div className="mx-auto max-w-[1600px] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Apps"
              title="80+ apps. One OS."
              description="Finance, sales, supply chain, HR, marketing, services — installed in one click, integrated by default."
              large
            />
            <Link
              to="/apps"
              className="inline-flex shrink-0 items-center gap-2 border-2 border-primary bg-primary px-5 py-3 text-sm font-bold text-secondary"
            >
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="flex gap-0 overflow-x-auto hide-scroll border-y-2 border-primary pb-0">
          {featuredApps.map((app, i) => (
            <Link
              key={app.id}
              to={`/apps/${app.id}`}
              className={`group w-[min(78vw,280px)] shrink-0 border-r-2 border-primary bg-secondary p-6 transition hover:bg-primary hover:text-secondary sm:w-[300px] sm:p-7 md:w-[320px] ${
                i === 0 ? "border-l-2" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="border-2 border-current p-3">
                  <Icon name={app.icon} className="h-5 w-5" />
                </div>
                <span className="text-sm font-bold opacity-80">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-12 font-display text-3xl font-extrabold tracking-tight">
                {app.name}
              </h3>
              <p className="mt-2 text-sm opacity-80">{app.tagline}</p>
            </Link>
          ))}
        </div>

        <div className="mx-auto max-w-[1600px] px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid border-2 border-primary sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((cat, i) => (
              <div
                key={cat.id}
                className={`${i % 2 === 1 ? "sm:border-l-2 sm:border-primary" : ""} ${
                  i >= 2 ? "border-t-2 border-primary lg:border-t-0" : ""
                } ${i >= 1 ? "lg:border-l-2 lg:border-primary" : ""} ${i >= 4 ? "lg:border-t-2" : ""}`}
              >
                <BentoCard
                  title={cat.name}
                  description={cat.description}
                  href={`/apps?category=${cat.id}`}
                  variant={i % 2 === 0 ? "ink" : "paper"}
                  index={String(i + 1).padStart(2, "0")}
                  className="min-h-[240px] border-0"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOSTING SPLIT */}
      <section className="border-b-8 border-primary">
        <div className="grid lg:grid-cols-2">
          <div className="border-b-2 border-primary bg-primary px-4 py-16 text-secondary sm:px-10 lg:border-b-0 lg:border-r-2 lg:px-16 lg:py-24">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-secondary/75">Hosting</p>
            <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
              {company.hosting.title}
            </h2>
            <p className="mt-5 max-w-md text-lg text-secondary/80">{company.hosting.description}</p>
            <div className="mt-12 space-y-0 divide-y-2 divide-secondary/20 border-t-2 border-secondary/20">
              {company.hosting.benefits.map((b, i) => (
                <div key={b.title} className="py-6">
                  <span className="text-xs font-bold text-secondary/80">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-1 font-display text-xl font-extrabold">{b.title}</h3>
                  <p className="mt-1 text-sm text-secondary/80">{b.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-[420px] bg-primary">
            <img
              src="/images/apps-overview.jpg"
              alt="Integrated apps"
              className="absolute inset-0 h-full w-full object-cover grayscale"
            />
            <div className="absolute inset-0 bg-primary/50" />
            <div className="absolute bottom-0 left-0 right-0 border-t-2 border-secondary/30 bg-primary p-8 text-secondary">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-secondary/75">
                Infrastructure
              </p>
              <p className="mt-2 font-display text-3xl font-extrabold">
                Packaged. Hosted. Owned end to end.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="border-b-8 border-primary">
        <div className="mx-auto max-w-[1600px] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Industries"
              title="Configured for how you work"
              description="From manufacturing floors to retail counters — Turbine adapts to your industry patterns."
              large
            />
            <Link
              to="/industries"
              className="inline-flex shrink-0 items-center gap-2 border-2 border-primary px-5 py-3 text-sm font-bold"
            >
              All industries <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid border-2 border-primary md:grid-cols-3">
            {industries.slice(0, 6).map((ind, i) => (
              <Link
                key={ind.id}
                to={`/industries/${ind.id}`}
                className={`group relative overflow-hidden border-primary ${
                  i === 0 || i === 5 ? "md:col-span-2" : ""
                } ${i > 0 ? "border-t-2 md:border-t-0" : ""} ${
                  i === 1 || i === 2 || i === 4 ? "md:border-l-2" : ""
                } ${i >= 3 ? "md:border-t-2" : ""}`}
              >
                <div className="aspect-[16/10] overflow-hidden bg-primary">
                  <img
                    src={ind.image}
                    alt={ind.name}
                    className="h-full w-full object-cover grayscale transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-secondary sm:p-8">
                  <p className="text-xs font-bold opacity-85">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-1 font-display text-2xl font-extrabold sm:text-3xl">{ind.name}</h3>
                  <p className="mt-1 text-sm text-secondary/85">{ind.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING TEASER */}
      <section className="border-b-8 border-primary">
        <div className="mx-auto max-w-[1600px] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid border-2 border-primary lg:grid-cols-2">
            <div className="border-b-2 border-primary p-8 sm:p-12 lg:border-b-0 lg:border-r-2 lg:p-16">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-primary/75">Pricing</p>
              <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
                One-time setup.
                <br />
                Clear monthly.
              </h2>
              <p className="mt-5 max-w-md text-lg text-primary/80">
                No labyrinth of SKUs. Implement once, then scale users as your team grows — hosting and support included.
              </p>
              <Link
                to="/pricing"
                className="mt-8 inline-flex items-center gap-2 border-2 border-primary bg-primary px-5 py-3 text-sm font-bold text-secondary"
              >
                See pricing details <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2">
              <div className="flex flex-col justify-between border-b-2 border-primary p-8 sm:border-b-0 sm:border-r-2 sm:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-primary/80">
                  Implementation
                </p>
                <div className="mt-16">
                  <p className="font-display text-4xl font-extrabold">One-time</p>
                  <p className="mt-2 text-sm text-primary/75">Scoped to your apps and processes</p>
                </div>
              </div>
              <div className="flex flex-col justify-between bg-primary p-8 text-secondary sm:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-secondary/75">
                  Subscription
                </p>
                <div className="mt-16">
                  <p className="font-display text-4xl font-extrabold">Per user / mo</p>
                  <p className="mt-2 text-sm text-secondary/75">Hosting, updates & support included</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
