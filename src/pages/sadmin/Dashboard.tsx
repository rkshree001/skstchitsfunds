import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { LogOut, Building2, Users, IndianRupee, TrendingUp, Shield, Settings, BarChart3, PieChart, Activity } from "lucide-react";
import { LineChart, Line, BarChart, Bar, PieChart as RePieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";

const SuperAdminDashboard = () => {
  const navigate = useNavigate();

  const systemMetrics = {
    totalFunds: 5000000,
    activeUsers: 500,
    totalBranches: 5,
    monthlyGrowth: 12,
  };

  const branches = [
    { id: 1, name: "Mumbai Central", manager: "Suresh Sharma", users: 150, collections: 1500000, status: "active" },
    { id: 2, name: "Pune Branch", manager: "Rajesh Patel", users: 120, collections: 1200000, status: "active" },
    { id: 3, name: "Bangalore Hub", manager: "Amit Kumar", users: 130, collections: 1400000, status: "active" },
    { id: 4, name: "Delhi NCR", manager: "Priya Singh", users: 80, collections: 800000, status: "active" },
    { id: 5, name: "Chennai Office", manager: "Vikram Reddy", users: 20, collections: 100000, status: "new" },
  ];

  const systemRoles = [
    { id: 1, role: "Super Admin", count: 2, permissions: "Full Access" },
    { id: 2, role: "Branch Admin", count: 5, permissions: "Branch Management" },
    { id: 3, role: "Manager", count: 10, permissions: "User Management" },
    { id: 4, role: "User", count: 500, permissions: "View Only" },
  ];

  const monthlyGrowthData = [
    { month: "Jan", users: 400, collections: 4000000 },
    { month: "Feb", users: 420, collections: 4200000 },
    { month: "Mar", users: 450, collections: 4500000 },
    { month: "Apr", users: 470, collections: 4700000 },
    { month: "May", users: 480, collections: 4800000 },
    { month: "Jun", users: 500, collections: 5000000 },
  ];

  const branchPerformance = [
    { branch: "Mumbai", collections: 1500000, users: 150 },
    { branch: "Pune", collections: 1200000, users: 120 },
    { branch: "Bangalore", collections: 1400000, users: 130 },
    { branch: "Delhi", collections: 800000, users: 80 },
    { branch: "Chennai", collections: 100000, users: 20 },
  ];

  const systemHealth = [
    { metric: "Uptime", value: 99.9 },
    { metric: "Performance", value: 95 },
    { metric: "Security", value: 98 },
    { metric: "Reliability", value: 97 },
    { metric: "Efficiency", value: 89 },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b gradient-primary text-primary-foreground sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-8 w-8" />
            <span className="text-2xl font-bold">Super Admin Console</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:inline opacity-90">System Administrator</span>
            <Button onClick={() => navigate("/")} variant="secondary" size="sm">
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* System Overview Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="shadow-medium border-2 border-primary/20">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardDescription>Total Funds</CardDescription>
                <IndianRupee className="h-4 w-4 text-primary" />
              </div>
              <CardTitle className="text-3xl">₹{(systemMetrics.totalFunds / 10000000).toFixed(1)}Cr</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-success">+₹50L this month</p>
            </CardContent>
          </Card>

          <Card className="shadow-medium border-2 border-primary/20">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardDescription>Active Users</CardDescription>
                <Users className="h-4 w-4 text-primary" />
              </div>
              <CardTitle className="text-3xl">{systemMetrics.activeUsers}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-success">+{systemMetrics.monthlyGrowth}% growth</p>
            </CardContent>
          </Card>

          <Card className="shadow-medium border-2 border-primary/20">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardDescription>Total Branches</CardDescription>
                <Building2 className="h-4 w-4 text-primary" />
              </div>
              <CardTitle className="text-3xl">{systemMetrics.totalBranches}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">Across major cities</p>
            </CardContent>
          </Card>

          <Card className="shadow-medium border-2 border-primary/20">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardDescription>System Health</CardDescription>
                <TrendingUp className="h-4 w-4 text-success" />
              </div>
              <CardTitle className="text-3xl text-success">99.9%</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-success">All systems operational</p>
            </CardContent>
          </Card>
        </div>

        {/* Branch Management */}
        <Card className="shadow-medium mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="h-5 w-5" />
                  Branch Management
                </CardTitle>
                <CardDescription>Manage all branch operations and performance</CardDescription>
              </div>
              <Button onClick={() => navigate("/sadmin/branch-management")} variant="default">
                <Building2 className="h-4 w-4 mr-2" />
                Manage Branches
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-2">Branch Name</th>
                    <th className="text-left py-3 px-2">Manager</th>
                    <th className="text-center py-3 px-2">Users</th>
                    <th className="text-right py-3 px-2">Collections</th>
                    <th className="text-center py-3 px-2">Status</th>
                    <th className="text-center py-3 px-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {branches.map((branch) => (
                    <tr key={branch.id} className="border-b last:border-0">
                      <td className="py-3 px-2 text-sm font-medium">{branch.name}</td>
                      <td className="py-3 px-2 text-sm">{branch.manager}</td>
                      <td className="py-3 px-2 text-sm text-center">{branch.users}</td>
                      <td className="py-3 px-2 text-sm text-right font-medium">₹{(branch.collections / 100000).toFixed(1)}L</td>
                      <td className="py-3 px-2 text-center">
                        <Badge variant={branch.status === "active" ? "default" : "secondary"} className={branch.status === "active" ? "bg-success" : "bg-warning"}>
                          {branch.status}
                        </Badge>
                      </td>
                      <td className="py-3 px-2 text-center">
                        <Button variant="ghost" size="sm">
                          <Settings className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Analytics Section */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Growth Trend */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                System Growth Trend
              </CardTitle>
              <CardDescription>Users and collections over time</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={monthlyGrowthData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Legend />
                  <Area yAxisId="left" type="monotone" dataKey="users" stackId="1" stroke="#1e40af" fill="#1e40af" />
                  <Area yAxisId="right" type="monotone" dataKey="collections" stackId="2" stroke="#10b981" fill="#10b981" opacity={0.6} />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Branch Performance */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Branch Performance
              </CardTitle>
              <CardDescription>Collections by branch</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={branchPerformance}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="branch" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="collections" fill="#1e40af" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* System Health Radar */}
        <Card className="shadow-medium mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              System Health Overview
            </CardTitle>
            <CardDescription>Comprehensive system performance metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <RadarChart data={systemHealth}>
                <PolarGrid />
                <PolarAngleAxis dataKey="metric" />
                <PolarRadiusAxis angle={90} domain={[0, 100]} />
                <Radar name="Performance" dataKey="value" stroke="#1e40af" fill="#1e40af" fillOpacity={0.6} />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Role Management & System Info */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Role Management */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Role Management
              </CardTitle>
              <CardDescription>System-wide user roles and permissions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {systemRoles.map((role) => (
                  <div key={role.id} className="flex items-center justify-between p-4 rounded-lg border bg-card hover:bg-muted/50 transition-colors">
                    <div>
                      <p className="font-semibold">{role.role}</p>
                      <p className="text-sm text-muted-foreground">{role.permissions}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold">{role.count}</p>
                      <p className="text-xs text-muted-foreground">users</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* System Performance */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle>System Performance</CardTitle>
              <CardDescription>Overview of key metrics and trends</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">User Growth Rate</span>
                  <span className="text-sm text-success">+12% MoM</span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-success rounded-full" style={{ width: "65%" }}></div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Collection Efficiency</span>
                  <span className="text-sm text-success">89%</span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-success rounded-full" style={{ width: "89%" }}></div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">System Uptime</span>
                  <span className="text-sm text-success">99.9%</span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-success rounded-full" style={{ width: "99.9%" }}></div>
                </div>
              </div>

              <div className="pt-4 border-t">
                <Button variant="outline" className="w-full">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  View Detailed Reports
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminDashboard;
