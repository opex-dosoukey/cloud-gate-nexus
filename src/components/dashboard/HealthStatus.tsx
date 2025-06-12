
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const HealthStatus = () => {
  return (
    <Card className="bg-slate-900 border-slate-800">
      <CardHeader>
        <CardTitle className="text-white">Overall Health Status</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-center">
        <div className="relative w-32 h-32">
          <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#374151"
              strokeWidth="2"
            />
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#3B82F6"
              strokeWidth="2"
              strokeDasharray="96, 100"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-white">96.0%</span>
            <span className="text-xs text-slate-400">last 30 days</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HealthStatus;
