import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  Building2,
  FileText,
  Brain,
  Settings,
  Bell,
  Download,
  HelpCircle,
  TrendingUp,
  Shield,
  Network,
  DollarSign,
  FileCheck,
  Activity,
  Database,
  BarChart3,
  MapPin,
  Users,
  Target,
  Briefcase
} from "lucide-react";

const modules = [
  {
    title: "Branch Management",
    description: "Add, edit & monitor branches",
    icon: Building2,
    path: "/sadmin/branch-management",
    color: "text-blue-500"
  },
  {
    title: "Branch Network View",
    description: "Hierarchical organization structure",
    icon: Network,
    path: "/sadmin/branch-network",
    color: "text-purple-500"
  },
  {
    title: "Multi-Branch Overview",
    description: "Global heatmap & drill-down",
    icon: MapPin,
    path: "/sadmin/branch-overview",
    color: "text-green-500"
  },
  {
    title: "Compliance Reports",
    description: "Regulatory & SEBI reports",
    icon: FileText,
    path: "/sadmin/compliance-reports",
    color: "text-red-500"
  },
  {
    title: "AI Insights",
    description: "Predictive analytics & anomalies",
    icon: Brain,
    path: "/sadmin/ai-insights",
    color: "text-indigo-500"
  },
  {
    title: "System Settings",
    description: "Global parameters & configurations",
    icon: Settings,
    path: "/sadmin/settings",
    color: "text-orange-500"
  },
  {
    title: "Consolidated Fund Statement",
    description: "Enterprise-wide financial overview",
    icon: DollarSign,
    path: "/sadmin/fund-statement",
    color: "text-cyan-500"
  },
  {
    title: "System Logs & Audit",
    description: "Complete audit trail across system",
    icon: FileCheck,
    path: "/sadmin/system-logs",
    color: "text-pink-500"
  },
  {
    title: "Profit & Loss Simulation",
    description: "Forecast ROI & operational costs",
    icon: TrendingUp,
    path: "/sadmin/profit-loss",
    color: "text-yellow-500"
  },
  {
    title: "Chit Health Dashboard",
    description: "Performance metrics across all chits",
    icon: Target,
    path: "/sadmin/chit-health",
    color: "text-lime-500"
  },
  {
    title: "User Analytics",
    description: "Enterprise user insights",
    icon: Users,
    path: "/sadmin/user-analytics",
    color: "text-teal-500"
  },
  {
    title: "Backup & Restore",
    description: "System backup management",
    icon: Database,
    path: "/sadmin/backup",
    color: "text-violet-500"
  },
  {
    title: "Add Branch",
    description: "Onboard new branches",
    icon: Briefcase,
    path: "/sadmin/add-branch",
    color: "text-rose-500"
  },
  {
    title: "Notifications",
    description: "Enterprise alerts & messages",
    icon: Bell,
    path: "/sadmin/notifications",
    color: "text-fuchsia-500"
  },
  {
    title: "Downloads",
    description: "Enterprise reports & documents",
    icon: Download,
    path: "/sadmin/downloads",
    color: "text-sky-500"
  },
  {
    title: "Help Center",
    description: "Super admin documentation",
    icon: HelpCircle,
    path: "/sadmin/help",
    color: "text-amber-500"
  },
  {
    title: "Dashboard",
    description: "Executive overview & KPIs",
    icon: BarChart3,
    path: "/sadmin/dashboard",
    color: "text-emerald-500"
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
              <h1 className="text-3xl font-bold">Super Admin Console</h1>
              <p className="text-muted-foreground mt-1">Enterprise control & strategic insights</p>
            </div>
            <Button onClick={() => navigate("/sadmin/dashboard")} variant="outline">
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
