
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const CostChart = () => {
  const data = [
    { month: 'Jan', cost: 8500, forecast: 8200 },
    { month: 'Feb', cost: 9200, forecast: 8800 },
    { month: 'Mar', cost: 8800, forecast: 9100 },
    { month: 'Apr', cost: 10200, forecast: 9500 },
    { month: 'May', cost: 11800, forecast: 10800 },
    { month: 'Jun', cost: 12450, forecast: 11200 },
  ];

  return (
    <Card className="bg-slate-900 border-slate-800">
      <CardHeader>
        <CardTitle className="text-white">Cost Trends</CardTitle>
        <p className="text-sm text-slate-400">Monthly cloud spending across all providers</p>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis 
              dataKey="month" 
              stroke="#9CA3AF"
              fontSize={12}
            />
            <YAxis 
              stroke="#9CA3AF"
              fontSize={12}
              tickFormatter={(value) => `$${value}`}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: '#1F2937',
                border: '1px solid #374151',
                borderRadius: '8px',
                color: '#F9FAFB'
              }}
              formatter={(value) => [`$${value}`, '']}
            />
            <Line 
              type="monotone" 
              dataKey="cost" 
              stroke="#3B82F6" 
              strokeWidth={3}
              dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
              name="Actual Cost"
            />
            <Line 
              type="monotone" 
              dataKey="forecast" 
              stroke="#8B5CF6" 
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={{ fill: '#8B5CF6', strokeWidth: 2, r: 3 }}
              name="Forecast"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default CostChart;
