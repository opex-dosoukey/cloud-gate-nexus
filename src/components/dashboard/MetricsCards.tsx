
import { TrendingUp, TrendingDown, DollarSign, Server, AlertTriangle, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const MetricsCards = () => {
  const metrics = [
    {
      title: 'Total Cost',
      value: '$12,450',
      change: '+2.5%',
      trend: 'up',
      icon: DollarSign,
      color: 'text-green-400'
    },
    {
      title: 'Active Resources',
      value: '1,247',
      change: '+12%',
      trend: 'up',
      icon: Server,
      color: 'text-blue-400'
    },
    {
      title: 'Cost Savings',
      value: '$3,890',
      change: '+8.2%',
      trend: 'up',
      icon: TrendingDown,
      color: 'text-purple-400'
    },
    {
      title: 'Alerts',
      value: '23',
      change: '-15%',
      trend: 'down',
      icon: AlertTriangle,
      color: 'text-yellow-400'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <Card key={index} className="bg-slate-900 border-slate-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-400">
              {metric.title}
            </CardTitle>
            <metric.icon className={`h-4 w-4 ${metric.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white mb-1">
              {metric.value}
            </div>
            <div className="flex items-center text-xs">
              {metric.trend === 'up' ? (
                <TrendingUp className="h-3 w-3 text-green-400 mr-1" />
              ) : (
                <TrendingDown className="h-3 w-3 text-red-400 mr-1" />
              )}
              <span className={metric.trend === 'up' ? 'text-green-400' : 'text-red-400'}>
                {metric.change}
              </span>
              <span className="text-slate-400 ml-1">from last month</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default MetricsCards;
