import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { TrendingUp, Target, DollarSign, Percent } from "lucide-react";

const predictionData = [
  { month: "Jan", actual: 2000, predicted: 2000, roi: 0 },
  { month: "Feb", actual: 4000, predicted: 4100, roi: 2.5 },
  { month: "Mar", actual: 6000, predicted: 6300, roi: 5 },
  { month: "Apr", actual: null, predicted: 8600, roi: 7.5 },
  { month: "May", actual: null, predicted: 11000, roi: 10 },
  { month: "Jun", actual: null, predicted: 13500, roi: 12.5 },
];

const scenarios = [
  {
    name: "Conservative",
    estimatedROI: "8-10%",
    finalAmount: "₹52,000",
    risk: "Low",
    color: "text-green-600"
  },
  {
    name: "Moderate",
    estimatedROI: "10-12%",
    finalAmount: "₹55,000",
    risk: "Medium",
    color: "text-blue-600"
  },
  {
    name: "Optimistic",
    estimatedROI: "12-15%",
    finalAmount: "₹58,000",
    risk: "Medium-High",
    color: "text-purple-600"
  }
];

export default function ROIPrediction() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">ROI Prediction & Analytics</h1>
        <p className="text-muted-foreground">Predictive analysis of your chit fund returns</p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Current Investment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <DollarSign className="h-4 w-4 text-muted-foreground" />
              <p className="text-2xl font-bold">₹6,000</p>
            </div>
            <p className="text-xs text-muted-foreground mt-1">3 months completed</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Predicted ROI</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Percent className="h-4 w-4 text-muted-foreground" />
              <p className="text-2xl font-bold text-green-600">10-12%</p>
            </div>
            <p className="text-xs text-muted-foreground mt-1">By end of term</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Projected Amount</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Target className="h-4 w-4 text-muted-foreground" />
              <p className="text-2xl font-bold">₹55,000</p>
            </div>
            <p className="text-xs text-muted-foreground mt-1">Expected in 9 months</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Investment Growth Prediction</CardTitle>
          <CardDescription>Actual vs Predicted returns over time</CardDescription>
        </CardHeader>
        <CardContent>
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
                stroke="hsl(var(--chart-2))" 
                strokeWidth={2} 
                strokeDasharray="5 5" 
                name="Predicted" 
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>ROI Scenarios</CardTitle>
          <CardDescription>Different return scenarios based on market conditions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {scenarios.map((scenario, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-lg">{scenario.name} Scenario</h3>
                  <TrendingUp className={`h-5 w-5 ${scenario.color}`} />
                </div>
                <div className="grid grid-cols-3 gap-4 mt-3">
                  <div>
                    <p className="text-sm text-muted-foreground">Estimated ROI</p>
                    <p className={`font-semibold ${scenario.color}`}>{scenario.estimatedROI}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Final Amount</p>
                    <p className="font-semibold">{scenario.finalAmount}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Risk Level</p>
                    <p className="font-semibold">{scenario.risk}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
