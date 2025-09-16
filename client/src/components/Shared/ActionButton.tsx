import React, { ReactNode } from "react";

type ActionButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  gradient: string; // e.g., "from-teal-400 to-green-500"
  className?: string;
};

const ActionButton: React.FC<ActionButtonProps> = ({
  children,
  onClick,
  gradient,
  className = "",
}) => (
  <button
    onClick={onClick}
    className={`bg-gradient-to-r ${gradient} h-10 text-white p-3 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-xl ${className}`}
  >
    {children}
  </button>
);

export default ActionButton;
