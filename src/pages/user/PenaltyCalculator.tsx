import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { AlertCircle, Calculator } from "lucide-react";
import { useState } from "react";

export default function PenaltyCalculator() {
  const [monthlyAmount, setMonthlyAmount] = useState("2000");
  const [daysOverdue, setDaysOverdue] = useState("10");
  const [penaltyRate, setPenaltyRate] = useState("2");

  const calculatePenalty = () => {
    const amount = parseFloat(monthlyAmount);
    const days = parseInt(daysOverdue);
    const rate = parseFloat(penaltyRate);
    return ((amount * rate * days) / (100 * 30)).toFixed(2);
  };

  const totalPayable = () => {
    return (parseFloat(monthlyAmount) + parseFloat(calculatePenalty())).toFixed(2);
  };

  return (
    <div className="container mx-auto p-6 max-w-4xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Penalty Calculator</h1>
        <p className="text-muted-foreground">Calculate late payment fees and penalties</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Calculate Penalty</CardTitle>
            <CardDescription>Enter payment details to calculate late fees</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="monthlyAmount">Monthly Payment Amount (₹)</Label>
              <Input
                id="monthlyAmount"
                type="number"
                value={monthlyAmount}
                onChange={(e) => setMonthlyAmount(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="daysOverdue">Days Overdue</Label>
              <Input
                id="daysOverdue"
                type="number"
                value={daysOverdue}
                onChange={(e) => setDaysOverdue(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="penaltyRate">Penalty Rate (% per month)</Label>
              <Input
                id="penaltyRate"
                type="number"
                value={penaltyRate}
                onChange={(e) => setPenaltyRate(e.target.value)}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Penalty Breakdown</CardTitle>
            <CardDescription>Your calculated late fees</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                <span className="text-muted-foreground">Monthly Amount</span>
                <span className="font-semibold">₹{monthlyAmount}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-destructive/10 rounded-lg">
                <span className="text-muted-foreground">Penalty Amount</span>
                <span className="font-semibold text-destructive">₹{calculatePenalty()}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-primary/10 rounded-lg">
                <span className="font-semibold">Total Payable</span>
                <span className="font-bold text-lg">₹{totalPayable()}</span>
              </div>
            </div>

            <div className="flex items-start gap-2 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
              <AlertCircle className="h-4 w-4 text-yellow-600 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold text-yellow-900 dark:text-yellow-100">Important</p>
                <p className="text-yellow-800 dark:text-yellow-200">
                  Pay before the due date to avoid penalty charges
                </p>
              </div>
            </div>

            <Button className="w-full">
              <Calculator className="h-4 w-4 mr-2" />
              Proceed to Payment
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Penalty History</CardTitle>
          <CardDescription>Your past penalty charges</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { month: "February 2024", amount: "₹2,000", penalty: "₹40", days: 6, status: "Paid" },
              { month: "January 2024", amount: "₹2,000", penalty: "₹0", days: 0, status: "On Time" },
              { month: "December 2023", amount: "₹2,000", penalty: "₹80", days: 12, status: "Paid" }
            ].map((record, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <p className="font-semibold">{record.month}</p>
                  <p className="text-sm text-muted-foreground">
                    {record.days > 0 ? `${record.days} days overdue` : "Paid on time"}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">{record.amount}</p>
                  {record.penalty !== "₹0" && (
                    <p className="text-sm text-destructive">+{record.penalty} penalty</p>
                  )}
                  <p className={`text-sm ${record.status === "On Time" ? "text-green-600" : "text-muted-foreground"}`}>
                    {record.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
