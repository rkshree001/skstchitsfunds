import { useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Users,
  MapPin,
  TrendingUp,
  Clock,
  Shield,
  CreditCard,
  Bell,
  Download,
  HelpCircle,
  FileText,
  DollarSign,
  Settings,
  FileBarChart,
  AlertCircle,
  Calendar,
  Target,
  Activity,
  UserPlus,
  BarChart3,
  Menu,
  Home
} from "lucide-react";

const navItems = [
  { title: "Dashboard", path: "/admin/dashboard", icon: Home },
  { title: "User Management", path: "/admin/user-management", icon: Users },
  { title: "Add User", path: "/admin/add-user", icon: UserPlus },
  { title: "Field Tracking", path: "/admin/field-tracking", icon: MapPin },
  { title: "Branch Performance", path: "/admin/branch-performance", icon: TrendingUp },
  { title: "Activity Log", path: "/admin/activity-log", icon: Clock },
  { title: "Role Management", path: "/admin/role-management", icon: Shield },
  { title: "Payment Update", path: "/admin/payment-update", icon: CreditCard },
  { title: "Expenses", path: "/admin/expenses", icon: DollarSign },
  { title: "Custom Reports", path: "/admin/custom-reports", icon: FileBarChart },
  { title: "Payment Aging", path: "/admin/payment-aging", icon: AlertCircle },
  { title: "Task Scheduler", path: "/admin/task-scheduler", icon: Calendar },
  { title: "Chit Health", path: "/admin/chit-health", icon: Target },
  { title: "Notifications", path: "/admin/notifications", icon: Bell },
  { title: "Downloads", path: "/admin/downloads", icon: Download },
  { title: "Help Center", path: "/admin/help", icon: HelpCircle },
];

export default function AdminLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const NavContent = () => (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b">
        <h2 className="text-xl font-bold">Admin Panel</h2>
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
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-64 border-r bg-card">
        <NavContent />
      </aside>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-card border-b">
        <div className="flex items-center justify-between p-4">
          <h1 className="text-lg font-bold">Admin Panel</h1>
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
      <main className="flex-1 md:mt-0 mt-16">
        <Outlet />
      </main>
    </div>
  );
}
