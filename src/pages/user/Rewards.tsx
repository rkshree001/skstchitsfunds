import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Trophy, Star, Gift, TrendingUp, Award, Crown } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const Rewards = () => {
  const navigate = useNavigate();

  const userStats = {
    totalPoints: 2850,
    currentTier: "Gold",
    nextTier: "Platinum",
    pointsToNext: 1150,
    rank: 12
  };

  const leaderboard = [
    { rank: 1, name: "Rajesh Kumar", points: 8500, badge: "Platinum" },
    { rank: 2, name: "Priya Sharma", points: 7200, badge: "Platinum" },
    { rank: 3, name: "Amit Patel", points: 6800, badge: "Gold" },
    { rank: 4, name: "Sunita Reddy", points: 5900, badge: "Gold" },
    { rank: 5, name: "Vikram Singh", points: 5200, badge: "Gold" },
  ];

  const recentActivities = [
    { action: "Timely Payment", date: "2024-12-15", points: 100, type: "earned" },
    { action: "Referral Bonus", date: "2024-12-10", points: 500, type: "earned" },
    { action: "Gift Voucher Redeemed", date: "2024-12-05", points: -1000, type: "spent" },
    { action: "Auction Participation", date: "2024-12-01", points: 50, type: "earned" },
  ];

  const rewards = [
    { name: "₹500 Voucher", points: 1000, available: true },
    { name: "₹1000 Voucher", points: 2000, available: true },
    { name: "Extra Dividend 0.5%", points: 3000, available: false },
    { name: "₹5000 Voucher", points: 5000, available: false },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button onClick={() => navigate("/user/home")} variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <h1 className="text-2xl font-bold">Rewards & Loyalty Program</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 space-y-6">
        {/* User Stats */}
        <div className="grid md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Total Points</CardDescription>
              <CardTitle className="text-3xl flex items-center gap-2">
                <Star className="h-6 w-6 text-yellow-500" />
                {userStats.totalPoints}
              </CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Current Tier</CardDescription>
              <CardTitle className="text-3xl flex items-center gap-2">
                <Award className="h-6 w-6 text-yellow-600" />
                {userStats.currentTier}
              </CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Next Tier</CardDescription>
              <CardTitle className="text-xl flex items-center gap-2">
                <Crown className="h-5 w-5 text-purple-500" />
                {userStats.nextTier}
                <span className="text-sm text-muted-foreground">
                  ({userStats.pointsToNext} pts)
                </span>
              </CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Leaderboard Rank</CardDescription>
              <CardTitle className="text-3xl flex items-center gap-2">
                <Trophy className="h-6 w-6 text-orange-500" />
                #{userStats.rank}
              </CardTitle>
            </CardHeader>
          </Card>
        </div>

        {/* Progress to Next Tier */}
        <Card>
          <CardHeader>
            <CardTitle>Progress to {userStats.nextTier}</CardTitle>
            <CardDescription>Earn {userStats.pointsToNext} more points to unlock {userStats.nextTier} benefits</CardDescription>
          </CardHeader>
          <CardContent>
            <Progress value={(userStats.totalPoints / (userStats.totalPoints + userStats.pointsToNext)) * 100} className="h-3" />
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Leaderboard */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5" />
                Top Contributors
              </CardTitle>
              <CardDescription>Current month's leaderboard</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {leaderboard.map((user) => (
                  <div key={user.rank} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div className="flex items-center gap-3">
                      <div className={`font-bold text-lg ${user.rank <= 3 ? 'text-yellow-500' : ''}`}>
                        #{user.rank}
                      </div>
                      <div>
                        <div className="font-medium">{user.name}</div>
                        <Badge variant="outline" className="mt-1">{user.badge}</Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-primary">{user.points.toLocaleString()}</div>
                      <div className="text-xs text-muted-foreground">points</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Available Rewards */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Gift className="h-5 w-5" />
                Available Rewards
              </CardTitle>
              <CardDescription>Redeem your points for exclusive benefits</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {rewards.map((reward, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 rounded-lg border">
                    <div>
                      <div className="font-medium">{reward.name}</div>
                      <div className="text-sm text-muted-foreground">{reward.points} points</div>
                    </div>
                    <Button size="sm" disabled={!reward.available}>
                      {reward.available ? "Redeem" : "Locked"}
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Recent Activity
            </CardTitle>
            <CardDescription>Your points history</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentActivities.map((activity, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div>
                    <div className="font-medium">{activity.action}</div>
                    <div className="text-sm text-muted-foreground">{activity.date}</div>
                  </div>
                  <div className={`font-bold ${activity.type === 'earned' ? 'text-green-500' : 'text-red-500'}`}>
                    {activity.type === 'earned' ? '+' : ''}{activity.points} pts
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

export default Rewards;
