import React from "react";

type ActivityType = "success" | "info" | "warning";

type ActivityItemProps = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  message: string;
  time: string;
  type: ActivityType;
};

const ActivityItem: React.FC<ActivityItemProps> = ({
  icon: Icon,
  message,
  time,
  type,
}) => {
  const typeStyles: Record<ActivityType, string> = {
    success: "bg-green-50 border-green-100 text-green-500 text-green-600",
    info: "bg-blue-50 border-blue-100 text-blue-500 text-blue-600",
    warning: "bg-orange-50 border-orange-100 text-orange-500 text-orange-600",
  };

  const [bgColor, borderColor, iconColor, timeColor] =
    typeStyles[type].split(" ");

  return (
    <div
      className={`flex items-center justify-between p-3 ${bgColor} rounded-xl border ${borderColor}`}
    >
      <div className="flex items-center">
        <Icon className={`h-5 w-5 ${iconColor} mr-3`} />
        <span className="text-sm text-gray-700">{message}</span>
      </div>
      <span className={`text-xs ${timeColor}`}>{time}</span>
    </div>
  );
};

export default ActivityItem;
