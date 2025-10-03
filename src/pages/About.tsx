import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Shield, ArrowLeft, Target, Users, Award, TrendingUp } from "lucide-react";

const About = () => {
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
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About SKST Chit Funds</h1>
            <p className="text-xl text-muted-foreground">
              Building financial futures through trusted community savings since 2010
            </p>
          </div>

          {/* Story Section */}
          <Card className="shadow-medium mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                SKST Chit Funds was founded in 2010 with a simple yet powerful vision: to provide accessible financial services to communities through the traditional chit fund system, enhanced with modern technology and transparency.
              </p>
              <p className="text-muted-foreground mb-4">
                Starting from a small office in Mumbai with just 20 members, we have grown into a trusted financial institution serving over 500 active members across 5 major cities in India. Our growth is built on the foundation of trust, transparency, and commitment to our members' financial well-being.
              </p>
              <p className="text-muted-foreground">
                Today, we manage over ₹50 Crores in chit funds, helping families save for their dreams, entrepreneurs fund their businesses, and individuals secure their financial future through our well-structured chit fund programs.
              </p>
            </CardContent>
          </Card>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="shadow-soft">
              <CardHeader>
                <Target className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To empower individuals and families to achieve their financial goals through accessible, transparent, and community-driven chit fund programs.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <Award className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To become India's most trusted chit fund institution, known for innovation, integrity, and impact in community financial services.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Core Values */}
          <Card className="shadow-medium mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Our Core Values</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-4">
                <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Trust & Transparency</h3>
                  <p className="text-sm text-muted-foreground">
                    We operate with complete transparency, providing clear terms and regular updates to all our members.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Users className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Community First</h3>
                  <p className="text-sm text-muted-foreground">
                    Our members are at the heart of everything we do. We build lasting relationships based on mutual benefit.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <TrendingUp className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Financial Empowerment</h3>
                  <p className="text-sm text-muted-foreground">
                    We help members build wealth systematically through disciplined savings and smart investment strategies.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Award className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Excellence & Innovation</h3>
                  <p className="text-sm text-muted-foreground">
                    We continuously improve our services and adopt technology to provide the best experience to our members.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="shadow-medium mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Our Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Years of Service</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">₹50Cr+</div>
                  <div className="text-sm text-muted-foreground">Total Funds Managed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Active Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5</div>
                  <div className="text-sm text-muted-foreground">Branch Locations</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Leadership Team */}
          <Card className="shadow-medium mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Leadership Team</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-primary mx-auto mb-3"></div>
                  <h3 className="font-semibold">Suresh Kumar</h3>
                  <p className="text-sm text-muted-foreground">Founder & CEO</p>
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-primary mx-auto mb-3"></div>
                  <h3 className="font-semibold">Priya Sharma</h3>
                  <p className="text-sm text-muted-foreground">Chief Operations Officer</p>
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-primary mx-auto mb-3"></div>
                  <h3 className="font-semibold">Rajesh Patel</h3>
                  <p className="text-sm text-muted-foreground">Chief Financial Officer</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center">
            <Button onClick={() => navigate("/login")} size="lg" className="mr-4">
              Join SKST Today
            </Button>
            <Button onClick={() => navigate("/support")} variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
