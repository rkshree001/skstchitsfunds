import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, AlertTriangle, TrendingUp, Users, Eye, Ban } from "lucide-react";

const FraudDetection = () => {
  const alerts = [
    {
      id: 1,
      type: "Duplicate Registration",
      user: "Rajesh Kumar",
      details: "Same PAN used in 2 accounts",
      severity: "High",
      timestamp: "2025-11-11 10:30 AM",
      status: "Under Review",
    },
    {
      id: 2,
      type: "Unusual Activity",
      user: "Priya Sharma",
      details: "Multiple failed login attempts",
      severity: "Medium",
      timestamp: "2025-11-11 09:15 AM",
      status: "Investigating",
    },
    {
      id: 3,
      type: "Suspicious Transaction",
      user: "Amit Patel",
      details: "Large payment from new account",
      severity: "High",
      timestamp: "2025-11-11 08:45 AM",
      status: "Flagged",
    },
  ];

  const blockedUsers = [
    { id: 1, name: "Deepak Verma", reason: "Fraudulent documents", blockedDate: "2025-11-05", pan: "ABCD1234E" },
    { id: 2, name: "Sanjay Gupta", reason: "Multiple defaults", blockedDate: "2025-11-03", pan: "EFGH5678I" },
  ];

  const stats = [
    { label: "Active Alerts", value: "12", icon: AlertTriangle, color: "text-red-600" },
    { label: "Cases Resolved", value: "45", icon: Shield, color: "text-green-600" },
    { label: "Blocked Users", value: "8", icon: Ban, color: "text-orange-600" },
    { label: "Fraud Prevented", value: "₹8.5L", icon: TrendingUp, color: "text-blue-600" },
  ];

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Fraud Detection System</h1>
        <p className="text-muted-foreground">AI-powered fraud detection and prevention</p>
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

      <Tabs defaultValue="alerts" className="space-y-4">
        <TabsList>
          <TabsTrigger value="alerts">Active Alerts</TabsTrigger>
          <TabsTrigger value="blocked">Blocked Users</TabsTrigger>
          <TabsTrigger value="patterns">Detection Patterns</TabsTrigger>
        </TabsList>

        <TabsContent value="alerts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Fraud Alerts</CardTitle>
              <CardDescription>Recent suspicious activities detected by AI</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {alerts.map((alert) => (
                  <Card key={alert.id} className="border-red-200 bg-red-50/50 dark:bg-red-950/20">
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between">
                        <div className="flex gap-4 flex-1">
                          <div className="p-3 bg-red-100 rounded-lg">
                            <AlertTriangle className="h-6 w-6 text-red-600" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="font-semibold">{alert.type}</h3>
                              <Badge variant={alert.severity === "High" ? "destructive" : "secondary"}>
                                {alert.severity}
                              </Badge>
                              <Badge variant="outline">{alert.status}</Badge>
                            </div>
                            <div className="grid md:grid-cols-3 gap-4 text-sm">
                              <div>
                                <p className="text-muted-foreground">User</p>
                                <p className="font-medium">{alert.user}</p>
                              </div>
                              <div>
                                <p className="text-muted-foreground">Details</p>
                                <p className="font-medium">{alert.details}</p>
                              </div>
                              <div>
                                <p className="text-muted-foreground">Detected At</p>
                                <p className="font-medium">{alert.timestamp}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-2" />
                            Investigate
                          </Button>
                          <Button variant="destructive" size="sm">
                            <Ban className="h-4 w-4 mr-2" />
                            Block
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="blocked" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Blocked Users</CardTitle>
              <CardDescription>Users blocked due to fraudulent activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {blockedUsers.map((user) => (
                  <div key={user.id} className="p-4 border rounded-lg flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold mb-1">{user.name}</h3>
                      <p className="text-sm text-muted-foreground">PAN: {user.pan} • Blocked: {user.blockedDate}</p>
                      <p className="text-sm text-red-600">Reason: {user.reason}</p>
                    </div>
                    <Button variant="outline" size="sm">Unblock</Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="patterns" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Detection Patterns</CardTitle>
              <CardDescription>AI patterns for fraud detection</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold mb-2">Duplicate Account Detection</h4>
                <p className="text-sm text-muted-foreground">Identifies users creating multiple accounts with same documents</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold mb-2">Anomaly Detection</h4>
                <p className="text-sm text-muted-foreground">Flags unusual transaction patterns and behaviors</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold mb-2">Document Verification</h4>
                <p className="text-sm text-muted-foreground">AI-based verification of uploaded documents for tampering</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FraudDetection;
