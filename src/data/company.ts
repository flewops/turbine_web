export const company = {
  name: "Turbine",
  tagline: "Your Business deserves an Operating System",
  description:
    "Turbine is a fully integrated business operating system that unifies finance, sales, supply chain, HR, marketing, and operations — hosted on AWS and managed end-to-end for you.",
  email: "turbine@flewops.com",
  phone: "+91 88255 72114",
  website: "https://turbine.flewops.com",
  stats: [
    { value: "80+", label: "Integrated Apps" },
    { value: "Cloud", label: "Hosted & Managed" },
    { value: "1-Click", label: "App Installs" },
    { value: "24/7", label: "Managed Support" },
  ],
  values: [
    {
      title: "Fully Integrated",
      description:
        "Every app speaks the same language. No silos, no brittle integrations — just seamless workflows from lead to ledger.",
    },
    {
      title: "Intuitive by Design",
      description:
        "A clean interface your team will actually use. Minimal training, maximum adoption across departments.",
    },
    {
      title: "Grow Without Friction",
      description:
        "Start with what you need today. Add apps as you scale — without migrations, rewrites, or vendor chaos.",
    },
    {
      title: "Yours to Shape",
      description:
        "Customize screens, automate actions, and tailor workflows so Turbine fits your business — not the other way around.",
    },
  ],
  hosting: {
    title: "Managed by Us. Built for Reliability.",
    description:
      "We host, secure, update, and operate your entire Turbine environment on AWS. You focus on running the business — we keep the operating system humming.",
    benefits: [
      {
        title: "Expert Support",
        description:
          "Specialists guide you from setup through ongoing operations — configuration, upgrades, and day-to-day help.",
      },
      {
        title: "Security & Reliability",
        description:
          "Industry-grade security practices and reliable cloud infrastructure help protect your data and keep your application consistently available."
      },
      {
        title: "True Scalability",
        description:
          "As your team and transaction volume grow, your Turbine deployment scales with you — without re-platforming.",
      },
    ],
  },
  seo: {
    defaultTitle: "Turbine — Business Operating System",
    description:
      "Turbine is the all-in-one business operating system for finance, sales, inventory, manufacturing, HR, and more. Hosted on AWS. Simple pricing. Built for growth.",
    keywords:
      "business operating system, ERP software, integrated business apps, cloud ERP, inventory management, CRM, accounting software, manufacturing ERP, HR software, Turbine ERP",
  },
} as const;
