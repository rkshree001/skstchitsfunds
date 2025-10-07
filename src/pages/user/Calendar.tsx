import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar as CalendarIcon, Clock, MapPin, Video, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Calendar = () => {
  const navigate = useNavigate();

  const events = [
    {
      id: 1,
      title: "Monthly Premium Due - CHT000001",
      date: "2025-01-15",
      time: "Before 5:00 PM",
      type: "payment",
      amount: 10000,
      status: "upcoming"
    },
    {
      id: 2,
      title: "Chit Auction - 1-Year Premium",
      date: "2025-01-20",
      time: "10:00 AM - 11:00 AM",
      type: "auction",
      location: "Branch Office / Online",
      status: "upcoming"
    },
    {
      id: 3,
      title: "KYC Document Verification",
      date: "2025-01-10",
      time: "3:00 PM - 4:00 PM",
      type: "meeting",
      location: "Main Branch",
      status: "confirmed"
    },
    {
      id: 4,
      title: "Monthly Premium Due - CHT000002",
      date: "2025-01-18",
      time: "Before 5:00 PM",
      type: "payment",
      amount: 10000,
      status: "upcoming"
    },
    {
      id: 5,
      title: "Quarterly Review Meeting",
      date: "2025-01-25",
      time: "2:00 PM - 3:00 PM",
      type: "meeting",
      location: "Virtual - Zoom",
      status: "upcoming"
    },
    {
      id: 6,
      title: "Dividend Payout",
      date: "2025-01-22",
      time: "Anytime",
      type: "payout",
      amount: 500,
      status: "scheduled"
    }
  ];

  const getEventIcon = (type: string) => {
    switch (type) {
      case "payment":
        return <CalendarIcon className="h-4 w-4" />;
      case "auction":
        return <Users className="h-4 w-4" />;
      case "meeting":
        return <Video className="h-4 w-4" />;
      case "payout":
        return <Clock className="h-4 w-4" />;
      default:
        return <CalendarIcon className="h-4 w-4" />;
    }
  };

  const getEventColor = (type: string) => {
    switch (type) {
      case "payment":
        return "border-l-red-500";
      case "auction":
        return "border-l-purple-500";
      case "meeting":
        return "border-l-blue-500";
      case "payout":
        return "border-l-green-500";
      default:
        return "border-l-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button onClick={() => navigate("/user/home")} variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
              <h1 className="text-2xl font-bold">My Calendar</h1>
            </div>
            <Button variant="outline">
              <CalendarIcon className="h-4 w-4 mr-2" />
              Sync to Google Calendar
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 space-y-6">
        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Upcoming Payments</CardDescription>
              <CardTitle className="text-3xl">2</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Scheduled Auctions</CardDescription>
              <CardTitle className="text-3xl">1</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Meetings</CardDescription>
              <CardTitle className="text-3xl">2</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Payouts</CardDescription>
              <CardTitle className="text-3xl">1</CardTitle>
            </CardHeader>
          </Card>
        </div>

        {/* Calendar Events */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
            <CardDescription>Your scheduled payments, auctions, and meetings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {events.map((event) => (
                <div
                  key={event.id}
                  className={`p-4 rounded-lg border-l-4 ${getEventColor(event.type)} bg-muted/30 hover:bg-muted/50 transition-colors`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        {getEventIcon(event.type)}
                        <span className="font-semibold">{event.title}</span>
                        <Badge variant="outline">{event.status}</Badge>
                      </div>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <CalendarIcon className="h-3 w-3" />
                          {event.date}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-3 w-3" />
                          {event.time}
                        </div>
                        {event.location && (
                          <div className="flex items-center gap-2">
                            <MapPin className="h-3 w-3" />
                            {event.location}
                          </div>
                        )}
                        {event.amount && (
                          <div className="font-medium text-foreground">
                            Amount: ₹{event.amount.toLocaleString()}
                          </div>
                        )}
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      {event.type === "payment" ? "Pay Now" : "View Details"}
                    </Button>
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

export default Calendar;
