import SEO from "../components/SEO";
import SectionHeading from "../components/SectionHeading";
import BentoCard from "../components/BentoCard";
import CTASection from "../components/CTASection";
import { company } from "../data/company";

export default function AboutPage() {
  return (
    <>
      <SEO title="About" description="Turbine is a business operating system — fully managed, AWS-hosted suite of integrated apps." path="/about" />
      <section className="border-b-8 border-primary bg-primary px-4 py-16 text-secondary sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1600px]">
          <SectionHeading eyebrow="About Turbine" title={company.tagline} description={company.description} light large />
        </div>
      </section>
      <section className="border-b-8 border-primary">
        <img src="/images/about-team.jpg" alt="Turbine team" className="aspect-[21/8] w-full object-cover grayscale" />
      </section>
      <section className="mx-auto max-w-[1600px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-primary/75">Origin</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">Why we built Turbine</h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-primary/80">
              <p>Most companies don&apos;t fail because they lack ambition — they struggle because their tools don&apos;t talk to each other.</p>
              <p>Turbine is our answer: a business operating system that packages proven applications into one cohesive platform on AWS — one-time implementation plus per-user monthly access.</p>
              <p>Your team gets the right app for every job, with perfect integration between them.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 border-2 border-primary">
            {company.stats.map((s, i) => (
              <div key={s.label} className={`flex flex-col justify-between p-6 ${i % 2 === 0 ? "bg-primary text-secondary" : ""} ${i % 2 === 1 ? "border-l-2 border-primary" : ""} ${i >= 2 ? "border-t-2 border-primary" : ""}`}>
                <span className="text-sm font-bold opacity-80">{String(i + 1).padStart(2, "0")}</span>
                <div className="mt-10">
                  <div className="font-display text-3xl font-extrabold">{s.value}</div>
                  <div className="mt-1 text-sm opacity-80">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="border-y-8 border-primary bg-primary py-16 text-secondary">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Values" title="What we optimize for" light large />
          <div className="mt-12 grid border-2 border-secondary/30 sm:grid-cols-2">
            {company.values.map((v, i) => (
              <div key={v.title} className={`${i % 2 === 1 ? "sm:border-l-2 border-secondary/30" : ""} ${i >= 2 ? "border-t-2 border-secondary/30" : ""}`}>
                <BentoCard title={v.title} description={v.description} variant="glass" index={String(i + 1).padStart(2, "0")} className="min-h-[200px] border-0" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1600px] px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Hosting & operations" title={company.hosting.title} description={company.hosting.description} large />
        <div className="mt-12 grid border-2 border-primary md:grid-cols-3">
          {company.hosting.benefits.map((b, i) => (
            <div key={b.title} className={`${i > 0 ? "border-t-2 border-primary md:border-t-0 md:border-l-2" : ""}`}>
              <BentoCard title={b.title} description={b.description} variant={i === 1 ? "ink" : "paper"} index={String(i + 1).padStart(2, "0")} className="min-h-[220px] border-0" />
            </div>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
