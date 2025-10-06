import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, TrendingUp } from "lucide-react";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const Analytics = () => {
  const navigate = useNavigate();

  const roiData = [
    { month: "Jan", roi: 4.2 },
    { month: "Feb", roi: 4.5 },
    { month: "Mar", roi: 4.8 },
    { month: "Apr", roi: 5.1 },
    { month: "May", roi: 5.4 },
    { month: "Jun", roi: 5.7 },
  ];

  const payoutData = [
    { name: "Interest", value: 12500 },
    { name: "Dividends", value: 4000 },
    { name: "Bonus", value: 1500 },
  ];

  const projectionData = [
    { month: "Jul", actual: 5.7, predicted: 5.9 },
    { month: "Aug", actual: null, predicted: 6.2 },
    { month: "Sep", actual: null, predicted: 6.5 },
    { month: "Oct", actual: null, predicted: 6.8 },
  ];

  const COLORS = ["hsl(var(--primary))", "hsl(var(--secondary))", "hsl(var(--success))"];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button onClick={() => navigate("/user/dashboard")} variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <h1 className="text-2xl font-bold">Investment Analytics</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 space-y-8">
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>ROI Trend</CardTitle>
              <CardDescription>Return on Investment over time</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={roiData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="roi" stroke="hsl(var(--primary))" strokeWidth={2} name="ROI %" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Payout Breakdown</CardTitle>
              <CardDescription>Distribution of returns</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={payoutData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={(entry) => `${entry.name}: ₹${entry.value}`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {payoutData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              AI Prediction - Next Auction Bid
            </CardTitle>
            <CardDescription>Estimated bid range for upcoming auction</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="p-4 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground">Predicted Bid Range</p>
                  <p className="text-2xl font-bold">₹7,500 - ₹9,200</p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground">Confidence</p>
                  <p className="text-2xl font-bold text-success">87%</p>
                </div>
                <div className="p-4 bg-primary/10 rounded-lg">
                  <p className="text-sm font-medium">AI Recommendation</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Based on historical trends, consider bidding around ₹8,000 for optimal returns.
                  </p>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={projectionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="actual" stroke="hsl(var(--primary))" strokeWidth={2} name="Actual ROI" />
                  <Line
                    type="monotone"
                    dataKey="predicted"
                    stroke="hsl(var(--secondary))"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    name="Predicted ROI"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;
