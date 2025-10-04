import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { LogOut, ArrowLeft, Search, Filter, UserPlus, Edit, Trash2, Eye } from "lucide-react";

const UserManagement = () => {
  const navigate = useNavigate();

  const users = [
    { id: "USR001", name: "Rajesh Kumar", mobile: "9876543210", email: "rajesh@example.com", chitPlan: "1-Year ₹1L", status: "active", branch: "Mumbai Central" },
    { id: "USR002", name: "Priya Sharma", mobile: "9876543211", email: "priya@example.com", chitPlan: "2-Year ₹2L", status: "active", branch: "Mumbai Central" },
    { id: "USR003", name: "Amit Patel", mobile: "9876543212", email: "amit@example.com", chitPlan: "1-Year ₹1L", status: "pending", branch: "Mumbai Central" },
    { id: "USR004", name: "Sneha Reddy", mobile: "9876543213", email: "sneha@example.com", chitPlan: "3-Year ₹5L", status: "active", branch: "Mumbai Central" },
    { id: "USR005", name: "Vikram Singh", mobile: "9876543214", email: "vikram@example.com", chitPlan: "1-Year ₹1L", status: "inactive", branch: "Mumbai Central" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b gradient-primary text-primary-foreground sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button onClick={() => navigate("/admin/dashboard")} variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <span className="text-2xl font-bold">User Management</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:inline opacity-90">Admin</span>
            <Button onClick={() => navigate("/")} variant="secondary" size="sm">
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="shadow-medium border-2 border-primary/20">
            <CardHeader className="pb-2">
              <CardDescription>Total Users</CardDescription>
              <CardTitle className="text-3xl">150</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-success">+12 this month</p>
            </CardContent>
          </Card>

          <Card className="shadow-medium border-2 border-success/20">
            <CardHeader className="pb-2">
              <CardDescription>Active Users</CardDescription>
              <CardTitle className="text-3xl text-success">135</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">90% active rate</p>
            </CardContent>
          </Card>

          <Card className="shadow-medium border-2 border-warning/20">
            <CardHeader className="pb-2">
              <CardDescription>Pending</CardDescription>
              <CardTitle className="text-3xl text-warning">10</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">Awaiting approval</p>
            </CardContent>
          </Card>

          <Card className="shadow-medium border-2 border-destructive/20">
            <CardHeader className="pb-2">
              <CardDescription>Inactive</CardDescription>
              <CardTitle className="text-3xl text-destructive">5</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">Account suspended</p>
            </CardContent>
          </Card>
        </div>

        {/* Actions */}
        <Card className="shadow-medium mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search by name, mobile, or email..." className="pl-10" />
              </div>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button onClick={() => navigate("/admin/add-user")} variant="default">
                <UserPlus className="h-4 w-4 mr-2" />
                Add User
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* User Table */}
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle>All Users</CardTitle>
            <CardDescription>Manage users in your branch</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-2">User ID</th>
                    <th className="text-left py-3 px-2">Name</th>
                    <th className="text-left py-3 px-2">Mobile</th>
                    <th className="text-left py-3 px-2">Email</th>
                    <th className="text-left py-3 px-2">Chit Plan</th>
                    <th className="text-center py-3 px-2">Status</th>
                    <th className="text-center py-3 px-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id} className="border-b last:border-0 hover:bg-muted/50 transition-colors">
                      <td className="py-3 px-2 text-sm font-medium">{user.id}</td>
                      <td className="py-3 px-2 text-sm">{user.name}</td>
                      <td className="py-3 px-2 text-sm">{user.mobile}</td>
                      <td className="py-3 px-2 text-sm">{user.email}</td>
                      <td className="py-3 px-2 text-sm">{user.chitPlan}</td>
                      <td className="py-3 px-2 text-center">
                        <Badge 
                          variant="default" 
                          className={
                            user.status === "active" ? "bg-success" :
                            user.status === "pending" ? "bg-warning" : "bg-destructive"
                          }
                        >
                          {user.status}
                        </Badge>
                      </td>
                      <td className="py-3 px-2 text-center">
                        <div className="flex items-center justify-center gap-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </div>
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

export default UserManagement;
