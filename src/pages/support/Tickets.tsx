import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Ticket, MessageSquare } from "lucide-react";

const Tickets = () => {
  const navigate = useNavigate();

  const tickets = [
    {
      id: "TKT-001",
      user: "John Doe",
      subject: "Payment not reflecting",
      status: "open",
      priority: "high",
      created: "2024-12-20 14:30",
    },
    {
      id: "TKT-002",
      user: "Jane Smith",
      subject: "KYC verification query",
      status: "in-progress",
      priority: "medium",
      created: "2024-12-20 11:15",
    },
    {
      id: "TKT-003",
      user: "Bob Wilson",
      subject: "How to participate in auction?",
      status: "closed",
      priority: "low",
      created: "2024-12-19 16:45",
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "open":
        return <Badge className="bg-destructive">Open</Badge>;
      case "in-progress":
        return <Badge className="bg-warning">In Progress</Badge>;
      case "closed":
        return <Badge className="bg-success">Closed</Badge>;
      default:
        return <Badge>Unknown</Badge>;
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return <Badge variant="destructive">High</Badge>;
      case "medium":
        return <Badge variant="secondary">Medium</Badge>;
      case "low":
        return <Badge variant="outline">Low</Badge>;
      default:
        return <Badge>Unknown</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button onClick={() => navigate("/support/dashboard")} variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
              <h1 className="text-2xl font-bold">Support Tickets</h1>
            </div>
            <Button variant="default">
              <Ticket className="h-4 w-4 mr-2" />
              New Ticket
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="space-y-4">
          {tickets.map((ticket) => (
            <Card key={ticket.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <MessageSquare className="h-5 w-5" />
                    <div>
                      <CardTitle className="text-lg">{ticket.subject}</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">
                        {ticket.id} • {ticket.user} • {ticket.created}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {getPriorityBadge(ticket.priority)}
                    {getStatusBadge(ticket.status)}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                  {ticket.status !== "closed" && (
                    <Button size="sm">Respond</Button>
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

export default Tickets;
