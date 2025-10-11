import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail, MessageSquare, Send, Users, TrendingUp, Target } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CampaignManager = () => {
  const { toast } = useToast();

  const campaigns = [
    {
      id: 1,
      name: "Festive Season Offers",
      type: "Email + SMS",
      status: "Active",
      sent: 1456,
      opened: 987,
      clicked: 234,
      startDate: "2025-11-01",
      endDate: "2025-11-30",
    },
    {
      id: 2,
      name: "New Chit Plan Launch",
      type: "Email",
      status: "Scheduled",
      sent: 0,
      opened: 0,
      clicked: 0,
      startDate: "2025-11-15",
      endDate: "2025-11-20",
    },
  ];

  const stats = [
    { label: "Active Campaigns", value: "5", icon: Target, color: "text-blue-600" },
    { label: "Total Reach", value: "1,456", icon: Users, color: "text-green-600" },
    { label: "Avg Open Rate", value: "67.8%", icon: Mail, color: "text-purple-600" },
    { label: "Conversion Rate", value: "16.1%", icon: TrendingUp, color: "text-orange-600" },
  ];

  const handleCreateCampaign = () => {
    toast({
      title: "Campaign Created",
      description: "Your marketing campaign has been created successfully.",
    });
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Email/SMS Campaign Manager</h1>
          <p className="text-muted-foreground">Create and manage marketing campaigns</p>
        </div>
        <Button onClick={handleCreateCampaign}>
          <Send className="h-4 w-4 mr-2" />
          Create Campaign
        </Button>
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

      <Tabs defaultValue="campaigns" className="space-y-4">
        <TabsList>
          <TabsTrigger value="campaigns">All Campaigns</TabsTrigger>
          <TabsTrigger value="create">Create New</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="campaigns" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Active Campaigns</CardTitle>
              <CardDescription>View and manage ongoing campaigns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {campaigns.map((campaign) => (
                  <Card key={campaign.id}>
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <h3 className="font-semibold text-lg">{campaign.name}</h3>
                            <Badge variant={campaign.status === "Active" ? "default" : "secondary"}>
                              {campaign.status}
                            </Badge>
                            <Badge variant="outline">{campaign.type}</Badge>
                          </div>
                          <div className="grid md:grid-cols-4 gap-4 text-sm">
                            <div>
                              <p className="text-muted-foreground">Sent</p>
                              <p className="text-xl font-bold">{campaign.sent.toLocaleString()}</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Opened</p>
                              <p className="text-xl font-bold text-green-600">{campaign.opened.toLocaleString()}</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Clicked</p>
                              <p className="text-xl font-bold text-blue-600">{campaign.clicked.toLocaleString()}</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Duration</p>
                              <p className="font-medium">{campaign.startDate} to {campaign.endDate}</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">View Report</Button>
                          <Button variant="outline" size="sm">Edit</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="create" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Create New Campaign</CardTitle>
              <CardDescription>Set up your email and SMS marketing campaign</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Campaign Name</label>
                  <Input placeholder="Enter campaign name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Campaign Type</label>
                  <select className="w-full p-2 border rounded-md">
                    <option>Email Only</option>
                    <option>SMS Only</option>
                    <option>Email + SMS</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Target Audience</label>
                <select className="w-full p-2 border rounded-md">
                  <option>All Members</option>
                  <option>Active Members</option>
                  <option>Premium Members</option>
                  <option>New Members (Last 30 days)</option>
                  <option>Custom Segment</option>
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Start Date</label>
                  <Input type="date" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">End Date</label>
                  <Input type="date" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Email Subject</label>
                <Input placeholder="Enter email subject line" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Email Content</label>
                <Textarea rows={6} placeholder="Enter email content..." />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">SMS Content (Max 160 characters)</label>
                <Textarea rows={3} maxLength={160} placeholder="Enter SMS content..." />
                <p className="text-xs text-muted-foreground">0/160 characters</p>
              </div>

              <Button className="w-full" onClick={handleCreateCampaign}>
                <Send className="h-4 w-4 mr-2" />
                Create Campaign
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Campaign Performance</CardTitle>
                <CardDescription>Overall campaign statistics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Total Campaigns</span>
                  <span className="text-xl font-bold">12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Total Emails Sent</span>
                  <span className="text-xl font-bold">45,678</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Total SMS Sent</span>
                  <span className="text-xl font-bold">23,456</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Avg Open Rate</span>
                  <span className="text-xl font-bold text-green-600">67.8%</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Best Performing Campaign</CardTitle>
                <CardDescription>Highest conversion rate</CardDescription>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-2">Festive Season Offers</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Open Rate</span>
                    <span className="font-medium">78.5%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Click Rate</span>
                    <span className="font-medium">23.4%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Conversion</span>
                    <span className="font-medium text-green-600">18.2%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CampaignManager;
