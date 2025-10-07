import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Briefcase, TrendingUp, Users, Calendar, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ChitPlans = () => {
  const navigate = useNavigate();

  const plans = [
    {
      id: "PLAN001",
      name: "1-Year Premium Chit",
      amount: 120000,
      monthly: 10000,
      duration: 12,
      members: 50,
      enrolled: 45,
      interestRate: 5,
      status: "Open",
      features: ["Monthly Auctions", "Dividend Share", "Flexible Payments"],
      startDate: "2025-01-01"
    },
    {
      id: "PLAN002",
      name: "2-Year Gold Chit",
      amount: 240000,
      monthly: 10000,
      duration: 24,
      members: 100,
      enrolled: 92,
      interestRate: 6,
      status: "Open",
      features: ["Higher Returns", "Priority Support", "Bonus on Completion"],
      startDate: "2025-01-15"
    },
    {
      id: "PLAN003",
      name: "6-Month Express Chit",
      amount: 60000,
      monthly: 10000,
      duration: 6,
      members: 30,
      enrolled: 30,
      interestRate: 4,
      status: "Full",
      features: ["Quick Completion", "Low Commitment", "Perfect for Beginners"],
      startDate: "2024-12-01"
    },
    {
      id: "PLAN004",
      name: "3-Year Platinum Chit",
      amount: 360000,
      monthly: 10000,
      duration: 36,
      members: 150,
      enrolled: 120,
      interestRate: 7,
      status: "Open",
      features: ["Maximum Returns", "VIP Benefits", "Loyalty Rewards"],
      startDate: "2025-02-01"
    },
    {
      id: "PLAN005",
      name: "Business Growth Chit",
      amount: 500000,
      monthly: 20000,
      duration: 25,
      members: 75,
      enrolled: 60,
      interestRate: 8,
      status: "Open",
      features: ["High Investment", "Business Focused", "Tax Benefits"],
      startDate: "2025-01-20"
    },
    {
      id: "PLAN006",
      name: "Family Savings Chit",
      amount: 180000,
      monthly: 15000,
      duration: 12,
      members: 60,
      enrolled: 55,
      interestRate: 5.5,
      status: "Open",
      features: ["Family Plans", "Educational Support", "Emergency Fund"],
      startDate: "2025-02-15"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button onClick={() => navigate("/user/home")} variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <h1 className="text-2xl font-bold">Available Chit Plans</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-6">
          {plans.map((plan) => (
            <Card key={plan.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Briefcase className="h-5 w-5" />
                      {plan.name}
                    </CardTitle>
                    <CardDescription className="mt-1">{plan.id}</CardDescription>
                  </div>
                  <Badge variant={plan.status === "Open" ? "default" : "secondary"}>
                    {plan.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 rounded-lg bg-muted/50">
                    <div className="text-sm text-muted-foreground">Total Value</div>
                    <div className="text-2xl font-bold">₹{plan.amount.toLocaleString()}</div>
                  </div>
                  <div className="p-3 rounded-lg bg-muted/50">
                    <div className="text-sm text-muted-foreground">Monthly</div>
                    <div className="text-2xl font-bold">₹{plan.monthly.toLocaleString()}</div>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Duration
                    </span>
                    <span className="font-medium">{plan.duration} months</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      Enrollment
                    </span>
                    <span className="font-medium">{plan.enrolled}/{plan.members} members</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground flex items-center gap-2">
                      <TrendingUp className="h-4 w-4" />
                      Interest Rate
                    </span>
                    <span className="font-medium text-green-500">{plan.interestRate}%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Start Date
                    </span>
                    <span className="font-medium">{plan.startDate}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  <div className="text-sm font-medium">Plan Features:</div>
                  <div className="space-y-1">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <Button
                  className="w-full"
                  disabled={plan.status === "Full"}
                  onClick={() => navigate(`/user/my-chits?enroll=${plan.id}`)}
                >
                  {plan.status === "Full" ? "Plan Full" : "Enroll Now"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChitPlans;
