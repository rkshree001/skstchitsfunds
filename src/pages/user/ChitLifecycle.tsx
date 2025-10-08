import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Circle } from "lucide-react";

const chitLifecycles = [
  {
    id: "CHT001",
    name: "Gold Plan 2024",
    currentPhase: 2,
    phases: [
      { name: "Enrollment", status: "completed", date: "Jan 2024" },
      { name: "Collection", status: "active", date: "Ongoing" },
      { name: "Auction", status: "pending", date: "Mar 2024" },
      { name: "Payout", status: "pending", date: "Apr 2024" },
      { name: "Close", status: "pending", date: "Dec 2024" }
    ],
    progress: 40
  },
  {
    id: "CHT002",
    name: "Diamond Plan 2024",
    currentPhase: 3,
    phases: [
      { name: "Enrollment", status: "completed", date: "Feb 2024" },
      { name: "Collection", status: "completed", date: "Completed" },
      { name: "Auction", status: "active", date: "Ongoing" },
      { name: "Payout", status: "pending", date: "May 2024" },
      { name: "Close", status: "pending", date: "Jan 2025" }
    ],
    progress: 60
  }
];

export default function ChitLifecycle() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Chit Lifecycle Tracking</h1>
        <p className="text-muted-foreground">Monitor the progress of your chit plans through all phases</p>
      </div>

      <div className="space-y-6">
        {chitLifecycles.map((chit) => (
          <Card key={chit.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>{chit.name}</CardTitle>
                  <CardDescription>ID: {chit.id}</CardDescription>
                </div>
                <Badge variant="secondary">{chit.progress}% Complete</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <Progress value={chit.progress} className="h-2" />
              
              <div className="space-y-4">
                {chit.phases.map((phase, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="mt-1">
                      {phase.status === "completed" ? (
                        <CheckCircle2 className="h-6 w-6 text-green-500" />
                      ) : phase.status === "active" ? (
                        <div className="h-6 w-6 rounded-full border-4 border-primary animate-pulse" />
                      ) : (
                        <Circle className="h-6 w-6 text-muted-foreground" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold">{phase.name}</h3>
                        <Badge 
                          variant={
                            phase.status === "completed" ? "default" : 
                            phase.status === "active" ? "secondary" : 
                            "outline"
                          }
                        >
                          {phase.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{phase.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
