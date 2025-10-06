import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Download, TrendingUp, TrendingDown } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Ledger = () => {
  const navigate = useNavigate();

  const transactions = [
    { id: 1, date: "2024-12-15", type: "Credit", description: "Monthly Premium", amount: -10000, balance: 90000 },
    { id: 2, date: "2024-11-15", type: "Credit", description: "Monthly Premium", amount: -10000, balance: 100000 },
    { id: 3, date: "2024-10-20", type: "Debit", description: "Dividend Share", amount: 500, balance: 110000 },
    { id: 4, date: "2024-10-15", type: "Credit", description: "Monthly Premium", amount: -10000, balance: 109500 },
    { id: 5, date: "2024-09-15", type: "Credit", description: "Monthly Premium", amount: -10000, balance: 119500 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button onClick={() => navigate("/user/dashboard")} variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
              <h1 className="text-2xl font-bold">Account Ledger</h1>
            </div>
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Total Debits</CardDescription>
              <CardTitle className="text-3xl text-success">₹500</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Total Credits</CardDescription>
              <CardTitle className="text-3xl text-destructive">₹40,000</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Current Balance</CardDescription>
              <CardTitle className="text-3xl">₹90,000</CardTitle>
            </CardHeader>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Transaction History</CardTitle>
            <CardDescription>Detailed account ledger with all transactions</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                  <TableHead className="text-right">Balance</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((txn) => (
                  <TableRow key={txn.id}>
                    <TableCell>{txn.date}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {txn.type === "Debit" ? (
                          <TrendingUp className="h-4 w-4 text-success" />
                        ) : (
                          <TrendingDown className="h-4 w-4 text-destructive" />
                        )}
                        {txn.type}
                      </div>
                    </TableCell>
                    <TableCell>{txn.description}</TableCell>
                    <TableCell className={`text-right ${txn.amount > 0 ? "text-success" : "text-destructive"}`}>
                      {txn.amount > 0 ? "+" : ""}₹{Math.abs(txn.amount).toLocaleString()}
                    </TableCell>
                    <TableCell className="text-right font-semibold">₹{txn.balance.toLocaleString()}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Ledger;
