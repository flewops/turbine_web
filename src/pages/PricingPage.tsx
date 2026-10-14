import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import SEO from "../components/SEO";
import SectionHeading from "../components/SectionHeading";
import CTASection from "../components/CTASection";
import { pricing } from "../data/pricing";

export default function PricingPage() {
  return (
    <>
      <SEO title="Pricing" description="Turbine pricing: one-time implementation plus transparent per-user monthly subscription." path="/pricing" />
      <section className="border-b-8 border-primary bg-primary px-4 py-16 text-secondary sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1600px]">
          <SectionHeading eyebrow="Pricing" title={pricing.headline} description={pricing.subheadline} light large align="center" />
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid border-2 border-primary lg:grid-cols-3">
          {pricing.plans.map((plan, i) => (
            <div
              key={plan.id}
              className={`flex flex-col p-8 ${plan.highlighted ? "bg-primary text-secondary" : "bg-secondary text-primary"} ${
                i > 0 ? "border-t-2 border-primary lg:border-t-0 lg:border-l-2" : ""
              }`}
            >
              {plan.highlighted && (
                <span className="mb-2 text-xs font-bold uppercase tracking-wide opacity-85">Popular</span>
              )}
              <span className="text-sm font-bold opacity-80">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 font-display text-3xl font-extrabold">{plan.name}</h3>
              <p className="mt-2 text-sm opacity-80">{plan.description}</p>
              <div className="mt-8 space-y-3">
                <div className={`border-2 p-4 ${plan.highlighted ? "border-secondary/30" : "border-primary"}`}>
                  <p className="text-xs font-bold uppercase tracking-wide opacity-85">Implementation</p>
                  <p className="mt-1 font-display text-xl font-extrabold">{plan.setupFee}</p>
                  <p className="mt-1 text-xs opacity-85">{plan.setupNote}</p>
                </div>
                <div className={`border-2 p-4 ${plan.highlighted ? "border-secondary/30 bg-secondary/10" : "border-primary bg-primary text-secondary"}`}>
                  <p className="text-xs font-bold uppercase tracking-wide opacity-80">Recurring</p>
                  <p className="mt-1 font-display text-xl font-extrabold">{plan.monthlyPerUser}</p>
                  <p className="mt-1 text-xs opacity-85">{plan.monthlyNote}</p>
                </div>
              </div>
              <ul className="mt-8 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm opacity-80">
                    <Check className="mt-0.5 h-4 w-4 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`mt-8 flex items-center justify-center border-2 py-3.5 text-sm font-bold transition ${
                  plan.highlighted
                    ? "border-secondary bg-secondary text-primary hover:bg-primary hover:text-secondary"
                    : "border-primary bg-primary text-secondary hover:bg-secondary hover:text-primary"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-8 border-2 border-primary p-8">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-primary/75">Included always</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {pricing.includes.map((item) => (
              <div key={item} className="flex items-center gap-2.5 text-sm font-medium">
                <Check className="h-4 w-4" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">FAQ</h2>
        <div className="mt-8 border-2 border-primary">
          {pricing.faq.map((item, i) => (
            <div key={item.question} className={`p-6 ${i > 0 ? "border-t-2 border-primary" : ""}`}>
              <div className="flex gap-4">
                <span className="text-sm font-bold text-primary/75">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-display text-lg font-extrabold">{item.question}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-primary/80">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
