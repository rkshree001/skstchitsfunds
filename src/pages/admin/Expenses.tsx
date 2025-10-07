import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, DollarSign, TrendingDown, Users, Download } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from "recharts";

const Expenses = () => {
  const navigate = useNavigate();

  const monthlyExpenses = [
    { month: "Aug", operational: 45000, commissions: 32000, marketing: 15000 },
    { month: "Sep", operational: 48000, commissions: 35000, marketing: 18000 },
    { month: "Oct", operational: 52000, commissions: 38000, marketing: 20000 },
    { month: "Nov", operational: 50000, commissions: 40000, marketing: 17000 },
    { month: "Dec", operational: 55000, commissions: 42000, marketing: 22000 },
  ];

  const agentCommissions = [
    { name: "Rajesh Kumar", collections: 500000, rate: 2, commission: 10000, status: "Paid" },
    { name: "Priya Sharma", collections: 450000, rate: 2, commission: 9000, status: "Paid" },
    { name: "Amit Patel", collections: 380000, rate: 2, commission: 7600, status: "Pending" },
    { name: "Sunita Reddy", collections: 420000, rate: 2, commission: 8400, status: "Pending" },
    { name: "Vikram Singh", collections: 350000, rate: 2, commission: 7000, status: "Paid" },
  ];

  const expenseCategories = [
    { category: "Agent Commissions", amount: 42000, percentage: 35 },
    { category: "Operational Costs", amount: 55000, percentage: 46 },
    { category: "Marketing", amount: 22000, percentage: 19 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button onClick={() => navigate("/admin/home")} variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
              <h1 className="text-2xl font-bold">Expense & Commission Tracker</h1>
            </div>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 space-y-6">
        {/* Summary Cards */}
        <div className="grid md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Total Expenses (Dec)</CardDescription>
              <CardTitle className="text-3xl text-red-500">₹1,19,000</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Commissions Paid</CardDescription>
              <CardTitle className="text-3xl">₹26,000</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Commissions Pending</CardDescription>
              <CardTitle className="text-3xl text-yellow-500">₹16,000</CardTitle>
            </CardHeader>
          </Card>
        </div>

        {/* Monthly Expense Trend */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Expense Trend</CardTitle>
            <CardDescription>Breakdown by category over last 5 months</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyExpenses}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="operational" fill="hsl(var(--chart-1))" name="Operational" />
                <Bar dataKey="commissions" fill="hsl(var(--chart-2))" name="Commissions" />
                <Bar dataKey="marketing" fill="hsl(var(--chart-3))" name="Marketing" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Agent Commissions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Agent Commissions
              </CardTitle>
              <CardDescription>Commission breakdown by field agent</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {agentCommissions.map((agent, idx) => (
                  <div key={idx} className="p-3 rounded-lg border">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{agent.name}</span>
                      <span className={`text-sm px-2 py-1 rounded ${agent.status === "Paid" ? "bg-green-500/10 text-green-500" : "bg-yellow-500/10 text-yellow-500"}`}>
                        {agent.status}
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-sm text-muted-foreground">
                      <div>
                        <div>Collections</div>
                        <div className="font-medium text-foreground">₹{agent.collections.toLocaleString()}</div>
                      </div>
                      <div>
                        <div>Rate</div>
                        <div className="font-medium text-foreground">{agent.rate}%</div>
                      </div>
                      <div>
                        <div>Commission</div>
                        <div className="font-medium text-foreground">₹{agent.commission.toLocaleString()}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Expense Categories */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingDown className="h-5 w-5" />
                Expense Distribution
              </CardTitle>
              <CardDescription>Current month expense breakdown</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {expenseCategories.map((cat, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>{cat.category}</span>
                      <span className="font-medium">₹{cat.amount.toLocaleString()} ({cat.percentage}%)</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{ width: `${cat.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Expenses;
