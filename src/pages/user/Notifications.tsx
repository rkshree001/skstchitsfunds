import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Bell, CheckCircle2, AlertCircle, Info } from "lucide-react";

const Notifications = () => {
  const navigate = useNavigate();

  const notifications = [
    {
      id: 1,
      type: "success",
      title: "Payment Successful",
      message: "Your monthly premium of ₹10,000 has been received.",
      time: "2 hours ago",
      read: false,
    },
    {
      id: 2,
      type: "info",
      title: "Auction Reminder",
      message: "Monthly auction starts on Jan 1st. Don't forget to place your bid!",
      time: "1 day ago",
      read: false,
    },
    {
      id: 3,
      type: "warning",
      title: "Payment Due",
      message: "Your next payment of ₹10,000 is due on Jan 15th.",
      time: "2 days ago",
      read: true,
    },
    {
      id: 4,
      type: "success",
      title: "Dividend Credited",
      message: "₹500 dividend has been credited to your account.",
      time: "3 days ago",
      read: true,
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "success":
        return <CheckCircle2 className="h-5 w-5 text-success" />;
      case "warning":
        return <AlertCircle className="h-5 w-5 text-warning" />;
      case "info":
        return <Info className="h-5 w-5 text-primary" />;
      default:
        return <Bell className="h-5 w-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button onClick={() => navigate("/user/dashboard")} variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
              <h1 className="text-2xl font-bold">Notifications</h1>
            </div>
            <Button variant="outline" size="sm">
              Mark all as read
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="space-y-3">
          {notifications.map((notif) => (
            <Card key={notif.id} className={!notif.read ? "border-primary" : ""}>
              <CardContent className="p-4">
                <div className="flex gap-4">
                  <div className="mt-1">{getIcon(notif.type)}</div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-semibold">{notif.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{notif.message}</p>
                        <p className="text-xs text-muted-foreground mt-2">{notif.time}</p>
                      </div>
                      {!notif.read && <Badge variant="default">New</Badge>}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
