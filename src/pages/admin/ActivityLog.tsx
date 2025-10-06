import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Activity, User, CreditCard, UserPlus, Settings } from "lucide-react";

const ActivityLog = () => {
  const navigate = useNavigate();

  const activities = [
    {
      id: 1,
      type: "payment",
      icon: CreditCard,
      user: "John Doe",
      action: "Made payment of ₹10,000",
      timestamp: "2024-12-20 14:30:25",
      status: "success",
    },
    {
      id: 2,
      type: "user",
      icon: UserPlus,
      user: "Admin",
      action: "Added new user: Jane Smith",
      timestamp: "2024-12-20 13:15:10",
      status: "info",
    },
    {
      id: 3,
      type: "settings",
      icon: Settings,
      user: "Super Admin",
      action: "Updated interest rate to 5.5%",
      timestamp: "2024-12-20 11:45:00",
      status: "warning",
    },
    {
      id: 4,
      type: "payment",
      icon: CreditCard,
      user: "Bob Wilson",
      action: "Payment failed for ₹15,000",
      timestamp: "2024-12-20 10:20:33",
      status: "error",
    },
    {
      id: 5,
      type: "user",
      icon: User,
      user: "Alice Brown",
      action: "Profile updated",
      timestamp: "2024-12-20 09:05:18",
      status: "info",
    },
    {
      id: 6,
      type: "payment",
      icon: CreditCard,
      user: "David Lee",
      action: "Made payment of ₹8,000",
      timestamp: "2024-12-19 16:40:55",
      status: "success",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "success":
        return "bg-success";
      case "error":
        return "bg-destructive";
      case "warning":
        return "bg-warning";
      default:
        return "bg-primary";
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
              <h1 className="text-2xl font-bold">Activity Log</h1>
            </div>
            <Button variant="outline">Export Log</Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Audit Trail
            </CardTitle>
            <CardDescription>Complete system activity history</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activities.map((activity) => (
                <div key={activity.id} className="flex items-start gap-4 p-4 border rounded-lg">
                  <div className="mt-1">
                    <activity.icon className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-medium">{activity.action}</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          by {activity.user} • {activity.timestamp}
                        </p>
                      </div>
                      <Badge className={getStatusColor(activity.status)}>{activity.status}</Badge>
                    </div>
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

export default ActivityLog;
