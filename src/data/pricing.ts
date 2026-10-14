export const pricing = {
  headline: "Simple pricing. Real transparency.",
  subheadline:
    "One-time setup plus a clear per-user monthly fee. Hosting, maintenance, and support included — no surprise invoices.",
  plans: [
    {
      id: "starter",
      name: "Starter",
      description: "Ideal for small teams launching with core apps.",
      setupFee: "One-time setup",
      setupNote: "Scoped to your first apps and data migration needs",
      monthlyPerUser: "Per user / month",
      monthlyNote: "Recurring subscription based on active users",
      features: [
        "Core Industry apps",
        "Scalable Cloud Hosting",
        "Automatic updates & backups",
        "Email support",
        "Standard onboarding",
        "Mobile-ready access",
      ],
      cta: "Get Started",
      highlighted: false,
    },
    {
      id: "growth",
      name: "Growth",
      description: "For growing companies that need the full operating system.",
      setupFee: "One-time setup",
      setupNote: "Includes implementation workshops and configuration",
      monthlyPerUser: "Per user / month",
      monthlyNote: "All apps unlocked for every user",
      features: [
        "All integrated apps",
        "Scalable Cloud Hosting",
        "Priority support",
        "Implementation guidance",
        "Customised Solution",
        "Training sessions",
        "Unlimited data & features",
      ],
      cta: "Talk to Sales",
      highlighted: true,
    },
    {
      id: "enterprise",
      name: "Enterprise",
      description: "For complex operations that need tailored delivery.",
      setupFee: "Custom engagement",
      setupNote: "Dedicated project plan and success team",
      monthlyPerUser: "Custom / user",
      monthlyNote: "Volume pricing and SLA options available",
      features: [
        "Everything in Growth",
        "Dedicated success manager",
        "Advanced customizations",
        "Multi-company setup",
        "Custom integrations",
        "SLA-backed support",
        "On-site or remote training",
      ],
      cta: "Contact Us",
      highlighted: false,
    },
  ],
  includes: [
    "Secure Cloud hosting",
    "Ongoing maintenance",
    "Weekly backups",
    "SSL & security hardening",
    "No per-app fees",
  ],
  faq: [
    {
      question: "How does one-time + monthly pricing work?",
      answer:
        "You pay a one-time implementation fee to configure Turbine for your business, then a transparent per-user monthly subscription that covers hosting, updates, support, and access to your apps.",
    },
    {
      question: "Are all apps included?",
      answer:
        "On Growth and Enterprise plans, every app in the Turbine suite is available. Starter plans focus on a curated set of core apps — you can upgrade anytime.",
    },
    {
      question: "Is there is any AMC?",
      answer:
        "Yes, in some cases. Growth and Enterprise customers may require an AMC for ongoing compliance updates, statutory changes, and version upgrades to ensure Turbine stays aligned with evolving business and regulatory requirements."    },
   
  ],
} as const;
