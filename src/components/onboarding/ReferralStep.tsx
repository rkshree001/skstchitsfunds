import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronLeft, Save, Gift } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ReferralStepProps {
  data: any;
  onNext: (data: any) => void;
  onPrevious: () => void;
  onSaveDraft: () => void;
}

const ReferralStep = ({ data, onNext, onPrevious, onSaveDraft }: ReferralStepProps) => {
  const [referralCode, setReferralCode] = useState(data.referralCode || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext({ referralCode });
  };

  const handleSkip = () => {
    onNext({ referralCode: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Gift className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-2xl font-semibold mb-2">Referral Code (Optional)</h3>
        <p className="text-muted-foreground">
          Have a referral code? Enter it below to unlock exclusive rewards and bonuses.
        </p>
      </div>

      <div className="max-w-md mx-auto space-y-4">
        <div className="space-y-2">
          <Label htmlFor="referralCode">Referral Code</Label>
          <Input
            id="referralCode"
            placeholder="SAD"
            value={referralCode}
            onChange={(e) => setReferralCode(e.target.value.toUpperCase())}
            className="text-center text-lg tracking-wider"
          />
        </div>

        <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
          <h4 className="font-semibold mb-3 flex items-center gap-2">
            <span>🎁</span> How Referral Program Works
          </h4>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0">
                1
              </div>
              <p className="text-muted-foreground">
                Get a referral code from existing SKST members
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0">
                2
              </div>
              <p className="text-muted-foreground">
                Enter the code during registration to unlock rewards
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0">
                3
              </div>
              <p className="text-muted-foreground">
                Receive cashback and bonus benefits on successful registration
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0">
                4
              </div>
              <p className="text-muted-foreground">
                Start referring others and earn rewards for each successful referral
              </p>
            </div>
          </div>
        </Card>
      </div>

      <div className="text-center">
        <button
          type="button"
          onClick={handleSkip}
          className="text-sm text-muted-foreground hover:text-foreground underline"
        >
          Skip for now - I don't have a referral code
        </button>
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
        <Button type="submit">Review</Button>
      </div>
    </form>
  );
};

export default ReferralStep;
