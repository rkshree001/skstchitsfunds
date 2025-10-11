import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Wallet, TrendingDown, Calculator, CheckCircle, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const LoanAgainstChit = () => {
  const { toast } = useToast();
  const [loanAmount, setLoanAmount] = useState(50000);
  const [tenure, setTenure] = useState(12);

  const eligibleChits = [
    {
      id: 1,
      name: "Premium Gold Plan",
      amount: "₹2,00,000",
      paidInstallments: 12,
      totalInstallments: 20,
      eligibleLoan: "₹1,20,000",
      status: "Active",
    },
    {
      id: 2,
      name: "Diamond Elite Plan",
      amount: "₹5,00,000",
      paidInstallments: 18,
      totalInstallments: 24,
      eligibleLoan: "₹3,75,000",
      status: "Active",
    },
  ];

  const interestRate = 12;
  const monthlyEMI = (loanAmount * (interestRate/1200) * Math.pow(1 + interestRate/1200, tenure)) / (Math.pow(1 + interestRate/1200, tenure) - 1);
  const totalPayable = monthlyEMI * tenure;
  const totalInterest = totalPayable - loanAmount;

  const handleApplyLoan = () => {
    toast({
      title: "Loan Application Submitted",
      description: "Your loan application is under review. You'll be notified within 24 hours.",
    });
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Loan Against Chit</h1>
        <p className="text-muted-foreground">Get instant loans using your active chit funds as collateral</p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Wallet className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Max Eligible Loan</p>
                <p className="text-xl font-bold">₹3,75,000</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <TrendingDown className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Interest Rate</p>
                <p className="text-xl font-bold">{interestRate}% p.a.</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <CheckCircle className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Active Loans</p>
                <p className="text-xl font-bold">0</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Loan Calculator</CardTitle>
            <CardDescription>Calculate your EMI and loan eligibility</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>Select Chit Plan</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a chit plan" />
                </SelectTrigger>
                <SelectContent>
                  {eligibleChits.map((chit) => (
                    <SelectItem key={chit.id} value={chit.id.toString()}>
                      {chit.name} - Eligible: {chit.eligibleLoan}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between">
                <Label>Loan Amount</Label>
                <span className="text-sm font-medium">₹{loanAmount.toLocaleString()}</span>
              </div>
              <Slider
                value={[loanAmount]}
                onValueChange={(value) => setLoanAmount(value[0])}
                min={10000}
                max={375000}
                step={5000}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>₹10,000</span>
                <span>₹3,75,000</span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between">
                <Label>Loan Tenure (months)</Label>
                <span className="text-sm font-medium">{tenure} months</span>
              </div>
              <Slider
                value={[tenure]}
                onValueChange={(value) => setTenure(value[0])}
                min={6}
                max={24}
                step={6}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>6 months</span>
                <span>24 months</span>
              </div>
            </div>

            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">Monthly EMI</span>
                <span className="text-xl font-bold text-blue-600">₹{Math.round(monthlyEMI).toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Total Interest</span>
                <span className="font-medium">₹{Math.round(totalInterest).toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Total Payable</span>
                <span className="font-medium">₹{Math.round(totalPayable).toLocaleString()}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Eligible Chit Plans</CardTitle>
            <CardDescription>Your chits available for loan collateral</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {eligibleChits.map((chit) => (
              <Card key={chit.id} className="border-green-200 bg-green-50 dark:bg-green-950/20">
                <CardContent className="pt-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold">{chit.name}</h3>
                      <p className="text-sm text-muted-foreground">Total Value: {chit.amount}</p>
                    </div>
                    <Badge className="bg-green-600">{chit.status}</Badge>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Installments Paid</span>
                      <span className="font-medium">{chit.paidInstallments}/{chit.totalInstallments}</span>
                    </div>
                    <div className="w-full bg-green-200 rounded-full h-2">
                      <div 
                        className="bg-green-600 h-2 rounded-full" 
                        style={{ width: `${(chit.paidInstallments / chit.totalInstallments) * 100}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-muted-foreground">Eligible Loan</span>
                      <span className="text-lg font-bold text-green-600">{chit.eligibleLoan}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Apply for Loan</CardTitle>
          <CardDescription>Complete your loan application</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Full Name</Label>
              <Input placeholder="Enter your full name" />
            </div>
            <div className="space-y-2">
              <Label>Mobile Number</Label>
              <Input placeholder="Enter mobile number" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Email Address</Label>
              <Input type="email" placeholder="Enter email address" />
            </div>
            <div className="space-y-2">
              <Label>Purpose of Loan</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select purpose" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="business">Business Expansion</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                  <SelectItem value="medical">Medical Emergency</SelectItem>
                  <SelectItem value="personal">Personal Use</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button className="w-full" size="lg" onClick={handleApplyLoan}>
            <Calculator className="h-4 w-4 mr-2" />
            Apply for Loan
          </Button>
        </CardContent>
      </Card>

      <Card className="bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
            <div>
              <h4 className="font-semibold mb-2">Important Terms & Conditions</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Loan amount up to 75% of paid installments value</li>
                <li>• Interest rate: {interestRate}% per annum (subject to change)</li>
                <li>• Loan tenure: 6 to 24 months</li>
                <li>• No prepayment charges</li>
                <li>• Chit will remain as collateral until loan is fully repaid</li>
                <li>• Processing fee: 1% of loan amount (min ₹500)</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoanAgainstChit;
