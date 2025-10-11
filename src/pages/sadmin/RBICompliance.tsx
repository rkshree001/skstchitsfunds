import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, FileText, CheckCircle, AlertCircle, Download } from "lucide-react";

const RBICompliance = () => {
  const reports = [
    {
      id: 1,
      name: "Monthly Return - October 2025",
      type: "Monthly Return",
      dueDate: "2025-11-15",
      status: "Submitted",
      submittedDate: "2025-11-10",
    },
    {
      id: 2,
      name: "Quarterly Report - Q3 2025",
      type: "Quarterly Report",
      dueDate: "2025-11-20",
      status: "Pending",
      submittedDate: null,
    },
    {
      id: 3,
      name: "Annual Compliance Report - 2024-25",
      type: "Annual Report",
      dueDate: "2025-12-31",
      status: "In Progress",
      submittedDate: null,
    },
  ];

  const checklist = [
    { item: "Member KYC compliance", status: "complete", details: "1,456/1,456 members verified" },
    { item: "Transaction monitoring", status: "complete", details: "All transactions logged" },
    { item: "Auction documentation", status: "complete", details: "Complete records maintained" },
    { item: "Financial audits", status: "pending", details: "Q3 audit scheduled" },
    { item: "RBI notifications", status: "complete", details: "All updates implemented" },
  ];

  const stats = [
    { label: "Compliance Score", value: "96%", icon: Shield, color: "text-green-600" },
    { label: "Pending Reports", value: "3", icon: FileText, color: "text-orange-600" },
    { label: "Completed Audits", value: "12", icon: CheckCircle, color: "text-blue-600" },
    { label: "Open Issues", value: "2", icon: AlertCircle, color: "text-red-600" },
  ];

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">RBI Compliance Dashboard</h1>
          <p className="text-muted-foreground">Regulatory compliance and reporting</p>
        </div>
        <Button>
          <FileText className="h-4 w-4 mr-2" />
          Generate Report
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

      <Tabs defaultValue="reports" className="space-y-4">
        <TabsList>
          <TabsTrigger value="reports">Compliance Reports</TabsTrigger>
          <TabsTrigger value="checklist">Compliance Checklist</TabsTrigger>
          <TabsTrigger value="audit">Audit Trail</TabsTrigger>
        </TabsList>

        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Regulatory Reports</CardTitle>
              <CardDescription>RBI compliance submissions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {reports.map((report) => (
                  <Card key={report.id}>
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-semibold">{report.name}</h3>
                            <Badge variant={
                              report.status === "Submitted" ? "default" : 
                              report.status === "Pending" ? "destructive" : "secondary"
                            }>
                              {report.status}
                            </Badge>
                          </div>
                          <div className="grid md:grid-cols-3 gap-4 text-sm text-muted-foreground">
                            <div>
                              <span className="font-medium">Type:</span> {report.type}
                            </div>
                            <div>
                              <span className="font-medium">Due Date:</span> {report.dueDate}
                            </div>
                            {report.submittedDate && (
                              <div>
                                <span className="font-medium">Submitted:</span> {report.submittedDate}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          {report.status === "Submitted" ? (
                            <Button variant="outline" size="sm">
                              <Download className="h-4 w-4 mr-2" />
                              Download
                            </Button>
                          ) : (
                            <Button size="sm">Submit Report</Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="checklist" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Compliance Checklist</CardTitle>
              <CardDescription>Track regulatory requirements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {checklist.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      {item.status === "complete" ? (
                        <CheckCircle className="h-6 w-6 text-green-600" />
                      ) : (
                        <AlertCircle className="h-6 w-6 text-orange-600" />
                      )}
                      <div>
                        <h3 className="font-semibold">{item.item}</h3>
                        <p className="text-sm text-muted-foreground">{item.details}</p>
                      </div>
                    </div>
                    <Badge variant={item.status === "complete" ? "default" : "secondary"}>
                      {item.status === "complete" ? "Complete" : "Pending"}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="audit" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Audit Trail</CardTitle>
              <CardDescription>Complete audit log for compliance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 border rounded-lg">
                  <p className="text-sm font-medium">Monthly Return Submitted</p>
                  <p className="text-xs text-muted-foreground">2025-11-10 14:30 • By Admin User</p>
                </div>
                <div className="p-3 border rounded-lg">
                  <p className="text-sm font-medium">KYC Verification Completed</p>
                  <p className="text-xs text-muted-foreground">2025-11-09 11:20 • By System</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default RBICompliance;
