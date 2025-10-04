import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { LogOut, ArrowLeft, Search, Filter, Building2, Edit, Trash2, Eye, Plus } from "lucide-react";

const BranchManagement = () => {
  const navigate = useNavigate();

  const branches = [
    { id: 1, name: "Mumbai Central", code: "MUM001", manager: "Suresh Sharma", address: "Andheri West, Mumbai 400053", users: 150, collections: 1500000, status: "active", phone: "022-2850-1234" },
    { id: 2, name: "Pune Branch", code: "PUN001", manager: "Rajesh Patel", address: "Kothrud, Pune 411038", users: 120, collections: 1200000, status: "active", phone: "020-2543-5678" },
    { id: 3, name: "Bangalore Hub", code: "BLR001", manager: "Amit Kumar", address: "Koramangala, Bangalore 560034", users: 130, collections: 1400000, status: "active", phone: "080-4125-9876" },
    { id: 4, name: "Delhi NCR", code: "DEL001", manager: "Priya Singh", address: "Connaught Place, Delhi 110001", users: 80, collections: 800000, status: "active", phone: "011-4256-3210" },
    { id: 5, name: "Chennai Office", code: "CHE001", manager: "Vikram Reddy", address: "T Nagar, Chennai 600017", users: 20, collections: 100000, status: "new", phone: "044-2815-4567" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b gradient-primary text-primary-foreground sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button onClick={() => navigate("/sadmin/dashboard")} variant="ghost" size="sm" className="text-primary-foreground hover:bg-primary-foreground/10">
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <span className="text-2xl font-bold">Branch Management</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:inline opacity-90">Super Admin</span>
            <Button onClick={() => navigate("/")} variant="secondary" size="sm">
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="shadow-medium border-2 border-primary/20">
            <CardHeader className="pb-2">
              <CardDescription>Total Branches</CardDescription>
              <CardTitle className="text-3xl">5</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-success">Across India</p>
            </CardContent>
          </Card>

          <Card className="shadow-medium border-2 border-success/20">
            <CardHeader className="pb-2">
              <CardDescription>Active Branches</CardDescription>
              <CardTitle className="text-3xl text-success">4</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">Fully operational</p>
            </CardContent>
          </Card>

          <Card className="shadow-medium border-2 border-warning/20">
            <CardHeader className="pb-2">
              <CardDescription>New Branches</CardDescription>
              <CardTitle className="text-3xl text-warning">1</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">Setup in progress</p>
            </CardContent>
          </Card>

          <Card className="shadow-medium border-2 border-primary/20">
            <CardHeader className="pb-2">
              <CardDescription>Total Users</CardDescription>
              <CardTitle className="text-3xl">500</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-success">Across all branches</p>
            </CardContent>
          </Card>
        </div>

        {/* Actions */}
        <Card className="shadow-medium mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search by branch name, code, or manager..." className="pl-10" />
              </div>
              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button onClick={() => navigate("/sadmin/add-branch")} variant="default">
                <Plus className="h-4 w-4 mr-2" />
                Add Branch
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Branch Cards */}
        <div className="grid lg:grid-cols-2 gap-6">
          {branches.map((branch) => (
            <Card key={branch.id} className="shadow-medium">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Building2 className="h-5 w-5" />
                      {branch.name}
                    </CardTitle>
                    <CardDescription className="mt-1">Code: {branch.code}</CardDescription>
                  </div>
                  <Badge variant={branch.status === "active" ? "default" : "secondary"} className={branch.status === "active" ? "bg-success" : "bg-warning"}>
                    {branch.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Manager</p>
                    <p className="font-medium">{branch.manager}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Phone</p>
                    <p className="font-medium">{branch.phone}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Users</p>
                    <p className="font-medium">{branch.users}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Collections</p>
                    <p className="font-medium text-success">₹{(branch.collections / 100000).toFixed(1)}L</p>
                  </div>
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Address</p>
                  <p className="text-sm font-medium">{branch.address}</p>
                </div>
                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Eye className="h-4 w-4 mr-2" />
                    View Details
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit
                  </Button>
                  <Button variant="outline" size="sm">
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BranchManagement;
