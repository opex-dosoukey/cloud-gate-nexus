
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/dashboard/AppSidebar';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import DashboardWelcome from '@/components/dashboard/DashboardWelcome';
import ServiceSummary from '@/components/dashboard/ServiceSummary';
import ServicesOverview from '@/components/dashboard/ServicesOverview';
import TopVendors from '@/components/dashboard/TopVendors';
import HealthStatus from '@/components/dashboard/HealthStatus';
import RecentErrorLogs from '@/components/dashboard/RecentErrorLogs';
import TopUsedBundles from '@/components/dashboard/TopUsedBundles';
import TopUsedServices from '@/components/dashboard/TopUsedServices';
import ReportsSection from '@/components/dashboard/ReportsSection';
import CostChart from '@/components/dashboard/CostChart';
import ProjectExpenses from '@/components/dashboard/ProjectExpenses';

const Dashboard = () => {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen flex w-full bg-slate-950">
        <AppSidebar />
        <SidebarInset>
          <DashboardHeader />
          
          <main className="p-6 space-y-6">
            <DashboardWelcome />
            <ServiceSummary />
            
            {/* First row of cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
              <ServicesOverview />
              <TopVendors />
              <HealthStatus />
              <ReportsSection />
            </div>
            
            {/* Second row of cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <RecentErrorLogs />
              <TopUsedBundles />
              <TopUsedServices />
            </div>
            
            {/* Bottom section with charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <CostChart />
              <ProjectExpenses />
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
