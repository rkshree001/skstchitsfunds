import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Bell, AlertTriangle, CheckCircle2, Info } from "lucide-react";

const AdminNotifications = () => {
  const navigate = useNavigate();

  const notifications = [
    {
      id: 1,
      type: "warning",
      title: "High Default Rate Alert",
      message: "Zone D has 15% default rate. Immediate action required.",
      time: "1 hour ago",
      read: false,
    },
    {
      id: 2,
      type: "success",
      title: "Collection Target Achieved",
      message: "Zone A has achieved 95% collection target for this month.",
      time: "3 hours ago",
      read: false,
    },
    {
      id: 3,
      type: "info",
      title: "New User Registration",
      message: "15 new users registered in the last 24 hours.",
      time: "5 hours ago",
      read: true,
    },
    {
      id: 4,
      type: "info",
      title: "Monthly Report Ready",
      message: "December monthly report is now available for download.",
      time: "1 day ago",
      read: true,
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "success":
        return <CheckCircle2 className="h-5 w-5 text-success" />;
      case "warning":
        return <AlertTriangle className="h-5 w-5 text-warning" />;
      default:
        return <Info className="h-5 w-5 text-primary" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button onClick={() => navigate("/admin/dashboard")} variant="ghost" size="sm">
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

export default AdminNotifications;
