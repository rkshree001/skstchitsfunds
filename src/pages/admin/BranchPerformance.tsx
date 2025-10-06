import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, TrendingUp, TrendingDown } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Progress } from "@/components/ui/progress";

const BranchPerformance = () => {
  const navigate = useNavigate();

  const branchData = [
    { branch: "Zone A", users: 450, collection: 92, defaults: 8 },
    { branch: "Zone B", users: 380, collection: 88, defaults: 12 },
    { branch: "Zone C", users: 520, collection: 95, defaults: 5 },
    { branch: "Zone D", users: 290, collection: 85, defaults: 15 },
  ];

  const branches = [
    {
      id: 1,
      name: "Branch - Zone A",
      users: 450,
      activeChits: 85,
      collection: 92,
      revenue: 4200000,
      trend: "up",
    },
    {
      id: 2,
      name: "Branch - Zone B",
      users: 380,
      activeChits: 72,
      collection: 88,
      revenue: 3800000,
      trend: "up",
    },
    {
      id: 3,
      name: "Branch - Zone C",
      users: 520,
      activeChits: 98,
      collection: 95,
      revenue: 5100000,
      trend: "up",
    },
    {
      id: 4,
      name: "Branch - Zone D",
      users: 290,
      activeChits: 55,
      collection: 85,
      revenue: 2900000,
      trend: "down",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button onClick={() => navigate("/admin/dashboard")} variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <h1 className="text-2xl font-bold">Branch Performance</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Branch Comparison</CardTitle>
            <CardDescription>KPIs across all branches</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={branchData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="branch" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="users" fill="hsl(var(--primary))" name="Total Users" />
                <Bar dataKey="collection" fill="hsl(var(--success))" name="Collection %" />
                <Bar dataKey="defaults" fill="hsl(var(--destructive))" name="Default %" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          {branches.map((branch) => (
            <Card key={branch.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>{branch.name}</CardTitle>
                  {branch.trend === "up" ? (
                    <TrendingUp className="h-5 w-5 text-success" />
                  ) : (
                    <TrendingDown className="h-5 w-5 text-destructive" />
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Users</p>
                    <p className="text-2xl font-bold">{branch.users}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Active Chits</p>
                    <p className="text-2xl font-bold">{branch.activeChits}</p>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Collection Rate</span>
                    <span className="text-sm font-semibold">{branch.collection}%</span>
                  </div>
                  <Progress value={branch.collection} />
                </div>
                <div className="pt-2 border-t">
                  <p className="text-sm text-muted-foreground">Monthly Revenue</p>
                  <p className="text-xl font-bold text-success">₹{(branch.revenue / 100000).toFixed(1)}L</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BranchPerformance;
