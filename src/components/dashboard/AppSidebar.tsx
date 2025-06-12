
import { Link, useLocation } from 'react-router-dom';
import { 
  Cloud, 
  Grid,
  Subscription,
  Database,
  ClipboardList,
  Eye,
  Receipt,
  Calculator,
  Key,
  OfficeBuilding,
  Briefcase,
  User,
  ExclamationCircle
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from '@/components/ui/sidebar';

const sidebarData = [
  { type: "link", label: "Dashboard", icon: Grid, route: "/dashboard", active: true },
  { type: "group", label: "Services" },
  { type: "link", label: "Subscriptions", icon: Subscription, route: "/services/subscriptions", badge: 4 },
  { type: "link", label: "All Resources", icon: Database, route: "/services/resources" },
  { type: "group", label: "Monitoring" },
  { type: "link", label: "Audit Log", icon: ClipboardList, route: "/monitoring/audit" },
  { type: "link", label: "Monitor Log", icon: Eye, route: "/monitoring/logs" },
  { type: "group", label: "Fin Ops" },
  { type: "link", label: "Invoices", icon: Receipt, route: "/finops/invoices", dot: true },
  { type: "link", label: "Managed By Cloud Gate", icon: Cloud, route: "/finops/managed" },
  { type: "link", label: "All Resources Expenses", icon: Calculator, route: "/finops/expenses" },
  { type: "group", label: "Settings" },
  { type: "link", label: "Service Keys", icon: Key, route: "/settings/keys" },
  { type: "link", label: "Departments", icon: OfficeBuilding, route: "/settings/departments", badge: 4 },
  { type: "link", label: "Projects", icon: Briefcase, route: "/settings/projects", badge: 4 },
  { type: "link", label: "Users", icon: User, route: "/settings/users" },
  { type: "group", label: "Support" },
  { type: "link", label: "Issues", icon: ExclamationCircle, route: "/support/issues" }
];

export function AppSidebar() {
  const location = useLocation();

  const renderSidebarItems = () => {
    const items = [];
    let currentGroup = null;

    sidebarData.forEach((item, index) => {
      if (item.type === "group") {
        if (currentGroup) {
          items.push(currentGroup);
        }
        currentGroup = {
          label: item.label,
          items: []
        };
      } else if (item.type === "link" && currentGroup) {
        const isActive = location.pathname === item.route;
        currentGroup.items.push(
          <SidebarMenuItem key={item.route}>
            <SidebarMenuButton 
              asChild
              isActive={isActive}
              className={cn(
                "w-full justify-start py-2 px-4 rounded-lg transition-all duration-200 relative",
                isActive 
                  ? "bg-background-elevated text-neutral-white border-l-2 border-primary" 
                  : "text-neutral-gray hover:text-neutral-white hover:bg-background-elevated"
              )}
            >
              <Link to={item.route}>
                <item.icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
                {item.badge && (
                  <Badge variant="count" className="ml-auto">
                    {item.badge}
                  </Badge>
                )}
                {item.dot && (
                  <Badge variant="dot" className="absolute top-1 right-1" />
                )}
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        );
      }
    });

    if (currentGroup) {
      items.push(currentGroup);
    }

    return items.map((group, index) => (
      <SidebarGroup key={index}>
        <SidebarGroupLabel className="uppercase text-xs text-neutral-gray mb-2 pl-4">
          {group.label}
        </SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu className="space-y-1">
            {group.items}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    ));
  };

  // Handle ungrouped Dashboard item
  const dashboardItem = sidebarData.find(item => item.route === "/dashboard");
  const isActive = location.pathname === "/dashboard";

  return (
    <Sidebar className="bg-background-surface border-[#2E3142]">
      <SidebarHeader className="border-b border-[#2E3142] p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 group-data-[collapsible=icon]:justify-center">
            <div className="relative">
              <Cloud className="h-8 w-8 text-primary" />
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full"></div>
            </div>
            <span className="text-xl font-bold text-neutral-white group-data-[collapsible=icon]:hidden">
              Cloud Gate
            </span>
          </div>
          <SidebarTrigger className="text-neutral-gray hover:text-neutral-white hover:bg-background-elevated" />
        </div>
      </SidebarHeader>

      <SidebarContent className="px-4 py-6">
        {/* Dashboard - ungrouped */}
        <SidebarGroup className="mb-6">
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  asChild
                  isActive={isActive}
                  className={cn(
                    "w-full justify-start py-2 px-4 rounded-lg transition-all duration-200",
                    isActive 
                      ? "bg-background-elevated text-neutral-white border-l-2 border-primary" 
                      : "text-neutral-gray hover:text-neutral-white hover:bg-background-elevated"
                  )}
                >
                  <Link to="/dashboard">
                    <Grid className="h-5 w-5" />
                    <span className="font-medium">Dashboard</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Grouped items */}
        {renderSidebarItems()}
      </SidebarContent>

      <SidebarFooter className="p-4">
        <div className="bg-background-elevated rounded-lg p-4 group-data-[collapsible=icon]:hidden">
          <div className="text-sm text-neutral-white mb-2">Need help?</div>
          <div className="text-xs text-neutral-gray">
            Contact our support team for assistance
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
