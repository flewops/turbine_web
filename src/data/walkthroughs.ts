/**
 * Walkthrough sections for each app detail page, keyed by app id.
 *
 * Every app has its own free-form list of sections — add, remove or reorder
 * them freely. Each section is rendered as its own row:
 *   - with `image`: text and picture side by side (sides alternate per row)
 *   - without `image`: text only, full width
 *
 * To add a picture, put the file in `public/images/walkthrough/<app-id>/`
 * and set `image: "/images/walkthrough/<app-id>/<file>.jpg"` on the section.
 */

export interface WalkthroughSection {
  title: string;
  /** Main explanation shown under the title. */
  description: string;
  /** Optional detail bullets. */
  points?: string[];
  /** Optional picture for this section, e.g. "/images/walkthrough/sales/quote.jpg". */
  image?: string;
  /** Alt text for the picture; defaults to the section title. */
  imageAlt?: string;
}

export const walkthroughs: Record<string, WalkthroughSection[]> = {
  accounting: [
    {
      title: "Bank reconciliation that keeps up daily",
      description: "Bank transactions sync every day and are matched to open invoices and bills, so only real exceptions need a human look.",
      image: "/images/walkthrough/finance-1.jpg",
      points: ["Matching rules learn from how you reconcile", "Partial and grouped payments are supported", "Unmatched lines stay visible until resolved"],
    },
    {
      title: "Vendor bills without typing",
      description: "Upload or email a bill and its vendor, amounts, taxes and due date are read in for you to check and post.",
      image: "/images/walkthrough/finance-2.jpg",
      points: ["Bills match against purchase orders", "Due dates feed the payment schedule", "Original PDF stays attached to the entry"],
    },
    {
      title: "Customer invoices and follow-up",
      description: "Invoices come straight from confirmed orders, and overdue customers receive polite, scheduled reminders.",
      image: "/images/walkthrough/finance-3.jpg",
      points: ["Reminder levels with your own wording", "Online payment links on every invoice", "Ageing report shows who owes what"],
    },
    {
      title: "Closing the month with confidence",
      description: "Lock dates, a live trial balance and standard financial reports turn month-end into a review instead of a scramble.",
      image: "/images/walkthrough/finance-1.jpg",
      points: ["P&L, balance sheet and cash flow", "Lock dates stop changes to closed periods", "Every entry traces back to its source document"],
    },
  ],
  expenses: [
    {
      title: "Snap a receipt, done",
      description: "Employees photograph receipts on their phone and the amount, date and vendor are filled in automatically.",
      image: "/images/walkthrough/finance-1.jpg",
      points: ["Works from mobile or email", "Receipts are stored with each expense", "Categories set the right account"],
    },
    {
      title: "Reports that route themselves",
      description: "Expenses are grouped into a report and sent to the employee's manager, with extra review for high amounts.",
      image: "/images/walkthrough/finance-2.jpg",
      points: ["One-tap approve or refuse", "Comments go back to the employee", "Policy limits flag unusual claims"],
    },
    {
      title: "Reimbursing employees",
      description: "Approved reports post to accounting and are paid with the next payment run — or added to payroll.",
      image: "/images/walkthrough/finance-3.jpg",
      points: ["Batch payments for many employees", "Company-card spend handled separately", "Status visible to the employee at all times"],
    },
  ],
  spreadsheet: [
    {
      title: "Live business data in cells",
      description: "Insert pivots and lists from any Turbine app directly into a sheet — figures refresh every time it opens.",
      image: "/images/walkthrough/finance-1.jpg",
      points: ["No CSV exports", "Filters by period, team or region", "Drill down to the source records"],
    },
    {
      title: "Familiar formulas and charts",
      description: "Use the formulas, formatting and charts your team already knows from desktop spreadsheets.",
      image: "/images/walkthrough/finance-2.jpg",
      points: ["Hundreds of standard functions", "Conditional formatting", "Line, bar and pie charts"],
    },
    {
      title: "Reports built once, reused forever",
      description: "Save a sheet as a template and generate next month's report with a single click.",
      image: "/images/walkthrough/finance-3.jpg",
      points: ["Shared with the right people", "Several people can edit at once", "Comments on any cell"],
    },
  ],
  crm: [
    {
      title: "Every lead in one inbox",
      description: "Leads from website forms, email, chat and events arrive in one place with their source recorded.",
      image: "/images/walkthrough/sales-1.jpg",
      points: ["Automatic assignment to salespeople", "Duplicate detection", "Enrichment with company details"],
    },
    {
      title: "A pipeline you can see",
      description: "Opportunities move across stages on a board, each showing value, probability and the next scheduled activity.",
      image: "/images/walkthrough/sales-2.jpg",
      points: ["Drag-and-drop stages", "Overdue activities in red", "Custom stages per team"],
    },
    {
      title: "Activities that never slip",
      description: "Calls, meetings and emails are scheduled on the deal, and reminders keep every opportunity moving.",
      image: "/images/walkthrough/sales-3.jpg",
      points: ["Planned activity per opportunity", "Email and calendar sync", "Notes visible to the whole team"],
    },
    {
      title: "Forecasts managers trust",
      description: "Expected revenue rolls up by month, team and salesperson so forecasting becomes a report, not a guess.",
      image: "/images/walkthrough/sales-1.jpg",
      points: ["Won/lost analysis with reasons", "Conversion rate per stage", "Pipeline value over time"],
    },
  ],
  sales: [
    {
      title: "Professional quotations in minutes",
      description: "Pick products, apply the customer's pricelist and add optional upsell lines — the quote is ready to send.",
      image: "/images/walkthrough/sales-1.jpg",
      points: ["Reusable quotation templates", "Optional products customers can add themselves", "Automatic taxes and discounts"],
    },
    {
      title: "Sign and pay online",
      description: "Customers open a secure link, review the quote, sign it and pay a deposit from any device.",
      image: "/images/walkthrough/sales-2.jpg",
      points: ["No printing or scanning", "Deposit or full payment at signature", "You're notified the moment it's signed"],
    },
    {
      title: "From order to delivery",
      description: "A confirmed order reserves stock and schedules the delivery, so the warehouse knows exactly what to ship.",
      image: "/images/walkthrough/sales-3.jpg",
      points: ["Partial deliveries supported", "Delivery status on the order", "Backorders tracked automatically"],
    },
    {
      title: "Invoicing on your terms",
      description: "Invoice what was ordered or what was delivered, in one go or in milestones, straight from the order.",
      image: "/images/walkthrough/sales-1.jpg",
      points: ["Down payments and milestones", "Bulk invoicing at month-end", "Invoices post to accounting instantly"],
    },
  ],
  "point-of-sale": [
    {
      title: "A checkout anyone can run",
      description: "A touch-first screen makes it easy for new staff to scan, search and sell from the first shift.",
      image: "/images/walkthrough/sales-1.jpg",
      points: ["Product images and quick search", "Barcode scanning", "Customer lookup at the till"],
    },
    {
      title: "Every way to pay",
      description: "Take cash, card or split payments, and print or email the receipt.",
      image: "/images/walkthrough/sales-2.jpg",
      points: ["Card terminals and cash drawers", "Split bills across methods", "Refunds against the original sale"],
    },
    {
      title: "Loyalty that brings customers back",
      description: "Points, rewards and gift cards are applied at the till automatically.",
      image: "/images/walkthrough/sales-3.jpg",
      points: ["Points per purchase or amount", "Coupons and promotions", "Shared with the online shop"],
    },
    {
      title: "Clean session closing",
      description: "At shift end, count the drawer and the session totals post to accounting by payment method.",
      image: "/images/walkthrough/sales-1.jpg",
      points: ["Cash differences recorded per cashier", "Session reports", "Stock updated with every sale"],
    },
  ],
  rental: [
    {
      title: "Availability at a glance",
      description: "A shared calendar shows which items are free for the requested dates before you send a quote.",
      image: "/images/walkthrough/sales-1.jpg",
      points: ["No double bookings", "Availability per serial number", "Visual schedule by product"],
    },
    {
      title: "Pickup and return",
      description: "Record what leaves and what comes back, with serial numbers and the condition of each item.",
      image: "/images/walkthrough/sales-2.jpg",
      points: ["Security deposits", "Return checks", "Pickup and return reminders"],
    },
    {
      title: "Fair, automatic pricing",
      description: "Hourly, daily or weekly rates apply automatically, and late returns are charged by your rules.",
      image: "/images/walkthrough/sales-3.jpg",
      points: ["Duration-based pricing", "Late fees", "Damage charges added at return"],
    },
  ],
  subscriptions: [
    {
      title: "Plans that bill themselves",
      description: "Customers choose a monthly or yearly plan, and invoices are created and charged on every renewal date.",
      image: "/images/walkthrough/sales-1.jpg",
      points: ["Saved payment methods", "Automatic retries on failed payments", "Renewal reminders"],
    },
    {
      title: "Upsells mid-term",
      description: "Add seats or products to a running subscription with prorated charges calculated for you.",
      image: "/images/walkthrough/sales-2.jpg",
      points: ["Prorated invoices", "Upsell quotes", "Plan changes tracked on the contract"],
    },
    {
      title: "Know your recurring revenue",
      description: "MRR, churn and growth are always up to date, so you see the health of the business at a glance.",
      image: "/images/walkthrough/sales-3.jpg",
      points: ["MRR and ARR dashboards", "Churn reasons", "At-risk subscriptions flagged early"],
    },
  ],
  inventory: [
    {
      title: "Receiving and put-away",
      description: "Scan incoming goods against the purchase order and store them in the suggested location.",
      image: "/images/walkthrough/supply-chain-1.jpg",
      points: ["Barcode-driven receipts", "Putaway rules by product", "Lot and serial capture on arrival"],
    },
    {
      title: "Picking, packing and shipping",
      description: "Pickers follow optimised routes, packers confirm contents and shipping labels print automatically.",
      image: "/images/walkthrough/supply-chain-2.jpg",
      points: ["Wave and batch picking", "Carrier label printing", "Tracking numbers sent to customers"],
    },
    {
      title: "Replenishment on autopilot",
      description: "Minimum and maximum rules create purchase or production orders before shelves run empty.",
      image: "/images/walkthrough/supply-chain-3.jpg",
      points: ["Reorder rules per location", "Lead-time aware", "Forecasted stock view"],
    },
    {
      title: "Counting without closing",
      description: "Cycle counts keep quantities accurate while the warehouse keeps working.",
      image: "/images/walkthrough/supply-chain-1.jpg",
      points: ["Scheduled counts per zone", "Adjustment history", "Live stock valuation"],
    },
  ],
  manufacturing: [
    {
      title: "Planning production",
      description: "Demand from orders or stock rules creates manufacturing orders with the right bill of materials and routing.",
      image: "/images/walkthrough/supply-chain-1.jpg",
      points: ["Capacity per work centre", "Drag-and-drop scheduling", "Component availability check"],
    },
    {
      title: "Shop floor tablets",
      description: "Operators see step-by-step instructions, drawings and checks at their station and log time per operation.",
      image: "/images/walkthrough/supply-chain-2.jpg",
      points: ["Start, pause and finish per operation", "Scrap and rework recorded", "No paper travellers"],
    },
    {
      title: "Real cost of every product",
      description: "Material and labour are captured as work happens, so actual cost is compared to plan on every order.",
      image: "/images/walkthrough/supply-chain-3.jpg",
      points: ["Cost per manufacturing order", "Efficiency per work centre", "Overall equipment effectiveness"],
    },
    {
      title: "Subcontracting and by-products",
      description: "Send operations to subcontractors and record by-products alongside the main output.",
      image: "/images/walkthrough/supply-chain-1.jpg",
      points: ["Components shipped to subcontractors", "By-product stock tracking", "Multi-level BOMs"],
    },
  ],
  purchase: [
    {
      title: "RFQs to the right vendors",
      description: "Send requests for quotation to one or many vendors, created by hand or by reorder rules.",
      image: "/images/walkthrough/supply-chain-1.jpg",
      points: ["Vendor pricelists", "Call for tenders", "Lead times per vendor"],
    },
    {
      title: "Confirming the best offer",
      description: "Compare offers side by side, confirm the winner and send the purchase order by email.",
      image: "/images/walkthrough/supply-chain-2.jpg",
      points: ["Price history per product", "Approval above set amounts", "Vendor portal for confirmations"],
    },
    {
      title: "Three-way matching",
      description: "Vendor bills are checked against what was ordered and what actually arrived before they are paid.",
      image: "/images/walkthrough/supply-chain-3.jpg",
      points: ["Mismatches flagged automatically", "Partial receipts handled", "Bills post with the right taxes"],
    },
  ],
  maintenance: [
    {
      title: "Equipment register",
      description: "Each machine is recorded with its location, vendor, warranty and responsible maintenance team.",
      image: "/images/walkthrough/supply-chain-1.jpg",
      points: ["Serial numbers and documents", "Linked to work centres", "Full repair history"],
    },
    {
      title: "Preventive schedule",
      description: "Recurring maintenance is planned on a calendar so problems are caught before machines stop.",
      image: "/images/walkthrough/supply-chain-2.jpg",
      points: ["Time- or usage-based intervals", "Team calendars", "Planned downtime visible to production"],
    },
    {
      title: "Breakdowns handled fast",
      description: "Operators raise a request in seconds and technicians track it to completion with time and parts logged.",
      image: "/images/walkthrough/supply-chain-3.jpg",
      points: ["Priority levels", "Spare parts from stock", "Mean time to repair tracked"],
    },
  ],
  quality: [
    {
      title: "Checks where they matter",
      description: "Define control points on receipt, during production or before delivery — the check appears at the right moment.",
      image: "/images/walkthrough/supply-chain-1.jpg",
      points: ["Pass/fail, measurements or photos", "Sampling rules", "Instructions with each check"],
    },
    {
      title: "Alerts and corrective actions",
      description: "Failed checks raise alerts the quality team investigates and closes with root cause and corrective action.",
      image: "/images/walkthrough/supply-chain-2.jpg",
      points: ["Assigned quality teams", "Root cause tracking", "Preventive actions recorded"],
    },
    {
      title: "Proof for audits",
      description: "Every check is stored with who did it and when, ready for customer audits and certifications.",
      image: "/images/walkthrough/supply-chain-3.jpg",
      points: ["Results per lot or serial", "Trends by product and supplier", "Exportable reports"],
    },
  ],
  plm: [
    {
      title: "Engineering change orders",
      description: "Every change starts as an ECO describing what changes and why, with an owner and a deadline.",
      image: "/images/walkthrough/supply-chain-1.jpg",
      points: ["Change types and stages", "Linked to products and BOMs", "Comments and attachments"],
    },
    {
      title: "Versioned BOMs and drawings",
      description: "Revisions are made in a new version while production keeps using the approved one.",
      image: "/images/walkthrough/supply-chain-2.jpg",
      points: ["Side-by-side comparison", "Drawings attached per version", "Full revision history"],
    },
    {
      title: "Review and release",
      description: "Approvers sign off in stages, and the new version is released to manufacturing automatically.",
      image: "/images/walkthrough/supply-chain-3.jpg",
      points: ["Multi-stage approval", "Effective dates", "No wrong-version builds"],
    },
  ],
  website: [
    {
      title: "Build pages visually",
      description: "Drag in text, images, forms and galleries and edit content directly on the live page.",
      image: "/images/walkthrough/websites-1.jpg",
      points: ["Ready-made building blocks", "Brand colours and fonts", "Preview on mobile"],
    },
    {
      title: "Built to be found",
      description: "Titles, descriptions and clean URLs are managed per page so search engines understand your site.",
      image: "/images/walkthrough/websites-2.jpg",
      points: ["Per-page SEO settings", "Automatic sitemap", "Fast-loading pages"],
    },
    {
      title: "Forms that create leads",
      description: "Contact and quote forms feed directly into your sales pipeline — no inbox forwarding.",
      image: "/images/walkthrough/websites-3.jpg",
      points: ["Custom form fields", "Spam protection", "Thank-you pages"],
    },
  ],
  ecommerce: [
    {
      title: "A catalogue that sells",
      description: "Products with photos, variants and live prices are published straight from your product list.",
      image: "/images/walkthrough/websites-1.jpg",
      points: ["Variants like size and colour", "Live stock on product pages", "Related and accessory products"],
    },
    {
      title: "Smooth checkout",
      description: "Shoppers add to cart, choose delivery and pay securely in a few steps.",
      image: "/images/walkthrough/websites-2.jpg",
      points: ["Guest or account checkout", "Shipping rates from carriers", "Several payment providers"],
    },
    {
      title: "Orders that fulfil themselves",
      description: "Paid orders reserve stock, create the delivery and send tracking to the customer automatically.",
      image: "/images/walkthrough/websites-3.jpg",
      points: ["Invoice created on payment", "Order status emails", "Returns handled from the order"],
    },
    {
      title: "Promotions and repeat buyers",
      description: "Coupons, discounts and customer accounts bring shoppers back again.",
      image: "/images/walkthrough/websites-1.jpg",
      points: ["Discount codes", "Wishlists", "Abandoned-cart emails"],
    },
  ],
  "live-chat": [
    {
      title: "Chat on any page",
      description: "A chat button lets visitors ask questions in real time, with greetings tailored per page.",
      image: "/images/walkthrough/websites-1.jpg",
      points: ["Custom welcome messages", "Office hours", "Chatbot for common questions"],
    },
    {
      title: "Answer fast",
      description: "Chats are routed to available operators, who reply with saved responses for common questions.",
      image: "/images/walkthrough/websites-2.jpg",
      points: ["Canned responses", "Visitor's current page shown", "Transfer between operators"],
    },
    {
      title: "Turn chats into results",
      description: "Convert a conversation into a lead or a support ticket with one command.",
      image: "/images/walkthrough/websites-3.jpg",
      points: ["Full transcript attached", "Satisfaction ratings", "Response-time reports"],
    },
  ],
  elearning: [
    {
      title: "Courses from what you already have",
      description: "Upload videos, documents and slides and organise them into sections and lessons.",
      image: "/images/walkthrough/websites-1.jpg",
      points: ["Video, PDF and web content", "Quizzes between lessons", "Drip release by date"],
    },
    {
      title: "Enrolment your way",
      description: "Make courses free, invite-only or paid, and let learners join from the website.",
      image: "/images/walkthrough/websites-2.jpg",
      points: ["Public or private courses", "Paid courses through the shop", "Group invitations"],
    },
    {
      title: "Progress and certificates",
      description: "Follow each learner's progress, score quizzes and issue certificates on completion.",
      image: "/images/walkthrough/websites-3.jpg",
      points: ["Completion tracking", "Badges and karma", "Printable certificates"],
    },
  ],
  employees: [
    {
      title: "One profile per person",
      description: "Contracts, department, manager, skills and documents live in one employee record every HR app reads from.",
      image: "/images/walkthrough/human-resources-1.jpg",
      points: ["Private and work information", "Skills and certifications", "Documents attached"],
    },
    {
      title: "Onboarding and offboarding plans",
      description: "Launch a checklist of tasks for HR, IT and the manager when someone joins or leaves.",
      image: "/images/walkthrough/human-resources-2.jpg",
      points: ["Reusable plans", "Tasks with owners and due dates", "Nothing forgotten on day one"],
    },
    {
      title: "Self-service for employees",
      description: "Employees update their own personal details and see their documents, freeing HR from routine requests.",
      image: "/images/walkthrough/human-resources-3.jpg",
      points: ["Personal details", "Payslips and contracts", "Org chart and colleagues"],
    },
  ],
  recruitment: [
    {
      title: "Publish once, everywhere",
      description: "Write the job description and publish it on your careers page and connected job boards.",
      image: "/images/walkthrough/human-resources-1.jpg",
      points: ["Careers page on your website", "Job board publishing", "Application forms per job"],
    },
    {
      title: "An applicant pipeline",
      description: "Applications land on a board where recruiters screen CVs and move candidates forward.",
      image: "/images/walkthrough/human-resources-2.jpg",
      points: ["CV parsing", "Stages per job", "Automatic emails at each stage"],
    },
    {
      title: "Interviews and offers",
      description: "Schedule interviews, collect structured feedback and send the offer for e-signature.",
      image: "/images/walkthrough/human-resources-3.jpg",
      points: ["Interviewer scorecards", "Calendar invitations", "Hired candidates become employees"],
    },
  ],
  "time-off": [
    {
      title: "Requests in seconds",
      description: "Employees pick the leave type and dates and see their remaining balance before submitting.",
      image: "/images/walkthrough/human-resources-1.jpg",
      points: ["Half days and hours", "Mobile requests", "Attachments like sick notes"],
    },
    {
      title: "Approvals with context",
      description: "Managers see who else is away before approving, so teams are never left uncovered.",
      image: "/images/walkthrough/human-resources-2.jpg",
      points: ["Team calendar", "One or two approval levels", "Public holidays per country"],
    },
    {
      title: "Accruals handled for you",
      description: "Allocations accrue by contract rules and balances update automatically.",
      image: "/images/walkthrough/human-resources-3.jpg",
      points: ["Accrual plans", "Carry-over limits", "Balance reports"],
    },
  ],
  payroll: [
    {
      title: "Inputs from the source",
      description: "Worked days, leave, attendance and expenses are collected automatically for the pay period.",
      image: "/images/walkthrough/human-resources-1.jpg",
      points: ["No re-entering hours", "Leave applied per contract", "Expense reimbursements included"],
    },
    {
      title: "Payslips computed by rules",
      description: "Salary rules calculate gross pay, deductions and net pay for every employee in one batch.",
      image: "/images/walkthrough/human-resources-2.jpg",
      points: ["Country-specific rules", "Bonuses and allowances", "Clear payslip PDFs"],
    },
    {
      title: "Validate, post and pay",
      description: "Review the batch, post the salary entries to accounting and generate the payment file.",
      image: "/images/walkthrough/human-resources-3.jpg",
      points: ["Accounting entries created", "Bank payment file", "Payslips in the employee portal"],
    },
  ],
  appraisals: [
    {
      title: "Review cycles on schedule",
      description: "Plan reviews for a team or the whole company using a template that fits your process.",
      image: "/images/walkthrough/human-resources-1.jpg",
      points: ["Recurring cycles", "Custom templates", "Reminders to employees and managers"],
    },
    {
      title: "Two-sided feedback",
      description: "Employees reflect on their work, managers add feedback and ratings, then they meet to agree.",
      image: "/images/walkthrough/human-resources-2.jpg",
      points: ["Self-assessment", "360° feedback via surveys", "Private manager notes"],
    },
    {
      title: "Goals that carry forward",
      description: "Set goals for the next period and track them through to the following review.",
      image: "/images/walkthrough/human-resources-3.jpg",
      points: ["Goal progress", "Skill development", "Review history per employee"],
    },
  ],
  referrals: [
    {
      title: "Share open jobs",
      description: "Employees see current openings and share them by link or on their social networks.",
      image: "/images/walkthrough/human-resources-1.jpg",
      points: ["Personal referral links", "One-click social sharing", "Job details always current"],
    },
    {
      title: "Follow your referrals",
      description: "Referred candidates are tagged and employees can follow their progress through hiring.",
      image: "/images/walkthrough/human-resources-2.jpg",
      points: ["Status per referral", "Same pipeline as recruitment", "Notifications on progress"],
    },
    {
      title: "Rewards that motivate",
      description: "Points are earned as candidates progress and can be redeemed for rewards you choose.",
      image: "/images/walkthrough/human-resources-3.jpg",
      points: ["Points per stage", "Reward catalogue", "Leaderboard"],
    },
  ],
  approvals: [
    {
      title: "Request anything",
      description: "Ready-made forms cover purchases, payments, travel, borrowing items and more.",
      image: "/images/walkthrough/human-resources-1.jpg",
      points: ["Custom request types", "Attachments", "Mobile submission"],
    },
    {
      title: "The right approvers, in order",
      description: "Requests route to the approvers you define, in sequence or in parallel.",
      image: "/images/walkthrough/human-resources-2.jpg",
      points: ["Minimum approvers", "Manager-based routing", "Email and mobile notifications"],
    },
    {
      title: "A clear audit trail",
      description: "Every decision is stored with who approved it, when and why.",
      image: "/images/walkthrough/human-resources-3.jpg",
      points: ["Comments on decisions", "Status history", "Reports by request type"],
    },
  ],
  attendances: [
    {
      title: "Check in from anywhere",
      description: "Employees check in from a kiosk, badge scan or their phone, with location if required.",
      image: "/images/walkthrough/human-resources-1.jpg",
      points: ["Kiosk mode", "Badge or PIN", "Mobile check-in"],
    },
    {
      title: "Hours worked, calculated",
      description: "Hours and overtime are calculated automatically at check-out.",
      image: "/images/walkthrough/human-resources-2.jpg",
      points: ["Overtime rules", "Missing check-out alerts", "Manager corrections"],
    },
    {
      title: "Ready for payroll",
      description: "Validated hours feed straight into payslips and compliance reports.",
      image: "/images/walkthrough/human-resources-3.jpg",
      points: ["Planned vs actual hours", "Exportable reports", "History per employee"],
    },
  ],
  fleet: [
    {
      title: "Every vehicle on record",
      description: "Store model, plate, contracts and documents for each vehicle in your fleet.",
      image: "/images/walkthrough/human-resources-1.jpg",
      points: ["Leasing and insurance contracts", "Odometer history", "Vehicle documents"],
    },
    {
      title: "Drivers and assignments",
      description: "Assign vehicles to employees and keep a full history of who drove what and when.",
      image: "/images/walkthrough/human-resources-2.jpg",
      points: ["Assignment history", "Future driver planning", "Driver documents"],
    },
    {
      title: "Costs under control",
      description: "Log fuel, servicing and repairs and get reminded before contracts expire.",
      image: "/images/walkthrough/human-resources-3.jpg",
      points: ["Total cost per vehicle", "Service reminders", "Contract renewal alerts"],
    },
  ],
  "email-marketing": [
    {
      title: "Design emails visually",
      description: "Build campaigns with drag-and-drop blocks and preview them on desktop and mobile.",
      image: "/images/walkthrough/marketing-1.jpg",
      points: ["Saved brand templates", "Dynamic placeholders", "Test sends"],
    },
    {
      title: "Send to the right people",
      description: "Target mailing lists or filter contacts by tags, purchases, location or behaviour.",
      image: "/images/walkthrough/marketing-2.jpg",
      points: ["Mailing lists", "Advanced filters", "Automatic unsubscribe handling"],
    },
    {
      title: "See what worked",
      description: "Compare open, click and reply rates — and the leads and revenue each campaign produced.",
      image: "/images/walkthrough/marketing-3.jpg",
      points: ["A/B testing", "Click heatmaps", "Revenue per campaign"],
    },
  ],
  "sms-marketing": [
    {
      title: "Short messages, high reach",
      description: "Compose an SMS with a live character and credit count, then send it now or schedule it.",
      image: "/images/walkthrough/marketing-1.jpg",
      points: ["Character counter", "Link shortening", "Scheduled sends"],
    },
    {
      title: "Targeted recipients",
      description: "Choose contacts with valid mobile numbers using lists and filters.",
      image: "/images/walkthrough/marketing-2.jpg",
      points: ["Number validation", "Opt-out handling", "Country formatting"],
    },
    {
      title: "Delivery and clicks",
      description: "Track delivered, failed and clicked messages per campaign.",
      image: "/images/walkthrough/marketing-3.jpg",
      points: ["Delivery reports", "Link click tracking", "Credits used per campaign"],
    },
  ],
  "social-marketing": [
    {
      title: "One place for every network",
      description: "Connect your company pages once and post to several networks at the same time.",
      image: "/images/walkthrough/marketing-1.jpg",
      points: ["Multi-account posting", "Images and links", "Network previews"],
    },
    {
      title: "A content calendar",
      description: "Plan and schedule posts weeks ahead so your presence stays consistent.",
      image: "/images/walkthrough/marketing-2.jpg",
      points: ["Calendar view", "Drafts and approvals", "Scheduled publishing"],
    },
    {
      title: "Engage and measure",
      description: "Reply to comments from one feed and compare engagement across posts.",
      image: "/images/walkthrough/marketing-3.jpg",
      points: ["Unified feed", "Engagement stats", "Leads from conversations"],
    },
  ],
  "marketing-automation": [
    {
      title: "Journeys on a canvas",
      description: "Chain emails, SMS and actions with waits and conditions in a visual workflow.",
      image: "/images/walkthrough/marketing-1.jpg",
      points: ["Branching on opens and clicks", "Time delays", "Reusable templates"],
    },
    {
      title: "Triggered by behaviour",
      description: "Contacts enter a journey when they sign up, buy, visit a page or go quiet.",
      image: "/images/walkthrough/marketing-2.jpg",
      points: ["Entry filters", "Re-entry rules", "Exit on conversion"],
    },
    {
      title: "Warm leads for sales",
      description: "Contacts who engage are scored and handed to salespeople at the right moment.",
      image: "/images/walkthrough/marketing-3.jpg",
      points: ["Lead scoring", "Automatic assignment", "Results per step"],
    },
  ],
  events: [
    {
      title: "Set up the event",
      description: "Create the event with agenda, speakers, venue, ticket types and capacity.",
      image: "/images/walkthrough/marketing-1.jpg",
      points: ["Event page on your website", "Multiple ticket types", "Talk tracks and rooms"],
    },
    {
      title: "Registration and tickets",
      description: "Attendees register and pay online and receive their badge by email.",
      image: "/images/walkthrough/marketing-2.jpg",
      points: ["Online payment", "Custom questions", "Automatic confirmation emails"],
    },
    {
      title: "Event day and after",
      description: "Scan badges at the door, then follow up with thank-you emails and feedback surveys.",
      image: "/images/walkthrough/marketing-3.jpg",
      points: ["Badge scanning", "Live attendance", "Leads from attendees"],
    },
  ],
  surveys: [
    {
      title: "Build any form",
      description: "Mix multiple choice, ratings, matrices and free text, with conditional questions.",
      image: "/images/walkthrough/marketing-1.jpg",
      points: ["Question logic", "Scored quizzes", "Branded design"],
    },
    {
      title: "Share it anywhere",
      description: "Send by email, embed on your website or share a public link.",
      image: "/images/walkthrough/marketing-2.jpg",
      points: ["Personal invitations", "Public links", "Time limits and attempts"],
    },
    {
      title: "Read the results",
      description: "Watch answers arrive live with charts, filters and exports.",
      image: "/images/walkthrough/marketing-3.jpg",
      points: ["Live charts", "Filter by answer", "Export to spreadsheet"],
    },
  ],
  project: [
    {
      title: "Plan the work",
      description: "Break the project into tasks with owners, deadlines and milestones.",
      image: "/images/walkthrough/services-1.jpg",
      points: ["Kanban, list and Gantt views", "Task dependencies", "Recurring tasks"],
    },
    {
      title: "Collaborate on tasks",
      description: "Teams move tasks across stages, discuss in context and attach files.",
      image: "/images/walkthrough/services-2.jpg",
      points: ["Task chatter", "Subtasks", "Customer portal access"],
    },
    {
      title: "Stay profitable",
      description: "Compare time and costs to the budget as you go and invoice the work done.",
      image: "/images/walkthrough/services-3.jpg",
      points: ["Project budget", "Billable hours", "Profitability report"],
    },
  ],
  timesheets: [
    {
      title: "Log time effortlessly",
      description: "Start a timer or enter hours per project and task from desktop or phone.",
      image: "/images/walkthrough/services-1.jpg",
      points: ["One-click timers", "Weekly grid", "Mobile entry"],
    },
    {
      title: "Validate the week",
      description: "Managers review and validate timesheets before they are billed or paid.",
      image: "/images/walkthrough/services-2.jpg",
      points: ["Validation per period", "Reminders for missing time", "Corrections with history"],
    },
    {
      title: "Bill every hour",
      description: "Validated billable hours turn into invoice lines automatically.",
      image: "/images/walkthrough/services-3.jpg",
      points: ["Billable vs non-billable", "Invoice from timesheets", "Estimate vs actual"],
    },
  ],
  helpdesk: [
    {
      title: "Tickets from every channel",
      description: "Emails, web forms, live chat and phone requests all become tickets in one place.",
      image: "/images/walkthrough/services-1.jpg",
      points: ["Email aliases per team", "Website ticket form", "Customer portal"],
    },
    {
      title: "Assign and solve",
      description: "Tickets are assigned fairly across agents, who reply and track everything from one screen.",
      image: "/images/walkthrough/services-2.jpg",
      points: ["Auto-assignment", "Priorities and tags", "Merge duplicates"],
    },
    {
      title: "Service you can measure",
      description: "SLA timers, satisfaction ratings and reports show how well the team is doing.",
      image: "/images/walkthrough/services-3.jpg",
      points: ["SLA policies", "Customer ratings", "Performance reports"],
    },
  ],
  "field-service": [
    {
      title: "Plan the day's visits",
      description: "Schedule interventions on a map and calendar and assign the nearest available technician.",
      image: "/images/walkthrough/services-1.jpg",
      points: ["Map view", "Skills-based assignment", "Route planning"],
    },
    {
      title: "Work on site",
      description: "Technicians open the job on mobile, follow the worksheet and record parts used.",
      image: "/images/walkthrough/services-2.jpg",
      points: ["Custom worksheets", "Photos and notes", "Parts from van stock"],
    },
    {
      title: "Sign and invoice on the spot",
      description: "The customer signs on the device and the invoice is created right away.",
      image: "/images/walkthrough/services-3.jpg",
      points: ["On-site signature", "Instant invoice", "Intervention report by email"],
    },
  ],
  planning: [
    {
      title: "Shifts by drag and drop",
      description: "Plan shifts by role, project or location on a visual schedule.",
      image: "/images/walkthrough/services-1.jpg",
      points: ["Shift templates", "Recurring shifts", "Copy last week"],
    },
    {
      title: "Published to everyone",
      description: "Send the schedule so employees see their shifts on mobile and in their calendar.",
      image: "/images/walkthrough/services-2.jpg",
      points: ["Email and mobile notifications", "Calendar sync", "Open shifts to pick up"],
    },
    {
      title: "Conflicts caught early",
      description: "Overlaps, approved leave and over-allocations are flagged before you publish.",
      image: "/images/walkthrough/services-3.jpg",
      points: ["Leave visible on schedule", "Overtime warnings", "Planned vs actual hours"],
    },
  ],
  documents: [
    {
      title: "Every file in one place",
      description: "Upload, email in or scan documents into shared workspaces with tags.",
      image: "/images/walkthrough/productivity-1.jpg",
      points: ["Email-to-workspace", "Mobile scanning", "Tags and filters"],
    },
    {
      title: "Turn files into records",
      description: "Make a document a vendor bill, expense or signature request in one click.",
      image: "/images/walkthrough/productivity-2.jpg",
      points: ["Bills from scans", "Signature requests", "Link to any record"],
    },
    {
      title: "Access you control",
      description: "Workspace permissions and share links keep sensitive files protected.",
      image: "/images/walkthrough/productivity-3.jpg",
      points: ["Per-workspace access", "Expiring share links", "Version history"],
    },
  ],
  sign: [
    {
      title: "Prepare once",
      description: "Upload a PDF and place signature, date and text fields where they belong.",
      image: "/images/walkthrough/productivity-1.jpg",
      points: ["Drag-and-drop fields", "Reusable templates", "Multiple signers"],
    },
    {
      title: "Sign from any device",
      description: "Signers receive a secure link and sign in a few clicks — no account needed.",
      image: "/images/walkthrough/productivity-2.jpg",
      points: ["Signing order", "Reminders", "Mobile friendly"],
    },
    {
      title: "Legally sound records",
      description: "Every signed document comes with an audit log of each step.",
      image: "/images/walkthrough/productivity-3.jpg",
      points: ["Timestamped audit trail", "Final copy to all parties", "Stored in Documents"],
    },
  ],
  discuss: [
    {
      title: "Channels for every team",
      description: "Talk in channels by topic, department or project, or message someone directly.",
      image: "/images/walkthrough/productivity-1.jpg",
      points: ["Public and private channels", "Direct messages", "File sharing"],
    },
    {
      title: "Chat on the record",
      description: "Comment directly on an order, task or invoice and mention the colleague who needs to act.",
      image: "/images/walkthrough/productivity-2.jpg",
      points: ["@mentions", "Followers per record", "History kept with the work"],
    },
    {
      title: "Meet in one click",
      description: "Start a voice or video call from any conversation.",
      image: "/images/walkthrough/productivity-3.jpg",
      points: ["Video calls", "Screen sharing", "Mobile app"],
    },
  ],
  knowledge: [
    {
      title: "Write rich articles",
      description: "Create pages with headings, images, tables, checklists and embedded videos.",
      image: "/images/walkthrough/productivity-1.jpg",
      points: ["Templates", "Embedded views from other apps", "Comments"],
    },
    {
      title: "Organised and permissioned",
      description: "Group articles in a tree and choose who can read or edit each section.",
      image: "/images/walkthrough/productivity-2.jpg",
      points: ["Workspace, private and shared", "Favourites", "Full-text search"],
    },
    {
      title: "Share with customers",
      description: "Publish selected articles publicly as help content.",
      image: "/images/walkthrough/productivity-3.jpg",
      points: ["Public articles", "Linked from helpdesk replies", "Always up to date"],
    },
  ],
  appointments: [
    {
      title: "Set your availability",
      description: "Define appointment types, durations and the hours each staff member is free.",
      image: "/images/walkthrough/productivity-1.jpg",
      points: ["Several appointment types", "Buffer times", "Resources like rooms"],
    },
    {
      title: "Customers book themselves",
      description: "Share a link or embed a booking page and customers pick a free slot.",
      image: "/images/walkthrough/productivity-2.jpg",
      points: ["Custom questions", "Online payment", "Time-zone aware"],
    },
    {
      title: "No-shows reduced",
      description: "Meetings land in everyone's calendar with email and SMS reminders.",
      image: "/images/walkthrough/productivity-3.jpg",
      points: ["Calendar sync", "Reminders", "Easy rescheduling"],
    },
  ],
  whatsapp: [
    {
      title: "Message from any record",
      description: "Send order confirmations, invoices or reminders by WhatsApp straight from Turbine.",
      image: "/images/walkthrough/productivity-1.jpg",
      points: ["Approved templates", "Attachments", "Dynamic fields"],
    },
    {
      title: "One shared inbox",
      description: "Customer replies arrive in Turbine where any teammate can pick them up.",
      image: "/images/walkthrough/productivity-2.jpg",
      points: ["No personal phones", "Conversation history", "Assignment to agents"],
    },
    {
      title: "Automated notifications",
      description: "Trigger messages automatically when an order ships or a payment is due.",
      image: "/images/walkthrough/productivity-3.jpg",
      points: ["Event-based sending", "Opt-in management", "Delivery status"],
    },
  ],
};
