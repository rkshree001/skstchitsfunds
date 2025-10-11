import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Wallet, ArrowUpRight, ArrowDownLeft, CreditCard, Smartphone, RefreshCw, TrendingUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const DigitalWallet = () => {
  const { toast } = useToast();
  const [balance] = useState(15000);

  const transactions = [
    { id: 1, type: "credit", amount: 5000, description: "Wallet Top-up via UPI", date: "2025-11-10", status: "Success" },
    { id: 2, type: "debit", amount: 10000, description: "Payment for Premium Gold Plan", date: "2025-11-09", status: "Success" },
    { id: 3, type: "credit", amount: 20000, description: "Refund - Silver Plan", date: "2025-11-08", status: "Success" },
    { id: 4, type: "debit", amount: 8333, description: "Payment for Silver Saver Plan", date: "2025-11-07", status: "Success" },
  ];

  const handleTopUp = () => {
    toast({
      title: "Redirecting to Payment Gateway",
      description: "You will be redirected to complete your wallet top-up.",
    });
  };

  const handleWithdraw = () => {
    toast({
      title: "Withdrawal Request Initiated",
      description: "Your funds will be transferred to your bank account within 2-3 business days.",
    });
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Digital Wallet</h1>
        <p className="text-muted-foreground">Manage your wallet balance and transactions</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="md:col-span-2 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-white/20 rounded-full">
                  <Wallet className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm opacity-90">Available Balance</p>
                  <h2 className="text-4xl font-bold">₹{balance.toLocaleString()}</h2>
                </div>
              </div>
              <Button variant="secondary" size="sm">
                <RefreshCw className="h-4 w-4 mr-2" />
                Refresh
              </Button>
            </div>
            <div className="flex gap-3 mt-6">
              <Button className="flex-1 bg-white text-blue-600 hover:bg-white/90" onClick={handleTopUp}>
                <ArrowDownLeft className="h-4 w-4 mr-2" />
                Add Money
              </Button>
              <Button className="flex-1 bg-white/20 hover:bg-white/30" onClick={handleWithdraw}>
                <ArrowUpRight className="h-4 w-4 mr-2" />
                Withdraw
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="text-xs text-muted-foreground">This Month</p>
                    <p className="font-semibold">₹25,000</p>
                  </div>
                </div>
                <Badge variant="outline" className="bg-green-100 text-green-700">+25%</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                <div className="flex items-center gap-2">
                  <ArrowUpRight className="h-5 w-5 text-orange-600" />
                  <div>
                    <p className="text-xs text-muted-foreground">Spent</p>
                    <p className="font-semibold">₹18,333</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="topup" className="space-y-4">
        <TabsList>
          <TabsTrigger value="topup">Top-up Wallet</TabsTrigger>
          <TabsTrigger value="withdraw">Withdraw Funds</TabsTrigger>
          <TabsTrigger value="transactions">Transaction History</TabsTrigger>
        </TabsList>

        <TabsContent value="topup" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Add Money to Wallet</CardTitle>
              <CardDescription>Choose your preferred payment method</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Enter Amount</Label>
                <Input type="number" placeholder="₹ Enter amount" />
              </div>
              
              <div className="space-y-3">
                <Label>Payment Method</Label>
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="h-20 flex flex-col gap-2">
                    <Smartphone className="h-6 w-6" />
                    <span className="text-sm">UPI</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col gap-2">
                    <CreditCard className="h-6 w-6" />
                    <span className="text-sm">Debit/Credit Card</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col gap-2">
                    <Wallet className="h-6 w-6" />
                    <span className="text-sm">Net Banking</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex flex-col gap-2">
                    <Smartphone className="h-6 w-6" />
                    <span className="text-sm">Digital Wallets</span>
                  </Button>
                </div>
              </div>

              <Button className="w-full" size="lg" onClick={handleTopUp}>
                Proceed to Payment
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="withdraw" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Withdraw to Bank Account</CardTitle>
              <CardDescription>Transfer funds from your wallet to your bank account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-sm font-medium mb-2">Available Balance</p>
                <p className="text-2xl font-bold">₹{balance.toLocaleString()}</p>
              </div>

              <div className="space-y-2">
                <Label>Withdrawal Amount</Label>
                <Input type="number" placeholder="₹ Enter amount" max={balance} />
              </div>

              <div className="space-y-2">
                <Label>Bank Account</Label>
                <select className="w-full p-2 border rounded-md">
                  <option>HDFC Bank - ****4567</option>
                  <option>ICICI Bank - ****8901</option>
                </select>
              </div>

              <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg text-sm">
                <p className="font-medium mb-1">Processing Time</p>
                <p className="text-muted-foreground">Withdrawals are processed within 2-3 business days</p>
              </div>

              <Button className="w-full" size="lg" onClick={handleWithdraw}>
                Request Withdrawal
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="transactions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Transaction History</CardTitle>
              <CardDescription>View all your wallet transactions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {transactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className={`p-2 rounded-lg ${transaction.type === 'credit' ? 'bg-green-100' : 'bg-orange-100'}`}>
                        {transaction.type === 'credit' ? (
                          <ArrowDownLeft className="h-5 w-5 text-green-600" />
                        ) : (
                          <ArrowUpRight className="h-5 w-5 text-orange-600" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium">{transaction.description}</p>
                        <p className="text-sm text-muted-foreground">{transaction.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`text-lg font-bold ${transaction.type === 'credit' ? 'text-green-600' : 'text-orange-600'}`}>
                        {transaction.type === 'credit' ? '+' : '-'}₹{transaction.amount.toLocaleString()}
                      </p>
                      <Badge variant="outline" className="bg-green-50 text-green-700">{transaction.status}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DigitalWallet;
