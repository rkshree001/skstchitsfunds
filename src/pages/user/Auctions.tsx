import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Gavel, Trophy, Clock, TrendingDown, Users, IndianRupee } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Auctions = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [bidAmount, setBidAmount] = useState("");

  const upcomingAuction = {
    chitId: "CHT000001",
    chitName: "1-Year Premium Chit",
    totalAmount: 100000,
    auctionDate: "25 Jan 2025",
    timeLeft: "5 days",
    participants: 45,
    minBid: 90000,
    maxBid: 99000,
  };

  const auctionHistory = [
    { month: "Dec 2024", winner: "You", bidAmount: 95000, dividend: 5000, status: "won" },
    { month: "Nov 2024", winner: "Rajesh Kumar", bidAmount: 93000, dividend: 7000, status: "lost" },
    { month: "Oct 2024", winner: "Priya Sharma", bidAmount: 94500, dividend: 5500, status: "lost" },
    { month: "Sep 2024", winner: "Amit Patel", bidAmount: 92000, dividend: 8000, status: "lost" },
    { month: "Aug 2024", winner: "You", bidAmount: 91500, dividend: 8500, status: "won" },
  ];

  const handlePlaceBid = () => {
    const amount = parseInt(bidAmount);
    if (!amount || amount < upcomingAuction.minBid || amount > upcomingAuction.maxBid) {
      toast({
        title: "Invalid Bid Amount",
        description: `Please enter an amount between ₹${upcomingAuction.minBid.toLocaleString()} and ₹${upcomingAuction.maxBid.toLocaleString()}`,
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Bid Placed Successfully!",
      description: `Your bid of ₹${amount.toLocaleString()} has been recorded for the upcoming auction.`,
    });
    setBidAmount("");
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
            <h1 className="text-2xl font-bold">Chit Auctions</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Auction Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="shadow-soft">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardDescription>Total Auctions</CardDescription>
                <Gavel className="h-4 w-4 text-muted-foreground" />
              </div>
              <CardTitle className="text-3xl">12</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">Since enrollment</p>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardDescription>Auctions Won</CardDescription>
                <Trophy className="h-4 w-4 text-warning" />
              </div>
              <CardTitle className="text-3xl text-success">2</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-success">16.7% win rate</p>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardDescription>Total Dividends</CardDescription>
                <IndianRupee className="h-4 w-4 text-muted-foreground" />
              </div>
              <CardTitle className="text-3xl">₹13.5K</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-success">From won auctions</p>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardDescription>Next Auction</CardDescription>
                <Clock className="h-4 w-4 text-warning" />
              </div>
              <CardTitle className="text-3xl">5 days</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-warning">25 Jan 2025</p>
            </CardContent>
          </Card>
        </div>

        {/* Upcoming Auction */}
        <Card className="shadow-medium mb-8 border-2 border-primary/20">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Gavel className="h-6 w-6 text-primary" />
                  Upcoming Auction
                </CardTitle>
                <CardDescription>{upcomingAuction.chitName}</CardDescription>
              </div>
              <Badge variant="default" className="bg-warning">
                <Clock className="h-3 w-3 mr-1" />
                {upcomingAuction.timeLeft} left
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Auction Info */}
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center p-4 rounded-lg bg-muted/50">
                <p className="text-sm text-muted-foreground mb-1">Chit Amount</p>
                <p className="text-xl font-bold">₹{upcomingAuction.totalAmount.toLocaleString()}</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-muted/50">
                <p className="text-sm text-muted-foreground mb-1">Auction Date</p>
                <p className="text-xl font-bold">{upcomingAuction.auctionDate}</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-muted/50">
                <p className="text-sm text-muted-foreground mb-1">Participants</p>
                <p className="text-xl font-bold flex items-center justify-center gap-1">
                  <Users className="h-5 w-5" />
                  {upcomingAuction.participants}
                </p>
              </div>
              <div className="text-center p-4 rounded-lg bg-muted/50">
                <p className="text-sm text-muted-foreground mb-1">Bid Range</p>
                <p className="text-lg font-bold">₹{(upcomingAuction.minBid / 1000).toFixed(0)}K - ₹{(upcomingAuction.maxBid / 1000).toFixed(0)}K</p>
              </div>
            </div>

            {/* Place Bid */}
            <div className="p-6 rounded-lg border-2 border-dashed border-primary/30 bg-primary/5">
              <h3 className="text-lg font-semibold mb-4">Place Your Bid</h3>
              <div className="flex gap-4">
                <div className="flex-1">
                  <Input
                    type="number"
                    placeholder={`Enter amount (₹${upcomingAuction.minBid.toLocaleString()} - ₹${upcomingAuction.maxBid.toLocaleString()})`}
                    value={bidAmount}
                    onChange={(e) => setBidAmount(e.target.value)}
                    className="text-lg"
                  />
                </div>
                <Button onClick={handlePlaceBid} size="lg" className="px-8">
                  <TrendingDown className="h-4 w-4 mr-2" />
                  Place Bid
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                * Lower bids have higher chances of winning. Bid strategically to maximize your dividend share.
              </p>
            </div>

            {/* How Auctions Work */}
            <div className="p-4 rounded-lg bg-muted/50">
              <h4 className="font-semibold mb-2">How Chit Auctions Work</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Each month, all members bid for the chit amount</li>
                <li>• The lowest bidder wins the auction and receives the chit amount</li>
                <li>• The difference between chit amount and winning bid is distributed as dividend among all members</li>
                <li>• Example: If someone bids ₹95,000 for a ₹1,00,000 chit, ₹5,000 is divided among 50 members = ₹100 per member</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Auction History */}
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle>Auction History</CardTitle>
            <CardDescription>Past auction results and dividends</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-2">Month</th>
                    <th className="text-left py-3 px-2">Winner</th>
                    <th className="text-right py-3 px-2">Winning Bid</th>
                    <th className="text-right py-3 px-2">Your Dividend</th>
                    <th className="text-center py-3 px-2">Result</th>
                  </tr>
                </thead>
                <tbody>
                  {auctionHistory.map((auction, idx) => (
                    <tr key={idx} className="border-b last:border-0 hover:bg-muted/50 transition-colors">
                      <td className="py-3 px-2 text-sm font-medium">{auction.month}</td>
                      <td className="py-3 px-2 text-sm">
                        {auction.winner === "You" ? (
                          <span className="font-semibold text-success">You</span>
                        ) : (
                          auction.winner
                        )}
                      </td>
                      <td className="py-3 px-2 text-sm text-right font-medium">₹{auction.bidAmount.toLocaleString()}</td>
                      <td className="py-3 px-2 text-sm text-right font-medium text-success">+₹{auction.dividend.toLocaleString()}</td>
                      <td className="py-3 px-2 text-center">
                        <Badge variant={auction.status === "won" ? "default" : "secondary"} className={auction.status === "won" ? "bg-success" : ""}>
                          {auction.status === "won" ? (
                            <>
                              <Trophy className="h-3 w-3 mr-1" />
                              Won
                            </>
                          ) : (
                            "Participated"
                          )}
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

export default Auctions;
