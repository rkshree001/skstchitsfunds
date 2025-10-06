import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Search, Book, Video, MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const SadminHelp = () => {
  const faqCategories = [
    {
      category: "System Management",
      questions: [
        {
          q: "How do I add a new branch to the system?",
          a: "Navigate to Branch Management > Add Branch. Fill in all required details including branch name, location, admin credentials, and initial settings. The system will automatically configure the branch dashboard.",
        },
        {
          q: "How can I monitor overall system performance?",
          a: "Use the Super Admin Dashboard for real-time metrics. The AI Insights page provides predictive analytics and anomaly detection across all branches.",
        },
      ],
    },
    {
      category: "Financial Operations",
      questions: [
        {
          q: "How do I generate compliance reports?",
          a: "Go to Compliance Reports page, select the reporting period, choose the type of report (regulatory/audit/financial), and click Generate. Reports can be exported as PDF or CSV.",
        },
        {
          q: "What are the default interest rate settings?",
          a: "Navigate to Settings > Financial Parameters to view and modify default interest rates, penalty rates, and auction parameters. Changes apply system-wide.",
        },
      ],
    },
    {
      category: "User & Role Management",
      questions: [
        {
          q: "How do I manage admin permissions across branches?",
          a: "Use the Multi-Branch Overview to drill down into specific branches. Select the branch admin and modify their role permissions from the settings panel.",
        },
        {
          q: "How can I track user activity across the system?",
          a: "The Activity Log provides comprehensive audit trails. Filter by user role, branch, or time period to track specific activities.",
        },
      ],
    },
    {
      category: "AI & Analytics",
      questions: [
        {
          q: "How does the AI predict defaulters?",
          a: "The AI Insights module analyzes historical payment patterns, user behavior, and demographic data to identify potential defaulters with confidence scores.",
        },
        {
          q: "Can I customize AI prediction parameters?",
          a: "Yes, go to Settings > AI Configuration to adjust sensitivity, prediction windows, and notification thresholds for AI-generated alerts.",
        },
      ],
    },
  ];

  const quickLinks = [
    { icon: Book, title: "Documentation", description: "Complete system documentation" },
    { icon: Video, title: "Video Tutorials", description: "Step-by-step guides" },
    { icon: MessageCircle, title: "Live Chat Support", description: "Chat with our team" },
    { icon: Mail, title: "Email Support", description: "support@chitmanagement.com" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-6">
      <div className="max-w-5xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white" data-testid="text-page-title">Help Center</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2" data-testid="text-page-description">
            Find answers and get support for super admin operations
          </p>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <Input
            placeholder="Search for help articles..."
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
            <CardDescription>Common questions and detailed answers</CardDescription>
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

        <Card className="bg-primary text-primary-foreground" data-testid="card-contact-support">
          <CardHeader>
            <CardTitle>Still need help?</CardTitle>
            <CardDescription className="text-primary-foreground/80">
              Our support team is available 24/7 to assist you
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="secondary" size="lg" data-testid="button-contact-support">
              <MessageCircle className="mr-2 h-5 w-5" />
              Contact Support Team
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SadminHelp;
