import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin, Users, TrendingUp } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const BranchOverview = () => {
  const navigate = useNavigate();

  const branchData = [
    { name: "North", users: 1250, revenue: 12500000, chits: 245 },
    { name: "South", users: 980, revenue: 9800000, chits: 198 },
    { name: "East", users: 1450, revenue: 14500000, chits: 290 },
    { name: "West", users: 1100, revenue: 11000000, chits: 220 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button onClick={() => navigate("/sadmin/dashboard")} variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <h1 className="text-2xl font-bold">Multi-Branch Overview</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 space-y-8">
        <div className="grid md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Total Branches</CardDescription>
              <CardTitle className="text-3xl">12</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-success">4 regions</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Total Users</CardDescription>
              <CardTitle className="text-3xl">4,780</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">Across all branches</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Active Chits</CardDescription>
              <CardTitle className="text-3xl">953</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-success">+12% this month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Total Revenue</CardDescription>
              <CardTitle className="text-3xl">₹47.8Cr</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-success">+8% from last month</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Regional Performance</CardTitle>
            <CardDescription>Branch metrics across regions</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={branchData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis yAxisId="left" orientation="left" stroke="hsl(var(--primary))" />
                <YAxis yAxisId="right" orientation="right" stroke="hsl(var(--success))" />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="users" fill="hsl(var(--primary))" name="Users" />
                <Bar yAxisId="left" dataKey="chits" fill="hsl(var(--secondary))" name="Active Chits" />
                <Bar yAxisId="right" dataKey="revenue" fill="hsl(var(--success))" name="Revenue (₹)" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          {branchData.map((region) => (
            <Card key={region.name}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    {region.name} Region
                  </CardTitle>
                  <TrendingUp className="h-5 w-5 text-success" />
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Total Users</span>
                  </div>
                  <span className="font-bold">{region.users.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Active Chits</span>
                  <span className="font-bold">{region.chits}</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t">
                  <span className="text-sm text-muted-foreground">Monthly Revenue</span>
                  <span className="font-bold text-success">
                    ₹{(region.revenue / 10000000).toFixed(1)}Cr
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BranchOverview;
