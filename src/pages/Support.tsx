import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useNavigate } from "react-router-dom";
import { Shield, ArrowLeft, Mail, Phone, MapPin, HelpCircle } from "lucide-react";

const Support = () => {
  const navigate = useNavigate();

  const faqs = [
    {
      question: "What is a Chit Fund?",
      answer: "A chit fund is a savings scheme where a group of people come together and contribute a fixed amount periodically. Each period, one member receives the total collected amount through an auction or lottery system. It's a traditional savings method that combines saving and borrowing."
    },
    {
      question: "How do I join a chit fund?",
      answer: "You can join by registering through our website or visiting any of our branches. Fill out the registration form, choose your preferred chit plan, and submit the required documents. Our team will guide you through the process and assign you to a suitable group."
    },
    {
      question: "What are the payment methods?",
      answer: "We accept multiple payment methods including bank transfers, UPI, debit cards, credit cards, and cash payments at our branch offices. You can also set up auto-pay for hassle-free monthly premium payments."
    },
    {
      question: "Can I withdraw before maturity?",
      answer: "Yes, you can bid in the monthly auction to receive the lump sum amount before maturity. The auction system allows members to access funds when needed, subject to the bid amount and terms of the chit fund agreement."
    },
    {
      question: "Is my investment secure?",
      answer: "Yes, SKST Chit Funds operates under strict regulatory compliance with proper licensing. All funds are managed transparently, and you receive regular updates on your investment. We maintain bank-grade security for all transactions and data."
    },
    {
      question: "What happens if I miss a payment?",
      answer: "If you miss a payment, please contact us immediately. We provide grace periods and flexible payment options. However, regular payments are essential to maintain your membership and participate in auctions."
    },
    {
      question: "How is the winner selected in auctions?",
      answer: "In our auction system, members bid by offering to accept a lower amount than the total. The member who bids the lowest (maximum discount) wins the auction for that month. The difference is distributed among other members as a dividend."
    },
    {
      question: "Can I have multiple chit funds?",
      answer: "Yes, you can participate in multiple chit funds simultaneously. Many of our members maintain multiple chits with different amounts and durations to diversify their savings and investment strategy."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">SKST Chit Funds</span>
          </div>
          <Button onClick={() => navigate("/")} variant="outline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-primary text-primary-foreground mb-4">
              <HelpCircle className="h-8 w-8" />
            </div>
            <h1 className="text-4xl font-bold mb-2">Support & Help Center</h1>
            <p className="text-lg text-muted-foreground">We're here to help you with any questions</p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="shadow-soft hover:shadow-medium transition-shadow">
              <CardHeader className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full gradient-primary text-primary-foreground mx-auto mb-3">
                  <Mail className="h-6 w-6" />
                </div>
                <CardTitle>Email Support</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground mb-2">Get help via email</p>
                <a href="mailto:info@skstchitfunds.com" className="text-primary font-medium hover:underline">
                  info@skstchitfunds.com
                </a>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-medium transition-shadow">
              <CardHeader className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full gradient-primary text-primary-foreground mx-auto mb-3">
                  <Phone className="h-6 w-6" />
                </div>
                <CardTitle>Phone Support</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground mb-2">Call us directly</p>
                <a href="tel:+919876543210" className="text-primary font-medium hover:underline">
                  +91 98765 43210
                </a>
                <p className="text-xs text-muted-foreground mt-2">Mon-Sat, 9 AM - 6 PM</p>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-medium transition-shadow">
              <CardHeader className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full gradient-primary text-primary-foreground mx-auto mb-3">
                  <MapPin className="h-6 w-6" />
                </div>
                <CardTitle>Visit Us</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground mb-2">Head Office</p>
                <p className="text-sm font-medium">
                  123 Business Park,<br />
                  Mumbai, Maharashtra<br />
                  400001
                </p>
              </CardContent>
            </Card>
          </div>

          {/* FAQs */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
              <CardDescription>Find answers to common questions about our chit fund services</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          {/* Additional Help */}
          <Card className="shadow-soft mt-8">
            <CardHeader className="text-center">
              <CardTitle>Still Need Help?</CardTitle>
              <CardDescription>Our support team is always ready to assist you</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4">
                Can't find what you're looking for? Reach out to our support team and we'll get back to you within 24 hours.
              </p>
              <Button onClick={() => navigate("/login")} size="lg">
                Contact Support Team
              </Button>
            </CardContent>
          </Card>

          {/* Branch Locations */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Our Branch Locations</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="text-lg">Mumbai Central</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">123 Business Park, Mumbai - 400001</p>
                  <p className="text-sm text-muted-foreground">Phone: +91 98765 43210</p>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="text-lg">Pune Branch</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">456 Tech Plaza, Pune - 411001</p>
                  <p className="text-sm text-muted-foreground">Phone: +91 98765 43211</p>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="text-lg">Bangalore Hub</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">789 IT Park, Bangalore - 560001</p>
                  <p className="text-sm text-muted-foreground">Phone: +91 98765 43212</p>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="text-lg">Delhi NCR</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">321 Corporate Center, Delhi - 110001</p>
                  <p className="text-sm text-muted-foreground">Phone: +91 98765 43213</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
