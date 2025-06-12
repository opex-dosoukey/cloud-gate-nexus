
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="relative">
              <Cloud className="h-8 w-8 text-blue-400" />
              <div className="absolute inset-0 bg-blue-400/20 blur-xl rounded-full"></div>
            </div>
            <span className="text-xl font-bold text-white">Cloud Gate</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-slate-300 hover:text-white transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-slate-300 hover:text-white transition-colors">
              Pricing
            </a>
            <a href="#docs" className="text-slate-300 hover:text-white transition-colors">
              Documentation
            </a>
            <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
              Sign In
            </Button>
            <Link to="/dashboard">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-300"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50">
            <div className="px-4 py-6 space-y-4">
              <a href="#features" className="block text-slate-300 hover:text-white transition-colors">
                Features
              </a>
              <a href="#pricing" className="block text-slate-300 hover:text-white transition-colors">
                Pricing
              </a>
              <a href="#docs" className="block text-slate-300 hover:text-white transition-colors">
                Documentation
              </a>
              <div className="flex flex-col space-y-3 pt-4">
                <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                  Sign In
                </Button>
                <Link to="/dashboard">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
