import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { LogOut, ArrowLeft, Save } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AddBranch = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Branch Added Successfully",
      description: "The new branch has been added to the system.",
    });
    setTimeout(() => navigate("/sadmin/branch-management"), 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b gradient-primary text-primary-foreground sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button onClick={() => navigate("/sadmin/branch-management")} variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <span className="text-2xl font-bold">Add New Branch</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:inline opacity-90">Super Admin</span>
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
            <CardTitle>Branch Registration Form</CardTitle>
            <CardDescription>Enter details to register a new branch in the system</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Branch Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Branch Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="branchName">Branch Name *</Label>
                    <Input id="branchName" placeholder="Enter branch name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="branchCode">Branch Code *</Label>
                    <Input id="branchCode" placeholder="e.g., MUM001" required />
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

              {/* Contact Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Contact Information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" type="tel" placeholder="Branch phone number" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="branch@example.com" required />
                  </div>
                </div>
              </div>

              {/* Manager Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Branch Manager</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="managerName">Manager Name *</Label>
                    <Input id="managerName" placeholder="Enter manager name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="managerMobile">Manager Mobile *</Label>
                    <Input id="managerMobile" type="tel" placeholder="10-digit mobile" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="managerEmail">Manager Email *</Label>
                  <Input id="managerEmail" type="email" placeholder="manager@example.com" required />
                </div>
              </div>

              {/* Operational Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Operational Details</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="openingDate">Opening Date *</Label>
                    <Input id="openingDate" type="date" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="status">Branch Status *</Label>
                    <select id="status" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" required>
                      <option value="new">New</option>
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="capacity">User Capacity *</Label>
                    <Input id="capacity" type="number" placeholder="Maximum users" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="targetCollection">Target Collection (₹) *</Label>
                    <Input id="targetCollection" type="number" placeholder="Monthly target" required />
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4 pt-4">
                <Button type="submit" className="flex-1">
                  <Save className="h-4 w-4 mr-2" />
                  Add Branch
                </Button>
                <Button type="button" variant="outline" onClick={() => navigate("/sadmin/branch-management")}>
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

export default AddBranch;
