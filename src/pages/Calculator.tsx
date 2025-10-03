import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { Calculator as CalcIcon, Shield, ArrowLeft } from "lucide-react";
import { useState } from "react";

const Calculator = () => {
  const navigate = useNavigate();
  
  const [chitAmount, setChitAmount] = useState("100000");
  const [duration, setDuration] = useState("12");
  const [interestRate, setInterestRate] = useState("5");
  
  const calculateResults = () => {
    const amount = parseFloat(chitAmount);
    const months = parseInt(duration);
    const rate = parseFloat(interestRate);
    
    const monthlyPremium = amount / months;
    const totalInterest = (amount * rate * (months / 12)) / 100;
    const totalAmount = amount + totalInterest;
    
    return {
      monthlyPremium: monthlyPremium.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
      totalAmount: totalAmount.toFixed(2),
      maturityValue: totalAmount.toFixed(2),
    };
  };

  const results = calculateResults();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">SKST Chit Funds</span>
          </div>
          <Button onClick={() => navigate("/")} variant="outline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-primary text-primary-foreground mb-4">
              <CalcIcon className="h-8 w-8" />
            </div>
            <h1 className="text-4xl font-bold mb-2">Chit Fund Calculator</h1>
            <p className="text-lg text-muted-foreground">Calculate your returns and plan your investments</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Input Form */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle>Calculate Your Returns</CardTitle>
                <CardDescription>Enter your chit fund details to see estimated returns</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="chitAmount">Chit Amount (₹)</Label>
                  <Input
                    id="chitAmount"
                    type="number"
                    placeholder="100000"
                    value={chitAmount}
                    onChange={(e) => setChitAmount(e.target.value)}
                  />
                  <p className="text-xs text-muted-foreground">Total chit fund amount</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="duration">Duration</Label>
                  <Select value={duration} onValueChange={setDuration}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="6">6 Months</SelectItem>
                      <SelectItem value="12">1 Year (12 Months)</SelectItem>
                      <SelectItem value="24">2 Years (24 Months)</SelectItem>
                      <SelectItem value="36">3 Years (36 Months)</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-muted-foreground">Choose your investment period</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interest">Interest Rate (%)</Label>
                  <Input
                    id="interest"
                    type="number"
                    step="0.1"
                    placeholder="5"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                  />
                  <p className="text-xs text-muted-foreground">Annual interest rate</p>
                </div>

                <Button className="w-full" size="lg">
                  <CalcIcon className="h-4 w-4 mr-2" />
                  Recalculate
                </Button>
              </CardContent>
            </Card>

            {/* Results */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle>Estimated Results</CardTitle>
                <CardDescription>Based on your inputs</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="p-6 rounded-lg bg-primary/10 border-2 border-primary">
                  <p className="text-sm text-muted-foreground mb-1">Monthly Premium</p>
                  <p className="text-3xl font-bold text-primary">₹{parseFloat(results.monthlyPremium).toLocaleString()}</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
                    <span className="text-sm font-medium">Total Investment</span>
                    <span className="text-lg font-semibold">₹{parseFloat(chitAmount).toLocaleString()}</span>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
                    <span className="text-sm font-medium">Total Interest</span>
                    <span className="text-lg font-semibold text-success">₹{parseFloat(results.totalInterest).toLocaleString()}</span>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-lg border bg-card">
                    <span className="text-sm font-medium">Duration</span>
                    <span className="text-lg font-semibold">{duration} Months</span>
                  </div>

                  <div className="flex items-center justify-between p-6 rounded-lg gradient-primary text-primary-foreground">
                    <span className="font-medium">Maturity Value</span>
                    <span className="text-2xl font-bold">₹{parseFloat(results.maturityValue).toLocaleString()}</span>
                  </div>
                </div>

                <Button onClick={() => navigate("/login")} variant="secondary" className="w-full" size="lg">
                  Start Your Investment
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Benefits Section */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-lg">Fixed Returns</CardTitle>
                <CardDescription>Guaranteed interest on your monthly contributions</CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-lg">Flexible Tenure</CardTitle>
                <CardDescription>Choose plans from 6 months to 3 years</CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-lg">Quick Access</CardTitle>
                <CardDescription>Get funds when you need through auctions</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
