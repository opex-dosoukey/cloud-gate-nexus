
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TopUsedBundles = () => {
  const bundles = [
    {
      name: 'Manufacturing Cloud Bundle',
      icon: '🏭',
    },
    {
      name: 'Retail Cloud Bundle', 
      icon: '🏪',
    },
    {
      name: 'Healthcare Cloud Bundle',
      icon: '🏥',
    }
  ];

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-foreground">Top Used Bundles</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {bundles.map((bundle, index) => (
          <div key={index} className="flex items-center space-x-3 p-3 bg-accent rounded-lg">
            <span className="text-2xl">{bundle.icon}</span>
            <p className="text-foreground font-medium">{bundle.name}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default TopUsedBundles;
