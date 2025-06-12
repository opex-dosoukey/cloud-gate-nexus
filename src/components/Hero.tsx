
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            The Future of{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Multi-Cloud
            </span>{' '}
            Management
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Orchestrate, optimize, and govern your multi-cloud environments with Cloud Gate's 
            advanced marketplace for Operations, Financials, and Automation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/dashboard">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            
            <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-4 text-lg">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
          
          {/* Hero Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 p-8 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                  <div className="h-4 w-4 bg-blue-500 rounded-full mb-4"></div>
                  <h3 className="text-white font-semibold mb-2">Operations</h3>
                  <p className="text-slate-400 text-sm">Monitor and manage your cloud infrastructure</p>
                </div>
                
                <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                  <div className="h-4 w-4 bg-green-500 rounded-full mb-4"></div>
                  <h3 className="text-white font-semibold mb-2">FinOps</h3>
                  <p className="text-slate-400 text-sm">Optimize costs and financial governance</p>
                </div>
                
                <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                  <div className="h-4 w-4 bg-purple-500 rounded-full mb-4"></div>
                  <h3 className="text-white font-semibold mb-2">Automation</h3>
                  <p className="text-slate-400 text-sm">Streamline workflows and processes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
