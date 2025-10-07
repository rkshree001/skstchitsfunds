import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
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
  Star
} from "lucide-react";

const modules = [
  {
    title: "My Chits",
    description: "Multi-chit enrollment & tracking",
    icon: Wallet,
    path: "/user/my-chits",
    color: "text-blue-500"
  },
  {
    title: "Auctions",
    description: "Bidding system & auction history",
    icon: Gavel,
    path: "/user/auctions",
    color: "text-purple-500"
  },
  {
    title: "Payout Calculator",
    description: "Estimate returns dynamically",
    icon: Calculator,
    path: "/user/payout-calculator",
    color: "text-green-500"
  },
  {
    title: "Payments",
    description: "Payment gateway integration",
    icon: CreditCard,
    path: "/user/payments",
    color: "text-indigo-500"
  },
  {
    title: "Ledger",
    description: "Account ledger & transactions",
    icon: BookOpen,
    path: "/user/ledger",
    color: "text-orange-500"
  },
  {
    title: "Analytics",
    description: "Investment ROI & predictions",
    icon: TrendingUp,
    path: "/user/analytics",
    color: "text-pink-500"
  },
  {
    title: "Refunds & Penalties",
    description: "Late fees & refund tracking",
    icon: RotateCcw,
    path: "/user/refunds",
    color: "text-red-500"
  },
  {
    title: "KYC Verification",
    description: "Document upload & verification",
    icon: Shield,
    path: "/user/kyc",
    color: "text-cyan-500"
  },
  {
    title: "AI Assistant",
    description: "24/7 chit queries support",
    icon: Bot,
    path: "/user/ai-assistant",
    color: "text-violet-500"
  },
  {
    title: "Referrals",
    description: "Invite friends & earn rewards",
    icon: Gift,
    path: "/user/referrals",
    color: "text-yellow-500"
  },
  {
    title: "Rewards & Loyalty",
    description: "Points, leaderboard & benefits",
    icon: Trophy,
    path: "/user/rewards",
    color: "text-amber-500"
  },
  {
    title: "Digital Passbook",
    description: "Downloadable transaction history",
    icon: FileText,
    path: "/user/passbook",
    color: "text-lime-500"
  },
  {
    title: "Transactions",
    description: "Complete payment history",
    icon: BarChart3,
    path: "/user/transactions",
    color: "text-teal-500"
  },
  {
    title: "Feedback",
    description: "Rate your experience",
    icon: MessageSquare,
    path: "/user/feedback",
    color: "text-rose-500"
  },
  {
    title: "Calendar",
    description: "Payment schedule & meetings",
    icon: Calendar,
    path: "/user/calendar",
    color: "text-sky-500"
  },
  {
    title: "Chit Plans",
    description: "Browse available chit schemes",
    icon: Briefcase,
    path: "/user/chit-plans",
    color: "text-emerald-500"
  },
  {
    title: "Notifications",
    description: "Alerts & reminders",
    icon: Bell,
    path: "/user/notifications",
    color: "text-fuchsia-500"
  },
  {
    title: "Downloads",
    description: "Receipts, reports & documents",
    icon: Download,
    path: "/user/downloads",
    color: "text-blue-600"
  },
  {
    title: "Help Center",
    description: "FAQ & support articles",
    icon: HelpCircle,
    path: "/user/help",
    color: "text-purple-600"
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
              <h1 className="text-3xl font-bold">User Dashboard</h1>
              <p className="text-muted-foreground mt-1">Manage your chit funds & investments</p>
            </div>
            <Button onClick={() => navigate("/user/dashboard")} variant="outline">
              <Star className="h-4 w-4 mr-2" />
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
