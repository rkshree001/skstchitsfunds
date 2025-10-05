import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Users, Gift, Copy, Share2, Mail, MessageSquare, Trophy, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Referrals = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const referralCode = "SKST-RAJ2024";
  const referralLink = `https://skstchitfunds.com/register?ref=${referralCode}`;

  const referralStats = {
    totalReferrals: 8,
    activeReferrals: 6,
    pendingReferrals: 2,
    totalEarnings: 4000,
    pendingEarnings: 1000,
  };

  const referralHistory = [
    { name: "Amit Patel", status: "active", joinedOn: "15 Dec 2024", reward: "₹500", plan: "1-Year Chit" },
    { name: "Priya Sharma", status: "active", joinedOn: "10 Dec 2024", reward: "₹500", plan: "2-Year Chit" },
    { name: "Vikram Singh", status: "pending", joinedOn: "20 Dec 2024", reward: "₹500", plan: "Pending KYC" },
    { name: "Sneha Desai", status: "active", joinedOn: "05 Dec 2024", reward: "₹500", plan: "6-Month Chit" },
    { name: "Rahul Verma", status: "pending", joinedOn: "22 Dec 2024", reward: "₹500", plan: "Pending Payment" },
    { name: "Anjali Mehta", status: "active", joinedOn: "01 Dec 2024", reward: "₹500", plan: "1-Year Chit" },
  ];

  const rewards = [
    { level: "Bronze", referrals: "1-5", bonus: "₹500 per referral" },
    { level: "Silver", referrals: "6-15", bonus: "₹600 per referral" },
    { level: "Gold", referrals: "16-30", bonus: "₹750 per referral" },
    { level: "Platinum", referrals: "31+", bonus: "₹1000 per referral" },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    toast({
      title: "Link Copied!",
      description: "Referral link copied to clipboard",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = (platform: string) => {
    toast({
      title: `Share on ${platform}`,
      description: `Opening ${platform} to share your referral link...`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button onClick={() => navigate("/user/dashboard")} variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <h1 className="text-2xl font-bold">Referral Program</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-5 gap-4 mb-8">
          <Card className="shadow-soft">
            <CardHeader className="pb-2">
              <CardDescription>Total Referrals</CardDescription>
              <CardTitle className="text-3xl">{referralStats.totalReferrals}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">{referralStats.activeReferrals} active</p>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader className="pb-2">
              <CardDescription>Active</CardDescription>
              <CardTitle className="text-3xl text-success">{referralStats.activeReferrals}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-success">Fully enrolled</p>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader className="pb-2">
              <CardDescription>Pending</CardDescription>
              <CardTitle className="text-3xl text-warning">{referralStats.pendingReferrals}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-warning">Completing KYC</p>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader className="pb-2">
              <CardDescription>Total Earned</CardDescription>
              <CardTitle className="text-3xl text-success">₹{referralStats.totalEarnings}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">Credited</p>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader className="pb-2">
              <CardDescription>Pending Rewards</CardDescription>
              <CardTitle className="text-3xl">₹{referralStats.pendingEarnings}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">In process</p>
            </CardContent>
          </Card>
        </div>

        {/* Referral Link Card */}
        <Card className="shadow-medium mb-8 border-2 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Gift className="h-6 w-6 text-primary" />
              Your Referral Link
            </CardTitle>
            <CardDescription>Share this link with friends and family to earn rewards</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Input value={referralLink} readOnly className="font-mono text-sm" />
              <Button onClick={handleCopy} variant="outline">
                {copied ? <CheckCircle className="h-4 w-4 text-success" /> : <Copy className="h-4 w-4" />}
              </Button>
            </div>

            <div className="flex gap-2">
              <Button onClick={() => handleShare("WhatsApp")} variant="outline" className="flex-1">
                <MessageSquare className="h-4 w-4 mr-2" />
                WhatsApp
              </Button>
              <Button onClick={() => handleShare("Email")} variant="outline" className="flex-1">
                <Mail className="h-4 w-4 mr-2" />
                Email
              </Button>
              <Button onClick={() => handleShare("SMS")} variant="outline" className="flex-1">
                <Share2 className="h-4 w-4 mr-2" />
                SMS
              </Button>
            </div>

            <div className="p-4 rounded-lg bg-muted/50">
              <h4 className="font-semibold mb-2">Referral Code</h4>
              <p className="text-2xl font-mono font-bold text-primary">{referralCode}</p>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Reward Tiers */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5" />
                Reward Tiers
              </CardTitle>
              <CardDescription>Earn more as you refer more members</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {rewards.map((reward, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-4 rounded-lg border bg-card hover:bg-muted/50 transition-colors"
                  >
                    <div>
                      <h4 className="font-semibold">{reward.level}</h4>
                      <p className="text-sm text-muted-foreground">{reward.referrals} referrals</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-success">{reward.bonus}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* How It Works */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle>How It Works</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-3">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold">Share Your Link</h4>
                  <p className="text-sm text-muted-foreground">Send your unique referral link to friends & family</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold">They Sign Up</h4>
                  <p className="text-sm text-muted-foreground">They register and complete KYC verification</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold">Enroll in Chit</h4>
                  <p className="text-sm text-muted-foreground">They enroll in any chit plan and make first payment</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-success/10 flex items-center justify-center text-success font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-success">You Earn Rewards!</h4>
                  <p className="text-sm text-muted-foreground">Get ₹500-₹1000 credited to your account</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Referral History */}
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle>Referral History</CardTitle>
            <CardDescription>Track your referred members and earnings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-2">Name</th>
                    <th className="text-left py-3 px-2">Joined On</th>
                    <th className="text-left py-3 px-2">Plan</th>
                    <th className="text-right py-3 px-2">Reward</th>
                    <th className="text-center py-3 px-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {referralHistory.map((referral, idx) => (
                    <tr key={idx} className="border-b last:border-0 hover:bg-muted/50 transition-colors">
                      <td className="py-3 px-2 text-sm font-medium">{referral.name}</td>
                      <td className="py-3 px-2 text-sm">{referral.joinedOn}</td>
                      <td className="py-3 px-2 text-sm">{referral.plan}</td>
                      <td className="py-3 px-2 text-sm text-right font-medium text-success">{referral.reward}</td>
                      <td className="py-3 px-2 text-center">
                        <Badge
                          variant={referral.status === "active" ? "default" : "secondary"}
                          className={referral.status === "active" ? "bg-success" : "bg-warning"}
                        >
                          {referral.status}
                        </Badge>
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

export default Referrals;
