import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, TrendingUp, Shield, Zap, MessageSquare } from "lucide-react";
import { useState } from "react";

const recommendations = [
  {
    id: 1,
    title: "Diversify Your Portfolio",
    description: "Based on your current investments, we recommend joining a short-term chit (6-12 months) to balance your portfolio.",
    type: "Investment",
    priority: "High",
    icon: TrendingUp
  },
  {
    id: 2,
    title: "Optimize Payment Schedule",
    description: "Your payment pattern shows you prefer early-month payments. Consider our 1st-of-month chit plans for better cash flow.",
    type: "Strategy",
    priority: "Medium",
    icon: Zap
  },
  {
    id: 3,
    title: "Risk Mitigation",
    description: "You're eligible for insurance-backed chit plans. This can protect your investment against defaults.",
    type: "Protection",
    priority: "Medium",
    icon: Shield
  }
];

const qaDatabase = [
  {
    question: "What's the best chit plan for short-term savings?",
    answer: "For short-term savings (6-12 months), we recommend our Silver Plan with monthly installments of ₹2,000. It offers quick liquidity and competitive returns of 5-6%."
  },
  {
    question: "How can I maximize my returns?",
    answer: "To maximize returns: 1) Join during early batches, 2) Participate actively in auctions, 3) Maintain timely payments for bonus rewards, 4) Consider longer-term plans (24-36 months) for higher ROI."
  },
  {
    question: "Should I join multiple chit plans?",
    answer: "Diversification is beneficial! We recommend joining 2-3 plans with different durations to balance liquidity and returns. Ensure your monthly commitment doesn't exceed 30% of your income."
  }
];

export default function AIAdvisor() {
  const [selectedQA, setSelectedQA] = useState(null);

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">AI Financial Advisor</h1>
        <p className="text-muted-foreground">Personalized recommendations based on your chit fund goals</p>
      </div>

      <Card className="border-primary">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <Brain className="h-6 w-6 text-primary" />
            </div>
            <div>
              <CardTitle>AI-Powered Insights</CardTitle>
              <CardDescription>Smart recommendations tailored for you</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recommendations.map((rec) => {
              const Icon = rec.icon;
              return (
                <div key={rec.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Icon className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold">{rec.title}</h3>
                    </div>
                    <Badge variant={rec.priority === "High" ? "default" : "secondary"}>
                      {rec.priority} Priority
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{rec.description}</p>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{rec.type}</Badge>
                    <Button size="sm" variant="ghost">Learn More</Button>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Ask the AI Advisor</CardTitle>
          <CardDescription>Get instant answers to your chit fund questions</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            {qaDatabase.map((qa, index) => (
              <div key={index} className="border rounded-lg overflow-hidden">
                <button
                  onClick={() => setSelectedQA(selectedQA === index ? null : index)}
                  className="w-full p-4 text-left hover:bg-secondary/50 transition-colors flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <MessageSquare className="h-4 w-4 text-primary" />
                    <span className="font-medium">{qa.question}</span>
                  </div>
                  <span className="text-muted-foreground">{selectedQA === index ? '−' : '+'}</span>
                </button>
                {selectedQA === index && (
                  <div className="p-4 bg-secondary/30 border-t">
                    <p className="text-sm text-muted-foreground">{qa.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Your Investment Profile</CardTitle>
          <CardDescription>AI-analyzed investment behavior</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg">
              <p className="text-sm text-muted-foreground mb-1">Risk Appetite</p>
              <p className="text-lg font-semibold">Moderate</p>
              <p className="text-xs text-muted-foreground mt-1">Based on your investment choices</p>
            </div>
            <div className="p-4 border rounded-lg">
              <p className="text-sm text-muted-foreground mb-1">Investment Horizon</p>
              <p className="text-lg font-semibold">18-24 months</p>
              <p className="text-xs text-muted-foreground mt-1">Preferred chit duration</p>
            </div>
            <div className="p-4 border rounded-lg">
              <p className="text-sm text-muted-foreground mb-1">Payment Reliability</p>
              <p className="text-lg font-semibold text-green-600">Excellent</p>
              <p className="text-xs text-muted-foreground mt-1">95% on-time payment rate</p>
            </div>
            <div className="p-4 border rounded-lg">
              <p className="text-sm text-muted-foreground mb-1">Diversification Score</p>
              <p className="text-lg font-semibold">7/10</p>
              <p className="text-xs text-muted-foreground mt-1">Room for improvement</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
