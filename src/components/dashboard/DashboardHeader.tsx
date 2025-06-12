
import { Bell, Search, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const DashboardHeader = () => {
  return (
    <header className="bg-background-elevated border-b border-[#2E3142] px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-gray" />
            <Input
              placeholder="Search resources..."
              className="pl-10 w-96 bg-background-surface border-[#2E3142] text-neutral-white placeholder-neutral-gray focus:border-primary"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="text-neutral-gray hover:text-neutral-white hover:bg-background-surface relative">
            <Bell className="h-5 w-5" />
            <Badge variant="dot" className="absolute -top-1 -right-1" />
          </Button>
          
          <Button className="bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded-lg">
            Add User
          </Button>
          
          <Avatar>
            <AvatarFallback className="bg-background-surface text-neutral-white border border-[#2E3142]">
              <User className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
