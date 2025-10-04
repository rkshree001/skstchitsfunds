import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { LogOut, Search, Filter, MessageSquare, CheckCircle, Clock, AlertCircle, TrendingUp, BarChart3, PieChart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { LineChart, Line, BarChart, Bar, PieChart as RePieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const SupportDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const tickets = [
    { id: "TKT001", user: "Rajesh Kumar", subject: "Payment not reflecting", status: "open", priority: "high", date: "2024-09-20", branch: "Mumbai Central" },
    { id: "TKT002", user: "Priya Sharma", subject: "Unable to login", status: "in-progress", priority: "medium", date: "2024-09-21", branch: "Pune Branch" },
    { id: "TKT003", user: "Amit Patel", subject: "Chit plan details query", status: "open", priority: "low", date: "2024-09-22", branch: "Mumbai Central" },
    { id: "TKT004", user: "Sneha Reddy", subject: "Receipt not downloaded", status: "resolved", priority: "medium", date: "2024-09-19", branch: "Bangalore Hub" },
    { id: "TKT005", user: "Vikram Singh", subject: "Interest calculation doubt", status: "open", priority: "high", date: "2024-09-23", branch: "Delhi NCR" },
  ];

  const weeklyTicketData = [
    { day: "Mon", resolved: 8, new: 12 },
    { day: "Tue", resolved: 10, new: 15 },
    { day: "Wed", resolved: 12, new: 10 },
    { day: "Thu", resolved: 15, new: 8 },
    { day: "Fri", resolved: 14, new: 11 },
    { day: "Sat", resolved: 10, new: 6 },
    { day: "Sun", resolved: 5, new: 3 },
  ];

  const categoryDistribution = [
    { name: "Payment Issues", value: 35, color: "#ef4444" },
    { name: "Login Problems", value: 25, color: "#f59e0b" },
    { name: "Plan Queries", value: 20, color: "#10b981" },
    { name: "Technical", value: 15, color: "#1e40af" },
    { name: "Others", value: 5, color: "#8b5cf6" },
  ];

  const handleResolve = (ticketId: string) => {
    toast({
      title: "Ticket Resolved",
      description: `Ticket ${ticketId} has been marked as resolved.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b gradient-primary text-primary-foreground sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-8 w-8" />
            <span className="text-2xl font-bold">Support Dashboard</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:inline opacity-90">Support Agent</span>
            <Button onClick={() => navigate("/")} variant="secondary" size="sm">
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="shadow-medium border-2 border-destructive/20">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardDescription>Open Tickets</CardDescription>
                <AlertCircle className="h-4 w-4 text-destructive" />
              </div>
              <CardTitle className="text-3xl text-destructive">3</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">Requires attention</p>
            </CardContent>
          </Card>

          <Card className="shadow-medium border-2 border-warning/20">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardDescription>In Progress</CardDescription>
                <Clock className="h-4 w-4 text-warning" />
              </div>
              <CardTitle className="text-3xl text-warning">1</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">Being resolved</p>
            </CardContent>
          </Card>

          <Card className="shadow-medium border-2 border-success/20">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardDescription>Resolved Today</CardDescription>
                <CheckCircle className="h-4 w-4 text-success" />
              </div>
              <CardTitle className="text-3xl text-success">12</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-success">Great work!</p>
            </CardContent>
          </Card>

          <Card className="shadow-medium border-2 border-primary/20">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardDescription>Avg Response Time</CardDescription>
                <Clock className="h-4 w-4 text-primary" />
              </div>
              <CardTitle className="text-3xl">2.5h</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-success">15% better than target</p>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="shadow-medium mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search by ticket ID, user, or subject..." className="pl-10" />
              </div>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Analytics Section */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Weekly Ticket Trend */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Weekly Ticket Trend
              </CardTitle>
              <CardDescription>New vs resolved tickets</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={weeklyTicketData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="new" stroke="#ef4444" strokeWidth={2} />
                  <Line type="monotone" dataKey="resolved" stroke="#10b981" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Category Distribution */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChart className="h-5 w-5" />
                Issue Categories
              </CardTitle>
              <CardDescription>Tickets by category</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <RePieChart>
                  <Pie
                    data={categoryDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={(entry) => `${entry.name}: ${entry.value}`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {categoryDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </RePieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Tickets Table */}
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle>Support Tickets</CardTitle>
            <CardDescription>Manage and resolve customer queries</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-2">Ticket ID</th>
                    <th className="text-left py-3 px-2">User</th>
                    <th className="text-left py-3 px-2">Subject</th>
                    <th className="text-left py-3 px-2">Branch</th>
                    <th className="text-left py-3 px-2">Date</th>
                    <th className="text-center py-3 px-2">Priority</th>
                    <th className="text-center py-3 px-2">Status</th>
                    <th className="text-center py-3 px-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {tickets.map((ticket) => (
                    <tr key={ticket.id} className="border-b last:border-0 hover:bg-muted/50 transition-colors">
                      <td className="py-3 px-2 text-sm font-medium">{ticket.id}</td>
                      <td className="py-3 px-2 text-sm">{ticket.user}</td>
                      <td className="py-3 px-2 text-sm">{ticket.subject}</td>
                      <td className="py-3 px-2 text-sm">{ticket.branch}</td>
                      <td className="py-3 px-2 text-sm">{ticket.date}</td>
                      <td className="py-3 px-2 text-center">
                        <Badge 
                          variant="outline" 
                          className={
                            ticket.priority === "high" ? "border-destructive text-destructive" :
                            ticket.priority === "medium" ? "border-warning text-warning" : 
                            "border-muted-foreground"
                          }
                        >
                          {ticket.priority}
                        </Badge>
                      </td>
                      <td className="py-3 px-2 text-center">
                        <Badge 
                          variant="default" 
                          className={
                            ticket.status === "resolved" ? "bg-success" :
                            ticket.status === "in-progress" ? "bg-warning" : "bg-destructive"
                          }
                        >
                          {ticket.status}
                        </Badge>
                      </td>
                      <td className="py-3 px-2 text-center">
                        {ticket.status !== "resolved" && (
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleResolve(ticket.id)}
                          >
                            Resolve
                          </Button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SupportDashboard;
