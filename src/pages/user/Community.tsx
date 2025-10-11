import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageSquare, ThumbsUp, MessageCircle, TrendingUp, Award, Users, Search } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Community = () => {
  const { toast } = useToast();

  const discussions = [
    {
      id: 1,
      title: "Best strategy for auction bidding?",
      author: "Priya Sharma",
      category: "Strategy",
      likes: 24,
      replies: 12,
      timeAgo: "2 hours ago",
      excerpt: "I'm new to chit funds and want to understand the best approach for bidding in auctions...",
    },
    {
      id: 2,
      title: "How to calculate actual returns on chit funds?",
      author: "Rajesh Kumar",
      category: "Finance",
      likes: 31,
      replies: 18,
      timeAgo: "5 hours ago",
      excerpt: "Can someone explain the ROI calculation considering all factors...",
    },
    {
      id: 3,
      title: "My experience with SKST Premium Plan",
      author: "Amit Patel",
      category: "Success Story",
      likes: 45,
      replies: 23,
      timeAgo: "1 day ago",
      excerpt: "Just completed my first chit cycle and wanted to share my experience...",
    },
  ];

  const successStories = [
    {
      id: 1,
      title: "How I saved ₹5 lakhs in 2 years",
      author: "Sneha Reddy",
      likes: 89,
      image: "💰",
      summary: "Joined multiple chit plans and maintained disciplined savings...",
    },
    {
      id: 2,
      title: "From debt to financial freedom",
      author: "Vikram Singh",
      likes: 67,
      image: "🎯",
      summary: "Used chit funds strategically to clear loans and build wealth...",
    },
  ];

  const categories = [
    { name: "Strategy", count: 45, color: "bg-blue-100 text-blue-700" },
    { name: "Finance", count: 38, color: "bg-green-100 text-green-700" },
    { name: "Success Stories", count: 52, color: "bg-purple-100 text-purple-700" },
    { name: "Q&A", count: 67, color: "bg-orange-100 text-orange-700" },
  ];

  const handlePostDiscussion = () => {
    toast({
      title: "Discussion Posted!",
      description: "Your post has been shared with the community.",
    });
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Community Forum</h1>
          <p className="text-muted-foreground">Connect, learn, and share experiences with fellow members</p>
        </div>
        <Button onClick={handlePostDiscussion}>
          <MessageSquare className="h-4 w-4 mr-2" />
          New Discussion
        </Button>
      </div>

      <div className="grid md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <Users className="h-8 w-8 text-blue-600" />
              <div>
                <div className="text-2xl font-bold">15,234</div>
                <p className="text-sm text-muted-foreground">Active Members</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <MessageCircle className="h-8 w-8 text-green-600" />
              <div>
                <div className="text-2xl font-bold">3,456</div>
                <p className="text-sm text-muted-foreground">Discussions</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <Award className="h-8 w-8 text-purple-600" />
              <div>
                <div className="text-2xl font-bold">892</div>
                <p className="text-sm text-muted-foreground">Success Stories</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <TrendingUp className="h-8 w-8 text-orange-600" />
              <div>
                <div className="text-2xl font-bold">234</div>
                <p className="text-sm text-muted-foreground">Trending Today</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex gap-4 items-center">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search discussions..." className="pl-10" />
        </div>
        <div className="flex gap-2">
          {categories.map((cat) => (
            <Badge key={cat.name} variant="outline" className={cat.color}>
              {cat.name} ({cat.count})
            </Badge>
          ))}
        </div>
      </div>

      <Tabs defaultValue="discussions" className="space-y-4">
        <TabsList>
          <TabsTrigger value="discussions">All Discussions</TabsTrigger>
          <TabsTrigger value="success">Success Stories</TabsTrigger>
          <TabsTrigger value="trending">Trending</TabsTrigger>
        </TabsList>

        <TabsContent value="discussions" className="space-y-4">
          {discussions.map((discussion) => (
            <Card key={discussion.id} className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <ThumbsUp className="h-4 w-4" />
                    </Button>
                    <span className="text-sm font-medium">{discussion.likes}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-lg">{discussion.title}</h3>
                      <Badge variant="outline">{discussion.category}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{discussion.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>by {discussion.author}</span>
                      <span>•</span>
                      <span>{discussion.timeAgo}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MessageCircle className="h-4 w-4" />
                        {discussion.replies} replies
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="success" className="space-y-4">
          {successStories.map((story) => (
            <Card key={story.id} className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <div className="text-6xl">{story.image}</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">{story.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{story.summary}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>by {story.author}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <ThumbsUp className="h-4 w-4" />
                        {story.likes} likes
                      </span>
                      <Button variant="link" className="p-0 h-auto">Read Full Story →</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="trending" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>🔥 Trending This Week</CardTitle>
              <CardDescription>Most popular discussions and stories</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Trending content will be displayed here...</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Start a New Discussion</CardTitle>
          <CardDescription>Share your thoughts, questions, or experiences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Input placeholder="Discussion title..." />
          </div>
          <div className="space-y-2">
            <Textarea placeholder="Share your thoughts..." rows={4} />
          </div>
          <div className="flex gap-2">
            <select className="p-2 border rounded-md">
              <option>Select Category</option>
              <option>Strategy</option>
              <option>Finance</option>
              <option>Success Story</option>
              <option>Q&A</option>
            </select>
            <Button onClick={handlePostDiscussion}>Post Discussion</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Community;
