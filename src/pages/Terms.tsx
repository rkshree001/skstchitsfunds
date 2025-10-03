import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Shield, ArrowLeft } from "lucide-react";

const Terms = () => {
  const navigate = useNavigate();

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
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-2">Terms & Conditions</h1>
            <p className="text-muted-foreground">Last updated: January 2025</p>
          </div>

          <Card className="shadow-medium mb-6">
            <CardHeader>
              <CardTitle>1. Acceptance of Terms</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm max-w-none">
              <p className="text-muted-foreground">
                By accessing and using SKST Chit Funds services, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use our services.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-medium mb-6">
            <CardHeader>
              <CardTitle>2. Chit Fund Membership</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <p><strong>2.1 Eligibility:</strong> Members must be 18 years or older and possess valid identification documents.</p>
              <p><strong>2.2 Registration:</strong> Complete registration requires submission of KYC documents and acceptance of chit fund terms.</p>
              <p><strong>2.3 Multiple Memberships:</strong> Members may participate in multiple chit funds simultaneously.</p>
            </CardContent>
          </Card>

          <Card className="shadow-medium mb-6">
            <CardHeader>
              <CardTitle>3. Payment Terms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <p><strong>3.1 Monthly Premium:</strong> Members must pay their monthly premium by the due date specified in their plan.</p>
              <p><strong>3.2 Late Payments:</strong> A grace period of 5 days is provided. After this, a late fee of 2% per month will be charged.</p>
              <p><strong>3.3 Default:</strong> Non-payment for 3 consecutive months may result in membership suspension.</p>
              <p><strong>3.4 Payment Methods:</strong> Accepted methods include bank transfer, UPI, cards, and cash at branch offices.</p>
            </CardContent>
          </Card>

          <Card className="shadow-medium mb-6">
            <CardHeader>
              <CardTitle>4. Auction System</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <p><strong>4.1 Monthly Auctions:</strong> Auctions are conducted monthly for each chit group.</p>
              <p><strong>4.2 Bidding Process:</strong> Members bid by offering to accept a discounted amount from the total pool.</p>
              <p><strong>4.3 Winner Selection:</strong> The member offering the highest discount wins the auction.</p>
              <p><strong>4.4 Prize Amount:</strong> Winners receive the total pool minus their bid discount.</p>
              <p><strong>4.5 Dividend Distribution:</strong> The discount amount is distributed among all members as dividend.</p>
            </CardContent>
          </Card>

          <Card className="shadow-medium mb-6">
            <CardHeader>
              <CardTitle>5. Interest & Returns</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <p><strong>5.1 Interest Rate:</strong> Current interest rate is 5% per annum, subject to change with prior notice.</p>
              <p><strong>5.2 Dividend Calculation:</strong> Dividends are calculated based on the auction discount and distributed proportionally.</p>
              <p><strong>5.3 Maturity Value:</strong> At maturity, members receive their total contributions plus accumulated dividends.</p>
            </CardContent>
          </Card>

          <Card className="shadow-medium mb-6">
            <CardHeader>
              <CardTitle>6. Withdrawal & Exit</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <p><strong>6.1 Premature Exit:</strong> Members can exit before maturity by providing 30 days' notice.</p>
              <p><strong>6.2 Refund:</strong> Premature exit refunds are subject to deduction of processing fees and penalties as per the plan.</p>
              <p><strong>6.3 Default Exit:</strong> In case of default, accumulated amounts will be refunded after plan completion, minus penalties.</p>
            </CardContent>
          </Card>

          <Card className="shadow-medium mb-6">
            <CardHeader>
              <CardTitle>7. Company Responsibilities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <p><strong>7.1 Fund Management:</strong> SKST Chit Funds will manage all member contributions securely and transparently.</p>
              <p><strong>7.2 Regular Updates:</strong> Members will receive monthly statements and auction updates.</p>
              <p><strong>7.3 Dispute Resolution:</strong> The company will address disputes within 15 working days.</p>
              <p><strong>7.4 Regulatory Compliance:</strong> We operate in full compliance with chit fund regulations.</p>
            </CardContent>
          </Card>

          <Card className="shadow-medium mb-6">
            <CardHeader>
              <CardTitle>8. Member Responsibilities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <p><strong>8.1 Timely Payments:</strong> Members must ensure timely payment of monthly premiums.</p>
              <p><strong>8.2 Information Updates:</strong> Keep contact and banking information up to date.</p>
              <p><strong>8.3 Auction Participation:</strong> Members who have not won can participate in future auctions.</p>
              <p><strong>8.4 Communication:</strong> Respond to company communications regarding their chit fund account.</p>
            </CardContent>
          </Card>

          <Card className="shadow-medium mb-6">
            <CardHeader>
              <CardTitle>9. Privacy & Data Protection</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <p><strong>9.1 Data Collection:</strong> We collect personal and financial information necessary for chit fund operations.</p>
              <p><strong>9.2 Data Usage:</strong> Information is used solely for service delivery and regulatory compliance.</p>
              <p><strong>9.3 Data Security:</strong> We employ bank-grade security measures to protect member data.</p>
              <p><strong>9.4 Data Sharing:</strong> Information may be shared with regulatory authorities as required by law.</p>
            </CardContent>
          </Card>

          <Card className="shadow-medium mb-6">
            <CardHeader>
              <CardTitle>10. Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <p>
                SKST Chit Funds shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services. Our liability is limited to the amount of the member's contributions.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-medium mb-6">
            <CardHeader>
              <CardTitle>11. Modifications to Terms</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>
                SKST Chit Funds reserves the right to modify these terms at any time. Members will be notified of significant changes via email or SMS. Continued use of services after modifications constitutes acceptance of the new terms.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-medium mb-6">
            <CardHeader>
              <CardTitle>12. Governing Law</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>
                These terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle>13. Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>For questions about these terms, please contact:</p>
              <p className="mt-2">
                <strong>SKST Chit Funds</strong><br />
                Email: legal@skstchitfunds.com<br />
                Phone: +91 98765 43210<br />
                Address: 123 Business Park, Mumbai, Maharashtra 400001
              </p>
            </CardContent>
          </Card>

          <div className="text-center mt-8">
            <Button onClick={() => navigate("/")} size="lg">
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
