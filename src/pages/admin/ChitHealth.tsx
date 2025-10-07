import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Target, TrendingUp, AlertCircle, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const ChitHealth = () => {
  const navigate = useNavigate();

  const chits = [
    {
      id: "CHT000001",
      name: "1-Year Premium Chit",
      healthScore: 92,
      status: "excellent",
      metrics: {
        participationRate: 95,
        paymentTimeliness: 98,
        defaultRate: 2,
        completionProgress: 50
      },
      issues: []
    },
    {
      id: "CHT000002",
      name: "2-Year Gold Chit",
      healthScore: 85,
      status: "good",
      metrics: {
        participationRate: 88,
        paymentTimeliness: 90,
        defaultRate: 5,
        completionProgress: 33
      },
      issues: ["3 pending payments"]
    },
    {
      id: "CHT000003",
      name: "6-Month Express Chit",
      healthScore: 78,
      status: "average",
      metrics: {
        participationRate: 82,
        paymentTimeliness: 85,
        defaultRate: 8,
        completionProgress: 67
      },
      issues: ["2 defaults", "4 late payments"]
    },
    {
      id: "CHT000004",
      name: "3-Year Platinum Chit",
      healthScore: 95,
      status: "excellent",
      metrics: {
        participationRate: 97,
        paymentTimeliness: 99,
        defaultRate: 1,
        completionProgress: 25
      },
      issues: []
    },
    {
      id: "CHT000005",
      name: "Business Growth Chit",
      healthScore: 65,
      status: "poor",
      metrics: {
        participationRate: 70,
        paymentTimeliness: 75,
        defaultRate: 15,
        completionProgress: 40
      },
      issues: ["8 defaults", "High default rate", "5 late payments"]
    }
  ];

  const getHealthColor = (score: number) => {
    if (score >= 90) return "text-green-500";
    if (score >= 75) return "text-blue-500";
    if (score >= 60) return "text-yellow-500";
    return "text-red-500";
  };

  const getStatusBadge = (status: string) => {
    const variants: Record<string, string> = {
      excellent: "bg-green-500/10 text-green-500 border-green-500",
      good: "bg-blue-500/10 text-blue-500 border-blue-500",
      average: "bg-yellow-500/10 text-yellow-500 border-yellow-500",
      poor: "bg-red-500/10 text-red-500 border-red-500"
    };
    return variants[status] || "";
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button onClick={() => navigate("/admin/home")} variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <h1 className="text-2xl font-bold">Chit Health Score Dashboard</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 space-y-6">
        {/* Summary Cards */}
        <div className="grid md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Average Health Score</CardDescription>
              <CardTitle className="text-3xl text-blue-500">83</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Excellent Chits</CardDescription>
              <CardTitle className="text-3xl text-green-500">2</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Need Attention</CardDescription>
              <CardTitle className="text-3xl text-yellow-500">1</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Critical</CardDescription>
              <CardTitle className="text-3xl text-red-500">0</CardTitle>
            </CardHeader>
          </Card>
        </div>

        {/* Chit Health Cards */}
        <div className="space-y-4">
          {chits.map((chit) => (
            <Card key={chit.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="h-5 w-5" />
                      {chit.name}
                    </CardTitle>
                    <CardDescription className="mt-1">{chit.id}</CardDescription>
                  </div>
                  <div className="text-right">
                    <div className={`text-4xl font-bold ${getHealthColor(chit.healthScore)}`}>
                      {chit.healthScore}
                    </div>
                    <Badge className={`mt-1 ${getStatusBadge(chit.status)}`}>
                      {chit.status}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Performance Metrics */}
                <div className="grid md:grid-cols-4 gap-4">
                  <div>
                    <div className="text-sm text-muted-foreground mb-2">Participation Rate</div>
                    <div className="space-y-1">
                      <Progress value={chit.metrics.participationRate} className="h-2" />
                      <div className="text-sm font-medium">{chit.metrics.participationRate}%</div>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-2">Payment Timeliness</div>
                    <div className="space-y-1">
                      <Progress value={chit.metrics.paymentTimeliness} className="h-2" />
                      <div className="text-sm font-medium">{chit.metrics.paymentTimeliness}%</div>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-2">Default Rate</div>
                    <div className="space-y-1">
                      <Progress value={chit.metrics.defaultRate} className="h-2" />
                      <div className="text-sm font-medium text-red-500">{chit.metrics.defaultRate}%</div>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-2">Completion Progress</div>
                    <div className="space-y-1">
                      <Progress value={chit.metrics.completionProgress} className="h-2" />
                      <div className="text-sm font-medium">{chit.metrics.completionProgress}%</div>
                    </div>
                  </div>
                </div>

                {/* Issues */}
                {chit.issues.length > 0 ? (
                  <div className="flex items-start gap-2 p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                    <AlertCircle className="h-5 w-5 text-yellow-500 mt-0.5" />
                    <div>
                      <div className="font-medium text-sm">Issues Detected:</div>
                      <div className="text-sm text-muted-foreground mt-1">
                        {chit.issues.join(", ")}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <div className="font-medium text-sm">No issues detected - All metrics healthy</div>
                  </div>
                )}

                <div className="flex gap-2">
                  <Button size="sm" variant="outline">View Details</Button>
                  <Button size="sm" variant="outline">Performance Report</Button>
                  {chit.issues.length > 0 && (
                    <Button size="sm">Take Action</Button>
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

export default ChitHealth;
