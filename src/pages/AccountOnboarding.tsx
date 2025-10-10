import { useState } from "react";
import { Shield, Check, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import PersonalInfoStep from "@/components/onboarding/PersonalInfoStep";
import AddressStep from "@/components/onboarding/AddressStep";
import ChitPlanStep from "@/components/onboarding/ChitPlanStep";
import DocumentsStep from "@/components/onboarding/DocumentsStep";
import ReferralStep from "@/components/onboarding/ReferralStep";
import ReviewStep from "@/components/onboarding/ReviewStep";

const steps = [
  { number: 1, label: "Personal Info", completed: false },
  { number: 2, label: "Address", completed: false },
  { number: 3, label: "Chit Plan", completed: false },
  { number: 4, label: "Documents", completed: false },
  { number: 5, label: "Referral", completed: false },
  { number: 6, label: "Review", completed: false },
];

const AccountOnboarding = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [formData, setFormData] = useState({
    title: "",
    fullName: "",
    email: "",
    mobile: "",
    dob: "",
    gender: "",
    pan: "",
    occupation: "",
    annualIncome: "",
    currentAddress: {
      line1: "",
      line2: "",
      city: "",
      state: "",
      pinCode: "",
    },
    permanentAddress: {
      line1: "",
      line2: "",
      city: "",
      state: "",
      pinCode: "",
    },
    sameAsCurrentAddress: false,
    chitPlan: null as any,
    documents: {
      panCard: null,
      aadharCard: null,
      addressProof: null,
      incomeProof: null,
    },
    referralCode: "",
  });

  const handleNext = (data: any) => {
    setFormData({ ...formData, ...data });
    if (!completedSteps.includes(currentStep)) {
      setCompletedSteps([...completedSteps, currentStep]);
    }
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSaveDraft = () => {
    toast({
      title: "Draft Saved",
      description: "Your registration progress has been saved.",
    });
  };

  const handleSubmit = () => {
    toast({
      title: "Registration Submitted!",
      description: "Your registration will be reviewed within 24-48 hours.",
    });
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">SKST Chit Funds</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              New User <ChevronLeft className="h-4 w-4 inline" />
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6 text-sm text-muted-foreground">
          <span>Home</span>
          <ChevronLeft className="h-4 w-4 rotate-180" />
          <span>Account Management</span>
        </div>

        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Join SKST Chit Funds</h1>
          <p className="text-muted-foreground">
            Complete your registration to start your investment journey
          </p>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center justify-center mb-12">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all ${
                    completedSteps.includes(step.number)
                      ? "bg-green-500 border-green-500 text-white"
                      : currentStep === step.number
                      ? "bg-primary border-primary text-primary-foreground"
                      : "border-muted bg-background text-muted-foreground"
                  }`}
                >
                  {completedSteps.includes(step.number) ? (
                    <Check className="h-6 w-6" />
                  ) : (
                    <span className="text-lg font-semibold">{step.number}</span>
                  )}
                </div>
                <span
                  className={`text-xs mt-2 font-medium ${
                    currentStep === step.number
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {step.label}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`h-0.5 w-16 mx-2 ${
                    completedSteps.includes(step.number)
                      ? "bg-green-500"
                      : "bg-muted"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Step Content */}
        <Card className="max-w-4xl mx-auto p-8">
          {currentStep === 1 && (
            <PersonalInfoStep
              data={formData}
              onNext={handleNext}
              onSaveDraft={handleSaveDraft}
            />
          )}
          {currentStep === 2 && (
            <AddressStep
              data={formData}
              onNext={handleNext}
              onPrevious={handlePrevious}
              onSaveDraft={handleSaveDraft}
            />
          )}
          {currentStep === 3 && (
            <ChitPlanStep
              data={formData}
              onNext={handleNext}
              onPrevious={handlePrevious}
              onSaveDraft={handleSaveDraft}
            />
          )}
          {currentStep === 4 && (
            <DocumentsStep
              data={formData}
              onNext={handleNext}
              onPrevious={handlePrevious}
              onSaveDraft={handleSaveDraft}
            />
          )}
          {currentStep === 5 && (
            <ReferralStep
              data={formData}
              onNext={handleNext}
              onPrevious={handlePrevious}
              onSaveDraft={handleSaveDraft}
            />
          )}
          {currentStep === 6 && (
            <ReviewStep
              data={formData}
              onPrevious={handlePrevious}
              onSaveDraft={handleSaveDraft}
              onSubmit={handleSubmit}
            />
          )}
        </Card>

        {/* Support Footer */}
        <div className="text-center mt-8 text-sm text-muted-foreground">
          <p className="mb-4">
            Need help with registration? Our support team is here to assist you.
          </p>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 hover:text-primary"
            >
              <span>📞</span> Call Support: +91 98765 43210
            </a>
            <a
              href="mailto:support@skstchitfunds.com"
              className="flex items-center gap-2 hover:text-primary"
            >
              <span>✉️</span> Email: support@skstchitfunds.com
            </a>
            <button className="flex items-center gap-2 hover:text-primary">
              <span>💬</span> Live Chat
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Support Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-muted/50 backdrop-blur-sm border-t py-2">
        <div className="container mx-auto px-4 flex items-center justify-center">
          <p className="text-xs text-muted-foreground flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            System Online
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccountOnboarding;
