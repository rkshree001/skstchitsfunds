import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Users, MapPin, TrendingUp, Clock, Search, Plus, Phone } from "lucide-react";

const CollectionAgents = () => {
  const agents = [
    {
      id: 1,
      name: "Ramesh Kumar",
      phone: "+91 98765 43210",
      area: "MG Road, Bangalore",
      collections: "₹2,45,000",
      target: "₹3,00,000",
      visits: 24,
      status: "Active",
      lastLocation: "12.9716° N, 77.5946° E",
      lastUpdate: "10 mins ago",
    },
    {
      id: 2,
      name: "Suresh Patel",
      phone: "+91 98765 43211",
      area: "Koramangala, Bangalore",
      collections: "₹3,15,000",
      target: "₹3,50,000",
      visits: 31,
      status: "Active",
      lastLocation: "12.9352° N, 77.6245° E",
      lastUpdate: "5 mins ago",
    },
    {
      id: 3,
      name: "Vijay Singh",
      phone: "+91 98765 43212",
      area: "Whitefield, Bangalore",
      collections: "₹1,85,000",
      target: "₹2,50,000",
      visits: 18,
      status: "On Leave",
      lastLocation: "12.9698° N, 77.7500° E",
      lastUpdate: "2 hours ago",
    },
  ];

  const stats = [
    { label: "Total Agents", value: "24", icon: Users, color: "text-blue-600" },
    { label: "Today's Collections", value: "₹7.45L", icon: TrendingUp, color: "text-green-600" },
    { label: "Active Now", value: "18", icon: Clock, color: "text-orange-600" },
    { label: "Areas Covered", value: "45", icon: MapPin, color: "text-purple-600" },
  ];

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Collection Agents</h1>
          <p className="text-muted-foreground">Manage field agents and track collections</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Agent
        </Button>
      </div>

      <div className="grid md:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <Icon className={`h-8 w-8 ${stat.color}`} />
                  <div>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Agent Performance</CardTitle>
              <CardDescription>Track agent collections and field visits</CardDescription>
            </div>
            <div className="flex gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search agents..." className="pl-10 w-64" />
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {agents.map((agent) => (
              <Card key={agent.id}>
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Users className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="font-semibold">{agent.name}</h3>
                          <Badge variant={agent.status === "Active" ? "default" : "secondary"}>
                            {agent.status}
                          </Badge>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Phone className="h-4 w-4" />
                            <span>{agent.phone}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span>{agent.area}</span>
                          </div>
                          <div>Last seen: {agent.lastUpdate}</div>
                          <div>GPS: {agent.lastLocation}</div>
                        </div>
                        <div className="mt-3 flex items-center gap-6">
                          <div>
                            <p className="text-xs text-muted-foreground">Collections</p>
                            <p className="text-lg font-bold text-green-600">{agent.collections}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">Target</p>
                            <p className="text-lg font-bold">{agent.target}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">Visits Today</p>
                            <p className="text-lg font-bold">{agent.visits}</p>
                          </div>
                          <div className="flex-1">
                            <p className="text-xs text-muted-foreground mb-1">Achievement</p>
                            <div className="w-full bg-muted rounded-full h-2">
                              <div 
                                className="bg-green-600 h-2 rounded-full" 
                                style={{ 
                                  width: `${(parseInt(agent.collections.replace(/[₹,]/g, '')) / parseInt(agent.target.replace(/[₹,]/g, ''))) * 100}%` 
                                }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <MapPin className="h-4 w-4 mr-2" />
                        Track
                      </Button>
                      <Button variant="outline" size="sm">View Details</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Today's Route Plan</CardTitle>
            <CardDescription>Scheduled visits for active agents</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-3 border rounded-lg">
                <p className="font-medium">Ramesh Kumar - MG Road Area</p>
                <p className="text-sm text-muted-foreground">15 scheduled visits • 8 completed</p>
              </div>
              <div className="p-3 border rounded-lg">
                <p className="font-medium">Suresh Patel - Koramangala Area</p>
                <p className="text-sm text-muted-foreground">18 scheduled visits • 12 completed</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Collection Summary</CardTitle>
            <CardDescription>Today's collection breakdown</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Cash Collections</span>
                <span className="font-bold">₹4,25,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Online Payments</span>
                <span className="font-bold">₹3,20,000</span>
              </div>
              <div className="flex justify-between items-center pt-3 border-t">
                <span className="font-medium">Total Collections</span>
                <span className="text-xl font-bold text-green-600">₹7,45,000</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CollectionAgents;
