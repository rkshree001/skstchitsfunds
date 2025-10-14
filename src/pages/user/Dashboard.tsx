import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { LogOut, Calculator, Receipt, HelpCircle, TrendingUp, Calendar, IndianRupee, PieChart, BarChart3, Wallet } from "lucide-react";
import { LineChart, Line, BarChart, Bar, AreaChart, Area, PieChart as RePieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Progress } from "@/components/ui/progress";

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

  // Realistic monthly payment & interest trends
  const paymentTrendData = [
    { month: "Jan", paid: 10000, pending: 0, interest: 417 },
    { month: "Feb", paid: 10000, pending: 0, interest: 833 },
    { month: "Mar", paid: 10000, pending: 0, interest: 1250 },
    { month: "Apr", paid: 10000, pending: 0, interest: 1667 },
    { month: "May", paid: 10000, pending: 0, interest: 2083 },
    { month: "Jun", paid: 10000, pending: 0, interest: 2500 },
    { month: "Jul", paid: 9500, pending: 500, interest: 2896 },
    { month: "Aug", paid: 10000, pending: 0, interest: 3333 },
  ];

  // Savings breakdown pie chart
  const savingsBreakdown = [
    { name: "Principal Paid", value: 79500, color: "#1e40af" },
    { name: "Interest Earned", value: 3313, color: "#10b981" },
    { name: "Bonus Credits", value: 1500, color: "#f59e0b" },
    { name: "Dividend Share", value: 2200, color: "#8b5cf6" },
  ];

  // Chit performance metrics
  const performanceData = [
    { label: "On-time Payments", value: 95, color: "bg-success" },
    { label: "Chit Completion", value: 67, color: "bg-primary" },
    { label: "Bonus Eligibility", value: 85, color: "bg-warning" },
  ];

  // Auction participation history
  const auctionData = [
    { month: "Jan", participants: 45, winner: "Self", bidAmount: 95000 },
    { month: "Feb", participants: 43, winner: "Other", bidAmount: 93000 },
    { month: "Mar", participants: 44, winner: "Other", bidAmount: 94500 },
    { month: "Apr", participants: 42, winner: "Other", bidAmount: 92000 },
    { month: "May", participants: 41, winner: "Other", bidAmount: 91500 },
    { month: "Jun", participants: 40, winner: "Other", bidAmount: 93500 },
  ];

  // Monthly returns comparison
  const returnsData = [
    { month: "Jan", expected: 417, actual: 417 },
    { month: "Feb", expected: 417, actual: 416 },
    { month: "Mar", expected: 417, actual: 417 },
    { month: "Apr", expected: 417, actual: 416 },
    { month: "May", expected: 417, actual: 417 },
    { month: "Jun", expected: 417, actual: 413 },
    { month: "Jul", expected: 417, actual: 396 },
    { month: "Aug", expected: 417, actual: 420 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/10 to-background">
      {/* Header */}
      <header className="border-b bg-card/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-white font-bold shadow-md">
              RK
            </div>
            <div>
              <h1 className="text-xl font-bold">User Dashboard</h1>
              <p className="text-xs text-muted-foreground">Manage your chit funds</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-muted-foreground hidden md:inline font-medium">Welcome, Rajesh Kumar</span>
            <Button onClick={() => navigate("/")} variant="outline" size="sm" className="shadow-sm hover:shadow-md transition-smooth">
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8 animate-fade-in">
          <Card className="shadow-soft hover-lift border-0 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <CardHeader className="pb-3">
              <CardDescription className="text-blue-100 font-medium">Chit Amount</CardDescription>
              <CardTitle className="text-4xl font-bold">₹{chitDetails.amount.toLocaleString()}</CardTitle>
              <div className="flex items-center gap-1 text-blue-100 text-sm mt-2">
                <Wallet className="h-4 w-4" />
                <span>Total Plan Value</span>
              </div>
            </CardHeader>
          </Card>

          <Card className="shadow-soft hover-lift border-0 bg-gradient-to-br from-teal-500 to-teal-600 text-white">
            <CardHeader className="pb-3">
              <CardDescription className="text-teal-100 font-medium">Monthly Premium</CardDescription>
              <CardTitle className="text-4xl font-bold">₹{chitDetails.premium.toLocaleString()}</CardTitle>
              <div className="flex items-center gap-1 text-teal-100 text-sm mt-2">
                <IndianRupee className="h-4 w-4" />
                <span>Per Month</span>
              </div>
            </CardHeader>
          </Card>

          <Card className="shadow-soft hover-lift border-0 bg-gradient-to-br from-amber-500 to-amber-600 text-white">
            <CardHeader className="pb-3">
              <CardDescription className="text-amber-100 font-medium">Interest Rate</CardDescription>
              <CardTitle className="text-4xl font-bold">{chitDetails.interest}%</CardTitle>
              <div className="flex items-center gap-1 text-amber-100 text-sm mt-2">
                <TrendingUp className="h-4 w-4" />
                <span>Annual Returns</span>
              </div>
            </CardHeader>
          </Card>

          <Card className="shadow-soft hover-lift border-0 bg-gradient-to-br from-green-500 to-green-600 text-white">
            <CardHeader className="pb-3">
              <CardDescription className="text-green-100 font-medium">Payments Made</CardDescription>
              <CardTitle className="text-4xl font-bold">{chitDetails.paidMonths}/{chitDetails.duration}</CardTitle>
              <div className="flex items-center gap-1 text-green-100 text-sm mt-2">
                <Calendar className="h-4 w-4" />
                <span>{Math.round((chitDetails.paidMonths / chitDetails.duration) * 100)}% Complete</span>
              </div>
            </CardHeader>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Chit Details */}
          <Card className="lg:col-span-2 shadow-medium hover-lift border-0 bg-gradient-to-br from-white to-blue-50/50 dark:from-card dark:to-blue-950/20">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl">Your Active Chit Plan</CardTitle>
                  <CardDescription className="text-base">1-Year savings plan with competitive returns</CardDescription>
                </div>
                <Badge variant="default" className="bg-success shadow-sm px-3 py-1 text-sm">Active</Badge>
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
          <Card className="shadow-medium hover-lift border-0 bg-gradient-to-br from-white to-teal-50/50 dark:from-card dark:to-teal-950/20">
            <CardHeader>
              <CardTitle className="text-2xl">Quick Actions</CardTitle>
              <CardDescription className="text-base">Manage your account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button onClick={() => navigate("/calculator")} variant="outline" className="w-full justify-start">
                <Calculator className="h-4 w-4 mr-2" />
                Calculate Returns
              </Button>
              <Button onClick={() => navigate("/user/my-chits")} variant="outline" className="w-full justify-start">
                <Wallet className="h-4 w-4 mr-2" />
                My Chits
              </Button>
              <Button onClick={() => navigate("/user/auctions")} variant="outline" className="w-full justify-start">
                <TrendingUp className="h-4 w-4 mr-2" />
                Auctions
              </Button>
              <Button onClick={() => navigate("/user/transactions")} variant="outline" className="w-full justify-start">
                <Receipt className="h-4 w-4 mr-2" />
                Transactions
              </Button>
              <Button onClick={() => navigate("/user/kyc")} variant="outline" className="w-full justify-start">
                <HelpCircle className="h-4 w-4 mr-2" />
                KYC Status
              </Button>
              <Button onClick={() => navigate("/user/referrals")} variant="outline" className="w-full justify-start">
                <Calendar className="h-4 w-4 mr-2" />
                Referrals
              </Button>
              <Button onClick={() => navigate("/support")} variant="outline" className="w-full justify-start">
                <HelpCircle className="h-4 w-4 mr-2" />
                Support & Help
              </Button>
              <Button 
                variant="default" 
                className="w-full"
                onClick={() => {
                  // Mock payment
                  const confirmed = window.confirm("Proceed with payment of ₹10,000?\n\nPayment Method: UPI/Net Banking");
                  if (confirmed) {
                    alert("✓ Payment Successful!\n\nTransaction ID: TXN" + Date.now() + "\nAmount: ₹10,000\nDate: " + new Date().toLocaleDateString());
                  }
                }}
              >
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

        {/* Charts Section - 4 Types */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* 1. Payment & Interest Trend - Multi-Line Chart */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Payment & Interest Trend
              </CardTitle>
              <CardDescription>Monthly payments and cumulative interest</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={paymentTrendData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="month" stroke="currentColor" />
                  <YAxis stroke="currentColor" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))' }}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="paid" stroke="#10b981" strokeWidth={2} name="Paid (₹)" />
                  <Line type="monotone" dataKey="interest" stroke="#1e40af" strokeWidth={2} name="Interest (₹)" />
                  <Line type="monotone" dataKey="pending" stroke="#ef4444" strokeWidth={2} name="Pending (₹)" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* 2. Savings Breakdown - Pie Chart */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChart className="h-5 w-5" />
                Savings Breakdown
              </CardTitle>
              <CardDescription>Total: ₹86,513 accumulated</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <RePieChart>
                  <Pie
                    data={savingsBreakdown}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={(entry: any) => `₹${entry.value.toLocaleString()}`}
                    outerRadius={90}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {savingsBreakdown.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </RePieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* 3. Auction Participation - Bar Chart */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Auction Participation
              </CardTitle>
              <CardDescription>Monthly auction participants & bid amounts</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={auctionData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="month" stroke="currentColor" />
                  <YAxis stroke="currentColor" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))' }}
                  />
                  <Legend />
                  <Bar dataKey="participants" fill="#8b5cf6" name="Participants" />
                  <Bar dataKey="bidAmount" fill="#f59e0b" name="Winning Bid (₹)" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* 4. Returns Comparison - Area Chart */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Expected vs Actual Returns
              </CardTitle>
              <CardDescription>Monthly return comparison</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={returnsData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="month" stroke="currentColor" />
                  <YAxis stroke="currentColor" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))' }}
                  />
                  <Legend />
                  <Area 
                    type="monotone" 
                    dataKey="expected" 
                    stroke="#1e40af" 
                    fill="#1e40af" 
                    fillOpacity={0.3}
                    name="Expected (₹)" 
                  />
                  <Area 
                    type="monotone" 
                    dataKey="actual" 
                    stroke="#10b981" 
                    fill="#10b981" 
                    fillOpacity={0.6}
                    name="Actual (₹)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Performance Metrics */}
        <Card className="shadow-medium mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Performance Metrics
            </CardTitle>
            <CardDescription>Your chit participation performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {performanceData.map((metric) => (
                <div key={metric.label}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">{metric.label}</span>
                    <span className="text-sm font-bold">{metric.value}%</span>
                  </div>
                  <Progress value={metric.value} className={metric.color} />
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
