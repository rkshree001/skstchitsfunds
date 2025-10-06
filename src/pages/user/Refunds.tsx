import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, AlertCircle, CheckCircle2, Clock } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const Refunds = () => {
  const navigate = useNavigate();

  const refundRequests = [
    {
      id: "REF001",
      chitId: "CHT000001",
      amount: 10000,
      reason: "Early withdrawal",
      penalty: 500,
      netAmount: 9500,
      status: "approved",
      requestDate: "2024-12-01",
      processedDate: "2024-12-10",
    },
    {
      id: "REF002",
      chitId: "CHT000002",
      amount: 15000,
      reason: "Financial emergency",
      penalty: 750,
      netAmount: 14250,
      status: "pending",
      requestDate: "2024-12-15",
      processedDate: null,
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return <Badge className="bg-success">Approved</Badge>;
      case "pending":
        return <Badge className="bg-warning">Pending</Badge>;
      case "rejected":
        return <Badge className="bg-destructive">Rejected</Badge>;
      default:
        return <Badge>Unknown</Badge>;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved":
        return <CheckCircle2 className="h-5 w-5 text-success" />;
      case "pending":
        return <Clock className="h-5 w-5 text-warning" />;
      case "rejected":
        return <AlertCircle className="h-5 w-5 text-destructive" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button onClick={() => navigate("/user/dashboard")} variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
              <h1 className="text-2xl font-bold">Refunds & Penalties</h1>
            </div>
            <Button variant="default">Request Refund</Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 space-y-8">
        <Card className="border-warning">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5" />
              Penalty Information
            </CardTitle>
            <CardDescription>Early withdrawal charges and late payment fees</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">Early Withdrawal Fee</p>
                <p className="text-xl font-bold">5% of amount</p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">Late Payment Penalty</p>
                <p className="text-xl font-bold">2% per month</p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">Processing Time</p>
                <p className="text-xl font-bold">7-10 days</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Refund Requests</h2>
          {refundRequests.map((request) => (
            <Card key={request.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-3">
                      Request #{request.id}
                      {getStatusBadge(request.status)}
                    </CardTitle>
                    <CardDescription>Chit ID: {request.chitId}</CardDescription>
                  </div>
                  {getStatusIcon(request.status)}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Requested Amount</span>
                      <span className="font-semibold">₹{request.amount.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Penalty</span>
                      <span className="font-semibold text-destructive">-₹{request.penalty.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between pt-2 border-t">
                      <span className="text-sm font-medium">Net Amount</span>
                      <span className="font-bold text-success">₹{request.netAmount.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Reason</span>
                      <span className="text-sm">{request.reason}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Request Date</span>
                      <span className="text-sm">{request.requestDate}</span>
                    </div>
                    {request.processedDate && (
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Processed Date</span>
                        <span className="text-sm">{request.processedDate}</span>
                      </div>
                    )}
                  </div>
                </div>
                {request.status === "pending" && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Processing</span>
                      <span>60%</span>
                    </div>
                    <Progress value={60} />
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Refunds;
