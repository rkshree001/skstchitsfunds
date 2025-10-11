import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, TrendingDown, AlertTriangle, Users, DollarSign, Brain } from "lucide-react";

const PredictiveAnalytics = () => {
  const predictions = [
    {
      metric: "Member Churn",
      current: "8.5%",
      predicted: "11.2%",
      trend: "up",
      confidence: "87%",
      period: "Next Quarter",
    },
    {
      metric: "Revenue Growth",
      current: "₹45L/month",
      predicted: "₹52L/month",
      trend: "up",
      confidence: "92%",
      period: "Next Quarter",
    },
    {
      metric: "Default Rate",
      current: "3.2%",
      predicted: "2.8%",
      trend: "down",
      confidence: "79%",
      period: "Next Quarter",
    },
  ];

  const memberLifetimeValue = [
    { segment: "Premium Members", avgValue: "₹2,45,000", retention: "94%", count: 234 },
    { segment: "Regular Members", avgValue: "₹1,25,000", retention: "87%", count: 1456 },
    { segment: "New Members", avgValue: "₹45,000", retention: "72%", count: 345 },
  ];

  const stats = [
    { label: "Prediction Accuracy", value: "87.5%", icon: Brain, color: "text-purple-600" },
    { label: "At-Risk Members", value: "45", icon: AlertTriangle, color: "text-orange-600" },
    { label: "Growth Forecast", value: "+15.6%", icon: TrendingUp, color: "text-green-600" },
    { label: "Revenue Prediction", value: "₹52L", icon: DollarSign, color: "text-blue-600" },
  ];

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Predictive Analytics</h1>
        <p className="text-muted-foreground">AI-powered insights and forecasting</p>
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

      <Tabs defaultValue="predictions" className="space-y-4">
        <TabsList>
          <TabsTrigger value="predictions">Predictions</TabsTrigger>
          <TabsTrigger value="ltv">Member Lifetime Value</TabsTrigger>
          <TabsTrigger value="seasonality">Seasonality Analysis</TabsTrigger>
        </TabsList>

        <TabsContent value="predictions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Key Predictions</CardTitle>
              <CardDescription>AI-powered forecasts for next quarter</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {predictions.map((pred, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-3">{pred.metric}</h3>
                          <div className="grid md:grid-cols-4 gap-4">
                            <div>
                              <p className="text-sm text-muted-foreground">Current</p>
                              <p className="text-xl font-bold">{pred.current}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Predicted</p>
                              <p className="text-xl font-bold">{pred.predicted}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Confidence</p>
                              <div className="flex items-center gap-2">
                                <p className="text-xl font-bold">{pred.confidence}</p>
                                <Badge variant="outline" className="bg-green-100 text-green-700">High</Badge>
                              </div>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Period</p>
                              <p className="text-xl font-bold">{pred.period}</p>
                            </div>
                          </div>
                        </div>
                        <div className={`p-3 rounded-lg ${pred.trend === 'up' ? 'bg-green-100' : 'bg-red-100'}`}>
                          {pred.trend === 'up' ? (
                            <TrendingUp className="h-6 w-6 text-green-600" />
                          ) : (
                            <TrendingDown className="h-6 w-6 text-red-600" />
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ltv" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Member Lifetime Value Analysis</CardTitle>
              <CardDescription>Predicted value by member segment</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {memberLifetimeValue.map((segment, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <Users className="h-8 w-8 text-blue-600" />
                          <div>
                            <h3 className="font-semibold">{segment.segment}</h3>
                            <p className="text-sm text-muted-foreground">{segment.count} members</p>
                          </div>
                        </div>
                        <div className="flex gap-8">
                          <div className="text-right">
                            <p className="text-sm text-muted-foreground">Avg. Lifetime Value</p>
                            <p className="text-2xl font-bold text-green-600">{segment.avgValue}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-muted-foreground">Retention Rate</p>
                            <p className="text-2xl font-bold">{segment.retention}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="seasonality" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Seasonality Patterns</CardTitle>
              <CardDescription>Historical trends and seasonal patterns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Festival Season (Sep-Nov)</h4>
                  <p className="text-sm text-muted-foreground">45% increase in new registrations</p>
                  <p className="text-sm text-muted-foreground">28% increase in auction participation</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Tax Season (Mar-Apr)</h4>
                  <p className="text-sm text-muted-foreground">35% increase in investments</p>
                  <p className="text-sm text-muted-foreground">22% increase in early settlements</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PredictiveAnalytics;
