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
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronLeft, Save } from "lucide-react";

interface AddressStepProps {
  data: any;
  onNext: (data: any) => void;
  onPrevious: () => void;
  onSaveDraft: () => void;
}

const AddressStep = ({ data, onNext, onPrevious, onSaveDraft }: AddressStepProps) => {
  const [formData, setFormData] = useState({
    currentAddress: data.currentAddress || {
      line1: "",
      line2: "",
      city: "",
      state: "",
      pinCode: "",
    },
    permanentAddress: data.permanentAddress || {
      line1: "",
      line2: "",
      city: "",
      state: "",
      pinCode: "",
    },
    sameAsCurrentAddress: data.sameAsCurrentAddress || false,
  });

  const handleSameAsCurrentChange = (checked: boolean) => {
    if (checked) {
      setFormData({
        ...formData,
        sameAsCurrentAddress: true,
        permanentAddress: { ...formData.currentAddress },
      });
    } else {
      setFormData({
        ...formData,
        sameAsCurrentAddress: false,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(formData);
  };

  const indianStates = [
    "Andhra Pradesh",
    "Karnataka",
    "Kerala",
    "Tamil Nadu",
    "Telangana",
    "Maharashtra",
    "Gujarat",
    "Rajasthan",
    "Delhi",
    "West Bengal",
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Current Address</h3>
        <div className="grid grid-cols-1 gap-6">
          <div className="space-y-2">
            <Label htmlFor="currentLine1">
              Address Line 1 <span className="text-destructive">*</span>
            </Label>
            <Input
              id="currentLine1"
              placeholder="House/Flat No., Building Name"
              value={formData.currentAddress.line1}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  currentAddress: { ...formData.currentAddress, line1: e.target.value },
                })
              }
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="currentLine2">Address Line 2 (Optional)</Label>
            <Input
              id="currentLine2"
              placeholder="Street, Area, Landmark"
              value={formData.currentAddress.line2}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  currentAddress: { ...formData.currentAddress, line2: e.target.value },
                })
              }
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="currentCity">
                City <span className="text-destructive">*</span>
              </Label>
              <Input
                id="currentCity"
                placeholder="Enter city"
                value={formData.currentAddress.city}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    currentAddress: { ...formData.currentAddress, city: e.target.value },
                  })
                }
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="currentState">
                State <span className="text-destructive">*</span>
              </Label>
              <Select
                value={formData.currentAddress.state}
                onValueChange={(value) =>
                  setFormData({
                    ...formData,
                    currentAddress: { ...formData.currentAddress, state: value },
                  })
                }
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  {indianStates.map((state) => (
                    <SelectItem key={state} value={state}>
                      {state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="currentPinCode">
                PIN Code <span className="text-destructive">*</span>
              </Label>
              <Input
                id="currentPinCode"
                placeholder="560001"
                value={formData.currentAddress.pinCode}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    currentAddress: { ...formData.currentAddress, pinCode: e.target.value },
                  })
                }
                required
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Permanent Address</h3>
        <div className="flex items-center space-x-2 mb-4">
          <Checkbox
            id="sameAddress"
            checked={formData.sameAsCurrentAddress}
            onCheckedChange={handleSameAsCurrentChange}
          />
          <Label htmlFor="sameAddress" className="cursor-pointer">
            Same as current address
          </Label>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <div className="space-y-2">
            <Label htmlFor="permanentLine1">
              Address Line 1 <span className="text-destructive">*</span>
            </Label>
            <Input
              id="permanentLine1"
              placeholder="House/Flat No., Building Name"
              value={formData.permanentAddress.line1}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  permanentAddress: { ...formData.permanentAddress, line1: e.target.value },
                })
              }
              disabled={formData.sameAsCurrentAddress}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="permanentLine2">Address Line 2 (Optional)</Label>
            <Input
              id="permanentLine2"
              placeholder="Street, Area, Landmark"
              value={formData.permanentAddress.line2}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  permanentAddress: { ...formData.permanentAddress, line2: e.target.value },
                })
              }
              disabled={formData.sameAsCurrentAddress}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="permanentCity">
                City <span className="text-destructive">*</span>
              </Label>
              <Input
                id="permanentCity"
                placeholder="Enter city"
                value={formData.permanentAddress.city}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    permanentAddress: { ...formData.permanentAddress, city: e.target.value },
                  })
                }
                disabled={formData.sameAsCurrentAddress}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="permanentState">
                State <span className="text-destructive">*</span>
              </Label>
              <Select
                value={formData.permanentAddress.state}
                onValueChange={(value) =>
                  setFormData({
                    ...formData,
                    permanentAddress: { ...formData.permanentAddress, state: value },
                  })
                }
                disabled={formData.sameAsCurrentAddress}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  {indianStates.map((state) => (
                    <SelectItem key={state} value={state}>
                      {state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="permanentPinCode">
                PIN Code <span className="text-destructive">*</span>
              </Label>
              <Input
                id="permanentPinCode"
                placeholder="560001"
                value={formData.permanentAddress.pinCode}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    permanentAddress: { ...formData.permanentAddress, pinCode: e.target.value },
                  })
                }
                disabled={formData.sameAsCurrentAddress}
                required
              />
            </div>
          </div>
        </div>
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
        <Button type="submit">Continue</Button>
      </div>
    </form>
  );
};

export default AddressStep;
