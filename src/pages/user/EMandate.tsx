import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CreditCard, Building2, Check, AlertCircle, Calendar, Bell } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const EMandate = () => {
  const { toast } = useToast();
  const [autoPayEnabled, setAutoPayEnabled] = useState(false);

  const linkedAccounts = [
    {
      id: 1,
      bank: "HDFC Bank",
      accountNumber: "****4567",
      type: "Savings",
      status: "Active",
      mandateId: "MND-2024-001",
      maxAmount: "₹50,000",
    },
    {
      id: 2,
      bank: "ICICI Bank",
      accountNumber: "****8901",
      type: "Current",
      status: "Active",
      mandateId: "MND-2024-002",
      maxAmount: "₹1,00,000",
    },
  ];

  const upcomingPayments = [
    { chit: "Premium Gold Plan", amount: "₹10,000", date: "15 Nov 2025", status: "Scheduled" },
    { chit: "Silver Saver Plan", amount: "₹8,333", date: "20 Nov 2025", status: "Scheduled" },
  ];

  const handleSetupMandate = () => {
    toast({
      title: "E-Mandate Setup Initiated",
      description: "You will be redirected to your bank's portal for authorization.",
    });
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">E-Mandate & Auto-Debit</h1>
        <p className="text-muted-foreground">Set up automatic payments for hassle-free chit fund installments</p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-blue-100 rounded-lg">
                <CreditCard className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">2</div>
                <p className="text-sm text-muted-foreground">Active Mandates</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-green-100 rounded-lg">
                <Check className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">₹18,333</div>
                <p className="text-sm text-muted-foreground">Monthly Auto-Debit</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Calendar className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">2</div>
                <p className="text-sm text-muted-foreground">Upcoming Payments</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Setup New E-Mandate</CardTitle>
          <CardDescription>Link your bank account for automatic payment deductions</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Bank Name</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select your bank" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="hdfc">HDFC Bank</SelectItem>
                  <SelectItem value="icici">ICICI Bank</SelectItem>
                  <SelectItem value="sbi">State Bank of India</SelectItem>
                  <SelectItem value="axis">Axis Bank</SelectItem>
                  <SelectItem value="kotak">Kotak Mahindra Bank</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Account Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select account type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="savings">Savings Account</SelectItem>
                  <SelectItem value="current">Current Account</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Account Number</Label>
              <Input type="text" placeholder="Enter account number" />
            </div>
            <div className="space-y-2">
              <Label>IFSC Code</Label>
              <Input type="text" placeholder="Enter IFSC code" />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Maximum Debit Amount</Label>
            <Input type="number" placeholder="Enter maximum amount per transaction" />
            <p className="text-xs text-muted-foreground">This is the maximum amount that can be debited per transaction</p>
          </div>
          <Button onClick={handleSetupMandate} className="w-full">
            <Building2 className="h-4 w-4 mr-2" />
            Setup E-Mandate
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Linked Bank Accounts</CardTitle>
          <CardDescription>Manage your linked accounts and mandates</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {linkedAccounts.map((account) => (
              <div key={account.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Building2 className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{account.bank}</h3>
                    <p className="text-sm text-muted-foreground">
                      {account.accountNumber} • {account.type}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">Max Amount: {account.maxAmount}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Badge variant="outline" className="bg-green-50 text-green-700">
                    {account.status}
                  </Badge>
                  <Button variant="outline" size="sm">Manage</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Payment Reminders</CardTitle>
          <CardDescription>Configure automatic payment alerts</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center gap-3">
              <Bell className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="font-medium">Auto-Pay Enabled</p>
                <p className="text-sm text-muted-foreground">Automatically deduct payments on due date</p>
              </div>
            </div>
            <Switch checked={autoPayEnabled} onCheckedChange={setAutoPayEnabled} />
          </div>
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center gap-3">
              <Bell className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="font-medium">3-Day Reminder</p>
                <p className="text-sm text-muted-foreground">Get notified 3 days before payment due date</p>
              </div>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center gap-3">
              <Bell className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="font-medium">Payment Success Alert</p>
                <p className="text-sm text-muted-foreground">Confirmation when payment is successful</p>
              </div>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Upcoming Auto-Debits</CardTitle>
          <CardDescription>Scheduled payments for this month</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {upcomingPayments.map((payment, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <p className="font-medium">{payment.chit}</p>
                  <p className="text-sm text-muted-foreground">{payment.date}</p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="text-lg font-bold">{payment.amount}</p>
                  <Badge variant="outline">{payment.status}</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <h4 className="font-semibold mb-1">Important Information</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• E-Mandate requires one-time authentication through net banking</li>
                <li>• You can modify or cancel mandates anytime</li>
                <li>• Auto-debit will be attempted on the scheduled date</li>
                <li>• Failed transactions will be notified immediately</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EMandate;
