
import { BarChart3, Shield, Zap, Cloud, DollarSign, Settings, GitBranch, Bell } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      icon: BarChart3,
      title: 'Operations Dashboard',
      description: 'Real-time monitoring and analytics across all your cloud resources with intelligent insights and predictive recommendations.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: DollarSign,
      title: 'FinOps Management',
      description: 'Advanced cost optimization, budget tracking, and financial governance with automated policies and alerts.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Zap,
      title: 'Automation Engine',
      description: 'Intelligent workflow automation with policy-driven provisioning, scaling, and resource lifecycle management.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Comprehensive security posture management with continuous compliance monitoring and threat detection.',
      gradient: 'from-red-500 to-orange-500'
    },
    {
      icon: Cloud,
      title: 'Multi-Cloud Orchestration',
      description: 'Unified management across AWS, Azure, GCP, and hybrid environments with seamless integration.',
      gradient: 'from-indigo-500 to-blue-500'
    },
    {
      icon: GitBranch,
      title: 'Infrastructure as Code',
      description: 'Advanced IaC management with version control, drift detection, and automated remediation capabilities.',
      gradient: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Everything You Need for
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Multi-Cloud Excellence
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Cloud Gate provides comprehensive modules for operations, financials, automation, and governance across your entire multi-cloud infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300 group">
              <CardHeader>
                <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${feature.gradient} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 leading-relaxed">
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
