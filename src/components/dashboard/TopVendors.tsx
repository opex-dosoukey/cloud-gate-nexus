
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TopVendors = () => {
  const vendors = [
    { name: 'AWS', count: 5, logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg', color: 'text-orange-400' },
    { name: 'Google', count: 3, logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg', color: 'text-blue-400' },
    { name: 'Azure', count: 2, logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg', color: 'text-blue-500' },
    { name: 'Alibaba', count: 1, logo: 'https://upload.wikimedia.org/wikipedia/commons/2/26/Alibaba_Cloud_logo.svg', color: 'text-orange-500' },
  ];

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-foreground">Top Vendors by Services</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {vendors.map((vendor, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 bg-accent rounded-lg">
              <div className="w-8 h-8 flex items-center justify-center bg-background rounded-sm">
                <img 
                  src={vendor.logo} 
                  alt={`${vendor.name} logo`}
                  className="w-6 h-6 object-contain"
                  onError={(e) => {
                    // Fallback to text if image fails to load
                    e.currentTarget.style.display = 'none';
                    const fallbackElement = e.currentTarget.nextElementSibling as HTMLElement;
                    if (fallbackElement) {
                      fallbackElement.style.display = 'block';
                    }
                  }}
                />
                <span className="text-xs font-bold text-muted-foreground hidden">
                  {vendor.name.charAt(0)}
                </span>
              </div>
              <div>
                <p className="text-foreground font-medium">{vendor.name}: {vendor.count}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TopVendors;
