import { ArrowLeft } from "lucide-react";
import React from "react";

export const Notification: React.FC<{
  message: string;
  type?: "success" | "error";
  isVisible: boolean;
}> = ({ message, type = "success", isVisible }) => {
  if (!isVisible) return null;

  const bgColor = type === "success" ? "bg-green-500" : "bg-red-500";

  return (
    <div className={`${bgColor} text-white px-4 py-2 text-center text-sm`}>
      {message}
    </div>
  );
};

export const BackButton: React.FC<{
  onClick: () => void;
}> = ({ onClick }) => (
  <button onClick={onClick} className="!mr-2 !text-blue-500">
    <ArrowLeft size={30} />
  </button>
);

export const PageHeader: React.FC<{
  title: string;
  onBack?: () => void;
}> = ({ title, onBack }) => (
  <div className="!flex !items-center !mb-4">
    {onBack && <BackButton onClick={onBack} />}
    <h2 className="!text-xl !font-bold !text-gray-600 !mb-4">{title}</h2>
  </div>
);
export const ActionButton: React.FC<{
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
}> = ({ onClick, className = "", children, disabled = false }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${className} h-10`}
  >
    {children}
  </button>
);

export const Card: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => (
  <div className={`bg-white border rounded-xl p-4 ${className}`}>
    {children}
  </div>
);
