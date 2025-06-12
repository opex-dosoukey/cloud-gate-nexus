
import { Link, useLocation } from 'react-router-dom';
import { 
  Cloud, 
  LayoutDashboard, 
  BarChart3, 
  DollarSign, 
  Settings, 
  Users, 
  Shield, 
  Zap
} from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from '@/components/ui/sidebar';

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
    color: 'text-muted-foreground'
  }
];

export function AppSidebar() {
  const location = useLocation();

  return (
    <Sidebar className="bg-sidebar border-sidebar-border">
      <SidebarHeader className="border-b border-sidebar-border p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 group-data-[collapsible=icon]:justify-center">
            <div className="relative">
              <Cloud className="h-8 w-8 text-blue-400" />
              <div className="absolute inset-0 bg-blue-400/20 blur-xl rounded-full"></div>
            </div>
            <span className="text-xl font-bold text-sidebar-foreground group-data-[collapsible=icon]:hidden">
              Cloud Gate
            </span>
          </div>
          <SidebarTrigger className="text-muted-foreground hover:text-sidebar-foreground hover:bg-sidebar-accent" />
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2 p-4">
              {menuItems.map((item) => {
                const isActive = location.pathname === item.path;
                
                return (
                  <SidebarMenuItem key={item.path}>
                    <SidebarMenuButton 
                      asChild
                      isActive={isActive}
                      className={cn(
                        "w-full justify-start px-3 py-3 rounded-lg transition-all duration-200",
                        isActive 
                          ? "bg-sidebar-accent text-sidebar-foreground" 
                          : "text-muted-foreground hover:text-sidebar-foreground hover:bg-sidebar-accent/50"
                      )}
                    >
                      <Link to={item.path}>
                        <item.icon className={cn(
                          "h-5 w-5", 
                          isActive ? item.color : `group-hover:${item.color}`
                        )} />
                        <span className="font-medium">{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <div className="bg-sidebar-accent rounded-lg p-4 group-data-[collapsible=icon]:hidden">
          <div className="text-sm text-sidebar-foreground mb-2">Need help?</div>
          <div className="text-xs text-muted-foreground">
            Contact our support team for assistance
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
