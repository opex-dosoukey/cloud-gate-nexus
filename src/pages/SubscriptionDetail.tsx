
import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/dashboard/AppSidebar';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import { ChevronLeft, Edit, Trash2, Link as LinkIcon, Settings, BarChart3, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link, useParams } from 'react-router-dom';

// Mock data for the subscription details
const subscriptionDetails = {
  1: {
    name: "Compute Engine Instance",
    provider: "Google Cloud Platform",
    serviceName: "Web-server Instance",
    department: "Marketing",
    project: "WORKEY",
    plan: "Monthly",
    basicInfo: {
      serviceProvider: "Google Cloud Platform",
      serviceName: "Web-server Instance", 
      department: "Marketing",
      project: "WORKEY",
      plan: "Monthly"
    },
    serviceDetails: {
      name: "WebServer-Instance-01",
      networkSource: "VPC-Production-Network",
      subnetworkSource: "Subnet-Alpha-East",
      externalIp: "203.0.113.12",
      creationTimeStamp: "2024-11-01 14:23:45",
      automaticRestart: "Enabled"
    },
    serviceHealth: {
      status: "Operational",
      zone: "asia-south2-a",
      uptime: "95.0% This week",
      lastDowntime: "04/10/2024, 04:16 am",
      downtimeDuration: "45 minutes", 
      nextMaintenanceWindow: "15/11/2024, 02:00 AM to 03:00 AM",
      lastUpdated: "07/10/2024, 09:16 am"
    },
    resourceDetails: [
      { type: "vCPUs", allocated: "4 vCPUs", description: "Virtual CPUs allocated for processing tasks." },
      { type: "Memory", allocated: "16 GB", description: "RAM assigned to handle workloads efficiently." },
      { type: "Storage", allocated: "500 GB SSD", description: "High-speed SSD storage for data and applications." },
      { type: "Operating System", allocated: "Ubuntu 22.04", description: "Operating system installed on the instance." },
      { type: "Network Bandwidth", allocated: "1 Gbps", description: "Maximum bandwidth for data transfer." },
      { type: "Firewall Rules", allocated: "Allow HTTP, HTTPS", description: "Security rules configured for this instance." },
      { type: "Backup Schedule", allocated: "Daily at 2:00 AM", description: "Automated daily backup schedule." }
    ]
  }
};

const SubscriptionDetail = () => {
  const { id } = useParams();
  const subscription = subscriptionDetails[id as keyof typeof subscriptionDetails];

  if (!subscription) {
    return <div>Subscription not found</div>;
  }

  return (
    <div className="dark">
      <SidebarProvider defaultOpen={true}>
        <div className="min-h-screen flex w-full bg-background">
          <AppSidebar />
          <SidebarInset>
            <DashboardHeader />
            
            <main className="p-6">
              {/* Breadcrumb */}
              <div className="flex items-center mb-6">
                <Link to="/services/subscriptions" className="text-neutral-gray hover:text-neutral-white">
                  <ChevronLeft className="h-4 w-4 inline mr-1" />
                  Subscriptions
                </Link>
                <span className="text-neutral-gray mx-2">›</span>
                <span className="text-primary">{subscription.name}</span>
              </div>

              {/* Title and Actions */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <h1 className="text-2xl font-bold text-accent-pink">{subscription.name}</h1>
                  <Edit className="h-5 w-5 text-neutral-gray cursor-pointer hover:text-neutral-white" />
                </div>
                
                <div className="flex items-center space-x-3">
                  <Button variant="outline" size="sm" className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
                    <Trash2 className="h-4 w-4 mr-2" />
                  </Button>
                  <Button variant="outline" size="sm" className="border-neutral-gray text-neutral-white hover:bg-background-elevated">
                    <LinkIcon className="h-4 w-4 mr-2" />
                  </Button>
                  <Button variant="outline" size="sm" className="border-neutral-gray text-neutral-white hover:bg-background-elevated">
                    <Settings className="h-4 w-4 mr-2" />
                  </Button>
                  <div className="flex items-center">
                    <div className="w-12 h-6 bg-primary rounded-full relative">
                      <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                {/* Basic Info */}
                <Card className="bg-background-surface border-[#2E3142]">
                  <CardHeader>
                    <CardTitle className="text-neutral-white">Basic Info</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-neutral-gray">Service Provider:</span>
                      <span className="text-neutral-white">{subscription.basicInfo.serviceProvider}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-gray">Service Name:</span>
                      <span className="text-neutral-white">{subscription.basicInfo.serviceName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-gray">Department:</span>
                      <span className="text-neutral-white">{subscription.basicInfo.department}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-gray">Project:</span>
                      <span className="text-neutral-white">{subscription.basicInfo.project}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-gray">Plan:</span>
                      <span className="text-neutral-white">{subscription.basicInfo.plan}</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Service Details */}
                <Card className="bg-background-surface border-[#2E3142]">
                  <CardHeader>
                    <CardTitle className="text-neutral-white">Service Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-neutral-gray">Name:</span>
                      <span className="text-neutral-white">{subscription.serviceDetails.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-gray">Network Source:</span>
                      <span className="text-neutral-white">{subscription.serviceDetails.networkSource}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-gray">Subnetwork Source:</span>
                      <span className="text-neutral-white">{subscription.serviceDetails.subnetworkSource}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-gray">External IP:</span>
                      <span className="text-neutral-white">{subscription.serviceDetails.externalIp}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-gray">Creation time stamp:</span>
                      <span className="text-neutral-white">{subscription.serviceDetails.creationTimeStamp}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-gray">Automatic Restart:</span>
                      <Badge className="bg-green-500 text-white">
                        {subscription.serviceDetails.automaticRestart}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Service Health */}
              <Card className="bg-background-surface border-[#2E3142] mb-8">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-neutral-white">Service Health</CardTitle>
                  <div className="flex items-center text-primary text-sm">
                    Last updated: {subscription.serviceHealth.lastUpdated}
                    <RefreshCw className="h-4 w-4 ml-2" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-neutral-gray">Status:</span>
                        <Badge className="bg-green-500 text-white">
                          {subscription.serviceHealth.status}
                        </Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-gray">Last Downtime:</span>
                        <span className="text-neutral-white">{subscription.serviceHealth.lastDowntime}</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-neutral-gray">Zone:</span>
                        <span className="text-neutral-white">{subscription.serviceHealth.zone}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-gray">Downtime Duration:</span>
                        <span className="text-neutral-white">{subscription.serviceHealth.downtimeDuration}</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-neutral-gray">Uptime:</span>
                        <Badge className="bg-green-500 text-white">
                          {subscription.serviceHealth.uptime}
                        </Badge>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-gray">Next Maintenance Window:</span>
                        <span className="text-neutral-white text-xs">{subscription.serviceHealth.nextMaintenanceWindow}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Resource and Configuration Details */}
              <Card className="bg-background-surface border-[#2E3142] mb-8">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-neutral-white">Resource and Configuration Details</CardTitle>
                  <Button variant="ghost" className="text-primary hover:text-primary-light">
                    View All Resources →
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {subscription.resourceDetails.map((resource, index) => (
                      <div key={index} className="grid grid-cols-3 gap-4 py-3 border-b border-[#2E3142] last:border-b-0">
                        <div className="text-neutral-gray">{resource.type}</div>
                        <div className="text-neutral-white">{resource.allocated}</div>
                        <div className="text-neutral-gray text-sm">{resource.description}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Service Architecture */}
              <Card className="bg-background-surface border-[#2E3142]">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-neutral-white">Service Architecture</CardTitle>
                  <Button variant="ghost" className="text-primary hover:text-primary-light">
                    Detailed view →
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-background rounded-lg flex items-center justify-center">
                    <span className="text-neutral-gray">Architecture diagram will be rendered here</span>
                  </div>
                </CardContent>
              </Card>
            </main>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default SubscriptionDetail;
