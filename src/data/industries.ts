export interface Industry {
  id: string;
  name: string;
  tagline: string;
  description: string;
  challenges: string[];
  solutions: { title: string; description: string }[];
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
    challenges: [
      "Disconnected planning and production systems",
      "Limited real-time visibility on the shop floor",
      "Manual quality checks and traceability gaps",
      "Inventory surprises that delay orders",
    ],
    solutions: [
      { title: "Unified production planning", description: "BOMs, work centers, capacity, and schedules in one manufacturing app." },
      { title: "Shop-floor execution", description: "Tablet MES views, barcodes, and IoT connections for live floor control." },
      { title: "Quality embedded", description: "Control points and alerts inside manufacturing and inventory flows." },
      { title: "Traceability end to end", description: "Lots, serials, and component history from receipt to delivery." },
    ],
    recommendedApps: ["manufacturing", "inventory", "quality", "plm", "mes", "purchase", "maintenance", "accounting"],
    image: "/images/industry-manufacturing.jpg",
  },
  {
    id: "metal-fabricator",
    name: "Metal Fabrication",
    tagline: "Cut, weld, finish — with full job cost clarity",
    description:
      "Metal fabricators juggle custom jobs, material yields, machine time, and tight delivery windows. Turbine gives estimators, planners, and floor teams a shared system of record.",
    challenges: [
      "Complex job costing across materials and labor",
      "Custom BOMs and engineering changes mid-job",
      "Machine downtime and maintenance surprises",
      "Quote-to-production handoff errors",
    ],
    solutions: [
      { title: "Accurate quoting", description: "Sales and manufacturing data feed realistic quotes and margins." },
      { title: "Job-based production", description: "Track each fabrication job from materials through finishing." },
      { title: "Maintenance awareness", description: "Preventive schedules keep critical equipment available." },
      { title: "Material control", description: "Inventory and purchase apps prevent stockouts on key metals." },
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
    challenges: [
      "Stock mismatches between stores and online",
      "Slow checkout experiences",
      "Fragmented loyalty and customer data",
      "Manual reconciliation of daily sales",
    ],
    solutions: [
      { title: "Unified POS", description: "Fast checkout with offline mode and hardware support." },
      { title: "Real-time inventory", description: "Know what is on the shelf and in the warehouse instantly." },
      { title: "Connected eCommerce", description: "Online orders consume the same stock truth as stores." },
      { title: "Customer loyalty", description: "CRM and POS work together to reward repeat buyers." },
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
    challenges: [
      "Complex multi-warehouse operations",
      "Vendor lead-time variability",
      "Margin leakage on high-volume orders",
      "Slow order-to-cash cycles",
    ],
    solutions: [
      { title: "Smart replenishment", description: "Automate POs based on demand and stock rules." },
      { title: "Warehouse efficiency", description: "Advanced picking strategies and carrier integrations." },
      { title: "Sales & pricing control", description: "Quotes, pricelists, and portals for B2B customers." },
      { title: "Cash acceleration", description: "Invoicing and follow-ups tied directly to deliveries." },
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
    challenges: [
      "Unbilled time and scope creep",
      "Resource conflicts across projects",
      "Client communication scattered across tools",
      "Weak link between delivery and finance",
    ],
    solutions: [
      { title: "Project clarity", description: "Tasks, milestones, and profitability in one view." },
      { title: "Timesheet discipline", description: "Hours captured and billed without spreadsheet exports." },
      { title: "Resource planning", description: "Schedule people based on real capacity." },
      { title: "Client portals", description: "Share updates, documents, and invoices transparently." },
    ],
    recommendedApps: ["project", "timesheets", "planning", "sales", "invoicing", "helpdesk", "employees"],
    image: "/images/industry-services.jpg",
  },
  {
    id: "construction",
    name: "Construction",
    tagline: "Jobsites, budgets, and materials under control",
    description:
      "Construction firms coordinate crews, materials, subcontractors, and change orders. Turbine brings project tracking, purchasing, and accounting into a single operating view.",
    challenges: [
      "Budget overruns discovered too late",
      "Material delays on active sites",
      "Field reporting disconnected from office",
      "Complex vendor and subcontractor coordination",
    ],
    solutions: [
      { title: "Project cost tracking", description: "See labor, materials, and margins as work progresses." },
      { title: "Field service coordination", description: "Dispatch teams and capture on-site progress." },
      { title: "Purchase control", description: "RFQs and vendor management tied to job needs." },
      { title: "Document & sign-off", description: "Contracts, change orders, and approvals digitally handled." },
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
    challenges: [
      "Appointment and staff scheduling complexity",
      "Supply tracking across locations",
      "Fragmented billing and expenses",
      "Limited operational reporting",
    ],
    solutions: [
      { title: "Appointments & planning", description: "Coordinate patient-facing and internal schedules." },
      { title: "Supply inventory", description: "Track medical and office supplies with alerts." },
      { title: "Finance discipline", description: "Invoicing, expenses, and accounting in one stack." },
      { title: "People operations", description: "HR apps for staff records, time off, and attendance." },
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
    challenges: [
      "Peak-hour checkout bottlenecks",
      "Food and supply waste",
      "Staff scheduling friction",
      "Disconnected sales and accounting",
    ],
    solutions: [
      { title: "High-speed POS", description: "Offline-capable checkout with hardware integrations." },
      { title: "Inventory awareness", description: "Track ingredients and supplies against sales." },
      { title: "Workforce planning", description: "Schedules and attendance aligned with demand." },
      { title: "Daily financial clarity", description: "Sales post cleanly into accounting." },
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
    challenges: [
      "Stockouts after marketing spikes",
      "Manual order processing",
      "Disconnected ad, email, and CRM data",
      "Hard-to-reconcile payment flows",
    ],
    solutions: [
      { title: "Integrated storefront", description: "Website and eCommerce built on the same platform as ops." },
      { title: "Fulfillment sync", description: "Orders reduce inventory and trigger warehouse flows." },
      { title: "Lifecycle marketing", description: "Email, SMS, and automation on live customer data." },
      { title: "Clean finance", description: "Invoices, payments, and accounting stay reconciled." },
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
    challenges: [
      "Course and enrollment administration overhead",
      "Fragmented student communication",
      "Billing for programs and materials",
      "Staff and resource scheduling",
    ],
    solutions: [
      { title: "eLearning delivery", description: "Courses, progress tracking, and certifications." },
      { title: "Enrollment operations", description: "Manage participants, schedules, and communications." },
      { title: "Commercial clarity", description: "Invoicing and subscriptions for paid programs." },
      { title: "Team coordination", description: "Planning and HR tools for faculty and staff." },
    ],
    recommendedApps: ["elearning", "website", "events", "planning", "invoicing", "employees", "accounting"],
    image: "/images/industry-education.jpg",
  },
];

export function getIndustryById(id: string): Industry | undefined {
  return industries.find((i) => i.id === id);
}
