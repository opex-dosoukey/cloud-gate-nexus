
import { Cloud, Users, Building, Globe } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: Cloud,
      value: '500+',
      label: 'Cloud Services',
      description: 'Integrated across major providers'
    },
    {
      icon: Users,
      value: '10K+',
      label: 'Active Users',
      description: 'Managing multi-cloud environments'
    },
    {
      icon: Building,
      value: '1,200+',
      label: 'Enterprise Clients',
      description: 'Trust Cloud Gate for their operations'
    },
    {
      icon: Globe,
      value: '50+',
      label: 'Global Regions',
      description: 'Worldwide cloud presence'
    }
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-slate-600 transition-colors">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                <h4 className="text-lg font-semibold text-slate-300 mb-2">{stat.label}</h4>
                <p className="text-slate-400 text-sm">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
