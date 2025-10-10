import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Download, Search } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const EnhancedPaymentCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const stats = [
    { label: "Total Payments", value: "6", icon: CalendarIcon, color: "bg-blue-100 text-blue-600" },
    { label: "Completed", value: "1", icon: CalendarIcon, color: "bg-green-100 text-green-600" },
    { label: "Pending Amount", value: "₹10,000", icon: CalendarIcon, color: "bg-yellow-100 text-yellow-600" },
  ];

  const trendData = [
    { month: "Jul 24", paid: 18000, pending: 5000 },
    { month: "Aug 24", paid: 21000, pending: 3000 },
    { month: "Sep 24", paid: 25000, pending: 2000 },
    { month: "Oct 24", paid: 28000, pending: 5000 },
    { month: "Nov 24", paid: 32000, pending: 1000 },
    { month: "Dec 24", paid: 35000, pending: 0 },
    { month: "Jan 25", paid: 30000, pending: 8000 },
  ];

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const navigateMonth = (direction: "prev" | "next") => {
    const newDate = new Date(currentMonth);
    if (direction === "prev") {
      newDate.setMonth(newDate.getMonth() - 1);
    } else {
      newDate.setMonth(newDate.getMonth() + 1);
    }
    setCurrentMonth(newDate);
  };

  const daysInMonth = getDaysInMonth(currentMonth);
  const firstDay = getFirstDayOfMonth(currentMonth);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const emptyDays = Array.from({ length: firstDay }, (_, i) => i);

  const monthYear = currentMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" });

  const hasPayment = (day: number) => {
    return day === 10;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Payment Calendar</h1>
          <p className="text-muted-foreground">Payment Schedule Overview</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => setCurrentMonth(new Date())}>
            Today
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="text-2xl font-bold mt-1">{stat.value}</p>
              </div>
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${stat.color}`}>
                <stat.icon className="h-6 w-6" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">{monthYear}</h2>
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by Chit Plan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Chit Plans</SelectItem>
                    <SelectItem value="plan1">Chit Plan A</SelectItem>
                    <SelectItem value="plan2">Chit Plan B</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="All Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="paid">Paid</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="overdue">Overdue</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigateMonth("prev")}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigateMonth("next")}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              <Button variant="ghost" size="sm">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="border rounded-lg overflow-hidden">
            <div className="grid grid-cols-7 gap-0 bg-muted">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day} className="p-3 text-center text-sm font-medium border-r last:border-r-0">
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-0">
              {emptyDays.map((_, index) => (
                <div key={`empty-${index}`} className="p-4 border-r border-b bg-muted/20"></div>
              ))}
              {days.map((day) => (
                <div
                  key={day}
                  className={`p-4 border-r border-b hover:bg-muted/50 transition-colors ${
                    day === new Date().getDate() &&
                    currentMonth.getMonth() === new Date().getMonth()
                      ? "bg-primary/10"
                      : ""
                  }`}
                >
                  <div className="flex flex-col h-full">
                    <span className="text-sm font-medium mb-2">{day}</span>
                    {hasPayment(day) && (
                      <div className="flex-1">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mb-1"></div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-6 mt-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-600 rounded-sm"></div>
              <span className="text-muted-foreground">Paid</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-600 rounded-sm"></div>
              <span className="text-muted-foreground">Pending</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-600 rounded-sm"></div>
              <span className="text-muted-foreground">Overdue</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-600 rounded-sm"></div>
              <span className="text-muted-foreground">Upcoming</span>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-6">Payment Trends</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Monthly payment patterns and trends over the last 12 months
          </p>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" tick={{ fontSize: 10 }} />
                <YAxis tick={{ fontSize: 10 }} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="paid"
                  stroke="#10b981"
                  strokeWidth={2}
                  name="Paid Amount"
                />
                <Line
                  type="monotone"
                  dataKey="pending"
                  stroke="#f59e0b"
                  strokeWidth={2}
                  name="Pending Amount"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="flex items-center justify-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-xs text-muted-foreground">Paid Amount</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span className="text-xs text-muted-foreground">Pending Amount</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default EnhancedPaymentCalendar;
