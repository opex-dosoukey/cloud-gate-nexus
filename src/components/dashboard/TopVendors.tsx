
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TopVendors = () => {
  const vendors = [
    { name: 'AWS', count: 5, logo: '🔶', color: 'text-orange-400' },
    { name: 'Google', count: 3, logo: '🔵', color: 'text-blue-400' },
    { name: 'Azure', count: 2, logo: '🔷', color: 'text-blue-500' },
    { name: 'Alibaba', count: 1, logo: '🟠', color: 'text-orange-500' },
  ];

  return (
    <Card className="bg-slate-900 border-slate-800">
      <CardHeader>
        <CardTitle className="text-white">Top Vendors by Services</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {vendors.map((vendor, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 bg-slate-800 rounded-lg">
              <span className="text-2xl">{vendor.logo}</span>
              <div>
                <p className="text-white font-medium">{vendor.name}: {vendor.count}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TopVendors;
