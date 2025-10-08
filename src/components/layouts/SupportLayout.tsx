import { useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  MessageSquare,
  Bell,
  UserPlus,
  Megaphone,
  Download,
  HelpCircle,
  BarChart3,
  MessageCircle,
  FileText,
  Send,
  Activity,
  Inbox,
  Clock,
  Menu,
  Home
} from "lucide-react";

const navItems = [
  { title: "Dashboard", path: "/support/dashboard", icon: Home },
  { title: "Tickets", path: "/support/tickets", icon: MessageSquare },
  { title: "Bulk Notifications", path: "/support/bulk-notifications", icon: Bell },
  { title: "Onboarding", path: "/support/onboarding", icon: UserPlus },
  { title: "Promotions", path: "/support/promotions", icon: Megaphone },
  { title: "Notifications", path: "/support/notifications", icon: Bell },
  { title: "Downloads", path: "/support/downloads", icon: Download },
  { title: "Help Center", path: "/support/help", icon: HelpCircle },
];

export default function SupportLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const NavContent = () => (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b">
        <h2 className="text-xl font-bold">Support Center</h2>
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
          <h1 className="text-lg font-bold">Support Center</h1>
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
