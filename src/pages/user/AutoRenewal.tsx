import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { RefreshCw, Calendar, DollarSign } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const completedChits = [
  {
    id: "CHT001",
    name: "Silver Plan 2023",
    completedDate: "Dec 31, 2023",
    finalAmount: "₹50,000",
    autoRenewal: false
  },
  {
    id: "CHT002",
    name: "Gold Plan 2023",
    completedDate: "Jan 15, 2024",
    finalAmount: "₹1,00,000",
    autoRenewal: true
  }
];

export default function AutoRenewal() {
  const [renewalSettings, setRenewalSettings] = useState(
    completedChits.reduce((acc, chit) => ({
      ...acc,
      [chit.id]: chit.autoRenewal
    }), {})
  );

  const handleToggle = (chitId: string) => {
    setRenewalSettings(prev => ({
      ...prev,
      [chitId]: !prev[chitId]
    }));
    toast.success("Auto-renewal setting updated");
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Auto-Chit Renewal System</h1>
        <p className="text-muted-foreground">Automatically renew your chit plans upon completion</p>
      </div>

      <div className="grid gap-6">
        {completedChits.map((chit) => (
          <Card key={chit.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>{chit.name}</CardTitle>
                  <CardDescription>Completed on {chit.completedDate}</CardDescription>
                </div>
                <Badge variant={renewalSettings[chit.id] ? "default" : "outline"}>
                  {renewalSettings[chit.id] ? "Auto-Renewal ON" : "Auto-Renewal OFF"}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Final Amount</p>
                    <p className="font-semibold">{chit.finalAmount}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Completion Date</p>
                    <p className="font-semibold">{chit.completedDate}</p>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label htmlFor={`renewal-${chit.id}`} className="text-base font-semibold">
                      Enable Auto-Renewal
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Automatically move funds to the next batch when this chit completes
                    </p>
                  </div>
                  <Switch
                    id={`renewal-${chit.id}`}
                    checked={renewalSettings[chit.id]}
                    onCheckedChange={() => handleToggle(chit.id)}
                  />
                </div>
              </div>

              {renewalSettings[chit.id] && (
                <div className="bg-secondary/50 p-4 rounded-lg space-y-2">
                  <div className="flex items-center gap-2">
                    <RefreshCw className="h-4 w-4 text-primary" />
                    <p className="font-semibold text-sm">Auto-Renewal Details</p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Your final amount will be automatically transferred to the next available {chit.name.split(' ')[0]} Plan batch starting next month.
                  </p>
                  <Button variant="outline" size="sm" className="mt-2">
                    Configure Renewal Settings
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
