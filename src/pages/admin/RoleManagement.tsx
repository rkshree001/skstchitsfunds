import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Shield, User, Lock } from "lucide-react";
import { Switch } from "@/components/ui/switch";

const RoleManagement = () => {
  const navigate = useNavigate();

  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "user",
      permissions: { view: true, edit: false, delete: false },
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      role: "admin",
      permissions: { view: true, edit: true, delete: false },
    },
    {
      id: 3,
      name: "Bob Wilson",
      email: "bob@example.com",
      role: "support",
      permissions: { view: true, edit: true, delete: false },
    },
  ];

  const getRoleBadge = (role: string) => {
    switch (role) {
      case "admin":
        return <Badge className="bg-primary">Admin</Badge>;
      case "support":
        return <Badge className="bg-secondary">Support</Badge>;
      default:
        return <Badge variant="outline">User</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button onClick={() => navigate("/admin/dashboard")} variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <h1 className="text-2xl font-bold">Role & Permission Management</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              User Roles
            </CardTitle>
            <CardDescription>Manage user access and permissions (View Only Mode)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {users.map((user) => (
                <Card key={user.id}>
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <User className="h-8 w-8 text-muted-foreground" />
                        <div>
                          <p className="font-semibold">{user.name}</p>
                          <p className="text-sm text-muted-foreground">{user.email}</p>
                        </div>
                      </div>
                      {getRoleBadge(user.role)}
                    </div>
                    <div className="space-y-3 p-4 bg-muted rounded-lg">
                      <p className="text-sm font-medium flex items-center gap-2">
                        <Lock className="h-4 w-4" />
                        Permissions
                      </p>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">View</span>
                          <Switch checked={user.permissions.view} disabled />
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Edit</span>
                          <Switch checked={user.permissions.edit} disabled />
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Delete</span>
                          <Switch checked={user.permissions.delete} disabled />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RoleManagement;
