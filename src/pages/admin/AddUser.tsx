import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { LogOut, ArrowLeft, Save } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AddUser = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "User Added Successfully",
      description: "The new user has been added to the system.",
    });
    setTimeout(() => navigate("/admin/user-management"), 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b gradient-primary text-primary-foreground sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button onClick={() => navigate("/admin/user-management")} variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <span className="text-2xl font-bold">Add New User</span>
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

      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle>User Registration Form</CardTitle>
            <CardDescription>Enter details to register a new user in the system</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Personal Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" placeholder="Enter first name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" placeholder="Enter last name" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="mobile">Mobile Number *</Label>
                    <Input id="mobile" type="tel" placeholder="10-digit mobile number" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="user@example.com" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Address *</Label>
                  <Input id="address" placeholder="Enter full address" required />
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City *</Label>
                    <Input id="city" placeholder="City" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">State *</Label>
                    <Input id="state" placeholder="State" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pincode">Pincode *</Label>
                    <Input id="pincode" placeholder="6-digit pincode" required />
                  </div>
                </div>
              </div>

              {/* Chit Plan Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Chit Fund Details</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="chitPlan">Chit Plan *</Label>
                    <select id="chitPlan" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" required>
                      <option value="">Select a plan</option>
                      <option value="1year-1l">1-Year ₹1,00,000</option>
                      <option value="2year-2l">2-Year ₹2,00,000</option>
                      <option value="3year-5l">3-Year ₹5,00,000</option>
                      <option value="5year-10l">5-Year ₹10,00,000</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="startDate">Start Date *</Label>
                    <Input id="startDate" type="date" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="branch">Branch *</Label>
                    <select id="branch" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" required>
                      <option value="">Select branch</option>
                      <option value="mumbai">Mumbai Central</option>
                      <option value="pune">Pune Branch</option>
                      <option value="bangalore">Bangalore Hub</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="accountStatus">Account Status *</Label>
                    <select id="accountStatus" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" required>
                      <option value="active">Active</option>
                      <option value="pending">Pending</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Documents */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Documents</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="aadhar">Aadhar Number *</Label>
                    <Input id="aadhar" placeholder="12-digit Aadhar number" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pan">PAN Number *</Label>
                    <Input id="pan" placeholder="10-digit PAN number" required />
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4 pt-4">
                <Button type="submit" className="flex-1">
                  <Save className="h-4 w-4 mr-2" />
                  Add User
                </Button>
                <Button type="button" variant="outline" onClick={() => navigate("/admin/user-management")}>
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AddUser;
