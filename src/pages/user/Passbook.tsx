import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Download, FileText, Calendar, TrendingUp, TrendingDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Passbook = () => {
  const navigate = useNavigate();

  const transactions = [
    { id: "TXN001", date: "2024-12-15", type: "Debit", description: "Monthly Premium - CHT000001", amount: -10000, balance: 90000, status: "Success" },
    { id: "TXN002", date: "2024-12-10", type: "Credit", description: "Dividend Share - Auction Month 6", amount: 500, balance: 100000, status: "Success" },
    { id: "TXN003", date: "2024-11-15", type: "Debit", description: "Monthly Premium - CHT000001", amount: -10000, balance: 99500, status: "Success" },
    { id: "TXN004", date: "2024-11-10", type: "Credit", description: "Dividend Share - Auction Month 5", amount: 450, balance: 109500, status: "Success" },
    { id: "TXN005", date: "2024-10-20", type: "Credit", description: "Referral Bonus", amount: 1000, balance: 109050, status: "Success" },
    { id: "TXN006", date: "2024-10-15", type: "Debit", description: "Monthly Premium - CHT000001", amount: -10000, balance: 108050, status: "Success" },
    { id: "TXN007", date: "2024-10-10", type: "Credit", description: "Dividend Share - Auction Month 4", amount: 480, balance: 118050, status: "Success" },
    { id: "TXN008", date: "2024-09-15", type: "Debit", description: "Monthly Premium - CHT000001", amount: -10000, balance: 117570, status: "Success" },
    { id: "TXN009", date: "2024-09-10", type: "Credit", description: "Dividend Share - Auction Month 3", amount: 520, balance: 127570, status: "Success" },
    { id: "TXN010", date: "2024-08-15", type: "Debit", description: "Initial Enrollment - CHT000001", amount: -10000, balance: 127050, status: "Success" },
  ];

  const summary = {
    totalDebits: transactions.filter(t => t.type === "Debit").reduce((sum, t) => sum + Math.abs(t.amount), 0),
    totalCredits: transactions.filter(t => t.type === "Credit").reduce((sum, t) => sum + t.amount, 0),
    currentBalance: transactions[0].balance,
    transactionCount: transactions.length
  };

  const handleDownload = () => {
    alert("Downloading digital passbook PDF...");
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button onClick={() => navigate("/user/home")} variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
              <h1 className="text-2xl font-bold">Digital Passbook</h1>
            </div>
            <Button onClick={handleDownload}>
              <Download className="h-4 w-4 mr-2" />
              Download PDF
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 space-y-6">
        {/* Summary Cards */}
        <div className="grid md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Current Balance</CardDescription>
              <CardTitle className="text-3xl">₹{summary.currentBalance.toLocaleString()}</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Total Credits</CardDescription>
              <CardTitle className="text-3xl text-green-500">₹{summary.totalCredits.toLocaleString()}</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Total Debits</CardDescription>
              <CardTitle className="text-3xl text-red-500">₹{summary.totalDebits.toLocaleString()}</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Total Transactions</CardDescription>
              <CardTitle className="text-3xl">{summary.transactionCount}</CardTitle>
            </CardHeader>
          </Card>
        </div>

        {/* Passbook Statement */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Transaction History
            </CardTitle>
            <CardDescription>Complete record of all your transactions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {transactions.map((txn) => (
                <div
                  key={txn.id}
                  className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg ${txn.type === "Credit" ? "bg-green-500/10" : "bg-red-500/10"}`}>
                      {txn.type === "Credit" ? (
                        <TrendingUp className="h-5 w-5 text-green-500" />
                      ) : (
                        <TrendingDown className="h-5 w-5 text-red-500" />
                      )}
                    </div>
                    <div>
                      <div className="font-medium">{txn.description}</div>
                      <div className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                        <Calendar className="h-3 w-3" />
                        {txn.date} • {txn.id}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`font-bold text-lg ${txn.type === "Credit" ? "text-green-500" : "text-red-500"}`}>
                      {txn.type === "Credit" ? "+" : ""}₹{Math.abs(txn.amount).toLocaleString()}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Bal: ₹{txn.balance.toLocaleString()}
                    </div>
                    <Badge variant="outline" className="mt-1">{txn.status}</Badge>
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

export default Passbook;
