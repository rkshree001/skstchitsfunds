import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, BookOpen, CheckCircle2 } from "lucide-react";

const Onboarding = () => {
  const navigate = useNavigate();

  const steps = [
    {
      id: 1,
      title: "Account Setup",
      description: "Create your account and complete KYC verification",
      completed: true,
    },
    {
      id: 2,
      title: "Choose a Chit Plan",
      description: "Select from our range of chit fund plans based on your needs",
      completed: true,
    },
    {
      id: 3,
      title: "Make First Payment",
      description: "Pay your first monthly premium to activate your chit",
      completed: false,
    },
    {
      id: 4,
      title: "Learn About Auctions",
      description: "Understand how monthly auctions work and how to participate",
      completed: false,
    },
    {
      id: 5,
      title: "Track Your Investment",
      description: "Use the dashboard to monitor your chits and returns",
      completed: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button onClick={() => navigate("/support/dashboard")} variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <h1 className="text-2xl font-bold">Onboarding Assistant</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Getting Started with Chit Funds
            </CardTitle>
            <CardDescription>Step-by-step guide for new users</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
              <div className="space-y-8">
                {steps.map((step, idx) => (
                  <div key={step.id} className="relative flex gap-4">
                    <div
                      className={`relative z-10 flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                        step.completed
                          ? "bg-success border-success"
                          : "bg-background border-border"
                      }`}
                    >
                      {step.completed ? (
                        <CheckCircle2 className="h-5 w-5 text-success-foreground" />
                      ) : (
                        <span className="text-sm font-semibold">{step.id}</span>
                      )}
                    </div>
                    <div className="flex-1 pb-8">
                      <h3 className="font-semibold mb-1">{step.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{step.description}</p>
                      {!step.completed && (
                        <Button variant="outline" size="sm">
                          Start Step
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Need Help?</CardTitle>
            <CardDescription>Contact our support team for assistance</CardDescription>
          </CardHeader>
          <CardContent className="flex gap-4">
            <Button variant="outline">Live Chat</Button>
            <Button variant="outline">Call Support</Button>
            <Button variant="outline">View FAQ</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Onboarding;
