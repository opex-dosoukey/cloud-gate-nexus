
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
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-foreground">Top Used Services</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {services.map((service, index) => (
          <div key={index} className="flex items-center space-x-3 p-3 bg-accent rounded-lg">
            <span className="text-lg">{service.icon}</span>
            <div className="flex-1">
              <p className="text-foreground font-medium">{service.name}</p>
              <p className="text-sm text-muted-foreground">{service.subtitle}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default TopUsedServices;
