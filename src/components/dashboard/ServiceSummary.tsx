
import { Card, CardContent } from '@/components/ui/card';
import { Users, Building, FolderOpen, Key } from 'lucide-react';

const ServiceSummary = () => {
  const summaryItems = [
    { icon: Users, label: 'Users:', value: '12', color: 'text-blue-400' },
    { icon: Building, label: 'Departments:', value: '5', color: 'text-blue-400' },
    { icon: FolderOpen, label: 'Projects:', value: '3', color: 'text-blue-400' },
    { icon: Key, label: 'Service Keys:', value: '6', color: 'text-blue-400' },
  ];

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-foreground mb-4">Service Summary</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {summaryItems.map((item, index) => (
          <Card key={index} className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <item.icon className={`h-5 w-5 ${item.color}`} />
                <div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="text-2xl font-bold text-foreground">{item.value}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ServiceSummary;
