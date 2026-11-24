export interface Industry {
  id: string;
  name: string;
  tagline: string;
  description: string;
  /** Each solution answers one problem the industry has, in plain language. */
  solutions: {
    problem: string;
    title: string;
    description: string;
    /** Ids of the Turbine apps that deliver this solution (see apps.ts). */
    apps: string[];
  }[];
  recommendedApps: string[];
  image: string;
}

export const industries: Industry[] = [
  {
    id: "manufacturing",
    name: "Manufacturing",
    tagline: "From BOM to shipment, one continuous thread",
    description:
      "Manufacturers need precision across planning, production, quality, and inventory. Turbine connects the shop floor to finance and sales so every order is visible, traceable, and profitable.",
    solutions: [
      {
        problem: "Planning and production run on disconnected systems",
        title: "One plan for the whole factory",
        description: "Orders, materials and machine capacity sit in one place, so the production schedule is always based on what is actually in stock and available.",
        apps: ["manufacturing", "inventory"],
      },
      {
        problem: "No real-time view of what is happening on the shop floor",
        title: "Live view of the shop floor",
        description: "Operators start and finish each step on a tablet, so supervisors see what is running, what is late and where work is stuck as it happens.",
        apps: ["manufacturing"],
      },
      {
        problem: "Quality checks done on paper, after the fact",
        title: "Quality checks built into the work",
        description: "Checks appear at the right step of production. A failed check raises an alert straight away instead of being found at the end.",
        apps: ["quality", "manufacturing"],
      },
      {
        problem: "Tracing a defect back to its lot or supplier takes days",
        title: "Trace any product in minutes",
        description: "Every batch and serial number is recorded from the supplier delivery to the customer shipment, so a complaint or recall is quick to investigate.",
        apps: ["inventory", "quality"],
      },
    ],
    recommendedApps: ["manufacturing", "inventory", "quality", "plm", "purchase", "maintenance", "accounting"],
    image: "/images/industry-manufacturing.jpg",
  },
  {
    id: "metal-fabricator",
    name: "Metal Fabrication",
    tagline: "Cut, weld, finish — with full job cost clarity",
    description:
      "Metal fabricators juggle custom jobs, material yields, machine time, and tight delivery windows. Turbine gives estimators, planners, and floor teams a shared system of record.",
    solutions: [
      {
        problem: "Quotes that miss the real cost of materials and labor",
        title: "Quotes based on real costs",
        description: "Quotes use your current metal prices and machine hours, so every job is priced with the margin you expect, not a guess.",
        apps: ["sales", "manufacturing"],
      },
      {
        problem: "Custom material lists and design changes mid-job",
        title: "Every job tracked start to finish",
        description: "Each job gets its own list of materials and drawings. When the design changes mid-job, the floor always works from the latest approved version.",
        apps: ["manufacturing", "plm"],
      },
      {
        problem: "Machine downtime that arrives without warning",
        title: "Servicing before breakdowns",
        description: "Machines follow a regular service schedule, so maintenance happens at planned times instead of in the middle of a rush order.",
        apps: ["maintenance"],
      },
      {
        problem: "Key metals running out in the middle of a job",
        title: "Never run out of key metals",
        description: "Stock levels update as jobs use material, and reorders are raised automatically before you run short.",
        apps: ["inventory", "purchase"],
      },
    ],
    recommendedApps: ["manufacturing", "plm", "inventory", "purchase", "maintenance", "sales", "crm", "accounting"],
    image: "/images/industry-fabrication.jpg",
  },
  {
    id: "retail",
    name: "Retail",
    tagline: "Store, stock, and online — perfectly in sync",
    description:
      "Retailers need POS speed, inventory accuracy, and omnichannel consistency. Turbine ties registers, warehouses, and eCommerce into one operating rhythm.",
    solutions: [
      {
        problem: "Slow checkout and long queues at peak times",
        title: "Fast checkout at the till",
        description: "A simple touch-screen till that keeps working even if the internet drops, with card readers, scanners and receipt printers connected.",
        apps: ["point-of-sale"],
      },
      {
        problem: "Stock counts you can never quite trust",
        title: "Stock levels you can trust",
        description: "Every sale, delivery and return updates stock instantly, so you know exactly what is on the shelf and in the back room.",
        apps: ["inventory"],
      },
      {
        problem: "Online and in-store stock that don't match",
        title: "One stock for shop and website",
        description: "Your online store and physical shops sell from the same stock, so you never sell online what has already gone in store.",
        apps: ["ecommerce", "inventory"],
      },
      {
        problem: "Loyalty and customer data scattered across tools",
        title: "Rewards that bring customers back",
        description: "Points and rewards work the same online and in store, and every purchase builds one customer history.",
        apps: ["point-of-sale", "crm"],
      },
    ],
    recommendedApps: ["point-of-sale", "inventory", "ecommerce", "crm", "sales", "accounting", "website"],
    image: "/images/industry-retail.jpg",
  },
  {
    id: "wholesale-distribution",
    name: "Wholesale & Distribution",
    tagline: "Move more volume with fewer surprises",
    description:
      "Distributors live and die by fill rates, margins, and delivery reliability. Turbine optimizes purchasing, warehousing, and order fulfillment as one system.",
    solutions: [
      {
        problem: "Reordering by guesswork while vendor lead times vary",
        title: "Automatic reordering",
        description: "Turbine watches your stock and each supplier's delivery time, and raises purchase orders before you run low.",
        apps: ["purchase", "inventory"],
      },
      {
        problem: "Complex multi-warehouse picking and shipping",
        title: "Faster picking and shipping",
        description: "Pickers get the shortest route through the warehouse, and shipping labels print automatically for your carriers.",
        apps: ["inventory"],
      },
      {
        problem: "Margin leaking away on high-volume orders",
        title: "Prices and discounts under control",
        description: "Customer-specific price lists and discount rules apply automatically, so large orders never go out below your margin.",
        apps: ["sales"],
      },
      {
        problem: "Slow order-to-cash cycles",
        title: "Get paid sooner",
        description: "Invoices go out as soon as goods are delivered, and late payers get automatic reminders.",
        apps: ["accounting", "sales"],
      },
    ],
    recommendedApps: ["inventory", "purchase", "sales", "accounting", "crm", "ecommerce"],
    image: "/images/industry-distribution.jpg",
  },
  {
    id: "professional-services",
    name: "Professional Services",
    tagline: "Projects, people, and profitability aligned",
    description:
      "Agencies and consultancies need visibility into utilization, delivery, and billing. Turbine connects projects, timesheets, and invoicing so nothing billable slips away.",
    solutions: [
      {
        problem: "Scope creep you only discover at the end",
        title: "See project budgets as you go",
        description: "Every project shows hours used against its budget, so you spot overruns while there is still time to act.",
        apps: ["project"],
      },
      {
        problem: "Billable time that never makes it onto an invoice",
        title: "Every billable hour invoiced",
        description: "Your team logs time against tasks, and that time turns into invoice lines automatically.",
        apps: ["timesheets", "accounting"],
      },
      {
        problem: "The same people double-booked across projects",
        title: "Schedule people without clashes",
        description: "A shared calendar shows who is free, who is busy and who is on leave before you assign work.",
        apps: ["planning"],
      },
      {
        problem: "Client updates scattered across email and tools",
        title: "One place for client updates",
        description: "Clients log in to a portal to see project progress, shared documents and invoices, instead of chasing email threads.",
        apps: ["project", "documents"],
      },
    ],
    recommendedApps: ["project", "timesheets", "planning", "sales", "accounting", "helpdesk", "employees"],
    image: "/images/industry-services.jpg",
  },
  {
    id: "construction",
    name: "Construction",
    tagline: "Jobsites, budgets, and materials under control",
    description:
      "Construction firms coordinate crews, materials, subcontractors, and change orders. Turbine brings project tracking, purchasing, and accounting into a single operating view.",
    solutions: [
      {
        problem: "Budget overruns discovered too late",
        title: "Job costs as they happen",
        description: "Labour, materials and subcontractor costs are tracked per job, so you see the margin while the work is still going on.",
        apps: ["project", "accounting"],
      },
      {
        problem: "Field reporting disconnected from the office",
        title: "Site and office in sync",
        description: "Crews report progress, photos and hours from their phones, and the office sees it straight away.",
        apps: ["field-service"],
      },
      {
        problem: "Material delays holding up active sites",
        title: "Materials ordered on time",
        description: "Requests from site turn into purchase orders, and every delivery is tracked against the job that needs it.",
        apps: ["purchase", "inventory"],
      },
      {
        problem: "Contracts and change orders waiting on signatures",
        title: "Sign contracts online",
        description: "Contracts, change orders and approvals are signed digitally from any device and stored with the job.",
        apps: ["sign", "documents"],
      },
    ],
    recommendedApps: ["project", "purchase", "inventory", "field-service", "accounting", "sign", "planning"],
    image: "/images/industry-construction.jpg",
  },
  {
    id: "healthcare-services",
    name: "Healthcare Services",
    tagline: "Operations that support care delivery",
    description:
      "Clinics and care organizations need reliable scheduling, inventory for supplies, and compliant financial operations. Turbine supports the business side so teams focus on patients.",
    solutions: [
      {
        problem: "Appointments and staff schedules that constantly clash",
        title: "Bookings and staff in sync",
        description: "Patients book online into free slots, and staff rosters update so appointments never clash.",
        apps: ["appointments", "planning"],
      },
      {
        problem: "Supplies tracked differently at every location",
        title: "Supplies tracked everywhere",
        description: "Every location tracks medical and office supplies the same way, with alerts before anything runs out.",
        apps: ["inventory"],
      },
      {
        problem: "Billing and expenses spread across separate systems",
        title: "Billing and expenses in one place",
        description: "Invoices, expenses and the accounts live together, so month-end reports are ready without spreadsheets.",
        apps: ["accounting", "expenses"],
      },
      {
        problem: "Staff records, leave and hours kept in different places",
        title: "One record for every staff member",
        description: "Contracts, leave and working hours sit in one employee record that HR and managers share.",
        apps: ["employees", "time-off"],
      },
    ],
    recommendedApps: ["appointments", "planning", "inventory", "accounting", "employees", "expenses", "helpdesk"],
    image: "/images/industry-healthcare.jpg",
  },
  {
    id: "hospitality",
    name: "Hospitality & Restaurants",
    tagline: "Front of house and back office in rhythm",
    description:
      "Restaurants and hospitality businesses need fast POS, inventory for perishables, and staff coordination. Turbine keeps service smooth and costs visible.",
    solutions: [
      {
        problem: "Checkout bottlenecks at peak hours",
        title: "Quick service at busy times",
        description: "A fast till that keeps working offline, with kitchen printers and card readers connected, keeps queues short.",
        apps: ["point-of-sale"],
      },
      {
        problem: "Food and supplies going to waste",
        title: "Less food waste",
        description: "Ingredients are deducted as dishes are sold, so you can see what is running low and what is being wasted.",
        apps: ["inventory", "purchase"],
      },
      {
        problem: "Shift schedules that don't match demand",
        title: "Staff rotas that match demand",
        description: "Plan shifts around your busiest hours and see who actually clocked in.",
        apps: ["planning", "attendances"],
      },
      {
        problem: "Sales and accounting that never quite reconcile",
        title: "Sales and accounts that match",
        description: "Each day's takings post straight into the accounts, so the books always match the till.",
        apps: ["point-of-sale", "accounting"],
      },
    ],
    recommendedApps: ["point-of-sale", "inventory", "purchase", "planning", "attendances", "accounting", "employees"],
    image: "/images/industry-hospitality.jpg",
  },
  {
    id: "ecommerce-brands",
    name: "eCommerce Brands",
    tagline: "Digital storefronts with operational depth",
    description:
      "DTC and online brands need more than a storefront — they need inventory, fulfillment, marketing, and finance that move together. Turbine is that backbone.",
    solutions: [
      {
        problem: "Shop, stock and operations living in separate systems",
        title: "Online shop and operations in one",
        description: "Your online store runs on the same system as stock, orders and accounts, with nothing to sync between tools.",
        apps: ["ecommerce", "website"],
      },
      {
        problem: "Orders processed by hand",
        title: "Orders that process themselves",
        description: "Paid orders reserve stock, create the packing list and send tracking details to the customer automatically.",
        apps: ["ecommerce", "inventory"],
      },
      {
        problem: "Ad, email and CRM data that don't talk to each other",
        title: "Marketing based on real orders",
        description: "Send emails and text messages based on what customers actually bought and browsed.",
        apps: ["email-marketing", "marketing-automation"],
      },
      {
        problem: "Payment flows that are hard to reconcile",
        title: "Payments that reconcile themselves",
        description: "Online payments are matched to orders and invoices automatically, so the accounts stay clean.",
        apps: ["accounting"],
      },
    ],
    recommendedApps: ["ecommerce", "website", "inventory", "sales", "email-marketing", "crm", "accounting"],
    image: "/images/industry-ecommerce.jpg",
  },
  {
    id: "education",
    name: "Education & Training",
    tagline: "Learning programs run like a business",
    description:
      "Training providers and institutions manage courses, enrollments, staff, and billing. Turbine supports the operational layer behind great learning experiences.",
    solutions: [
      {
        problem: "Course material spread across drives and email",
        title: "All courses in one place",
        description: "Put videos, documents and quizzes into online courses, track each learner's progress and issue certificates.",
        apps: ["elearning"],
      },
      {
        problem: "Enrollments and student messages handled by hand",
        title: "Easy enrolment and updates",
        description: "Students sign up online, and confirmations and reminders go out automatically.",
        apps: ["website", "events"],
      },
      {
        problem: "Billing for programs and materials done manually",
        title: "Automatic fee billing",
        description: "Course fees and recurring payments are invoiced automatically, with online payment links.",
        apps: ["subscriptions", "accounting"],
      },
      {
        problem: "Staff and room schedules that clash",
        title: "Timetables without clashes",
        description: "Plan teachers and rooms on one shared calendar that shows clashes before they happen.",
        apps: ["planning", "employees"],
      },
    ],
    recommendedApps: ["elearning", "website", "events", "planning", "subscriptions", "employees", "accounting"],
    image: "/images/industry-education.jpg",
  },
];

export function getIndustryById(id: string): Industry | undefined {
  return industries.find((i) => i.id === id);
}
