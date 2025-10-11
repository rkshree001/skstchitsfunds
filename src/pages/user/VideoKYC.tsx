import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Video, Camera, CheckCircle, Clock, AlertCircle, FileText, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const VideoKYC = () => {
  const { toast } = useToast();
  const [kycStatus] = useState("pending");

  const kycSteps = [
    { step: 1, title: "Document Verification", status: "completed", icon: FileText },
    { step: 2, title: "Live Video Call", status: "pending", icon: Video },
    { step: 3, title: "Face Matching", status: "pending", icon: Camera },
    { step: 4, title: "Final Approval", status: "pending", icon: CheckCircle },
  ];

  const requirements = [
    "Valid Government ID (Aadhaar/PAN/Passport)",
    "Good lighting and stable internet connection",
    "Quiet environment for video call",
    "Original documents ready for verification",
  ];

  const handleStartKYC = () => {
    toast({
      title: "Video KYC Session Starting",
      description: "Please ensure you have all required documents ready.",
    });
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Video KYC Verification</h1>
        <p className="text-muted-foreground">Complete your identity verification from the comfort of your home</p>
      </div>

      <Card className="border-blue-200 bg-blue-50 dark:bg-blue-950/20">
        <CardContent className="pt-6">
          <div className="flex items-center gap-3">
            <Shield className="h-8 w-8 text-blue-600" />
            <div>
              <h3 className="font-semibold">RBI Compliant Video KYC</h3>
              <p className="text-sm text-muted-foreground">100% secure and encrypted video verification process</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-4 gap-4">
        {kycSteps.map((item) => {
          const Icon = item.icon;
          return (
            <Card key={item.step} className={item.status === 'completed' ? 'border-green-200 bg-green-50 dark:bg-green-950/20' : ''}>
              <CardContent className="pt-6 text-center">
                <div className={`mx-auto w-12 h-12 rounded-full flex items-center justify-center mb-3 ${
                  item.status === 'completed' ? 'bg-green-600' : 'bg-muted'
                }`}>
                  <Icon className={`h-6 w-6 ${item.status === 'completed' ? 'text-white' : 'text-muted-foreground'}`} />
                </div>
                <p className="text-sm font-medium mb-1">Step {item.step}</p>
                <p className="text-xs text-muted-foreground mb-2">{item.title}</p>
                {item.status === 'completed' ? (
                  <Badge className="bg-green-600">Completed</Badge>
                ) : (
                  <Badge variant="outline">Pending</Badge>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Requirements Checklist</CardTitle>
            <CardDescription>Ensure you have these ready before starting</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {requirements.map((req, index) => (
                <div key={index} className="flex items-center gap-3 p-3 border rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <p className="text-sm">{req}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Current Status</CardTitle>
            <CardDescription>Your KYC verification progress</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <Clock className="h-5 w-5 text-yellow-600" />
                <p className="font-semibold">Documents Under Review</p>
              </div>
              <p className="text-sm text-muted-foreground">Your uploaded documents are being verified. Video KYC will be available once approved.</p>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Overall Progress</span>
                <span className="font-medium">25%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '25%' }}></div>
              </div>
            </div>

            <Button className="w-full" disabled={kycStatus === "pending"}>
              <Video className="h-4 w-4 mr-2" />
              {kycStatus === "pending" ? "Waiting for Document Approval" : "Start Video KYC"}
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>How Video KYC Works</CardTitle>
          <CardDescription>Simple 4-step process</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">1</div>
                <div>
                  <h4 className="font-semibold mb-1">Schedule Video Call</h4>
                  <p className="text-sm text-muted-foreground">Choose a convenient time slot for your video verification</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">2</div>
                <div>
                  <h4 className="font-semibold mb-1">Join Video Session</h4>
                  <p className="text-sm text-muted-foreground">Connect with our verification officer via secure video call</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">3</div>
                <div>
                  <h4 className="font-semibold mb-1">Show Documents</h4>
                  <p className="text-sm text-muted-foreground">Display your original documents to the camera for verification</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">4</div>
                <div>
                  <h4 className="font-semibold mb-1">Instant Approval</h4>
                  <p className="text-sm text-muted-foreground">Get verified within minutes and start investing</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <h4 className="font-semibold mb-2">Important Guidelines</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Video session duration: 5-10 minutes</li>
                <li>• Face must be clearly visible throughout the call</li>
                <li>• No screenshots or screen recordings allowed</li>
                <li>• Session is recorded for compliance purposes</li>
                <li>• Biometric data is encrypted and securely stored</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VideoKYC;
