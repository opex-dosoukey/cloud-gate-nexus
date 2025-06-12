
import { useState } from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
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
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-slate-950 flex">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      
      <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-16'}`}>
        <DashboardHeader toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        
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
      </div>
    </div>
  );
};

export default Dashboard;
