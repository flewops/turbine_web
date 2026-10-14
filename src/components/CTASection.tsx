import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { company } from "../data/company";

export default function CTASection() {
  return (
    <section className="border-t-8 border-primary bg-primary text-secondary">
      <div className="relative mx-auto max-w-[1600px] overflow-hidden px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="pointer-events-none absolute inset-0 grid-lines-inv" />
        <p className="relative text-sm font-bold uppercase tracking-[0.14em] text-secondary/75">
          Next step
        </p>
        <h2 className="relative mt-4 max-w-5xl font-display text-5xl font-extrabold leading-[0.92] tracking-tight sm:text-6xl lg:text-8xl">
          Ready to run on a real operating system?
        </h2>
        <p className="relative mt-8 max-w-2xl text-lg text-secondary/80 sm:text-xl">
          {company.tagline}. Map Turbine to your workflows and see what unified operations feel like.
        </p>
        <div className="relative mt-10 flex flex-wrap gap-0">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 border-2 border-secondary bg-secondary px-8 py-4 text-base font-bold text-primary transition hover:bg-primary hover:text-secondary"
          >
            Book a demo
            <ArrowUpRight className="h-5 w-5" />
          </Link>
          <Link
            to="/pricing"
            className="inline-flex items-center gap-2 border-2 border-secondary border-l-0 px-8 py-4 text-base font-bold text-secondary transition hover:bg-secondary hover:text-primary"
          >
            View pricing
          </Link>
        </div>
      </div>
    </section>
  );
}
