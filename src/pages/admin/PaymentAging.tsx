import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, AlertCircle, Clock, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const PaymentAging = () => {
  const navigate = useNavigate();

  const agingData = [
    { range: "0-30 days", count: 45, amount: 450000 },
    { range: "31-60 days", count: 28, amount: 280000 },
    { range: "61-90 days", count: 15, amount: 150000 },
    { range: "90+ days", count: 8, amount: 80000 },
  ];

  const overdueUsers = [
    { id: "USR001", name: "Rajesh Kumar", chitId: "CHT000001", dueDate: "2024-11-15", days: 46, amount: 10000, severity: "medium" },
    { id: "USR002", name: "Priya Sharma", chitId: "CHT000002", dueDate: "2024-10-20", days: 72, amount: 10000, severity: "high" },
    { id: "USR003", name: "Amit Patel", chitId: "CHT000001", dueDate: "2024-12-15", days: 16, amount: 10000, severity: "low" },
    { id: "USR004", name: "Sunita Reddy", chitId: "CHT000003", dueDate: "2024-09-15", days: 108, amount: 15000, severity: "critical" },
    { id: "USR005", name: "Vikram Singh", chitId: "CHT000002", dueDate: "2024-11-20", days: 42, amount: 10000, severity: "medium" },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "low": return "bg-yellow-500/10 text-yellow-500 border-yellow-500";
      case "medium": return "bg-orange-500/10 text-orange-500 border-orange-500";
      case "high": return "bg-red-500/10 text-red-500 border-red-500";
      case "critical": return "bg-destructive/10 text-destructive border-destructive";
      default: return "";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button onClick={() => navigate("/admin/home")} variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <h1 className="text-2xl font-bold">Payment Aging Report</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 space-y-6">
        {/* Summary Cards */}
        <div className="grid md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Total Overdue</CardDescription>
              <CardTitle className="text-3xl text-red-500">₹9,60,000</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Overdue Users</CardDescription>
              <CardTitle className="text-3xl">96</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Critical (90+ days)</CardDescription>
              <CardTitle className="text-3xl text-destructive">8</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Recovery Rate</CardDescription>
              <CardTitle className="text-3xl text-green-500">78%</CardTitle>
            </CardHeader>
          </Card>
        </div>

        {/* Aging Distribution Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Aging Distribution
            </CardTitle>
            <CardDescription>Overdue payments grouped by age</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={agingData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="range" />
                <YAxis yAxisId="left" orientation="left" stroke="hsl(var(--chart-1))" />
                <YAxis yAxisId="right" orientation="right" stroke="hsl(var(--chart-2))" />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="count" fill="hsl(var(--chart-1))" name="User Count" />
                <Bar yAxisId="right" dataKey="amount" fill="hsl(var(--chart-2))" name="Amount (₹)" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Overdue Users List */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Overdue Payments
            </CardTitle>
            <CardDescription>Users with pending payments requiring follow-up</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {overdueUsers.map((user) => (
                <div key={user.id} className={`p-4 rounded-lg border ${getSeverityColor(user.severity)}`}>
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <div className="font-medium">{user.name}</div>
                      <div className="text-sm text-muted-foreground">{user.id} • {user.chitId}</div>
                    </div>
                    <Badge variant="outline" className="capitalize">{user.severity}</Badge>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="text-muted-foreground">Due Date</div>
                      <div className="font-medium">{user.dueDate}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Days Overdue</div>
                      <div className="font-medium text-red-500">{user.days} days</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Amount</div>
                      <div className="font-medium">₹{user.amount.toLocaleString()}</div>
                    </div>
                  </div>
                  <div className="mt-3 flex gap-2">
                    <Button size="sm" variant="outline">Send Reminder</Button>
                    <Button size="sm" variant="outline">Call User</Button>
                    <Button size="sm">Mark Paid</Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PaymentAging;
