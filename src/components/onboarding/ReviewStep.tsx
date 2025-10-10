import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ChevronLeft, Check, Save } from "lucide-react";
import { useState } from "react";

interface ReviewStepProps {
  data: any;
  onPrevious: () => void;
  onSaveDraft: () => void;
  onSubmit: () => void;
}

const ReviewStep = ({ data, onPrevious, onSaveDraft, onSubmit }: ReviewStepProps) => {
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (agreedToTerms) {
      onSubmit();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Review & Submit</h3>
        <p className="text-sm text-muted-foreground">
          Please review all information before submitting your registration
        </p>
      </div>

      <div className="space-y-6">
        <Card className="p-6">
          <h4 className="font-semibold mb-4 flex items-center gap-2">
            <span>👤</span> Personal Information
          </h4>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground">Full Name:</p>
              <p className="font-medium">{data.title} {data.fullName}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Email:</p>
              <p className="font-medium">{data.email}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Mobile:</p>
              <p className="font-medium">{data.mobile}</p>
            </div>
            <div>
              <p className="text-muted-foreground">PAN Number:</p>
              <p className="font-medium">{data.pan}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Date of Birth:</p>
              <p className="font-medium">{data.dob}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Occupation:</p>
              <p className="font-medium capitalize">{data.occupation}</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h4 className="font-semibold mb-4 flex items-center gap-2">
            <span>🏠</span> Address Information
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Current Address</p>
              <p className="text-sm">
                {data.currentAddress.line1}
                {data.currentAddress.line2 && `, ${data.currentAddress.line2}`}
                <br />
                {data.currentAddress.city}, {data.currentAddress.state}
                <br />
                PIN: {data.currentAddress.pinCode}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Permanent Address</p>
              <p className="text-sm">
                {data.sameAsCurrentAddress ? (
                  <span className="text-muted-foreground">Same as current address</span>
                ) : (
                  <>
                    {data.permanentAddress.line1}
                    {data.permanentAddress.line2 && `, ${data.permanentAddress.line2}`}
                    <br />
                    {data.permanentAddress.city}, {data.permanentAddress.state}
                    <br />
                    PIN: {data.permanentAddress.pinCode}
                  </>
                )}
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h4 className="font-semibold mb-4 flex items-center gap-2">
            <span>💰</span> Selected Chit Plan
          </h4>
          {data.chitPlan ? (
            <div className="bg-primary/5 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="font-semibold text-lg">{data.chitPlan.name}</p>
                  <p className="text-2xl font-bold text-primary">{data.chitPlan.amount}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Monthly Payment</p>
                  <p className="text-lg font-semibold">{data.chitPlan.monthlyContribution}</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Duration:</p>
                  <p className="font-medium">{data.chitPlan.duration}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Expected Returns:</p>
                  <p className="font-medium text-green-600">{data.chitPlan.expectedReturns}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Total Investment:</p>
                  <p className="font-medium">₹{data.chitPlan.amountValue.toLocaleString()}</p>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">No plan selected</p>
          )}
        </Card>

        <Card className="p-6">
          <h4 className="font-semibold mb-4 flex items-center gap-2">
            <span>📄</span> Document Verification
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["panCard", "aadharCard", "addressProof", "incomeProof"].map((doc) => {
              const docData = data.documents?.[doc];
              const labels = {
                panCard: "PAN Card",
                aadharCard: "Aadhar Card",
                addressProof: "Address Proof",
                incomeProof: "Income Proof",
              };
              return (
                <div
                  key={doc}
                  className={`flex items-center gap-2 p-3 rounded-lg ${
                    docData ? "bg-green-50 dark:bg-green-950/20" : "bg-muted/30"
                  }`}
                >
                  {docData ? (
                    <Check className="h-4 w-4 text-green-600" />
                  ) : (
                    <div className="h-4 w-4 rounded border border-muted-foreground/30" />
                  )}
                  <span className="text-sm">{labels[doc as keyof typeof labels]}</span>
                </div>
              );
            })}
          </div>
        </Card>
      </div>

      <Card className="p-6 bg-muted/30">
        <div className="flex items-start gap-3">
          <Checkbox
            id="terms"
            checked={agreedToTerms}
            onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
            required
          />
          <div className="flex-1">
            <Label htmlFor="terms" className="cursor-pointer">
              I agree to the Terms and Conditions, Privacy Policy, and KYC requirements{" "}
              <span className="text-destructive">*</span>
            </Label>
            <p className="text-xs text-muted-foreground mt-1">
              By checking this box, you confirm that all information provided is accurate and you
              agree to SKST Chit Funds' terms of service.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="/terms" target="_blank" className="text-xs text-primary hover:underline">
                Read Terms & Conditions
              </a>
              <a href="/privacy" target="_blank" className="text-xs text-primary hover:underline">
                Privacy Policy
              </a>
              <a href="/kyc" target="_blank" className="text-xs text-primary hover:underline">
                KYC Guidelines
              </a>
            </div>
          </div>
        </div>
      </Card>

      <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
        <p className="text-sm text-blue-900 dark:text-blue-100">
          <strong>📋 What happens next?</strong>
          <br />
          Your registration will be reviewed within 24-48 hours. You'll receive email confirmation
          once approved.
        </p>
      </div>

      <div className="flex justify-between pt-6 border-t">
        <div className="flex gap-2">
          <Button type="button" variant="outline" onClick={onPrevious}>
            <ChevronLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>
          <Button type="button" variant="outline" onClick={onSaveDraft}>
            <Save className="h-4 w-4 mr-2" />
            Save Draft
          </Button>
        </div>
        <Button type="submit" disabled={!agreedToTerms} size="lg">
          <Check className="h-4 w-4 mr-2" />
          Submit Registration
        </Button>
      </div>
    </form>
  );
};

export default ReviewStep;
