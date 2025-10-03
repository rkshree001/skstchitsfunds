import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, UserCircle, Users, Crown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleLogin = (role: string) => {
    setLoading(true);
    
    // Simulate login
    setTimeout(() => {
      toast({
        title: "Login Successful",
        description: `Welcome to ${role} dashboard!`,
      });
      
      // Navigate based on role
      if (role === "User") navigate("/user/dashboard");
      else if (role === "Admin") navigate("/admin/dashboard");
      else if (role === "Super Admin") navigate("/sadmin/dashboard");
      
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen gradient-hero flex items-center justify-center p-4">
      <div className="w-full max-w-5xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="h-12 w-12 text-primary-foreground" />
            <span className="text-4xl font-bold text-primary-foreground">SKST Chit Funds</span>
          </div>
          <p className="text-primary-foreground/80 text-lg">Secure Login Portal</p>
        </div>

        {/* Login Tabs */}
        <Tabs defaultValue="user" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="user" className="flex items-center gap-2">
              <UserCircle className="h-4 w-4" />
              User
            </TabsTrigger>
            <TabsTrigger value="admin" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Admin
            </TabsTrigger>
            <TabsTrigger value="sadmin" className="flex items-center gap-2">
              <Crown className="h-4 w-4" />
              Super Admin
            </TabsTrigger>
          </TabsList>

          {/* User Login */}
          <TabsContent value="user">
            <Card className="shadow-large">
              <CardHeader>
                <CardTitle className="text-2xl">User Login</CardTitle>
                <CardDescription>Access your chit fund dashboard and manage your investments</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="user-email">Email / Mobile Number</Label>
                  <Input id="user-email" type="text" placeholder="Enter your email or mobile" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="user-password">Password</Label>
                  <Input id="user-password" type="password" placeholder="Enter your password" />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <a href="#" className="text-primary hover:underline">Forgot password?</a>
                  <a href="#" className="text-primary hover:underline">New user? Register</a>
                </div>
                <Button 
                  onClick={() => handleLogin("User")} 
                  className="w-full" 
                  size="lg"
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Login as User"}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Admin Login */}
          <TabsContent value="admin">
            <Card className="shadow-large">
              <CardHeader>
                <CardTitle className="text-2xl">Admin Login</CardTitle>
                <CardDescription>Access the control panel to manage users and collections</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="admin-email">Admin Email</Label>
                  <Input id="admin-email" type="email" placeholder="admin@skstchitfunds.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="admin-password">Password</Label>
                  <Input id="admin-password" type="password" placeholder="Enter admin password" />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <a href="#" className="text-primary hover:underline">Forgot password?</a>
                </div>
                <Button 
                  onClick={() => handleLogin("Admin")} 
                  className="w-full" 
                  size="lg"
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Login as Admin"}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Super Admin Login */}
          <TabsContent value="sadmin">
            <Card className="shadow-large">
              <CardHeader>
                <CardTitle className="text-2xl">Super Admin Login</CardTitle>
                <CardDescription>Full system access for branch and role management</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="sadmin-email">Super Admin Email</Label>
                  <Input id="sadmin-email" type="email" placeholder="superadmin@skstchitfunds.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sadmin-password">Password</Label>
                  <Input id="sadmin-password" type="password" placeholder="Enter super admin password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sadmin-otp">2FA Code (Optional)</Label>
                  <Input id="sadmin-otp" type="text" placeholder="Enter 6-digit code" maxLength={6} />
                </div>
                <Button 
                  onClick={() => handleLogin("Super Admin")} 
                  className="w-full" 
                  size="lg"
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Login as Super Admin"}
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <Button onClick={() => navigate("/")} variant="ghost" className="text-primary-foreground hover:bg-white/10">
            ← Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
