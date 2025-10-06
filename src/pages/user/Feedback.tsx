import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Star, ThumbsUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Feedback = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  const reviews = [
    {
      id: 1,
      user: "Rajesh Kumar",
      rating: 5,
      comment: "Excellent chit fund management! Easy to track payments and auctions.",
      date: "2024-12-10",
    },
    {
      id: 2,
      user: "Priya Sharma",
      rating: 4,
      comment: "Good service. Could improve the mobile app experience.",
      date: "2024-12-08",
    },
    {
      id: 3,
      user: "Amit Patel",
      rating: 5,
      comment: "Very transparent process. Love the analytics dashboard.",
      date: "2024-12-05",
    },
  ];

  const handleSubmit = () => {
    if (rating === 0) {
      toast({
        title: "Please provide a rating",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Thank you for your feedback!",
      description: "Your review helps us improve our services.",
    });
    setRating(0);
    setFeedback("");
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button onClick={() => navigate("/user/dashboard")} variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <h1 className="text-2xl font-bold">Feedback & Reviews</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Share Your Experience</CardTitle>
              <CardDescription>Help us improve our services</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <p className="text-sm font-medium mb-2">Rate our service</p>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => setRating(star)}
                      className="transition-transform hover:scale-110"
                    >
                      <Star
                        className={`h-8 w-8 ${
                          star <= rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-medium mb-2">Your feedback</p>
                <Textarea
                  placeholder="Tell us about your experience..."
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  rows={5}
                />
              </div>
              <Button onClick={handleSubmit} className="w-full">
                <ThumbsUp className="h-4 w-4 mr-2" />
                Submit Feedback
              </Button>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Overall Rating</CardTitle>
                <CardDescription>Based on customer reviews</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <div className="text-5xl font-bold">4.8</div>
                  <div className="flex flex-col">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="h-5 w-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">Based on 234 reviews</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Recent Reviews</h3>
              {reviews.map((review) => (
                <Card key={review.id}>
                  <CardContent className="pt-6">
                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium">{review.user}</p>
                          <div className="flex gap-1 mt-1">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star
                                key={i}
                                className="h-4 w-4 fill-yellow-400 text-yellow-400"
                              />
                            ))}
                          </div>
                        </div>
                        <span className="text-sm text-muted-foreground">{review.date}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{review.comment}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
