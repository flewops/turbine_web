export const mainNav = [
  { label: "Apps", href: "/apps" },
  { label: "Industries", href: "/industries" },
  { label: "Pricing", href: "/pricing" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
] as const;

export const footerNav = {
  product: [
    { label: "All Apps", href: "/apps" },
    { label: "Industries", href: "/industries" },
    { label: "Pricing", href: "/pricing" },
    { label: "Features", href: "/features" },
  ],
  company: [
    { label: "About Turbine", href: "/about" },
    { label: "Resources", href: "/resources" },
    { label: "Contact", href: "/contact" },
  ],
  categories: [
    { label: "Finance", href: "/apps?category=finance" },
    { label: "Sales", href: "/apps?category=sales" },
    { label: "Supply Chain", href: "/apps?category=supply-chain" },
    { label: "HR", href: "/apps?category=human-resources" },
    { label: "Marketing", href: "/apps?category=marketing" },
    { label: "Services", href: "/apps?category=services" },
  ],
} as const;
