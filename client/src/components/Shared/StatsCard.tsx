import React from "react";

type StatCardProps = {
  title: string;
  value: string | number;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  gradient: string; // e.g. "from-teal-400 to-green-500"
  textColor?: string; // Tailwind text color classes, optional
};

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon: Icon,
  gradient,
  textColor = "text-gray-100",
}) => (
  <div
    className={`bg-gradient-to-br ${gradient} p-4 rounded-2xl text-white shadow-lg`}
  >
    <div className="flex items-center justify-between">
      <div>
        <p className={`${textColor} text-sm font-medium`}>{title}</p>
        <p className="text-2xl font-bold">{value}</p>
      </div>
      <Icon className="h-8 w-8 text-white/80" />
    </div>
  </div>
);

export default StatCard;
