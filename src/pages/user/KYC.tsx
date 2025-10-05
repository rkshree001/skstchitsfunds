import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Upload, CheckCircle, Clock, XCircle, FileText, Camera, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const KYC = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const kycStatus = {
    overall: "pending",
    documents: [
      { name: "PAN Card", status: "approved", uploadedOn: "10 Jun 2024" },
      { name: "Aadhaar Card", status: "pending", uploadedOn: "12 Jun 2024" },
      { name: "Photo", status: "rejected", uploadedOn: "09 Jun 2024", reason: "Image quality too low" },
      { name: "Address Proof", status: "not-uploaded", uploadedOn: "-" },
    ],
  };

  const handleUpload = (docType: string) => {
    toast({
      title: "Document Uploaded",
      description: `Your ${docType} has been uploaded successfully and is pending verification.`,
    });
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved":
        return <CheckCircle className="h-4 w-4 text-success" />;
      case "pending":
        return <Clock className="h-4 w-4 text-warning" />;
      case "rejected":
        return <XCircle className="h-4 w-4 text-destructive" />;
      default:
        return <Upload className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-success";
      case "pending":
        return "bg-warning";
      case "rejected":
        return "bg-destructive";
      default:
        return "bg-muted";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button onClick={() => navigate("/user/dashboard")} variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <h1 className="text-2xl font-bold">KYC Verification</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* KYC Status Banner */}
        <Card className="shadow-medium mb-8 border-2 border-warning/20">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-full bg-warning/10 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-warning" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">KYC Verification Status</h3>
                  <p className="text-sm text-muted-foreground">Complete your verification to unlock full features</p>
                </div>
              </div>
              <Badge variant="default" className={getStatusColor(kycStatus.overall)}>
                {kycStatus.overall}
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Document Upload Cards */}
        <div className="space-y-6">
          {kycStatus.documents.map((doc, idx) => (
            <Card key={idx} className="shadow-medium">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {getStatusIcon(doc.status)}
                    <div>
                      <CardTitle className="text-lg">{doc.name}</CardTitle>
                      <CardDescription>
                        {doc.status !== "not-uploaded" ? `Uploaded on: ${doc.uploadedOn}` : "Required for verification"}
                      </CardDescription>
                    </div>
                  </div>
                  <Badge variant="outline" className={getStatusColor(doc.status)}>
                    {doc.status === "not-uploaded" ? "Not Uploaded" : doc.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                {doc.status === "rejected" && (
                  <div className="mb-4 p-3 rounded-lg bg-destructive/10 border border-destructive/20">
                    <p className="text-sm text-destructive">
                      <strong>Rejection Reason:</strong> {doc.reason}
                    </p>
                  </div>
                )}

                {doc.status !== "approved" && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor={`file-${idx}`} className="text-sm font-medium">
                        Upload Document
                      </Label>
                      <div className="mt-2 flex items-center gap-4">
                        <Input id={`file-${idx}`} type="file" accept="image/*,.pdf" className="flex-1" />
                        <Button onClick={() => handleUpload(doc.name)} variant="default">
                          <Upload className="h-4 w-4 mr-2" />
                          Upload
                        </Button>
                      </div>
                    </div>

                    {doc.name === "Photo" && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Camera className="h-4 w-4" />
                        <span>Use webcam to capture photo (optional)</span>
                      </div>
                    )}

                    <div className="text-xs text-muted-foreground space-y-1">
                      <p>• Accepted formats: JPG, PNG, PDF</p>
                      <p>• Maximum file size: 5 MB</p>
                      <p>• Document should be clear and readable</p>
                    </div>
                  </div>
                )}

                {doc.status === "approved" && (
                  <div className="flex items-center gap-2 text-success">
                    <CheckCircle className="h-5 w-5" />
                    <span className="text-sm font-medium">Document verified successfully</span>
                  </div>
                )}

                {doc.status === "pending" && (
                  <div className="flex items-center gap-2 text-warning">
                    <Clock className="h-5 w-5" />
                    <span className="text-sm font-medium">Under review - Typically takes 24-48 hours</span>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Guidelines */}
        <Card className="shadow-medium mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              KYC Guidelines
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <p><strong>PAN Card:</strong> Upload a clear photo or scan of your PAN card</p>
            <p><strong>Aadhaar Card:</strong> Both front and back sides required (can be uploaded as separate files)</p>
            <p><strong>Photo:</strong> Recent passport-size photograph with plain background</p>
            <p><strong>Address Proof:</strong> Utility bill, bank statement, or rental agreement (not older than 3 months)</p>
            <p className="pt-4 border-t">
              <strong>Note:</strong> All documents are securely stored and used only for verification purposes.
              Your data is protected as per RBI guidelines.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default KYC;
