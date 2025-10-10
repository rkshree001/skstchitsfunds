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
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  TrendingUp,
  Trophy,
  Users,
  Calendar,
  CheckCircle,
  Clock,
  Search,
  X,
  Bell,
  Eye,
  Download,
  Grid3x3,
  List,
} from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const EnhancedAuctions = () => {
  const [viewMode, setViewMode] = useState<"table" | "grid">("table");

  const stats = [
    { label: "Total Auctions", value: "24", change: "+12% vs last month", icon: Trophy, color: "bg-blue-100 text-blue-600" },
    { label: "Live Auctions", value: "3", icon: Clock, color: "bg-green-100 text-green-600" },
    { label: "Won Auctions", value: "5", change: "+5 vs last month", icon: CheckCircle, color: "bg-purple-100 text-purple-600" },
    { label: "Total Winnings", value: "₹2,85,000", change: "+45% vs last month", icon: TrendingUp, color: "bg-orange-100 text-orange-600" },
  ];

  const liveAuctions = [
    {
      plan: "Premium Gold Plan",
      auctionId: "#PGP-2024-09",
      duration: "20 months",
      monthlyPayment: "₹10,000/month",
      amount: "₹2,00,000",
      currentBid: "₹45,000",
      minIncrement: "₹1,000",
      participants: 18,
      status: "Live",
      endsIn: "Ended left",
    },
    {
      plan: "Silver Saver Plan",
      auctionId: "#SSP-2024-12",
      duration: "18 months",
      monthlyPayment: "₹10,000/month",
      amount: "₹1,50,000",
      currentBid: "₹32,000",
      minIncrement: "₹500",
      participants: 15,
      status: "Live",
      endsIn: "Ended left",
    },
  ];

  const upcomingAuctions = [
    {
      plan: "Diamond Elite Plan",
      auctionId: "#DEP-2024-09",
      duration: "25 months",
      monthlyPayment: "₹20,000/month",
      amount: "₹5,00,000",
      currentBid: "₹68,000",
      minIncrement: "₹2,000",
      participants: 25,
      status: "Upcoming",
      startsAt: "2:00 PM Today",
    },
  ];

  const endedAuctions = [
    {
      plan: "Platinum Plus Plan",
      auctionId: "#PPP-2024-10",
      duration: "18 months",
      monthlyPayment: "₹16,667/month",
      amount: "₹3,00,000",
      currentBid: "₹58,000",
      minIncrement: "₹1,500",
      participants: 20,
      status: "Ended",
      winner: "Priya Sharma",
      endedAt: "2025-10-08T12:00:00",
    },
    {
      plan: "Premium Gold Plan",
      auctionId: "#PGP-2024-08",
      duration: "20 months",
      monthlyPayment: "₹10,000/month",
      amount: "₹2,00,000",
      currentBid: "₹42,000",
      minIncrement: "₹1,000",
      participants: 18,
      status: "Ended",
      winner: "Rajesh Kumar",
      endedAt: "2025-10-05T00:00:00",
    },
  ];

  const wonAuctions = endedAuctions.filter((auction) => auction.winner === "Rajesh Kumar");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
        return "bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-400";
      case "Upcoming":
        return "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-400";
      case "Ended":
        return "bg-gray-100 text-gray-700 dark:bg-gray-950 dark:text-gray-400";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Chit Auction Management</h1>
          <p className="text-muted-foreground">
            Participate in live auctions and track your bidding history across all enrolled chit plans
          </p>
        </div>
        <div className="flex gap-2">
          <Tabs value={viewMode} onValueChange={(value: any) => setViewMode(value)}>
            <TabsList>
              <TabsTrigger value="table" className="flex items-center gap-2">
                <List className="h-4 w-4" />
                Table
              </TabsTrigger>
              <TabsTrigger value="grid" className="flex items-center gap-2">
                <Grid3x3 className="h-4 w-4" />
                Grid
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <Button variant="outline">
            <Calendar className="h-4 w-4 mr-2" />
            Auction Calendar
          </Button>
          <Button variant="default">
            <Bell className="h-4 w-4 mr-2" />
            Set Reminders
          </Button>
        </div>
      </div>

      {/* Winner Alert */}
      <Alert className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
        <CheckCircle className="h-4 w-4 text-green-600" />
        <AlertDescription className="text-green-900 dark:text-green-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold">🎉 Congratulations! You Won an Auction!</p>
              <p className="text-sm">You have successfully won the auction for Premium Gold Plan</p>
            </div>
            <div className="flex gap-2">
              <div className="text-right mr-4">
                <p className="text-sm">Auction Number</p>
                <p className="font-semibold">#PGP-2024-08</p>
              </div>
              <div className="text-right mr-4">
                <p className="text-sm">Your Winning Bid</p>
                <p className="font-semibold text-green-700 dark:text-green-400">₹42,000</p>
              </div>
              <div className="text-right mr-4">
                <p className="text-sm">Payout Amount</p>
                <p className="font-semibold text-green-700 dark:text-green-400">₹1,58,000</p>
              </div>
              <div className="flex gap-2">
                <Button size="sm">Make Payment</Button>
                <Button size="sm" variant="outline">Download Receipt</Button>
                <Button size="sm" variant="outline">Share News</Button>
              </div>
            </div>
          </div>
        </AlertDescription>
      </Alert>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-10 h-10 rounded-lg ${stat.color} flex items-center justify-center`}>
                <stat.icon className="h-5 w-5" />
              </div>
              {stat.change && (
                <Badge variant="outline" className="text-xs">
                  {stat.change}
                </Badge>
              )}
            </div>
            <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </Card>
        ))}
      </div>

      {/* Filters */}
      <Card className="p-6">
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search auctions..." className="pl-10" />
            </div>
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="live">Live</SelectItem>
              <SelectItem value="upcoming">Upcoming</SelectItem>
              <SelectItem value="ended">Ended</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Chit Plan" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Chit Plans</SelectItem>
              <SelectItem value="gold">Gold Plan</SelectItem>
              <SelectItem value="silver">Silver Plan</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Date Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Time</SelectItem>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm">
            <X className="h-4 w-4 mr-2" />
            Clear All
          </Button>
        </div>
      </Card>

      {/* Auctions Table */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <p className="text-sm text-muted-foreground">
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-1"></span>
              Last updated: Just now
            </p>
          </div>
          <p className="text-sm text-muted-foreground">Showing 5 of 5 auctions</p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="all">All Auctions</TabsTrigger>
            <TabsTrigger value="live" className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Live
            </TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="won">Won Auctions</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className="border rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>AUCTION DETAILS</TableHead>
                    <TableHead>AMOUNT & BID</TableHead>
                    <TableHead>STATUS & TIME</TableHead>
                    <TableHead>PARTICIPANTS</TableHead>
                    <TableHead>ACTIONS</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[...liveAuctions, ...upcomingAuctions].map((auction, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <div>
                          <p className="font-semibold">{auction.plan}</p>
                          <p className="text-xs text-muted-foreground">Auction {auction.auctionId}</p>
                          <p className="text-xs text-muted-foreground">{auction.duration} • {auction.monthlyPayment}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <p className="font-semibold">{auction.amount}</p>
                          <p className="text-sm">Current: {auction.currentBid}</p>
                          <p className="text-xs text-muted-foreground">Min increment: {auction.minIncrement}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <Badge className={getStatusColor(auction.status)}>{auction.status}</Badge>
                          <p className="text-xs text-muted-foreground mt-1">
                            {"endsIn" in auction ? auction.endsIn : "startsAt" in auction ? auction.startsAt : ""}
                          </p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">{auction.participants}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                            Details
                          </Button>
                          {auction.status === "Live" && (
                            <Button size="sm" variant="default">
                              <Trophy className="h-4 w-4 mr-2" />
                              Bid
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          <TabsContent value="live">
            <div className="border rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>AUCTION DETAILS</TableHead>
                    <TableHead>AMOUNT & BID</TableHead>
                    <TableHead>STATUS & TIME</TableHead>
                    <TableHead>PARTICIPANTS</TableHead>
                    <TableHead>ACTIONS</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {liveAuctions.map((auction, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <div>
                          <p className="font-semibold">{auction.plan}</p>
                          <p className="text-xs text-muted-foreground">Auction {auction.auctionId}</p>
                          <p className="text-xs text-muted-foreground">{auction.duration} • {auction.monthlyPayment}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <p className="font-semibold">{auction.amount}</p>
                          <p className="text-sm">Current: {auction.currentBid}</p>
                          <p className="text-xs text-muted-foreground">Min increment: {auction.minIncrement}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <Badge className={getStatusColor(auction.status)}>{auction.status}</Badge>
                          <p className="text-xs text-muted-foreground mt-1">{auction.endsIn}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">{auction.participants}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                            Details
                          </Button>
                          <Button size="sm" variant="default">
                            <Trophy className="h-4 w-4 mr-2" />
                            Bid
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          <TabsContent value="upcoming">
            <div className="border rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>AUCTION DETAILS</TableHead>
                    <TableHead>AMOUNT & BID</TableHead>
                    <TableHead>STATUS & TIME</TableHead>
                    <TableHead>PARTICIPANTS</TableHead>
                    <TableHead>ACTIONS</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {upcomingAuctions.map((auction, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <div>
                          <p className="font-semibold">{auction.plan}</p>
                          <p className="text-xs text-muted-foreground">Auction {auction.auctionId}</p>
                          <p className="text-xs text-muted-foreground">{auction.duration} • {auction.monthlyPayment}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <p className="font-semibold">{auction.amount}</p>
                          <p className="text-sm">Current: {auction.currentBid}</p>
                          <p className="text-xs text-muted-foreground">Min increment: {auction.minIncrement}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <Badge className={getStatusColor(auction.status)}>{auction.status}</Badge>
                          <p className="text-xs text-muted-foreground mt-1">Starts: {auction.startsAt}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium">{auction.participants}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                            Details
                          </Button>
                          <Button size="sm" variant="outline">
                            <Bell className="h-4 w-4 mr-2" />
                            Set Reminder
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          <TabsContent value="won">
            <div className="border rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>AUCTION DETAILS</TableHead>
                    <TableHead>AMOUNT & BID</TableHead>
                    <TableHead>STATUS & TIME</TableHead>
                    <TableHead>WINNER</TableHead>
                    <TableHead>ACTIONS</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {wonAuctions.map((auction, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <div>
                          <p className="font-semibold">{auction.plan}</p>
                          <p className="text-xs text-muted-foreground">Auction {auction.auctionId}</p>
                          <p className="text-xs text-muted-foreground">{auction.duration} • {auction.monthlyPayment}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <p className="font-semibold">{auction.amount}</p>
                          <p className="text-sm text-green-600">Winning Bid: {auction.currentBid}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <Badge className={getStatusColor(auction.status)}>{auction.status}</Badge>
                          <p className="text-xs text-muted-foreground mt-1">
                            Ended: {new Date(auction.endedAt).toLocaleDateString()}
                          </p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Trophy className="h-4 w-4 text-yellow-600" />
                          <span className="font-medium">{auction.winner}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4 mr-2" />
                            Receipt
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};

export default EnhancedAuctions;
