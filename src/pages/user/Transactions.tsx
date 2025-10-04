import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { LogOut, ArrowLeft, Download, Search, Filter, Calendar, IndianRupee } from "lucide-react";

const UserTransactions = () => {
  const navigate = useNavigate();

  const transactions = [
    { id: "TXN001", date: "2024-09-15", month: "September 2024", amount: 10000, type: "Premium Payment", status: "success", method: "UPI" },
    { id: "TXN002", date: "2024-08-15", month: "August 2024", amount: 10000, type: "Premium Payment", status: "success", method: "Net Banking" },
    { id: "TXN003", date: "2024-07-15", month: "July 2024", amount: 10000, type: "Premium Payment", status: "success", method: "UPI" },
    { id: "TXN004", date: "2024-06-15", month: "June 2024", amount: 10000, type: "Premium Payment", status: "success", method: "Cash" },
    { id: "TXN005", date: "2024-05-15", month: "May 2024", amount: 10000, type: "Premium Payment", status: "success", method: "UPI" },
    { id: "TXN006", date: "2024-04-15", month: "April 2024", amount: 10000, type: "Premium Payment", status: "success", method: "Cheque" },
    { id: "TXN007", date: "2024-03-15", month: "March 2024", amount: 10000, type: "Premium Payment", status: "success", method: "UPI" },
    { id: "TXN008", date: "2024-02-15", month: "February 2024", amount: 10000, type: "Premium Payment", status: "success", method: "Net Banking" },
  ];

  const summary = {
    totalPaid: 80000,
    totalPending: 40000,
    lastPayment: "2024-09-15",
    nextDue: "2024-10-15",
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b gradient-primary text-primary-foreground sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button onClick={() => navigate("/user/dashboard")} variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <span className="text-2xl font-bold">Transaction History</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:inline opacity-90">Rajesh Kumar</span>
            <Button onClick={() => navigate("/")} variant="secondary" size="sm">
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Summary Cards */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="shadow-medium border-2 border-primary/20">
            <CardHeader className="pb-2">
              <CardDescription>Total Paid</CardDescription>
              <CardTitle className="text-2xl text-success">₹{summary.totalPaid.toLocaleString()}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">8 payments completed</p>
            </CardContent>
          </Card>

          <Card className="shadow-medium border-2 border-warning/20">
            <CardHeader className="pb-2">
              <CardDescription>Pending Amount</CardDescription>
              <CardTitle className="text-2xl text-warning">₹{summary.totalPending.toLocaleString()}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">4 payments remaining</p>
            </CardContent>
          </Card>

          <Card className="shadow-medium border-2 border-primary/20">
            <CardHeader className="pb-2">
              <CardDescription>Last Payment</CardDescription>
              <CardTitle className="text-xl">{summary.lastPayment}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-success">On time</p>
            </CardContent>
          </Card>

          <Card className="shadow-medium border-2 border-primary/20">
            <CardHeader className="pb-2">
              <CardDescription>Next Due Date</CardDescription>
              <CardTitle className="text-xl">{summary.nextDue}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-warning">Due in 15 days</p>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="shadow-medium mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search by transaction ID or month..." className="pl-10" />
              </div>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline">
                <Calendar className="h-4 w-4 mr-2" />
                Date Range
              </Button>
              <Button variant="default">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Transaction Table */}
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle>All Transactions</CardTitle>
            <CardDescription>Complete payment history for your chit fund</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-2">Transaction ID</th>
                    <th className="text-left py-3 px-2">Date</th>
                    <th className="text-left py-3 px-2">Month</th>
                    <th className="text-right py-3 px-2">Amount</th>
                    <th className="text-left py-3 px-2">Type</th>
                    <th className="text-left py-3 px-2">Method</th>
                    <th className="text-center py-3 px-2">Status</th>
                    <th className="text-center py-3 px-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((txn) => (
                    <tr key={txn.id} className="border-b last:border-0 hover:bg-muted/50 transition-colors">
                      <td className="py-3 px-2 text-sm font-medium">{txn.id}</td>
                      <td className="py-3 px-2 text-sm">{txn.date}</td>
                      <td className="py-3 px-2 text-sm">{txn.month}</td>
                      <td className="py-3 px-2 text-sm text-right font-medium">₹{txn.amount.toLocaleString()}</td>
                      <td className="py-3 px-2 text-sm">{txn.type}</td>
                      <td className="py-3 px-2 text-sm">{txn.method}</td>
                      <td className="py-3 px-2 text-center">
                        <Badge variant="default" className="bg-success">
                          {txn.status}
                        </Badge>
                      </td>
                      <td className="py-3 px-2 text-center">
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
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

export default UserTransactions;
