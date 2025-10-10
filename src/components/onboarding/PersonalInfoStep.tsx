import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Save } from "lucide-react";

interface PersonalInfoStepProps {
  data: any;
  onNext: (data: any) => void;
  onSaveDraft: () => void;
}

const PersonalInfoStep = ({ data, onNext, onSaveDraft }: PersonalInfoStepProps) => {
  const [formData, setFormData] = useState({
    title: data.title || "",
    fullName: data.fullName || "",
    email: data.email || "",
    mobile: data.mobile || "",
    dob: data.dob || "",
    gender: data.gender || "",
    pan: data.pan || "",
    occupation: data.occupation || "",
    annualIncome: data.annualIncome || "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="title">
            Title <span className="text-destructive">*</span>
          </Label>
          <Select
            value={formData.title}
            onValueChange={(value) => setFormData({ ...formData, title: value })}
            required
          >
            <SelectTrigger>
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Mr.">Mr.</SelectItem>
              <SelectItem value="Mrs.">Mrs.</SelectItem>
              <SelectItem value="Ms.">Ms.</SelectItem>
              <SelectItem value="Dr.">Dr.</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="fullName">
            Full Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="fullName"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">
            Email Address <span className="text-destructive">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <p className="text-xs text-muted-foreground">
            We'll send important updates to this email
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="mobile">
            Mobile Number <span className="text-destructive">*</span>
          </Label>
          <Input
            id="mobile"
            placeholder="+91 98765 43210"
            value={formData.mobile}
            onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="dob">
            Date of Birth <span className="text-destructive">*</span>
          </Label>
          <Input
            id="dob"
            type="date"
            value={formData.dob}
            onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="gender">
            Gender <span className="text-destructive">*</span>
          </Label>
          <Select
            value={formData.gender}
            onValueChange={(value) => setFormData({ ...formData, gender: value })}
            required
          >
            <SelectTrigger>
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="pan">
            PAN Number <span className="text-destructive">*</span>
          </Label>
          <Input
            id="pan"
            placeholder="ABCDE1234F"
            value={formData.pan}
            onChange={(e) => setFormData({ ...formData, pan: e.target.value.toUpperCase() })}
            required
          />
          <p className="text-xs text-muted-foreground">
            Required for financial transactions
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="occupation">
            Occupation <span className="text-destructive">*</span>
          </Label>
          <Select
            value={formData.occupation}
            onValueChange={(value) => setFormData({ ...formData, occupation: value })}
            required
          >
            <SelectTrigger>
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="salaried">Salaried</SelectItem>
              <SelectItem value="self-employed">Self Employed</SelectItem>
              <SelectItem value="business">Business</SelectItem>
              <SelectItem value="professional">Professional</SelectItem>
              <SelectItem value="retired">Retired</SelectItem>
              <SelectItem value="student">Student</SelectItem>
              <SelectItem value="homemaker">Homemaker</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="annualIncome">
            Annual Income <span className="text-destructive">*</span>
          </Label>
          <Input
            id="annualIncome"
            type="number"
            placeholder="500000"
            value={formData.annualIncome}
            onChange={(e) => setFormData({ ...formData, annualIncome: e.target.value })}
            required
          />
          <p className="text-xs text-muted-foreground">
            Enter your annual income in INR
          </p>
        </div>
      </div>

      <div className="flex justify-between pt-6 border-t">
        <Button type="button" variant="outline" onClick={onSaveDraft}>
          <Save className="h-4 w-4 mr-2" />
          Save Draft
        </Button>
        <Button type="submit">Continue</Button>
      </div>
    </form>
  );
};

export default PersonalInfoStep;
