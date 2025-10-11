import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { TrendingUp, Users, Trophy, Calendar, ArrowRight, Lock, Eye } from "lucide-react";

const GuestDashboard = () => {
  const navigate = useNavigate();

  const stats = [
    { label: "Active Members", value: "15,000+", icon: Users, color: "text-blue-600" },
    { label: "Total Chit Value", value: "₹50 Cr+", icon: TrendingUp, color: "text-green-600" },
    { label: "Monthly Auctions", value: "200+", icon: Trophy, color: "text-purple-600" },
    { label: "Years in Business", value: "15+", icon: Calendar, color: "text-orange-600" },
  ];

  const demoChits = [
    {
      name: "Premium Gold Plan",
      amount: "₹2,00,000",
      duration: "20 months",
      monthly: "₹10,000",
      members: 20,
      status: "Active",
    },
    {
      name: "Silver Saver Plan",
      amount: "₹1,00,000",
      duration: "12 months",
      monthly: "₹8,333",
      members: 12,
      status: "Active",
    },
    {
      name: "Diamond Elite Plan",
      amount: "₹5,00,000",
      duration: "24 months",
      monthly: "₹20,833",
      members: 24,
      status: "Active",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold">SKST Chit Funds - Demo Mode</h1>
            <Badge variant="outline" className="bg-blue-100 text-blue-700 border-blue-300">
              <Eye className="h-3 w-3 mr-1" />
              Guest Access
            </Badge>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => navigate("/login")}>
              Login
            </Button>
            <Button onClick={() => navigate("/register")}>
              Sign Up
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-2">Welcome to Guest Demo Mode</h2>
          <p className="text-muted-foreground mb-4">
            Explore our platform with sample data. Create an account to access full features and start your investment journey.
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Lock className="h-4 w-4" />
            <span>Some features are locked in demo mode. Sign up for full access.</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-2">
                    <Icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Available Chit Plans (Demo)</CardTitle>
            <CardDescription>Sample chit fund plans available on our platform</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {demoChits.map((chit, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{chit.name}</h3>
                    <div className="flex gap-4 text-sm text-muted-foreground">
                      <span>Amount: {chit.amount}</span>
                      <span>Duration: {chit.duration}</span>
                      <span>Monthly: {chit.monthly}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="text-sm font-medium">{chit.members}</div>
                      <div className="text-xs text-muted-foreground">Members</div>
                    </div>
                    <Badge variant="outline" className="bg-green-50 text-green-700">
                      {chit.status}
                    </Badge>
                    <Button size="sm" variant="outline" disabled>
                      <Lock className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-primary text-primary-foreground">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">Ready to Start Your Investment Journey?</h3>
                <p className="text-primary-foreground/90">Join thousands of satisfied members and secure your financial future today.</p>
              </div>
              <Button size="lg" variant="secondary" onClick={() => navigate("/register")}>
                Create Account
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GuestDashboard;
