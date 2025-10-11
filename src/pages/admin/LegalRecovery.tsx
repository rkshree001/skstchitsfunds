import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertTriangle, FileText, Gavel, Users, TrendingDown, Search } from "lucide-react";

const LegalRecovery = () => {
  const defaulters = [
    {
      id: 1,
      name: "Amit Sharma",
      chitPlan: "Premium Gold Plan",
      outstanding: "₹45,000",
      dueDate: "2025-09-15",
      daysPending: 57,
      stage: "Notice Sent",
      phone: "+91 98765 43210",
      lastContact: "2025-11-05",
    },
    {
      id: 2,
      name: "Priya Reddy",
      chitPlan: "Silver Saver Plan",
      outstanding: "₹32,000",
      dueDate: "2025-10-10",
      daysPending: 32,
      stage: "Follow-up",
      phone: "+91 98765 43211",
      lastContact: "2025-11-08",
    },
    {
      id: 3,
      name: "Rahul Verma",
      chitPlan: "Diamond Elite Plan",
      outstanding: "₹85,000",
      dueDate: "2025-08-20",
      daysPending: 83,
      stage: "Legal Action",
      phone: "+91 98765 43212",
      lastContact: "2025-10-25",
    },
  ];

  const legalCases = [
    {
      id: 1,
      caseNo: "LC/2025/001",
      member: "Rahul Verma",
      amount: "₹85,000",
      filedDate: "2025-10-15",
      status: "In Progress",
      nextHearing: "2025-11-20",
      lawyer: "Adv. Suresh Kumar",
    },
    {
      id: 2,
      caseNo: "LC/2025/002",
      member: "Deepak Joshi",
      amount: "₹1,20,000",
      filedDate: "2025-09-28",
      status: "Settlement",
      nextHearing: "2025-11-15",
      lawyer: "Adv. Priya Nair",
    },
  ];

  const stats = [
    { label: "Total Defaulters", value: "47", icon: AlertTriangle, color: "text-red-600" },
    { label: "Outstanding Amount", value: "₹12.5L", icon: TrendingDown, color: "text-orange-600" },
    { label: "Legal Cases", value: "8", icon: Gavel, color: "text-purple-600" },
    { label: "Recovery Agents", value: "5", icon: Users, color: "text-blue-600" },
  ];

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Legal & Recovery Management</h1>
          <p className="text-muted-foreground">Track defaulters and manage recovery processes</p>
        </div>
        <Button>
          <FileText className="h-4 w-4 mr-2" />
          Generate Notice
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

      <Tabs defaultValue="defaulters" className="space-y-4">
        <TabsList>
          <TabsTrigger value="defaulters">Defaulters</TabsTrigger>
          <TabsTrigger value="legal">Legal Cases</TabsTrigger>
          <TabsTrigger value="settlement">Settlements</TabsTrigger>
        </TabsList>

        <TabsContent value="defaulters" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Defaulter List</CardTitle>
                  <CardDescription>Members with pending payments and escalation status</CardDescription>
                </div>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search defaulters..." className="pl-10 w-64" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {defaulters.map((defaulter) => (
                  <Card key={defaulter.id} className="border-red-200 bg-red-50/50 dark:bg-red-950/20">
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-semibold text-lg">{defaulter.name}</h3>
                            <Badge variant="destructive">{defaulter.stage}</Badge>
                            <Badge variant="outline" className="bg-red-100 text-red-700">
                              {defaulter.daysPending} days pending
                            </Badge>
                          </div>
                          <div className="grid md:grid-cols-3 gap-4 text-sm">
                            <div>
                              <p className="text-muted-foreground">Chit Plan</p>
                              <p className="font-medium">{defaulter.chitPlan}</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Outstanding</p>
                              <p className="font-medium text-red-600">{defaulter.outstanding}</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Due Date</p>
                              <p className="font-medium">{defaulter.dueDate}</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Contact</p>
                              <p className="font-medium">{defaulter.phone}</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Last Contact</p>
                              <p className="font-medium">{defaulter.lastContact}</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">Send Notice</Button>
                          <Button variant="outline" size="sm">Escalate</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="legal" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Active Legal Cases</CardTitle>
              <CardDescription>Ongoing legal proceedings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {legalCases.map((legalCase) => (
                  <Card key={legalCase.id}>
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between">
                        <div className="flex gap-4 flex-1">
                          <div className="p-3 bg-purple-100 rounded-lg">
                            <Gavel className="h-6 w-6 text-purple-600" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="font-semibold">{legalCase.caseNo}</h3>
                              <Badge variant={legalCase.status === "In Progress" ? "default" : "secondary"}>
                                {legalCase.status}
                              </Badge>
                            </div>
                            <div className="grid md:grid-cols-3 gap-4 text-sm">
                              <div>
                                <p className="text-muted-foreground">Member</p>
                                <p className="font-medium">{legalCase.member}</p>
                              </div>
                              <div>
                                <p className="text-muted-foreground">Amount in Dispute</p>
                                <p className="font-medium text-red-600">{legalCase.amount}</p>
                              </div>
                              <div>
                                <p className="text-muted-foreground">Filed Date</p>
                                <p className="font-medium">{legalCase.filedDate}</p>
                              </div>
                              <div>
                                <p className="text-muted-foreground">Next Hearing</p>
                                <p className="font-medium">{legalCase.nextHearing}</p>
                              </div>
                              <div>
                                <p className="text-muted-foreground">Lawyer</p>
                                <p className="font-medium">{legalCase.lawyer}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">View Details</Button>
                          <Button variant="outline" size="sm">Documents</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settlement" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Settlement Negotiations</CardTitle>
              <CardDescription>Manage settlement proposals and agreements</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">No active settlements at the moment.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recovery Actions</CardTitle>
            <CardDescription>Available escalation steps</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="p-3 border rounded-lg flex items-center justify-between">
              <div>
                <p className="font-medium">Reminder Call/SMS</p>
                <p className="text-sm text-muted-foreground">For 1-15 days pending</p>
              </div>
              <Button variant="outline" size="sm">Execute</Button>
            </div>
            <div className="p-3 border rounded-lg flex items-center justify-between">
              <div>
                <p className="font-medium">Formal Notice</p>
                <p className="text-sm text-muted-foreground">For 16-30 days pending</p>
              </div>
              <Button variant="outline" size="sm">Execute</Button>
            </div>
            <div className="p-3 border rounded-lg flex items-center justify-between">
              <div>
                <p className="font-medium">Legal Notice</p>
                <p className="text-sm text-muted-foreground">For 30+ days pending</p>
              </div>
              <Button variant="outline" size="sm">Execute</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recovery Statistics</CardTitle>
            <CardDescription>This month's recovery performance</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Total Recovered</span>
              <span className="font-bold text-green-600">₹8,45,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Pending Recovery</span>
              <span className="font-bold text-orange-600">₹12,50,000</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Success Rate</span>
              <span className="font-bold">67.6%</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LegalRecovery;
