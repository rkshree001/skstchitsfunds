import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, CreditCard, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Payments = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showSuccess, setShowSuccess] = useState(false);
  const [amount, setAmount] = useState("");
  const [selectedChit, setSelectedChit] = useState("CHT000001");

  const handlePayment = () => {
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      toast({
        title: "Payment Successful",
        description: `₹${amount} paid successfully for ${selectedChit}`,
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button onClick={() => navigate("/user/dashboard")} variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <h1 className="text-2xl font-bold">Make Payment</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5" />
              Payment Gateway
            </CardTitle>
            <CardDescription>Secure payment for your chit installments</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label htmlFor="chit">Select Chit Plan</Label>
              <select
                id="chit"
                value={selectedChit}
                onChange={(e) => setSelectedChit(e.target.value)}
                className="w-full p-2 border rounded-md bg-background"
              >
                <option value="CHT000001">1-Year Premium Chit - ₹10,000/month</option>
                <option value="CHT000002">2-Year Gold Chit - ₹10,000/month</option>
              </select>
            </div>
            <div>
              <Label htmlFor="amount">Amount (₹)</Label>
              <Input
                id="amount"
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Payment Method</Label>
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="h-20">
                  <div className="text-center">
                    <CreditCard className="h-6 w-6 mx-auto mb-2" />
                    <p className="text-sm">Card</p>
                  </div>
                </Button>
                <Button variant="outline" className="h-20">
                  <div className="text-center">
                    <CreditCard className="h-6 w-6 mx-auto mb-2" />
                    <p className="text-sm">UPI</p>
                  </div>
                </Button>
              </div>
            </div>
            <Button
              className="w-full"
              size="lg"
              onClick={handlePayment}
              disabled={!amount || parseFloat(amount) <= 0}
            >
              Pay ₹{amount || "0"}
            </Button>
          </CardContent>
        </Card>
      </div>

      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-success">
              <CheckCircle2 className="h-6 w-6" />
              Payment Successful!
            </DialogTitle>
            <DialogDescription className="space-y-2 pt-4">
              <p>Amount: ₹{amount}</p>
              <p>Chit ID: {selectedChit}</p>
              <p>Transaction ID: TXN{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Payments;
