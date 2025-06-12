
import { TrendingUp, Users, Globe, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Stats = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: '40%',
      label: 'Cost Reduction',
      description: 'Average savings on cloud spend'
    },
    {
      icon: Users,
      value: '10K+',
      label: 'Active Users',
      description: 'DevOps teams worldwide'
    },
    {
      icon: Globe,
      value: '200+',
      label: 'Regions',
      description: 'Multi-cloud coverage'
    },
    {
      icon: Zap,
      value: '99.9%',
      label: 'Uptime',
      description: 'Platform availability'
    }
  ];

  return (
    <section className="relative -mt-16 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl mb-4">
                  <stat.icon className="h-6 w-6 text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-slate-300 mb-1">{stat.label}</div>
                <div className="text-sm text-slate-400">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
