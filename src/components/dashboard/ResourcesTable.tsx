
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MoreHorizontal, Search, Filter } from 'lucide-react';

const ResourcesTable = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const resources = [
    {
      id: '1',
      name: 'web-server-prod-01',
      type: 'EC2 Instance',
      provider: 'AWS',
      region: 'us-east-1',
      status: 'Running',
      cost: '$125.50',
      tags: ['production', 'web-tier']
    },
    {
      id: '2',
      name: 'database-cluster',
      type: 'Azure SQL',
      provider: 'Azure',
      region: 'east-us',
      status: 'Running',
      cost: '$890.25',
      tags: ['production', 'database']
    },
    {
      id: '3',
      name: 'analytics-storage',
      type: 'Cloud Storage',
      provider: 'GCP',
      region: 'us-central1',
      status: 'Active',
      cost: '$45.80',
      tags: ['analytics', 'storage']
    },
    {
      id: '4',
      name: 'api-gateway',
      type: 'API Gateway',
      provider: 'AWS',
      region: 'us-west-2',
      status: 'Running',
      cost: '$78.90',
      tags: ['api', 'gateway']
    },
    {
      id: '5',
      name: 'ml-training-vm',
      type: 'Compute Engine',
      provider: 'GCP',
      region: 'us-west1',
      status: 'Stopped',
      cost: '$0.00',
      tags: ['ml', 'training']
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'running':
      case 'active':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'stopped':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      default:
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
    }
  };

  const getProviderColor = (provider: string) => {
    switch (provider) {
      case 'AWS':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'Azure':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'GCP':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const filteredResources = resources.filter(resource =>
    resource.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resource.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resource.provider.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card className="bg-slate-900 border-slate-800">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-white">Cloud Resources</CardTitle>
            <p className="text-sm text-slate-400">Manage your multi-cloud infrastructure</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-64 bg-slate-800 border-slate-700 text-white placeholder-slate-400"
              />
            </div>
            <Button variant="outline" size="sm" className="border-slate-700 text-slate-400 hover:text-white">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-800">
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-400">Resource</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-400">Type</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-400">Provider</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-400">Region</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-400">Status</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-400">Cost</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-400">Tags</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-slate-400">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredResources.map((resource) => (
                <tr key={resource.id} className="border-b border-slate-800/50 hover:bg-slate-800/30">
                  <td className="py-4 px-4">
                    <div className="text-white font-medium">{resource.name}</div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="text-slate-300">{resource.type}</div>
                  </td>
                  <td className="py-4 px-4">
                    <Badge className={getProviderColor(resource.provider)}>
                      {resource.provider}
                    </Badge>
                  </td>
                  <td className="py-4 px-4">
                    <div className="text-slate-300">{resource.region}</div>
                  </td>
                  <td className="py-4 px-4">
                    <Badge className={getStatusColor(resource.status)}>
                      {resource.status}
                    </Badge>
                  </td>
                  <td className="py-4 px-4">
                    <div className="text-white font-medium">{resource.cost}</div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex space-x-1">
                      {resource.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="bg-slate-800 text-slate-300 text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                      <MoreHorizontal className="h-4 w-4" />
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

export default ResourcesTable;
