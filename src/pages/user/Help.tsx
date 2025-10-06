import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, HelpCircle, BookOpen, MessageCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Help = () => {
  const navigate = useNavigate();

  const faqs = [
    {
      question: "How do I enroll in a chit fund?",
      answer: "To enroll in a chit fund, go to your dashboard and click on 'Enroll New Chit'. Choose your preferred plan, complete the KYC verification, and make your first payment.",
    },
    {
      question: "When are auctions held?",
      answer: "Auctions are held monthly, typically between the 1st and 5th of each month. You'll receive notifications when the auction period begins.",
    },
    {
      question: "How do I participate in an auction?",
      answer: "During the auction period, go to the Auctions page and enter your bid amount. The member with the lowest bid wins that month's chit amount.",
    },
    {
      question: "What is a dividend?",
      answer: "A dividend is your share of the winning bid amount. If the winner bids ₹8,000 and there are 20 members, each member receives ₹400 as dividend.",
    },
    {
      question: "How do I make payments?",
      answer: "Go to the Payments page, select your chit plan, enter the amount, and choose your payment method (Card/UPI). Payments are processed securely.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button onClick={() => navigate("/user/dashboard")} variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <h1 className="text-2xl font-bold">Help Center</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <Card className="cursor-pointer hover:border-primary transition-colors">
            <CardHeader>
              <BookOpen className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Documentation</CardTitle>
              <CardDescription>Complete guide to using the platform</CardDescription>
            </CardHeader>
          </Card>
          <Card className="cursor-pointer hover:border-primary transition-colors">
            <CardHeader>
              <MessageCircle className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Contact Support</CardTitle>
              <CardDescription>Get help from our support team</CardDescription>
            </CardHeader>
          </Card>
          <Card className="cursor-pointer hover:border-primary transition-colors">
            <CardHeader>
              <HelpCircle className="h-8 w-8 text-primary mb-2" />
              <CardTitle>FAQs</CardTitle>
              <CardDescription>Answers to common questions</CardDescription>
            </CardHeader>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
            <CardDescription>Find answers to common questions</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Help;
