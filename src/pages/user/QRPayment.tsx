import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { QrCode, Download, Share2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function QRPayment() {
  const [amount, setAmount] = useState("2000");
  const [chitId, setChitId] = useState("CHT001");

  const handleGenerateQR = () => {
    toast.success("QR Code generated successfully!");
  };

  return (
    <div className="container mx-auto p-6 max-w-4xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold">QR Payment Integration</h1>
        <p className="text-muted-foreground">Scan & Pay for quick chit fund payments</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Generate Payment QR</CardTitle>
            <CardDescription>Create a QR code for your chit payment</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="chitId">Chit ID</Label>
              <Input
                id="chitId"
                value={chitId}
                onChange={(e) => setChitId(e.target.value)}
                placeholder="Enter chit ID"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="amount">Payment Amount</Label>
              <Input
                id="amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
              />
            </div>
            <Button onClick={handleGenerateQR} className="w-full">
              <QrCode className="h-4 w-4 mr-2" />
              Generate QR Code
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Payment QR Code</CardTitle>
            <CardDescription>Scan this code to make payment</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-center bg-muted p-8 rounded-lg">
              <div className="bg-white p-4 rounded-lg">
                <QrCode className="h-48 w-48 text-foreground" />
              </div>
            </div>
            <div className="text-center space-y-1">
              <p className="font-semibold text-lg">₹{amount}</p>
              <p className="text-sm text-muted-foreground">Chit ID: {chitId}</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent QR Payments</CardTitle>
          <CardDescription>Your payment history via QR code</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { date: "2024-03-15", amount: "₹2,000", chitId: "CHT001", status: "Success" },
              { date: "2024-02-15", amount: "₹2,000", chitId: "CHT001", status: "Success" },
              { date: "2024-01-15", amount: "₹2,000", chitId: "CHT001", status: "Success" }
            ].map((payment, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-semibold">{payment.chitId}</p>
                  <p className="text-sm text-muted-foreground">{payment.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">{payment.amount}</p>
                  <p className="text-sm text-green-600">{payment.status}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
