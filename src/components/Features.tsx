
import { BarChart3, Shield, Zap, DollarSign, Monitor, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      icon: BarChart3,
      title: 'Operations Management',
      description: 'Monitor, track, and optimize your multi-cloud infrastructure with real-time insights and automated workflows.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: DollarSign,
      title: 'FinOps Excellence',
      description: 'Get complete visibility into cloud spending with cost optimization recommendations and budget controls.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Zap,
      title: 'Intelligent Automation',
      description: 'Automate repetitive tasks and streamline processes across your entire cloud ecosystem.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Ensure your multi-cloud environment meets security standards and compliance requirements.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Monitor,
      title: 'Unified Dashboard',
      description: 'Single pane of glass for all your cloud resources, metrics, and performance indicators.',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Enable seamless collaboration with role-based access controls and shared workspaces.',
      color: 'from-yellow-500 to-yellow-600'
    }
  ];

  return (
    <section id="features" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Powerful Features for Modern Cloud Management
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Everything you need to orchestrate, optimize, and govern your multi-cloud environments in one platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-slate-900 border-slate-800 hover:border-slate-700 transition-colors">
              <CardContent className="p-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl mb-6`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
