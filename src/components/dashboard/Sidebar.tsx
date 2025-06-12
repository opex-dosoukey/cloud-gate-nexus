
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Cloud, 
  LayoutDashboard, 
  BarChart3, 
  DollarSign, 
  Settings, 
  Users, 
  Shield, 
  Zap,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  const location = useLocation();

  const menuItems = [
    {
      title: 'Dashboard',
      icon: LayoutDashboard,
      path: '/dashboard',
      color: 'text-blue-400'
    },
    {
      title: 'Operations',
      icon: BarChart3,
      path: '/operations',
      color: 'text-green-400'
    },
    {
      title: 'FinOps',
      icon: DollarSign,
      path: '/finops',
      color: 'text-yellow-400'
    },
    {
      title: 'Automation',
      icon: Zap,
      path: '/automation',
      color: 'text-purple-400'
    },
    {
      title: 'Security',
      icon: Shield,
      path: '/security',
      color: 'text-red-400'
    },
    {
      title: 'Users',
      icon: Users,
      path: '/users',
      color: 'text-cyan-400'
    },
    {
      title: 'Settings',
      icon: Settings,
      path: '/settings',
      color: 'text-slate-400'
    }
  ];

  return (
    <div className={cn(
      "fixed left-0 top-0 h-full bg-slate-900 border-r border-slate-800 transition-all duration-300 z-40",
      isOpen ? "w-64" : "w-16"
    )}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-slate-800">
        <div className={cn("flex items-center space-x-3", !isOpen && "justify-center")}>
          <div className="relative">
            <Cloud className="h-8 w-8 text-blue-400" />
            <div className="absolute inset-0 bg-blue-400/20 blur-xl rounded-full"></div>
          </div>
          {isOpen && (
            <span className="text-xl font-bold text-white">Cloud Gate</span>
          )}
        </div>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsOpen(!isOpen)}
          className="text-slate-400 hover:text-white hover:bg-slate-800"
        >
          {isOpen ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center space-x-3 px-3 py-3 rounded-lg transition-all duration-200 group",
                isActive 
                  ? "bg-slate-800 text-white" 
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50",
                !isOpen && "justify-center"
              )}
            >
              <item.icon className={cn("h-5 w-5", isActive ? item.color : "group-hover:" + item.color)} />
              {isOpen && (
                <span className="font-medium">{item.title}</span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      {isOpen && (
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-slate-800 rounded-lg p-4">
            <div className="text-sm text-slate-300 mb-2">Need help?</div>
            <div className="text-xs text-slate-400">
              Contact our support team for assistance
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
