import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { LogOut, ArrowLeft, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const PaymentUpdate = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    userId: "",
    amount: "",
    paymentMethod: "",
    transactionId: "",
    month: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
      toast({
        title: "Payment Updated Successfully",
        description: "The payment record has been added to the system.",
      });
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <span className="text-2xl font-bold">Admin Control Panel</span>
            <Button onClick={() => navigate("/")} variant="outline" size="sm">
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </header>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-large">
              <CardHeader className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success text-success-foreground mx-auto mb-4">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl">Payment Updated Successfully!</CardTitle>
                <CardDescription>Payment record has been added to the system</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 rounded-lg bg-muted">
                  <p className="text-sm mb-2"><strong>User ID:</strong> {formData.userId}</p>
                  <p className="text-sm mb-2"><strong>Amount:</strong> ₹{formData.amount}</p>
                  <p className="text-sm mb-2"><strong>Month:</strong> {formData.month}</p>
                  <p className="text-sm mb-2"><strong>Payment Method:</strong> {formData.paymentMethod}</p>
                  <p className="text-sm"><strong>Transaction ID:</strong> {formData.transactionId}</p>
                </div>
                <Button onClick={() => navigate("/admin/dashboard")} className="w-full" size="lg">
                  Back to Dashboard
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">Admin Control Panel</span>
          </div>
          <div className="flex items-center gap-4">
            <Button onClick={() => navigate("/admin/dashboard")} variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <Button onClick={() => navigate("/")} variant="outline" size="sm">
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="text-2xl">Manual Payment Update</CardTitle>
              <CardDescription>Record offline payments and update user accounts</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="userId">User ID / Mobile Number *</Label>
                  <Input
                    id="userId"
                    type="text"
                    placeholder="Enter user ID or mobile number"
                    required
                    value={formData.userId}
                    onChange={(e) => setFormData({ ...formData, userId: e.target.value })}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="amount">Amount (₹) *</Label>
                    <Input
                      id="amount"
                      type="number"
                      placeholder="10000"
                      required
                      value={formData.amount}
                      onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="month">Payment Month *</Label>
                    <Select required value={formData.month} onValueChange={(value) => setFormData({ ...formData, month: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select month" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Jan 2025">January 2025</SelectItem>
                        <SelectItem value="Feb 2025">February 2025</SelectItem>
                        <SelectItem value="Mar 2025">March 2025</SelectItem>
                        <SelectItem value="Apr 2025">April 2025</SelectItem>
                        <SelectItem value="May 2025">May 2025</SelectItem>
                        <SelectItem value="Jun 2025">June 2025</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="paymentMethod">Payment Method *</Label>
                  <Select required value={formData.paymentMethod} onValueChange={(value) => setFormData({ ...formData, paymentMethod: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select payment method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Cash">Cash</SelectItem>
                      <SelectItem value="Bank Transfer">Bank Transfer</SelectItem>
                      <SelectItem value="Cheque">Cheque</SelectItem>
                      <SelectItem value="UPI">UPI</SelectItem>
                      <SelectItem value="Card">Card</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="transactionId">Transaction ID / Reference Number *</Label>
                  <Input
                    id="transactionId"
                    type="text"
                    placeholder="TXN123456789 or Cheque Number"
                    required
                    value={formData.transactionId}
                    onChange={(e) => setFormData({ ...formData, transactionId: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">Notes (Optional)</Label>
                  <Input
                    id="notes"
                    type="text"
                    placeholder="Any additional notes"
                    value={formData.notes || ""}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  />
                </div>

                <div className="p-4 rounded-lg bg-warning/10 border border-warning">
                  <p className="text-sm text-warning-foreground">
                    <strong>Important:</strong> Please verify all details before submitting. This action will update the user's payment record immediately.
                  </p>
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Update Payment Record
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PaymentUpdate;
