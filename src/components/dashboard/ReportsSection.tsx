
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Plus, ArrowRight } from 'lucide-react';

const ReportsSection = () => {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-foreground">Reports</CardTitle>
      </CardHeader>
      <CardContent className="text-center py-8">
        <FileText className="h-16 w-16 text-blue-400 mx-auto mb-4" />
        <p className="text-foreground font-medium mb-2">Created Reports: 12</p>
        <div className="flex flex-col sm:flex-row gap-2 justify-center">
          <Button variant="outline" className="border-border text-muted-foreground hover:bg-accent hover:text-accent-foreground">
            View all
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Create New
            <Plus className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReportsSection;
