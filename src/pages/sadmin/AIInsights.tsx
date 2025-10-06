import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Brain, TrendingUp, AlertTriangle, CheckCircle2 } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const AIInsights = () => {
  const navigate = useNavigate();

  const predictionData = [
    { month: "Jan", actual: 4500000, predicted: 4650000 },
    { month: "Feb", actual: 4800000, predicted: 4950000 },
    { month: "Mar", actual: null, predicted: 5200000 },
    { month: "Apr", actual: null, predicted: 5400000 },
  ];

  const insights = [
    {
      id: 1,
      type: "success",
      title: "Strong Growth Trajectory",
      description: "Zone C showing 15% month-over-month growth. Consider expansion opportunities.",
      confidence: 92,
    },
    {
      id: 2,
      type: "warning",
      title: "Default Risk Alert",
      description: "12 users showing payment delay patterns. Proactive intervention recommended.",
      confidence: 87,
    },
    {
      id: 3,
      type: "info",
      title: "Seasonal Trend Detected",
      description: "Collection rates typically increase by 8% in Q1. Plan resources accordingly.",
      confidence: 94,
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "success":
        return <CheckCircle2 className="h-5 w-5 text-success" />;
      case "warning":
        return <AlertTriangle className="h-5 w-5 text-warning" />;
      default:
        return <Brain className="h-5 w-5 text-primary" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button onClick={() => navigate("/sadmin/dashboard")} variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <h1 className="text-2xl font-bold">AI Insights Dashboard</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Predictive Analytics
            </CardTitle>
            <CardDescription>AI-powered collection forecasting</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="p-4 bg-primary/10 rounded-lg">
                  <p className="text-sm text-muted-foreground">Expected Next-Month Collection</p>
                  <p className="text-3xl font-bold text-primary">₹1.2 Cr</p>
                  <p className="text-sm text-success mt-2">+8.5% from current month</p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground">Confidence Level</p>
                  <p className="text-3xl font-bold">89%</p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground">Risk Factor</p>
                  <p className="text-xl font-bold text-warning">Medium</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    12 potential defaulters identified
                  </p>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={predictionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="actual" stroke="hsl(var(--primary))" strokeWidth={2} name="Actual" />
                  <Line
                    type="monotone"
                    dataKey="predicted"
                    stroke="hsl(var(--success))"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    name="AI Predicted"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5" />
              AI-Detected Insights
            </CardTitle>
            <CardDescription>Automated anomaly detection and recommendations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {insights.map((insight) => (
                <div key={insight.id} className="p-4 border rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="mt-1">{getIcon(insight.type)}</div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-semibold">{insight.title}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{insight.description}</p>
                        </div>
                        <Badge variant="outline">
                          {insight.confidence}% confidence
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AIInsights;
