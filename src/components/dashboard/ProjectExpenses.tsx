
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ProjectExpenses = () => {
  const expenses = [
    { name: 'WORKEY', amount: '552.00', currency: 'SAR', icon: '💼', color: 'text-green-400' },
    { name: 'WORKEY V2', amount: '500.00', currency: 'SAR', icon: '💼', color: 'text-green-400' },
    { name: 'SYNTERA', amount: '450.00', currency: 'SAR', icon: '⚙️', color: 'text-green-400' },
    { name: 'Cloud Gate', amount: '998.00', currency: 'SAR', icon: '☁️', color: 'text-blue-400' },
    { name: 'Obelion Heart', amount: '0', currency: 'SAR', icon: '❤️', color: 'text-blue-400' },
    { name: 'WORKEY new mobil...', amount: '0', currency: 'SAR', icon: '📱', color: 'text-green-400' },
    { name: 'Workey Dashboard', amount: '0', currency: 'SAR', icon: '📊', color: 'text-green-400' },
  ];

  return (
    <Card className="bg-slate-900 border-slate-800">
      <CardHeader>
        <CardTitle className="text-white">Current Project Expenses</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {expenses.map((expense, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-slate-800 rounded-lg">
            <div className="flex items-center space-x-3">
              <span className="text-lg">{expense.icon}</span>
              <span className="text-white font-medium">{expense.name}</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-white font-bold">{expense.amount}</span>
              <span className="text-slate-400 text-sm">{expense.currency}</span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default ProjectExpenses;
