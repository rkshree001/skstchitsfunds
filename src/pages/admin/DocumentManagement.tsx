import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Download, Upload, Clock, CheckCircle, Search, Folder } from "lucide-react";

const DocumentManagement = () => {
  const documents = [
    {
      id: 1,
      name: "Member Agreement - Rajesh Kumar",
      type: "Agreement",
      category: "Member Documents",
      uploadedDate: "2025-11-10",
      expiryDate: "2026-11-10",
      status: "Active",
      size: "2.4 MB",
    },
    {
      id: 2,
      name: "Compliance Report - Q3 2025",
      type: "Report",
      category: "Compliance",
      uploadedDate: "2025-10-05",
      expiryDate: "N/A",
      status: "Active",
      size: "5.1 MB",
    },
    {
      id: 3,
      name: "Policy Document - Chit Fund Operations",
      type: "Policy",
      category: "Internal",
      uploadedDate: "2025-09-15",
      expiryDate: "2025-11-30",
      status: "Expiring Soon",
      size: "1.8 MB",
    },
  ];

  const stats = [
    { label: "Total Documents", value: "1,234", icon: FileText, color: "text-blue-600" },
    { label: "Pending Approval", value: "23", icon: Clock, color: "text-orange-600" },
    { label: "Expiring Soon", value: "8", icon: Clock, color: "text-red-600" },
    { label: "Active Documents", value: "1,203", icon: CheckCircle, color: "text-green-600" },
  ];

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Document Management</h1>
          <p className="text-muted-foreground">Centralized repository for all documents</p>
        </div>
        <Button>
          <Upload className="h-4 w-4 mr-2" />
          Upload Document
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

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Documents</TabsTrigger>
          <TabsTrigger value="pending">Pending Approval</TabsTrigger>
          <TabsTrigger value="expiring">Expiring Soon</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Document Library</CardTitle>
                  <CardDescription>All uploaded documents</CardDescription>
                </div>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search documents..." className="pl-10 w-64" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {documents.map((doc) => (
                  <div key={doc.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-blue-100 rounded-lg">
                        <FileText className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{doc.name}</h3>
                        <div className="flex gap-4 text-sm text-muted-foreground">
                          <span>{doc.category}</span>
                          <span>•</span>
                          <span>{doc.size}</span>
                          <span>•</span>
                          <span>Uploaded: {doc.uploadedDate}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant={doc.status === "Active" ? "default" : "destructive"}>
                        {doc.status}
                      </Badge>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pending" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Pending Approval</CardTitle>
              <CardDescription>Documents awaiting review</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">No pending documents</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="expiring" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Expiring Documents</CardTitle>
              <CardDescription>Documents expiring within 30 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-4 border border-red-200 bg-red-50 dark:bg-red-950/20 rounded-lg">
                  <h3 className="font-semibold">Policy Document - Chit Fund Operations</h3>
                  <p className="text-sm text-red-600">Expires on: 2025-11-30</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Document Categories</CardTitle>
            <CardDescription>Organize by category</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                <Folder className="h-5 w-5 text-blue-600" />
                <span className="font-medium">Member Documents</span>
              </div>
              <Badge>456</Badge>
            </div>
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                <Folder className="h-5 w-5 text-green-600" />
                <span className="font-medium">Compliance</span>
              </div>
              <Badge>234</Badge>
            </div>
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                <Folder className="h-5 w-5 text-purple-600" />
                <span className="font-medium">Internal Policies</span>
              </div>
              <Badge>89</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Storage Usage</CardTitle>
            <CardDescription>Document storage statistics</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm">Used Storage</span>
                <span className="text-sm font-medium">45.2 GB / 100 GB</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '45.2%' }}></div>
              </div>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">This Month Upload</span>
              <span className="font-bold">3.8 GB</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DocumentManagement;
