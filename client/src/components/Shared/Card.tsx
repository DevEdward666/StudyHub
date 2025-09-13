import React, { ReactNode } from "react";

type CardProps = {
  title?: string;
  children: ReactNode;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>; // Lucide/heroicons style
  className?: string;
};

const Card: React.FC<CardProps> = ({
  title,
  children,
  icon: Icon,
  className = "",
}) => (
  <div
    className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 ${className}`}
  >
    {title && (
      <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
        {Icon && <Icon className="h-5 w-5 text-teal-500 mr-2" />}
        {title}
      </h3>
    )}
    {children}
  </div>
);

export default Card;
