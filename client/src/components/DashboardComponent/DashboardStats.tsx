import { Users, DollarSign, AlertTriangle, Activity } from "lucide-react";
import { useAdminContext } from "../../Provider/AdminProvider";
import StatCard from "../Shared/StatsCard";
import { IonContent } from "@ionic/react";

const DashboardStats = () => {
  const { stats } = useAdminContext();

  const statsConfig = [
    {
      title: "Active Users",
      value: stats.activeUsers,
      icon: Users,
      gradient: "from-teal-500 to-teal-600",
      textColor: "text-teal-100",
    },
    {
      title: "Today Revenue",
      value: `₱${stats.todayRevenue}`,
      icon: DollarSign,
      gradient: "from-green-500 to-green-600",
      textColor: "text-green-100",
    },
    {
      title: "Pending Payments",
      value: stats.pendingPayments,
      icon: AlertTriangle,
      gradient: "from-orange-500 to-orange-600",
      textColor: "text-orange-100",
    },
    {
      title: "Occupancy",
      value: `${stats.occupancy}%`,
      icon: Activity,
      gradient: "from-blue-500 to-blue-600",
      textColor: "text-blue-100",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {statsConfig.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};
export default DashboardStats;
