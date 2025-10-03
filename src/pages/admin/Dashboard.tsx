import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { LogOut, Users, IndianRupee, TrendingUp, Bell, FileText, UserPlus } from "lucide-react";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const metrics = {
    totalUsers: 50,
    activeUsers: 45,
    totalCollections: 500000,
    pendingPayments: 50000,
    thisMonthCollection: 125000,
  };

  const recentUsers = [
    { id: 1, name: "Rajesh Kumar", mobile: "+91 98765 43210", plan: "1-Year Chit", status: "active", joined: "10 Jun 2024" },
    { id: 2, name: "Priya Sharma", mobile: "+91 98765 43211", plan: "2-Year Chit", status: "active", joined: "08 Jun 2024" },
    { id: 3, name: "Amit Patel", mobile: "+91 98765 43212", plan: "1-Year Chit", status: "active", joined: "05 Jun 2024" },
    { id: 4, name: "Sneha Desai", mobile: "+91 98765 43213", plan: "6-Month Chit", status: "pending", joined: "03 Jun 2024" },
    { id: 5, name: "Vikram Singh", mobile: "+91 98765 43214", plan: "1-Year Chit", status: "active", joined: "01 Jun 2024" },
  ];

  const notifications = [
    { id: 1, text: "5 pending payments due this week", type: "warning", time: "2 hours ago" },
    { id: 2, text: "New user registration: Amit Patel", type: "info", time: "5 hours ago" },
    { id: 3, text: "Collection target achieved for June", type: "success", time: "1 day ago" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">Admin Control Panel</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-muted-foreground hidden md:inline">Branch: Mumbai Central</span>
            <Button onClick={() => navigate("/")} variant="outline" size="sm">
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Metrics Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="shadow-soft">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardDescription>Total Users</CardDescription>
                <Users className="h-4 w-4 text-muted-foreground" />
              </div>
              <CardTitle className="text-3xl">{metrics.totalUsers}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-success">+5 this month</p>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardDescription>Active Members</CardDescription>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </div>
              <CardTitle className="text-3xl">{metrics.activeUsers}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">{Math.round((metrics.activeUsers / metrics.totalUsers) * 100)}% of total</p>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardDescription>Total Collections</CardDescription>
                <IndianRupee className="h-4 w-4 text-muted-foreground" />
              </div>
              <CardTitle className="text-3xl">₹{(metrics.totalCollections / 100000).toFixed(1)}L</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-success">+₹1.25L this month</p>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardDescription>Pending Payments</CardDescription>
                <IndianRupee className="h-4 w-4 text-warning" />
              </div>
              <CardTitle className="text-3xl">₹{(metrics.pendingPayments / 1000).toFixed(0)}K</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-warning">5 users pending</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* User List */}
          <Card className="lg:col-span-2 shadow-medium">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Recent Users</CardTitle>
                  <CardDescription>Latest member registrations</CardDescription>
                </div>
                <Button size="sm" variant="default">
                  <UserPlus className="h-4 w-4 mr-2" />
                  Add User
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-2">Name</th>
                      <th className="text-left py-3 px-2">Mobile</th>
                      <th className="text-left py-3 px-2">Plan</th>
                      <th className="text-center py-3 px-2">Status</th>
                      <th className="text-center py-3 px-2">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentUsers.map((user) => (
                      <tr key={user.id} className="border-b last:border-0">
                        <td className="py-3 px-2 text-sm font-medium">{user.name}</td>
                        <td className="py-3 px-2 text-sm text-muted-foreground">{user.mobile}</td>
                        <td className="py-3 px-2 text-sm">{user.plan}</td>
                        <td className="py-3 px-2 text-center">
                          <Badge variant={user.status === "active" ? "default" : "secondary"} className={user.status === "active" ? "bg-success" : ""}>
                            {user.status}
                          </Badge>
                        </td>
                        <td className="py-3 px-2 text-center">
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Notifications & Quick Actions */}
          <div className="space-y-6">
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Notifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {notifications.map((notif) => (
                  <div key={notif.id} className="p-3 rounded-lg border bg-card">
                    <p className="text-sm mb-1">{notif.text}</p>
                    <p className="text-xs text-muted-foreground">{notif.time}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <IndianRupee className="h-4 w-4 mr-2" />
                  Update Payment
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="h-4 w-4 mr-2" />
                  Generate Report
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="h-4 w-4 mr-2" />
                  Manage Users
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Monthly Performance */}
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle>This Month's Performance</CardTitle>
            <CardDescription>June 2024 Collection Summary</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 rounded-lg bg-muted/50">
                <p className="text-sm text-muted-foreground mb-1">Target</p>
                <p className="text-2xl font-bold">₹1,50,000</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-success/10 border-2 border-success">
                <p className="text-sm text-muted-foreground mb-1">Collected</p>
                <p className="text-2xl font-bold text-success">₹1,25,000</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-warning/10 border-2 border-warning">
                <p className="text-sm text-muted-foreground mb-1">Remaining</p>
                <p className="text-2xl font-bold text-warning">₹25,000</p>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Collection Progress</span>
                <span className="text-sm text-muted-foreground">83% Complete</span>
              </div>
              <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-success rounded-full transition-all" style={{ width: "83%" }}></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
