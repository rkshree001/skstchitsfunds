import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  MessageSquare,
  Bell,
  UserPlus,
  Megaphone,
  Bell as BellIcon,
  Download,
  HelpCircle,
  BarChart3,
  MessageCircle,
  Users,
  FileText,
  Send,
  Activity,
  Inbox,
  Clock
} from "lucide-react";

const modules = [
  {
    title: "Tickets",
    description: "Track & resolve user issues",
    icon: MessageSquare,
    path: "/support/tickets",
    color: "text-blue-500"
  },
  {
    title: "Bulk Notifications",
    description: "Send SMS/email to all users",
    icon: Bell,
    path: "/support/bulk-notifications",
    color: "text-purple-500"
  },
  {
    title: "Onboarding Assistant",
    description: "Guide new users step-by-step",
    icon: UserPlus,
    path: "/support/onboarding",
    color: "text-green-500"
  },
  {
    title: "Promotions",
    description: "Manage offers & schemes",
    icon: Megaphone,
    path: "/support/promotions",
    color: "text-orange-500"
  },
  {
    title: "Chat Support",
    description: "Real-time customer support",
    icon: MessageCircle,
    path: "/support/chat",
    color: "text-cyan-500"
  },
  {
    title: "User Queries",
    description: "FAQ & knowledge base manager",
    icon: Inbox,
    path: "/support/queries",
    color: "text-indigo-500"
  },
  {
    title: "Communication Center",
    description: "Multi-channel messaging hub",
    icon: Send,
    path: "/support/communications",
    color: "text-pink-500"
  },
  {
    title: "Ticket Analytics",
    description: "Resolution time & metrics",
    icon: BarChart3,
    path: "/support/ticket-analytics",
    color: "text-yellow-500"
  },
  {
    title: "User Feedback Review",
    description: "Monitor customer satisfaction",
    icon: FileText,
    path: "/support/feedback-review",
    color: "text-lime-500"
  },
  {
    title: "Response Templates",
    description: "Pre-built message templates",
    icon: FileText,
    path: "/support/templates",
    color: "text-teal-500"
  },
  {
    title: "Escalation Manager",
    description: "Handle priority issues",
    icon: Clock,
    path: "/support/escalations",
    color: "text-red-500"
  },
  {
    title: "Notifications",
    description: "Support team alerts",
    icon: BellIcon,
    path: "/support/notifications",
    color: "text-violet-500"
  },
  {
    title: "Downloads",
    description: "Support documents & logs",
    icon: Download,
    path: "/support/downloads",
    color: "text-rose-500"
  },
  {
    title: "Help Center",
    description: "Support team guide",
    icon: HelpCircle,
    path: "/support/help",
    color: "text-fuchsia-500"
  },
  {
    title: "Dashboard",
    description: "Support metrics overview",
    icon: Activity,
    path: "/support/dashboard",
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
              <h1 className="text-3xl font-bold">Support Center</h1>
              <p className="text-muted-foreground mt-1">Customer assistance & communication hub</p>
            </div>
            <Button onClick={() => navigate("/support/dashboard")} variant="outline">
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
