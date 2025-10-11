import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageCircle, Send, Users, CheckCheck, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const WhatsAppIntegration = () => {
  const { toast } = useToast();

  const templates = [
    {
      id: 1,
      name: "Payment Reminder",
      content: "Hi {name}, your payment of {amount} for {plan} is due on {date}. Please pay to avoid penalties.",
      category: "Reminders",
      status: "Active",
    },
    {
      id: 2,
      name: "Auction Alert",
      content: "Hi {name}, auction for {plan} is starting in 30 minutes. Join now to participate.",
      category: "Alerts",
      status: "Active",
    },
    {
      id: 3,
      name: "Welcome Message",
      content: "Welcome to SKST Chit Funds, {name}! Your registration is successful. We're here to help you grow your wealth.",
      category: "Onboarding",
      status: "Active",
    },
  ];

  const stats = [
    { label: "Messages Sent Today", value: "1,234", icon: MessageCircle, color: "text-blue-600" },
    { label: "Delivery Rate", value: "98.5%", icon: CheckCheck, color: "text-green-600" },
    { label: "Response Rate", value: "67%", icon: Send, color: "text-purple-600" },
    { label: "Pending Messages", value: "45", icon: Clock, color: "text-orange-600" },
  ];

  const handleSendBroadcast = () => {
    toast({
      title: "Broadcast Scheduled",
      description: "Your WhatsApp message will be sent to selected recipients.",
    });
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">WhatsApp Business Integration</h1>
        <p className="text-muted-foreground">Automated messaging and customer engagement</p>
      </div>

      <div className="grid md:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <Icon className={`h-8 w-8 ${stat.color}`} />
                  <div>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Tabs defaultValue="broadcast" className="space-y-4">
        <TabsList>
          <TabsTrigger value="broadcast">Send Broadcast</TabsTrigger>
          <TabsTrigger value="templates">Message Templates</TabsTrigger>
          <TabsTrigger value="automation">Automation Rules</TabsTrigger>
        </TabsList>

        <TabsContent value="broadcast" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Send Broadcast Message</CardTitle>
              <CardDescription>Send WhatsApp messages to multiple recipients</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Select Template</label>
                <select className="w-full p-2 border rounded-md">
                  <option>Payment Reminder</option>
                  <option>Auction Alert</option>
                  <option>Welcome Message</option>
                  <option>Custom Message</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Select Recipients</label>
                <select className="w-full p-2 border rounded-md">
                  <option>All Members (1,456)</option>
                  <option>Active Members (1,203)</option>
                  <option>Premium Members (234)</option>
                  <option>Members with Pending Payments (47)</option>
                  <option>Custom List</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Message Content</label>
                <Textarea 
                  rows={5} 
                  placeholder="Hi {name}, your payment of {amount} for {plan} is due on {date}..."
                  defaultValue="Hi {name}, your payment of {amount} for {plan} is due on {date}. Please pay to avoid penalties."
                />
                <p className="text-xs text-muted-foreground">Use {"{name}"}, {"{amount}"}, {"{plan}"}, {"{date}"} as placeholders</p>
              </div>

              <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                <h4 className="font-semibold mb-2">Preview</h4>
                <div className="bg-white dark:bg-gray-800 p-3 rounded-lg border">
                  <p className="text-sm">Hi Rajesh Kumar, your payment of ₹10,000 for Premium Gold Plan is due on 15 Nov 2025. Please pay to avoid penalties.</p>
                </div>
              </div>

              <Button className="w-full" onClick={handleSendBroadcast}>
                <Send className="h-4 w-4 mr-2" />
                Send to 1,456 Recipients
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="templates" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Message Templates</CardTitle>
                  <CardDescription>Pre-approved WhatsApp message templates</CardDescription>
                </div>
                <Button size="sm">Create Template</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {templates.map((template) => (
                  <Card key={template.id}>
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-semibold">{template.name}</h3>
                            <Badge variant="outline">{template.category}</Badge>
                            <Badge variant="default">{template.status}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{template.content}</p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">Edit</Button>
                          <Button variant="outline" size="sm">Use</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="automation" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Automation Rules</CardTitle>
              <CardDescription>Set up automated WhatsApp messages</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold">Payment Reminder - 3 Days Before</h4>
                  <Badge variant="default">Active</Badge>
                </div>
                <p className="text-sm text-muted-foreground">Automatically send payment reminder 3 days before due date</p>
              </div>
              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold">Auction Start Alert - 30 Minutes</h4>
                  <Badge variant="default">Active</Badge>
                </div>
                <p className="text-sm text-muted-foreground">Send auction alert 30 minutes before start time</p>
              </div>
              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold">Welcome Message - New Registration</h4>
                  <Badge variant="default">Active</Badge>
                </div>
                <p className="text-sm text-muted-foreground">Send welcome message immediately after registration</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default WhatsAppIntegration;
