import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Plus, Clock, Users, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const TaskScheduler = () => {
  const navigate = useNavigate();
  const [showAddTask, setShowAddTask] = useState(false);

  const tasks = [
    {
      id: 1,
      title: "Field Collection - Zone A",
      type: "collection",
      date: "2025-01-10",
      time: "09:00 AM",
      assignedTo: "Rajesh Kumar",
      location: "North Region",
      status: "scheduled"
    },
    {
      id: 2,
      title: "Monthly Auction - 1 Year Chit",
      type: "auction",
      date: "2025-01-15",
      time: "10:00 AM",
      assignedTo: "Admin Team",
      location: "Main Branch",
      status: "scheduled"
    },
    {
      id: 3,
      title: "Branch Review Meeting",
      type: "meeting",
      date: "2025-01-12",
      time: "02:00 PM",
      assignedTo: "All Managers",
      location: "HQ Conference Room",
      status: "confirmed"
    },
    {
      id: 4,
      title: "Field Collection - Zone B",
      type: "collection",
      date: "2025-01-11",
      time: "09:00 AM",
      assignedTo: "Priya Sharma",
      location: "South Region",
      status: "scheduled"
    },
    {
      id: 5,
      title: "KYC Verification Drive",
      type: "verification",
      date: "2025-01-18",
      time: "11:00 AM",
      assignedTo: "Compliance Team",
      location: "Branch Office",
      status: "scheduled"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "collection": return "bg-green-500/10 text-green-500";
      case "auction": return "bg-purple-500/10 text-purple-500";
      case "meeting": return "bg-blue-500/10 text-blue-500";
      case "verification": return "bg-orange-500/10 text-orange-500";
      default: return "";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button onClick={() => navigate("/admin/home")} variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
              <h1 className="text-2xl font-bold">Task Scheduler</h1>
            </div>
            <Dialog open={showAddTask} onOpenChange={setShowAddTask}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Schedule Task
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>Schedule New Task</DialogTitle>
                  <DialogDescription>Create a new scheduled task or meeting</DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="title">Task Title</Label>
                    <Input id="title" placeholder="Enter task title" />
                  </div>
                  <div>
                    <Label htmlFor="type">Task Type</Label>
                    <select id="type" className="w-full p-2 border rounded-md bg-background">
                      <option>Collection</option>
                      <option>Auction</option>
                      <option>Meeting</option>
                      <option>Verification</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="date">Date</Label>
                      <Input id="date" type="date" />
                    </div>
                    <div>
                      <Label htmlFor="time">Time</Label>
                      <Input id="time" type="time" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="assigned">Assigned To</Label>
                    <Input id="assigned" placeholder="Enter name or team" />
                  </div>
                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" placeholder="Enter location" />
                  </div>
                  <div>
                    <Label htmlFor="notes">Notes (Optional)</Label>
                    <Textarea id="notes" placeholder="Add any additional notes" />
                  </div>
                  <Button className="w-full" onClick={() => setShowAddTask(false)}>
                    Schedule Task
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 space-y-6">
        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Scheduled Tasks</CardDescription>
              <CardTitle className="text-3xl">12</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>This Week</CardDescription>
              <CardTitle className="text-3xl">5</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Completed</CardDescription>
              <CardTitle className="text-3xl text-green-500">8</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Pending</CardDescription>
              <CardTitle className="text-3xl text-yellow-500">4</CardTitle>
            </CardHeader>
          </Card>
        </div>

        {/* Scheduled Tasks */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Upcoming Tasks
            </CardTitle>
            <CardDescription>Scheduled collections, meetings, and events</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {tasks.map((task) => (
                <div key={task.id} className="p-4 rounded-lg border hover:bg-muted/50 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold">{task.title}</span>
                        <Badge className={getTypeColor(task.type)}>
                          {task.type}
                        </Badge>
                      </div>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-3 w-3" />
                          {task.date} at {task.time}
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-3 w-3" />
                          {task.assignedTo}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-3 w-3" />
                          {task.location}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">Edit</Button>
                      <Button size="sm" variant="outline">Cancel</Button>
                      <Button size="sm">Mark Complete</Button>
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

export default TaskScheduler;
