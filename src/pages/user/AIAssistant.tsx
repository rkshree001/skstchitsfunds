import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Bot, Send } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const AIAssistant = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hello! I'm your Chit Fund Assistant. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const quickQuestions = [
    "How does a 1-year chit work?",
    "What is dividend share?",
    "How to participate in auction?",
    "What are the payment options?",
  ];

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages([...messages, { role: "user", content: input }]);
    
    // Mock AI response
    setTimeout(() => {
      let response = "";
      if (input.toLowerCase().includes("1-year chit")) {
        response = "A 1-year chit fund works for 12 months. You pay a fixed monthly premium, and each month there's an auction where members bid. The winner receives the chit amount minus their bid. The bid amount is distributed among all members as dividends.";
      } else if (input.toLowerCase().includes("dividend")) {
        response = "Dividend share is the portion of the auction bid that gets distributed among all chit members. For example, if the winning bid is ₹8,000 and there are 20 members, each member receives ₹400 as dividend.";
      } else if (input.toLowerCase().includes("auction")) {
        response = "To participate in an auction, login to your dashboard during the auction period (usually 1st-5th of each month). Enter your bid amount - lower bids have better chances. The lowest bidder wins the chit amount for that month.";
      } else {
        response = "I understand your question. For detailed information, please contact our support team or refer to the Help Center. I'm here to provide general guidance about chit funds.";
      }
      setMessages(prev => [...prev, { role: "assistant", content: response }]);
    }, 1000);

    setInput("");
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
            <h1 className="text-2xl font-bold">AI Support Assistant</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Card className="h-[600px] flex flex-col">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bot className="h-5 w-5" />
              Chit Fund Assistant
            </CardTitle>
            <CardDescription>Ask me anything about chit funds and investments</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col">
            <ScrollArea className="flex-1 pr-4">
              <div className="space-y-4">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        msg.role === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted"
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            
            <div className="space-y-4 pt-4 border-t mt-4">
              <div className="flex flex-wrap gap-2">
                {quickQuestions.map((q, idx) => (
                  <Button
                    key={idx}
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setInput(q);
                      setTimeout(() => handleSend(), 100);
                    }}
                  >
                    {q}
                  </Button>
                ))}
              </div>
              <div className="flex gap-2">
                <Input
                  placeholder="Type your question..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                />
                <Button onClick={handleSend}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AIAssistant;
