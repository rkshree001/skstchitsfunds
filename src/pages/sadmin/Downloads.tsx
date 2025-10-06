import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, FileSpreadsheet, File } from "lucide-react";

const SadminDownloads = () => {
  const downloadItems = [
    {
      id: 1,
      name: "Global Financial Report",
      type: "PDF",
      date: "2024-01-15",
      size: "2.5 MB",
      icon: FileText,
    },
    {
      id: 2,
      name: "Multi-Branch Performance Data",
      type: "Excel",
      date: "2024-01-14",
      size: "1.8 MB",
      icon: FileSpreadsheet,
    },
    {
      id: 3,
      name: "Compliance Audit Report",
      type: "PDF",
      date: "2024-01-13",
      size: "3.2 MB",
      icon: FileText,
    },
    {
      id: 4,
      name: "System Configuration Backup",
      type: "ZIP",
      date: "2024-01-12",
      size: "5.1 MB",
      icon: File,
    },
    {
      id: 5,
      name: "User Analytics Dashboard",
      type: "Excel",
      date: "2024-01-11",
      size: "2.1 MB",
      icon: FileSpreadsheet,
    },
    {
      id: 6,
      name: "Monthly AI Insights Report",
      type: "PDF",
      date: "2024-01-10",
      size: "1.9 MB",
      icon: FileText,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white" data-testid="text-page-title">Super Admin Downloads</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2" data-testid="text-page-description">
            Access and download system reports, backups, and analytics
          </p>
        </div>

        <div className="grid gap-4">
          {downloadItems.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.id} className="hover:shadow-lg transition-shadow" data-testid={`card-download-${item.id}`}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg" data-testid={`text-download-name-${item.id}`}>{item.name}</CardTitle>
                      <CardDescription data-testid={`text-download-meta-${item.id}`}>
                        {item.type} • {item.size} • {item.date}
                      </CardDescription>
                    </div>
                  </div>
                  <Button data-testid={`button-download-${item.id}`}>
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SadminDownloads;
