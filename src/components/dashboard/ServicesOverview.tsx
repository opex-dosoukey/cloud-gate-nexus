
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Monitor, Database, Network, HardDrive } from 'lucide-react';

const ServicesOverview = () => {
  const services = [
    { icon: Monitor, label: 'Compute', count: 1, color: 'text-blue-400' },
    { icon: Database, label: 'Database', count: 2, color: 'text-blue-400' },
    { icon: Network, label: 'Networking', count: 3, color: 'text-blue-400' },
    { icon: HardDrive, label: 'Storage', count: 2, color: 'text-blue-400' },
  ];

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-foreground">Total Services Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center p-4 bg-accent rounded-lg">
              <service.icon className={`h-8 w-8 ${service.color} mb-2`} />
              <span className="text-foreground font-semibold">{service.label}: {service.count}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ServicesOverview;
