import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

interface BentoCardProps {
  title: string;
  description?: string;
  href?: string;
  className?: string;
  children?: ReactNode;
  icon?: ReactNode;
  variant?: "paper" | "ink" | "outline" | "glass";
  index?: string;
}

const variants = {
  paper: "bg-secondary text-primary border-2 border-primary",
  ink: "bg-primary text-secondary border-2 border-primary",
  outline: "bg-secondary text-primary border-2 border-primary",
  glass: "bg-primary text-secondary border-2 border-secondary/30",
};

export default function BentoCard({
  title,
  description,
  href,
  className = "",
  children,
  icon,
  variant = "outline",
  index,
}: BentoCardProps) {
  const isDark = variant === "ink" || variant === "glass";

  const content = (
    <div
      className={`group relative flex h-full min-h-[220px] flex-col p-6 transition-colors sm:p-8 ${variants[variant]} ${className} ${
        href ? (isDark ? "hover:bg-secondary hover:text-primary" : "hover:bg-primary hover:text-secondary") : ""
      }`}
    >
      <div className="relative flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          {index && (
            <span className="text-sm font-bold tabular-nums opacity-80 group-hover:opacity-85">
              {index}
            </span>
          )}
          {icon && <div className="opacity-90 group-hover:opacity-100">{icon}</div>}
        </div>
        {href && <ArrowUpRight className="h-6 w-6 shrink-0 opacity-85 transition group-hover:opacity-100" />}
      </div>

      <div className="relative mt-auto pt-10">
        <h3 className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
          {title}
        </h3>
        {description && (
          <p className="mt-3 text-base leading-relaxed opacity-85 group-hover:opacity-90">
            {description}
          </p>
        )}
        {children}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link to={href} className="block h-full">
        {content}
      </Link>
    );
  }
  return content;
}
