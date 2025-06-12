
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TopUsedServices = () => {
  const services = [
    {
      name: 'Compute Engine Instance',
      subtitle: 'WebServer-Instance-01',
      provider: 'aws',
      icon: '🔶'
    },
    {
      name: 'Load Balancer',
      subtitle: 'E-Commerce-Frontend-LB', 
      provider: 'google',
      icon: '🔵'
    },
    {
      name: 'Database Instance',
      subtitle: 'App-Microservices-Cluster',
      provider: 'azure',
      icon: '🔷'
    }
  ];

  return (
    <Card className="bg-slate-900 border-slate-800">
      <CardHeader>
        <CardTitle className="text-white">Top Used Services</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {services.map((service, index) => (
          <div key={index} className="flex items-center space-x-3 p-3 bg-slate-800 rounded-lg">
            <span className="text-lg">{service.icon}</span>
            <div className="flex-1">
              <p className="text-white font-medium">{service.name}</p>
              <p className="text-sm text-slate-400">{service.subtitle}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default TopUsedServices;
