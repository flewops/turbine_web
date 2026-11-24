import type { ComponentType, SVGProps } from "react";
import {
  Calculator, FileText, Receipt, Table, HeartHandshake, ShoppingCart, Store,
  KeyRound, RefreshCw, Boxes, Factory, Truck, Wrench, ShieldCheck, GitBranch,
  Cpu, Globe, ShoppingBag, MessageCircle, GraduationCap, Users, UserPlus,
  Palmtree, Wallet, Star, Share2, CheckCircle, Clock, Car, Mail, Smartphone,
  Share, Workflow, CalendarDays, ClipboardList, Kanban, Timer, Headset,
  MapPin, Calendar, FolderOpen, PenLine, MessagesSquare, BookOpen,
  CalendarCheck, Phone, Puzzle, Zap, Link2, Smile, BarChart3, Layers,
  SlidersHorizontal,
  // Odoo Community–style app icons
  Handshake, ChartColumnIncreasing, Box, CreditCard, UserRoundSearch, Umbrella,
  Gauge, Send, PartyPopper, ListChecks, Check, LayoutDashboard, HandCoins, FileCheck,
  ReceiptIndianRupee,
} from "lucide-react";

type IconComponent = ComponentType<{ className?: string }>;

/** Shared props so hand-drawn icons match Lucide's 24px, 2px-stroke style. */
const svgProps: SVGProps<SVGSVGElement> = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

/** A page with a dollar sign — Odoo's Accounting/Invoicing icon. */
function FileDollar({ className }: { className?: string }) {
  return (
    <svg {...svgProps} className={className}>
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M12 9.5v9" />
      <path d="M14.5 11.25h-3.1a1.65 1.65 0 0 0 0 3.3h1.2a1.65 1.65 0 0 1 0 3.3H9.5" />
    </svg>
  );
}

/** A steering wheel — Odoo's Fleet icon. */
function SteeringWheel({ className }: { className?: string }) {
  return (
    <svg {...svgProps} className={className}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="M2 12h7.5" />
      <path d="M14.5 12H22" />
      <path d="M12 14.5V22" />
    </svg>
  );
}

const iconMap: Record<string, IconComponent> = {
  Calculator, FileText, Receipt, Table, HeartHandshake, ShoppingCart, Store,
  KeyRound, RefreshCw, Boxes, Factory, Truck, Wrench, ShieldCheck, GitBranch,
  Cpu, Globe, ShoppingBag, MessageCircle, GraduationCap, Users, UserPlus,
  Palmtree, Wallet, Star, Share2, CheckCircle, Clock, Car, Mail, Smartphone,
  Share, Workflow, CalendarDays, ClipboardList, Kanban, Timer, Headset,
  MapPin, Calendar, FolderOpen, PenLine, MessagesSquare, BookOpen,
  CalendarCheck, Phone, Puzzle, Zap, Link2, Smile, BarChart3, Layers,
  SlidersHorizontal,
  Handshake, ChartColumnIncreasing, Box, CreditCard, UserRoundSearch, Umbrella,
  Gauge, Send, PartyPopper, ListChecks, Check, LayoutDashboard, HandCoins, FileCheck,
  ReceiptIndianRupee, FileDollar, SteeringWheel,
};

interface IconProps {
  name: string;
  className?: string;
}

export default function Icon({ name, className = "h-6 w-6" }: IconProps) {
  const Glyph = iconMap[name] || Boxes;
  return <Glyph className={className} />;
}
