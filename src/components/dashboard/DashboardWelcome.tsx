
import { Button } from '@/components/ui/button';
import { Plus, Filter, Download } from 'lucide-react';

const DashboardWelcome = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
      <div className="mb-4 lg:mb-0">
        <h1 className="text-2xl font-bold text-pink-400 mb-2">Good Morning Mohamed</h1>
        <div className="flex items-center space-x-2">
          <span className="text-blue-400">Custom Dashboard</span>
          <span className="text-muted-foreground">ℹ️</span>
        </div>
      </div>
      
      <div className="flex flex-wrap items-center gap-3">
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          <Plus className="h-4 w-4 mr-2" />
          Add User
        </Button>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          <Plus className="h-4 w-4 mr-2" />
          Add Project
        </Button>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          <Plus className="h-4 w-4 mr-2" />
          Add Service Key
        </Button>
        <Button variant="outline" className="border-border text-muted-foreground hover:bg-accent hover:text-accent-foreground">
          <Filter className="h-4 w-4 mr-2" />
          Filter by
        </Button>
        <Button variant="outline" className="border-border text-muted-foreground hover:bg-accent hover:text-accent-foreground">
          <Download className="h-4 w-4 mr-2" />
          Export
        </Button>
      </div>
    </div>
  );
};

export default DashboardWelcome;
