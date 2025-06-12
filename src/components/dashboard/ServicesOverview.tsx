
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
    <Card className="bg-slate-900 border-slate-800">
      <CardHeader>
        <CardTitle className="text-white">Total Services Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center p-4 bg-slate-800 rounded-lg">
              <service.icon className={`h-8 w-8 ${service.color} mb-2`} />
              <span className="text-white font-semibold">{service.label}: {service.count}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ServicesOverview;
