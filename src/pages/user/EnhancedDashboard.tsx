import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  TrendingUp,
  TrendingDown,
  Calendar,
  DollarSign,
  Users,
  Target,
  ArrowUpRight,
  BarChart3,
  CheckCircle,
  Clock,
  AlertCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const EnhancedDashboard = () => {
  const navigate = useNavigate();

  const activeChits = [
    {
      name: "Premium Gold Chit",
      plan: "₹2,00,000",
      monthlyPayment: "₹8,000",
      paidInstallments: 12,
      totalInstallments: 25,
      nextPayment: "15th Oct",
      status: "active",
    },
    {
      name: "Silver Saver Scheme",
      plan: "₹1,00,000",
      monthlyPayment: "₹4,000",
      paidInstallments: 8,
      totalInstallments: 25,
      nextPayment: "20th Oct",
      status: "active",
    },
  ];

  const recentTransactions = [
    {
      date: "8/10/2024",
      time: "10:30 am",
      type: "Payment",
      amount: "₹5,000",
      plan: "Chit Plan A - ₹1,00,000",
      status: "completed",
      reference: "TXN001234567890",
    },
    {
      date: "5/10/2024",
      time: "02:15 pm",
      type: "Payout",
      amount: "₹85,000",
      plan: "Chit Plan B - ₹2,00,000",
      status: "completed",
      reference: "TXN001234567891",
    },
    {
      date: "3/10/2024",
      time: "09:45 am",
      type: "Payment",
      amount: "₹10,000",
      plan: "Chit Plan C - ₹5,00,000",
      status: "pending",
      reference: "TXN001234567892",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <Card className="p-6 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-1">
              Welcome back, Rajesh Kumar! 👋
            </h1>
            <p className="text-muted-foreground">
              Here's your chit fund overview as of today @ {new Date().toLocaleString()}
            </p>
          </div>
        </div>
      </Card>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-950 rounded-lg flex items-center justify-center">
              <DollarSign className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <Badge className="bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-400">
              <TrendingUp className="h-3 w-3 mr-1" />
              41.7%
            </Badge>
          </div>
          <h3 className="text-2xl font-bold mb-1">₹1,20,000</h3>
          <p className="text-sm text-muted-foreground">Total Investment</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-950 rounded-lg flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <Badge className="bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-400">
              <TrendingUp className="h-3 w-3 mr-1" />
              1.3%
            </Badge>
          </div>
          <h3 className="text-2xl font-bold mb-1">₹3,65,000</h3>
          <p className="text-sm text-muted-foreground">Expected Returns</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-950 rounded-lg flex items-center justify-center">
              <Calendar className="h-6 w-6 text-orange-600 dark:text-orange-400" />
            </div>
            <Badge variant="outline">Active</Badge>
          </div>
          <h3 className="text-2xl font-bold mb-1">3</h3>
          <p className="text-sm text-muted-foreground">Active Plans</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-950 rounded-lg flex items-center justify-center">
              <Target className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <Badge className="bg-yellow-100 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-400">
              Due
            </Badge>
          </div>
          <h3 className="text-2xl font-bold mb-1">₹10,000</h3>
          <p className="text-sm text-muted-foreground">Payment Due (Tomorrow)</p>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Active Chit Funds */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Active Chit Funds</h2>
              <Button variant="ghost" size="sm" onClick={() => navigate("/user/my-chits")}>
                View All
                <ArrowUpRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
            <div className="space-y-4">
              {activeChits.map((chit, index) => (
                <Card key={index} className="p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold">{chit.name}</h3>
                      <p className="text-sm text-muted-foreground">{chit.plan}</p>
                    </div>
                    <Badge variant="outline" className="bg-green-50 text-green-700 dark:bg-green-950">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      {chit.status}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-3">
                    <div>
                      <p className="text-xs text-muted-foreground">Monthly Payment</p>
                      <p className="text-sm font-semibold">{chit.monthlyPayment}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Progress</p>
                      <p className="text-sm font-semibold">
                        {chit.paidInstallments}/{chit.totalInstallments}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Next Payment</p>
                      <p className="text-sm font-semibold">{chit.nextPayment}</p>
                    </div>
                  </div>
                  <Progress value={(chit.paidInstallments / chit.totalInstallments) * 100} className="h-2" />
                  <Button variant="outline" size="sm" className="w-full mt-3">
                    View Calendar
                  </Button>
                </Card>
              ))}
            </div>
          </Card>

          {/* Investment Analytics */}
          <Card className="p-6">
            <h2 className="text-xl font-bold mb-6">Investment Analytics</h2>
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">ROI Trend (Last 6 Months)</span>
                  <Button variant="ghost" size="sm">
                    Portfolio Distribution
                  </Button>
                </div>
                <div className="h-48 bg-muted/30 rounded-lg flex items-center justify-center">
                  <BarChart3 className="h-12 w-12 text-muted-foreground" />
                  <span className="ml-3 text-muted-foreground">Chart visualization</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Recent Transactions */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Recent Transactions</h2>
              <Button variant="ghost" size="sm" onClick={() => navigate("/user/transactions")}>
                See All
              </Button>
            </div>
            <div className="space-y-3">
              {recentTransactions.map((txn, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      txn.type === "Payment" ? "bg-blue-100 dark:bg-blue-950" : "bg-green-100 dark:bg-green-950"
                    }`}>
                      {txn.type === "Payment" ? (
                        <TrendingUp className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      ) : (
                        <TrendingDown className="h-5 w-5 text-green-600 dark:text-green-400" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium">{txn.type}</p>
                      <p className="text-xs text-muted-foreground">
                        {txn.date} | {txn.time}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">{txn.amount}</p>
                    <Badge variant="outline" className={
                      txn.status === "completed" ? "text-green-600" : "text-orange-600"
                    }>
                      {txn.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Payment Reminder */}
          <Card className="p-6">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Payment Reminder
            </h3>
            <div className="space-y-3">
              <div className="p-3 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                <p className="text-sm font-medium">Diamond Elite Plan</p>
                <p className="text-xs text-muted-foreground">Due: Tomorrow (11th Oct)</p>
                <p className="text-lg font-bold text-yellow-700 dark:text-yellow-400 mt-2">₹10,000</p>
                <Button size="sm" className="w-full mt-3">Pay Now</Button>
              </div>
            </div>
          </Card>

          {/* Quick Actions */}
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start" onClick={() => navigate("/user/calendar")}>
                <Calendar className="h-4 w-4 mr-2" />
                View Payment Calendar
              </Button>
              <Button variant="outline" className="w-full justify-start" onClick={() => navigate("/user/analytics")}>
                <BarChart3 className="h-4 w-4 mr-2" />
                View Investment Analytics
              </Button>
              <Button variant="outline" className="w-full justify-start" onClick={() => navigate("/user/chit-plans")}>
                <Target className="h-4 w-4 mr-2" />
                Browse Chit Plans
              </Button>
              <Button variant="outline" className="w-full justify-start" onClick={() => navigate("/user/auctions")}>
                <Users className="h-4 w-4 mr-2" />
                View Live Auctions
              </Button>
            </div>
          </Card>

          {/* Financial Health Score */}
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Financial Health Score</h3>
            <div className="flex items-center justify-center mb-4">
              <div className="relative w-32 h-32">
                <svg className="w-full h-full" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="3"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="3"
                    strokeDasharray="78, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-600">78</div>
                    <div className="text-xs text-muted-foreground">Good</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <p className="text-xs text-muted-foreground font-medium">AI Recommendations</p>
              <ul className="space-y-1">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                  <span className="text-muted-foreground">
                    Consider Premium Plans for better returns
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 text-yellow-600 mt-0.5" />
                  <span className="text-muted-foreground">
                    Diversify Portfolio by adding 1-2 more chit plans
                  </span>
                </li>
              </ul>
            </div>
            <Button variant="outline" size="sm" className="w-full mt-4">
              Get Detailed Analysis
            </Button>
          </Card>

          {/* Notifications */}
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Notifications</h3>
            <div className="space-y-3">
              <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                <p className="text-sm font-medium">Payment Due Reminder</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Your monthly EMI of ₹10,000 for Premium Plan is due tomorrow
                </p>
              </div>
              <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                <p className="text-sm font-medium">New Auction Starting Soon</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Premium Plus Plan auction starts 25th Oct. Join now!
                </p>
              </div>
            </div>
            <Button variant="ghost" size="sm" className="w-full mt-3" onClick={() => navigate("/user/notifications")}>
              View All
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EnhancedDashboard;
