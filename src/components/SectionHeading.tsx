interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  large?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  large = false,
}: SectionHeadingProps) {
  return (
    <div className={`max-w-5xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p
          className={`mb-4 inline-flex items-center gap-2 border-2 px-3 py-1.5 text-xs font-bold font-display uppercase tracking-[0.1em] sm:text-sm ${
            light
              ? "border-secondary/40 text-secondary/80"
              : "border-primary text-primary"
          }`}
        >
          <span
            className={`inline-block h-2 w-2 ${light ? "bg-secondary" : "bg-primary"}`}
          />
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display font-extrabold tracking-tight ${
          large
            ? "text-4xl leading-[1.02] sm:text-6xl sm:leading-[0.94] lg:text-8xl lg:leading-[0.9]"
            : "text-3xl leading-tight sm:text-5xl lg:text-6xl"
        } ${light ? "text-secondary" : "text-primary"}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 max-w-2xl text-lg leading-relaxed sm:mt-6 sm:text-xl md:text-2xl ${
            light ? "text-secondary/85" : "text-primary/80"
          } ${align === "center" ? "mx-auto" : ""}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
