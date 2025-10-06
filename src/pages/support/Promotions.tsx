import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Megaphone, Plus } from "lucide-react";

const Promotions = () => {
  const navigate = useNavigate();

  const promotions = [
    {
      id: 1,
      title: "New Year Special - 6% Interest Rate",
      description: "Join our 1-year chit plan and earn 6% interest instead of 5%",
      validUntil: "2025-01-31",
      status: "active",
      redemptions: 45,
    },
    {
      id: 2,
      title: "Refer & Earn ₹1,000",
      description: "Get ₹1,000 bonus for every friend you refer who completes enrollment",
      validUntil: "2025-02-28",
      status: "active",
      redemptions: 128,
    },
    {
      id: 3,
      title: "Zero Processing Fee - Limited Time",
      description: "No processing fee for chit plans above ₹1 lakh",
      validUntil: "2024-12-31",
      status: "expired",
      redemptions: 89,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button onClick={() => navigate("/support/dashboard")} variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
              <h1 className="text-2xl font-bold">Marketing & Promotions</h1>
            </div>
            <Button variant="default">
              <Plus className="h-4 w-4 mr-2" />
              Create Promotion
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          {promotions.map((promo) => (
            <Card key={promo.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Megaphone className="h-6 w-6 text-primary" />
                    <div>
                      <CardTitle>{promo.title}</CardTitle>
                      <CardDescription>{promo.description}</CardDescription>
                    </div>
                  </div>
                  <Badge className={promo.status === "active" ? "bg-success" : "bg-muted"}>
                    {promo.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Valid Until</p>
                    <p className="font-semibold">{promo.validUntil}</p>
                  </div>
                  <div className="space-y-1 text-right">
                    <p className="text-sm text-muted-foreground">Total Redemptions</p>
                    <p className="font-semibold">{promo.redemptions}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                    {promo.status === "active" && (
                      <Button variant="destructive" size="sm">
                        Deactivate
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Promotions;
