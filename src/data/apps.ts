export type AppCategory =
  | "finance"
  | "sales"
  | "supply-chain"
  | "websites"
  | "human-resources"
  | "marketing"
  | "services"
  | "productivity";

export interface AppFeature {
  title: string;
  description: string;
}

export interface App {
  id: string;
  name: string;
  category: AppCategory;
  tagline: string;
  description: string;
  features: AppFeature[];
  icon: string;
  color: string;
}

export const categories: {
  id: AppCategory;
  name: string;
  description: string;
}[] = [
  {
    id: "finance",
    name: "Finance",
    description:
      "Accounting, invoicing, expenses, and live financial intelligence — all connected to the rest of your business.",
  },
  {
    id: "sales",
    name: "Sales",
    description:
      "From first lead to recurring revenue — CRM, quotes, POS, rentals, and subscriptions in one flow.",
  },
  {
    id: "supply-chain",
    name: "Supply Chain",
    description:
      "Inventory, manufacturing, purchasing, quality, maintenance, PLM, and MES working as one system.",
  },
  {
    id: "websites",
    name: "Websites",
    description:
      "Build your web presence, sell online, chat with visitors, and run eLearning — without extra tools.",
  },
  {
    id: "human-resources",
    name: "Human Resources",
    description:
      "Employees, recruitment, time off, payroll, appraisals, and fleet — the full people stack.",
  },
  {
    id: "marketing",
    name: "Marketing",
    description:
      "Email, SMS, social, automation, events, and surveys to attract and nurture customers.",
  },
  {
    id: "services",
    name: "Services",
    description:
      "Projects, timesheets, helpdesk, field service, and planning for delivery teams that ship.",
  },
  {
    id: "productivity",
    name: "Productivity",
    description:
      "Documents, e-sign, chat, knowledge, appointments, WhatsApp, and Studio customization.",
  },
];

export const apps: App[] = [
  // Finance
  {
    id: "accounting",
    name: "Accounting",
    category: "finance",
    tagline: "Books that update themselves",
    description:
      "Manage finances on the go with automatic data entry, bank synchronization, and real-time reporting so decisions stay grounded in live numbers.",
    icon: "Calculator",
    color: "bg-primary",
    features: [
      { title: "Reduced manual entry", description: "AI-assisted bill digitization, bank feeds, and reconciliation models cut busywork." },
      { title: "Worldwide compatibility", description: "Taxes, charts of accounts, and reports preconfigured for local regulations." },
      { title: "Real-time reporting", description: "Instant financial performance views for faster, clearer decisions." },
      { title: "Automated follow-ups", description: "Spot overdue payments and send reminders so cash comes in sooner." },
      { title: "Deferrals", description: "Spread revenue and expense recognition for an accurate financial picture." },
      { title: "Electronic invoicing", description: "Send and receive e-invoices across common formats and standards." },
    ],
  },
  {
    id: "expenses",
    name: "Expenses",
    category: "finance",
    tagline: "Claims without the paperwork chase",
    description:
      "Submit, approve, and reimburse expenses with one-click approvals and automatic accounting integration.",
    icon: "Receipt",
    color: "bg-primary",
    features: [
      { title: "Faster reporting", description: "Submit via desktop, mobile, or by emailing receipts directly into Turbine." },
      { title: "Streamlined approvals", description: "Group expenses into reports for one-click manager approval." },
      { title: "Automatic integration", description: "Journal entries and reimbursements flow into Accounting automatically." },
      { title: "Mileage tracking", description: "Start/stop mileage tracking for accurate, simple expense reports." },
    ],
  },
  {
    id: "spreadsheet",
    name: "Spreadsheet",
    category: "finance",
    tagline: "Live data, not stale exports",
    description:
      "Connect spreadsheets to your business apps for real-time updates, collaboration, and charts that reflect the truth.",
    icon: "Table",
    color: "bg-primary",
    features: [
      { title: "Data integration", description: "Pull live data from Turbine apps — no manual copy-paste." },
      { title: "Visualization", description: "Charts and graphs that make trends obvious at a glance." },
      { title: "Real-time collaboration", description: "Share and edit with colleagues without version chaos." },
      { title: "Formulas & filters", description: "Powerful calculations plus sorting and filtering for deep analysis." },
    ],
  },
  // Sales
  {
    id: "crm",
    name: "CRM",
    category: "sales",
    tagline: "Pipeline clarity that closes deals",
    description:
      "Visual pipelines, quick quotes, mobile access, and unified communication to keep every opportunity moving.",
    icon: "HeartHandshake",
    color: "bg-primary",
    features: [
      { title: "Visual sales pipeline", description: "Drag-and-drop deal tracking with real-time insights." },
      { title: "Quick quote generation", description: "Professional quotes in minutes, converted to orders in one click." },
      { title: "Mobile CRM", description: "Manage opportunities and customer data from anywhere." },
      { title: "Task automation", description: "Automate repetitive follow-ups so your team sells more." },
      { title: "Data-driven forecasts", description: "Performance analysis and forecasting for smarter prioritization." },
      { title: "Unified communication", description: "Email, chat, SMS, and VoIP tools in one conversation stream." },
    ],
  },
  {
    id: "sales",
    name: "Sales",
    category: "sales",
    tagline: "From quote to cash, end to end",
    description:
      "Close more deals with professional quotes, order management, customer portals, and integrated eCommerce flows.",
    icon: "ShoppingCart",
    color: "bg-primary",
    features: [
      { title: "Centralized view", description: "Sales orders, customer service, and eCommerce in one place." },
      { title: "Automate orders", description: "Quotation templates with accurate tax and pricing." },
      { title: "Customer portal", description: "Customers access quotes, orders, payments, and e-signatures." },
      { title: "Lead tracking", description: "Capture and score leads across channels with intelligent prioritization." },
    ],
  },
  {
    id: "point-of-sale",
    name: "Point of Sale",
    category: "sales",
    tagline: "Checkout that never slows down",
    description:
      "Barcode-ready POS with hardware integration and offline mode for uninterrupted retail and hospitality sales.",
    icon: "Store",
    color: "bg-primary",
    features: [
      { title: "Easy to use", description: "Intuitive setup for teams with limited technical experience." },
      { title: "Works offline", description: "Keep selling even when connectivity drops." },
      { title: "Hardware integration", description: "Barcode scanners, scales, and payment terminals supported." },
      { title: "Loyalty programs", description: "Reward repeat customers and grow retention." },
      { title: "Multi-device", description: "Tablets, laptops, desktops, and industrial devices." },
    ],
  },
  {
    id: "rental",
    name: "Rental",
    category: "sales",
    tagline: "Reservations without the spreadsheet mess",
    description:
      "Manage listings, reservations, pickups, and invoicing for rental businesses on one connected platform.",
    icon: "KeyRound",
    color: "bg-primary",
    features: [
      { title: "Streamlined rentals", description: "Listings, reservations, pickups, and invoices in one flow." },
      { title: "Flexible pricing", description: "Define durations and pricing models that match your catalog." },
      { title: "Online booking", description: "Integrate with eCommerce for browsing and reserving online." },
    ],
  },
  {
    id: "subscriptions",
    name: "Subscriptions",
    category: "sales",
    tagline: "Recurring revenue on autopilot",
    description:
      "Automate renewals, plan tiers, invoicing, and retention metrics for subscription-based businesses.",
    icon: "RefreshCw",
    color: "bg-primary",
    features: [
      { title: "Automated recurring revenue", description: "Manage subscriptions and billing without manual cycles." },
      { title: "Flexible plans", description: "Create tiers with different features and pricing." },
      { title: "Streamlined invoicing", description: "Auto-generate invoices on renewal." },
      { title: "Retention metrics", description: "Track MRR, churn, and customer subscription health." },
    ],
  },
  // Supply Chain
  {
    id: "inventory",
    name: "Inventory",
    category: "supply-chain",
    tagline: "Stock you can trust in real time",
    description:
      "Real-time tracking, automated replenishment, multi-warehouse visibility, and barcode-driven operations.",
    icon: "Boxes",
    color: "bg-primary",
    features: [
      { title: "Replenishment automation", description: "Min-max, MTO, and MPS strategies with vendor follow-ups." },
      { title: "Storage optimization", description: "Push/pull rules, routes, and put-away strategies including ABC analysis." },
      { title: "Real-time inventory", description: "Track lots, serials, and packaging across warehouses." },
      { title: "Picking & packing", description: "Single, cluster, wave, or batch picking with carrier integrations." },
      { title: "Repair integration", description: "Handle damaged products with connected repair workflows." },
    ],
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    category: "supply-chain",
    tagline: "Plan, produce, and improve on the floor",
    description:
      "Capacity planning, BOMs, work centers, shop-floor tablets, and barcode tracing for efficient production.",
    icon: "Factory",
    color: "bg-primary",
    features: [
      { title: "Production planning", description: "Orders, BOMs, and work centers scheduled and tracked end to end." },
      { title: "Shop floor control", description: "Tablet app for work instructions, quality issues, and maintenance requests." },
      { title: "Inventory linked", description: "Raw materials and finished goods stay in sync automatically." },
      { title: "Reporting", description: "Spot bottlenecks and measure performance with clear production reports." },
      { title: "Barcode & IoT", description: "Trace components and connect external devices with ease." },
    ],
  },
  {
    id: "purchase",
    name: "Purchase",
    category: "supply-chain",
    tagline: "Procurement that stays ahead of demand",
    description:
      "Automated RFQs, vendor comparison, agreements, and billing tied directly to inventory levels.",
    icon: "Truck",
    color: "bg-primary",
    features: [
      { title: "Optimize purchases", description: "Custom agreements, quote comparison, and recurring order automation." },
      { title: "Order management", description: "Track requests, orders, and invoices from draft to receipt." },
      { title: "Vendor performance", description: "Launch tenders and analyze vendor reliability." },
      { title: "Stock-aware buying", description: "Auto-generate POs when inventory hits thresholds." },
      { title: "Flexible billing", description: "Bill on ordered or received quantities with split options." },
    ],
  },
  {
    id: "maintenance",
    name: "Maintenance",
    category: "supply-chain",
    tagline: "Keep assets productive longer",
    description:
      "Preventive scheduling, work orders, equipment tracking, and KPI reporting to improve OEE.",
    icon: "Wrench",
    color: "bg-primary",
    features: [
      { title: "Preventive scheduling", description: "Predict failures using MTBF/MTTR and schedule ahead." },
      { title: "Work order management", description: "Create work orders and material requisitions from requests." },
      { title: "Team collaboration", description: "Kanban boards, calendars, and mobile access for maintenance teams." },
      { title: "KPI reporting", description: "Measure and optimize maintenance practices over time." },
    ],
  },
  {
    id: "quality",
    name: "Quality",
    category: "supply-chain",
    tagline: "Quality checks built into the flow",
    description:
      "Configurable checks on manufacturing and inventory, alerts for defects, and actionable corrective workflows.",
    icon: "ShieldCheck",
    color: "bg-primary",
    features: [
      { title: "Control points", description: "Trigger inspections at key production and inventory stages." },
      { title: "Quality alerts", description: "Prioritize potential issues by urgency and route them fast." },
      { title: "Quality teams", description: "Assign dedicated teams for products or operations." },
      { title: "Trend reporting", description: "Analyze checks, root causes, and overall quality trends." },
    ],
  },
  {
    id: "plm",
    name: "PLM",
    category: "supply-chain",
    tagline: "Engineering changes without chaos",
    description:
      "Version control, BOM management, and engineering change workflows that align design with production.",
    icon: "GitBranch",
    color: "bg-primary",
    features: [
      { title: "Version control", description: "Manage revisions of designs and related documents." },
      { title: "BOM management", description: "Track changes and keep bills of materials accurate." },
      { title: "Cross-team collaboration", description: "Real-time discussions and notifications across departments." },
      { title: "Change management", description: "Streamline approvals and impact tracking on BOMs." },
    ],
  },
 
  // Websites
  {
    id: "website",
    name: "Website",
    category: "websites",
    tagline: "A professional site without the agency wait",
    description:
      "Build and manage a responsive website with SEO tools, templates, and media management — no coding required.",
    icon: "Globe",
    color: "bg-primary",
    features: [
      { title: "Drag-and-drop building", description: "Create pages quickly with an intuitive visual editor." },
      { title: "SEO tools", description: "Improve visibility and convert more visitors." },
      { title: "Mobile-friendly", description: "Responsive layouts that look sharp on every device." },
      { title: "Templates", description: "Start from polished designs tailored to your industry." },
    ],
  },
  {
    id: "ecommerce",
    name: "eCommerce",
    category: "websites",
    tagline: "Sell online with backend already connected",
    description:
      "Launch an online store integrated with inventory, accounting, and fulfillment — so orders never fall through cracks.",
    icon: "ShoppingBag",
    color: "bg-primary",
    features: [
      { title: "Catalog & cart", description: "Product pages, variants, and smooth checkout experiences." },
      { title: "Inventory sync", description: "Stock levels update automatically across channels." },
      { title: "Payment options", description: "Accept popular online payment methods securely." },
      { title: "Order automation", description: "Orders flow into sales, inventory, and accounting instantly." },
    ],
  },
  {
    id: "live-chat",
    name: "Live Chat",
    category: "websites",
    tagline: "Talk to visitors while intent is high",
    description:
      "Engage website visitors in real time, qualify leads, and hand off conversations to the right team.",
    icon: "MessageCircle",
    color: "bg-primary",
    features: [
      { title: "Real-time engagement", description: "Chat with visitors the moment they need help." },
      { title: "Lead capture", description: "Convert conversations into CRM opportunities." },
      { title: "Team routing", description: "Send chats to the right agents automatically." },
    ],
  },
  {
    id: "elearning",
    name: "eLearning",
    category: "websites",
    tagline: "Train customers and teams at scale",
    description:
      "Create courses, track progress, and deliver learning experiences tied to your broader business platform.",
    icon: "GraduationCap",
    color: "bg-primary",
    features: [
      { title: "Course builder", description: "Structure modules, lessons, and assessments easily." },
      { title: "Progress tracking", description: "See who completed what and where learners stall." },
      { title: "Certification", description: "Issue certificates and prove competency." },
    ],
  },
  // HR
  {
    id: "employees",
    name: "Employees",
    category: "human-resources",
    tagline: "Your people directory, always current",
    description:
      "Centralize employee records, org structure, and profiles so HR and managers always have the full picture.",
    icon: "Users",
    color: "bg-primary",
    features: [
      { title: "Centralized profiles", description: "Contracts, skills, documents, and history in one record." },
      { title: "Org chart clarity", description: "Visualize structure and reporting lines." },
      { title: "Self-service", description: "Employees update personal info without ticket chaos." },
    ],
  },
  {
    id: "recruitment",
    name: "Recruitment",
    category: "human-resources",
    tagline: "Hire with a pipeline, not a pile of resumes",
    description:
      "Publish openings, track applicants, schedule interviews, and collaborate on hiring decisions.",
    icon: "UserPlus",
    color: "bg-primary",
    features: [
      { title: "Applicant pipeline", description: "Kanban-style stages from application to offer." },
      { title: "Job board publishing", description: "Share openings and collect applications in one place." },
      { title: "Interview collaboration", description: "Notes and feedback shared across hiring teams." },
    ],
  },
  {
    id: "time-off",
    name: "Time Off",
    category: "human-resources",
    tagline: "Leave requests without email threads",
    description:
      "Request, approve, and balance time off with clear policies and calendars for the whole team.",
    icon: "Palmtree",
    color: "bg-primary",
    features: [
      { title: "Simple requests", description: "Employees submit leave in seconds." },
      { title: "Approval flows", description: "Managers approve with full balance visibility." },
      { title: "Team calendars", description: "Plan coverage with shared leave visibility." },
    ],
  },
  {
    id: "payroll",
    name: "Payroll",
    category: "human-resources",
    tagline: "Payroll connected to the rest of work",
    description:
      "Run payroll with inputs from attendance, time off, and expenses — then post cleanly into accounting.",
    icon: "Wallet",
    color: "bg-primary",
    features: [
      { title: "Integrated inputs", description: "Pull time, leave, and expense data automatically." },
      { title: "Accurate payslips", description: "Generate compliant payslips with transparent calculations." },
      { title: "Accounting sync", description: "Post payroll entries without re-keying." },
    ],
  },
  {
    id: "appraisals",
    name: "Appraisals",
    category: "human-resources",
    tagline: "Performance conversations that stick",
    description:
      "Structure reviews, gather feedback, and track goals so performance management becomes continuous.",
    icon: "Star",
    color: "bg-primary",
    features: [
      { title: "Review cycles", description: "Schedule and manage appraisal periods cleanly." },
      { title: "Feedback collection", description: "Gather input from managers and peers." },
      { title: "Goal tracking", description: "Align objectives with measurable outcomes." },
    ],
  },
  {
    id: "referrals",
    name: "Referrals",
    category: "human-resources",
    tagline: "Turn your team into talent scouts",
    description:
      "Run employee referral programs with visibility into rewards, status, and hiring impact.",
    icon: "Share2",
    color: "bg-primary",
    features: [
      { title: "Referral tracking", description: "See who referred whom and where candidates are." },
      { title: "Reward management", description: "Configure and track referral incentives." },
    ],
  },
  {
    id: "approvals",
    name: "Approvals",
    category: "human-resources",
    tagline: "Decisions without the inbox bottleneck",
    description:
      "Route requests for purchases, expenses, time, and more through configurable approval workflows.",
    icon: "CheckCircle",
    color: "bg-primary",
    features: [
      { title: "Configurable workflows", description: "Define who approves what and when." },
      { title: "Audit trail", description: "Know exactly who approved and when." },
      { title: "Cross-app use", description: "Works across expenses, purchases, and internal requests." },
    ],
  },
  {
    id: "attendances",
    name: "Attendances",
    category: "human-resources",
    tagline: "Know who is in — accurately",
    description:
      "Track check-ins and working hours with simple tools that feed payroll and planning.",
    icon: "Clock",
    color: "bg-primary",
    features: [
      { title: "Easy check-in", description: "Employees clock in from kiosk, mobile, or desktop." },
      { title: "Hours visibility", description: "Managers see attendance patterns instantly." },
      { title: "Payroll ready", description: "Hours flow into payroll without spreadsheet exports." },
    ],
  },
  {
    id: "fleet",
    name: "Fleet",
    category: "human-resources",
    tagline: "Vehicles managed like any other asset",
    description:
      "Track company vehicles, assignments, costs, and service schedules from one dashboard.",
    icon: "Car",
    color: "bg-primary",
    features: [
      { title: "Vehicle registry", description: "Central records for every company vehicle." },
      { title: "Assignment tracking", description: "Know who is driving what and when." },
      { title: "Cost & service logs", description: "Monitor expenses and maintenance schedules." },
    ],
  },
  // Marketing
  {
    id: "email-marketing",
    name: "Email Marketing",
    category: "marketing",
    tagline: "Campaigns that connect to CRM reality",
    description:
      "Design, send, and measure email campaigns with audiences drawn from your live customer data.",
    icon: "Mail",
    color: "bg-primary",
    features: [
      { title: "Visual campaign builder", description: "Create emails without wrestling with HTML." },
      { title: "Segmented audiences", description: "Target lists based on real CRM and sales data." },
      { title: "Performance metrics", description: "Opens, clicks, and conversions tied to opportunities." },
    ],
  },
  {
    id: "sms-marketing",
    name: "SMS Marketing",
    category: "marketing",
    tagline: "Reach customers where they look first",
    description:
      "Send targeted SMS campaigns and transactional messages with tracking and list management.",
    icon: "Smartphone",
    color: "bg-primary",
    features: [
      { title: "Bulk & targeted SMS", description: "Reach the right segments at the right moment." },
      { title: "Delivery tracking", description: "Monitor send status and engagement." },
    ],
  },
  {
    id: "social-marketing",
    name: "Social Marketing",
    category: "marketing",
    tagline: "Plan social without tab overload",
    description:
      "Schedule posts, manage channels, and review engagement from a single marketing workspace.",
    icon: "Share",
    color: "bg-primary",
    features: [
      { title: "Multi-channel posting", description: "Plan content across major social platforms." },
      { title: "Content calendar", description: "See what goes out and when." },
      { title: "Engagement insights", description: "Understand what resonates with your audience." },
    ],
  },
  {
    id: "marketing-automation",
    name: "Marketing Automation",
    category: "marketing",
    tagline: "Nurture leads while you sleep",
    description:
      "Build automated journeys that respond to behavior and move prospects through your funnel.",
    icon: "Workflow",
    color: "bg-primary",
    features: [
      { title: "Visual workflows", description: "Design multi-step campaigns with clear logic." },
      { title: "Behavior triggers", description: "React to opens, clicks, purchases, and more." },
      { title: "CRM alignment", description: "Keep sales informed as leads progress." },
    ],
  },
  {
    id: "events",
    name: "Events",
    category: "marketing",
    tagline: "From registration to follow-up",
    description:
      "Plan events, manage attendees, track tickets, and convert participants into opportunities.",
    icon: "CalendarDays",
    color: "bg-primary",
    features: [
      { title: "Registration & tickets", description: "Sell or manage event access with ease." },
      { title: "Attendee management", description: "Track who is coming and communicate updates." },
      { title: "Post-event follow-up", description: "Turn attendees into pipeline automatically." },
    ],
  },
  {
    id: "surveys",
    name: "Surveys",
    category: "marketing",
    tagline: "Feedback you can act on",
    description:
      "Create surveys and questionnaires to capture customer and employee insights.",
    icon: "ClipboardList",
    color: "bg-primary",
    features: [
      { title: "Flexible forms", description: "Build surveys with multiple question types." },
      { title: "Response analysis", description: "Visualize results and spot patterns quickly." },
      { title: "Embedded distribution", description: "Share via email, website, or direct links." },
    ],
  },
  // Services
  {
    id: "project",
    name: "Project",
    category: "services",
    tagline: "Delivery you can see and steer",
    description:
      "Plan projects with tasks, milestones, and profitability views tied to timesheets and billing.",
    icon: "Kanban",
    color: "bg-primary",
    features: [
      { title: "Task management", description: "Kanban, list, and Gantt views for every project style." },
      { title: "Milestones & deadlines", description: "Keep scope and timelines visible." },
      { title: "Profitability", description: "Connect time, costs, and invoices to project outcomes." },
    ],
  },
  {
    id: "timesheets",
    name: "Timesheets",
    category: "services",
    tagline: "Time that bills itself",
    description:
      "Track time against projects and tasks, then push hours into invoicing without re-entry.",
    icon: "Timer",
    color: "bg-primary",
    features: [
      { title: "Simple time entry", description: "Log hours from desktop or mobile in seconds." },
      { title: "Project linkage", description: "Every hour attaches to the right task and client." },
      { title: "Billing integration", description: "Billable time becomes invoices automatically." },
    ],
  },
  {
    id: "helpdesk",
    name: "Helpdesk",
    category: "services",
    tagline: "Support tickets under control",
    description:
      "Manage customer issues with SLAs, teams, and knowledge base connections for faster resolution.",
    icon: "Headset",
    color: "bg-primary",
    features: [
      { title: "Ticket pipelines", description: "Organize issues by stage, priority, and team." },
      { title: "SLA tracking", description: "Meet response and resolution commitments." },
      { title: "Knowledge links", description: "Resolve faster with internal documentation." },
    ],
  },
  {
    id: "field-service",
    name: "Field Service",
    category: "services",
    tagline: "On-site work planned and proven",
    description:
      "Schedule technicians, track on-site interventions, and invoice work the moment it is done.",
    icon: "MapPin",
    color: "bg-primary",
    features: [
      { title: "Dispatch planning", description: "Assign the right technician at the right time." },
      { title: "On-site worksheets", description: "Capture work performed and customer signatures." },
      { title: "Instant invoicing", description: "Bill completed interventions without delay." },
    ],
  },
  {
    id: "planning",
    name: "Planning",
    category: "services",
    tagline: "Schedules that respect capacity",
    description:
      "Plan shifts and resource allocation with visibility into availability across teams.",
    icon: "Calendar",
    color: "bg-primary",
    features: [
      { title: "Resource scheduling", description: "Allocate people to projects and shifts visually." },
      { title: "Capacity awareness", description: "Avoid overbooking with clear availability." },
      { title: "Team visibility", description: "Everyone sees the plan that matters to them." },
    ],
  },
  // Productivity
  {
    id: "documents",
    name: "Documents",
    category: "productivity",
    tagline: "Files where work already happens",
    description:
      "Store, organize, and share documents with workflows connected to the rest of Turbine.",
    icon: "FolderOpen",
    color: "bg-primary",
    features: [
      { title: "Central repository", description: "Keep business files organized and searchable." },
      { title: "Workflow actions", description: "Route documents for review and approval." },
      { title: "Linked records", description: "Attach files to customers, projects, and products." },
    ],
  },
  {
    id: "sign",
    name: "Sign",
    category: "productivity",
    tagline: "Signatures without the courier",
    description:
      "Send documents for electronic signature and track status until every party has signed.",
    icon: "PenLine",
    color: "bg-primary",
    features: [
      { title: "E-signature requests", description: "Send contracts and forms for secure signing." },
      { title: "Status tracking", description: "Know who signed and who still needs to." },
      { title: "Template reuse", description: "Standardize recurring agreements." },
    ],
  },
  {
    id: "discuss",
    name: "Discuss",
    category: "productivity",
    tagline: "Chat next to the work itself",
    description:
      "Team messaging linked to records so conversations stay in context — not lost in a side app.",
    icon: "MessagesSquare",
    color: "bg-primary",
    features: [
      { title: "Contextual chat", description: "Discuss on orders, tickets, and projects directly." },
      { title: "Channels & DMs", description: "Team spaces and private conversations." },
      { title: "Mentions & alerts", description: "Pull the right people in at the right time." },
    ],
  },
  {
    id: "knowledge",
    name: "Knowledge",
    category: "productivity",
    tagline: "Company brain, searchable",
    description:
      "Build an internal knowledge base so answers live in one place instead of tribal memory.",
    icon: "BookOpen",
    color: "bg-primary",
    features: [
      { title: "Article library", description: "Document processes, FAQs, and how-tos." },
      { title: "Searchable content", description: "Find answers in seconds." },
      { title: "Team contribution", description: "Let experts share knowledge as they work." },
    ],
  },
  {
    id: "appointments",
    name: "Appointments",
    category: "productivity",
    tagline: "Booking without the back-and-forth",
    description:
      "Let customers and colleagues book time on your calendar with rules you control.",
    icon: "CalendarCheck",
    color: "bg-primary",
    features: [
      { title: "Self-serve booking", description: "Share links that respect your availability." },
      { title: "Reminders", description: "Reduce no-shows with automatic notifications." },
      { title: "Calendar sync", description: "Stay aligned with existing schedules." },
    ],
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    category: "productivity",
    tagline: "Meet customers on their favorite app",
    description:
      "Connect WhatsApp conversations to your business records for sales and support continuity.",
    icon: "Phone",
    color: "bg-primary",
    features: [
      { title: "Business messaging", description: "Handle WhatsApp chats from inside Turbine." },
      { title: "Record linkage", description: "Attach conversations to contacts and tickets." },
      { title: "Team collaboration", description: "Share context so any agent can respond." },
    ],
  },
  
];

export function getAppById(id: string): App | undefined {
  return apps.find((a) => a.id === id);
}

export function getAppsByCategory(category: AppCategory): App[] {
  return apps.filter((a) => a.category === category);
}

export function getCategoryById(id: string) {
  return categories.find((c) => c.id === id);
}
