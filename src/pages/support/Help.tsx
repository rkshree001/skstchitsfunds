import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Search, Book, Video, MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const SupportHelp = () => {
  const faqCategories = [
    {
      category: "Ticket Management",
      questions: [
        {
          q: "How do I prioritize urgent tickets?",
          a: "Tickets are automatically sorted by priority. You can manually adjust priority levels by clicking the priority badge on any ticket. Urgent tickets appear at the top with a red indicator.",
        },
        {
          q: "How do I assign tickets to myself?",
          a: "Click on any unassigned ticket and select 'Assign to Me' from the action menu. You can also reassign tickets to other support team members if needed.",
        },
      ],
    },
    {
      category: "Customer Communication",
      questions: [
        {
          q: "How do I send bulk notifications to users?",
          a: "Navigate to Bulk Notifications, compose your message, select the target user group (all users, specific branch, or custom filter), preview the message, and click Send.",
        },
        {
          q: "What templates are available for common responses?",
          a: "Go to Downloads section to access pre-written templates for common scenarios like KYC issues, payment confirmations, auction results, and general inquiries.",
        },
      ],
    },
    {
      category: "User Onboarding",
      questions: [
        {
          q: "How do I help new users complete onboarding?",
          a: "Use the Onboarding wizard to guide users through registration, KYC verification, first chit enrollment, and payment setup. The wizard provides step-by-step instructions and tracks completion status.",
        },
        {
          q: "What information do I need to verify during KYC?",
          a: "Verify PAN card, Aadhaar card, address proof, and bank account details. All documents should be clear and match the user's registered name and address.",
        },
      ],
    },
    {
      category: "Common Issues",
      questions: [
        {
          q: "User cannot login - what should I check?",
          a: "First verify their email/phone number is correct. Check if their account is active. If password reset is needed, use the 'Send Password Reset Link' option in the user management panel.",
        },
        {
          q: "Payment not reflecting in user account",
          a: "Check payment gateway logs for the transaction ID. Verify the payment status with the payment processor. If confirmed paid, manually update the ledger and notify the admin team.",
        },
      ],
    },
  ];

  const quickLinks = [
    { icon: Book, title: "Support Manual", description: "Complete support guide" },
    { icon: Video, title: "Training Videos", description: "Support team tutorials" },
    { icon: MessageCircle, title: "Team Chat", description: "Internal support chat" },
    { icon: Mail, title: "Escalation Email", description: "escalate@chitmanagement.com" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-6">
      <div className="max-w-5xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white" data-testid="text-page-title">Support Help Center</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2" data-testid="text-page-description">
            Resources and guides for support team operations
          </p>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <Input
            placeholder="Search support documentation..."
            className="pl-10 py-6 text-lg"
            data-testid="input-search-help"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer" data-testid={`card-quick-link-${index}`}>
                <CardHeader>
                  <Icon className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">{link.title}</CardTitle>
                  <CardDescription>{link.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        <Card data-testid="card-faq-section">
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
            <CardDescription>Common support scenarios and solutions</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqCategories.map((category, catIndex) => (
                <div key={catIndex} className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 text-primary" data-testid={`text-category-${catIndex}`}>
                    {category.category}
                  </h3>
                  {category.questions.map((item, qIndex) => (
                    <AccordionItem key={`${catIndex}-${qIndex}`} value={`item-${catIndex}-${qIndex}`}>
                      <AccordionTrigger data-testid={`trigger-faq-${catIndex}-${qIndex}`}>
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent data-testid={`content-faq-${catIndex}-${qIndex}`}>
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </div>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        <Card className="bg-primary text-primary-foreground" data-testid="card-escalation">
          <CardHeader>
            <CardTitle>Need to escalate an issue?</CardTitle>
            <CardDescription className="text-primary-foreground/80">
              Contact senior support or technical team for complex cases
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="secondary" size="lg" data-testid="button-escalate">
              <MessageCircle className="mr-2 h-5 w-5" />
              Escalate to Senior Support
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SupportHelp;
