export const features = {
  headline: "One need, one app — all connected",
  subheadline:
    "Turbine is a modular business operating system. Install what you need, automate what slows you down, and keep every department on the same source of truth.",
  pillars: [
    {
      title: "Boost efficiency",
      description:
        "Automate repetitive tasks, streamline workflows, and gain real-time visibility across your entire operation.",
      icon: "Zap",
    },
    {
      title: "Break down silos",
      description:
        "Finance, sales, inventory, and HR share data natively — no fragile middleware holding your business together.",
      icon: "Link2",
    },
    {
      title: "Delight customers",
      description:
        "Respond faster with CRM, helpdesk, portals, and automated follow-ups that feel personal at scale.",
      icon: "Smile",
    },
    {
      title: "Decide with data",
      description:
        "Dashboards and live reports turn operational noise into clear signals for leadership.",
      icon: "BarChart3",
    },
    {
      title: "Reduce software sprawl",
      description:
        "Replace a patchwork of tools with one platform — lower cost, less training, fewer failure points.",
      icon: "Layers",
    },
    {
      title: "Customize freely",
      description:
        "Studio lets you automate actions, design screens, create reports, and extend processes your way.",
      icon: "SlidersHorizontal",
    },
  ],
  differentiators: [
    {
      title: "Packaged & ready",
      description:
        "Community-grade power with carefully selected addons — delivered as a cohesive application, not a DIY project.",
    },
    {
      title: "Hosted on AWS",
      description:
        "We run the infrastructure, security, backups, and upgrades. You run the business.",
    },
    {
      title: "Transparent commercial model",
      description:
        "One-time implementation plus simple per-user monthly pricing. No per-app nickel-and-diming.",
    },
    {
      title: "End-to-end ownership",
      description:
        "From configuration to ongoing support, Turbine is managed by a team that controls the full stack.",
    },
  ],
} as const;

export const homepageHighlights = [
  {
    title: "Finance that stays current",
    description: "Accounting, invoicing, and expenses update as the business moves — not days later.",
    href: "/apps/accounting",
    icon: "Calculator",
  },
  {
    title: "Sales with a memory",
    description: "CRM and sales apps keep every conversation, quote, and order connected.",
    href: "/apps/crm",
    icon: "HeartHandshake",
  },
  {
    title: "Supply chain without blind spots",
    description: "Inventory, manufacturing, and purchasing share one live operational picture.",
    href: "/apps/inventory",
    icon: "Boxes",
  },
  {
    title: "People operations included",
    description: "HR, payroll, attendance, and approvals — because your operating system should include your team.",
    href: "/apps?category=human-resources",
    icon: "Users",
  },
] as const;
