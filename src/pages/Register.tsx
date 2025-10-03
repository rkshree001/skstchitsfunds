import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Shield, ArrowLeft, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Register = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    chitPlan: "",
    address: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate registration
    setTimeout(() => {
      setSubmitted(true);
      toast({
        title: "Registration Successful!",
        description: "Your account has been created. You can now login.",
      });
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen gradient-hero flex items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-large">
          <CardHeader className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success text-success-foreground mx-auto mb-4">
              <CheckCircle className="h-8 w-8" />
            </div>
            <CardTitle className="text-2xl">Registration Successful!</CardTitle>
            <CardDescription>Welcome to SKST Chit Funds</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 rounded-lg bg-muted">
              <p className="text-sm mb-2"><strong>Name:</strong> {formData.name}</p>
              <p className="text-sm mb-2"><strong>Mobile:</strong> {formData.mobile}</p>
              <p className="text-sm mb-2"><strong>Email:</strong> {formData.email}</p>
              <p className="text-sm"><strong>Selected Plan:</strong> {formData.chitPlan}</p>
            </div>
            <p className="text-sm text-muted-foreground text-center">
              Your account has been created successfully. Our team will contact you shortly to complete the onboarding process.
            </p>
            <Button onClick={() => navigate("/login")} className="w-full" size="lg">
              Proceed to Login
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen gradient-hero flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="h-12 w-12 text-primary-foreground" />
            <span className="text-4xl font-bold text-primary-foreground">SKST Chit Funds</span>
          </div>
          <p className="text-primary-foreground/80 text-lg">New User Registration</p>
        </div>

        <Card className="shadow-large">
          <CardHeader>
            <CardTitle className="text-2xl">Create Your Account</CardTitle>
            <CardDescription>Fill in your details to start your investment journey</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="mobile">Mobile Number *</Label>
                  <Input
                    id="mobile"
                    type="tel"
                    placeholder="+91 98765 43210"
                    required
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="chitPlan">Select Chit Plan *</Label>
                <Select required value={formData.chitPlan} onValueChange={(value) => setFormData({ ...formData, chitPlan: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose your preferred plan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="6-month-50k">6-Month Plan - ₹50,000</SelectItem>
                    <SelectItem value="1-year-100k">1-Year Plan - ₹1,00,000</SelectItem>
                    <SelectItem value="2-year-200k">2-Year Plan - ₹2,00,000</SelectItem>
                    <SelectItem value="3-year-300k">3-Year Plan - ₹3,00,000</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  type="text"
                  placeholder="Your residential address"
                  value={formData.address || ""}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                />
              </div>

              <div className="p-4 rounded-lg bg-muted/50 border">
                <p className="text-sm text-muted-foreground">
                  By registering, you agree to our Terms & Conditions and Privacy Policy. Our team will verify your details and contact you within 24-48 hours.
                </p>
              </div>

              <Button type="submit" className="w-full" size="lg">
                Register Now
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Back to Login */}
        <div className="text-center mt-6">
          <Button onClick={() => navigate("/login")} variant="ghost" className="text-primary-foreground hover:bg-white/10">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Already have an account? Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Register;
