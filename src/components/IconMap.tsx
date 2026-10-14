import {
  Calculator, FileText, Receipt, Table, HeartHandshake, ShoppingCart, Store,
  KeyRound, RefreshCw, Boxes, Factory, Truck, Wrench, ShieldCheck, GitBranch,
  Cpu, Globe, ShoppingBag, MessageCircle, GraduationCap, Users, UserPlus,
  Palmtree, Wallet, Star, Share2, CheckCircle, Clock, Car, Mail, Smartphone,
  Share, Workflow, CalendarDays, ClipboardList, Kanban, Timer, Headset,
  MapPin, Calendar, FolderOpen, PenLine, MessagesSquare, BookOpen,
  CalendarCheck, Phone, Puzzle, Zap, Link2, Smile, BarChart3, Layers,
  SlidersHorizontal, type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Calculator, FileText, Receipt, Table, HeartHandshake, ShoppingCart, Store,
  KeyRound, RefreshCw, Boxes, Factory, Truck, Wrench, ShieldCheck, GitBranch,
  Cpu, Globe, ShoppingBag, MessageCircle, GraduationCap, Users, UserPlus,
  Palmtree, Wallet, Star, Share2, CheckCircle, Clock, Car, Mail, Smartphone,
  Share, Workflow, CalendarDays, ClipboardList, Kanban, Timer, Headset,
  MapPin, Calendar, FolderOpen, PenLine, MessagesSquare, BookOpen,
  CalendarCheck, Phone, Puzzle, Zap, Link2, Smile, BarChart3, Layers,
  SlidersHorizontal,
};

interface IconProps {
  name: string;
  className?: string;
}

export default function Icon({ name, className = "h-6 w-6" }: IconProps) {
  const Lucide = iconMap[name] || Boxes;
  return <Lucide className={className} />;
}
