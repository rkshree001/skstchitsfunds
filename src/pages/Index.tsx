import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { Shield, Users, TrendingUp, Calculator, Clock, Award, Smartphone, BarChart3, Bot, FileText, Bell, Download, HelpCircle, Settings, Globe, CheckCircle, Layers, DollarSign, UserCheck, MapPin, Activity, LineChart, Zap, MessageSquare, QrCode, Database, Lock, Coins, Receipt, Calendar, GitBranch, Briefcase } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageSelector } from "@/components/LanguageSelector";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">SKST Chit Funds</span>
          </div>
          <nav className="hidden md:flex items-center gap-4">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="#modules" className="text-muted-foreground hover:text-foreground transition-colors">Modules</a>
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <LanguageSelector />
            <ThemeToggle />
            <Button onClick={() => navigate("/login")} variant="default" data-testid="button-header-login">Login</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative gradient-hero py-24 md:py-32 text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Secure Your Financial Future with SKST Chit Funds
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Join thousands of members building wealth through trusted chit fund programs. Save smart, borrow better, grow together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => navigate("/account/onboarding")} size="lg" variant="secondary" className="text-lg">
                Get Started
              </Button>
              <Button onClick={() => navigate("/calculator")} size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                Calculate Returns
              </Button>
              <Button onClick={() => navigate("/support/login")} size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                Support Portal
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/20"></div>
      </section>

      {/* Features Section */}
      <section id="benefits" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose SKST Chit Funds?</h2>
            <p className="text-muted-foreground text-lg">Trusted financial solutions for your savings and investment needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="shadow-soft hover:shadow-medium transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mb-2" />
                <CardTitle>100% Secure</CardTitle>
                <CardDescription>
                  Your investments are protected with bank-grade security and regulatory compliance
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-soft hover:shadow-medium transition-shadow">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-primary mb-2" />
                <CardTitle>High Returns</CardTitle>
                <CardDescription>
                  Earn competitive interest rates of up to 5% on your monthly premiums
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-soft hover:shadow-medium transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Community Trust</CardTitle>
                <CardDescription>
                  Join 500+ active members across 5 branches building wealth together
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-soft hover:shadow-medium transition-shadow">
              <CardHeader>
                <Calculator className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Flexible Plans</CardTitle>
                <CardDescription>
                  Choose from multiple chit durations and amounts that fit your budget
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-soft hover:shadow-medium transition-shadow">
              <CardHeader>
                <Clock className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Quick Access</CardTitle>
                <CardDescription>
                  Get funds when you need them through our monthly auction system
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-soft hover:shadow-medium transition-shadow">
              <CardHeader>
                <Award className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Transparent Process</CardTitle>
                <CardDescription>
                  Clear terms, no hidden charges, and regular updates on your investments
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Comprehensive Modules Showcase */}
      <section id="modules" className="py-16 md:py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="secondary">Complete Feature Set - 86 Modules</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">All Modules & Features</h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Explore our comprehensive suite of 86 features across all roles: User (41 modules including AI & Integrations), Admin (16), Super Admin (17), Support (12)
            </p>
          </div>

          <Tabs defaultValue="user" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-8">
              <TabsTrigger value="user" data-testid="tab-user-modules">User Modules</TabsTrigger>
              <TabsTrigger value="admin" data-testid="tab-admin-modules">Admin Panel</TabsTrigger>
              <TabsTrigger value="sadmin" data-testid="tab-sadmin-modules">Super Admin</TabsTrigger>
              <TabsTrigger value="support" data-testid="tab-support-modules">Support</TabsTrigger>
            </TabsList>

            {/* User Modules */}
            <TabsContent value="user" className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Layers className="h-6 w-6 text-blue-600" />
                  Advanced Chit Management
                </h3>
                <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-3">
                  <Card data-testid="module-multi-chit"><CardHeader className="p-4"><CheckCircle className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">Multi-Chit Enrollment</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><TrendingUp className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">Auction Management</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><Activity className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">Chit Lifecycle Tracking</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><Calculator className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">Auto Payout Calculator</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><Clock className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">Auto-Chit Renewal</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><FileText className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">Dynamic Plan Templates</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><BarChart3 className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">Real-Time Chit Tracking</CardTitle></CardHeader></Card>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <DollarSign className="h-6 w-6 text-green-600" />
                  Finance & Payments
                </h3>
                <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-3">
                  <Card><CardHeader className="p-4"><Smartphone className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">Payment Gateway</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><FileText className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">Digital Ledger</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><BarChart3 className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">Investment Analytics</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><Receipt className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">Refund Management</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><QrCode className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">QR Payment Integration</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><Coins className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">Digital Passbook</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><DollarSign className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">Penalty Calculator</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><LineChart className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">ROI Prediction</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><TrendingUp className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">Profit/Loss Simulation</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><Activity className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">Chit Health Score</CardTitle></CardHeader></Card>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <UserCheck className="h-6 w-6 text-purple-600" />
                  User Engagement & Experience
                </h3>
                <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-3">
                  <Card><CardHeader className="p-4"><Lock className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">KYC Verification</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><Bot className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">AI Support Assistant</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><Users className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">Referral Program</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><MessageSquare className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">Feedback & Reviews</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><Bell className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">Smart Notifications</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><Download className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">Download Center</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><HelpCircle className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">Help Center / FAQ</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><Zap className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">Reward & Loyalty Points</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><Award className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">Leaderboard</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><Calendar className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">Onboarding Wizard</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><Globe className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">Multi-language Support</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><Smartphone className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">Progressive Web App</CardTitle></CardHeader></Card>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Bot className="h-6 w-6 text-cyan-600" />
                  Future-Ready AI & Automation
                </h3>
                <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-3">
                  <Card><CardHeader className="p-4"><Bot className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">Predictive Defaulter Analyzer</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><FileText className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">Smart Document Analyzer</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><Bot className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">AI Financial Advisor</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><MessageSquare className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">Voice Assistant</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><Database className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">Blockchain Ledger</CardTitle></CardHeader></Card>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Settings className="h-6 w-6 text-gray-600" />
                  Extra Utilities & Integration
                </h3>
                <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-3">
                  <Card><CardHeader className="p-4"><Database className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">Tally/Zoho Sync</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><FileText className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">eSign Integration</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><Smartphone className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">WhatsApp Business API</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><Bell className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">Push Notifications</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><Calendar className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">Google Calendar Sync</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><Globe className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">SEO & Marketing Pages</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><FileText className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">API Gateway</CardTitle></CardHeader></Card>
                </div>
              </div>
            </TabsContent>

            {/* Admin Modules */}
            <TabsContent value="admin" className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Briefcase className="h-6 w-6 text-green-600" />
                  Control Panel & Management
                </h3>
                <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-3">
                  <Card><CardHeader className="p-4"><Users className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">User Management</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><DollarSign className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">Payment Updates</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><MapPin className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">Field Agent Tracking</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><BarChart3 className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">Branch Performance</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><Activity className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">Activity Log / Audit</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><Shield className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">Role-Based Access</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><Coins className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">Commission Tracker</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><FileText className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">Custom Report Builder</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><Calendar className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">Task & Meeting Scheduler</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><Receipt className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">Payment Aging Report</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><Settings className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">Manual Adjustment Console</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><DollarSign className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">Expense Tracker</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><MapPin className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">GPS Collection Map</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><Bell className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">Notifications Center</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><Download className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">Download Center</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><HelpCircle className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">Help Center / Guides</CardTitle></CardHeader></Card>
                </div>
              </div>
            </TabsContent>

            {/* Super Admin Modules */}
            <TabsContent value="sadmin" className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Settings className="h-6 w-6 text-purple-600" />
                  Enterprise & System Controls
                </h3>
                <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-3">
                  <Card><CardHeader className="p-4"><GitBranch className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">Multi-Branch Network</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><FileText className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">Compliance Reports</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><Bot className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">AI Insights & Predictions</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><Settings className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">System Settings Hub</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><Database className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">Consolidated Funds</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><Activity className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">System Audit Trails</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><LineChart className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">Revenue Forecast</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><Shield className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">Fraud Detection AI</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><BarChart3 className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">Branch Comparison</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><MapPin className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">Global Heatmap</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><Users className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">Hierarchical Drill-Down</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><FileText className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">Regulatory Export</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><Database className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">Backup & Restore</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><Bot className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">Anomaly Detection</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><Bell className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">Alert Notifications</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><Download className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">Downloads & Reports</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><HelpCircle className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">Admin Help Center</CardTitle></CardHeader></Card>
                </div>
              </div>
            </TabsContent>

            {/* Support Modules */}
            <TabsContent value="support" className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <MessageSquare className="h-6 w-6 text-orange-600" />
                  Communication & Customer Support
                </h3>
                <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-3">
                  <Card><CardHeader className="p-4"><MessageSquare className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">Ticketing System</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><Bell className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">Bulk SMS/Email Notifications</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><UserCheck className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">Onboarding Assistant</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><TrendingUp className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">Marketing & Promotions</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><Bot className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">Live Chat Support</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><HelpCircle className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">FAQ / Knowledge Base</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><MessageSquare className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">Feedback Collection</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><FileText className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">Issue Resolution Tracker</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><Users className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">Customer Satisfaction</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><Download className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">Templates & Resources</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><Bell className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">Priority Alerts</CardTitle></CardHeader></Card>
                  <Card><CardHeader className="p-4"><HelpCircle className="h-5 w-5 text-green-600 mb-1" /><CardTitle className="text-xs">Support Help Center</CardTitle></CardHeader></Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section id="features" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Advanced Features</h2>
            <p className="text-muted-foreground text-lg">Powerful tools and modules for all user roles</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="shadow-soft hover:shadow-medium transition-shadow" data-testid="card-feature-multi-chit">
              <CardHeader>
                <Users className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="text-lg">Multi-Chit Enrollment</CardTitle>
                <CardDescription>
                  Subscribe to multiple chit groups simultaneously with a unified dashboard
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-soft hover:shadow-medium transition-shadow" data-testid="card-feature-auction">
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="text-lg">Smart Auction System</CardTitle>
                <CardDescription>
                  Automated monthly auctions with real-time bidding and winner tracking
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-soft hover:shadow-medium transition-shadow" data-testid="card-feature-analytics">
              <CardHeader>
                <BarChart3 className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="text-lg">Investment Analytics</CardTitle>
                <CardDescription>
                  Comprehensive ROI tracking, graphs, and AI-powered predictions
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-soft hover:shadow-medium transition-shadow" data-testid="card-feature-ai">
              <CardHeader>
                <Bot className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="text-lg">AI Assistant</CardTitle>
                <CardDescription>
                  24/7 AI chatbot for queries, onboarding help, and financial advice
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-soft hover:shadow-medium transition-shadow" data-testid="card-feature-payments">
              <CardHeader>
                <Smartphone className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="text-lg">Payment Gateway</CardTitle>
                <CardDescription>
                  Secure online payments via Razorpay/Stripe with instant confirmation
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-soft hover:shadow-medium transition-shadow" data-testid="card-feature-ledger">
              <CardHeader>
                <FileText className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="text-lg">Digital Ledger</CardTitle>
                <CardDescription>
                  Complete transaction history with debit/credit tracking and reconciliation
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-soft hover:shadow-medium transition-shadow" data-testid="card-feature-notifications">
              <CardHeader>
                <Bell className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="text-lg">Smart Notifications</CardTitle>
                <CardDescription>
                  Real-time alerts for payments, auctions, and important updates
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-soft hover:shadow-medium transition-shadow" data-testid="card-feature-downloads">
              <CardHeader>
                <Download className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="text-lg">Download Center</CardTitle>
                <CardDescription>
                  Access receipts, statements, and reports anytime in PDF/Excel
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">Role-Based Features</h3>
            <div className="grid md:grid-cols-4 gap-4 max-w-5xl mx-auto">
              <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white" data-testid="card-role-user">
                <CardHeader>
                  <Users className="h-8 w-8 mb-2 mx-auto" />
                  <CardTitle className="text-center">User Portal</CardTitle>
                  <CardDescription className="text-white/90 text-center">
                    Chit enrollment, auctions, payments, KYC, referrals, analytics
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white" data-testid="card-role-admin">
                <CardHeader>
                  <Shield className="h-8 w-8 mb-2 mx-auto" />
                  <CardTitle className="text-center">Admin Panel</CardTitle>
                  <CardDescription className="text-white/90 text-center">
                    User management, field tracking, branch performance, activity logs
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white" data-testid="card-role-sadmin">
                <CardHeader>
                  <Settings className="h-8 w-8 mb-2 mx-auto" />
                  <CardTitle className="text-center">Super Admin</CardTitle>
                  <CardDescription className="text-white/90 text-center">
                    Multi-branch overview, AI insights, compliance, system settings
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white" data-testid="card-role-support">
                <CardHeader>
                  <HelpCircle className="h-8 w-8 mb-2 mx-auto" />
                  <CardTitle className="text-center">Support Team</CardTitle>
                  <CardDescription className="text-white/90 text-center">
                    Ticketing, bulk notifications, onboarding, promotions
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How Chit Funds Work</h2>
            <p className="text-muted-foreground text-lg">Simple, transparent, and rewarding</p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full gradient-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Join a Group</h3>
              <p className="text-muted-foreground">Select a chit plan that matches your savings goal and join a group of members</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full gradient-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Pay Monthly</h3>
              <p className="text-muted-foreground">Make regular monthly contributions as per your selected plan</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full gradient-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Receive Funds</h3>
              <p className="text-muted-foreground">Get the lump sum when it's your turn through our fair auction system</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About SKST Chit Funds</h2>
            <p className="text-lg text-muted-foreground mb-4">
              With over a decade of trusted service, SKST Chit Funds has helped thousands of families achieve their financial goals through our transparent and secure chit fund programs.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              We combine traditional chit fund principles with modern technology to provide you with a seamless experience in managing your investments and accessing funds when you need them most.
            </p>
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">₹50Cr+</div>
                <div className="text-muted-foreground">Total Funds</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Active Members</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">5</div>
                <div className="text-muted-foreground">Branches</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Financial Journey?</h2>
          <p className="text-lg mb-8 opacity-90">Join SKST Chit Funds today and experience the power of community savings</p>
          <Button onClick={() => navigate("/login")} size="lg" variant="secondary">
            Login Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="h-6 w-6 text-primary" />
                <span className="font-bold">SKST Chit Funds</span>
              </div>
              <p className="text-sm text-muted-foreground">Building financial futures through trusted community savings</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><button onClick={() => navigate("/about")} className="hover:text-foreground transition-colors">About Us</button></li>
                <li><a href="#how-it-works" className="hover:text-foreground transition-colors">How It Works</a></li>
                <li><button onClick={() => navigate("/calculator")} className="hover:text-foreground transition-colors">Calculator</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><button onClick={() => navigate("/support")} className="hover:text-foreground transition-colors">Help Center</button></li>
                <li><button onClick={() => navigate("/terms")} className="hover:text-foreground transition-colors">Terms & Conditions</button></li>
                <li><button onClick={() => navigate("/terms")} className="hover:text-foreground transition-colors">Privacy Policy</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Email: info@skstchitfunds.com</li>
                <li>Phone: +91 98765 43210</li>
                <li>Address: Mumbai, Maharashtra</li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2025 SKST Chit Funds. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
