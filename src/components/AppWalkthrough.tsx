import { Check } from "lucide-react";
import type { App } from "../data/apps";
import { walkthroughs } from "../data/walkthroughs";

interface AppWalkthroughProps {
  app: App;
}

/**
 * Presenter-friendly walkthrough section for app detail pages.
 *
 * Renders the app's own sections from `data/walkthroughs.ts`. Sections with
 * an image show text and picture side by side, alternating sides; sections
 * without one span the full width. Images are blurred and tinted in the site
 * colour by default; hovering reveals the original photo so the audience
 * instantly sees where to focus.
 */
export default function AppWalkthrough({ app }: AppWalkthroughProps) {
  const sections = walkthroughs[app.id];
  if (!sections?.length) return null;

  let imageRows = 0;

  return (
    <section className="border-t-8 border-primary bg-secondary">
      <div className="mx-auto max-w-[1600px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <p className="inline-flex items-center gap-2 border-2 border-primary px-3 py-1.5 text-xs font-bold font-display uppercase tracking-[0.1em] text-primary sm:text-sm">
          <span className="inline-block h-2 w-2 bg-primary" />
          Walkthrough
        </p>
        <h2 className="mt-5 font-display text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          {app.name}, explained step by step
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-primary/80 sm:text-xl">
          Follow along point by point. Hover any picture to bring it into
          focus while you present.
        </p>
      </div>

      <div className="border-t-2 border-primary">
        {sections.map((section, si) => {
          const number = String(si + 1).padStart(2, "0");
          // Alternate sides only among rows that have a picture.
          const imageRight = section.image ? imageRows++ % 2 === 0 : true;

          const text = (
            <div
              className={`flex flex-col justify-center px-4 py-12 sm:px-8 lg:px-12 lg:py-16 ${
                section.image
                  ? imageRight
                    ? "lg:order-1 lg:border-r-2 lg:border-primary"
                    : "lg:order-2 lg:border-l-2 lg:border-primary"
                  : ""
              }`}
            >
              <p className="text-xs font-bold font-display uppercase tracking-[0.1em] text-primary/75">
                Step {number}
              </p>
              <h3 className="mt-3 max-w-3xl font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
                {section.title}
              </h3>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-primary/80 sm:text-lg">
                {section.description}
              </p>
              {section.points && section.points.length > 0 && (
                <ul
                  className={`mt-8 border-2 border-primary ${
                    section.image ? "" : "sm:grid sm:grid-cols-2 lg:grid-cols-3"
                  }`}
                >
                  {section.points.map((point, pi) => (
                    <li
                      key={point}
                      className={`flex items-start gap-3 p-4 text-sm font-semibold sm:p-5 sm:text-base ${
                        pi > 0
                          ? section.image
                            ? "border-t-2 border-primary"
                            : "border-t-2 border-primary sm:border-t-0 sm:border-l-2"
                          : ""
                      }`}
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );

          return (
            <div
              key={section.title}
              className={`mx-auto grid max-w-[1600px] border-primary ${
                section.image ? "lg:grid-cols-2" : ""
              } ${si > 0 ? "border-t-2" : ""}`}
            >
              {text}

              {/* Picture side — tinted & blurred until hovered */}
              {section.image && (
                <div
                  className={`walkthrough-media group relative min-h-[320px] overflow-hidden border-t-2 border-primary lg:min-h-[520px] lg:border-t-0 ${
                    imageRight ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <img
                    src={section.image}
                    alt={section.imageAlt ?? `${app.name} — ${section.title}`}
                    loading="lazy"
                    className="walkthrough-img absolute inset-0 h-full w-full object-cover"
                  />
                  {/* Site-colour tint that fades away on hover */}
                  <div className="walkthrough-tint pointer-events-none absolute inset-0" />
                  <div className="pointer-events-none absolute bottom-0 left-0 flex items-center gap-3 bg-primary px-5 py-3 text-secondary transition-opacity duration-300 group-hover:opacity-0">
                    <span className="font-display text-lg font-extrabold tabular-nums">{number}</span>
                    <span className="text-xs font-bold font-display uppercase tracking-[0.1em] text-secondary/85">
                      Hover to focus
                    </span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
