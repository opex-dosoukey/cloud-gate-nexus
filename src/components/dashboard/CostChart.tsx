
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
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-foreground">Cost Trends</CardTitle>
        <p className="text-sm text-muted-foreground">Monthly cloud spending across all providers</p>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="month" 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickFormatter={(value) => `$${value}`}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'hsl(var(--popover))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
                color: 'hsl(var(--popover-foreground))'
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
