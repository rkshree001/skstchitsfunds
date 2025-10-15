import { useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Building2,
  FileText,
  Brain,
  Settings,
  Bell,
  Download,
  HelpCircle,
  TrendingUp,
  Network,
  DollarSign,
  FileCheck,
  Activity,
  Database,
  BarChart3,
  MapPin,
  Users,
  Target,
  Briefcase,
  Menu,
  Home
} from "lucide-react";
import AIAssistantChat from "@/components/AIAssistantChat";

const navItems = [
  { title: "Dashboard", path: "/sadmin/dashboard", icon: Home },
  { title: "Branch Management", path: "/sadmin/branch-management", icon: Building2 },
  { title: "Add Branch", path: "/sadmin/add-branch", icon: Briefcase },
  { title: "Branch Overview", path: "/sadmin/branch-overview", icon: MapPin },
  { title: "Compliance Reports", path: "/sadmin/compliance-reports", icon: FileText },
  { title: "AI Insights", path: "/sadmin/ai-insights", icon: Brain },
  { title: "Settings", path: "/sadmin/settings", icon: Settings },
  { title: "Notifications", path: "/sadmin/notifications", icon: Bell },
  { title: "Downloads", path: "/sadmin/downloads", icon: Download },
  { title: "Help Center", path: "/sadmin/help", icon: HelpCircle },
];

export default function SadminLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const NavContent = () => (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b">
        <h2 className="text-xl font-bold">Super Admin</h2>
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
          <h1 className="text-lg font-bold">Super Admin</h1>
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

      {/* AI Assistant Chat */}
      <AIAssistantChat portalType="sadmin" />
    </div>
  );
}
