import type { App } from "../data/apps";

interface AppWalkthroughProps {
  app: App;
}

/**
 * Presenter-friendly walkthrough section for app detail pages.
 *
 * Dynamically splits the app's features into alternating text/image rows
 * (text–picture, picture–text, text–picture…). Images are blurred and
 * tinted in the site colour by default; hovering reveals the original
 * photo so the audience instantly sees where to focus.
 */
export default function AppWalkthrough({ app }: AppWalkthroughProps) {
  // Split features into up to 3 groups — one row per group.
  const groups: App["features"][] = [];
  const per = Math.ceil(app.features.length / Math.min(3, app.features.length));
  for (let i = 0; i < app.features.length && groups.length < 3; i += per) {
    groups.push(app.features.slice(i, i + per));
  }

  const rowTitles = [
    `How ${app.name} works day to day`,
    "What your team gets out of it",
    "Where it connects to the rest of Turbine",
  ];

  return (
    <section className="border-t-8 border-primary bg-secondary">
      <div className="mx-auto max-w-[1600px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <p className="inline-flex items-center gap-2 border-2 border-primary px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-primary sm:text-sm">
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
        {groups.map((group, gi) => {
          const imageRight = gi % 2 === 0; // row 1: text|picture, row 2: picture|text…
          const image = `/images/walkthrough/${app.category}-${(gi % 3) + 1}.jpg`;

          return (
            <div
              key={gi}
              className={`mx-auto grid max-w-[1600px] border-primary lg:grid-cols-2 ${
                gi > 0 ? "border-t-2" : ""
              }`}
            >
              {/* Text side */}
              <div
                className={`flex flex-col justify-center px-4 py-12 sm:px-8 lg:px-12 lg:py-16 ${
                  imageRight
                    ? "lg:order-1 lg:border-r-2 lg:border-primary"
                    : "lg:order-2 lg:border-l-2 lg:border-primary"
                }`}
              >
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary/75">
                  Step {String(gi + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
                  {rowTitles[gi] ?? rowTitles[0]}
                </h3>

                <ol className="mt-8 space-y-0 border-2 border-primary">
                  {group.map((feature, fi) => (
                    <li
                      key={feature.title}
                      className={`flex gap-4 p-5 sm:p-6 ${
                        fi > 0 ? "border-t-2 border-primary" : ""
                      } ${fi % 2 === 0 ? "bg-primary text-secondary" : ""}`}
                    >
                      <span
                        className={`font-display text-xl font-extrabold tabular-nums ${
                          fi % 2 === 0 ? "text-secondary/75" : "text-primary/80"
                        }`}
                      >
                        {gi * per + fi + 1}
                      </span>
                      <div>
                        <h4 className="font-display text-lg font-extrabold sm:text-xl">
                          {feature.title}
                        </h4>
                        <p
                          className={`mt-1.5 text-sm leading-relaxed sm:text-base ${
                            fi % 2 === 0 ? "text-secondary/85" : "text-primary/80"
                          }`}
                        >
                          {feature.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Picture side — tinted & blurred until hovered */}
              <div
                className={`walkthrough-media group relative min-h-[320px] overflow-hidden border-t-2 border-primary lg:min-h-[520px] lg:border-t-0 ${
                  imageRight ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <img
                  src={image}
                  alt={`${app.name} — ${rowTitles[gi] ?? "walkthrough"}`}
                  loading="lazy"
                  className="walkthrough-img absolute inset-0 h-full w-full object-cover"
                />
                {/* Site-colour tint that fades away on hover */}
                <div className="walkthrough-tint pointer-events-none absolute inset-0" />
                <div className="pointer-events-none absolute bottom-0 left-0 flex items-center gap-3 bg-primary px-5 py-3 text-secondary transition-opacity duration-300 group-hover:opacity-0">
                  <span className="font-display text-lg font-extrabold tabular-nums">
                    {String(gi + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-secondary/85">
                    Hover to focus
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
