import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Send, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const BulkNotifications = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [message, setMessage] = useState("");
  const [channel, setChannel] = useState("sms");

  const handleSend = () => {
    toast({
      title: "Notification Sent",
      description: `Bulk ${channel.toUpperCase()} sent to all users successfully.`,
    });
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button onClick={() => navigate("/support/dashboard")} variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <h1 className="text-2xl font-bold">Bulk Notifications</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="h-5 w-5" />
                  Compose Message
                </CardTitle>
                <CardDescription>Send SMS or Email alerts to all users</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label>Channel</Label>
                  <div className="grid grid-cols-2 gap-4 mt-2">
                    <Button
                      variant={channel === "sms" ? "default" : "outline"}
                      onClick={() => setChannel("sms")}
                    >
                      SMS
                    </Button>
                    <Button
                      variant={channel === "email" ? "default" : "outline"}
                      onClick={() => setChannel("email")}
                    >
                      Email
                    </Button>
                  </div>
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder={
                      channel === "sms"
                        ? "Enter your SMS message (max 160 characters)"
                        : "Enter your email message"
                    }
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={8}
                    maxLength={channel === "sms" ? 160 : undefined}
                  />
                  {channel === "sms" && (
                    <p className="text-xs text-muted-foreground mt-1">
                      {message.length}/160 characters
                    </p>
                  )}
                </div>
                <Button
                  onClick={handleSend}
                  disabled={!message.trim()}
                  className="w-full"
                  size="lg"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send to All Users
                </Button>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Recipients
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground">Total Users</p>
                  <p className="text-3xl font-bold">4,780</p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground">Active Users</p>
                  <p className="text-3xl font-bold">4,215</p>
                </div>
                <div className="p-4 bg-primary/10 rounded-lg">
                  <p className="text-sm font-medium">Message will be sent to:</p>
                  <p className="text-lg font-bold text-primary mt-1">All Active Users</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BulkNotifications;
