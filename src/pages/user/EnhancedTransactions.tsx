import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  TrendingUp,
  TrendingDown,
  RefreshCw,
  FileDown,
  Download,
  Eye,
  ChevronDown,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const EnhancedTransactions = () => {
  const [sortBy, setSortBy] = useState("date-desc");

  const stats = [
    {
      label: "Total Paid",
      value: "₹3,20,500",
      change: "+12.5% from last month",
      icon: TrendingUp,
      color: "text-green-600",
      trend: "up",
    },
    {
      label: "Total Received",
      value: "₹87,500",
      change: "+8.3% from last month",
      icon: TrendingDown,
      color: "text-orange-600",
      trend: "up",
    },
    {
      label: "Net Balance",
      value: "₹2,33,000",
      change: "No change",
      icon: RefreshCw,
      color: "text-blue-600",
      trend: "neutral",
    },
  ];

  const trendData = [
    { month: "Jul", amount: 25000 },
    { month: "Aug", amount: 28000 },
    { month: "Sep", amount: 26000 },
    { month: "Oct", amount: 31000 },
  ];

  const transactions = [
    {
      date: "8/10/2024",
      time: "10:30 am",
      type: "Payment",
      amount: "₹5,000",
      plan: "Chit Plan A - ₹1,00,000",
      status: "completed",
      reference: "TXN001234567890",
    },
    {
      date: "5/10/2024",
      time: "02:15 pm",
      type: "Payout",
      amount: "₹85,000",
      plan: "Chit Plan B - ₹2,00,000",
      status: "completed",
      reference: "TXN001234567891",
    },
    {
      date: "3/10/2024",
      time: "09:45 am",
      type: "Payment",
      amount: "₹10,000",
      plan: "Chit Plan C - ₹5,00,000",
      status: "pending",
      reference: "TXN001234567892",
    },
    {
      date: "1/10/2024",
      time: "04:20 pm",
      type: "Penalty",
      amount: "₹500",
      plan: "Chit Plan A - ₹1,00,000",
      status: "completed",
      reference: "TXN001234567893",
    },
    {
      date: "28/9/2024",
      time: "11:30 am",
      type: "Refund",
      amount: "₹2,500",
      plan: "Chit Plan D - ₹3,00,000",
      status: "processing",
      reference: "TXN001234567894",
    },
    {
      date: "25/9/2024",
      time: "01:10 pm",
      type: "Payment",
      amount: "₹15,000",
      plan: "Chit Plan E - ₹10,00,000",
      status: "failed",
      reference: "TXN001234567895",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-400";
      case "pending":
        return "bg-yellow-100 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-400";
      case "processing":
        return "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-400";
      case "failed":
        return "bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-400";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Payment":
        return <TrendingUp className="h-4 w-4 text-green-600" />;
      case "Payout":
        return <TrendingDown className="h-4 w-4 text-orange-600" />;
      case "Refund":
        return <RefreshCw className="h-4 w-4 text-blue-600" />;
      case "Penalty":
        return <TrendingDown className="h-4 w-4 text-red-600" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Transaction History</h1>
          <p className="text-muted-foreground">
            View and manage all your financial transactions and payment records
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
          <Button variant="default">
            <FileDown className="h-4 w-4 mr-2" />
            Generate Statement
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-10 h-10 rounded-lg ${stat.color.replace("text", "bg").replace("600", "100")} dark:${stat.color.replace("text", "bg").replace("600", "950")} flex items-center justify-center`}>
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </div>
              <Badge variant="outline" className={
                stat.trend === "up" ? "text-green-600" : stat.trend === "down" ? "text-red-600" : "text-gray-600"
              }>
                {stat.change}
              </Badge>
            </div>
            <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </Card>
        ))}
      </div>

      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">Payment Trends</h2>
          <Button variant="ghost" size="sm">
            <TrendingUp className="h-4 w-4 mr-2" />
            View Details
          </Button>
        </div>
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="amount"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={{ fill: "#3b82f6" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by amount, reference, or chit plan..."
                className="pl-10"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Advanced Filters
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              PDF
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              CSV
            </Button>
          </div>
        </div>

        <div className="flex gap-4 mb-6">
          <div className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg">
            <span className="text-sm font-medium">All Transactions</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 hover:bg-muted rounded-lg cursor-pointer">
            <TrendingUp className="h-4 w-4 text-green-600" />
            <span className="text-sm font-medium">Payments</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 hover:bg-muted rounded-lg cursor-pointer">
            <TrendingDown className="h-4 w-4 text-orange-600" />
            <span className="text-sm font-medium">Refunds</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 hover:bg-muted rounded-lg cursor-pointer">
            <RefreshCw className="h-4 w-4 text-red-600" />
            <span className="text-sm font-medium">Penalties</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 hover:bg-muted rounded-lg cursor-pointer">
            <FileDown className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium">Payouts</span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
          <p>Showing 6 of 6 transactions</p>
          <div className="flex items-center gap-2">
            <span>Sorted by date (desc)</span>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[140px] h-8">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="date-desc">Date (Newest)</SelectItem>
                <SelectItem value="date-asc">Date (Oldest)</SelectItem>
                <SelectItem value="amount-desc">Amount (High-Low)</SelectItem>
                <SelectItem value="amount-asc">Amount (Low-High)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="border rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Chit Plan</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Reference</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((txn, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <div>
                      <p className="font-medium">{txn.date}</p>
                      <p className="text-xs text-muted-foreground">{txn.time}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {getTypeIcon(txn.type)}
                      <span>{txn.type}</span>
                    </div>
                  </TableCell>
                  <TableCell className="font-semibold">{txn.amount}</TableCell>
                  <TableCell className="text-sm">{txn.plan}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(txn.status)}>{txn.status}</Badge>
                  </TableCell>
                  <TableCell className="text-sm font-mono">{txn.reference}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
};

export default EnhancedTransactions;
