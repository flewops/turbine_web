export interface Industry {
  id: string;
  name: string;
  tagline: string;
  description: string;
  /** Each solution answers one problem the industry has. */
  solutions: { problem: string; title: string; description: string }[];
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
      { problem: "Planning and production run on disconnected systems", title: "Unified production planning", description: "BOMs, work centers, capacity, and schedules in one manufacturing app." },
      { problem: "No real-time view of what is happening on the shop floor", title: "Shop-floor execution", description: "Tablet MES views, barcodes, and IoT connections for live floor control." },
      { problem: "Quality checks done on paper, after the fact", title: "Quality embedded", description: "Control points and alerts inside manufacturing and inventory flows." },
      { problem: "Tracing a defect back to its lot or supplier takes days", title: "Traceability end to end", description: "Lots, serials, and component history from receipt to delivery." },
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
      { problem: "Quotes that miss the real cost of materials and labor", title: "Accurate quoting", description: "Sales and manufacturing data feed realistic quotes and margins." },
      { problem: "Custom BOMs and engineering changes mid-job", title: "Job-based production", description: "Track each fabrication job from materials through finishing." },
      { problem: "Machine downtime that arrives without warning", title: "Maintenance awareness", description: "Preventive schedules keep critical equipment available." },
      { problem: "Key metals running out in the middle of a job", title: "Material control", description: "Inventory and purchase apps prevent stockouts on key metals." },
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
      { problem: "Slow checkout and long queues at peak times", title: "Unified POS", description: "Fast checkout with offline mode and hardware support." },
      { problem: "Stock counts you can never quite trust", title: "Real-time inventory", description: "Know what is on the shelf and in the warehouse instantly." },
      { problem: "Online and in-store stock that don't match", title: "Connected eCommerce", description: "Online orders consume the same stock truth as stores." },
      { problem: "Loyalty and customer data scattered across tools", title: "Customer loyalty", description: "CRM and POS work together to reward repeat buyers." },
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
      { problem: "Reordering by guesswork while vendor lead times vary", title: "Smart replenishment", description: "Automate POs based on demand and stock rules." },
      { problem: "Complex multi-warehouse picking and shipping", title: "Warehouse efficiency", description: "Advanced picking strategies and carrier integrations." },
      { problem: "Margin leaking away on high-volume orders", title: "Sales & pricing control", description: "Quotes, pricelists, and portals for B2B customers." },
      { problem: "Slow order-to-cash cycles", title: "Cash acceleration", description: "Invoicing and follow-ups tied directly to deliveries." },
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
      { problem: "Scope creep you only discover at the end", title: "Project clarity", description: "Tasks, milestones, and profitability in one view." },
      { problem: "Billable time that never makes it onto an invoice", title: "Timesheet discipline", description: "Hours captured and billed without spreadsheet exports." },
      { problem: "The same people double-booked across projects", title: "Resource planning", description: "Schedule people based on real capacity." },
      { problem: "Client updates scattered across email and tools", title: "Client portals", description: "Share updates, documents, and invoices transparently." },
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
      { problem: "Budget overruns discovered too late", title: "Project cost tracking", description: "See labor, materials, and margins as work progresses." },
      { problem: "Field reporting disconnected from the office", title: "Field service coordination", description: "Dispatch teams and capture on-site progress." },
      { problem: "Material delays holding up active sites", title: "Purchase control", description: "RFQs and vendor management tied to job needs." },
      { problem: "Contracts and change orders waiting on signatures", title: "Document & sign-off", description: "Contracts, change orders, and approvals digitally handled." },
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
      { problem: "Appointments and staff schedules that constantly clash", title: "Appointments & planning", description: "Coordinate patient-facing and internal schedules." },
      { problem: "Supplies tracked differently at every location", title: "Supply inventory", description: "Track medical and office supplies with alerts." },
      { problem: "Billing and expenses spread across separate systems", title: "Finance discipline", description: "Invoicing, expenses, and accounting in one stack." },
      { problem: "Staff records, leave and hours kept in different places", title: "People operations", description: "HR apps for staff records, time off, and attendance." },
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
      { problem: "Checkout bottlenecks at peak hours", title: "High-speed POS", description: "Offline-capable checkout with hardware integrations." },
      { problem: "Food and supplies going to waste", title: "Inventory awareness", description: "Track ingredients and supplies against sales." },
      { problem: "Shift schedules that don't match demand", title: "Workforce planning", description: "Schedules and attendance aligned with demand." },
      { problem: "Sales and accounting that never quite reconcile", title: "Daily financial clarity", description: "Sales post cleanly into accounting." },
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
      { problem: "Shop, stock and operations living in separate systems", title: "Integrated storefront", description: "Website and eCommerce built on the same platform as ops." },
      { problem: "Orders processed by hand", title: "Fulfillment sync", description: "Orders reduce inventory and trigger warehouse flows." },
      { problem: "Ad, email and CRM data that don't talk to each other", title: "Lifecycle marketing", description: "Email, SMS, and automation on live customer data." },
      { problem: "Payment flows that are hard to reconcile", title: "Clean finance", description: "Invoices, payments, and accounting stay reconciled." },
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
      { problem: "Course material spread across drives and email", title: "eLearning delivery", description: "Courses, progress tracking, and certifications." },
      { problem: "Enrollments and student messages handled by hand", title: "Enrollment operations", description: "Manage participants, schedules, and communications." },
      { problem: "Billing for programs and materials done manually", title: "Commercial clarity", description: "Invoicing and subscriptions for paid programs." },
      { problem: "Staff and room schedules that clash", title: "Team coordination", description: "Planning and HR tools for faculty and staff." },
    ],
    recommendedApps: ["elearning", "website", "events", "planning", "subscriptions", "employees", "accounting"],
    image: "/images/industry-education.jpg",
  },
];

export function getIndustryById(id: string): Industry | undefined {
  return industries.find((i) => i.id === id);
}
