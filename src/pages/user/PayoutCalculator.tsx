import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Calculator, TrendingUp } from "lucide-react";

const PayoutCalculator = () => {
  const navigate = useNavigate();
  const [chitAmount, setChitAmount] = useState("100000");
  const [duration, setDuration] = useState("12");
  const [interest, setInterest] = useState("5");
  const [bidAmount, setBidAmount] = useState("8000");

  const calculatePayout = () => {
    const amount = parseFloat(chitAmount);
    const months = parseFloat(duration);
    const rate = parseFloat(interest) / 100;
    const bid = parseFloat(bidAmount);

    const monthlyPremium = amount / months;
    const totalInterest = (amount * rate * months) / 12;
    const dividend = bid / months;
    const estimatedReturn = totalInterest + (months * dividend);
    const netPayout = amount + estimatedReturn;

    return {
      monthlyPremium: monthlyPremium.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
      dividendPerMonth: dividend.toFixed(2),
      estimatedReturn: estimatedReturn.toFixed(2),
      netPayout: netPayout.toFixed(2),
    };
  };

  const results = calculatePayout();

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button onClick={() => navigate("/user/dashboard")} variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <h1 className="text-2xl font-bold">Payout Calculator</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5" />
                Input Parameters
              </CardTitle>
              <CardDescription>Enter your chit details to calculate returns</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="amount">Chit Amount (₹)</Label>
                <Input
                  id="amount"
                  type="number"
                  value={chitAmount}
                  onChange={(e) => setChitAmount(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="duration">Duration (Months)</Label>
                <Input
                  id="duration"
                  type="number"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="interest">Interest Rate (%)</Label>
                <Input
                  id="interest"
                  type="number"
                  step="0.1"
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="bid">Average Auction Bid (₹)</Label>
                <Input
                  id="bid"
                  type="number"
                  value={bidAmount}
                  onChange={(e) => setBidAmount(e.target.value)}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Estimated Returns
              </CardTitle>
              <CardDescription>Based on your inputs</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">Monthly Premium</p>
                <p className="text-2xl font-bold">₹{results.monthlyPremium}</p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">Total Interest</p>
                <p className="text-2xl font-bold text-success">₹{results.totalInterest}</p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">Dividend Per Month</p>
                <p className="text-2xl font-bold text-primary">₹{results.dividendPerMonth}</p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">Estimated Total Return</p>
                <p className="text-2xl font-bold text-success">₹{results.estimatedReturn}</p>
              </div>
              <div className="p-4 bg-primary/10 rounded-lg border-2 border-primary">
                <p className="text-sm text-muted-foreground">Net Payout at Maturity</p>
                <p className="text-3xl font-bold text-primary">₹{results.netPayout}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PayoutCalculator;
