import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Calendar, DollarSign, TrendingUp } from "lucide-react";

const planTemplates = [
  {
    id: 1,
    name: "Silver Plan",
    duration: "12 months",
    groupSize: 25,
    monthlyAmount: "₹2,000",
    totalValue: "₹50,000",
    interestRate: "5%",
    auctionDay: "1st of every month",
    status: "Active"
  },
  {
    id: 2,
    name: "Gold Plan",
    duration: "24 months",
    groupSize: 50,
    monthlyAmount: "₹4,000",
    totalValue: "₹1,00,000",
    interestRate: "6%",
    auctionDay: "5th of every month",
    status: "Active"
  },
  {
    id: 3,
    name: "Diamond Plan",
    duration: "36 months",
    groupSize: 100,
    monthlyAmount: "₹10,000",
    totalValue: "₹3,60,000",
    interestRate: "7%",
    auctionDay: "10th of every month",
    status: "Active"
  },
  {
    id: 4,
    name: "Platinum Plan",
    duration: "18 months",
    groupSize: 30,
    monthlyAmount: "₹5,000",
    totalValue: "₹90,000",
    interestRate: "5.5%",
    auctionDay: "15th of every month",
    status: "Coming Soon"
  }
];

export default function PlanTemplates() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dynamic Chit Plan Templates</h1>
        <p className="text-muted-foreground">Explore different chit plan configurations and structures</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {planTemplates.map((plan) => (
          <Card key={plan.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>{plan.name}</CardTitle>
                <Badge variant={plan.status === "Active" ? "default" : "secondary"}>
                  {plan.status}
                </Badge>
              </div>
              <CardDescription>{plan.duration} chit plan</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start gap-2">
                  <Users className="h-4 w-4 text-muted-foreground mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground">Group Size</p>
                    <p className="font-semibold">{plan.groupSize} members</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground">Duration</p>
                    <p className="font-semibold">{plan.duration}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <DollarSign className="h-4 w-4 text-muted-foreground mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground">Monthly Amount</p>
                    <p className="font-semibold">{plan.monthlyAmount}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <TrendingUp className="h-4 w-4 text-muted-foreground mt-1" />
                  <div>
                    <p className="text-sm text-muted-foreground">Interest Rate</p>
                    <p className="font-semibold">{plan.interestRate}</p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Total Value</span>
                  <span className="font-semibold">{plan.totalValue}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Auction Day</span>
                  <span className="font-semibold">{plan.auctionDay}</span>
                </div>
              </div>

              <Button 
                className="w-full" 
                disabled={plan.status !== "Active"}
              >
                {plan.status === "Active" ? "Enroll Now" : "Notify Me"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
