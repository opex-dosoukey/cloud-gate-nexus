
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
    <Card className="bg-slate-900 border-slate-800">
      <CardHeader>
        <CardTitle className="text-white">Top Used Bundles</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {bundles.map((bundle, index) => (
          <div key={index} className="flex items-center space-x-3 p-3 bg-slate-800 rounded-lg">
            <span className="text-2xl">{bundle.icon}</span>
            <p className="text-white font-medium">{bundle.name}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default TopUsedBundles;
