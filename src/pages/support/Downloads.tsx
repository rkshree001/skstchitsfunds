import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, FileSpreadsheet, File } from "lucide-react";

const SupportDownloads = () => {
  const downloadItems = [
    {
      id: 1,
      name: "Support Ticket Templates",
      type: "PDF",
      date: "2024-01-15",
      size: "450 KB",
      icon: FileText,
    },
    {
      id: 2,
      name: "User Onboarding Checklist",
      type: "Excel",
      date: "2024-01-14",
      size: "320 KB",
      icon: FileSpreadsheet,
    },
    {
      id: 3,
      name: "Common Issues Resolution Guide",
      type: "PDF",
      date: "2024-01-13",
      size: "1.2 MB",
      icon: FileText,
    },
    {
      id: 4,
      name: "SMS/Email Templates Package",
      type: "ZIP",
      date: "2024-01-12",
      size: "850 KB",
      icon: File,
    },
    {
      id: 5,
      name: "Monthly Support Metrics",
      type: "Excel",
      date: "2024-01-11",
      size: "680 KB",
      icon: FileSpreadsheet,
    },
    {
      id: 6,
      name: "Customer FAQ Database",
      type: "PDF",
      date: "2024-01-10",
      size: "2.1 MB",
      icon: FileText,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white" data-testid="text-page-title">Support Downloads</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2" data-testid="text-page-description">
            Download support resources, templates, and documentation
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

export default SupportDownloads;
