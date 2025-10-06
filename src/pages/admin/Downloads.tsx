import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Download, FileText, BarChart3, Users } from "lucide-react";

const AdminDownloads = () => {
  const navigate = useNavigate();

  const reports = [
    {
      id: 1,
      name: "Monthly Collection Report - Dec 2024",
      type: "Collection Report",
      icon: BarChart3,
      date: "2024-12-31",
      size: "1.2 MB",
    },
    {
      id: 2,
      name: "User Activity Report - Dec 2024",
      type: "Activity Report",
      icon: Users,
      date: "2024-12-31",
      size: "856 KB",
    },
    {
      id: 3,
      name: "Branch Performance Report - Q4 2024",
      type: "Performance Report",
      icon: BarChart3,
      date: "2024-12-31",
      size: "2.1 MB",
    },
    {
      id: 4,
      name: "Financial Summary - 2024",
      type: "Financial Report",
      icon: FileText,
      date: "2024-12-31",
      size: "3.4 MB",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button onClick={() => navigate("/admin/dashboard")} variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <h1 className="text-2xl font-bold">Download Center</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-4">
          {reports.map((report) => (
            <Card key={report.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <report.icon className="h-6 w-6 text-primary" />
                    <div>
                      <CardTitle className="text-lg">{report.name}</CardTitle>
                      <CardDescription>
                        {report.type} • {report.date} • {report.size}
                      </CardDescription>
                    </div>
                  </div>
                  <Button variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDownloads;
