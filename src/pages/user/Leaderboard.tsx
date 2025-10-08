import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Award, TrendingUp } from "lucide-react";

const leaderboardData = [
  { rank: 1, name: "Rajesh Kumar", points: 12500, streak: 24, icon: Trophy, color: "text-yellow-500" },
  { rank: 2, name: "Priya Sharma", points: 11800, streak: 22, icon: Medal, color: "text-gray-400" },
  { rank: 3, name: "Amit Patel", points: 10200, streak: 20, icon: Award, color: "text-orange-600" },
  { rank: 4, name: "Sneha Reddy", points: 9500, streak: 18, icon: TrendingUp, color: "text-blue-500" },
  { rank: 5, name: "Vikram Singh", points: 8900, streak: 16, icon: TrendingUp, color: "text-green-500" },
  { rank: 6, name: "Anita Desai", points: 8200, streak: 15, icon: TrendingUp, color: "text-purple-500" },
  { rank: 7, name: "Ravi Malhotra", points: 7800, streak: 14, icon: TrendingUp, color: "text-pink-500" },
  { rank: 8, name: "Meera Nair", points: 7200, streak: 12, icon: TrendingUp, color: "text-indigo-500" },
];

const currentUser = {
  rank: 15,
  name: "You",
  points: 5600,
  streak: 10
};

export default function Leaderboard() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Leaderboard</h1>
        <p className="text-muted-foreground">Top performers and your ranking</p>
      </div>

      <Card className="border-primary">
        <CardHeader>
          <CardTitle>Your Position</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between p-4 bg-primary/10 rounded-lg">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold">
                #{currentUser.rank}
              </div>
              <div>
                <p className="font-semibold text-lg">{currentUser.name}</p>
                <p className="text-sm text-muted-foreground">{currentUser.streak} month streak</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold">{currentUser.points.toLocaleString()}</p>
              <p className="text-sm text-muted-foreground">Loyalty Points</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Top Contributors</CardTitle>
          <CardDescription>Members with the highest loyalty points</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {leaderboardData.map((user) => {
              const Icon = user.icon;
              return (
                <div
                  key={user.rank}
                  className={`flex items-center justify-between p-4 rounded-lg border transition-all hover:shadow-md ${
                    user.rank <= 3 ? 'bg-secondary/50' : 'bg-background'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      {user.rank <= 3 && <Icon className={`h-5 w-5 ${user.color}`} />}
                      <span className="font-bold text-lg w-8">#{user.rank}</span>
                    </div>
                    <Avatar>
                      <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{user.name}</p>
                      <p className="text-sm text-muted-foreground">{user.streak} month streak</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg">{user.points.toLocaleString()}</p>
                    <p className="text-sm text-muted-foreground">points</p>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>How to Earn Points</CardTitle>
          <CardDescription>Ways to climb the leaderboard</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { action: "On-time Payment", points: "+100 points" },
              { action: "Refer a Friend", points: "+500 points" },
              { action: "Complete KYC", points: "+200 points" },
              { action: "Monthly Streak (30 days)", points: "+300 points" },
              { action: "Participate in Auction", points: "+150 points" },
              { action: "Provide Feedback", points: "+50 points" }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <span className="text-sm">{item.action}</span>
                <Badge variant="secondary">{item.points}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
