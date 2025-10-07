import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, FileBarChart, Download, Filter } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const CustomReports = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedFields, setSelectedFields] = useState<string[]>([]);

  const availableFields = [
    { id: "user_name", label: "User Name", category: "User Info" },
    { id: "user_id", label: "User ID", category: "User Info" },
    { id: "phone", label: "Phone Number", category: "User Info" },
    { id: "email", label: "Email Address", category: "User Info" },
    { id: "chit_id", label: "Chit ID", category: "Chit Details" },
    { id: "chit_name", label: "Chit Name", category: "Chit Details" },
    { id: "status", label: "Chit Status", category: "Chit Details" },
    { id: "amount", label: "Chit Amount", category: "Chit Details" },
    { id: "payments", label: "Total Payments", category: "Financial" },
    { id: "balance", label: "Current Balance", category: "Financial" },
    { id: "dividends", label: "Dividends Earned", category: "Financial" },
    { id: "penalties", label: "Penalties", category: "Financial" },
    { id: "join_date", label: "Join Date", category: "Dates" },
    { id: "last_payment", label: "Last Payment Date", category: "Dates" },
  ];

  const groupedFields = availableFields.reduce((acc, field) => {
    if (!acc[field.category]) {
      acc[field.category] = [];
    }
    acc[field.category].push(field);
    return acc;
  }, {} as Record<string, typeof availableFields>);

  const handleFieldToggle = (fieldId: string) => {
    setSelectedFields(prev =>
      prev.includes(fieldId)
        ? prev.filter(id => id !== fieldId)
        : [...prev, fieldId]
    );
  };

  const handleGenerate = () => {
    if (selectedFields.length === 0) {
      toast({
        title: "No fields selected",
        description: "Please select at least one field to generate a report",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Report Generated",
      description: `Custom report with ${selectedFields.length} fields created successfully`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button onClick={() => navigate("/admin/home")} variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <h1 className="text-2xl font-bold">Custom Report Builder</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileBarChart className="h-5 w-5" />
              Select Report Fields
            </CardTitle>
            <CardDescription>Choose the data fields you want to include in your custom report</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {Object.entries(groupedFields).map(([category, fields]) => (
              <div key={category} className="space-y-3">
                <h3 className="font-semibold text-lg border-b pb-2">{category}</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {fields.map((field) => (
                    <div key={field.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={field.id}
                        checked={selectedFields.includes(field.id)}
                        onCheckedChange={() => handleFieldToggle(field.id)}
                      />
                      <Label
                        htmlFor={field.id}
                        className="text-sm font-normal cursor-pointer"
                      >
                        {field.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="flex items-center justify-between pt-6 border-t">
              <div className="text-sm text-muted-foreground">
                {selectedFields.length} field{selectedFields.length !== 1 ? 's' : ''} selected
              </div>
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => setSelectedFields([])}>
                  Clear All
                </Button>
                <Button onClick={handleGenerate}>
                  <Filter className="h-4 w-4 mr-2" />
                  Generate Preview
                </Button>
                <Button variant="outline" onClick={handleGenerate}>
                  <Download className="h-4 w-4 mr-2" />
                  Export CSV
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {selectedFields.length > 0 && (
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Preview</CardTitle>
              <CardDescription>Sample data with selected fields</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      {selectedFields.map(fieldId => (
                        <th key={fieldId} className="text-left p-2">
                          {availableFields.find(f => f.id === fieldId)?.label}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      {selectedFields.map(fieldId => (
                        <td key={fieldId} className="p-2">Sample Data</td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default CustomReports;
