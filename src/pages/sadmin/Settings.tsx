import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Settings as SettingsIcon, Save } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Settings = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [settings, setSettings] = useState({
    interestRate: "5.5",
    penaltyRate: "2.0",
    auctionDay: "1",
    minBid: "5000",
    maxBid: "50000",
  });

  const handleSave = () => {
    toast({
      title: "Settings Updated",
      description: "System parameters have been updated successfully.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button onClick={() => navigate("/sadmin/dashboard")} variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <h1 className="text-2xl font-bold">System Settings</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <SettingsIcon className="h-5 w-5" />
              Chit Fund Parameters
            </CardTitle>
            <CardDescription>Manage global system settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="interest">Interest Rate (%)</Label>
                <Input
                  id="interest"
                  type="number"
                  step="0.1"
                  value={settings.interestRate}
                  onChange={(e) => setSettings({ ...settings, interestRate: e.target.value })}
                />
                <p className="text-xs text-muted-foreground mt-1">Annual interest rate for chit funds</p>
              </div>
              <div>
                <Label htmlFor="penalty">Penalty Rate (%)</Label>
                <Input
                  id="penalty"
                  type="number"
                  step="0.1"
                  value={settings.penaltyRate}
                  onChange={(e) => setSettings({ ...settings, penaltyRate: e.target.value })}
                />
                <p className="text-xs text-muted-foreground mt-1">Late payment penalty per month</p>
              </div>
              <div>
                <Label htmlFor="auctionDay">Auction Day</Label>
                <Input
                  id="auctionDay"
                  type="number"
                  min="1"
                  max="28"
                  value={settings.auctionDay}
                  onChange={(e) => setSettings({ ...settings, auctionDay: e.target.value })}
                />
                <p className="text-xs text-muted-foreground mt-1">Day of month for auctions</p>
              </div>
              <div>
                <Label htmlFor="minBid">Minimum Bid (₹)</Label>
                <Input
                  id="minBid"
                  type="number"
                  value={settings.minBid}
                  onChange={(e) => setSettings({ ...settings, minBid: e.target.value })}
                />
                <p className="text-xs text-muted-foreground mt-1">Minimum auction bid amount</p>
              </div>
              <div>
                <Label htmlFor="maxBid">Maximum Bid (₹)</Label>
                <Input
                  id="maxBid"
                  type="number"
                  value={settings.maxBid}
                  onChange={(e) => setSettings({ ...settings, maxBid: e.target.value })}
                />
                <p className="text-xs text-muted-foreground mt-1">Maximum auction bid amount</p>
              </div>
            </div>
            <div className="flex justify-end pt-6 border-t">
              <Button onClick={handleSave} size="lg">
                <Save className="h-4 w-4 mr-2" />
                Save Settings
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Settings;
