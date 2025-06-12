
import { ArrowRight, Cloud, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-slate-800/50 border border-slate-700/50 rounded-full px-4 py-2 mb-8">
            <Sparkles className="h-4 w-4 text-blue-400" />
            <span className="text-sm text-slate-300">Advanced Multi-Cloud Orchestration</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Orchestrate Your
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Multi-Cloud
            </span>
            <br />
            Environment
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            The most advanced Multi-Cloud Marketplace for enterprises to optimize, govern, and automate their cloud infrastructure across all major providers.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <Link to="/dashboard">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6 h-auto group"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-slate-600 text-slate-300 hover:bg-slate-800 text-lg px-8 py-6 h-auto"
            >
              Watch Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="text-center">
            <p className="text-sm text-slate-400 mb-6">Trusted by leading enterprises worldwide</p>
            <div className="flex flex-wrap items-center justify-center space-x-8 opacity-60">
              {['AWS', 'Azure', 'Google Cloud', 'Oracle', 'IBM Cloud'].map((provider) => (
                <div key={provider} className="flex items-center space-x-2 text-slate-500">
                  <Cloud className="h-5 w-5" />
                  <span className="font-medium">{provider}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
