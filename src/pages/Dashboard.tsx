
import { useState } from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import MetricsCards from '@/components/dashboard/MetricsCards';
import CostChart from '@/components/dashboard/CostChart';
import ResourcesTable from '@/components/dashboard/ResourcesTable';
import UsageChart from '@/components/dashboard/UsageChart';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-slate-950 flex">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      
      <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-16'}`}>
        <DashboardHeader toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        
        <main className="p-6 space-y-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Dashboard Overview</h1>
            <p className="text-slate-400">Monitor your multi-cloud infrastructure and costs</p>
          </div>

          <MetricsCards />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <CostChart />
            <UsageChart />
          </div>
          
          <ResourcesTable />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
