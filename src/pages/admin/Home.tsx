import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
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
  BarChart3
} from "lucide-react";

const modules = [
  {
    title: "User Management",
    description: "Add, edit & manage users",
    icon: Users,
    path: "/admin/user-management",
    color: "text-blue-500"
  },
  {
    title: "Field Collection Tracking",
    description: "GPS routes & collection status",
    icon: MapPin,
    path: "/admin/field-tracking",
    color: "text-green-500"
  },
  {
    title: "Branch Performance",
    description: "KPIs & comparative analysis",
    icon: TrendingUp,
    path: "/admin/branch-performance",
    color: "text-purple-500"
  },
  {
    title: "Activity Log",
    description: "Audit trail of all actions",
    icon: Clock,
    path: "/admin/activity-log",
    color: "text-orange-500"
  },
  {
    title: "Role Management",
    description: "User roles & permissions",
    icon: Shield,
    path: "/admin/role-management",
    color: "text-red-500"
  },
  {
    title: "Payment Updates",
    description: "Process & verify payments",
    icon: CreditCard,
    path: "/admin/payment-update",
    color: "text-indigo-500"
  },
  {
    title: "Expense Tracker",
    description: "Operational costs & commissions",
    icon: DollarSign,
    path: "/admin/expenses",
    color: "text-cyan-500"
  },
  {
    title: "Custom Reports",
    description: "Build & export custom reports",
    icon: FileBarChart,
    path: "/admin/custom-reports",
    color: "text-pink-500"
  },
  {
    title: "Payment Aging",
    description: "Overdue payments analysis",
    icon: AlertCircle,
    path: "/admin/payment-aging",
    color: "text-yellow-500"
  },
  {
    title: "Task Scheduler",
    description: "Schedule collections & meetings",
    icon: Calendar,
    path: "/admin/task-scheduler",
    color: "text-lime-500"
  },
  {
    title: "Chit Health Score",
    description: "Performance metrics per chit",
    icon: Target,
    path: "/admin/chit-health",
    color: "text-teal-500"
  },
  {
    title: "Manual Adjustments",
    description: "Balance reconciliation console",
    icon: Settings,
    path: "/admin/adjustments",
    color: "text-violet-500"
  },
  {
    title: "Field Agent Management",
    description: "Assign agents & track visits",
    icon: UserPlus,
    path: "/admin/field-agents",
    color: "text-rose-500"
  },
  {
    title: "Add User",
    description: "Register new members",
    icon: UserPlus,
    path: "/admin/add-user",
    color: "text-emerald-500"
  },
  {
    title: "Notifications",
    description: "System alerts & messages",
    icon: Bell,
    path: "/admin/notifications",
    color: "text-fuchsia-500"
  },
  {
    title: "Downloads",
    description: "Reports & documents center",
    icon: Download,
    path: "/admin/downloads",
    color: "text-sky-500"
  },
  {
    title: "Help Center",
    description: "Admin guide & FAQ",
    icon: HelpCircle,
    path: "/admin/help",
    color: "text-amber-500"
  },
  {
    title: "Dashboard",
    description: "Overview & analytics",
    icon: BarChart3,
    path: "/admin/dashboard",
    color: "text-blue-600"
  }
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Admin Control Panel</h1>
              <p className="text-muted-foreground mt-1">Manage operations & monitor performance</p>
            </div>
            <Button onClick={() => navigate("/admin/dashboard")} variant="outline">
              <Activity className="h-4 w-4 mr-2" />
              Go to Dashboard
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {modules.map((module) => (
            <Card
              key={module.path}
              className="hover:shadow-lg transition-all cursor-pointer group"
              onClick={() => navigate(module.path)}
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-muted group-hover:scale-110 transition-transform ${module.color}`}>
                    <module.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">{module.title}</CardTitle>
                </div>
                <CardDescription>{module.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
