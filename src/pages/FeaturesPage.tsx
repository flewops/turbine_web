import SEO from "../components/SEO";
import SectionHeading from "../components/SectionHeading";
import BentoCard from "../components/BentoCard";
import CTASection from "../components/CTASection";
import Icon from "../components/IconMap";
import { features } from "../data/features";
import { company } from "../data/company";

export default function FeaturesPage() {
  return (
    <>
      <SEO title="Features" description="Discover why Turbine is the business operating system that unifies apps and runs on managed AWS infrastructure." path="/features" />
      <section className="border-b-8 border-primary bg-primary px-4 py-16 text-secondary sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1600px]">
          <SectionHeading eyebrow="Features" title={features.headline} description={features.subheadline} light large />
        </div>
      </section>
      <section className="mx-auto max-w-[1600px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid border-2 border-primary sm:grid-cols-2 lg:grid-cols-3">
          {features.pillars.map((p, i) => (
            <div key={p.title} className={`${i % 2 === 1 ? "sm:border-l-2 border-primary" : ""} ${i >= 2 ? "border-t-2 border-primary" : ""} ${i % 3 !== 0 ? "lg:border-l-2" : ""}`}>
              <BentoCard
                title={p.title}
                description={p.description}
                variant={i % 2 === 0 ? "ink" : "paper"}
                index={String(i + 1).padStart(2, "0")}
                icon={<div className="border-2 border-current p-2"><Icon name={p.icon} className="h-4 w-4" /></div>}
                className="min-h-[240px] border-0"
              />
            </div>
          ))}
        </div>
      </section>
      <section className="border-y-8 border-primary bg-primary py-16 text-secondary">
        <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Differentiators" title="Packaged. Hosted. Owned end to end." description="Turbine arrives as a cohesive application on AWS, with a team that controls the full stack." light large />
          <div className="mt-12 grid border-2 border-secondary/30 sm:grid-cols-2">
            {features.differentiators.map((d, i) => (
              <div key={d.title} className={`${i % 2 === 1 ? "sm:border-l-2 border-secondary/30" : ""} ${i >= 2 ? "border-t-2 border-secondary/30" : ""}`}>
                <BentoCard title={d.title} description={d.description} variant="glass" index={String(i + 1).padStart(2, "0")} className="min-h-[200px] border-0" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1600px] px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Principles" title="What we optimize for" large />
        <div className="mt-12 grid border-2 border-primary sm:grid-cols-2">
          {company.values.map((v, i) => (
            <div key={v.title} className={`${i % 2 === 1 ? "sm:border-l-2 border-primary" : ""} ${i >= 2 ? "border-t-2 border-primary" : ""}`}>
              <BentoCard title={v.title} description={v.description} variant={i % 2 === 0 ? "ink" : "paper"} index={String(i + 1).padStart(2, "0")} className="min-h-[200px] border-0" />
            </div>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
