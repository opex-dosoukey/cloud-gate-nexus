import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/dashboard/AppSidebar';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import { ChevronLeft, Search, Filter, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Link } from 'react-router-dom';

const subscriptionsData = [
  {
    id: 1,
    name: "Compute Engine Instance",
    type: "Service",
    vendor: "Google Cloud Services",
    project: "WORKEY",
    department: "Marketing",
    status: "active",
    icon: "🔥"
  },
  {
    id: 2,
    name: "Elastic Compute Cloud (EC2)",
    type: "Service", 
    vendor: "Amazon Web Services",
    project: "WORKEY",
    department: "Marketing",
    status: "inactive",
    icon: "🟠"
  },
  {
    id: 3,
    name: "Manufacturing Cloud Bundle",
    type: "Bundle",
    vendor: "Multiple Vendors",
    project: "WORKEY V2",
    department: "Marketing", 
    status: "active",
    icon: "🔧"
  },
  {
    id: 4,
    name: "Azure Blob Storage",
    type: "Service",
    vendor: "Azure Blob Storage",
    project: "Obelion Heart",
    department: "IT",
    status: "error",
    icon: "🔺"
  },
  {
    id: 5,
    name: "Laravel Vapor",
    type: "Service",
    vendor: "Laravel",
    project: "WORKEY",
    department: "Marketing",
    status: "active",
    icon: "🔴"
  },
  {
    id: 6,
    name: "Healthcare Cloud Bundle",
    type: "Bundle",
    vendor: "Amazon Web Services",
    project: "Cloud Gate",
    department: "Operations",
    status: "active",
    icon: "🏥"
  },
  {
    id: 7,
    name: "Manufacturing Cloud Bundle",
    type: "Bundle", 
    vendor: "Amazon Web Services",
    project: "WORKEY V2",
    department: "Marketing",
    status: "active",
    icon: "🟠"
  },
  {
    id: 8,
    name: "IBM Cloud Kubernetes Servers",
    type: "Service",
    vendor: "IBM Cloud",
    project: "Obelion Heart", 
    department: "IT",
    status: "active",
    icon: "☁️"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'active':
      return 'bg-green-500';
    case 'inactive':
      return 'bg-gray-500';
    case 'error':
      return 'bg-red-500';
    default:
      return 'bg-gray-500';
  }
};

const Subscriptions = () => {
  return (
    <div className="dark">
      <SidebarProvider defaultOpen={true}>
        <div className="min-h-screen flex w-full bg-background">
          <AppSidebar />
          <SidebarInset>
            <DashboardHeader />
            
            <main className="p-6">
              {/* Header Section */}
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <Button variant="ghost" size="sm" className="text-neutral-gray hover:text-neutral-white mr-2">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <h1 className="text-2xl font-bold text-accent-pink">Your Active Subscriptions</h1>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <h2 className="text-lg text-neutral-gray">Subscriptions (1673)</h2>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-gray" />
                      <Input
                        placeholder="Search"
                        className="pl-10 w-64 bg-background-surface border-[#2E3142] text-neutral-white placeholder-neutral-gray"
                      />
                    </div>
                    
                    <Button variant="outline" className="border-neutral-gray text-neutral-white hover:bg-background-elevated">
                      <Filter className="h-4 w-4 mr-2" />
                      Filter by
                    </Button>
                    
                    <Button variant="outline" className="border-neutral-gray text-neutral-white hover:bg-background-elevated">
                      <Download className="h-4 w-4 mr-2" />
                      Export
                    </Button>
                  </div>
                </div>
              </div>

              {/* Table */}
              <div className="bg-background-surface rounded-lg border border-[#2E3142]">
                <Table>
                  <TableHeader>
                    <TableRow className="border-[#2E3142] hover:bg-background-elevated">
                      <TableHead className="text-neutral-gray font-medium">Subscription</TableHead>
                      <TableHead className="text-neutral-gray font-medium">Type</TableHead>
                      <TableHead className="text-neutral-gray font-medium">Vendors</TableHead>
                      <TableHead className="text-neutral-gray font-medium">Project</TableHead>
                      <TableHead className="text-neutral-gray font-medium">Department</TableHead>
                      <TableHead className="text-neutral-gray font-medium">Status</TableHead>
                      <TableHead className="text-neutral-gray font-medium"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {subscriptionsData.map((subscription) => (
                      <TableRow key={subscription.id} className="border-[#2E3142] hover:bg-background-elevated">
                        <TableCell>
                          <div className="flex items-center space-x-3">
                            <span className="text-lg">{subscription.icon}</span>
                            <span className="text-neutral-white font-medium">{subscription.name}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <span className="text-neutral-gray">{subscription.type}</span>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <span className="text-lg">{subscription.icon}</span>
                            <span className="text-neutral-gray">{subscription.vendor}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <span className="text-neutral-gray">{subscription.project}</span>
                        </TableCell>
                        <TableCell>
                          <span className="text-neutral-gray">{subscription.department}</span>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <div className={`w-3 h-3 rounded-full ${getStatusColor(subscription.status)} mr-2`}></div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm" className="text-primary hover:text-primary-light" asChild>
                            <Link to={`/services/subscriptions/${subscription.id}`}>
                              View Service →
                            </Link>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-center space-x-2 mt-6">
                <Button variant="ghost" size="sm" className="text-neutral-gray hover:text-neutral-white">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="bg-primary text-white">
                  1
                </Button>
                <Button variant="ghost" size="sm" className="text-neutral-gray hover:text-neutral-white">
                  2
                </Button>
                <Button variant="ghost" size="sm" className="text-neutral-gray hover:text-neutral-white">
                  3
                </Button>
                <Button variant="ghost" size="sm" className="text-neutral-gray hover:text-neutral-white">
                  4
                </Button>
                <Button variant="ghost" size="sm" className="text-neutral-gray hover:text-neutral-white">
                  5
                </Button>
                <Button variant="ghost" size="sm" className="text-neutral-gray hover:text-neutral-white">
                  <ChevronLeft className="h-4 w-4 rotate-180" />
                </Button>
              </div>
            </main>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Subscriptions;
