
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle } from 'lucide-react';

const RecentErrorLogs = () => {
  const errorLogs = [
    {
      title: 'Compute Engine Instance',
      subtitle: 'WebServer-Instance-01',
      time: 'Just now'
    },
    {
      title: 'Compute Engine Instance', 
      subtitle: 'WebServer-Instance-01',
      time: '2 min ago'
    },
    {
      title: 'Compute Engine Instance',
      subtitle: 'WebServer-Instance-01', 
      time: '5 min ago'
    }
  ];

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-foreground">Recent Error Logs</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {errorLogs.map((log, index) => (
          <div key={index} className="flex items-center space-x-3 p-3 bg-accent rounded-lg">
            <AlertCircle className="h-5 w-5 text-red-400" />
            <div className="flex-1">
              <p className="text-foreground font-medium">{log.title}</p>
              <p className="text-sm text-muted-foreground">{log.subtitle}</p>
            </div>
            <span className="text-xs text-muted-foreground">{log.time}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default RecentErrorLogs;
