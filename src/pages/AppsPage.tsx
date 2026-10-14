import { useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SEO from "../components/SEO";
import SectionHeading from "../components/SectionHeading";
import BentoCard from "../components/BentoCard";
import CTASection from "../components/CTASection";
import Icon from "../components/IconMap";
import { apps, categories, type AppCategory } from "../data/apps";

export default function AppsPage() {
  const [params, setParams] = useSearchParams();
  const active = (params.get("category") as AppCategory | null) || null;
  const activeCategory = active ? categories.find((c) => c.id === active) : null;

  const filtered = useMemo(() => {
    if (!active) return apps;
    return apps.filter((a) => a.category === active);
  }, [active]);

  const setCategory = (id: AppCategory | null) => {
    if (!id) setParams({});
    else setParams({ category: id });
  };

  return (
    <>
      <SEO
        title={activeCategory ? `${activeCategory.name} Apps` : "Apps"}
        description={
          activeCategory?.description ??
          "Explore Turbine's full suite of integrated business apps — finance, sales, supply chain, HR, marketing, services, and productivity."
        }
        path={active ? `/apps?category=${active}` : "/apps"}
      />

      {/* Page hero — sits flush under fixed header */}
      <section className="border-b-8 border-primary bg-primary px-4 py-12 text-secondary sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-[1600px]">
          <SectionHeading
            eyebrow="Applications"
            title="Every app your business needs"
            description="Install what matters today. Add more as you grow. Every app is natively integrated — no fragile connectors."
            light
            large
          />
        </div>
      </section>

      {/* Category filters */}
      <section className="sticky top-14 z-30 border-b-2 border-primary bg-secondary sm:top-16">
        <div className="mx-auto flex max-w-[1600px] flex-wrap gap-2 px-4 py-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => setCategory(null)}
            className={`border-2 border-primary px-4 py-2 text-sm font-bold transition ${
              !active
                ? "bg-primary text-secondary"
                : "bg-secondary text-primary hover:bg-primary hover:text-secondary"
            }`}
          >
            All apps
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setCategory(cat.id)}
              className={`border-2 border-primary px-4 py-2 text-sm font-bold transition ${
                active === cat.id
                  ? "bg-primary text-secondary"
                  : "bg-secondary text-primary hover:bg-primary hover:text-secondary"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </section>

      {/* Category overview tiles — only when viewing all */}
      {!active && (
        <section className="mx-auto max-w-[1600px] px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
          <div className="grid border-2 border-primary sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((cat, i) => (
              <div
                key={cat.id}
                className={[
                  i % 2 === 1 ? "sm:border-l-2 border-primary" : "",
                  i >= 2 ? "border-t-2 border-primary" : "",
                  i % 4 !== 0 ? "lg:border-l-2 border-primary" : "",
                  i >= 4 ? "lg:border-t-2 border-primary" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <BentoCard
                  title={cat.name}
                  description={cat.description}
                  href={`/apps?category=${cat.id}`}
                  variant={i % 2 === 0 ? "ink" : "paper"}
                  index={String(i + 1).padStart(2, "0")}
                  className="min-h-[220px] border-0"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* App grid — generous top spacing when a category is selected */}
      <section className="mx-auto max-w-[1600px] px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-12 lg:px-8">
        {activeCategory && (
          <div className="mb-10 border-b-2 border-primary pb-8">
            <p className="text-sm font-bold font-display uppercase tracking-[0.1em] text-primary/75">
              Category
            </p>
            <h2 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl">
              {activeCategory.name}
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-primary/80 sm:text-lg">
              {activeCategory.description}
            </p>
          </div>
        )}

        <div className="grid border-2 border-primary sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((app, i) => (
            <Link
              key={app.id}
              to={`/apps/${app.id}`}
              className={[
                "group flex min-h-[260px] flex-col border-primary bg-secondary p-7 transition hover:bg-primary hover:text-secondary",
                i % 2 === 1 ? "sm:border-l-2" : "",
                i % 3 !== 0 ? "lg:border-l-2" : "",
                i >= 2 ? "border-t-2" : "",
                i < 3 ? "lg:border-t-0" : "lg:border-t-2",
                i >= 2 && i < 3 ? "sm:border-t-2 lg:border-t-0" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <div className="flex items-center justify-between">
                <div className="border-2 border-current p-3">
                  <Icon name={app.icon} className="h-5 w-5" />
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold opacity-80">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <ArrowUpRight className="h-5 w-5 opacity-80" />
                </div>
              </div>
              <div className="mt-auto pt-10">
                <h3 className="font-display text-2xl font-extrabold">{app.name}</h3>
                <p className="mt-1 text-sm font-semibold opacity-85">{app.tagline}</p>
                <p className="mt-3 line-clamp-2 text-sm leading-relaxed opacity-80">
                  {app.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="border-2 border-primary p-10 text-center text-primary/80">
            No apps in this category yet.
          </p>
        )}
      </section>

      <CTASection />
    </>
  );
}
