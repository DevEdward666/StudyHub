import { Calendar } from "lucide-react";
import ActionButton from "../components/Shared/ActionButton";
import Card from "../components/Shared/Card";
import { useAdminContext } from "../Provider/AdminProvider";

const ReportsPage = () => {
  const { stats } = useAdminContext();

  const todaySummary = [
    { label: "Total Sessions", value: "24", color: "teal" },
    { label: "Total Revenue", value: `₱${stats.todayRevenue}`, color: "green" },
    { label: "Avg Session", value: "3.2hrs", color: "blue" },
    { label: "Peak Hour", value: "2-4 PM", color: "purple" },
  ];

  const transactions = [
    { user: "John Doe", amount: 350, hours: 10, method: "QR", time: "2:45 PM" },
    {
      user: "Jane Smith",
      amount: 600,
      hours: 20,
      method: "Cash",
      time: "2:30 PM",
    },
    { user: "Mike Chen", amount: 200, hours: 5, method: "QR", time: "2:15 PM" },
    {
      user: "Sarah Johnson",
      amount: 350,
      hours: 10,
      method: "Cash",
      time: "1:58 PM",
    },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-900">Reports & Analytics</h2>

      <Card title="Today's Summary" icon={Calendar}>
        <div className="grid grid-cols-2 gap-4">
          {todaySummary.map((item, index) => (
            <div
              key={index}
              className={`bg-${item.color}-50 p-4 rounded-xl border border-${item.color}-100`}
            >
              <p className={`text-${item.color}-700 text-sm font-medium`}>
                {item.label}
              </p>
              <p className={`text-2xl font-bold text-${item.color}-800`}>
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </Card>

      <Card title="Recent Transactions">
        <div className="space-y-3">
          {transactions.map((transaction, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-xl"
            >
              <div>
                <p className="font-medium text-gray-900">{transaction.user}</p>
                <p className="text-sm text-gray-600">
                  {transaction.hours} hours • {transaction.method}
                </p>
              </div>
              <div className="text-right">
                <p className="font-bold text-green-600">
                  ₱{transaction.amount}
                </p>
                <p className="text-xs text-gray-500">{transaction.time}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card title="Export Reports">
        <div className="grid grid-cols-2 gap-3">
          <ActionButton gradient="from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700">
            Daily Report (PDF)
          </ActionButton>
          <ActionButton gradient="from-green-500 to-green-600 hover:from-green-600 hover:to-green-700">
            Weekly Summary
          </ActionButton>
        </div>
      </Card>
    </div>
  );
};
export default ReportsPage;
