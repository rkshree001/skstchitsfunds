import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ChevronLeft, Check, X, Upload, Save } from "lucide-react";
import { Card } from "@/components/ui/card";

interface DocumentsStepProps {
  data: any;
  onNext: (data: any) => void;
  onPrevious: () => void;
  onSaveDraft: () => void;
}

const DocumentsStep = ({ data, onNext, onPrevious, onSaveDraft }: DocumentsStepProps) => {
  const [documents, setDocuments] = useState({
    panCard: data.documents?.panCard || null,
    aadharCard: data.documents?.aadharCard || null,
    addressProof: data.documents?.addressProof || null,
    incomeProof: data.documents?.incomeProof || null,
  });

  const handleFileUpload = (docType: string, file: File | null) => {
    if (file) {
      const mockDocument = {
        name: file.name,
        size: `${(file.size / (1024 * 1024)).toFixed(2)} MB`,
        uploadedAt: new Date().toLocaleDateString(),
      };
      setDocuments({ ...documents, [docType]: mockDocument });
    }
  };

  const handleRemove = (docType: string) => {
    setDocuments({ ...documents, [docType]: null });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext({ documents });
  };

  const renderDocumentUpload = (
    docType: string,
    title: string,
    subtitle: string,
    required: boolean = true
  ) => {
    const doc = documents[docType as keyof typeof documents];

    return (
      <div className="space-y-2">
        <Label>
          {title} {required && <span className="text-destructive">*</span>}
        </Label>
        <p className="text-xs text-muted-foreground">{subtitle}</p>
        
        {!doc ? (
          <div className="border-2 border-dashed border-muted-foreground/20 rounded-lg p-8 text-center hover:border-primary/50 transition-all">
            <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
            <p className="text-sm font-medium mb-1">Upload Document</p>
            <p className="text-xs text-muted-foreground mb-4">
              Click to browse or drag and drop
            </p>
            <input
              type="file"
              accept="image/*,.pdf"
              onChange={(e) => handleFileUpload(docType, e.target.files?.[0] || null)}
              className="hidden"
              id={docType}
              required={required}
            />
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => document.getElementById(docType)?.click()}
            >
              Choose File
            </Button>
          </div>
        ) : (
          <Card className="p-4 border-green-500/50 bg-green-50 dark:bg-green-950/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <Check className="h-5 w-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">{doc.name}</p>
                <p className="text-xs text-muted-foreground">
                  {doc.size} • Uploaded successfully
                </p>
              </div>
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => handleFileUpload(docType, null)}
                >
                  Replace
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => handleRemove(docType)}
                >
                  <X className="h-4 w-4" />
                  Remove
                </Button>
              </div>
            </div>
          </Card>
        )}
      </div>
    );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Document Verification</h3>
        <p className="text-sm text-muted-foreground">
          Upload the required documents for KYC verification. All documents are securely encrypted.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {renderDocumentUpload(
          "panCard",
          "PAN Card",
          "Upload clear photo of your PAN card",
          true
        )}
        {renderDocumentUpload(
          "aadharCard",
          "Aadhar Card",
          "Upload both front and back of Aadhar card",
          true
        )}
        {renderDocumentUpload(
          "addressProof",
          "Address Proof",
          "Utility bill, bank statement, or rental agreement",
          true
        )}
        {renderDocumentUpload(
          "incomeProof",
          "Income Proof",
          "Salary slip, ITR, or business income certificate",
          false
        )}
      </div>

      <div className="bg-muted/30 p-4 rounded-lg">
        <h4 className="font-semibold mb-2 flex items-center gap-2">
          <span>🔒</span> Document Security
        </h4>
        <ul className="text-xs text-muted-foreground space-y-1">
          <li>• All documents are encrypted and stored securely</li>
          <li>• We comply with RBI guidelines for financial institutions</li>
          <li>• Your documents are used only for verification purposes</li>
          <li>• You can request document deletion after verification</li>
        </ul>
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

export default DocumentsStep;
