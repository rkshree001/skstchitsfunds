import { useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Wallet,
  Gavel,
  Calculator,
  CreditCard,
  BookOpen,
  TrendingUp,
  RotateCcw,
  Shield,
  Bot,
  Gift,
  MessageSquare,
  Bell,
  Download,
  HelpCircle,
  BarChart3,
  FileText,
  Trophy,
  Calendar,
  Briefcase,
  Menu,
  Home,
  RefreshCw,
  Settings,
  Activity,
  DollarSign,
  Target,
  QrCode,
  Users,
  Brain,
  Lightbulb,
  Globe,
  Code,
  Zap
} from "lucide-react";

const navItems = [
  { title: "Dashboard", path: "/user/dashboard", icon: Home },
  { title: "My Chits", path: "/user/my-chits", icon: Wallet },
  { title: "Auctions", path: "/user/auctions", icon: Gavel },
  { title: "Payout Calculator", path: "/user/payout-calculator", icon: Calculator },
  { title: "Payments", path: "/user/payments", icon: CreditCard },
  { title: "Ledger", path: "/user/ledger", icon: BookOpen },
  { title: "Analytics", path: "/user/analytics", icon: TrendingUp },
  { title: "Refunds", path: "/user/refunds", icon: RotateCcw },
  { title: "KYC", path: "/user/kyc", icon: Shield },
  { title: "AI Assistant", path: "/user/ai-assistant", icon: Bot },
  { title: "Referrals", path: "/user/referrals", icon: Gift },
  { title: "Feedback", path: "/user/feedback", icon: MessageSquare },
  { title: "Rewards", path: "/user/rewards", icon: Trophy },
  { title: "Passbook", path: "/user/passbook", icon: FileText },
  { title: "Transactions", path: "/user/transactions", icon: BarChart3 },
  { title: "Calendar", path: "/user/calendar", icon: Calendar },
  { title: "Chit Plans", path: "/user/chit-plans", icon: Briefcase },
  { title: "Chit Lifecycle", path: "/user/chit-lifecycle", icon: Activity },
  { title: "Auto Renewal", path: "/user/auto-renewal", icon: RefreshCw },
  { title: "Plan Templates", path: "/user/plan-templates", icon: Settings },
  { title: "QR Payment", path: "/user/qr-payment", icon: QrCode },
  { title: "Penalty Calculator", path: "/user/penalty-calculator", icon: DollarSign },
  { title: "ROI Prediction", path: "/user/roi-prediction", icon: Target },
  { title: "Leaderboard", path: "/user/leaderboard", icon: Users },
  { title: "AI Financial Advisor", path: "/user/ai-advisor", icon: Brain },
  { title: "Notifications", path: "/user/notifications", icon: Bell },
  { title: "Downloads", path: "/user/downloads", icon: Download },
  { title: "Help Center", path: "/user/help", icon: HelpCircle },
];

export default function UserLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const NavContent = () => (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b">
        <h2 className="text-xl font-bold">User Portal</h2>
      </div>
      <nav className="flex-1 overflow-y-auto p-4 space-y-1">
        {navItems.map((item) => (
          <Button
            key={item.path}
            variant={isActive(item.path) ? "secondary" : "ghost"}
            className="w-full justify-start"
            onClick={() => {
              navigate(item.path);
              setMobileOpen(false);
            }}
          >
            <item.icon className="h-4 w-4 mr-2" />
            {item.title}
          </Button>
        ))}
      </nav>
    </div>
  );

  return (
    <div className="min-h-screen flex w-full">
      {/* Desktop Sidebar - Fixed/Sticky */}
      <aside className="hidden md:flex md:fixed md:left-0 md:top-0 md:h-screen w-64 border-r bg-card z-40">
        <NavContent />
      </aside>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-card border-b">
        <div className="flex items-center justify-between p-4">
          <h1 className="text-lg font-bold">User Portal</h1>
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-64">
              <NavContent />
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 md:mt-0 mt-16 md:ml-64">
        <Outlet />
      </main>
    </div>
  );
}
