import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft, Check, Calendar, Users, TrendingUp, Save, ListFilter, Grid3x3 } from "lucide-react";

interface ChitPlanStepProps {
  data: any;
  onNext: (data: any) => void;
  onPrevious: () => void;
  onSaveDraft: () => void;
}

const plans = [
  {
    id: 1,
    name: "Starter Chit",
    amount: "₹1,00,000",
    amountValue: 100000,
    monthlyContribution: "₹5,000",
    duration: "20 months",
    totalMembers: 20,
    expectedReturns: "8.5%",
    availableSlots: "12 left",
    badge: "Low Risk",
    features: [
      "Low monthly commitment",
      "Perfect for beginners",
      "Flexible payment options",
      "Digital documentation",
    ],
  },
  {
    id: 2,
    name: "Growth Chit",
    amount: "₹2,50,000",
    amountValue: 250000,
    monthlyContribution: "₹10,000",
    duration: "25 months",
    totalMembers: 25,
    expectedReturns: "9.2%",
    availableSlots: "8 left",
    badge: "Recommended",
    features: [
      "Higher returns potential",
      "Moderate investment",
      "Priority customer support",
      "SMS & Email alerts",
    ],
  },
  {
    id: 3,
    name: "Premium Chit",
    amount: "₹5,00,000",
    amountValue: 500000,
    monthlyContribution: "₹20,000",
    duration: "25 months",
    totalMembers: 25,
    expectedReturns: "10.1%",
    availableSlots: "3 left",
    badge: null,
    features: [
      "Maximum returns",
      "Quick member benefits",
      "Dedicated relationship manager",
      "Priority fund disbursement",
    ],
  },
  {
    id: 4,
    name: "Elite Chit",
    amount: "₹10,00,000",
    amountValue: 1000000,
    monthlyContribution: "₹40,000",
    duration: "25 months",
    totalMembers: 25,
    expectedReturns: "11.5%",
    availableSlots: "15 left",
    badge: null,
    features: [
      "Highest returns potential",
      "VIP treatment",
      "Exclusive investor access",
      "Personalized fund advisor",
    ],
  },
];

const ChitPlanStep = ({ data, onNext, onPrevious, onSaveDraft }: ChitPlanStepProps) => {
  const [selectedPlan, setSelectedPlan] = useState(data.chitPlan || null);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedPlan) {
      onNext({ chitPlan: selectedPlan });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Choose Your Chit Plan</h3>
            <p className="text-sm text-muted-foreground">
              Select a plan that matches your investment goals and financial capacity
            </p>
          </div>
          <Tabs value={viewMode} onValueChange={(value: any) => setViewMode(value)}>
            <TabsList>
              <TabsTrigger value="grid" className="flex items-center gap-2">
                <Grid3x3 className="h-4 w-4" />
                Grid
              </TabsTrigger>
              <TabsTrigger value="list" className="flex items-center gap-2">
                <ListFilter className="h-4 w-4" />
                List
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {selectedPlan && (
          <div className="bg-muted/50 p-4 rounded-lg border border-primary/20">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium">Selected Plan Summary</p>
                <p className="text-xs text-muted-foreground">{selectedPlan.name}</p>
              </div>
              <div className="ml-auto text-right">
                <p className="text-sm font-semibold">{selectedPlan.amount}</p>
                <p className="text-xs text-muted-foreground">Total Value</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 gap-6" : "space-y-4"}>
        {plans.map((plan) => (
          <Card
            key={plan.id}
            className={`p-6 cursor-pointer transition-all hover:shadow-lg ${
              selectedPlan?.id === plan.id
                ? "border-primary border-2 bg-primary/5"
                : "border-border"
            }`}
            onClick={() => setSelectedPlan(plan)}
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-xl font-bold">{plan.name}</h4>
                  <p className="text-2xl font-bold text-primary mt-1">{plan.amount}</p>
                  <p className="text-xs text-muted-foreground">Total Chit Value</p>
                </div>
                {plan.badge && (
                  <Badge variant={plan.badge === "Recommended" ? "default" : "secondary"}>
                    {plan.badge}
                  </Badge>
                )}
                {selectedPlan?.id === plan.id && (
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <Check className="h-5 w-5 text-primary-foreground" />
                  </div>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                <div>
                  <p className="text-sm font-medium">Monthly Contribution</p>
                  <p className="text-lg font-semibold">{plan.monthlyContribution}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Duration</p>
                  <p className="text-lg font-semibold">{plan.duration}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Total Members</p>
                  <p className="text-lg font-semibold">{plan.totalMembers}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Expected Returns</p>
                  <p className="text-lg font-semibold text-green-600">{plan.expectedReturns}</p>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium mb-2">Available Slots</p>
                <p className="text-sm text-orange-600 font-medium">{plan.availableSlots}</p>
              </div>

              <div>
                <p className="text-sm font-medium mb-2">Key Features:</p>
                <ul className="space-y-1">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                      <Check className="h-3 w-3 text-green-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {selectedPlan?.id === plan.id && (
                <Button variant="default" className="w-full" type="button">
                  <Check className="h-4 w-4 mr-2" />
                  Selected
                </Button>
              )}
              {selectedPlan?.id !== plan.id && (
                <Button
                  variant="outline"
                  className="w-full"
                  type="button"
                  onClick={() => setSelectedPlan(plan)}
                >
                  Select Plan
                </Button>
              )}

              <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  Next Auction: {new Date(Date.now() + 86400000 * 5).toLocaleDateString()}
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="bg-muted/30 p-6 rounded-lg">
        <h4 className="font-semibold mb-3 flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-primary" />
          Need Help Choosing?
        </h4>
        <p className="text-sm text-muted-foreground mb-4">
          Our financial advisors can help you select the best plan based on your income, savings
          goals, and risk appetite. You can also use our calculator to estimate your returns.
        </p>
        <Button type="button" variant="outline" size="sm">
          Schedule Consultation
        </Button>
      </div>

      <div className="flex justify-between pt-6 border-t">
        <div className="flex gap-2">
          <Button type="button" variant="outline" onClick={onPrevious}>
            <ChevronLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>
          <Button type="button" variant="outline" onClick={onSaveDraft}>
            <Save className="h-4 w-4 mr-2" />
            Save Draft
          </Button>
        </div>
        <Button type="submit" disabled={!selectedPlan}>
          Continue
        </Button>
      </div>
    </form>
  );
};

export default ChitPlanStep;
