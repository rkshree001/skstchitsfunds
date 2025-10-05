import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Check, Clock, XCircle, Eye, Download, Plus } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const MyChits = () => {
  const navigate = useNavigate();

  const chits = [
    {
      id: 1,
      name: "1-Year Premium Chit",
      amount: 100000,
      monthly: 10000,
      duration: 12,
      paid: 8,
      status: "active",
      interest: 5,
      nextPayment: "15 Jan 2025",
      startDate: "15 May 2024",
      maturityDate: "15 May 2025",
    },
    {
      id: 2,
      name: "2-Year Gold Chit",
      amount: 200000,
      monthly: 10000,
      duration: 24,
      paid: 15,
      status: "active",
      interest: 6,
      nextPayment: "20 Jan 2025",
      startDate: "20 Aug 2023",
      maturityDate: "20 Aug 2025",
    },
    {
      id: 3,
      name: "6-Month Quick Chit",
      amount: 50000,
      monthly: 9000,
      duration: 6,
      paid: 6,
      status: "completed",
      interest: 4,
      nextPayment: "-",
      startDate: "10 Jan 2024",
      maturityDate: "10 Jul 2024",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-success";
      case "completed":
        return "bg-primary";
      case "defaulted":
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
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button onClick={() => navigate("/user/dashboard")} variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
              <h1 className="text-2xl font-bold">My Chit Plans</h1>
            </div>
            <Button variant="default">
              <Plus className="h-4 w-4 mr-2" />
              Enroll New Chit
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Summary Cards */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="shadow-soft">
            <CardHeader className="pb-2">
              <CardDescription>Total Chits</CardDescription>
              <CardTitle className="text-3xl">3</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">2 active, 1 completed</p>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader className="pb-2">
              <CardDescription>Total Investment</CardDescription>
              <CardTitle className="text-3xl">₹3.5L</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-success">Across all plans</p>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader className="pb-2">
              <CardDescription>Total Paid</CardDescription>
              <CardTitle className="text-3xl">₹2.84L</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">81% completion</p>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader className="pb-2">
              <CardDescription>Estimated Returns</CardDescription>
              <CardTitle className="text-3xl">₹16.5K</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-success">Interest earnings</p>
            </CardContent>
          </Card>
        </div>

        {/* Chit Cards */}
        <div className="space-y-6">
          {chits.map((chit) => (
            <Card key={chit.id} className="shadow-medium">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-3">
                      {chit.name}
                      <Badge variant="default" className={getStatusColor(chit.status)}>
                        {chit.status}
                      </Badge>
                    </CardTitle>
                    <CardDescription>Chit ID: CHT{chit.id.toString().padStart(6, "0")}</CardDescription>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Chit Amount</p>
                    <p className="text-2xl font-bold">₹{chit.amount.toLocaleString()}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Payment Progress */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Payment Progress</span>
                    <span className="text-sm text-muted-foreground">
                      {chit.paid}/{chit.duration} months ({Math.round((chit.paid / chit.duration) * 100)}%)
                    </span>
                  </div>
                  <Progress value={(chit.paid / chit.duration) * 100} className="h-3" />
                </div>

                {/* Chit Details Grid */}
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Monthly Premium</p>
                    <p className="font-semibold">₹{chit.monthly.toLocaleString()}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Interest Rate</p>
                    <p className="font-semibold">{chit.interest}% p.a.</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Total Paid</p>
                    <p className="font-semibold text-success">₹{(chit.monthly * chit.paid).toLocaleString()}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Next Payment</p>
                    <p className="font-semibold text-warning">{chit.nextPayment}</p>
                  </div>
                </div>

                {/* Timeline */}
                <div className="grid md:grid-cols-3 gap-4 pt-4 border-t">
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-success" />
                    <div>
                      <p className="text-xs text-muted-foreground">Started</p>
                      <p className="text-sm font-medium">{chit.startDate}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {chit.status === "active" ? (
                      <Clock className="h-5 w-5 text-warning" />
                    ) : chit.status === "completed" ? (
                      <Check className="h-5 w-5 text-success" />
                    ) : (
                      <XCircle className="h-5 w-5 text-destructive" />
                    )}
                    <div>
                      <p className="text-xs text-muted-foreground">Status</p>
                      <p className="text-sm font-medium capitalize">{chit.status}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Maturity</p>
                      <p className="text-sm font-medium">{chit.maturityDate}</p>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download Certificate
                  </Button>
                  {chit.status === "active" && (
                    <Button variant="default" size="sm">
                      Pay Now
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyChits;
