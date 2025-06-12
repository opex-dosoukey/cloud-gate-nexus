
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const UsageChart = () => {
  const data = [
    { provider: 'AWS', compute: 45, storage: 30, network: 15 },
    { provider: 'Azure', compute: 35, storage: 25, network: 20 },
    { provider: 'GCP', compute: 20, storage: 15, network: 10 },
    { provider: 'Oracle', compute: 15, storage: 12, network: 8 },
  ];

  return (
    <Card className="bg-slate-900 border-slate-800">
      <CardHeader>
        <CardTitle className="text-white">Resource Usage</CardTitle>
        <p className="text-sm text-slate-400">Usage breakdown by cloud provider</p>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis 
              dataKey="provider" 
              stroke="#9CA3AF"
              fontSize={12}
            />
            <YAxis 
              stroke="#9CA3AF"
              fontSize={12}
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: '#1F2937',
                border: '1px solid #374151',
                borderRadius: '8px',
                color: '#F9FAFB'
              }}
              formatter={(value) => [`${value}%`, '']}
            />
            <Bar dataKey="compute" fill="#3B82F6" name="Compute" />
            <Bar dataKey="storage" fill="#10B981" name="Storage" />
            <Bar dataKey="network" fill="#F59E0B" name="Network" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default UsageChart;
