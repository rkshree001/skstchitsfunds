import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin, CheckCircle2, Clock, User } from "lucide-react";

const FieldTracking = () => {
  const navigate = useNavigate();

  const fieldStaff = [
    {
      id: 1,
      name: "Ramesh Kumar",
      area: "Zone A",
      collected: 15,
      pending: 5,
      status: "active",
      lastUpdate: "10 mins ago",
    },
    {
      id: 2,
      name: "Priya Sharma",
      area: "Zone B",
      collected: 12,
      pending: 8,
      status: "active",
      lastUpdate: "25 mins ago",
    },
    {
      id: 3,
      name: "Amit Patel",
      area: "Zone C",
      collected: 18,
      pending: 2,
      status: "completed",
      lastUpdate: "1 hour ago",
    },
  ];

  const collections = [
    { id: 1, customer: "John Doe", amount: 10000, status: "collected", time: "09:30 AM", staff: "Ramesh Kumar" },
    { id: 2, customer: "Jane Smith", amount: 15000, status: "collected", time: "10:15 AM", staff: "Priya Sharma" },
    { id: 3, customer: "Bob Wilson", amount: 8000, status: "pending", time: "11:00 AM", staff: "Ramesh Kumar" },
    { id: 4, customer: "Alice Brown", amount: 12000, status: "collected", time: "11:45 AM", staff: "Amit Patel" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button onClick={() => navigate("/admin/dashboard")} variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <h1 className="text-2xl font-bold">Field Collection Tracking</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 space-y-8">
        <div className="grid md:grid-cols-3 gap-4">
          {fieldStaff.map((staff) => (
            <Card key={staff.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    <CardTitle className="text-lg">{staff.name}</CardTitle>
                  </div>
                  <Badge className={staff.status === "active" ? "bg-success" : "bg-muted"}>
                    {staff.status}
                  </Badge>
                </div>
                <CardDescription className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {staff.area}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Collected</span>
                  <span className="font-semibold text-success">{staff.collected}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Pending</span>
                  <span className="font-semibold text-warning">{staff.pending}</span>
                </div>
                <div className="pt-2 border-t">
                  <p className="text-xs text-muted-foreground">Last update: {staff.lastUpdate}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Today's Collections</CardTitle>
            <CardDescription>Real-time collection tracking</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {collections.map((col) => (
                <div key={col.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    {col.status === "collected" ? (
                      <CheckCircle2 className="h-5 w-5 text-success" />
                    ) : (
                      <Clock className="h-5 w-5 text-warning" />
                    )}
                    <div>
                      <p className="font-medium">{col.customer}</p>
                      <p className="text-sm text-muted-foreground">{col.staff} • {col.time}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">₹{col.amount.toLocaleString()}</p>
                    <Badge variant={col.status === "collected" ? "default" : "secondary"} className="mt-1">
                      {col.status}
                    </Badge>
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

export default FieldTracking;
