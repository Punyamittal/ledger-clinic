import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Package, Calendar, AlertCircle } from "lucide-react";

const inventoryData = [
  {
    id: 1,
    name: "Amoxicillin 500mg",
    category: "Antibiotics",
    stock: 45,
    threshold: 50,
    expiry: "2024-12-15",
    supplier: "PharmaCorp",
    status: "low"
  },
  {
    id: 2,
    name: "Surgical Gloves (Box)",
    category: "Consumables",
    stock: 156,
    threshold: 100,
    expiry: "2025-06-20",
    supplier: "MedSupply Co",
    status: "good"
  },
  {
    id: 3,
    name: "Insulin Pens",
    category: "Diabetes Care",
    stock: 12,
    threshold: 25,
    expiry: "2024-09-30",
    supplier: "DiabetesCare Ltd",
    status: "critical"
  },
  {
    id: 4,
    name: "Blood Pressure Monitors",
    category: "Equipment",
    stock: 8,
    threshold: 5,
    expiry: "N/A",
    supplier: "TechMed Solutions",
    status: "good"
  }
];

export const InventoryTable = () => {
  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Package className="h-5 w-5 text-primary" />
          Current Inventory Status
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Item</th>
                <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Category</th>
                <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Stock</th>
                <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Expiry</th>
                <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Status</th>
                <th className="text-left py-3 px-2 text-sm font-medium text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {inventoryData.map((item) => (
                <tr key={item.id} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                  <td className="py-3 px-2">
                    <div>
                      <div className="font-medium text-foreground">{item.name}</div>
                      <div className="text-sm text-muted-foreground">{item.supplier}</div>
                    </div>
                  </td>
                  <td className="py-3 px-2">
                    <Badge variant="secondary" className="text-xs">
                      {item.category}
                    </Badge>
                  </td>
                  <td className="py-3 px-2">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{item.stock}</span>
                      {item.stock <= item.threshold && (
                        <AlertCircle className="h-4 w-4 text-warning" />
                      )}
                    </div>
                  </td>
                  <td className="py-3 px-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3 text-muted-foreground" />
                      <span className="text-sm">{item.expiry}</span>
                    </div>
                  </td>
                  <td className="py-3 px-2">
                    <Badge variant={
                      item.status === 'critical' ? 'destructive' :
                      item.status === 'low' ? 'outline' :
                      'default'
                    }>
                      {item.status}
                    </Badge>
                  </td>
                  <td className="py-3 px-2">
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};