import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Download, FileText, CheckCircle2, AlertCircle } from "lucide-react";

const ComplianceReports = () => {
  const navigate = useNavigate();

  const reports = [
    {
      id: 1,
      name: "Annual Financial Compliance Report 2024",
      type: "Financial",
      status: "completed",
      date: "2024-12-31",
      size: "4.5 MB",
    },
    {
      id: 2,
      name: "RBI Compliance Report - Q4 2024",
      type: "Regulatory",
      status: "completed",
      date: "2024-12-31",
      size: "2.8 MB",
    },
    {
      id: 3,
      name: "Tax Audit Report 2024",
      type: "Tax",
      status: "pending",
      date: "2025-01-15",
      size: "3.2 MB",
    },
    {
      id: 4,
      name: "KYC Compliance Report - Dec 2024",
      type: "KYC",
      status: "completed",
      date: "2024-12-31",
      size: "1.9 MB",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button onClick={() => navigate("/sadmin/dashboard")} variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <h1 className="text-2xl font-bold">Financial Compliance Reports</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Compliance Overview</CardTitle>
            <CardDescription>Regulatory and financial compliance status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-success/10 rounded-lg border border-success">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="h-5 w-5 text-success" />
                  <p className="font-semibold">Compliant</p>
                </div>
                <p className="text-2xl font-bold">12</p>
                <p className="text-sm text-muted-foreground">Reports filed</p>
              </div>
              <div className="p-4 bg-warning/10 rounded-lg border border-warning">
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle className="h-5 w-5 text-warning" />
                  <p className="font-semibold">Pending</p>
                </div>
                <p className="text-2xl font-bold">2</p>
                <p className="text-sm text-muted-foreground">Awaiting submission</p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="h-5 w-5" />
                  <p className="font-semibold">Next Due</p>
                </div>
                <p className="text-2xl font-bold">Jan 15</p>
                <p className="text-sm text-muted-foreground">Tax audit report</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4">
          {reports.map((report) => (
            <Card key={report.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FileText className="h-6 w-6 text-primary" />
                    <div>
                      <CardTitle className="text-lg flex items-center gap-2">
                        {report.name}
                        {report.status === "completed" ? (
                          <Badge className="bg-success">Completed</Badge>
                        ) : (
                          <Badge className="bg-warning">Pending</Badge>
                        )}
                      </CardTitle>
                      <CardDescription>
                        {report.type} • {report.date} • {report.size}
                      </CardDescription>
                    </div>
                  </div>
                  {report.status === "completed" && (
                    <Button variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </Button>
                  )}
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComplianceReports;
