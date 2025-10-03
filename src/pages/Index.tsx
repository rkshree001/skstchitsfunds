import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Shield, Users, TrendingUp, Calculator, Clock, Award } from "lucide-react";

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
          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
            <a href="#benefits" className="text-muted-foreground hover:text-foreground transition-colors">Benefits</a>
            <Button onClick={() => navigate("/login")} variant="default">Login</Button>
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
              <Button onClick={() => navigate("/login")} size="lg" variant="secondary" className="text-lg">
                Get Started
              </Button>
              <Button onClick={() => navigate("/calculator")} size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                Calculate Returns
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

      {/* How It Works */}
      <section id="how-it-works" className="py-16 md:py-24 bg-muted/30">
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
