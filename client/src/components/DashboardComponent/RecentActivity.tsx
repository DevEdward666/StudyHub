import { CheckCircle, CreditCard, AlertTriangle } from "lucide-react";
import ActivityItem from "../Shared/ActivityItem";
import Card from "../Shared/Card";

type Activity = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  message: string;
  time: string;
  type: "success" | "info" | "warning";
};

const RecentActivity = () => {
  const activities: Activity[] = [
    {
      icon: CheckCircle,
      message: "John Doe checked in - Seat A-01",
      time: "2 mins ago",
      type: "success",
    },
    {
      icon: CreditCard,
      message: "Payment processed - ₱350 (10 hours)",
      time: "5 mins ago",
      type: "info",
    },
    {
      icon: AlertTriangle,
      message: "Mike Chen - Low balance warning",
      time: "8 mins ago",
      type: "warning",
    },
  ];

  return (
    <Card title="Recent Activity">
      <div className="space-y-3">
        {activities.map((activity, index) => (
          <ActivityItem key={index} {...activity} />
        ))}
      </div>
    </Card>
  );
};

export default RecentActivity;
