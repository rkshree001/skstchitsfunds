import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bell, AlertCircle, CheckCircle, Info, TrendingUp } from "lucide-react";

const SadminNotifications = () => {
  const notifications = [
    {
      id: 1,
      type: "critical",
      title: "System Alert: High Default Rate Detected",
      message: "Branch ID #12 showing 15% default rate, requires immediate attention",
      time: "5 minutes ago",
      icon: AlertCircle,
      color: "text-red-600",
      bgColor: "bg-red-50 dark:bg-red-900/20",
    },
    {
      id: 2,
      type: "success",
      title: "Monthly Target Achieved",
      message: "Overall collection target exceeded by 8% this month",
      time: "1 hour ago",
      icon: CheckCircle,
      color: "text-green-600",
      bgColor: "bg-green-50 dark:bg-green-900/20",
    },
    {
      id: 3,
      type: "info",
      title: "New Branch Registration",
      message: "Branch 'Mumbai Central' has been successfully onboarded",
      time: "2 hours ago",
      icon: Info,
      color: "text-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      id: 4,
      type: "trend",
      title: "AI Prediction Alert",
      message: "Expected 12% increase in enrollments next month based on trends",
      time: "3 hours ago",
      icon: TrendingUp,
      color: "text-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
    },
    {
      id: 5,
      type: "info",
      title: "Compliance Report Due",
      message: "Quarterly compliance report submission deadline: Jan 31, 2024",
      time: "5 hours ago",
      icon: Bell,
      color: "text-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
    },
    {
      id: 6,
      type: "success",
      title: "System Backup Completed",
      message: "Automated backup completed successfully at 2:00 AM",
      time: "1 day ago",
      icon: CheckCircle,
      color: "text-green-600",
      bgColor: "bg-green-50 dark:bg-green-900/20",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white" data-testid="text-page-title">Notifications</h1>
            <p className="text-gray-600 dark:text-gray-300 mt-2" data-testid="text-page-description">
              System alerts and important updates
            </p>
          </div>
          <Badge variant="secondary" data-testid="badge-notification-count">
            {notifications.filter(n => n.type === 'critical' || n.type === 'trend').length} New
          </Badge>
        </div>

        <div className="space-y-4">
          {notifications.map((notification) => {
            const Icon = notification.icon;
            return (
              <Card key={notification.id} className={`${notification.bgColor} border-l-4 ${notification.type === 'critical' ? 'border-l-red-600' : notification.type === 'success' ? 'border-l-green-600' : notification.type === 'trend' ? 'border-l-purple-600' : 'border-l-blue-600'}`} data-testid={`card-notification-${notification.id}`}>
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-3">
                    <Icon className={`h-5 w-5 mt-1 ${notification.color}`} />
                    <div className="flex-1">
                      <CardTitle className="text-base" data-testid={`text-notification-title-${notification.id}`}>{notification.title}</CardTitle>
                      <CardDescription className="mt-1" data-testid={`text-notification-message-${notification.id}`}>
                        {notification.message}
                      </CardDescription>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2" data-testid={`text-notification-time-${notification.id}`}>
                        {notification.time}
                      </p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SadminNotifications;
