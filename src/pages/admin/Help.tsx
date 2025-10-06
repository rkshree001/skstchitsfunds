import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, HelpCircle, BookOpen, MessageCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const AdminHelp = () => {
  const navigate = useNavigate();

  const faqs = [
    {
      question: "How do I add a new user?",
      answer: "Go to User Management, click 'Add User' button, fill in the user details and assign appropriate role.",
    },
    {
      question: "How do I track field collections?",
      answer: "Navigate to Field Tracking page to see real-time updates of all field staff and their collection status.",
    },
    {
      question: "How do I generate reports?",
      answer: "Go to the Downloads page to access pre-generated reports or use the Branch Performance page for custom analytics.",
    },
    {
      question: "How do I manage user roles?",
      answer: "Visit the Role Management page to view and modify user permissions (editing is currently disabled in demo mode).",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button onClick={() => navigate("/admin/dashboard")} variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <h1 className="text-2xl font-bold">Admin Help Center</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <Card className="cursor-pointer hover:border-primary transition-colors">
            <CardHeader>
              <BookOpen className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Admin Guide</CardTitle>
              <CardDescription>Complete admin documentation</CardDescription>
            </CardHeader>
          </Card>
          <Card className="cursor-pointer hover:border-primary transition-colors">
            <CardHeader>
              <MessageCircle className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Contact Support</CardTitle>
              <CardDescription>Get help from technical team</CardDescription>
            </CardHeader>
          </Card>
          <Card className="cursor-pointer hover:border-primary transition-colors">
            <CardHeader>
              <HelpCircle className="h-8 w-8 text-primary mb-2" />
              <CardTitle>FAQs</CardTitle>
              <CardDescription>Common admin queries</CardDescription>
            </CardHeader>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
            <CardDescription>Admin-specific help topics</CardDescription>
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

export default AdminHelp;
