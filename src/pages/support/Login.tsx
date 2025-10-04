import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Headphones } from "lucide-react";

const SupportLogin = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/support/dashboard");
  };

  return (
    <div className="min-h-screen gradient-primary flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-4">
        <Button onClick={() => navigate("/")} variant="secondary" size="sm" className="mb-4">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Button>

        <Card className="shadow-elegant">
          <CardHeader className="space-y-4 text-center">
            <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center">
              <Headphones className="h-8 w-8 text-primary-foreground" />
            </div>
            <CardTitle className="text-2xl">Support Portal</CardTitle>
            <CardDescription>Login to access support tickets and queries</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="supportEmail">Email</Label>
                <Input
                  id="supportEmail"
                  type="email"
                  placeholder="support@skst.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="supportPassword">Password</Label>
                <Input
                  id="supportPassword"
                  type="password"
                  placeholder="Enter password"
                  required
                />
              </div>
              <Button type="submit" className="w-full" size="lg">
                Login to Support Portal
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SupportLogin;
