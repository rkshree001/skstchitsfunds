import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bot, Send, X, Loader2, Sparkles } from "lucide-react";
import { streamChatMessage, ChatMessage } from "@/lib/gemini";
import { toast } from "sonner";

interface AIAssistantChatProps {
  portalType?: "user" | "admin" | "sadmin" | "support";
}

export default function AIAssistantChat({ portalType = "user" }: AIAssistantChatProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content: `Hello! I'm your AI assistant for the ${portalType} portal. How can I help you today?`,
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = inputMessage.trim();
    setInputMessage("");

    const newMessages: ChatMessage[] = [
      ...messages,
      { role: "user", content: userMessage },
    ];
    setMessages(newMessages);
    setIsLoading(true);

    let assistantContent = "";
    const updateAssistantMessage = (chunk: string) => {
      assistantContent += chunk;
      setMessages([...newMessages, { role: "assistant", content: assistantContent }]);
    };

    streamChatMessage(
      newMessages,
      portalType,
      updateAssistantMessage,
      () => setIsLoading(false),
      (error) => {
        toast.error(error);
        setIsLoading(false);
      }
    );
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 bg-gradient-to-br from-primary via-primary to-secondary hover:scale-105 z-50 animate-in fade-in slide-in-from-bottom-4"
        size="icon"
      >
        <Sparkles className="h-7 w-7 animate-pulse text-white" />
      </Button>
    );
  }

  return (
    <Card className="fixed bottom-6 right-6 w-96 h-[600px] shadow-2xl z-50 flex flex-col border-2 border-primary/30 overflow-hidden animate-in fade-in slide-in-from-bottom-8 backdrop-blur-sm">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 pt-4 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground">
        <CardTitle className="text-lg font-bold flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-white/30 to-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20">
            <Bot className="h-6 w-6 text-white" />
          </div>
          <span className="text-white">AI Assistant</span>
        </CardTitle>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(false)}
          className="hover:bg-white/20 text-white h-8 w-8 rounded-full transition-all"
        >
          <X className="h-5 w-5" />
        </Button>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col p-0 gap-0 bg-background/50 backdrop-blur-sm">
        <ScrollArea className="flex-1 p-4" ref={scrollRef}>
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                } animate-in fade-in slide-in-from-bottom-2`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 shadow-lg transition-all ${
                    message.role === "user"
                      ? "bg-gradient-to-br from-primary to-primary/90 text-white rounded-br-sm"
                      : "bg-card text-card-foreground rounded-bl-sm border-2 border-border"
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start animate-in fade-in">
                <div className="bg-card rounded-2xl rounded-bl-sm px-4 py-3 border-2 border-border shadow-lg">
                  <div className="flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin text-primary" />
                    <span className="text-sm text-muted-foreground font-medium">Thinking...</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
        <div className="p-4 border-t-2 bg-card/80 backdrop-blur-sm">
          <div className="flex gap-2">
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything..."
              disabled={isLoading}
              className="flex-1 rounded-full border-2 focus:border-primary transition-all bg-background/50 backdrop-blur-sm h-11 px-5"
            />
            <Button
              onClick={handleSendMessage}
              size="icon"
              disabled={isLoading || !inputMessage.trim()}
              className="rounded-full h-11 w-11 bg-gradient-to-br from-primary to-primary/90 hover:from-primary/90 hover:to-primary transition-all shadow-lg disabled:opacity-50"
            >
              <Send className="h-5 w-5 text-white" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
