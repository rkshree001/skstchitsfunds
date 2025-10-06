import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Download, FileText, Receipt, Award } from "lucide-react";

const Downloads = () => {
  const navigate = useNavigate();

  const documents = [
    {
      id: 1,
      name: "Payment Receipt - Dec 2024",
      type: "Receipt",
      icon: Receipt,
      date: "2024-12-15",
      size: "124 KB",
    },
    {
      id: 2,
      name: "Chit Agreement - CHT000001",
      type: "Agreement",
      icon: FileText,
      date: "2024-05-15",
      size: "256 KB",
    },
    {
      id: 3,
      name: "Certificate - 1 Year Completion",
      type: "Certificate",
      icon: Award,
      date: "2024-07-10",
      size: "89 KB",
    },
    {
      id: 4,
      name: "Annual Statement 2024",
      type: "Statement",
      icon: FileText,
      date: "2024-12-31",
      size: "512 KB",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button onClick={() => navigate("/user/dashboard")} variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <h1 className="text-2xl font-bold">Download Center</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-4">
          {documents.map((doc) => (
            <Card key={doc.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <doc.icon className="h-6 w-6 text-primary" />
                    <div>
                      <CardTitle className="text-lg">{doc.name}</CardTitle>
                      <CardDescription>
                        {doc.type} • {doc.date} • {doc.size}
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

export default Downloads;
