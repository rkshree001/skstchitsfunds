import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { LogOut, Calculator, Receipt, HelpCircle, TrendingUp, Calendar, IndianRupee } from "lucide-react";

const UserDashboard = () => {
  const navigate = useNavigate();

  const chitDetails = {
    type: "1-Year Chit Plan",
    amount: 100000,
    premium: 10000,
    interest: 5,
    duration: 12,
    paidMonths: 6,
    nextPayment: "15 Jan 2025",
  };

  const paymentCalendar = [
    { month: "Jan 2024", status: "paid" },
    { month: "Feb 2024", status: "paid" },
    { month: "Mar 2024", status: "paid" },
    { month: "Apr 2024", status: "paid" },
    { month: "May 2024", status: "paid" },
    { month: "Jun 2024", status: "paid" },
    { month: "Jul 2024", status: "pending" },
    { month: "Aug 2024", status: "pending" },
    { month: "Sep 2024", status: "pending" },
    { month: "Oct 2024", status: "pending" },
    { month: "Nov 2024", status: "pending" },
    { month: "Dec 2024", status: "pending" },
  ];

  const recentTransactions = [
    { id: 1, date: "15 Jun 2024", type: "Premium Payment", amount: 10000, status: "completed" },
    { id: 2, date: "15 May 2024", type: "Premium Payment", amount: 10000, status: "completed" },
    { id: 3, date: "15 Apr 2024", type: "Premium Payment", amount: 10000, status: "completed" },
    { id: 4, date: "15 Mar 2024", type: "Premium Payment", amount: 10000, status: "completed" },
    { id: 5, date: "15 Feb 2024", type: "Premium Payment", amount: 10000, status: "completed" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">User Dashboard</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-muted-foreground hidden md:inline">Welcome, Rajesh Kumar</span>
            <Button onClick={() => navigate("/")} variant="outline" size="sm">
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="shadow-soft">
            <CardHeader className="pb-2">
              <CardDescription>Chit Amount</CardDescription>
              <CardTitle className="text-3xl">₹{chitDetails.amount.toLocaleString()}</CardTitle>
            </CardHeader>
          </Card>

          <Card className="shadow-soft">
            <CardHeader className="pb-2">
              <CardDescription>Monthly Premium</CardDescription>
              <CardTitle className="text-3xl">₹{chitDetails.premium.toLocaleString()}</CardTitle>
            </CardHeader>
          </Card>

          <Card className="shadow-soft">
            <CardHeader className="pb-2">
              <CardDescription>Interest Rate</CardDescription>
              <CardTitle className="text-3xl">{chitDetails.interest}%</CardTitle>
            </CardHeader>
          </Card>

          <Card className="shadow-soft">
            <CardHeader className="pb-2">
              <CardDescription>Payments Made</CardDescription>
              <CardTitle className="text-3xl">{chitDetails.paidMonths}/{chitDetails.duration}</CardTitle>
            </CardHeader>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Chit Details */}
          <Card className="lg:col-span-2 shadow-medium">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Your Active Chit Plan</CardTitle>
                  <CardDescription>1-Year savings plan with competitive returns</CardDescription>
                </div>
                <Badge variant="default" className="bg-success">Active</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Plan Type</p>
                  <p className="font-semibold">{chitDetails.type}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Next Payment Due</p>
                  <p className="font-semibold text-warning">{chitDetails.nextPayment}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Total Paid So Far</p>
                  <p className="font-semibold text-success">₹{(chitDetails.premium * chitDetails.paidMonths).toLocaleString()}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Remaining Amount</p>
                  <p className="font-semibold">₹{(chitDetails.premium * (chitDetails.duration - chitDetails.paidMonths)).toLocaleString()}</p>
                </div>
              </div>
              
              <div className="pt-4 border-t">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Payment Progress</span>
                  <span className="text-sm text-muted-foreground">{Math.round((chitDetails.paidMonths / chitDetails.duration) * 100)}% Complete</span>
                </div>
                <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full gradient-primary rounded-full transition-all"
                    style={{ width: `${(chitDetails.paidMonths / chitDetails.duration) * 100}%` }}
                  ></div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Manage your account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button onClick={() => navigate("/calculator")} variant="outline" className="w-full justify-start">
                <Calculator className="h-4 w-4 mr-2" />
                Calculate Returns
              </Button>
              <Button onClick={() => navigate("/user/transactions")} variant="outline" className="w-full justify-start">
                <Receipt className="h-4 w-4 mr-2" />
                View Transactions
              </Button>
              <Button onClick={() => navigate("/support")} variant="outline" className="w-full justify-start">
                <HelpCircle className="h-4 w-4 mr-2" />
                Support & Help
              </Button>
              <Button variant="default" className="w-full">
                <IndianRupee className="h-4 w-4 mr-2" />
                Pay Premium Now
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Payment Calendar */}
        <Card className="shadow-medium mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Payment Calendar (12 Months)
            </CardTitle>
            <CardDescription>Track your monthly premium payments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {paymentCalendar.map((month, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-lg border-2 text-center transition-all ${
                    month.status === "paid"
                      ? "border-success bg-success/10"
                      : "border-border bg-muted/50"
                  }`}
                >
                  <p className="text-sm font-medium mb-1">{month.month}</p>
                  <Badge variant={month.status === "paid" ? "default" : "secondary"} className={month.status === "paid" ? "bg-success" : ""}>
                    {month.status === "paid" ? "Paid" : "Pending"}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Transactions */}
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Recent Transactions
            </CardTitle>
            <CardDescription>Your last 5 payment records</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-2">Date</th>
                    <th className="text-left py-3 px-2">Type</th>
                    <th className="text-right py-3 px-2">Amount</th>
                    <th className="text-center py-3 px-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentTransactions.map((txn) => (
                    <tr key={txn.id} className="border-b last:border-0">
                      <td className="py-3 px-2 text-sm">{txn.date}</td>
                      <td className="py-3 px-2 text-sm">{txn.type}</td>
                      <td className="py-3 px-2 text-sm text-right font-medium">₹{txn.amount.toLocaleString()}</td>
                      <td className="py-3 px-2 text-center">
                        <Badge variant="default" className="bg-success">
                          {txn.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserDashboard;
